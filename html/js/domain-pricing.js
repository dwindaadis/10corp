'use strict';

// â”€â”€â”€ TLD DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const tlds = [
  // Popular
  { ext:'.com',   reg:'$9.99',  ren:'$12.99', tra:'$9.99',  min:1, priv:true,  cats:['popular'],                 badges:['popular'] },
  { ext:'.net',   reg:'$10.99', ren:'$13.99', tra:'$10.99', min:1, priv:true,  cats:['popular'],                 badges:['popular'] },
  { ext:'.org',   reg:'$9.99',  ren:'$14.99', tra:'$9.99',  min:1, priv:true,  cats:['popular'],                 badges:['popular'] },
  { ext:'.info',  reg:'$2.99',  ren:'$14.99', tra:'$10.99', min:1, priv:true,  cats:['popular','business'],      badges:['sale'] },
  { ext:'.biz',   reg:'$4.99',  ren:'$13.99', tra:'$10.99', min:1, priv:true,  cats:['popular','business'],      badges:[] },
  { ext:'.co',    reg:'$9.99',  ren:'$24.99', tra:'$19.99', min:1, priv:true,  cats:['popular','business'],      badges:['popular'] },
  { ext:'.io',    reg:'$34.99', ren:'$39.99', tra:'$34.99', min:1, priv:false, cats:['popular','tech'],          badges:['popular'] },
  { ext:'.me',    reg:'$5.99',  ren:'$18.99', tra:'$14.99', min:1, priv:true,  cats:['popular','creative'],      badges:['sale'] },
  // Business
  { ext:'.company',    reg:'$9.99',  ren:'$19.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.business',   reg:'$9.99',  ren:'$9.99',  tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.agency',     reg:'$14.99', ren:'$24.99', tra:'$14.99', min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.consulting', reg:'$9.99',  ren:'$29.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.solutions',  reg:'$9.99',  ren:'$24.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.services',   reg:'$9.99',  ren:'$29.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.pro',        reg:'$5.99',  ren:'$14.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.ltd',        reg:'$9.99',  ren:'$19.99', tra:'$9.99',  min:1, priv:true,  cats:['business'],      badges:[] },
  { ext:'.inc',        reg:'$699.99',ren:'$699.99',tra:'$699.99',min:1, priv:true,  cats:['business'],      badges:[] },
  // Tech
  { ext:'.dev',    reg:'$12.99', ren:'$14.99', tra:'$12.99', min:1, priv:true,  cats:['tech'],            badges:['popular'] },
  { ext:'.app',    reg:'$14.99', ren:'$16.99', tra:'$14.99', min:1, priv:true,  cats:['tech'],            badges:['popular'] },
  { ext:'.tech',   reg:'$4.99',  ren:'$39.99', tra:'$29.99', min:1, priv:true,  cats:['tech'],            badges:['sale'] },
  { ext:'.cloud',  reg:'$9.99',  ren:'$19.99', tra:'$9.99',  min:1, priv:true,  cats:['tech'],            badges:[] },
  { ext:'.ai',     reg:'$69.99', ren:'$79.99', tra:'$69.99', min:1, priv:false, cats:['tech'],            badges:['new'] },
  { ext:'.digital',reg:'$9.99',  ren:'$34.99', tra:'$9.99',  min:1, priv:true,  cats:['tech'],            badges:[] },
  { ext:'.software',reg:'$9.99', ren:'$29.99', tra:'$9.99',  min:1, priv:true,  cats:['tech'],            badges:[] },
  { ext:'.codes',  reg:'$9.99',  ren:'$34.99', tra:'$9.99',  min:1, priv:true,  cats:['tech'],            badges:[] },
  { ext:'.host',   reg:'$29.99', ren:'$59.99', tra:'$29.99', min:1, priv:true,  cats:['tech'],            badges:[] },
  // Creative
  { ext:'.design', reg:'$29.99', ren:'$39.99', tra:'$29.99', min:1, priv:true,  cats:['creative'],        badges:['popular'] },
  { ext:'.studio', reg:'$9.99',  ren:'$24.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:[] },
  { ext:'.art',    reg:'$9.99',  ren:'$14.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:['new'] },
  { ext:'.media',  reg:'$9.99',  ren:'$29.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:[] },
  { ext:'.photography', reg:'$9.99', ren:'$29.99', tra:'$9.99', min:1, priv:true, cats:['creative'],      badges:[] },
  { ext:'.blog',   reg:'$2.99',  ren:'$14.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:['sale'] },
  { ext:'.video',  reg:'$9.99',  ren:'$29.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:['new'] },
  { ext:'.press',  reg:'$9.99',  ren:'$39.99', tra:'$9.99',  min:1, priv:true,  cats:['creative'],        badges:[] },
  // eCommerce
  { ext:'.store',  reg:'$1.99',  ren:'$49.99', tra:'$39.99', min:1, priv:true,  cats:['ecommerce'],       badges:['sale','popular'] },
  { ext:'.shop',   reg:'$9.99',  ren:'$29.99', tra:'$24.99', min:1, priv:true,  cats:['ecommerce'],       badges:['popular'] },
  { ext:'.market', reg:'$9.99',  ren:'$19.99', tra:'$9.99',  min:1, priv:true,  cats:['ecommerce'],       badges:[] },
  { ext:'.deals',  reg:'$9.99',  ren:'$24.99', tra:'$9.99',  min:1, priv:true,  cats:['ecommerce'],       badges:[] },
  { ext:'.sale',   reg:'$9.99',  ren:'$24.99', tra:'$9.99',  min:1, priv:true,  cats:['ecommerce'],       badges:[] },
  { ext:'.online', reg:'$1.99',  ren:'$34.99', tra:'$24.99', min:1, priv:true,  cats:['ecommerce','popular'], badges:['sale'] },
  { ext:'.site',   reg:'$1.99',  ren:'$24.99', tra:'$19.99', min:1, priv:true,  cats:['ecommerce','popular'], badges:['sale'] },
  { ext:'.website',reg:'$1.99',  ren:'$19.99', tra:'$14.99', min:1, priv:true,  cats:['ecommerce','popular'], badges:['sale'] },
  // ccTLD
  { ext:'.us',  reg:'$7.99',  ren:'$9.99',  tra:'$7.99',  min:1, priv:false, cats:['cctld'],           badges:['popular'] },
  { ext:'.uk',  reg:'$7.99',  ren:'$9.99',  tra:'$7.99',  min:2, priv:false, cats:['cctld'],           badges:['popular'] },
  { ext:'.ca',  reg:'$14.99', ren:'$14.99', tra:'$14.99', min:1, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.au',  reg:'$14.99', ren:'$14.99', tra:'$14.99', min:2, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.de',  reg:'$9.99',  ren:'$9.99',  tra:'$9.99',  min:1, priv:false, cats:['cctld'],           badges:['popular'] },
  { ext:'.fr',  reg:'$9.99',  ren:'$11.99', tra:'$9.99',  min:1, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.nl',  reg:'$9.99',  ren:'$9.99',  tra:'$9.99',  min:1, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.in',  reg:'$9.99',  ren:'$9.99',  tra:'$9.99',  min:1, priv:false, cats:['cctld'],           badges:['popular'] },
  { ext:'.sg',  reg:'$29.99', ren:'$29.99', tra:'$29.99', min:2, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.eu',  reg:'$9.99',  ren:'$9.99',  tra:'$9.99',  min:1, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.nz',  reg:'$14.99', ren:'$14.99', tra:'$14.99', min:1, priv:false, cats:['cctld'],           badges:[] },
  { ext:'.mx',  reg:'$39.99', ren:'$39.99', tra:'$39.99', min:2, priv:false, cats:['cctld'],           badges:[] },
];

let activeCategory = 'all';

function buildBadges(b) {
  return b.map(tag => {
    if(tag==='popular') return `<span class="badge-popular">Popular</span>`;
    if(tag==='sale')    return `<span class="badge-sale">Sale</span>`;
    if(tag==='new')     return `<span class="badge-new">New</span>`;
    return '';
  }).join('');
}

function renderTable(data) {
  const tbody = document.getElementById('tldBody');
  const noRes = document.getElementById('noResults');
  if(!data.length){ tbody.innerHTML=''; noRes.classList.remove('hidden'); return; }
  noRes.classList.add('hidden');
  tbody.innerHTML = data.map(t => `
    <tr class="tld-row border-t border-gray-100">
      <td class="px-6 py-4">
        <span class="font-heading text-lg font-bold text-primary">${t.ext}</span>${buildBadges(t.badges)}
      </td>
      <td class="px-4 py-4 text-center">
        <span class="font-semibold text-gray-800">${t.reg}</span>
        <span class="block text-xs text-muted">/yr</span>
      </td>
      <td class="px-4 py-4 text-center">
        <span class="font-semibold text-gray-800">${t.ren}</span>
        <span class="block text-xs text-muted">/yr</span>
      </td>
      <td class="px-4 py-4 text-center">
        <span class="font-semibold text-gray-800">${t.tra}</span>
        <span class="block text-xs text-muted">/yr</span>
      </td>
      <td class="px-4 py-4 text-center hidden md:table-cell">
        <span class="text-sm text-gray-600">${t.min} yr</span>
      </td>
      <td class="px-4 py-4 text-center hidden md:table-cell">
        ${t.priv
          ? `<span class="inline-flex items-center gap-1 text-green-600 font-semibold text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Free</span>`
          : `<span class="text-gray-400 text-sm">N/A</span>`
        }
      </td>
      <td class="px-6 py-4 text-center">
        <a href="hostika-darkmode.html" class="inline-block bg-primary text-white text-xs font-heading font-bold px-4 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all tracking-wide">Register</a>
      </td>
    </tr>
  `).join('');
}

function filterTable() {
  const q = document.getElementById('tldSearch').value.toLowerCase().replace(/\s/g,'');
  const filtered = tlds.filter(t => {
    const catMatch = activeCategory === 'all' || t.cats.includes(activeCategory);
    const searchMatch = !q || t.ext.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });
  renderTable(filtered);
}

function filterCat(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterTable();
}

// Init
renderTable(tlds);

// FAQ
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('svg');
  const isOpen = !body.classList.contains('hidden');
  document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
  document.querySelectorAll('.faq-item-wrap button svg').forEach(i => i.style.transform='');
  if(!isOpen){ body.classList.remove('hidden'); icon.style.transform='rotate(180deg)'; }
}

