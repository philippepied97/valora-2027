// Rendu du pôle selon ?id=
(function(){
  const params = new URLSearchParams(location.search);
  const id = (params.get('id') || '01').padStart(2, '0');
  const d = (window.POLES_DATA || {})[id];
  if (!d) return;

  document.title = 'Pôle ' + d.num + ' · ' + d.crumb + ' - Valora 2027';
  document.body.setAttribute('data-screen-label', 'Pôle ' + d.num + ' · ' + d.crumb);

  const $ = (s) => document.querySelector(s);
  $('#crumb').textContent = 'Accueil · Pôles · ' + d.crumb;
  $('#p-num').textContent = d.num;
  $('#p-title').innerHTML = d.title;
  $('#p-lead').textContent = d.lead;

  const meta = $('#p-meta');
  meta.innerHTML = d.meta.map(m =>
    `<div><div class="k">${m.k}</div><div class="v">${m.v}</div></div>`
  ).join('');

  // Pills de navigation entre pôles
  const nav = $('#p-nav');
  window.POLE_ORDER.forEach(pid => {
    const p = window.POLES_DATA[pid];
    if (!p) return;
    const a = document.createElement('a');
    a.href = 'pole.html?id=' + pid;
    a.className = 'pole-pill' + (pid === id ? ' active' : '');
    a.textContent = pid + ' · ' + p.crumb;
    nav.appendChild(a);
  });

  const figs = $('#p-figs');
  figs.innerHTML = d.figs.map(f =>
    `<div class="fig">
      <div class="big">${f.big}${f.u ? `<span class="u">${f.u}</span>` : ''}</div>
      <div class="cap">${f.cap}</div>
      <div class="src">${f.src}</div>
    </div>`
  ).join('');

  $('#p-article').innerHTML = d.article;
})();
