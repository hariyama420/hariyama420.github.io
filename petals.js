(() => {
  const layer = document.querySelector('.petals');
  const toggle = document.querySelector('.petals-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = true;

  function update() {
    layer.replaceChildren();
    toggle.hidden = motion.matches;
    if (motion.matches) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 18; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.setProperty('--left', `${Math.random() * 100}%`);
      petal.style.setProperty('--opacity', (0.12 + Math.random() * 0.22).toFixed(2));
      petal.style.setProperty('--duration', `${18 + Math.random() * 16}s`);
      petal.style.setProperty('--delay', `${-Math.random() * 34}s`);
      fragment.append(petal);
    }
    layer.append(fragment);
    layer.hidden = !enabled;
  }

  toggle.addEventListener('click', () => {
    enabled = !enabled;
    layer.hidden = !enabled;
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = `лепестки: ${enabled ? 'вкл' : 'выкл'}`;
  });
  document.addEventListener('visibilitychange', () => {
    layer.classList.toggle('paused', document.hidden);
  });
  motion.addEventListener('change', update);
  update();
})();
