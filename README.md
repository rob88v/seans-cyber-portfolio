# Sean Bailey Portfolio

A professional, evidence-based cybersecurity and IT infrastructure portfolio built for **Sean Bailey**.

This site is designed to present verified experience, certifications, and hands-on lab work clearly for recruiters, hiring managers, and technical reviewers.

## Purpose

This portfolio was built to showcase:

- IT support and infrastructure experience
- systems administration interests
- cybersecurity learning and practical lab work
- certifications backed by real evidence
- homelab projects using Proxmox, Docker, Windows Server 2025, and Active Directory

The focus is credibility, clarity, and practical evidence — not exaggerated claims.

## Verified Profile Summary

This portfolio is based on the following verified information:

- **Name:** Sean Bailey
- **Current Role:** Technology Services Specialist II
- **Current Employer:** Florida SouthWestern State College
- **Education:** B.S. in Computer Information Systems, Bethune-Cookman University
- **Certifications:**
  - CompTIA A+
  - CompTIA Network+
  - CompTIA Security+
  - CompTIA Linux+
  - CompTIA Secure Infrastructure Specialist (CSIS)
- **Hands-on Lab Areas:**
  - Proxmox VE
  - Docker and Docker Compose
  - Windows Server 2025
  - Active Directory
  - Windows DNS
  - user and group management
  - domain authentication
  - reverse proxy configuration
  - SSL certificates
  - monitoring
  - storage
  - troubleshooting

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## File Guide

### `index.html`

The main structure of the portfolio.

This file contains:

- hero section
- about section
- skills section
- projects section
- experience timeline
- certifications section
- contact section

Important editable sections in the file are clearly commented so you can find them quickly.

### `css/styles.css`

The full visual styling for the site.

This file controls:

- layout
- colors
- spacing
- typography
- card styles
- responsive behavior
- dark theme support
- accessibility styling such as focus states

### `js/script.js`

The JavaScript for interactive behavior.

This file handles:

- mobile navigation toggle
- theme switching
- saved theme preference
- active navigation link highlighting
- footer year update

### `README.md`

This file explains what the portfolio is, how it is organized, how to run it locally, and how to update it later.

## How to Run the Portfolio Locally

This is a static website.

You do **not** need:

- a framework
- a package manager
- a build step
- a backend server

### Option 1: Open Directly

1. Keep the file structure intact.
2. Double-click `index.html`.
3. The portfolio should open in your web browser.

### Option 2: Use a Local Server

If you prefer to preview it with a simple local server, you can use Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to Update the Portfolio

This site was structured to be easy to edit even if you are not a web developer.

### Update Your Name

Open `index.html` and look for the commented areas around the hero and header sections.

You can update:

- page title
- hero heading
- brand text
- footer text

### Update the About Section

Open:

```text
index.html
```

Find the **About Me** section and replace the text with a revised summary.

Keep this section focused on:

- your current role
- your direction in IT / cybersecurity
- the kind of work you are building toward
- your hands-on lab experience

### Update Projects

Open:

```text
index.html
```

Find the **Projects & Homelab** section.

Each project follows a consistent structure:

- Project Name
- Problem
- Approach
- Tools
- Result
- What I Learned

When adding a new project, follow the same structure so the site stays consistent.

### Add Another Cybersecurity Project

Copy one existing project card in `index.html` and update the details.

Recommended format:

- **Project Name**
- **Security Domain** or technical area
- **Problem**
- **Approach**
- **Tools**
- **Result**
- **What I Learned**

Good project examples to add later:

- Wazuh lab deployment
- Active Directory hardening lab
- SIEM walkthrough
- Windows event log monitoring project
- vulnerability management lab
- phishing triage tool improvements

### Update Skills

Open:

```text
index.html
```

Find the **Core Skills** section.

Only add skills that are supported by:

- work experience
- certifications
- lab work
- documented projects

Avoid listing tools or concepts you cannot explain in an interview.

### Update Certifications

Open:

```text
index.html
```

Find the **Certifications** section and add, remove, or rename entries as needed.

Only include certifications you have earned or are clearly preparing for.

### Update Social Links and Contact Details

Open:

```text
index.html
```

Find the **Contact** section.

Update:

- LinkedIn URL
- Gitea / GitHub URL
- email address

If you publish the portfolio publicly, make sure you are comfortable sharing that information.

### Update Colors and Theme

Open:

```text
css/styles.css
```

At the top of the file, edit the CSS variables in `:root`.

The easiest values to change are:

- `--accent`
- `--accent-hover`
- `--bg`
- `--text`

### Update Layout or Spacing

Also in `css/styles.css`, you can adjust:

- section spacing
- card spacing
- container width
- font sizes
- responsive breakpoints

### Update Interactive Behavior

Open:

```text
js/script.js
```

You can edit:

- mobile menu behavior
- dark/light theme logic
- local storage key names
- scroll-based navigation highlighting

## Accessibility Notes

This portfolio includes:

- semantic HTML structure
- keyboard-accessible navigation
- visible focus states
- responsive design
- reduced-motion support
- secure external links using `rel="noopener noreferrer"`

If you add images later, remember to include clear `alt` text.

## Security and Privacy Notes

Because this is a professional public portfolio:

- do not publish private personal data unless you want it public
- do not add confidential employer information
- do not include internal screenshots that expose sensitive systems
- sanitize any future lab screenshots before uploading
- do not exaggerate project scope or job responsibilities

## Suggested Next Improvements

To make the portfolio stronger over time, consider adding:

- screenshots of your homelab
- a dedicated project write-up for Active Directory
- a dedicated project write-up for Proxmox architecture
- a stronger project repository for the phishing analyser
- documentation for monitoring or logging work
- a downloadable resume link
- a GitHub or Gitea project showcase section

## Publishing Options

You can publish this static portfolio using:

- GitHub Pages
- Cloudflare Pages
- Netlify
- your own homelab web server
- any basic static host

Before publishing, check:

- links work correctly
- no placeholder text remains
- contact details are correct
- project claims are accurate
- screenshots are sanitized

## Maintenance Advice

A portfolio is strongest when it is updated as you grow.

A good rhythm is to update it whenever you:

- complete a certification
- finish a new homelab project
- publish project documentation
- change roles
- improve your tooling

## Final Reminder

This portfolio is strongest when it stays:

- honest
- evidence-based
- easy to scan
- easy to update
- aligned with your real technical growth

That is what makes it credible to recruiters and useful in interviews.
