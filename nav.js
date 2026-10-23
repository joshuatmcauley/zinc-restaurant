// Header menu.
// On phones and small tablets the links fold into a menu button, with a
// "Call to book" button kept visible beside it.
(function () {
  var header = document.querySelector('.site-header');
  var nav = header && header.querySelector('.site-nav');
  if (!nav) return;
  var wrap = nav.parentNode;

  // A copy of the booking link for the top bar on mobile
  var book = nav.querySelector('.nav-book');
  if (book) {
    var top = book.cloneNode(true);
    top.className = 'nav-call-top';
    top.textContent = 'Call to book';
    top.setAttribute('href', 'tel:' + (window.ZINC ? ZINC.phoneLink : '+442827662341'));
    wrap.insertBefore(top, nav);
  }

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML =
    '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
    '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  wrap.insertBefore(btn, nav);
  header.classList.add('has-toggle');

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 940) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      btn.focus();
    }
  });
})();
