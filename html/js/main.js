/* ============================================
   Hostika — Shared JavaScript
   10Corp Web Services LLC
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // --- Dark Mode Toggle ---
  const darkToggle = document.getElementById('darkToggle');
  darkToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  // --- Off-Canvas Mobile Menu ---
  const menuPanel = document.getElementById('mobile-menu-panel');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menuOpen = document.getElementById('menuToggle') || document.getElementById('hamburger');
  const menuClose = document.getElementById('menuClose');

  function openMobileMenu() {
    if (!menuPanel) return;
    menuPanel.classList.add('is-open');
    menuOverlay?.classList.add('is-open');
    document.body.classList.add('mobile-menu-active');
    menuOpen?.setAttribute('aria-expanded', 'true');
    menuClose?.focus();
  }

  function closeMobileMenu() {
    if (!menuPanel) return;
    menuPanel.classList.remove('is-open');
    menuOverlay?.classList.remove('is-open');
    document.body.classList.remove('mobile-menu-active');
    menuOpen?.setAttribute('aria-expanded', 'false');
    menuOpen?.focus();
  }

  menuOpen?.addEventListener('click', openMobileMenu);
  menuClose?.addEventListener('click', closeMobileMenu);
  menuOverlay?.addEventListener('click', closeMobileMenu);

  // --- Close Mobile Menu on Escape Key ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // --- Sidebar Toggle (Legal Pages) ---
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarPanel = document.getElementById('sidebar-panel');
  sidebarToggle?.addEventListener('click', () => {
    sidebarPanel?.classList.toggle('hidden');
  });

  // --- Print Buttons ---
  document.querySelectorAll('[data-action="print"]').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });

  // --- FAQ Accordion ---
  document.querySelectorAll('[data-action="toggle-faq"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const icon = btn.querySelector('svg');
      const isOpen = !body.classList.contains('hidden');

      // Close all FAQ bodies
      document.querySelectorAll('.faq-body').forEach((el) => {
        el.classList.add('hidden');
      });
      document.querySelectorAll('[data-action="toggle-faq"] svg').forEach((el) => {
        el.style.transform = '';
      });

      if (!isOpen) {
        body.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // --- Tab Switching (Email Hosting, Google Workspace, Microsoft 365) ---
  document.querySelectorAll('[data-action="switch-tab"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      // Deactivate all tab buttons
      document.querySelectorAll('[data-action="switch-tab"]').forEach((b) => {
        b.classList.remove('active');
      });
      // Hide all provider sections
      document.querySelectorAll('.provider-section').forEach((s) => {
        s.classList.remove('active');
      });
      // Activate clicked tab and corresponding section
      btn.classList.add('active');
      const section = document.getElementById(target);
      if (section) section.classList.add('active');
    });
  });

  // --- Billing Period Toggle (Google Workspace, Microsoft 365) ---
  document.querySelectorAll('[data-action="set-billing"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const period = btn.dataset.period;
      document.querySelectorAll('[data-action="set-billing"]').forEach((b) => {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      document.querySelectorAll('.billing-section').forEach((s) => {
        s.classList.remove('active');
      });
      const section = document.getElementById('billing-' + period);
      if (section) section.classList.add('active');
    });
  });

  // --- Scroll to Top ---
  document.querySelectorAll('[data-action="scroll-top"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // --- Domain Search Placeholder ---
  document.querySelectorAll('[data-action="domain-search"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.alert('Domain search would be handled here.');
    });
  });

  // --- Scroll Reveal (IntersectionObserver) ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach((el) => revealObserver.observe(el));
  }

  // --- Scroll-to-Top Button Show/Hide ---
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });
  }

});
