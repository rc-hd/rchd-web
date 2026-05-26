/* Rotary Hyderabad Deccan — interactions */
(function () {
  'use strict';

  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header shadow + back-to-top on scroll
  var header = document.getElementById('siteHeader');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var s = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', s > 10);
    if (toTop) toTop.classList.toggle('show', s > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
