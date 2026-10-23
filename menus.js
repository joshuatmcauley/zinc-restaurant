// Builds the menus page from MENUS in menu-data.js.
// One pill per menu; the menu in the address bar (#teatime, #weekend…) opens first.
(function () {
  var tabs = document.getElementById('menu-tabs');
  var out = document.getElementById('menu-body');
  if (!tabs || !out || typeof MENUS === 'undefined') return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function render(menu) {
    out.textContent = '';

    var head = el('div', 'menu-head');
    head.appendChild(el('h2', null, menu.name));
    head.appendChild(el('p', 'when', menu.when));
    out.appendChild(head);

    if (menu.note) out.appendChild(el('p', 'menu-note', menu.note));

    var grid = el('div', 'menu-grid');
    menu.sections.forEach(function (sec) {
      var box = el('section');
      box.appendChild(el('h3', null, sec.title));
      if (sec.note) box.appendChild(el('p', 'sec-note', sec.note));

      var list = el('ul');
      sec.items.forEach(function (item) {
        var li = el('li');
        var row = el('div', 'row');
        row.appendChild(el('span', 'name', item.name));
        if (item.price) row.appendChild(el('span', 'price', item.price));
        li.appendChild(row);
        if (item.desc) li.appendChild(el('p', 'desc', item.desc));
        list.appendChild(li);
      });

      box.appendChild(list);
      grid.appendChild(box);
    });
    out.appendChild(grid);
  }

  function select(id, push) {
    var menu = MENUS.filter(function (m) { return m.id === id; })[0] || MENUS[0];
    Array.prototype.forEach.call(tabs.children, function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.menu === menu.id ? 'true' : 'false');
    });
    render(menu);
    if (push && history.replaceState) history.replaceState(null, '', '#' + menu.id);
  }

  MENUS.forEach(function (menu) {
    var btn = el('button', 'pill', menu.name);
    btn.type = 'button';
    btn.dataset.menu = menu.id;
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', function () { select(menu.id, true); });
    tabs.appendChild(btn);
  });

  select((location.hash || '').replace('#', '') || MENUS[0].id, false);
  window.addEventListener('hashchange', function () {
    select((location.hash || '').replace('#', ''), false);
  });
})();
