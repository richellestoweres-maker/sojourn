/* Contact page: trip list and phone row. */
SJ.ready(function () {
  var sel = document.getElementById("c-trip");
  SJ.trips().forEach(function (t) {
    var o = document.createElement("option");
    o.value = t.title + " (" + t.destination + ")"; o.textContent = t.title + ", " + t.destination;
    if (SJ.param("trip") === t.id) o.selected = true;
    sel.appendChild(o);
  });
  var o2 = document.createElement("option"); o2.value = "Private or group trip"; o2.textContent = "A private or group trip"; sel.appendChild(o2);
  if (!(window.BRAND.contact || {}).phone) { var r = document.querySelector(".phone-row"); if (r) r.remove(); }
});
