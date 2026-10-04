/* main.js — Portfolio
 * Vanilla JS only. Features:
 * 1. Active nav link (IntersectionObserver)
 * 2. Mobile menu (toggle, Esc-to-close)
 * 3. Reveal animation (.reveal elements)
 * 4. Reveal-group animation (.reveal-group — section headers stagger)
 * 5. Scroll progress bar
 */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. ACTIVE NAV LINK ─────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  if (sections.length && navLinks.length) {
    const activeMap = new Map();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          activeMap.set(entry.target.id, entry.isIntersecting);
        });

        const activeId = [...activeMap.entries()].find(([, v]) => v)?.[0];

        navLinks.forEach((link) => {
          const isActive = activeId && link.getAttribute('href') === `#${activeId}`;
          link.classList.toggle('is-active', !!isActive);
          isActive
            ? link.setAttribute('aria-current', 'true')
            : link.removeAttribute('aria-current');
        });
      },
      { rootMargin: `-${64 + 8}px 0px -60% 0px`, threshold: 0 }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  /* ── 2. MOBILE MENU ─────────────────────────────────────── */
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    const openMenu  = () => { navMenu.classList.add('is-open');    toggleBtn.setAttribute('aria-expanded', 'true'); };
    const closeMenu = () => { navMenu.classList.remove('is-open'); toggleBtn.setAttribute('aria-expanded', 'false'); };

    toggleBtn.addEventListener('click', () => {
      toggleBtn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });

    navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  /* ── 3. REVEAL ANIMATION (.reveal) ─────────────────────── */
  if (!prefersReduced) {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      const revealObs = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      reveals.forEach((el) => revealObs.observe(el));
    }
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ── 4. REVEAL-GROUP (.reveal-group — section header stagger) */
  const revealGroups = document.querySelectorAll('.reveal-group');
  if (revealGroups.length) {
    if (!prefersReduced) {
      const groupObs = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealGroups.forEach((el) => groupObs.observe(el));
    } else {
      revealGroups.forEach((el) => el.classList.add('is-visible'));
    }
  }

  /* ── 5. SCROLL PROGRESS BAR ─────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrolled  = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      progressBar.style.width = pct.toFixed(2) + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── 6. COPY EMAIL BUTTON ─────────────────────────────────── */
  const copyBtn = document.querySelector('.btn-copy-email');
  if (copyBtn) {
    const email = copyBtn.getAttribute('data-email') || 'cannavarolie1@email.com';
    const textSpan = copyBtn.querySelector('.email-text');
    let timeoutId = null;

    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = email;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        copyBtn.classList.add('is-copied');
        if (textSpan) textSpan.textContent = 'Copied to clipboard!';

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          if (textSpan) textSpan.textContent = email;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }

})();
