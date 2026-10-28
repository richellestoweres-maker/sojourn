/* Trip detail page. Reads ?id= from the link and builds the page from trips.js. */
SJ.ready(function () {
  var B = window.BRAND, e = SJ.esc, I = SJ.icon;
  var root = document.getElementById("trip-root");
  var id = SJ.param("id");
  var t = id ? SJ.tripById(id) : null;

  if (!t) {
    root.innerHTML = '<section class="plain-hero"><div class="container narrow center">' +
      '<p class="eyebrow">Journey not found</p><h1 class="h1">We couldn\'t find that trip</h1>' +
      '<p class="lead">It may have been renamed or is no longer available.</p>' +
      '<div class="btn-row mt-m" style="justify-content:center"><a class="btn btn-dark" href="trips.html">Explore Trips ' + I("arrow") + "</a></div></div></section>";
    document.title = "Trip not found | " + B.name;
    return;
  }

  document.title = t.title + " | " + B.name;
  var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", t.summary);

  var p = t.pricing || {}, cur = p.currency, st = SJ.status(t), canBook = SJ.bookable(t);
  var demo = t.demo && B.showDemoNotices;
  var reserveUrl = "reserve.html?trip=" + encodeURIComponent(t.id);
  var price = SJ.fromPrice(t);
  var group = t.groupSize ? (t.groupSize.min ? t.groupSize.min + " to " : "Up to ") + t.groupSize.max + " guests" : "";
  var hasDetail = t.itinerary && t.itinerary.length;
  var ownerNote = function (txt) { return B.showOwnerNotes ? ' <span class="owner-note">' + (txt || "Owner to confirm") + "</span>" : ""; };

  var cta = canBook
    ? '<a class="btn btn-light" href="' + reserveUrl + '">Reserve Your Spot ' + I("arrow") + "</a>"
    : '<a class="btn btn-light" href="#join">Join the List ' + I("arrow") + "</a>";

  var html = "";

  if (demo) html += '<p class="notice-bar"><strong>Sample trip.</strong> This journey shows how trips will appear. Dates, prices, hotels and partners are not confirmed.</p>';

  /* Hero */
  html += '<section class="page-hero trip-hero" aria-labelledby="trip-title">' +
    '<div class="hero-media">' + SJ.picture(t.heroImage, t.imageAlt, { eager: true, w: 1800 }) + "</div>" +
    '<div class="container"><p class="eyebrow">' + e(t.destination) + "</p>" +
    '<h1 class="h1" id="trip-title">' + e(t.title) + "</h1>" +
    '<div class="hero-meta"><span>' + I("calendar") + e(SJ.dateRange(t)) + "</span><span>" + I("clock") + e(SJ.duration(t)) + "</span>" +
    (group ? "<span>" + I("users") + e(group) + "</span>" : "") + "</div>" +
    '<div class="btn-row">' + cta + (hasDetail ? '<a class="btn btn-outline" href="#itinerary">View Itinerary</a>' : "") + "</div></div></section>";

  /* Facts */
  html += '<section aria-label="Trip at a glance"><div class="facts">' +
    fact("Dates", SJ.dateRange(t) + (demo ? " (sample)" : "")) +
    fact("Duration", SJ.duration(t)) +
    fact("Destination", t.destination) +
    fact("Group size", group || "To be announced") +
    fact("From", price ? price + '<span class="small muted" style="font-family:var(--sans)"> per person</span>' : "Coming soon", true) +
    fact("Availability", '<span class="status-dot ' + st.dot + '" style="margin-right:8px;vertical-align:middle"></span>' + e(st.label), true) +
    "</div></section>";

  /* Sub navigation */
  var links = [["overview", "Overview"]];
  if (t.inclusions && t.inclusions.length) links.push(["included", "What's Included"]);
  if (hasDetail) links.push(["itinerary", "Itinerary"]);
  if (t.accommodation) links.push(["stay", "Accommodation"]);
  if (t.community) links.push(["impact", "Community Impact"]);
  if (canBook && p.occupancy && p.occupancy.length) links.push(["pricing", "Pricing"]);
  html += '<nav class="subnav" aria-label="Trip sections"><ul>' + links.map(function (l) { return '<li><a href="#' + l[0] + '">' + l[1] + "</a></li>"; }).join("") +
    (canBook ? '<li class="subnav-cta"><a href="' + reserveUrl + '">Reserve</a></li>' : "") + "</ul></nav>";

  /* Overview */
  html += '<section class="section" id="overview" aria-labelledby="ov-title"><div class="container split">' +
    '<div class="reveal"><p class="eyebrow">The journey</p><h2 class="h2" id="ov-title">Why This Experience</h2><hr class="rule">' +
    (t.overview || []).map(function (para, i) { return "<p" + (i === 0 ? ' class="lead"' : ' class="muted"') + ">" + e(para) + "</p>"; }).join("") +
    ((t.experienceTypes || []).length ? '<div class="btn-row mt-s">' + t.experienceTypes.map(function (x) { return '<span class="tag optional">' + e(x) + "</span>"; }).join("") + "</div>" : "") +
    "</div>" +
    ((t.gallery || []).length ? '<div class="gallery reveal d1">' + t.gallery.map(function (g) { return SJ.picture(g, t.destination, { w: 900, sizes: "(min-width:900px) 45vw, 100vw" }); }).join("") + "</div>" : "") +
    "</div></section>";

  if (!hasDetail) {
    html += '<section class="section bg-cream" id="join" aria-labelledby="cs-title"><div class="container narrow center">' +
      '<p class="eyebrow">' + e(st.label) + '</p><h2 class="h2" id="cs-title">Full Details Coming Soon</h2><hr class="rule">' +
      '<p class="lead">The itinerary, hotels and pricing for this journey are being finalized. Join the list to hear first when it opens.</p>' +
      '<div class="btn-row mt-m" style="justify-content:center"><a class="btn btn-dark" href="index.html#join">Join the List ' + I("arrow") + '</a><a class="btn btn-outline" href="contact.html?trip=' + encodeURIComponent(t.id) + '">Ask a Question</a></div>' +
      "</div></section>";
    root.innerHTML = html; finish(); return;
  }

  /* Included / not included */
  if ((t.inclusions || []).length || (t.exclusions || []).length) {
    html += '<section class="section bg-white" id="included" aria-labelledby="inc-title"><div class="container"><div class="split" style="align-items:start">' +
      '<div class="reveal"><p class="eyebrow">Your journey includes</p><h2 class="h2" id="inc-title">What\'s Included</h2><div class="incl-grid mt-m" style="grid-template-columns:1fr">' +
      t.inclusions.map(function (i) { return '<div class="incl-item">' + I(i.icon) + "<div><strong>" + e(i.label) + "</strong><span>" + e(i.detail || "") + "</span></div></div>"; }).join("") +
      "</div></div>" +
      ((t.exclusions || []).length ? '<div class="reveal d1"><p class="eyebrow">Good to know</p><h2 class="h2">Not Included</h2><ul class="excl-list mt-m">' +
        t.exclusions.map(function (x) { return "<li>" + I("minus") + e(x) + "</li>"; }).join("") + "</ul></div>" : "") +
      "</div></div></section>";
  }

  /* Itinerary */
  html += '<section class="section" id="itinerary" aria-labelledby="it-title"><div class="container">' +
    '<div class="section-head reveal"><p class="eyebrow">Day by day</p><h2 class="h2" id="it-title">The Itinerary</h2></div>' +
    '<div class="legend"><span><span class="tag included">Included</span></span><span><span class="tag optional">Optional</span> Free to join or skip</span><span><span class="tag extra">Additional cost</span> Paid separately</span>' +
    '<button type="button" class="text-link" id="expand-all" style="margin-left:auto;background:none;border:0;border-bottom:1px solid currentColor;cursor:pointer">Expand all</button></div>' +
    '<div class="itinerary">' + t.itinerary.map(dayHtml).join("") + "</div>" +
    '<p class="disclaimer">' + I("info", "icon") .replace('class="icon"', 'class="icon" style="width:16px;height:16px;vertical-align:-3px;margin-right:8px"') +
    "This itinerary is a planned outline" + (demo ? " shown as a sample" : "") + ". Activities, timing and order may change because of weather, local conditions or partner availability. Activities listed here are not individually booked until your reservation is confirmed.</p>" +
    "</div></section>";

  /* Accommodation */
  var a = t.accommodation;
  if (a) {
    html += '<section class="section bg-cream" id="stay" aria-labelledby="stay-title"><div class="container split wide-left">' +
      '<div class="gallery reveal">' + (a.images || []).map(function (g) { return SJ.picture(g, a.name, { w: 900, sizes: "(min-width:900px) 50vw, 100vw" }); }).join("") + "</div>" +
      '<div class="reveal d1"><p class="eyebrow">Where you\'ll stay</p><h2 class="h2" id="stay-title">Accommodation</h2>' +
      '<h3 class="h4">' + e(a.name) + "</h3><p class=\"muted\">" + e(a.description) + "</p>" +
      ((a.roomTypes || []).length ? '<div class="room-types">' + a.roomTypes.map(function (r) { return "<div><strong style=\"font-weight:500\">" + e(r.name) + "</strong><span>" + e(r.detail || "") + "</span></div>"; }).join("") + "</div>" : "") +
      ((a.amenities || []).length ? '<ul class="amenities">' + a.amenities.map(function (m) { return "<li>" + I("check") + e(m) + "</li>"; }).join("") + "</ul>" : "") +
      "</div></div></section>";
  }

  /* Community impact */
  var c = t.community;
  if (c) {
    var partner = c.partner || {};
    html += '<section class="section bg-forest on-dark" id="impact" aria-labelledby="impact-title"><div class="container narrow center reveal">' +
      I("sprout", "icon").replace('class="icon"', 'class="icon" style="width:44px;height:44px;color:var(--champagne);margin:0 auto 18px;display:block"') +
      '<p class="eyebrow">Community impact</p><h2 class="h2" id="impact-title">' + e(c.title) + '</h2><hr class="rule">' +
      '<p class="lead">' + e(c.description) + "</p>" +
      '<p class="small" style="color:rgba(247,244,238,.7)">' + (partner.confirmed && partner.name ? "In partnership with <strong>" + e(partner.name) + "</strong>. " + e(partner.description || "") : e(partner.description || "Local partner to be announced.")) + "</p>" +
      '<p class="small" style="color:rgba(247,244,238,.7)">Every service project is requested and led by local partners, matched to guests\' skills, and chosen for real community benefit. Taking part is always your choice.</p>' +
      "</div></section>";
  }

  /* Pricing and booking */
  if (canBook && p.occupancy && p.occupancy.length) {
    var occ = p.occupancy;
    html += '<section class="section" id="pricing" aria-labelledby="price-title"><div class="container"><div class="split" style="align-items:start">' +
      '<div class="reveal"><p class="eyebrow">Pricing and booking</p><h2 class="h2" id="price-title">Reserve Your Place</h2><hr class="rule">' +
      (demo ? '<p class="small muted">All prices on this sample trip are for demonstration only.</p>' : "") +
      '<h3 class="h4 mt-m">Room options</h3><div class="room-types">' + occ.map(function (o) { return "<div><span style=\"text-align:left;color:var(--charcoal)\"><strong style=\"font-weight:500\">" + e(o.label) + "</strong><br><small class=\"muted\">" + e(o.detail || "") + "</small></span><span style=\"font-family:var(--serif);font-size:22px;color:var(--charcoal)\">" + SJ.money(o.perPerson, cur) + "</span></div>"; }).join("") + "</div>" +
      '<h3 class="h4 mt-m">Payment schedule</h3><ul class="schedule-list">' + (p.schedule || []).map(function (s) {
        var amt = s.amount === "deposit" ? SJ.money(p.deposit, cur) + " per person" : s.amount === "balance" ? "Remaining balance" : SJ.money(s.amount, cur);
        return "<li><span><strong style=\"font-weight:500\">" + e(s.label) + "</strong><small>" + e(s.due) + "</small></span><span style=\"text-align:right\">" + amt + "</span></li>";
      }).join("") + "</ul>" +
      '<h3 class="h4 mt-m">Cancellation policy</h3><p class="muted">' + (p.cancellationPolicy ? e(p.cancellationPolicy) : "The full cancellation policy for this journey will be shared with you before you pay a deposit." + ownerNote()) + ' <a href="cancellation.html">Read our cancellation terms</a>.</p>' +
      ((t.requirements || []).length ? '<h3 class="h4 mt-m">Important travel requirements</h3><ul class="req-list">' + t.requirements.map(function (r) { return "<li>" + e(r) + "</li>"; }).join("") + "</ul>" : "") +
      "</div>" +
      '<aside class="price-panel reveal d1" aria-label="Price summary">' +
      '<p class="eyebrow">Price per person</p>' +
      '<div class="price-row"><span>Trip price, shared room</span><span>' + SJ.money(occ[0].perPerson, cur) + "</span></div>" +
      '<div class="price-row"><span>Deposit to reserve</span><span>' + SJ.money(p.deposit, cur) + "</span></div>" +
      '<div class="price-row"><span>Remaining balance</span><span>' + SJ.money(occ[0].perPerson - p.deposit, cur) + "</span></div>" +
      '<div class="price-row total"><span>Total</span><span>' + SJ.money(occ[0].perPerson, cur) + "</span></div>" +
      '<p class="small muted">Includes everything listed under What\'s Included. Flights and other exclusions are not included unless listed.</p>' +
      '<a class="btn btn-dark btn-block mt-s" href="' + reserveUrl + '">Reserve Your Spot ' + I("arrow") + "</a>" +
      '<p class="small muted center mt-s mb-0">Submitting a reservation request does not charge you. We confirm availability first.</p>' +
      "</aside></div></div></section>";
  }

  /* Bottom CTA */
  html += '<section class="section tight bg-cream"><div class="container narrow center">' +
    '<h2 class="h2">Questions About This Journey?</h2><p class="muted">We\'re happy to help you decide if it is the right fit.</p>' +
    '<div class="btn-row mt-m" style="justify-content:center">' + (canBook ? '<a class="btn btn-dark" href="' + reserveUrl + '">Reserve Your Spot</a>' : "") + '<a class="btn btn-outline" href="contact.html?trip=' + encodeURIComponent(t.id) + '">Ask a Question</a></div></div></section>';

  /* Mobile reserve bar */
  if (canBook) {
    html += '<div class="mobile-reserve" id="mobile-reserve"><p class="price-from mb-0">From' + (demo ? " (sample)" : "") + "<strong>" + (price || "") + '</strong></p><a class="btn btn-dark" href="' + reserveUrl + '">Reserve</a></div>';
  }

  root.innerHTML = html;
  finish();

  function fact(label, value, raw) {
    return '<div class="fact"><span class="label">' + e(label) + "</span><strong>" + (raw ? value : e(value)) + "</strong></div>";
  }

  function dayHtml(d, i) {
    var n = i + 1, sid = "day-" + n;
    var sched = d.schedule || {};
    var rows = [["Morning", sched.morning], ["Afternoon", sched.afternoon], ["Evening", sched.evening]].filter(function (r) { return r[1]; });
    var tagLabel = { included: "Included", optional: "Optional", extra: "Additional cost" };
    return '<div class="day' + (i === 0 ? " open" : "") + '">' +
      '<h3 class="mb-0" style="font-size:inherit"><button class="day-toggle" type="button" aria-expanded="' + (i === 0) + '" aria-controls="' + sid + '">' +
      '<span class="num">Day<b>' + (n < 10 ? "0" + n : n) + "</b></span>" +
      '<span class="t">' + e(d.title) + "<small>" + e(d.summary || "") + '</small></span><span class="plus" aria-hidden="true"></span></button></h3>' +
      '<div class="day-panel" id="' + sid + '" role="region" aria-label="Day ' + n + ' details"><div><div class="day-body">' +
      (d.image ? SJ.picture(d.image, d.title, { w: 800, sizes: "(min-width:900px) 35vw, 100vw" }) : "") +
      "<div>" +
      (rows.length ? '<dl class="schedule">' + rows.map(function (r) { return "<div><dt>" + r[0] + "</dt><dd>" + e(r[1]) + "</dd></div>"; }).join("") + "</dl>" : "") +
      ((d.activities || []).length ? '<ul class="activity-list">' + d.activities.map(function (a) {
        var ty = a.type || "included";
        return '<li><span class="tag ' + ty + '">' + tagLabel[ty] + "</span>" + e(a.name) + (a.price ? ' <span class="muted small">' + e(a.price) + "</span>" : "") + "</li>";
      }).join("") + "</ul>" : "") +
      ((d.meals || []).length ? '<p class="meals">' + I("utensils") + "Meals included: " + e(d.meals.join(", ")) + "</p>" : "") +
      "</div></div></div></div></div>";
  }

  function finish() {
    // Itinerary accordion
    root.querySelectorAll(".day-toggle").forEach(function (b) {
      b.addEventListener("click", function () {
        var day = b.closest(".day"), open = !day.classList.contains("open");
        day.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
        syncExpand();
      });
    });
    var ex = document.getElementById("expand-all");
    function syncExpand() {
      if (!ex) return;
      var allOpen = [].every.call(root.querySelectorAll(".day"), function (d) { return d.classList.contains("open"); });
      ex.textContent = allOpen ? "Collapse all" : "Expand all";
    }
    if (ex) ex.addEventListener("click", function () {
      var openAll = ex.textContent === "Expand all";
      root.querySelectorAll(".day").forEach(function (d) { d.classList.toggle("open", openAll); d.querySelector(".day-toggle").setAttribute("aria-expanded", openAll); });
      syncExpand();
    });

    // Active subnav link
    var navLinks = [].slice.call(root.querySelectorAll(".subnav a[href^='#']"));
    if ("IntersectionObserver" in window && navLinks.length) {
      var obs = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) navLinks.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      navLinks.forEach(function (l) { var s = document.querySelector(l.getAttribute("href")); if (s) obs.observe(s); });
    }

    // Mobile reserve bar appears after the hero
    var bar = document.getElementById("mobile-reserve");
    if (bar) {
      document.body.classList.add("has-mobile-reserve");
      var onScroll = function () { bar.classList.toggle("show", window.scrollY > window.innerHeight * 0.6); };
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    }

    if (location.hash) { var target = document.querySelector(location.hash); if (target) setTimeout(function () { target.scrollIntoView(); }, 50); }
    SJ.observe(root);
  }
});
