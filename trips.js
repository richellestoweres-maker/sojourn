/*
  TRIPS
  Every trip on the site comes from this list. To add a trip, copy one block,
  change the details, and give it a new unique id (used in the page link).

  demo: true      marks a sample trip. The site labels it clearly as sample content.
  published:false hides a trip without deleting it.
  featured: true  shows the trip in the large band on the homepage (only one).
  status:         "open" | "inquiry" | "limited" | "waitlist" | "soldout" | "coming-soon"
  Images:         an Unsplash photo id (placeholder photography) or your own image file,
                  such as "amalfi-hero.jpg".
  Activity types: "included" | "optional" (free, choose to join) | "extra" (additional cost)

  Every journey follows the same rhythm: Explore, Learn (history, archaeology and food),
  Give Back (whatever the local community needs), and a free last full day to Unwind.

  ALL TRIPS BELOW ARE SAMPLES. Dates, prices, hotels and partners are not real.
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
    experienceTypes: ["History and Archaeology", "Coastal", "Culinary", "Culture"],
    summary: "Join us for a 6 day journey along Italy's Amalfi Coast, where ancient history, local food, community and relaxation come together.",
    overview: [
      "The Amalfi Coast is one of the most beautiful stretches of shoreline in the world, and it sits in the shadow of one of history's most famous stories. Just across the bay lies Pompeii, the Roman city buried by Mount Vesuvius in 79 AD and preserved for nearly two thousand years.",
      "This journey pairs that history with the life of the coast today: the families who still farm terraced lemon groves, the cooks who learned recipes from their grandmothers, and the communities working to protect the hillsides they call home. Your last full day is entirely yours."
    ],
    heroImage: "1612698093158-e07ac200d44e",
    cardImage: "1510041883570-1c5b27d85cb8",
    featureImage: "1692465422383-1f76d08ca4f2",
    imageAlt: "Colorful cliffside houses above the sea on the Amalfi Coast",
    gallery: ["1561717690-81fbd538866b", "1790792529010-dfc1f37a9bfa", "1639244132045-94c307ff4bfc"],
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
      { icon: "bed", label: "Luxury accommodations", detail: "Five nights in a boutique hotel overlooking the sea" },
      { icon: "car", label: "Airport transfers", detail: "Private group transfer from Naples airport on arrival and departure days" },
      { icon: "landmark", label: "Guided Pompeii visit", detail: "A morning in Pompeii with a licensed archaeology guide" },
      { icon: "utensils", label: "Cooking class and selected meals", detail: "Daily breakfast, a welcome dinner, cooking class lunch and a farewell dinner" },
      { icon: "sprout", label: "Community service experience", detail: "A morning restoring terraces and planting with a local partner" },
      { icon: "map", label: "Local transportation", detail: "Private coach and boat transfers for all scheduled activities" },
      { icon: "users", label: "Small groups", detail: "Meaningful connections, never crowds" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group throughout" }
    ],
    exclusions: ["Round trip airfare to Naples", "Travel insurance", "Passport or visa expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities for guides and drivers", "Personal shopping and other personal expenses"],
    itinerary: [
      {
        title: "Arrive",
        summary: "Meet the group, transfer to the coast and settle into your seaside hotel.",
        image: "1581416271259-abec87515f51",
        schedule: {
          afternoon: "Meet your host at Naples airport for a private transfer along the coastal road. Check in and settle into your room.",
          evening: "Welcome aperitivo on the terrace followed by a group dinner as the sun sets over the water."
        },
        meals: ["Dinner"],
        activities: [{ name: "Private airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }]
      },
      {
        title: "Explore",
        summary: "Guided walk through Positano's lanes and a private boat along the coast.",
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
        title: "Learn",
        summary: "Walk the streets of ancient Pompeii, then cook lunch with a local family.",
        image: "1561717690-81fbd538866b",
        schedule: {
          morning: "Explore Pompeii with a licensed archaeology guide. Walk Roman streets, homes, bakeries and baths, and learn how the city was rediscovered.",
          afternoon: "Hands on cooking class and lunch with a local family: fresh pasta, a classic sauce, and homemade limoncello.",
          evening: "Free evening."
        },
        meals: ["Breakfast", "Lunch"],
        activities: [{ name: "Pompeii with an archaeology guide", type: "included" }, { name: "Cooking class and lunch", type: "included" }, { name: "Herculaneum ruins visit", type: "extra", price: "From $60 (sample)" }]
      },
      {
        title: "Give Back",
        summary: "Restore dry stone terraces and plant lemon trees with a local farm.",
        image: "1751972788348-3360f69603f6",
        schedule: {
          morning: "Join a local farm cooperative on a project the community has asked for: repairing the dry stone terraces that hold the hillsides in place and planting new lemon trees.",
          afternoon: "Lunch together in the lemon grove, then time to rest.",
          evening: "Free evening."
        },
        meals: ["Breakfast", "Lunch"],
        activities: [{ name: "Terrace restoration and planting", type: "included" }]
      },
      {
        title: "Unwind",
        summary: "Your last full day is yours. Relax, swim, shop or simply do nothing.",
        image: "1639244132045-94c307ff4bfc",
        schedule: {
          morning: "Sleep in, linger over breakfast, or head to the pool. Nothing is scheduled.",
          afternoon: "Spend it however you like: a spa treatment, a beach club, shopping in Amalfi, or a slow afternoon in Ravello.",
          evening: "Farewell dinner overlooking the coast."
        },
        meals: ["Breakfast", "Dinner"],
        activities: [{ name: "Free day", type: "included" }, { name: "Farewell dinner", type: "included" }, { name: "Spa treatment", type: "extra", price: "From $180 (sample)" }]
      },
      {
        title: "Return",
        summary: "One last morning together before heading to the airport with full hearts.",
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
      description: "The Amalfi Coast's dry stone terraces hold the hillsides in place. Many have fallen into disrepair, which increases the risk of landslides. Our service morning supports restoration and planting the community has asked for, led by people who know the land.",
      partner: { name: "", confirmed: false, description: "Local partner to be announced." }
    },
    requirements: ["A passport valid for at least six months after your return date", "Comfort walking on uneven ancient streets, steep paths and stairs", "Travel insurance is strongly recommended"]
  },

  {
    id: "roatan",
    demo: true,
    published: true,
    featured: false,
    status: "inquiry",
    title: "Reef, Roots and Island Life",
    destination: "Roatán, Honduras",
    country: "Honduras",
    region: "Caribbean",
    experienceTypes: ["Coastal", "Culture", "Culinary", "Nature"],
    summary: "Snorkel the Mesoamerican Reef, learn Garifuna traditions and island history, make salsa from scratch, and help build a playground from recycled tires.",
    overview: [
      "Roatán sits on the Mesoamerican Reef, the second largest barrier reef in the world. The island's story is just as rich: Maya traders, pirate coves, and the Garifuna people, who arrived in 1797 and still keep their language, music and food alive in Punta Gorda.",
      "This journey mixes turquoise water with real connection. You'll cook with local families, spend a day building something the community has asked for, and finish with a free day on the beach."
    ],
    heroImage: "1668813610797-17d32443c9d3",
    cardImage: "1600273970168-c3db62dcf905",
    imageAlt: "Turquoise water and a palm lined coast on Roatán",
    gallery: ["1708649290066-5f617003b93f", "1690944254825-776abb9104e8", "1581696846214-528607b4e252"],
    dates: { start: "2027-03-13", end: "2027-03-18" },
    durationDays: 6,
    durationNights: 5,
    groupSize: { min: 8, max: 16 },
    pricing: {
      currency: "USD",
      from: 3450,
      deposit: 600,
      occupancy: [
        { id: "double", label: "Shared room", detail: "Two travelers sharing a room, price per person", perPerson: 3450, travelersPerRoom: 2 },
        { id: "single", label: "Private room", detail: "One traveler in their own room", perPerson: 4300, travelersPerRoom: 1 }
      ],
      schedule: [
        { label: "Deposit", amount: "deposit", due: "When your reservation is accepted" },
        { label: "Remaining balance", amount: "balance", due: "75 days before departure (sample)" }
      ],
      depositPaymentLink: "",
      cancellationPolicy: ""
    },
    inclusions: [
      { icon: "bed", label: "Accommodations", detail: "Five nights at a beachfront hotel in West Bay" },
      { icon: "car", label: "Airport transfers", detail: "Group transfers from Roatán airport" },
      { icon: "wave", label: "Guided reef snorkel", detail: "Snorkel trip with a marine guide, gear included" },
      { icon: "landmark", label: "Garifuna heritage day", detail: "Punta Gorda visit with a local historian, music and drumming" },
      { icon: "utensils", label: "Cooking class and selected meals", detail: "Daily breakfast, a salsa and baleada class, and three group dinners" },
      { icon: "sprout", label: "Community service experience", detail: "Building a tire playground and planting a school garden" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group" }
    ],
    exclusions: ["Round trip airfare to Roatán", "Travel insurance", "Passport expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities", "Personal expenses"],
    itinerary: [
      { title: "Arrive", summary: "Land on the island and settle into West Bay.", image: "1668813610797-17d32443c9d3", schedule: { afternoon: "Group transfer to your beachfront hotel and time to swim.", evening: "Welcome dinner on the sand." }, meals: ["Dinner"], activities: [{ name: "Airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }] },
      { title: "Explore", summary: "Snorkel the Mesoamerican Reef and tour the island.", image: "1708649290066-5f617003b93f", schedule: { morning: "Guided snorkel on the reef with a marine guide who explains how the reef is protected.", afternoon: "Island drive with stops at hidden beaches and lookouts.", evening: "Free evening." }, meals: ["Breakfast"], activities: [{ name: "Guided reef snorkel", type: "included" }, { name: "Island tour", type: "included" }, { name: "Scuba dive", type: "extra", price: "From $90 (sample)" }] },
      { title: "Learn", summary: "Garifuna history and music, then salsa and baleadas from scratch.", image: "1690944254825-776abb9104e8", schedule: { morning: "Visit Punta Gorda, the island's oldest Garifuna community, with a local historian. Learn about the island's Maya, pirate and Garifuna past, with traditional drumming.", afternoon: "Cooking class with a local family: fresh salsa, baleadas and coconut bread.", evening: "Dinner together." }, meals: ["Breakfast", "Lunch", "Dinner"], activities: [{ name: "Garifuna heritage visit", type: "included" }, { name: "Salsa and baleada cooking class", type: "included" }] },
      { title: "Give Back", summary: "Build a playground from recycled tires and plant a school garden.", image: "1614969763878-914fa7f3183b", schedule: { morning: "Work alongside a local partner and school families to build a playground from recycled tires, a project the school has asked for.", afternoon: "Plant seeds and seedlings for the school garden, then share lunch with the team." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Tire playground build", type: "included" }, { name: "School garden planting", type: "included" }] },
      { title: "Unwind", summary: "Your last full day is yours. Beach, spa, or a hammock with a book.", image: "1600273970168-c3db62dcf905", schedule: { morning: "Nothing is scheduled. Sleep in and enjoy the beach.", afternoon: "Spend it however you like: a massage, kayaking, or one more swim.", evening: "Farewell sunset dinner." }, meals: ["Breakfast", "Dinner"], activities: [{ name: "Free day", type: "included" }, { name: "Farewell dinner", type: "included" }, { name: "Beach massage", type: "extra", price: "From $70 (sample)" }] },
      { title: "Return", summary: "A last breakfast by the water before heading home.", image: "1581696846214-528607b4e252", schedule: { morning: "Breakfast and group transfer to the airport." }, meals: ["Breakfast"], activities: [{ name: "Airport transfer", type: "included" }] }
    ],
    accommodation: {
      name: "Sample beachfront hotel, West Bay",
      description: "A relaxed boutique hotel steps from West Bay Beach, with a pool, a beach bar and reef snorkeling right offshore. Final hotel to be confirmed.",
      images: ["1546473394-34664d71afad", "1566073771259-6a8506099945"],
      roomTypes: [{ name: "Garden view room", detail: "Shared or private" }, { name: "Ocean view upgrade", detail: "On request, additional cost" }],
      amenities: ["Beachfront", "Pool", "Breakfast daily", "Free Wi-Fi", "Air conditioning", "Snorkel gear"]
    },
    community: {
      title: "A place to play",
      description: "Many island schools have little or no play equipment. Our partner school asked for a safe playground, built from recycled tires that would otherwise end up as waste, and a garden that helps feed students.",
      partner: { name: "", confirmed: false, description: "Local partner to be announced." }
    },
    requirements: ["A passport valid for at least six months after your return date", "Comfort swimming in open water for the snorkel trip", "Travel insurance is strongly recommended"]
  },

  {
    id: "costa-rica",
    demo: true,
    published: true,
    featured: false,
    status: "inquiry",
    title: "Rainforest, Stone Spheres and Pacific Coast",
    destination: "Costa Rica",
    country: "Costa Rica",
    region: "Central America",
    experienceTypes: ["History and Archaeology", "Nature", "Wellness"],
    summary: "Volcano trails, a day planting native trees, and the mysterious ancient stone spheres of the south Pacific coast.",
    overview: [
      "Costa Rica protects more than a quarter of its land, and its history runs deeper than most visitors realize. On the south Pacific coast, the people of the Diquís culture carved hundreds of nearly perfect stone spheres more than a thousand years ago. Today the sites are protected by UNESCO.",
      "This journey moves from the slopes of the Arenal volcano to that coast, with a day replanting rainforest and a free last day by the ocean."
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
      { icon: "landmark", label: "Archaeology site visit", detail: "The stone sphere sites of Finca 6 with a local expert" },
      { icon: "compass", label: "Guided nature experiences", detail: "Naturalist guides on every forest outing" },
      { icon: "utensils", label: "Cooking class and selected meals", detail: "Daily breakfast, a farm cooking class, four lunches and three dinners" },
      { icon: "sprout", label: "Community service experience", detail: "A reforestation day with a local team" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group" }
    ],
    exclusions: ["Round trip airfare to San José", "Travel insurance", "Passport expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities", "Personal expenses"],
    itinerary: [
      { title: "Arrive", summary: "Arrive in San José and travel to the Arenal region.", image: "1469474968028-56623f02e42e", schedule: { afternoon: "Group transfer to your rainforest lodge near Arenal.", evening: "Welcome dinner at the lodge." }, meals: ["Dinner"], activities: [{ name: "Airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }] },
      { title: "Explore", summary: "Volcano trails and a soak in natural hot springs.", image: "1580094333632-438bdc04f79f", schedule: { morning: "Guided hike through old lava fields at the base of Arenal.", afternoon: "Hot springs and free time.", evening: "Free evening." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Arenal volcano hike", type: "included" }, { name: "Hot springs", type: "included" }, { name: "Zip line canopy tour", type: "extra", price: "From $95 (sample)" }] },
      { title: "Give Back", summary: "Plant native trees with a local reforestation team.", image: "1542601906990-b4d3fb778b09", schedule: { morning: "Join a community reforestation project to plant native trees along a wildlife corridor.", afternoon: "Lunch with the project team and free time." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Reforestation day", type: "included" }] },
      { title: "Learn", summary: "Travel south and cook with a family farm.", image: "1488459716781-31db52582fe9", schedule: { morning: "Scenic transfer to the south Pacific coast.", afternoon: "Cooking class on a family farm: gallo pinto, fresh tortillas and tamales.", evening: "Dinner together." }, meals: ["Breakfast", "Lunch", "Dinner"], activities: [{ name: "Farm cooking class", type: "included" }] },
      { title: "Learn", summary: "The ancient stone spheres of the Diquís people.", image: "1441974231531-c6227db76b6e", schedule: { morning: "Visit the Finca 6 archaeological site and museum with a local expert. See the stone spheres where they were placed over a thousand years ago and learn how they were made.", afternoon: "Free afternoon at the beach." }, meals: ["Breakfast"], activities: [{ name: "Finca 6 archaeology visit", type: "included" }, { name: "Whale watching boat trip", type: "extra", price: "From $85 (sample)" }] },
      { title: "Unwind", summary: "Your last full day is yours. Beach, spa or simply nothing at all.", image: "1519046904884-53103b34b206", schedule: { morning: "Nothing is scheduled. Enjoy the beach.", afternoon: "Optional surf lesson or spa time.", evening: "Farewell dinner." }, meals: ["Breakfast", "Dinner"], activities: [{ name: "Free day", type: "included" }, { name: "Surf lesson", type: "extra", price: "From $70 (sample)" }] },
      { title: "Return", summary: "Transfer to the airport for your flight home.", image: "1507525428034-b723cf961d3e", schedule: { morning: "Breakfast and group transfer to the airport." }, meals: ["Breakfast"], activities: [{ name: "Airport transfer", type: "included" }] }
    ],
    accommodation: {
      name: "Sample rainforest lodge and beach hotel",
      description: "Three nights at an eco lodge facing the volcano, then three nights at a small hotel near the Pacific. Final properties to be confirmed.",
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
    experienceTypes: ["History and Archaeology", "Wellness", "Culture", "Nature"],
    summary: "Eleventh century temples, rice terraces at dawn and island crafts, with a coastal cleanup and slow days by the water.",
    overview: [
      "Bali's history is carved into its landscape. Goa Gajah, the Elephant Cave, dates to the eleventh century, and the rice terraces are watered by subak, an ancient shared system recognized by UNESCO.",
      "This journey moves from the green heart of Ubud to the coast, with time to learn from historians and artisans, a morning caring for the shoreline, and a free last day."
    ],
    heroImage: "1537996194471-e657df975ab4",
    cardImage: "1555400038-63f5ba517a47",
    imageAlt: "Lush green rice terraces in Bali",
    gallery: ["1639599706229-4611c1e5b6e4", "1518548419970-58e3b4079ab2", "1577717903315-1691ae25ab3f"],
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
      { icon: "landmark", label: "Ancient temples with a historian", detail: "Goa Gajah and Gunung Kawi with a local historian" },
      { icon: "utensils", label: "Cooking class and selected meals", detail: "Daily breakfast, a Balinese cooking class and four group meals" },
      { icon: "lotus", label: "Wellness", detail: "Morning yoga, joining is always optional" },
      { icon: "sprout", label: "Community service experience", detail: "A coastal cleanup morning with a local team" },
      { icon: "user", label: "Trip host", detail: "A dedicated host traveling with the group" }
    ],
    exclusions: ["Round trip airfare to Denpasar", "Travel insurance", "Passport or visa expenses", "Meals not listed in the itinerary", "Optional activities marked as additional cost", "Gratuities", "Personal expenses"],
    itinerary: [
      { title: "Arrive", summary: "Arrive in Denpasar and travel to Ubud.", image: "1537996194471-e657df975ab4", schedule: { afternoon: "Transfer to your Ubud retreat.", evening: "Welcome dinner." }, meals: ["Dinner"], activities: [{ name: "Airport transfer", type: "included" }, { name: "Welcome dinner", type: "included" }] },
      { title: "Explore", summary: "Rice terraces at sunrise and a water temple.", image: "1555400038-63f5ba517a47", schedule: { morning: "Early walk through the rice terraces with a local guide.", afternoon: "Visit a water temple and learn how the subak irrigation system has worked for a thousand years." }, meals: ["Breakfast"], activities: [{ name: "Rice terrace walk", type: "included" }, { name: "Water temple visit", type: "included" }] },
      { title: "Learn", summary: "Eleventh century temples with a historian, then a cooking class.", image: "1639599706229-4611c1e5b6e4", schedule: { morning: "Explore Goa Gajah and the rock cut shrines of Gunung Kawi with a local historian.", afternoon: "Balinese cooking class and lunch." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Ancient temples with a historian", type: "included" }, { name: "Cooking class", type: "included" }] },
      { title: "Learn", summary: "Hands on workshops with Balinese artisans.", image: "1493106641515-6b5631de4bb9", schedule: { morning: "Pottery or silver craft workshop.", afternoon: "Free time for the markets or rest." }, meals: ["Breakfast"], activities: [{ name: "Craft workshop", type: "included" }, { name: "Morning yoga", type: "optional" }] },
      { title: "Explore", summary: "Travel to the coast and watch sunset at a sea temple.", image: "1518548419970-58e3b4079ab2", schedule: { morning: "Transfer to the coast.", afternoon: "Check in and free time.", evening: "Sunset at a sea temple." }, meals: ["Breakfast"], activities: [{ name: "Sea temple sunset", type: "included" }] },
      { title: "Give Back", summary: "A coastal cleanup morning with a local team.", image: "1416879595882-3373a0480b5b", schedule: { morning: "Join a local team on a beach and river mouth cleanup and learn how they reduce plastic waste.", afternoon: "Lunch together and free afternoon." }, meals: ["Breakfast", "Lunch"], activities: [{ name: "Coastal cleanup morning", type: "included" }] },
      { title: "Unwind", summary: "Your last full day is yours.", image: "1544161515-4ab6ce6db874", schedule: { morning: "Nothing is scheduled. Relax by the pool or the beach.", afternoon: "Spa, snorkeling or rest.", evening: "Farewell dinner." }, meals: ["Breakfast", "Dinner"], activities: [{ name: "Free day", type: "included" }, { name: "Nusa Penida snorkel trip", type: "extra", price: "From $110 (sample)" }, { name: "Farewell dinner", type: "included" }] },
      { title: "Return", summary: "Transfer to the airport.", image: "1507525428034-b723cf961d3e", schedule: { morning: "Breakfast and airport transfer." }, meals: ["Breakfast"], activities: [{ name: "Airport transfer", type: "included" }] }
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
    requirements: ["A passport valid for at least six months after your return date", "Modest clothing for temple visits", "Travel insurance is strongly recommended"]
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
    experienceTypes: ["History and Archaeology", "Coastal", "Culinary", "Culture"],
    summary: "The Bronze Age city of Akrotiri, island farms and sea views from every table. Details are being finalized.",
    overview: [
      "Long before Pompeii, a volcanic eruption buried Akrotiri, a Bronze Age city on Santorini, preserving its painted walls and streets for more than 3,500 years. This journey explores it with an archaeologist, then slows down on the farms and beaches of Naxos. Full details are coming soon."
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
