/*
  BRAND SETTINGS
  Change the business name, tagline, contact details and switches here.
  Every page reads from this file, so you only edit it once.
*/
window.BRAND = {
  name: "SOJOURN",
  tagline: "Travel With Purpose",
  philosophy: "Explore. Learn. Give Back. Unwind.",

  // Optional logo image. Leave empty to show the text wordmark.
  // Example: "logo.svg"
  logo: "",

  contact: {
    email: "hello@yourdomain.com",     // OWNER: replace with the real inbox
    phone: "",                          // OWNER: optional, such as "(555) 555-0123"
    location: "Based in Texas, traveling worldwide",
    instagram: "",                      // OWNER: optional full link
    facebook: ""                        // OWNER: optional full link
  },

  /*
    FORMS
    provider: "none"      Forms validate and show a clear demo message, nothing is sent.
    provider: "netlify"   Works automatically when the site is hosted on Netlify.
    provider: "formspree" Paste your Formspree form link into endpoint.
  */
  forms: {
    provider: "none",
    endpoint: ""
  },

  /*
    PAYMENTS
    Leave enabled false until Stripe is set up. While false, the booking page
    sends a reservation request only and never takes payment.
    When ready, create a Stripe Payment Link for each trip deposit and paste it
    into that trip's pricing.depositPaymentLink in trips.js, then set enabled true.
  */
  payments: {
    enabled: false,
    provider: "Stripe"
  },

  // Shows small "Owner to confirm" tags on placeholder content. Set false at launch.
  showOwnerNotes: true,

  // Shows the "sample trip" notice on demonstration trips.
  showDemoNotices: true
};
