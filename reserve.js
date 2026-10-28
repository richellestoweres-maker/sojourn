/* Reservation request flow. Never takes payment and never shows a booking as confirmed. */
SJ.ready(function () {
  var B = window.BRAND, e = SJ.esc, I = SJ.icon, money = SJ.money;
  var form = document.getElementById("reservation-form");
  var panels = [].slice.call(form.querySelectorAll(".step-panel"));
  var progress = document.getElementById("progress");
  var btnBack = document.getElementById("btn-back"), btnNext = document.getElementById("btn-next"), btnSubmit = document.getElementById("btn-submit");
  var tripSel = document.getElementById("r-trip");
  var state = { step: 0, trip: null, travelers: 2, room: null };
  var MAX = 6;

  var bookable = SJ.trips().filter(function (t) { return SJ.bookable(t) && t.pricing && t.pricing.occupancy && t.pricing.occupancy.length; });

  /* Trip choices */
  tripSel.innerHTML = '<option value="">Select a journey</option>' + bookable.map(function (t) {
    return '<option value="' + e(t.id) + '">' + e(t.title) + ", " + e(t.destination) + (t.demo && B.showDemoNotices ? " (sample)" : "") + "</option>";
  }).join("");
  var requested = SJ.param("trip");
  if (requested) {
    var rt = SJ.tripById(requested);
    if (rt && bookable.indexOf(rt) > -1) tripSel.value = rt.id;
    else if (rt) {
      var msg = document.getElementById("trip-unavailable");
      msg.classList.remove("hidden");
      msg.innerHTML = "<strong>" + e(rt.title) + "</strong> is not open for reservations yet. Choose another journey or <a href=\"contact.html?trip=" + encodeURIComponent(rt.id) + "\">ask us about it</a>.";
    }
  }
  if (!bookable.length) {
    form.innerHTML = '<div class="empty-state"><h2 class="h3">No journeys are open for reservations</h2><p class="muted">Join the list to hear first when the next trip opens.</p><a class="btn btn-dark" href="index.html#join">Join the List</a></div>';
    document.getElementById("summary").parentNode.classList.add("hidden");
    return;
  }

  /* Progress */
  progress.innerHTML = panels.map(function (p, i) { return '<li data-i="' + i + '">' + e(p.getAttribute("data-step")) + "</li>"; }).join("");

  function setTrip() {
    state.trip = SJ.tripById(tripSel.value) || null;
    if (state.trip) {
      var occ = state.trip.pricing.occupancy;
      if (!state.room || !occ.some(function (o) { return o.id === state.room; })) state.room = occ[0].id;
      var max = state.trip.groupSize && state.trip.groupSize.max ? Math.min(MAX, state.trip.groupSize.max) : MAX;
      if (state.travelers > max) state.travelers = max;
    }
    renderRooms(); renderSummary();
  }

  /* Travelers */
  var countEl = document.getElementById("trav-count");
  document.getElementById("trav-minus").addEventListener("click", function () { if (state.travelers > 1) { state.travelers--; changed(); } });
  document.getElementById("trav-plus").addEventListener("click", function () { if (state.travelers < MAX) { state.travelers++; changed(); } });
  function changed() { renderRooms(); renderOthers(); renderSummary(); }

  function roomFits(o) { return state.travelers % (o.travelersPerRoom || 1) === 0; }
  function selectedRoom() {
    if (!state.trip) return null;
    return state.trip.pricing.occupancy.filter(function (o) { return o.id === state.room; })[0] || null;
  }
  function renderRooms() {
    countEl.textContent = state.travelers;
    document.getElementById("trav-minus").disabled = state.travelers <= 1;
    document.getElementById("trav-plus").disabled = state.travelers >= MAX;
    document.getElementById("trav-hint").textContent = "For groups larger than " + MAX + ", please contact us.";
    var box = document.getElementById("room-options");
    if (!state.trip) { box.innerHTML = '<p class="muted">Choose a journey first.</p>'; return; }
    var cur = state.trip.pricing.currency;
    box.innerHTML = state.trip.pricing.occupancy.map(function (o) {
      var fits = roomFits(o);
      return '<label class="option-card"><input type="radio" name="room_choice" value="' + e(o.id) + '"' + (o.id === state.room ? " checked" : "") + (fits ? "" : " disabled") + ">" +
        "<span><strong>" + e(o.label) + "</strong><small>" + e(o.detail || "") + (fits ? "" : ". Needs " + o.travelersPerRoom + " travelers per room.") + "</small></span>" +
        '<span class="opt-price">' + money(o.perPerson, cur) + '<small style="text-align:right">per person</small></span></label>';
    }).join("");
    box.querySelectorAll("input").forEach(function (r) {
      r.addEventListener("change", function () { state.room = r.value; document.getElementById("room-error").textContent = ""; renderSummary(); });
    });
    var sel = selectedRoom();
    if (sel && !roomFits(sel)) {
      document.getElementById("room-error").textContent = "Shared rooms are for " + sel.travelersPerRoom + " travelers each. Choose a private room, change the number of travelers, or tell us your preference in the notes.";
    } else document.getElementById("room-error").textContent = "";
  }

  /* Additional travelers */
  function renderOthers() {
    var box = document.getElementById("other-travelers");
    var existing = {};
    box.querySelectorAll("input").forEach(function (i) { existing[i.id] = i.value; });
    var html = "";
    for (var n = 2; n <= state.travelers; n++) {
      html += '<div class="traveler-block"><h3>Traveler ' + n + '</h3><div class="form-grid two">' +
        '<div class="field"><label for="t' + n + '-first">First name</label><input class="input" id="t' + n + '-first" required data-msg="Please enter a first name." value="' + e(existing["t" + n + "-first"] || "") + '"></div>' +
        '<div class="field"><label for="t' + n + '-last">Last name</label><input class="input" id="t' + n + '-last" required data-msg="Please enter a last name." value="' + e(existing["t" + n + "-last"] || "") + '"></div>' +
        '<div class="field span-2"><label for="t' + n + '-email">Email <span class="muted" style="text-transform:none;letter-spacing:0;font-weight:400">(optional)</span></label><input class="input" id="t' + n + '-email" type="email" value="' + e(existing["t" + n + "-email"] || "") + '"></div>' +
        "</div></div>";
    }
    box.innerHTML = html;
  }

  /* Pricing */
  function totals() {
    var r = selectedRoom(); if (!r || !state.trip) return null;
    var p = state.trip.pricing, total = r.perPerson * state.travelers, dep = (p.deposit || 0) * state.travelers;
    return { room: r, total: total, deposit: dep, balance: total - dep, cur: p.currency };
  }
  function renderPricing() {
    var t = totals(), box = document.getElementById("pricing-detail");
    if (!t) { box.innerHTML = ""; return; }
    var p = state.trip.pricing;
    box.innerHTML =
      '<div class="price-row"><span>' + e(t.room.label) + ", " + money(t.room.perPerson, t.cur) + " &times; " + state.travelers + "</span><span>" + money(t.total, t.cur) + "</span></div>" +
      '<div class="price-row"><span>Deposit, ' + money(p.deposit, t.cur) + " per person</span><span>" + money(t.deposit, t.cur) + "</span></div>" +
      '<div class="price-row"><span>Remaining balance</span><span>' + money(t.balance, t.cur) + "</span></div>" +
      '<div class="price-row total"><span>Trip total</span><span>' + money(t.total, t.cur) + "</span></div>" +
      '<h3 class="h4 mt-m">Payment schedule</h3><ul class="schedule-list">' + (p.schedule || []).map(function (s) {
        var amt = s.amount === "deposit" ? t.deposit : s.amount === "balance" ? t.balance : s.amount;
        return "<li><span><strong style=\"font-weight:500\">" + e(s.label) + "</strong><small>" + e(s.due) + "</small></span><span>" + money(amt, t.cur) + "</span></li>";
      }).join("") + "</ul>";
    document.getElementById("pricing-note").textContent = (state.trip.demo && B.showDemoNotices ? "Sample pricing for demonstration only. " : "") +
      "Prices are per person in " + t.cur + ". Flights and other items listed as not included are extra.";
    document.getElementById("pay-dep-1").textContent = money(t.deposit, t.cur);
    document.getElementById("pay-dep-2").textContent = money(t.deposit, t.cur);
  }

  /* Terms summary */
  function renderTerms() {
    var t = state.trip; if (!t) return;
    var p = t.pricing;
    document.getElementById("terms-summary").innerHTML =
      '<div class="split" style="gap:32px;align-items:start"><div><h3 class="h4">Included</h3><ul class="req-list">' + (t.inclusions || []).map(function (i) { return "<li>" + e(i.label) + "</li>"; }).join("") + "</ul></div>" +
      '<div><h3 class="h4">Not included</h3><ul class="req-list">' + (t.exclusions || []).map(function (x) { return "<li>" + e(x) + "</li>"; }).join("") + "</ul></div></div>" +
      '<h3 class="h4 mt-m">Cancellation</h3><p class="muted">' + (p.cancellationPolicy ? e(p.cancellationPolicy) : "The cancellation policy for this journey will be shared with you before you pay a deposit.") + "</p>" +
      ((t.requirements || []).length ? '<h3 class="h4 mt-m">Travel requirements</h3><ul class="req-list">' + t.requirements.map(function (r) { return "<li>" + e(r) + "</li>"; }).join("") + "</ul>" : "");
    var payNow = document.getElementById("pay-now-card"), canPay = B.payments && B.payments.enabled && p.depositPaymentLink;
    payNow.classList.toggle("hidden", !canPay);
    payNow.querySelector("input").disabled = !canPay;
  }

  /* Review */
  function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; }
  function othersList() {
    var out = [];
    for (var n = 2; n <= state.travelers; n++) out.push((val("t" + n + "-first") + " " + val("t" + n + "-last")).trim() + (val("t" + n + "-email") ? " (" + val("t" + n + "-email") + ")" : ""));
    return out;
  }
  function renderReview() {
    var t = state.trip, tt = totals();
    var pay = form.querySelector('input[name="payment_option"]:checked');
    var block = function (title, step, body) { return '<div class="review-block"><h3>' + title + ' <button type="button" data-go="' + step + '">Edit</button></h3>' + body + "</div>"; };
    document.getElementById("review").innerHTML =
      block("Journey", 0, "<p><strong>" + e(t.title) + "</strong></p><p class=\"muted\">" + e(t.destination) + ", " + e(SJ.dateRange(t)) + "</p>") +
      block("Travelers and room", 1, "<p>" + state.travelers + " traveler" + (state.travelers > 1 ? "s" : "") + ", " + e(tt.room.label.toLowerCase()) + "</p>") +
      block("Pricing", 2, "<p>Trip total " + money(tt.total, tt.cur) + "</p><p class=\"muted\">Deposit " + money(tt.deposit, tt.cur) + ", balance " + money(tt.balance, tt.cur) + "</p>") +
      block("Lead traveler", 3, "<p>" + e(val("r-first") + " " + val("r-last")) + "</p><p class=\"muted\">" + e(val("r-email")) + ", " + e(val("r-phone")) + "</p>" +
        (othersList().length ? '<p class="muted">Also traveling: ' + e(othersList().join("; ")) + "</p>" : "") +
        (val("r-notes") ? '<p class="muted">Notes: ' + e(val("r-notes")) + "</p>" : "")) +
      block("Payment preference", 5, "<p>" + e(pay ? pay.value : "") + "</p>") +
      '<p class="disclaimer">Submitting sends a reservation request. You will not be charged, and your spot is not confirmed until your deposit is received and we send written confirmation.</p>';
    document.getElementById("review").querySelectorAll("[data-go]").forEach(function (b) { b.addEventListener("click", function () { go(+b.getAttribute("data-go")); }); });
  }

  /* Summary sidebar */
  function renderSummary() {
    var box = document.getElementById("summary"), t = state.trip;
    if (!t) { box.innerHTML = '<div class="inner"><p class="eyebrow">Your journey</p><p class="muted mb-0">Choose a journey to see your summary.</p></div>'; return; }
    var tt = totals(), fits = tt && roomFits(tt.room);
    box.innerHTML = SJ.picture(t.cardImage || t.heroImage, t.destination, { w: 700, sizes: "400px" }) +
      '<div class="inner"><p class="eyebrow" style="margin-bottom:6px">' + e(t.destination) + "</p><h2 class=\"h3\">" + e(t.title) + "</h2>" +
      '<ul class="trip-meta"><li>' + I("calendar") + e(SJ.dateRange(t)) + "</li><li>" + I("clock") + e(SJ.duration(t)) + "</li><li>" + I("users") + state.travelers + " traveler" + (state.travelers > 1 ? "s" : "") + "</li></ul>" +
      (tt && fits ? '<div class="price-row"><span>Trip total</span><span>' + money(tt.total, tt.cur) + '</span></div><div class="price-row" style="border:0"><span>Deposit</span><span>' + money(tt.deposit, tt.cur) + "</span></div>" : "") +
      (t.demo && B.showDemoNotices ? '<p class="small muted mb-0 mt-s">Sample trip. Pricing shown for demonstration.</p>' : "") +
      "</div>";
  }

  /* Step navigation */
  function validStep(i) {
    var panel = panels[i];
    if (i === 0) { if (!SJ.validate(panel)) return false; }
    if (i === 1) {
      var r = selectedRoom();
      if (!r || !roomFits(r)) { document.getElementById("room-error").textContent = document.getElementById("room-error").textContent || "Please choose a room arrangement."; return false; }
    }
    if (i === 3 || i === 4) return SJ.validate(panel);
    return true;
  }
  function go(i) {
    state.step = Math.max(0, Math.min(panels.length - 1, i));
    panels.forEach(function (p, n) { p.classList.toggle("active", n === state.step); });
    progress.querySelectorAll("li").forEach(function (li, n) {
      li.className = n < state.step ? "done" : n === state.step ? "current" : "";
      if (n === state.step) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
    });
    btnBack.style.visibility = state.step === 0 ? "hidden" : "visible";
    var last = state.step === panels.length - 1;
    btnNext.classList.toggle("hidden", last); btnSubmit.classList.toggle("hidden", !last);
    if (state.step === 2) renderPricing();
    if (state.step === 4) renderTerms();
    if (state.step === 5) { renderPricing(); renderTerms(); }
    if (state.step === 6) renderReview();
    var h = panels[state.step].querySelector("h2");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    var top = form.getBoundingClientRect().top + window.scrollY - 140;
    if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
  }
  btnNext.addEventListener("click", function () { if (validStep(state.step)) go(state.step + 1); });
  btnBack.addEventListener("click", function () { go(state.step - 1); });
  tripSel.addEventListener("change", function () { SJ.setError(tripSel, ""); document.getElementById("trip-unavailable").classList.add("hidden"); setTrip(); });
  form.addEventListener("input", function (ev) { if (ev.target.getAttribute("aria-invalid")) SJ.setError(ev.target, ""); });
  form.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter" && ev.target.tagName === "INPUT" && state.step < panels.length - 1) { ev.preventDefault(); btnNext.click(); }
  });

  /* Submit */
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (state.step !== panels.length - 1) return;
    if (form.querySelector('[name="bot-field"]').value) return;
    for (var i = 0; i < panels.length - 1; i++) { if (!validStep(i)) { go(i); validStep(i); return; } }
    var tt = totals();
    document.getElementById("h-travelers").value = state.travelers;
    document.getElementById("h-room").value = tt.room.label;
    document.getElementById("h-price").value = "Total " + money(tt.total, tt.cur) + ", deposit " + money(tt.deposit, tt.cur) + ", balance " + money(tt.balance, tt.cur) + (state.trip.demo ? " (sample trip)" : "");
    document.getElementById("h-others").value = othersList().join("; ");
    var data = {};
    new FormData(form).forEach(function (v, k) { if (k !== "bot-field" && k !== "room_choice") data[k] = data[k] ? data[k] + ", " + v : v; });
    data.trip = state.trip.title + " (" + state.trip.id + ")";
    var status = document.getElementById("submit-status");
    status.className = "form-status"; status.innerHTML = "";
    btnSubmit.classList.add("is-loading"); btnSubmit.disabled = true;
    SJ.send("reservation", data).then(function (mode) { showConfirmation(mode, data); })
      .catch(function () { SJ.statusMsg(status, "error", "Your request could not be sent. Please check your connection and try again." + SJ.contactFallback()); })
      .finally(function () { btnSubmit.classList.remove("is-loading"); btnSubmit.disabled = false; });
  });

  function showConfirmation(mode, data) {
    var box = document.getElementById("confirmation"), t = state.trip;
    var payNow = data.payment_option === "Pay deposit now online" && B.payments.enabled && t.pricing.depositPaymentLink;
    if (mode === "demo") {
      box.innerHTML = '<div class="confirmation">' + I("info") + '<p class="eyebrow">Demo mode</p><h2 class="h2">Request Not Sent</h2>' +
        '<p class="lead" style="margin:0 auto">Everything worked, but this site is not connected to an inbox yet, so your reservation request was not sent and nothing was charged.</p>' +
        '<p class="muted mt-m">' + SJ.contactFallback().replace(" You can also", "You can") + '</p><div class="btn-row mt-m" style="justify-content:center"><a class="btn btn-outline" href="trip.html?id=' + encodeURIComponent(t.id) + '">Back to the Journey</a></div></div>';
    } else {
      box.innerHTML = '<div class="confirmation">' + I("checkCircle") + '<p class="eyebrow">Request received</p><h2 class="h2">Thank You, ' + e(data.first_name) + "</h2>" +
        '<p class="lead" style="margin:0 auto">We\'ve received your reservation request for <strong>' + e(t.title) + "</strong>. We'll be in touch at " + e(data.email) + ".</p>" +
        '<div class="stage-key" style="text-align:left"><div><strong>1. Request</strong>Received. No payment has been taken.</div><div class="now"><strong>2. Deposit</strong>' + (payNow ? "Continue to secure payment below." : "We'll confirm availability and email your secure deposit link.") + "</div><div><strong>3. Confirmed</strong>Your booking is confirmed once your deposit is received and you get our written confirmation.</div></div>" +
        (payNow ? '<a class="btn btn-dark" href="' + e(t.pricing.depositPaymentLink) + '" rel="noopener">Continue to Secure Payment ' + I("arrow") + "</a>" : '<a class="btn btn-outline" href="trips.html">Explore More Journeys</a>') +
        "</div>";
    }
    form.classList.add("hidden"); progress.classList.add("hidden");
    box.classList.remove("hidden"); box.focus();
    window.scrollTo({ top: box.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" });
  }

  setTrip(); renderOthers(); go(0);
});
