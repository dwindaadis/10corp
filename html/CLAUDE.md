# Hostika Project — CLAUDE.md
# 10Corp Web Services LLC
# Last Updated: 2026

## ⚡ Quick Context
Static HTML5 hosting website. Tailwind CDN (no build tool).
Vanilla JS only. No frameworks. No npm.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📁 Project Structure
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Current Layout (all files flat in root)
hostika/
├── CLAUDE.md                          ← You are here
├── .github/copilot-instructions.md    ← GitHub Copilot agent instructions
│
├── hostika-darkmode.html              ← Homepage (primary)
├── hostika-tailwind.html              ← Homepage (DEPRECATED — do not use)
├── vps-hosting.html
├── shared-hosting.html
├── wordpress-hosting.html
├── wordpress-development.html
├── dedicated-server.html
├── web-design.html
├── website-backup.html
├── website-security.html
├── about.html
├── contact.html
├── portfolio.html
│
├── universal-terms-of-service.html    ← Legal pages (flat, not in subfolder)
├── workspace-service-agreement.html
├── website-builder-service-agreement.html
├── website-security-terms-of-use.html
├── privacy-policy.html
├── refund-policy.html
├── hosting-agreement.html
├── ... (20+ more legal/policy .html)
│
├── pricing-tables.html
├── pricing-tables (1).html            ← ACCIDENTAL DUPLICATE — ignore
└── desktop.ini                        ← Windows system file — ignore

NOTE: No css/, js/, or legal/ folders exist yet.
      No index.html exists — homepage is hostika-darkmode.html.

### Target Layout (create folders as pages are refactored)
hostika/
├── css/
│   ├── main.css                       ← Shared: CSS variables, nav, footer
│   ├── vps.css                        ← VPS page specific
│   ├── dedicated.css                  ← Dedicated server page specific
│   ├── hosting.css                    ← Shared hosting styles
│   ├── legal.css                      ← Legal pages shared styles
│   └── components.css                 ← Reusable: cards, buttons, badges
│
└── js/
    ├── main.js                        ← Shared: dark toggle, mobile menu
    ├── vps.js                         ← VPS plan card hover events
    ├── dedicated.js                   ← Dedicated server interactivity
    └── legal.js                       ← Sidebar toggle, print button

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🛠️ Tech Stack
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Tailwind CSS CDN — config script MUST stay inline in <head>
- Google Fonts: Rajdhani (headings) + Nunito (body)
- Vanilla JS — NO jQuery, NO Alpine, NO React
- HTML5 static pages — NO build tool, NO npm, NO webpack
- Dark mode via: document.documentElement.classList.toggle('dark')

### <head> Load Order (MUST follow this exact order):
1. <meta charset> and <meta viewport>
2. <title>
3. <meta name="description">
4. Open Graph tags
5. <link rel="canonical">
6. Google Fonts <link>          ← BEFORE Tailwind
7. Tailwind CDN <script>
8. Tailwind config <script>     ← MUST be inline, never external
9. <link rel="stylesheet"> css/ files
10. Page-specific <style> only if absolutely necessary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ✅ CODE STANDARDS (MUST FOLLOW)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### HTML5 Semantic Structure
Every page MUST have this skeleton:
  <body>
    <div class="topbar-wrap">...</div>   ← Top announcement bar
    <header>                             ← Sticky nav
      <nav aria-label="Primary navigation">...</nav>
      <nav aria-label="Mobile navigation" id="mob">...</nav>
    </header>
    <main>                               ← ALL page content here
      <section>...</section>
      <section>...</section>
    </main>
    <footer>
      <nav aria-label="Footer navigation">...</nav>
    </footer>
  </body>

### Accessibility (REQUIRED on every element)
- ALL <nav> elements MUST have aria-label
- Mobile menu button: aria-expanded="false" aria-controls="mob"
- Dark toggle button: aria-label="Toggle dark mode" id="darkToggle"
- Print button: aria-label="Print this page" id="printBtn"
- Sidebar toggle: aria-label="Toggle legal documents" id="sidebarToggle"
- Breadcrumb nav: aria-label="Breadcrumb" using <ol> list structure
- Comparison tables: <th scope="col"> on all header cells
- Decorative elements: aria-hidden="true"
- All SVG icons: aria-hidden="true" focusable="false"

### JavaScript Rules
- NO inline onclick, onmouseover, onmouseout, onload in HTML
- ALL events go in js/main.js or page-specific js/ file
- Use addEventListener only
- Mobile menu pattern (js/main.js):
    const menuToggle = document.getElementById('menuToggle');
    const mob = document.getElementById('mob');
    menuToggle?.addEventListener('click', () => {
      mob.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded',
        !mob.classList.contains('hidden'));
    });
- Dark mode pattern (js/main.js):
    document.getElementById('darkToggle')
      ?.addEventListener('click', () =>
        document.documentElement.classList.toggle('dark'));
- Print pattern (js/main.js):
    document.getElementById('printBtn')
      ?.addEventListener('click', () => window.print());

### CSS Rules
- NO inline style="" for brand colors — use Tailwind or css/ classes
- CSS variables in css/main.css :root {}:
    :root {
      --color-primary:      #0a2540;
      --color-accent:       #00b4d8;
      --color-accent-light: #90e0ef;
      --color-accent-dark:  #0077b6;
      --color-surface:      #f0f9ff;
      --color-muted:        #64748b;
      --vps-green:          #0a6624;
      --vps-green-dark:     #0a3d1a;
      --vps-green-bright:   #0d9e38;
      --vps-green-light:    rgba(10, 102, 36, 0.1);
    }
- Tailwind config inline script stays in <head> as-is (required by CDN)
- Inline <style> block: ONLY for Tailwind @apply or keyframe animations

### Security Rules
- ALL <a target="_blank"> MUST have rel="noopener noreferrer"
- NO inline event handlers anywhere
- External scripts: add integrity (SRI) where possible

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🎨 Brand Colors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary (Navy):    #0a2540   → Tailwind: text-primary / bg-primary
Accent (Cyan):     #00b4d8   → Tailwind: text-accent / bg-accent
Accent Light:      #90e0ef   → Tailwind: text-accentLight
Accent Dark:       #0077b6   → Tailwind: text-accentDark
Surface (Lt Blue): #f0f9ff   → Tailwind: bg-surface
Muted (Gray):      #64748b   → Tailwind: text-muted

VPS Green:         #0a6624   → class="vps-accent" / "vps-bg"
VPS Green Dark:    #0a3d1a   → dark plan card background
VPS Green Bright:  #0d9e38   → hover state

Heading Font: Rajdhani       → class="font-heading"
Body Font:    Nunito         → default body

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔒 DO NOT CHANGE (Ever)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Tailwind config <script> in <head> — it MUST stay inline
2. Existing visual design and layout
3. Existing Tailwind class names used for dark mode
4. Dark mode trigger: document.documentElement.classList.toggle('dark')
5. Google Fonts import URLs
6. File naming convention (kebab-case .html)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📋 Per-Page SEO Checklist
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every HTML file MUST have in <head>:
  <meta name="description" content="150 chars max, unique per page">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="[Page Title] | Hostika">
  <meta property="og:description" content="[same as meta desc]">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://hostika.com/[page].html">
  <link rel="canonical" href="https://hostika.com/[page].html">

Copyright footer text: © 2026 All Rights Reserved by Hostika Inc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🚀 Common Claude Tasks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to "fix all files":
  → Apply SHARED FIXES to all HTML files
  → Read CLAUDE.md standards before making any change
  → Never redesign — only fix standards violations

When creating a new page:
  → Copy nav/header/footer from vps-hosting.html
  → Wrap all content in <main>
  → Add all SEO meta tags
  → Link to css/main.css and js/main.js
  → Create css/ and js/ dirs if they don't exist yet

When fixing inline JS:
  → Move handler to js/main.js using addEventListener
  → Add appropriate id to the HTML element
  → Add aria attributes to interactive elements

When refactoring a page to multi-file:
  → Extract <style> block → css/<page>.css
  → Extract inline JS handlers → js/<page>.js
  → Replace hardcoded hex colors with CSS custom properties
  → Replace inline style="" with CSS classes
  → Keep Tailwind config <script> inline in <head>
  → Add SEO meta tags, canonical, Open Graph
  → Wrap content in <main>
  → Add aria-labels to all <nav> elements
  → Add scope="col" to all <th> elements

Homepage note:
  → hostika-darkmode.html is the canonical homepage
  → No index.html exists — links use hostika-darkmode.html directly
  → hostika-tailwind.html is deprecated — never link to it
