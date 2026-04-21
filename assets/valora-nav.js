/* Valora shared nav - injected into #nav-mount on every page.
   No countdown. Links: Accueil, Édition 2027, Pôles, Conférences,
   Caraïbe, Contact, À propos. Right side: FR/EN + Kit média (vert). */
(function () {
  var mount = document.getElementById('nav-mount');
  if (!mount) return;

  // Figure out which page we're on for .active styling
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var params = new URLSearchParams(location.search);
  function act(match) { return path === match ? ' class="active"' : ''; }
  var poleActive = (path === 'pole.html' || path === 'poles.html') ? ' class="active"' : '';

  var links = [
    { href: 'index.html',         label: 'Accueil',           key: 'index.html' },
    { href: 'edition-2027.html',  label: 'Édition 2027',      key: 'edition-2027.html' },
    { href: 'poles.html',         label: 'Pôles',             key: 'poles.html' },
    { href: 'conferences.html',   label: 'Conférences',       key: 'conferences.html' },
    { href: 'caraibe.html',       label: 'Caraïbe',           key: 'caraibe.html' },
    { href: 'contact.html',       label: 'Contact',           key: 'contact.html' },
    { href: 'a-propos.html',      label: 'À propos',          key: 'a-propos.html' }
  ];

  var linksHTML = links.map(function (l) {
    var isPoles = (l.key === 'poles.html' && (path === 'pole.html' || path === 'poles.html'));
    var cls = (path === l.key || isPoles) ? ' class="active"' : '';
    return '<a href="' + l.href + '"' + cls + '>' + l.label + '</a>';
  }).join('');

  // On the kit-media page we skip that CTA button (we're already there)
  var showKitCTA = !(path === 'kit-media.html');
  var showJobCTA = !(path === 'job-dating.html');
  var ctaHTML =
    (showJobCTA ? '<a href="job-dating.html" class="btn-expose">Job Dating →</a>' : '') +
    (showKitCTA ? '<a href="kit-media.html" class="btn-expose btn-expose-rose">Kit média →</a>' : '');

  mount.outerHTML =
    '<nav class="nav">' +
      '<div class="nav-inner">' +
        '<a href="index.html" class="logo">' +
          '<img src="assets/valora-logo.png" alt="Valora"/>' +
          '<span class="tag">2027</span>' +
        '</a>' +
        '<div class="nav-links">' + linksHTML + '</div>' +
        '<div class="nav-right">' +
          '<div class="lang"><button class="on" data-lang="FR">FR</button><button data-lang="EN">EN</button></div>' +
          ctaHTML +
        '</div>' +
      '</div>' +
    '</nav>';

  // ---------- FR / EN toggle ----------
  // (Moved here from valora-shared.js because the nav is injected AFTER shared.js runs,
  //  so binding there would find no .lang element.)
  function showToast(msg) {
    var t = document.querySelector('.valora-toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'valora-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    // force reflow so transition re-runs
    // eslint-disable-next-line no-unused-expressions
    t.offsetWidth;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }

  function countBilingualNodes() {
    return document.querySelectorAll('[data-fr][data-en]').length;
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-fr]').forEach(function (el) {
      if (lang === 'EN' && el.dataset.en) el.textContent = el.dataset.en;
      else if (el.dataset.fr) el.textContent = el.dataset.fr;
    });
    document.querySelectorAll('[data-fr-placeholder]').forEach(function (el) {
      var val = (lang === 'EN' && el.dataset.enPlaceholder) ? el.dataset.enPlaceholder : el.dataset.frPlaceholder;
      if (val) el.setAttribute('placeholder', val);
    });
    document.documentElement.setAttribute('lang', lang === 'EN' ? 'en' : 'fr');
  }

  document.querySelectorAll('.lang').forEach(function (group) {
    var buttons = group.querySelectorAll('button');
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        buttons.forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        var lang = b.dataset.lang;
        try { localStorage.setItem('valora_lang', lang); } catch (e) {}
        applyLang(lang);
        // Feedback — English translations are a work-in-progress on most pages.
        if (lang === 'EN') {
          var n = countBilingualNodes();
          if (n === 0) {
            showToast('EN — translation coming soon');
          } else {
            showToast('English · ' + n + ' blocks translated');
          }
        } else {
          showToast('Français');
        }
      });
    });
    // Restore saved choice (silent — no toast on page load)
    try {
      var saved = localStorage.getItem('valora_lang');
      if (saved && saved !== 'FR') {
        var target = group.querySelector('[data-lang="' + saved + '"]');
        if (target) {
          buttons.forEach(function (x) { x.classList.remove('on'); });
          target.classList.add('on');
          applyLang(saved);
        }
      }
    } catch (e) {}
  });
})();
