(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Reveal sections only once as they enter the viewport.
      const revealEls = [...document.querySelectorAll('.reveal')];
      if (!reduced && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          }
        }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
        revealEls.forEach(el => observer.observe(el));
      } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
      }

      const progress = document.querySelector('.scroll-progress span');
      const orb = document.querySelector('.ambient-orb');
      let ticking = false;

      function updateScrollEffects() {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        const y = Math.min(max, Math.max(0, scrollY));
        if (progress) progress.style.transform = `scaleX(${y / max})`;

        // Very restrained parallax so the page feels alive without becoming distracting.
        if (!reduced && orb) {
          orb.style.transform = `translate3d(0, ${Math.round(y * 0.08)}px, 0)`;
        }

        const hero = document.querySelector('.hero-shot');
        if (!reduced && hero && y < innerHeight * 1.2) {
          const amount = Math.min(18, y * 0.025);
          hero.style.transform = `perspective(1200px) rotateY(-3deg) rotateX(1deg) translate3d(0, ${amount}px, 0)`;
        }

        ticking = false;
      }

      addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollEffects);
          ticking = true;
        }
      }, { passive:true });
      updateScrollEffects();

      // Pointer-responsive depth on showcase cards, desktop only.
      if (!reduced && matchMedia('(pointer:fine)').matches) {
        document.querySelectorAll('[data-tilt]').forEach(card => {
          card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - .5;
            const py = (e.clientY - r.top) / r.height - .5;
            card.style.transform = `perspective(1000px) rotateX(${(-py * 2.1).toFixed(2)}deg) rotateY(${(px * 2.6).toFixed(2)}deg) translateY(-2px)`;
          });
          card.addEventListener('pointerleave', () => {
            card.style.transform = '';
          });
        });
      }
    })();


/* Builder companion ------------------------------------------------ */
(() => {
  const root = document.querySelector('[data-connect]');
  if (!root) return;

  const toggle = root.querySelector('[data-connect-toggle]');
  const panel = root.querySelector('[data-connect-panel]');
  const close = root.querySelector('[data-connect-close]');
  const pet = root.querySelector('[data-companion]');
  const status = root.querySelector('[data-connect-status]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastFocus = null;

  function openPanel() {
    if (!panel.hidden) return;
    lastFocus = document.activeElement;
    panel.hidden = false;
    panel.classList.remove('is-opening');
    requestAnimationFrame(() => panel.classList.add('is-opening'));
    toggle.setAttribute('aria-expanded', 'true');
    close.focus();
  }

  function closePanel() {
    if (panel.hidden) return;
    panel.hidden = true;
    panel.classList.remove('is-opening');
    toggle.setAttribute('aria-expanded', 'false');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  toggle.addEventListener('click', () => panel.hidden ? openPanel() : closePanel());
  close.addEventListener('click', closePanel);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
  });

  document.addEventListener('pointerdown', (event) => {
    if (!panel.hidden && !root.contains(event.target)) closePanel();
  });

  // A tiny "aware" gaze. It only moves the eyes a couple of pixels and is
  // disabled for reduced-motion users and coarse pointers.
  if (!reducedMotion && matchMedia('(pointer:fine)').matches && pet) {
    document.addEventListener('pointermove', (event) => {
      const r = pet.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const distance = Math.hypot(dx, dy);

      if (distance < 360) {
        const x = Math.max(-2.2, Math.min(2.2, dx / 110));
        const y = Math.max(-1.8, Math.min(1.8, dy / 125));
        pet.style.setProperty('--look-x', `${x.toFixed(2)}px`);
        pet.style.setProperty('--look-y', `${y.toFixed(2)}px`);
      } else {
        pet.style.setProperty('--look-x', '0px');
        pet.style.setProperty('--look-y', '0px');
      }
    }, { passive:true });
  }

  root.querySelectorAll('[data-copy-handle]').forEach((button) => {
    button.addEventListener('click', async () => {
      const handle = button.dataset.copyHandle || '';
      const platform = button.dataset.platform || 'Platform';

      try {
        await navigator.clipboard.writeText(handle);
        status.textContent = `${platform} handle copied: @${handle}`;
      } catch {
        status.textContent = `${platform}: @${handle}`;
      }
    });
  });
})();
