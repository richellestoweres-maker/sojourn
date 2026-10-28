/* Explore Trips page: filters and results. */
SJ.ready(function () {
  var all = SJ.trips();
  var form = document.getElementById("filters");
  var grid = document.getElementById("trip-results");
  var count = document.getElementById("result-count");
  var noResults = document.getElementById("no-results");
  var noTrips = document.getElementById("no-trips");

  if (!all.length) {
    form.classList.add("hidden");
    document.querySelector(".filter-bar").classList.add("hidden");
    noTrips.classList.remove("hidden");
    return;
  }

  function uniq(arr) { return arr.filter(function (v, i) { return v && arr.indexOf(v) === i; }); }
  function addOptions(id, values) {
    var sel = document.getElementById(id);
    values.forEach(function (v) { var o = document.createElement("option"); o.value = v.value; o.textContent = v.label; sel.appendChild(o); });
  }

  // Destination options by country
  addOptions("f-destination", uniq(all.map(function (t) { return t.country; })).sort().map(function (c) { return { value: c, label: c }; }));

  // Month options from trip start dates, in date order
  var months = uniq(all.filter(function (t) { return t.dates && t.dates.start; })
    .sort(function (a, b) { return a.dates.start < b.dates.start ? -1 : 1; })
    .map(function (t) { return t.dates.start.slice(0, 7); }));
  addOptions("f-month", months.map(function (m) { var p = m.split("-"); return { value: m, label: SJ.MONTHS[+p[1] - 1] + " " + p[0] }; }));

  // Availability options present in the data
  addOptions("f-status", uniq(all.map(function (t) { return t.status; })).map(function (s) { return { value: s, label: SJ.status({ status: s }).label }; }));

  // Experience types
  var types = [];
  all.forEach(function (t) { (t.experienceTypes || []).forEach(function (x) { types.push(x); }); });
  addOptions("f-type", uniq(types).sort().map(function (x) { return { value: x, label: x }; }));

  function matches(t, f) {
    if (f.destination && t.country !== f.destination) return false;
    if (f.month && !(t.dates && t.dates.start && t.dates.start.slice(0, 7) === f.month)) return false;
    if (f.duration) {
      var d = t.durationDays || 0;
      if (f.duration === "short" && d > 6) return false;
      if (f.duration === "mid" && (d < 7 || d > 8)) return false;
      if (f.duration === "long" && d < 9) return false;
    }
    if (f.price) {
      var r = f.price.split("-"), p = t.pricing && t.pricing.from;
      if (p == null || p < +r[0] || p >= +r[1]) return false;
    }
    if (f.status && t.status !== f.status) return false;
    if (f.type && (t.experienceTypes || []).indexOf(f.type) < 0) return false;
    return true;
  }

  function render() {
    var f = {};
    new FormData(form).forEach(function (v, k) { f[k] = v; });
    var list = all.filter(function (t) { return matches(t, f); })
      .sort(function (a, b) { return ((a.dates && a.dates.start) || "9") < ((b.dates && b.dates.start) || "9") ? -1 : 1; });
    grid.innerHTML = list.map(function (t) { return SJ.tripCard(t); }).join("");
    noResults.classList.toggle("hidden", list.length > 0);
    grid.classList.toggle("hidden", list.length === 0);
    count.textContent = list.length === 1 ? "1 journey" : list.length + " journeys";
    SJ.observe(grid);
  }
  function clear() { form.reset(); render(); }

  form.addEventListener("change", render);
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  document.getElementById("clear-filters").addEventListener("click", clear);
  document.getElementById("clear-filters-2").addEventListener("click", clear);
  render();
});
