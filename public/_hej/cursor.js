// Custom cursor: black dot with white border that smoothly grows on hover
// over interactive elements. Position follows the mouse instantly; only the
// size is animated (transition lives in style.css). No dependencies.
(function () {
  if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;

  var root = document.documentElement;
  root.classList.add('has-custom-cursor');

  var cursor = document.createElement('div');
  cursor.className = 'app-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  var dot = document.createElement('span');
  dot.className = 'app-cursor__dot';
  cursor.appendChild(dot);

  function mount() {
    document.body.appendChild(cursor);
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);

  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    if (cursor.style.opacity !== '1') cursor.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseenter', function () { cursor.style.opacity = '1'; });
  document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });

  var INTERACTIVE = 'a, button, [role="button"], input[type="submit"], ' +
    'input[type="button"], input[type="reset"], select, label, summary';

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest && e.target.closest(INTERACTIVE)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', function (e) {
    if (!e.target.closest || !e.target.closest(INTERACTIVE)) return;
    var to = e.relatedTarget;
    if (!to || !to.closest || !to.closest(INTERACTIVE)) cursor.classList.remove('is-hover');
  });
})();
