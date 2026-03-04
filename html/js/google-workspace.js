'use strict';

function toggleFaq(btn){
  const body=btn.nextElementSibling,icon=btn.querySelector('svg'),isOpen=!body.classList.contains('hidden');
  document.querySelectorAll('.faq-body').forEach(b=>b.classList.add('hidden'));
  document.querySelectorAll('.faq-item-wrap button svg').forEach(i=>i.style.transform='');
  if(!isOpen){body.classList.remove('hidden');icon.style.transform='rotate(180deg)';}
}
function setBilling(type){
  const isAnnual=type==='annual';
  document.getElementById('btn-monthly').classList.toggle('active',!isAnnual);
  document.getElementById('btn-annual').classList.toggle('active',isAnnual);
  document.getElementById('btn-monthly').classList.toggle('text-gray-500',isAnnual);
  document.getElementById('btn-annual').classList.toggle('text-gray-500',!isAnnual);
  document.querySelectorAll('.price-display').forEach(el=>{
    const v=isAnnual?parseFloat(el.dataset.annual):parseFloat(el.dataset.monthly);
    el.textContent='$'+v.toFixed(2).replace('.00','');
  });
  document.querySelectorAll('.billing-note').forEach(el=>el.classList.toggle('hidden',!isAnnual));
}

