/* Shared site behavior: header, footer, icons, formatting, trip cards, forms. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  var B = window.BRAND || {};

  /* ---------------- Icons ---------------- */
  var P = {
    compass: '<circle cx="12" cy="12" r="9.5"/><path d="M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5z"/>',
    book: '<path d="M2.5 5.5C5 4.6 8.6 4.7 12 6.6c3.4-1.9 7-2 9.5-1.1v13c-2.5-.9-6.1-.8-9.5 1.1-3.4-1.9-7-2-9.5-1.1z"/><path d="M12 6.6v13"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/><path d="M12 14.5v-3.2M12 11.3c0-1.4 1-2.2 2.2-2.2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>',
    leaf: '<path d="M5 19.5c0-8.3 6.2-14.5 15-14.5 0 9-6.2 15-14.5 15H5z"/><path d="M5 19.5l8.5-8.5"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12c0-3.9-2.8-6.5-7-6.5 0 3.9 2.8 6.5 7 6.5z"/><path d="M12 14.5c0-3.2 2.4-5.5 6.5-5.5 0 3.2-2.4 5.5-6.5 5.5z"/><path d="M7 21h10"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="1"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
    users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c.6-3.3 3-5.2 6-5.2s5.4 1.9 6 5.2"/><path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.6c1.8.6 3 2.3 3.4 4.9"/>',
    pin: '<path d="M12 21s-6.5-6.1-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.9 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/>',
    tag: '<path d="M3.5 12.6V4.5a1 1 0 0 1 1-1h8.1l8 8a1 1 0 0 1 0 1.4l-7.7 7.7a1 1 0 0 1-1.4 0z"/><circle cx="8.3" cy="8.3" r="1.4"/>',
    plane: '<path d="M10.2 13.8L4 12.2l-1.4 1.4 5 2.6 2.6 5 1.4-1.4-1.6-6.2 4.6-4.6 4 8.6 1.6-1.6-1.8-10.4 2.4-2.4a1.6 1.6 0 0 0-2.3-2.3l-2.4 2.4-10.4-1.8L3.7 4.2l8.6 4z"/>',
    bed: '<path d="M2.5 19v-12M2.5 15h19v4M21.5 15v-3.5a3 3 0 0 0-3-3H11v6.5"/><circle cx="6.8" cy="11.3" r="2"/>',
    car: '<path d="M4 16.5h16v-4.2l-2-4.8H6l-2 4.8z"/><path d="M4 12.3h16"/><circle cx="7.5" cy="16.8" r="1.7"/><circle cx="16.5" cy="16.8" r="1.7"/>',
    map: '<path d="M9 4.5L3.5 6.6v13l5.5-2.1 6 2.1 5.5-2.1v-13L15 6.6z"/><path d="M9 4.5v13M15 6.6v13"/>',
    utensils: '<path d="M6.5 3v8M4 3v5.2a2.5 2.5 0 0 0 5 0V3M6.5 11v10"/><path d="M17.5 21V3c-2.2 1.2-3.2 4-3.2 7.2v3h3.2"/>',
    landmark: '<path d="M3 20.5h18M4.5 9.5h15M12 3.5l8 4.2H4zM6.5 9.5v8.5M10 9.5v8.5M14 9.5v8.5M17.5 9.5v8.5M4 18h16"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20.5c.8-3.9 3.6-6.1 7-6.1s6.2 2.2 7 6.1"/>',
    lotus: '<path d="M12 19c-3.8 0-7.5-2.3-8.5-6.2 2.8-.4 5.5.5 8.5 3.4 3-2.9 5.7-3.8 8.5-3.4-1 3.9-4.7 6.2-8.5 6.2z"/><path d="M12 16.2c-1.9-2-2.6-4.5-2.2-7.6 1 .4 1.7 1 2.2 1.8.5-.8 1.2-1.4 2.2-1.8.4 3.1-.3 5.6-2.2 7.6z"/>',
    shield: '<path d="M12 3l7.5 2.8v5.5c0 4.8-3.2 8.2-7.5 9.7-4.3-1.5-7.5-4.9-7.5-9.7V5.8z"/>',
    passport: '<rect x="5" y="2.8" width="14" height="18.4" rx="1"/><circle cx="12" cy="10" r="3.2"/><path d="M9 16.5h6"/>',
    bag: '<path d="M5 8h14l-1 12.5H6z"/><path d="M9 10.5V6.5a3 3 0 0 1 6 0v4"/>',
    wallet: '<path d="M4 6.5h14.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M4 6.5L15.5 4v2.5M15.5 13.2h4.5"/>',
    gift: '<rect x="3.5" y="8.5" width="17" height="4" rx=".5"/><path d="M5 12.5v8h14v-8M12 8.5v12M12 8.5c-1.5-3.6-5.8-4-5.8-1.6 0 1.6 3.4 1.6 5.8 1.6zM12 8.5c1.5-3.6 5.8-4 5.8-1.6 0 1.6-3.4 1.6-5.8 1.6z"/>',
    plus: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    minus: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
    check: '<path d="M4.5 12.5l4.8 4.8L19.5 7"/>',
    checkCircle: '<circle cx="12" cy="12" r="9.5"/><path d="M7.8 12.3l2.9 2.9 5.6-5.8"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="1"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    phone: '<path d="M8.6 3.5l2 4.4-2.2 1.6a11 11 0 0 0 6.1 6.1l1.6-2.2 4.4 2-.6 3.4a1.5 1.5 0 0 1-1.6 1.2C10.6 19.4 4.6 13.4 4 5.7a1.5 1.5 0 0 1 1.2-1.6z"/>',
    wave: '<path d="M2.5 15c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 3-1.5M2.5 19c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 3-1.5"/><circle cx="14" cy="7.5" r="3"/>',
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.8 12.4a9.4 9.4 0 0 1 12.4 0M9 15.8a4.6 4.6 0 0 1 6 0"/><circle cx="12" cy="19" r=".8"/>',
    pool: '<path d="M2.5 18c2 0 2-1.4 4-1.4s2 1.4 4 1.4 2-1.4 4-1.4 2 1.4 4 1.4 2-1.4 3-1.4"/><path d="M8 15V5.5a2 2 0 0 1 3.6-1.2M16 15V5.5a2 2 0 0 1 3.6-1.2M8 8.5h8M8 12h8"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
    globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.6 3.9 5.8 3.9 9.5s-1.3 6.9-3.9 9.5c-2.6-2.6-3.9-5.8-3.9-9.5s1.3-6.9 3.9-9.5z"/>',
    camera: '<path d="M3.5 8h4l1.6-2.5h5.8L16.5 8h4v11.5h-17z"/><circle cx="12" cy="13.5" r="3.6"/>',
    info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.5v.2"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || P.compass) + "</svg>";
  }

  /* ---------------- Images ---------------- */
  // Accepts an Unsplash photo id such as "1612698093158-e07ac200d44e" or a normal image path.
  function img(src, w) {
    if (!src) return "";
    if (/^(https?:|\/|assets\/|\.\/)/.test(src)) return src;
    return "https://images.unsplash.com/photo-" + src + "?auto=format&fit=crop&q=75&w=" + (w || 1200);
  }
  function srcset(src) {
    if (!src || /^(https?:|\/|assets\/|\.\/)/.test(src)) return "";
    return [480, 800, 1200, 1800].map(function (w) { return img(src, w) + " " + w + "w"; }).join(", ");
  }
  function picture(src, alt, opts) {
    opts = opts || {};
    var ss = srcset(src);
    return '<img src="' + img(src, opts.w || 1200) + '"' + (ss ? ' srcset="' + ss + '" sizes="' + (opts.sizes || "100vw") + '"' : "") +
      ' alt="' + esc(alt || "") + '"' + (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
  }

  /* ---------------- Formatting ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function money(n, cur) {
    if (n == null || isNaN(n)) return "";
    return new Intl.NumberFormat("en-US", { style: "currency", currency: cur || "USD", maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);
  }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function parseDate(s) { if (!s) return null; var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtDate(s, withYear) {
    var d = parseDate(s); if (!d) return "";
    return MONTHS[d.getMonth()] + " " + d.getDate() + (withYear === false ? "" : ", " + d.getFullYear());
  }
  function dateRange(trip) {
    var d = trip.dates || {};
    if (d.label) return d.label;
    var a = parseDate(d.start), b = parseDate(d.end);
    if (!a) return "Dates to be announced";
    if (!b) return fmtDate(d.start);
    if (a.getFullYear() !== b.getFullYear()) return fmtDate(d.start) + " to " + fmtDate(d.end);
    if (a.getMonth() !== b.getMonth()) return MONTHS[a.getMonth()] + " " + a.getDate() + " to " + MONTHS[b.getMonth()] + " " + b.getDate() + ", " + b.getFullYear();
    return MONTHS[a.getMonth()] + " " + a.getDate() + " to " + b.getDate() + ", " + b.getFullYear();
  }
  function duration(trip) {
    var n = trip.durationDays, nights = trip.durationNights != null ? trip.durationNights : n - 1;
    return n ? n + " days, " + nights + " nights" : "";
  }
  var STATUS = {
    open: { label: "Now booking", dot: "" },
    inquiry: { label: "Accepting inquiries", dot: "" },
    limited: { label: "Limited spaces", dot: "limited" },
    waitlist: { label: "Waitlist only", dot: "limited" },
    soldout: { label: "Fully booked", dot: "closed" },
    "coming-soon": { label: "Coming soon", dot: "closed" }
  };
  function status(trip) { return STATUS[trip.status] || STATUS["coming-soon"]; }
  function bookable(trip) { return ["open", "inquiry", "limited", "waitlist"].indexOf(trip.status) > -1; }
  function fromPrice(trip) { var p = trip.pricing || {}; return p.from != null ? money(p.from, p.currency) : null; }

  /* ---------------- Trip card ---------------- */
  function tripCard(trip, opts) {
    opts = opts || {};
    var st = status(trip), price = fromPrice(trip);
    var url = "trip.html?id=" + encodeURIComponent(trip.id);
    return '<article class="trip-card reveal">' +
      '<div class="trip-card-media">' + picture(trip.cardImage || trip.heroImage, trip.imageAlt || trip.destination, { w: 800, sizes: "(min-width:1100px) 25vw, (min-width:680px) 50vw, 100vw" }) +
      '<div class="badges"><span class="badge"><span class="status-dot ' + st.dot + '"></span>' + esc(st.label) + "</span>" +
      (trip.demo && B.showDemoNotices ? '<span class="badge sample">Sample trip</span>' : "") + "</div></div>" +
      '<div class="trip-card-body">' +
      '<p class="location">' + esc(trip.destination) + "</p>" +
      '<h3><a href="' + url + '">' + esc(trip.title) + "</a></h3>" +
      '<ul class="trip-meta">' +
      "<li>" + icon("calendar") + "<span>" + esc(dateRange(trip)) + (trip.demo && B.showDemoNotices ? " (sample)" : "") + "</span></li>" +
      "<li>" + icon("clock") + "<span>" + esc(duration(trip)) + "</span></li>" +
      "</ul>" +
      (opts.summary !== false ? '<p class="summary">' + esc(trip.summary) + "</p>" : "") +
      '<div class="trip-card-foot"><p class="price-from mb-0">' + (price ? "From" + (trip.demo && B.showDemoNotices ? " (sample)" : "") + "<strong>" + price + "</strong>" : "Pricing<strong>Coming soon</strong>") + "</p>" +
      '<span class="text-link" aria-hidden="true">' + (opts.cta || "View experience") + " " + icon("arrow") + "</span></div>" +
      "</div></article>";
  }

  /* ---------------- Header & footer ---------------- */
  function wordmark() {
    if (B.logo) return '<img src="' + esc(B.logo) + '" alt="' + esc(B.name) + '">';
    return '<span class="wordmark-name">' + esc(B.name) + '</span><span class="wordmark-tag">' + esc(B.tagline) + "</span>";
  }
  var NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "approach.html", label: "Our Approach", page: "approach" },
    { href: "about.html", label: "About", page: "about" },
    { href: "faq.html", label: "FAQ", page: "faq" },
    { href: "contact.html", label: "Contact", page: "contact" }
  ];
  function renderHeader() {
    var el = document.querySelector("[data-site-header]"); if (!el) return;
    var page = document.body.getAttribute("data-page");
    el.className = "site-header";
    el.innerHTML = '<div class="header-inner">' +
      '<a class="wordmark" href="index.html" aria-label="' + esc(B.name) + ' home">' + wordmark() + "</a>" +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu"><span></span></button>' +
      '<nav class="main-nav" id="main-nav" aria-label="Main">' +
      NAV.map(function (n) { return '<a class="nav-link" href="' + n.href + '"' + (n.page === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>"; }).join("") +
      '<a class="btn btn-dark" href="trips.html"' + (page === "trips" ? ' aria-current="page"' : "") + ">Explore Trips</a>" +
      "</nav></div>";
    var btn = el.querySelector(".menu-toggle");
    function setOpen(open) {
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    btn.addEventListener("click", function () { setOpen(!document.body.classList.contains("menu-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setOpen(false); btn.focus(); } });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (m) { if (m.matches) setOpen(false); });
    var onScroll = function () { el.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }
  function renderFooter() {
    var el = document.querySelector("[data-site-footer]"); if (!el) return;
    var c = B.contact || {};
    var year = new Date().getFullYear();
    el.className = "site-footer on-dark";
    el.innerHTML = '<div class="container"><div class="footer-grid">' +
      '<div><a class="wordmark" href="index.html" aria-label="' + esc(B.name) + ' home">' + wordmark() + "</a>" +
      '<p class="footer-philosophy">' + esc(B.philosophy) + "</p></div>" +
      '<div><h2>Journeys</h2><ul><li><a href="trips.html">Explore Trips</a></li><li><a href="approach.html">Our Approach</a></li><li><a href="reserve.html">Reserve Your Spot</a></li><li><a href="faq.html">FAQ</a></li></ul></div>' +
      '<div><h2>Company</h2><ul><li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact</a></li>' +
      (c.instagram ? '<li><a href="' + esc(c.instagram) + '" rel="noopener">Instagram</a></li>' : "") +
      (c.facebook ? '<li><a href="' + esc(c.facebook) + '" rel="noopener">Facebook</a></li>' : "") +
      "</ul></div>" +
      '<div><h2>Contact</h2><ul>' +
      (c.email ? '<li><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></li>" : "") +
      (c.phone ? '<li><a href="tel:' + esc(c.phone.replace(/[^\d+]/g, "")) + '">' + esc(c.phone) + "</a></li>" : "") +
      (c.location ? "<li>" + esc(c.location) + "</li>" : "") + "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>&copy; ' + year + " " + esc(B.name) + ". All rights reserved.</span>" +
      '<span><a href="privacy.html">Privacy</a> &nbsp;&middot;&nbsp; <a href="terms.html">Booking Terms</a> &nbsp;&middot;&nbsp; <a href="cancellation.html">Cancellation</a> &nbsp;&middot;&nbsp; <a href="accessibility.html">Accessibility</a></span></div>' +
      "</div>";
  }

  /* ---------------- Brand text hooks ---------------- */
  function fillBrand() {
    document.querySelectorAll("[data-brand]").forEach(function (n) {
      var key = n.getAttribute("data-brand");
      var val = key.split(".").reduce(function (o, k) { return o && o[k]; }, B);
      if (val) n.textContent = val;
    });
    document.querySelectorAll("[data-brand-email]").forEach(function (a) {
      var e = (B.contact || {}).email; if (!e) return;
      a.href = "mailto:" + e; if (!a.textContent.trim()) a.textContent = e;
    });
    if (!B.showOwnerNotes) document.querySelectorAll(".owner-note").forEach(function (n) { n.remove(); });
    var anyDemo = (window.TRIPS || []).some(function (t) { return t.demo && t.published !== false; });
    if (!B.showDemoNotices || !anyDemo) document.querySelectorAll(".demo-only").forEach(function (n) { n.remove(); });
    document.title = document.title.replace(/SOJOURN/g, B.name);
  }

  /* ---------------- Reveal on scroll ---------------- */
  var io = null;
  function observe(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------------- Forms ---------------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function setError(field, msg) {
    var id = field.id + "-error";
    var err = document.getElementById(id);
    if (!err) {
      err = document.createElement("p"); err.className = "field-error"; err.id = id; err.setAttribute("aria-live", "polite");
      (field.closest(".field") || field.parentNode).appendChild(err);
    }
    err.textContent = msg || "";
    if (msg) { field.setAttribute("aria-invalid", "true"); field.setAttribute("aria-describedby", id); }
    else { field.removeAttribute("aria-invalid"); }
  }
  // Validates required fields, emails and checkboxes inside a container. Returns true when valid.
  function validate(container) {
    var ok = true, first = null;
    container.querySelectorAll("input, select, textarea").forEach(function (f) {
      if (f.type === "hidden" || f.disabled || f.closest(".hidden")) return;
      var msg = "";
      var v = (f.value || "").trim();
      if (f.type === "checkbox") { if (f.required && !f.checked) msg = f.getAttribute("data-msg") || "Please check this box to continue."; }
      else if (f.type === "radio") { return; }
      else if (f.required && !v) msg = f.getAttribute("data-msg") || "This field is required.";
      else if (v && f.type === "email" && !EMAIL_RE.test(v)) msg = "Please enter a valid email address.";
      else if (v && f.type === "tel" && v.replace(/\D/g, "").length < 7) msg = "Please enter a valid phone number.";
      setError(f, msg);
      if (msg) { ok = false; if (!first) first = f; }
    });
    if (first) first.focus();
    return ok;
  }
  // Sends a form using the provider set in brand.js. Resolves to "sent", "demo" or rejects.
  function send(formName, data) {
    var cfg = B.forms || {};
    var body = Object.assign({ "form-name": formName }, data);
    if (cfg.provider === "netlify") {
      return fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(body).toString() })
        .then(function (r) { if (!r.ok) throw new Error("Network"); return "sent"; });
    }
    if (cfg.provider === "formspree" && cfg.endpoint) {
      return fetch(cfg.endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(body) })
        .then(function (r) { if (!r.ok) throw new Error("Network"); return "sent"; });
    }
    return new Promise(function (res) { setTimeout(function () { res("demo"); }, 500); });
  }
  function formData(form) {
    var out = {};
    new FormData(form).forEach(function (v, k) { out[k] = out[k] ? out[k] + ", " + v : v; });
    delete out["bot-field"];
    return out;
  }
  function statusMsg(el, type, html) { el.className = "form-status " + type; el.innerHTML = html; el.setAttribute("tabindex", "-1"); el.focus({ preventScroll: false }); }
  function contactFallback() {
    var e = (B.contact || {}).email;
    return e ? ' You can also reach us at <a href="mailto:' + esc(e) + '">' + esc(e) + "</a>." : "";
  }
  // Wires simple forms marked data-simple-form (newsletter, contact).
  function wireSimpleForms() {
    document.querySelectorAll("form[data-simple-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (form.querySelector('[name="bot-field"]') && form.querySelector('[name="bot-field"]').value) return;
        var out = form.querySelector(".form-status");
        if (!validate(form)) return;
        var btn = form.querySelector('[type="submit"]');
        btn.classList.add("is-loading"); btn.disabled = true;
        send(form.getAttribute("name"), formData(form)).then(function (mode) {
          if (mode === "demo") {
            statusMsg(out, "info", "<strong>Demo mode.</strong> This form is working, but it is not connected to an inbox yet, so nothing was sent." + contactFallback());
          } else {
            statusMsg(out, "success", form.getAttribute("data-success") || "Thank you. Your message has been sent.");
            form.reset();
          }
        }).catch(function () {
          statusMsg(out, "error", "Sorry, something went wrong and your message was not sent. Please try again." + contactFallback());
        }).finally(function () { btn.classList.remove("is-loading"); btn.disabled = false; });
      });
      form.querySelectorAll("input, textarea, select").forEach(function (f) {
        f.addEventListener("input", function () { if (f.getAttribute("aria-invalid")) setError(f, ""); });
      });
    });
  }

  /* ---------------- Trips helpers ---------------- */
  function trips() { return (window.TRIPS || []).filter(function (t) { return t.published !== false; }); }
  function tripById(id) { return trips().filter(function (t) { return t.id === id; })[0] || null; }
  function param(name) { return new URLSearchParams(window.location.search).get(name); }

  /* ---------------- Page ready hook ---------------- */
  var readyFns = [];
  function ready(fn) { if (readyFns) readyFns.push(fn); else fn(); }

  /* ---------------- Expose ---------------- */
  window.SJ = {
    ready: ready, imgSrc: img, srcset: srcset,
    icon: icon, img: img, picture: picture, esc: esc, money: money, fmtDate: fmtDate, dateRange: dateRange,
    duration: duration, status: status, bookable: bookable, fromPrice: fromPrice, tripCard: tripCard,
    observe: observe, validate: validate, setError: setError, send: send, statusMsg: statusMsg,
    contactFallback: contactFallback, trips: trips, tripById: tripById, param: param, parseDate: parseDate, MONTHS: MONTHS
  };

  /* ---------------- Init ---------------- */
  function init() {
    renderHeader(); renderFooter(); fillBrand();
    document.querySelectorAll("[data-icon]").forEach(function (n) { n.innerHTML = icon(n.getAttribute("data-icon"), n.getAttribute("data-icon-class") || "icon"); });
    document.querySelectorAll("[data-img]").forEach(function (n) {
      n.outerHTML = picture(n.getAttribute("data-img"), n.getAttribute("data-alt"), { eager: n.hasAttribute("data-eager"), sizes: n.getAttribute("data-sizes") || "100vw", w: +(n.getAttribute("data-w") || 1600) });
    });
    wireSimpleForms();
    readyFns.forEach(function (fn) { fn(); }); readyFns = null;
    observe();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
