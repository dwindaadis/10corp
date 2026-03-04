'use strict';

// Scroll reveal
  const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Scroll to top button
  window.addEventListener('scroll', () => {
    document.getElementById('stt').style.opacity = window.scrollY > 300 ? '1' : '0';
  });

  // Toggle pricing
  function switchPricing(group) {
    const isMonthly = document.getElementById('toggle' + group).checked;
    document.querySelectorAll('.annual-price-' + group).forEach(el => el.classList.toggle('hidden', isMonthly));
    document.querySelectorAll('.monthly-price-' + group).forEach(el => el.classList.toggle('hidden', !isMonthly));
  }

