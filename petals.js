(() => {
  const layer = document.querySelector('.petals');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function update() {
    layer.replaceChildren();
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
  }

  document.addEventListener('visibilitychange', () => {
    layer.classList.toggle('paused', document.hidden);
  });
  motion.addEventListener('change', update);
  update();
})();
