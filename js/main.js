/* Yusufa Ardanni Wibawa — Portfolio · vanilla JS, no dependencies */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Mobile menu ---- */
  var nav = $('#top-nav');
  var toggle = $('.nav-toggle');
  var menu = $('#menu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  $$('#menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---- Header shadow on scroll ---- */
  function onScroll() { if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Active nav link ---- */
  var links = $$('#menu a');
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }
  setActive('home');

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- Poster lightbox ---- */
  var box = $('#lightbox');
  var posterBtn = $('.poster-btn');
  if (box && posterBtn && typeof box.showModal === 'function') {
    posterBtn.addEventListener('click', function () { box.showModal(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
    var closeBtn = $('.lightbox__close', box);
    if (closeBtn) closeBtn.addEventListener('click', function () { box.close(); });
  } else if (posterBtn) {
    posterBtn.style.cursor = 'default';
  }

  /* ---- Copy Instagram handle ---- */
  var copyBtn = $('#copy-handle');
  var status = $('#copy-status');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var text = copyBtn.getAttribute('data-handle');
      var done = function (ok) {
        var label = ok ? 'Copied!' : 'Copy failed';
        copyBtn.textContent = label;
        if (status) status.textContent = ok ? 'Handle copied to clipboard' : 'Could not copy the handle';
        setTimeout(function () { copyBtn.textContent = 'Copy handle'; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        try {
          var ta = document.createElement('textarea');
          ta.value = text; ta.setAttribute('readonly', '');
          ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          var ok = document.execCommand('copy');
          document.body.removeChild(ta);
          done(ok);
        } catch (err) { done(false); }
      }
    });
  }

  /* ---- Looping futsal video: play only while visible, respect reduced motion ---- */
  var vid = $('.hobby__photo--pitch video');
  if (vid) {
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm) {
      vid.removeAttribute('autoplay');
      vid.pause();
      vid.setAttribute('controls', '');
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { var p = vid.play(); if (p && p.catch) p.catch(function () {}); }
          else vid.pause();
        });
      }, { threshold: 0.25 }).observe(vid);
    }
  }

  /* ---- Footer year ---- */
  var y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
