/*
  TRIPS
  Every trip on the site comes from this list. To add a trip, copy one block,
  change the details, and give it a new unique id (used in the page link).

  demo: true      marks a sample trip. The site labels it clearly as sample content.
  published:false hides a trip without deleting it.
  status:         "open" | "inquiry" | "limited" | "waitlist" | "soldout" | "coming-soon"
  Images:         an Unsplash photo id (placeholder photography) or your own image path,
                  such as "assets/img/amalfi-hero.jpg".
  Activity types: "included" | "optional" (free, choose to join) | "extra" (additional cost)

  ALL FOUR TRIPS BELOW ARE SAMPLES. Dates, prices, hotels and partners are not real.
*/
window.TRIPS = [
  {
    id: "amalfi-coast",
    demo: true,
    published: true,
    featured: true,
    status: "inquiry",
    title: "The Amalfi Coast Journey",
    destination: "Amalfi Coast, Italy",
    country: "Italy",
    region: "Europe",
    experienceTypes: ["Coastal", "Culinary", "Culture"],
    summary: "Cliffside villages, lemon groves and long dinners above the sea, with a morning spent giving back to the coast itself.",
    overview: [
      "The Amalfi Coast is one of the most beautiful stretches of shoreline in the world, and also one of the most fragile. This journey takes you beyond the postcard views and into the life of the coast: the families who still farm terraced lemon groves, the cooks who learned recipes from their grandmothers, and the communities working to protect the hillsides they call home.",
      "Days are paced with care. Mornings begin slowly, afternoons are for discovery, and evenings gather the group around a table with a view. Every detail, from transfers to dinner reservations, is arranged before you arrive."
    ],
    heroImage: "1612698093158-e07ac200d44e",
    cardImage: "1612698093158-e07ac200d44e",
    imageAlt: "Colorful cliffside village above the sea on the Amalfi Coast",
    gallery: ["1499678329028-101435549a4e", "1590502593747-42a996133562", "1498503182468-3b51cbb6cb24"],
    dates: { start: "2027-05-10", end: "2027-05-15" },
    durationDays: 6,
    durationNights: 5,
    groupSize: { min: 8, max: 14 },
    pricing: {
      currency: "USD",
      from: 4950,
      deposit: 1000,
      occupancy: [
        { id: "double", label: "Shared room", detail: "Two travelers sharing a room, price per person", perPerson: 4950, travelersPerRoom: 2 },
        { id: "single", label: "Private room", detail: "One traveler in their own room", perPerson: 6400, travelersPerRoom: 1 }
      ],
      schedule: [
        { label: "Deposit", amount: "deposit", due: "When your reservation is accepted" },
        { label: "Remaining balance", amount: "balance", due: "90 days before departure (sample)" }
      ],
      depositPaymentLink: "",
      cancellationPolicy: ""
    },
    inclusions: [
      { icon: "bed", label: "Accommodations", detail: "Five nights in a boutique hotel overlooking the sea" },
      { icon: "car", label: "Airport transfers", detail: "Private group transfer from Naples airport on arrival and departure days" },
      { icon: "map", label: "Local transportation", detail: "Private coach and boat transfers for all scheduled activities" },
      { icon: "compass", label: "Guided experiences", detail: "Local guides in Positano, Amalfi and Ravello" },
      { icon: "utensils", label: "Selected meals", detail: "Daily breakfast, a welcome dinner, a cooking class lunch and a farewell dinner" },
      { icon: "landmark", label: "Cultural activities", detail: "Cooking class, lemon grove visit and paper making workshop" },
      { icon: "sprout", label: "Community service experience", detail: "A morning of trail and terrace restoration with a local partner" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group throughout" }
    ],
    exclusions: ["Round trip airfare to Naples", "Travel insurance", "Passport or visa expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities for guides and drivers", "Personal shopping and other personal expenses"],
    itinerary: [
      {
        title: "Arrive and Settle In",
        summary: "Arrive in Naples, transfer to the coast, and ease into Italian time.",
        image: "1499678329028-101435549a4e",
        schedule: {
          afternoon: "Meet your host at Naples airport for a private transfer along the coastal road. Check in and settle into your room.",
          evening: "Welcome aperitivo on the terrace followed by a group dinner as the sun sets over the water."
        },
        meals: ["Dinner"],
        activities: [{ name: "Private airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }]
      },
      {
        title: "Explore",
        summary: "Wander Positano's lanes and see the coast from the water.",
        image: "1515859005217-8a1f08870f59",
        schedule: {
          morning: "A guided walk through Positano, from the beach to the quiet upper lanes most visitors never reach.",
          afternoon: "Private boat along the coastline with time to swim in a hidden cove.",
          evening: "Free evening to explore on your own."
        },
        meals: ["Breakfast"],
        activities: [{ name: "Guided Positano walk", type: "included" }, { name: "Private boat afternoon", type: "included" }, { name: "Path of the Gods sunrise hike", type: "optional" }]
      },
      {
        title: "Learn and Connect",
        summary: "Cook with a local family and learn the craft behind Amalfi paper.",
        image: "1556910103-1c02745aae4d",
        schedule: {
          morning: "Visit a family run lemon grove and learn how the terraces are farmed by hand.",
          afternoon: "Cooking class and lunch with a local chef, followed by a paper making workshop in Amalfi.",
          evening: "Free evening."
        },
        meals: ["Breakfast", "Lunch"],
        activities: [{ name: "Lemon grove visit", type: "included" }, { name: "Cooking class and lunch", type: "included" }, { name: "Paper making workshop", type: "included" }]
      },
      {
        title: "Give Back",
        summary: "A morning of hands on work with a local partner protecting the coast.",
        image: "1530836369250-ef72a3f5cda8",
        schedule: {
          morning: "Join a local organization on a trail and dry stone terrace restoration project requested by the community.",
          afternoon: "Lunch together with the partner team, then time to rest.",
          evening: "Free evening."
        },
        meals: ["Breakfast", "Lunch"],
        activities: [{ name: "Terrace restoration project", type: "included" }]
      },
      {
        title: "Unwind",
        summary: "A day that is entirely yours.",
        image: "1582719508461-905c673771fd",
        schedule: {
          morning: "Sleep in, linger over breakfast, or head to the pool.",
          afternoon: "Choose a spa treatment, a beach club, or a slow afternoon in Ravello.",
          evening: "Farewell dinner overlooking the coast."
        },
        meals: ["Breakfast", "Dinner"],
        activities: [{ name: "Farewell dinner", type: "included" }, { name: "Spa treatment", type: "extra", price: "From $180 (sample)" }, { name: "Ravello gardens visit", type: "optional" }]
      },
      {
        title: "Depart",
        summary: "A final breakfast together before your transfer to Naples.",
        image: "1498503182468-3b51cbb6cb24",
        schedule: {
          morning: "Breakfast, check out and private transfer to Naples airport for your flight home."
        },
        meals: ["Breakfast"],
        activities: [{ name: "Private airport transfer", type: "included" }]
      }
    ],
    accommodation: {
      name: "Sample boutique hotel, Positano",
      description: "A family owned boutique hotel set into the cliffside, with sea view terraces, a small pool and an easy walk to the village. Final hotel to be confirmed.",
      images: ["1540541338287-41700207dee6", "1590490360182-c33d57733427"],
      roomTypes: [
        { name: "Superior sea view room", detail: "Shared or private" },
        { name: "Junior suite upgrade", detail: "On request, additional cost" }
      ],
      amenities: ["Sea view terraces", "Outdoor pool", "Breakfast daily", "Free Wi-Fi", "Air conditioning", "Concierge"]
    },
    community: {
      title: "Restoring the terraces of the coast",
      description: "The Amalfi Coast's dry stone terraces hold the hillsides in place. Many have fallen into disrepair, which increases the risk of landslides. Our service morning supports restoration work the community has asked for, led by people who know the land.",
      partner: { name: "", confirmed: false, description: "Local partner to be announced." }
    },
    requirements: ["A passport valid for at least six months after your return date", "Comfort walking on steep paths and stairs", "Travel insurance is strongly recommended"]
  },

  {
    id: "costa-rica",
    demo: true,
    published: true,
    featured: false,
    status: "inquiry",
    title: "Rainforest and Pacific Coast",
    destination: "Costa Rica",
    country: "Costa Rica",
    region: "Central America",
    experienceTypes: ["Nature", "Wellness", "Adventure"],
    summary: "Volcano trails, cloud forest canopy and a Pacific beach to finish, with a day planting trees alongside a local reforestation team.",
    overview: [
      "Costa Rica protects more than a quarter of its land, and its people have built a way of life around that choice. This journey follows that story from the slopes of the Arenal volcano to the Pacific coast.",
      "Expect warm mornings in the forest, afternoons in hot springs, and evenings listening to the rainforest come alive. The pace is active but never rushed."
    ],
    heroImage: "1580094333632-438bdc04f79f",
    cardImage: "1536708880921-03a9306ec47d",
    imageAlt: "Aerial view of a Pacific beach meeting the rainforest",
    gallery: ["1441974231531-c6227db76b6e", "1519046904884-53103b34b206", "1488459716781-31db52582fe9"],
    dates: { start: "2027-02-13", end: "2027-02-19" },
    durationDays: 7,
    durationNights: 6,
    groupSize: { min: 8, max: 16 },
    pricing: {
      currency: "USD",
      from: 3850,
      deposit: 750,
      occupancy: [
        { id: "double", label: "Shared room", detail: "Two travelers sharing a room, price per person", perPerson: 3850, travelersPerRoom: 2 },
        { id: "single", label: "Private room", detail: "One traveler in their own room", perPerson: 4900, travelersPerRoom: 1 }
      ],
      schedule: [
        { label: "Deposit", amount: "deposit", due: "When your reservation is accepted" },
        { label: "Remaining balance", amount: "balance", due: "75 days before departure (sample)" }
      ],
      depositPaymentLink: "",
      cancellationPolicy: ""
    },
    inclusions: [
      { icon: "bed", label: "Accommodations", detail: "Six nights across a rainforest lodge and a beach hotel" },
      { icon: "car", label: "Airport transfers", detail: "Group transfers from San José airport" },
      { icon: "map", label: "Local transportation", detail: "Private coach between all regions" },
      { icon: "compass", label: "Guided experiences", detail: "Naturalist guides on every forest outing" },
      { icon: "utensils", label: "Selected meals", detail: "Daily breakfast, four lunches and three dinners" },
      { icon: "sprout", label: "Community service experience", detail: "A reforestation day with a local team" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group" }
    ],
    exclusions: ["Round trip airfare to San José", "Travel insurance", "Passport expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities", "Personal expenses"],
    itinerary: [
      { title: "Arrive and Settle In", summary: "Arrive in San José and travel to the Arenal region.", image: "1469474968028-56623f02e42e", schedule: { afternoon: "Group transfer to your rainforest lodge near Arenal.", evening: "Welcome dinner at the lodge." }, meals: ["Dinner"], activities: [{ name: "Airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }] },
      { title: "Explore", summary: "Volcano trails and a soak in natural hot springs.", image: "1580094333632-438bdc04f79f", schedule: { morning: "Guided hike through old lava fields at the base of Arenal.", afternoon: "Hot springs and free time.", evening: "Free evening." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Arenal volcano hike", type: "included" }, { name: "Hot springs", type: "included" }, { name: "Zip line canopy tour", type: "extra", price: "From $95 (sample)" }] },
      { title: "Learn and Connect", summary: "A family farm, a chocolate workshop and a local market.", image: "1488459716781-31db52582fe9", schedule: { morning: "Visit a family run farm and learn about sustainable growing.", afternoon: "Bean to bar chocolate workshop.", evening: "Dinner in town." }, meals: ["Breakfast", "Lunch", "Dinner"], activities: [{ name: "Farm visit", type: "included" }, { name: "Chocolate workshop", type: "included" }] },
      { title: "Give Back", summary: "Plant native trees with a local reforestation team.", image: "1542601906990-b4d3fb778b09", schedule: { morning: "Join a community reforestation project to plant native trees along a wildlife corridor.", afternoon: "Lunch with the project team and free time." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Reforestation day", type: "included" }] },
      { title: "Explore", summary: "Travel to the Pacific coast.", image: "1551632811-561732d1e306", schedule: { morning: "Scenic transfer to the Pacific coast with a stop at a waterfall.", afternoon: "Check in at your beach hotel.", evening: "Sunset dinner." }, meals: ["Breakfast", "Dinner"], activities: [{ name: "Waterfall stop", type: "included" }] },
      { title: "Unwind", summary: "Beach, spa or simply nothing at all.", image: "1519046904884-53103b34b206", schedule: { morning: "Free morning at the beach.", afternoon: "Optional surf lesson or spa time.", evening: "Farewell gathering." }, meals: ["Breakfast"], activities: [{ name: "Surf lesson", type: "extra", price: "From $70 (sample)" }, { name: "Sunset beach walk", type: "optional" }] },
      { title: "Depart", summary: "Transfer to the airport for your flight home.", image: "1507525428034-b723cf961d3e", schedule: { morning: "Breakfast and group transfer to the airport." }, meals: ["Breakfast"], activities: [{ name: "Airport transfer", type: "included" }] }
    ],
    accommodation: {
      name: "Sample rainforest lodge and beach hotel",
      description: "Three nights at an eco lodge facing the volcano, then three nights at a small hotel steps from the Pacific. Final properties to be confirmed.",
      images: ["1520250497591-112f2f40a3f4", "1611892440504-42a792e24d32"],
      roomTypes: [{ name: "Garden view room", detail: "Shared or private" }, { name: "Ocean view upgrade", detail: "On request, additional cost" }],
      amenities: ["Pool", "Breakfast daily", "Free Wi-Fi", "Air conditioning", "Spa on site", "Volcano or ocean views"]
    },
    community: {
      title: "Reconnecting the rainforest",
      description: "Native tree planting helps reconnect patches of forest so wildlife can move safely between them. Our day supports a project chosen and led by the local community.",
      partner: { name: "", confirmed: false, description: "Local partner to be announced." }
    },
    requirements: ["A passport valid for at least six months after your return date", "Moderate fitness for hikes of up to three hours", "Travel insurance is strongly recommended"]
  },

  {
    id: "bali",
    demo: true,
    published: true,
    featured: false,
    status: "inquiry",
    title: "Temples, Terraces and Renewal",
    destination: "Bali, Indonesia",
    country: "Indonesia",
    region: "Asia",
    experienceTypes: ["Wellness", "Culture", "Nature"],
    summary: "Rice terraces at dawn, temple ceremonies and island crafts, balanced with slow days of rest by the water.",
    overview: [
      "Bali's beauty comes from its culture as much as its landscape. Offerings are placed every morning, rice is still grown by an ancient shared water system, and craft is passed down through families.",
      "This journey moves from the green heart of Ubud to the coast, with time to learn from local artisans and a morning spent caring for the island's shoreline."
    ],
    heroImage: "1537996194471-e657df975ab4",
    cardImage: "1555400038-63f5ba517a47",
    imageAlt: "Lush green rice terraces in Bali",
    gallery: ["1537953773345-d172ccf13cf1", "1518548419970-58e3b4079ab2", "1577717903315-1691ae25ab3f"],
    dates: { start: "2027-09-11", end: "2027-09-18" },
    durationDays: 8,
    durationNights: 7,
    groupSize: { min: 8, max: 14 },
    pricing: {
      currency: "USD",
      from: 4200,
      deposit: 800,
      occupancy: [
        { id: "double", label: "Shared room", detail: "Two travelers sharing a room, price per person", perPerson: 4200, travelersPerRoom: 2 },
        { id: "single", label: "Private room", detail: "One traveler in their own room", perPerson: 5300, travelersPerRoom: 1 }
      ],
      schedule: [
        { label: "Deposit", amount: "deposit", due: "When your reservation is accepted" },
        { label: "Remaining balance", amount: "balance", due: "90 days before departure (sample)" }
      ],
      depositPaymentLink: "",
      cancellationPolicy: ""
    },
    inclusions: [
      { icon: "bed", label: "Accommodations", detail: "Seven nights between Ubud and the coast" },
      { icon: "car", label: "Airport transfers", detail: "Group transfers from Denpasar airport" },
      { icon: "compass", label: "Guided experiences", detail: "Local guides for temples and rice terraces" },
      { icon: "utensils", label: "Selected meals", detail: "Daily breakfast and four group meals" },
      { icon: "landmark", label: "Cultural activities", detail: "Craft workshops and a temple visit with a local guide" },
      { icon: "lotus", label: "Wellness", detail: "Daily morning yoga, joining is always optional" },
      { icon: "sprout", label: "Community service experience", detail: "A coastal care morning with a local team" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group" }
    ],
    exclusions: ["Round trip airfare to Denpasar", "Travel insurance", "Passport or visa expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities", "Personal expenses"],
    itinerary: [
      { title: "Arrive and Settle In", summary: "Arrive in Denpasar and travel to Ubud.", image: "1537996194471-e657df975ab4", schedule: { afternoon: "Transfer to your Ubud retreat.", evening: "Welcome dinner." }, meals: ["Dinner"], activities: [{ name: "Airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }] },
      { title: "Explore", summary: "Rice terraces at sunrise and the temples of central Bali.", image: "1555400038-63f5ba517a47", schedule: { morning: "Early walk through the rice terraces with a local guide.", afternoon: "Visit a water temple and learn about Bali's ancient irrigation system." }, meals: ["Breakfast"], activities: [{ name: "Rice terrace walk", type: "included" }, { name: "Temple visit", type: "included" }] },
      { title: "Learn and Connect", summary: "Hands on workshops with Balinese artisans.", image: "1493106641515-6b5631de4bb9", schedule: { morning: "Pottery or silver craft workshop.", afternoon: "Balinese cooking class and lunch." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Craft workshop", type: "included" }, { name: "Cooking class", type: "included" }] },
      { title: "Unwind", summary: "A slow day in Ubud.", image: "1544161515-4ab6ce6db874", schedule: { morning: "Optional yoga.", afternoon: "Free time for the spa, markets or rest." }, meals: ["Breakfast"], activities: [{ name: "Morning yoga", type: "optional" }, { name: "Balinese massage", type: "extra", price: "From $45 (sample)" }] },
      { title: "Explore", summary: "Travel to the coast.", image: "1518548419970-58e3b4079ab2", schedule: { morning: "Transfer to the coast.", afternoon: "Check in and free time.", evening: "Sunset at a sea temple." }, meals: ["Breakfast"], activities: [{ name: "Sea temple sunset", type: "included" }] },
      { title: "Give Back", summary: "A coastal care morning with a local team.", image: "1416879595882-3373a0480b5b", schedule: { morning: "Join a local team on a beach and river mouth cleanup and learn how they reduce plastic waste.", afternoon: "Lunch together and free afternoon." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Coastal care morning", type: "included" }] },
      { title: "Unwind", summary: "Island day at your own pace.", image: "1577717903315-1691ae25ab3f", schedule: { morning: "Optional snorkel trip to Nusa Penida.", evening: "Farewell dinner." }, meals: ["Breakfast", "Dinner"], activities: [{ name: "Nusa Penida snorkel trip", type: "extra", price: "From $110 (sample)" }, { name: "Farewell dinner", type: "included" }] },
      { title: "Depart", summary: "Transfer to the airport.", image: "1507525428034-b723cf961d3e", schedule: { morning: "Breakfast and airport transfer." }, meals: ["Breakfast"], activities: [{ name: "Airport transfer", type: "included" }] }
    ],
    accommodation: {
      name: "Sample Ubud retreat and beach resort",
      description: "Four nights at a jungle retreat in Ubud, then three nights at a quiet beach resort. Final properties to be confirmed.",
      images: ["1566073771259-6a8506099945", "1571896349842-33c89424de2d"],
      roomTypes: [{ name: "Garden villa room", detail: "Shared or private" }, { name: "Private pool villa", detail: "On request, additional cost" }],
      amenities: ["Infinity pool", "Yoga pavilion", "Breakfast daily", "Free Wi-Fi", "Spa on site", "Air conditioning"]
    },
    community: {
      title: "Caring for the coast",
      description: "Plastic waste carried by rivers is one of the biggest challenges facing Bali's coastline. Our morning supports a local team's ongoing cleanup and education work.",
      partner: { name: "", confirmed: false, description: "Local partner to be announced." }
    },
    requirements: ["A passport valid for at least six months after your return date", "Visa on arrival or e-visa, check current rules before travel", "Travel insurance is strongly recommended"]
  },

  {
    id: "greece",
    demo: true,
    published: true,
    featured: false,
    status: "coming-soon",
    title: "The Cyclades Island Sojourn",
    destination: "Santorini and Naxos, Greece",
    country: "Greece",
    region: "Europe",
    experienceTypes: ["Coastal", "Culinary", "Culture"],
    summary: "Whitewashed villages, island farms and sea views from every table. Details are being finalized.",
    overview: [
      "From Santorini's caldera to the farms of Naxos, this journey explores the quieter side of the Greek islands. Full details are coming soon."
    ],
    heroImage: "1570077188670-e3a8d69ac5ff",
    cardImage: "1613395877344-13d4a8e0d49e",
    imageAlt: "Blue domed church overlooking the sea in Santorini",
    gallery: ["1601581875309-fafbf2d3ed3a", "1469796466635-455ede028aca", "1504674900247-0877df9cc836"],
    dates: { start: "2027-06-12", end: "2027-06-18" },
    durationDays: 7,
    durationNights: 6,
    groupSize: { min: 8, max: 14 },
    pricing: { currency: "USD", from: null, deposit: null, occupancy: [], schedule: [], depositPaymentLink: "", cancellationPolicy: "" },
    inclusions: [],
    exclusions: [],
    itinerary: [],
    accommodation: null,
    community: null,
    requirements: []
  }
];
