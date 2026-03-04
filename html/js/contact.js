'use strict';

function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('success-msg');
  const form = document.getElementById('contact-form');
  form.style.opacity = '0.5';
  form.style.pointerEvents = 'none';
  setTimeout(() => {
    form.style.display = 'none';
    msg.classList.add('show');
    msg.classList.remove('hidden');
  }, 600);
}

function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('svg');
  const isOpen = !body.classList.contains('hidden');
  // close all
  document.querySelectorAll('.faq-body').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-item svg').forEach(el => el.style.transform = '');
  if (!isOpen) {
    body.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}

