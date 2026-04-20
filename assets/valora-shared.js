// VALORA shared JS — countdown, FR/EN, fade-in
(function () {
  // ---------- Countdown to 13 May 2027, 09:00 Martinique (UTC-4) ----------
  function updateCountdown() {
    const target = new Date('2027-05-13T13:00:00Z').getTime(); // 09:00 AST
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    document.querySelectorAll('[data-countdown]').forEach(el => {
      const format = el.dataset.countdown;
      if (format === 'compact') {
        el.textContent = `J−${days}`;
      } else if (format === 'hours') {
        el.textContent = `${days}j ${String(hours).padStart(2,'0')}h`;
      } else {
        el.innerHTML = `<span>${days}</span> jours`;
      }
    });
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // ---------- Language toggle (cosmetic) ----------
  document.querySelectorAll('.lang').forEach(group => {
    group.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        group.querySelectorAll('button').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        // persist
        try { localStorage.setItem('valora_lang', b.dataset.lang); } catch (e) {}
        // Toggle bilingual content if present
        const lang = b.dataset.lang;
        document.querySelectorAll('[data-fr]').forEach(el => {
          if (lang === 'EN' && el.dataset.en) el.textContent = el.dataset.en;
          else if (el.dataset.fr) el.textContent = el.dataset.fr;
        });
      });
    });
    // restore
    try {
      const saved = localStorage.getItem('valora_lang');
      if (saved) {
        const b = group.querySelector(`[data-lang="${saved}"]`);
        if (b) b.click();
      }
    } catch (e) {}
  });

  // ---------- Fade-up on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
})();
