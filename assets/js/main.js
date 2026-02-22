(function () {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('[data-menu]');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll);

  if (menuBtn && header) {
    menuBtn.addEventListener('click', () => {
      header.classList.toggle('open');
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((el) => {
    const target = Number(el.dataset.counter || 0);
    let current = 0;
    const duration = 1400;
    const start = performance.now();

    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      current = Math.floor(target * progress);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  const tabGroups = document.querySelectorAll('[data-tabs]');
  tabGroups.forEach((group) => {
    const buttons = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-panel]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.tab;
        buttons.forEach((b) => b.classList.toggle('active', b === btn));
        panels.forEach((panel) => {
          panel.classList.toggle('active', panel.dataset.panel === key);
        });
      });
    });
  });

  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const prev = slider.querySelector('[data-prev]');
    const next = slider.querySelector('[data-next]');
    let idx = 0;

    const show = (nextIdx) => {
      idx = (nextIdx + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    };

    prev?.addEventListener('click', () => show(idx - 1));
    next?.addEventListener('click', () => show(idx + 1));

    setInterval(() => show(idx + 1), 5000);
  }

  const roiForm = document.querySelector('[data-roi]');
  if (roiForm) {
    const users = roiForm.querySelector('[name="users"]');
    const hours = roiForm.querySelector('[name="hours"]');
    const rate = roiForm.querySelector('[name="rate"]');
    const output = roiForm.querySelector('[data-roi-output]');

    const calc = () => {
      const u = Number(users.value || 0);
      const h = Number(hours.value || 0);
      const r = Number(rate.value || 0);
      const monthly = u * h * r;
      output.textContent = `$${monthly.toLocaleString()} / month`;
    };

    ['input', 'change'].forEach((event) => {
      roiForm.addEventListener(event, calc);
    });
    calc();
  }
})();
