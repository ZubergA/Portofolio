/* main.js — Portfolio
 * Tanpa library, total < 100 baris.
 * Fitur: (1) link aktif, (2) menu mobile, (3) animasi reveal
 */

(function () {
  'use strict';

  /* ── 1. LINK AKTIF via IntersectionObserver ─────────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-menu a[href^="#"]');

  if (sections.length && navLinks.length) {
    const activeMap = new Map();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          activeMap.set(entry.target.id, entry.isIntersecting);
        });

        // Link aktif = section teratas yang sedang terlihat
        const activeId = [...activeMap.entries()]
          .find(([, visible]) => visible)?.[0];

        navLinks.forEach((link) => {
          const isActive = activeId && link.getAttribute('href') === `#${activeId}`;
          link.classList.toggle('is-active', !!isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      },
      {
        rootMargin: `-${64 + 8}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  /* ── 2. MENU MOBILE ─────────────────────────────────────── */
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    function openMenu() {
      navMenu.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', () => {
      const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    // Tutup saat link diklik
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Tutup saat Esc ditekan
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  /* ── 3. ANIMASI REVEAL ──────────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target); // animasi hanya sekali
            }
          });
        },
        { threshold: 0.08 }
      );

      reveals.forEach((el) => revealObserver.observe(el));
    }
  } else {
    // Jika reduce-motion aktif, langsung tampilkan semua
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }
})();
