'use strict';

function tFaq(b){
  const d=b.nextElementSibling, s=b.querySelector('svg'), o=d.style.display==='block';
  document.querySelectorAll('.faq-body').forEach(function(e){e.style.display='none';});
  document.querySelectorAll('.faq-item svg').forEach(function(e){e.style.transform='';});
  if(!o){d.style.display='block';s.style.transform='rotate(180deg)';}
}

