/* Homepage: featured trip, itinerary preview and destination grid. */
SJ.ready(function () {
  var all = SJ.trips();
  var featured = all.filter(function (t) { return t.featured; })[0] || all[0];
  var B = window.BRAND;

  // Featured band
  var fb = document.getElementById("featured");
  if (featured && fb) {
    var url = "trip.html?id=" + encodeURIComponent(featured.id);
    var items = (featured.inclusions || []).slice(0, 5);
    fb.innerHTML = '<div class="feature-band on-dark">' +
      '<div class="fb-media">' + SJ.picture(featured.gallery && featured.gallery[2] || featured.heroImage, featured.imageAlt, { sizes: "(min-width:960px) 33vw, 100vw" }) + "</div>" +
      '<div class="fb-body"><div class="reveal">' +
      '<p class="eyebrow">Featured trip' + (featured.demo && B.showDemoNotices ? " &middot; Sample" : "") + "</p>" +
      '<h2 class="h2">' + SJ.esc(featured.destination) + "</h2>" +
      '<p class="fb-dates">' + SJ.esc(SJ.dateRange(featured)) + "</p>" +
      '<p class="lead">' + SJ.esc(featured.summary) + "</p>" +
      '<div class="btn-row mt-m"><a class="btn btn-champagne" href="' + url + '">View the Journey ' + SJ.icon("arrow") + "</a></div></div>" +
      (items.length ? '<ul class="fb-list reveal d1">' + items.map(function (i) {
        return "<li>" + SJ.icon(i.icon) + "<div><strong>" + SJ.esc(i.label) + "</strong><span>" + SJ.esc(i.detail) + "</span></div></li>";
      }).join("") + "</ul>" : "") +
      "</div></div>";
  } else if (fb) { fb.remove(); }

  // Itinerary strip
  var strip = document.getElementById("day-strip");
  var section = document.getElementById("itinerary-preview");
  if (featured && featured.itinerary && featured.itinerary.length) {
    document.getElementById("strip-link").href = "trip.html?id=" + encodeURIComponent(featured.id) + "#itinerary";
    strip.innerHTML = featured.itinerary.map(function (d, i) {
      return '<article class="day-tile reveal">' + SJ.picture(d.image, d.title, { w: 600, sizes: "260px" }) +
        '<span class="day-num">Day ' + (i + 1) + "</span><h3>" + SJ.esc(d.title) + "</h3><p>" + SJ.esc(d.summary) + "</p></article>";
    }).join("");
  } else if (section) { section.remove(); }

  // Destinations grid
  var grid = document.getElementById("home-trips");
  if (grid) {
    var list = all.slice(0, 4);
    grid.innerHTML = list.length ? list.map(function (t) { return SJ.tripCard(t, { summary: false }); }).join("")
      : '<div class="empty-state" style="grid-column:1/-1"><p class="lead" style="margin:0 auto">New journeys are being planned. Join the list to hear first.</p></div>';
  }
  SJ.observe();
});
