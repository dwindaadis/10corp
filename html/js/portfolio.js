'use strict';

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     DARK MODE â€” same logic as main site
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  const DARK_CSS = `
    body { background-color: #07101f !important; color: #c9deff !important; }
    body > div.bg-primary { background-color: #020b1c !important; }
    header { background: rgba(7,16,31,0.98) !important; box-shadow: 0 1px 0 rgba(0,180,216,0.15) !important; }
    header a.nav-link, header nav a { color: #93c5fd !important; }
    header .text-primary:not(.bg-primary) { color: #93c5fd !important; }
    header nav .absolute.bg-white { background: #0d1e35 !important; border: 1px solid rgba(0,180,216,0.2) !important; box-shadow: 0 8px 30px rgba(0,0,0,0.5) !important; }
    header nav .absolute.bg-white a { color: #94a3b8 !important; }
    header nav .absolute.bg-white a:hover { background: rgba(0,180,216,0.1) !important; }
    #mobile-menu { background: #0d1e35 !important; border-color: rgba(0,180,216,0.12) !important; }
    #mobile-menu a { color: #93c5fd !important; }
    .page-hero svg path { fill: #07101f !important; }
    .bg-white { background-color: #0d1e35 !important; }
    .bg-surface { background-color: #07101f !important; }
    section.py-24.bg-white, section.py-16.bg-white, section.py-12.bg-white { background-color: #0d1e35 !important; }
    section.py-24.bg-surface, section.py-12.bg-surface { background-color: #07101f !important; }
    .text-primary { color: #7dd3fc !important; }
    .text-muted, .text-gray-700 { color: #7a9ab5 !important; }
    .text-gray-800 { color: #c9deff !important; }
    .text-gray-400, .text-gray-300 { color: #4e6a85 !important; }
    .border-gray-100 { border-color: rgba(0,180,216,0.12) !important; }
    .filter-btn { color: #7a9ab5 !important; border-color: rgba(0,180,216,0.25) !important; }
    .filter-btn.active, .filter-btn:hover { color: #fff !important; }
    section.border-t.border-b.bg-white { background-color: #0a1828 !important; border-color: rgba(0,180,216,0.1) !important; }
    footer.bg-primary { background-color: #020b1c !important; }
    #dm-btn { background: rgba(0,212,255,0.12) !important; color: #00d4ff !important; border-color: rgba(0,212,255,0.4) !important; }
    * { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important; }
  `;

  let isDark = localStorage.getItem('hostika-dark') === '1';

  function applyDark() {
    document.getElementById('dark-style').textContent = DARK_CSS;
    document.getElementById('dm-btn').textContent = 'â˜€ï¸ Light';
  }
  function applyLight() {
    document.getElementById('dark-style').textContent = '';
    document.getElementById('dm-btn').textContent = 'ðŸŒ™ Dark';
  }
  function toggleDark() {
    isDark = !isDark;
    localStorage.setItem('hostika-dark', isDark ? '1' : '0');
    isDark ? applyDark() : applyLight();
  }
  window.addEventListener('DOMContentLoaded', function() {
    if (isDark) applyDark();
  });

  /* â”€â”€â”€ PORTFOLIO FILTER â”€â”€â”€ */
  function filterPortfolio(cat, btn) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    document.querySelectorAll('#portfolio-grid .port-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn .4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  /* â”€â”€â”€ SCROLL REVEAL â”€â”€â”€ */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

