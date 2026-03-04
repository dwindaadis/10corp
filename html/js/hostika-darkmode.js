'use strict';

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     DARK MODE â€” inject / remove a <style> block
     This beats Tailwind specificity 100%
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  const DARK_CSS = `
    body { background-color: #07101f !important; color: #c9deff !important; }

    /* top bar */
    body > div.bg-primary { background-color: #020b1c !important; }

    /* navbar */
    header { background: rgba(7,16,31,0.98) !important; box-shadow: 0 1px 0 rgba(0,180,216,0.15) !important; }
    header a.nav-link, header nav a { color: #93c5fd !important; }
    header .text-primary:not(.bg-primary) { color: #93c5fd !important; }

    /* dropdown */
    header nav .absolute.bg-white {
      background: #0d1e35 !important;
      border: 1px solid rgba(0,180,216,0.2) !important;
      box-shadow: 0 8px 30px rgba(0,0,0,0.5) !important;
    }
    header nav .absolute.bg-white a { color: #94a3b8 !important; }
    header nav .absolute.bg-white a:hover { background: rgba(0,180,216,0.1) !important; }

    /* mobile menu */
    #mobile-menu { background: #0d1e35 !important; border-color: rgba(0,180,216,0.12) !important; }
    #mobile-menu a { color: #93c5fd !important; }

    /* hero wave fill */
    .hero-bg svg path { fill: #07101f !important; }

    /* all white / surface backgrounds */
    .bg-white { background-color: #0d1e35 !important; }
    .bg-surface { background-color: #07101f !important; }
    section.py-24.bg-white, section.py-16.bg-white, section.py-12.bg-white { background-color: #0d1e35 !important; }
    section.py-24.bg-surface, section.py-12.bg-surface { background-color: #07101f !important; }

    /* text colors */
    .text-primary { color: #7dd3fc !important; }
    .text-muted, .text-gray-700 { color: #7a9ab5 !important; }
    .text-gray-800 { color: #c9deff !important; }
    .text-gray-400, .text-gray-300 { color: #4e6a85 !important; }

    /* borders */
    .border-gray-100 { border-color: rgba(0,180,216,0.12) !important; }
    hr { border-color: rgba(0,180,216,0.12) !important; }

    /* cards â€” feature, pricing, testimonial */
    .feature-card, .pricing-card.bg-white, .testimonial-card.bg-white {
      background-color: #0d1e35 !important;
      border-color: rgba(0,180,216,0.12) !important;
    }
    .feature-card h3 { color: #bfdbfe !important; }
    .feature-card:hover { box-shadow: 0 16px 40px rgba(0,180,216,0.12) !important; }

    /* pricing outline buttons */
    .pricing-card a[class*="border-2"][class*="border-primary"] {
      border-color: #00b4d8 !important; color: #00b4d8 !important;
    }
    .pricing-card a[class*="border-2"][class*="border-primary"]:hover {
      background-color: #00b4d8 !important; color: #07101f !important;
    }

    /* testimonials */
    .testimonial-card .italic { color: #8baabf !important; }

    /* about section white boxes */
    section .bg-white.rounded-xl { background-color: #0f2237 !important; border-color: rgba(0,180,216,0.12) !important; }
    section .bg-white.rounded-xl span.text-primary { color: #7dd3fc !important; }

    /* ticker */
    section.border-t.border-b.bg-white { background-color: #0a1828 !important; border-color: rgba(0,180,216,0.1) !important; }

    /* footer */
    footer.bg-primary { background-color: #020b1c !important; }

    /* stat cards keep their gradient */

    /* toggle button dark state */
    #dm-btn { background: rgba(0,212,255,0.12) !important; color: #00d4ff !important; border-color: rgba(0,212,255,0.4) !important; }

    /* smooth */
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

  // Restore on load
  window.addEventListener('DOMContentLoaded', function() {
    if (isDark) applyDark();
  });

// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Smooth scroll to top button (bonus)
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scroll-top');
    if (btn) {
      btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    }
  });

