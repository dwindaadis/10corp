'use strict';

function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('svg');
  const isOpen = !body.classList.contains('hidden');
  document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
  document.querySelectorAll('.faq-item-wrap button svg').forEach(i => i.style.transform = '');
  if (!isOpen) { body.classList.remove('hidden'); icon.style.transform = 'rotate(180deg)'; }
}

