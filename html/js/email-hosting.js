'use strict';

function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('svg');
  const isOpen = !body.classList.contains('hidden');
  document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
  document.querySelectorAll('.faq-item-wrap button svg').forEach(i => i.style.transform = '');
  if (!isOpen) {
    body.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}

function switchTab(provider) {
  // Hide all sections
  document.querySelectorAll('.provider-section').forEach(s => s.classList.remove('active'));
  // Deactivate all tabs
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.add('text-gray-600');
    b.style.borderColor = '';
  });
  // Show selected section
  document.getElementById('section-' + provider).classList.add('active');
  // Activate clicked tab - find by onclick attribute
  document.querySelectorAll('.tab-btn').forEach(b => {
    if (b.getAttribute('onclick') === "switchTab('" + provider + "')") {
      b.classList.add('active');
      b.classList.remove('text-gray-600');
    }
  });
}

