/* ============================================================
   Sean Bailey — Portfolio JavaScript
   File: js/script.js
   ============================================================
   Features:
   1. Mobile navigation toggle
   2. Theme toggle with localStorage persistence
   3. Auto-close mobile nav on link click
   4. Footer year injection
   5. Active nav link highlighting on scroll
   ============================================================ */

(() => {
  'use strict';

  /* ============================================================
     ELEMENT SELECTORS
     ============================================================ */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const yearEl = document.getElementById('year');
  const sections = document.querySelectorAll('main section[id]');

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ============================================================
     THEME TOGGLE
     - Stores preference in localStorage
     - Defaults to dark if user prefers dark and no saved preference exists
     ============================================================ */
  const STORAGE_KEY = 'sean-bailey-portfolio-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);

    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
      themeToggle.setAttribute('title', theme === 'dark' ? 'Light mode' : 'Dark mode');
    }
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return prefersDark.matches ? 'dark' : 'light';
  }

  setTheme(getInitialTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
    });
  }

  /* ============================================================
     MOBILE NAVIGATION
     ============================================================ */
  function closeMobileNav() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  function toggleMobileNav() {
    if (!navMenu || !navToggle) return;
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleMobileNav);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    document.addEventListener('click', (event) => {
      const clickedInsideNav = event.target.closest('.site-nav');
      if (!clickedInsideNav && navMenu.classList.contains('open')) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }

  /* ============================================================
     ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
     ============================================================ */
  if (sections.length && navLinks.length) {
    const sectionMap = new Map();

    sections.forEach((section) => {
      sectionMap.set(`#${section.id}`, section);
    });

    function updateActiveNavLink() {
      const scrollPosition = window.scrollY + 120;
      let currentId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentId = `#${section.id}`;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === currentId;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    window.addEventListener('resize', updateActiveNavLink);
  }

  /* ============================================================
     SYSTEM THEME CHANGES
     - Only auto-update if the user has not manually chosen a theme yet
     ============================================================ */
  prefersDark.addEventListener('change', (event) => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (!savedTheme) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  });
})();
