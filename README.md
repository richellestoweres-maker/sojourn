# SOJOURN website

A luxury boutique travel website for curated, purpose driven group journeys.
SOJOURN is a placeholder name. Everything brand related lives in one file so it is easy to change.

## What is in this folder

| File | What it is |
|---|---|
| `index.html` | Home page |
| `trips.html` | Explore Trips, with filters |
| `trip.html` | One page that shows any trip, such as `trip.html?id=amalfi-coast` |
| `reserve.html` | Reservation request flow |
| `approach.html`, `about.html`, `faq.html`, `contact.html` | Information pages |
| `privacy.html`, `terms.html`, `cancellation.html`, `accessibility.html` | Policy placeholders |
| `404.html` | Page not found |
| `assets/js/brand.js` | **Business name, tagline, email, form and payment switches** |
| `assets/js/trips.js` | **Every trip: dates, prices, itinerary, hotels, inclusions** |
| `assets/css/styles.css` | Colors, fonts and layout |

## Why plain HTML instead of Next.js

The handoff suggested Next.js. This version is plain HTML, CSS and JavaScript instead, because:

* You can upload it straight to GitHub through the website, with no install or build step.
* It runs free on GitHub Pages or Netlify.
* All trips still come from one data file (`trips.js`), so moving to a content manager later is a straight swap, not a rebuild.

## Put it online with GitHub Pages (free)

1. Open the repository on GitHub and click **Add file**, then **Upload files**.
2. Drag in everything inside this folder (the files and the `assets` folder), then click **Commit changes**.
3. Go to **Settings**, then **Pages**. Under Branch choose **main** and **/ (root)**, then **Save**.
4. After a minute or two, your site appears at `https://YOUR-USERNAME.github.io/sojourn/`.

## Make the forms send to your inbox

Forms work and validate today, but show a "Demo mode" message until connected. Pick one:

* **Formspree (works on GitHub Pages):** create a free form at formspree.io, copy its link, then in `brand.js` set `provider: "formspree"` and paste the link into `endpoint`.
* **Netlify:** host the site on Netlify instead and set `provider: "netlify"`. Submissions appear in the Netlify dashboard.

## Changing things

* **Business name, email, phone:** edit `assets/js/brand.js`. Page tab titles also say SOJOURN, the site swaps them automatically.
* **Add or edit a trip:** copy a block in `assets/js/trips.js`, change the details, give it a new `id`. Set `demo: false` for real trips.
* **Photos:** the current photos are free Unsplash placeholders. Put your own in `assets/img/` and use the path, such as `"assets/img/amalfi.jpg"`.
* **Launch checklist:** set `showOwnerNotes: false` in `brand.js`, replace the sample trips, fill in the About page and policy pages.

## Taking deposits online (when ready)

The site never collects card details. When you're ready:

1. In Stripe, create a **Payment Link** for each trip's deposit.
2. Paste it into that trip's `pricing.depositPaymentLink` in `trips.js`.
3. In `brand.js` set `payments.enabled: true`.

Guests then get a "Pay deposit now" option, which sends them to Stripe after they submit their request. A booking is still only confirmed when you send written confirmation.

## Still to decide (marked "Owner to confirm" on the site)

Founder name, photo and story. Cancellation policy. Whether insurance is required. Payment plans. Solo roommate matching. Who guests contact during a trip. Real trips, hotels and local partners.
