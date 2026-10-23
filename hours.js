// Opening hours, from ZINC.hours in config.js.
// Fills any <tbody id="hours-rows">, highlights today, and writes a short
// "open now" / "opens at" line into any element with id="open-now".
(function () {
  if (typeof ZINC === 'undefined') return;

  var today = new Date().getDay();

  var rows = document.getElementById('hours-rows');
  if (rows) {
    ZINC.hours.forEach(function (h, i) {
      var tr = document.createElement('tr');
      if (i === today) tr.className = 'today';

      var th = document.createElement('th');
      th.scope = 'row';
      th.textContent = h.day + (i === today ? ' (today)' : '');
      tr.appendChild(th);

      var td = document.createElement('td');
      td.textContent = h.open ? h.open + ' – ' + h.close : 'Closed';
      if (!h.open) td.className = 'closed';
      tr.appendChild(td);

      var note = document.createElement('td');
      note.className = 'muted';
      note.textContent = h.note || '';
      tr.appendChild(note);

      rows.appendChild(tr);
    });
  }

  var line = document.getElementById('open-now');
  if (line) {
    var h = ZINC.hours[today];
    line.textContent = h.open
      ? 'Today we’re open ' + h.open + ' to ' + h.close + '.'
      : 'We’re closed today.';
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
