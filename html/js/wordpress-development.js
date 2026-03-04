'use strict';

function toggleFaq(btn){
  const body=btn.nextElementSibling;
  const icon=btn.querySelector('svg');
  const isOpen=body.style.display==='block';
  document.querySelectorAll('.faq-body').forEach(el=>el.style.display='none');
  document.querySelectorAll('.faq-item svg').forEach(el=>el.style.transform='');
  if(!isOpen){body.style.display='block';icon.style.transform='rotate(180deg)';}
}

