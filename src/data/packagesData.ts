export interface PackageData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  destinations: string[];
  includes: string[];
  highlights: string[];
  image: string;
  itinerary: { day: string; title: string; description: string }[];
}

export const packagesData: PackageData[] = [
  {
    slug: "char-dham-yatra",
    title: "Char Dham Yatra",
    shortDescription: "Complete spiritual journey to all four sacred dhams of Uttarakhand.",
    description: "Embark on the most sacred pilgrimage in Hinduism - the Char Dham Yatra. Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with our comprehensive tour package that includes comfortable transportation, experienced drivers familiar with mountain roads, and 24/7 support.",
    duration: "10-12 Days",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    includes: ["AC Vehicle", "Experienced Driver", "Toll & Parking", "Night Halt Assistance", "24/7 Support"],
    highlights: ["All Four Dhams", "Helicopter Options", "VIP Darshan Available", "Senior Citizen Friendly"],
    image: "/images/package-chardham.webp",
    itinerary: [
      { day: "Day 1-2", title: "Dehradun to Yamunotri", description: "Drive to Janki Chatti, trek to Yamunotri temple" },
      { day: "Day 3-4", title: "Yamunotri to Gangotri", description: "Visit Gangotri temple, source of River Ganga" },
      { day: "Day 5-7", title: "Gangotri to Kedarnath", description: "Trek/Helicopter to Kedarnath, one of 12 Jyotirlingas" },
      { day: "Day 8-10", title: "Kedarnath to Badrinath", description: "Visit Badrinath temple, return to Dehradun" }
    ]
  },
  {
    slug: "nainital-tour",
    title: "Nainital Tour",
    shortDescription: "Explore the beautiful lake city and nearby attractions.",
    description: "Discover the charm of Nainital, the lake district of India. Our tour package covers the scenic Naini Lake, Mall Road, Naina Devi Temple, and nearby attractions like Bhimtal, Sattal, and Mukteshwar. Perfect for family vacations and honeymoons.",
    duration: "3-4 Days",
    destinations: ["Nainital", "Bhimtal", "Sattal", "Mukteshwar"],
    includes: ["AC Vehicle", "Sightseeing", "Toll & Parking", "Flexible Itinerary"],
    highlights: ["Naini Lake Boating", "Cable Car Ride", "Zoo Visit", "Mall Road Shopping"],
    image: "/images/package-nainital.webp",
    itinerary: [
      { day: "Day 1", title: "Dehradun to Nainital", description: "Scenic drive, evening at Mall Road" },
      { day: "Day 2", title: "Nainital Sightseeing", description: "Naini Lake, Snow View, Naina Devi Temple" },
      { day: "Day 3", title: "Bhimtal & Sattal", description: "Visit nearby lakes and attractions" },
      { day: "Day 4", title: "Return Journey", description: "Return to Dehradun with memories" }
    ]
  },
  {
    slug: "shimla-tour",
    title: "Shimla Tour",
    shortDescription: "Visit the Queen of Hills with scenic mountain views.",
    description: "Experience the colonial charm of Shimla, the former summer capital of British India. Walk on the famous Mall Road, visit the Christ Church, enjoy the toy train ride, and explore Kufri for adventure activities.",
    duration: "3-4 Days",
    destinations: ["Shimla", "Kufri", "Chail", "Naldehra"],
    includes: ["AC Vehicle", "Experienced Hill Driver", "Toll & Parking", "Sightseeing"],
    highlights: ["Mall Road Walk", "Toy Train Ride", "Kufri Adventure", "Colonial Architecture"],
    image: "/images/package-shimla.webp",
    itinerary: [
      { day: "Day 1", title: "Dehradun to Shimla", description: "Scenic mountain drive to Shimla" },
      { day: "Day 2", title: "Shimla Sightseeing", description: "Mall Road, Ridge, Christ Church, Jakhu Temple" },
      { day: "Day 3", title: "Kufri Excursion", description: "Adventure activities, horse riding, skiing (seasonal)" },
      { day: "Day 4", title: "Return Journey", description: "Return via Chandigarh or direct to Dehradun" }
    ]
  },
  {
    slug: "manali-tour",
    title: "Manali Tour",
    shortDescription: "Adventure and serenity in the beautiful Kullu-Manali valley.",
    description: "Explore the adventure capital of Himachal Pradesh. From Solang Valley adventures to Rohtang Pass snow, Old Manali cafes to Hadimba Temple serenity, experience it all with our comprehensive Manali tour package.",
    duration: "5-6 Days",
    destinations: ["Manali", "Solang Valley", "Rohtang Pass", "Kullu"],
    includes: ["AC Vehicle", "All Permits", "Toll & Parking", "Experienced Driver"],
    highlights: ["Rohtang Pass", "River Rafting", "Paragliding", "Hot Springs"],
    image: "/images/package-manali.webp",
    itinerary: [
      { day: "Day 1-2", title: "Dehradun to Manali", description: "Scenic drive via Chandigarh, overnight journey" },
      { day: "Day 3", title: "Manali Sightseeing", description: "Hadimba Temple, Old Manali, Vashisht Hot Springs" },
      { day: "Day 4", title: "Solang Valley", description: "Adventure activities - paragliding, zorbing, ropeway" },
      { day: "Day 5", title: "Rohtang Pass", description: "Snow point visit (subject to permit availability)" },
      { day: "Day 6", title: "Return Journey", description: "Return to Dehradun with river rafting in Kullu" }
    ]
  },
  {
    slug: "mussoorie-tour",
    title: "Mussoorie Tour",
    shortDescription: "Queen of Hills - perfect weekend getaway from Dehradun.",
    description: "Just 35 km from Dehradun, Mussoorie offers a perfect hill station escape. Visit Kempty Falls, Gun Hill, Lal Tibba, and the charming Mall Road. Ideal for couples, families, and solo travelers seeking peace in the mountains.",
    duration: "1-2 Days",
    destinations: ["Mussoorie", "Kempty Falls", "Dhanaulti"],
    includes: ["AC Vehicle", "Sightseeing", "Toll & Parking", "Flexible Duration"],
    highlights: ["Kempty Falls", "Gun Hill Ropeway", "Mall Road", "Lal Tibba View Point"],
    image: "/images/package-mussoorie.webp",
    itinerary: [
      { day: "Day 1", title: "Dehradun to Mussoorie", description: "Morning departure, Kempty Falls, Gun Hill, Mall Road" },
      { day: "Day 2", title: "Mussoorie & Dhanaulti", description: "Lal Tibba, Company Garden, Dhanaulti eco park, return" }
    ]
  },
  {
    slug: "jammu-dalhousie-tour",
    title: "Jammu-Dalhousie Tour",
    shortDescription: "Explore the mini Switzerland of India with Khajjiar.",
    description: "Discover the unexplored beauty of Dalhousie and the famous Khajjiar, known as Mini Switzerland. This tour combines the spiritual vibes of Jammu with the natural beauty of Himachal's hidden gems.",
    duration: "5-6 Days",
    destinations: ["Jammu", "Dalhousie", "Khajjiar", "Dharamshala"],
    includes: ["AC Vehicle", "Experienced Driver", "Toll & Parking", "All Permits"],
    highlights: ["Khajjiar Lake", "Vaishno Devi Option", "Colonial Architecture", "Dharamshala Visit"],
    image: "/images/package-dalhousie.webp",
    itinerary: [
      { day: "Day 1", title: "Dehradun to Jammu", description: "Long drive to Jammu, overnight stay" },
      { day: "Day 2", title: "Jammu to Dalhousie", description: "Scenic drive through pine forests" },
      { day: "Day 3", title: "Dalhousie Sightseeing", description: "Mall Road, churches, Kalatop Wildlife Sanctuary" },
      { day: "Day 4", title: "Khajjiar Excursion", description: "Visit Mini Switzerland of India" },
      { day: "Day 5", title: "Dharamshala Visit", description: "McLeodganj, Dalai Lama Temple complex" },
      { day: "Day 6", title: "Return Journey", description: "Return to Dehradun via scenic route" }
    ]
  },
  {
    slug: "goa-tour-package-from-dehradun",
    title: "Goa Beach Delight Special",
    shortDescription: "Experience the ultimate tropical getaway with beaches, heritage, and nightlife.",
    description: "Experience the ultimate tropical getaway with our Goa Delight package. From the white sandy beaches of North Goa to the peaceful churches of South Goa, enjoy a perfect mix of adventure, nightlife, and relaxation.",
    duration: "4 Nights / 5 Days",
    destinations: ["Dehradun", "Panjim", "North Goa", "South Goa"],
    includes: ["Airport Transfers", "Daily Breakfast", "Sightseeing in AC Cab", "Stay in 3/4 Star Hotels", "All Entry Fees"],
    highlights: ["North Goa Beach Tour", "South Goa Heritage Sightseeing", "Mandovi River Cruise", "Watersports at Anjuna", "Premium Beach Resorts"],
    image: "/images/goa-package.webp",
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa & Leisure", description: "Arrival at Dabolim Airport/Mopa Airport. Transfer to the hotel. Spend the evening relaxing at the beach or exploring the local market." },
      { day: "Day 2", title: "North Goa Sightseeing", description: "Explore the famous beaches of North Goa including Calangute, Baga, and Anjuna. Visit the historic Aguada Fort for a panoramic view." },
      { day: "Day 3", title: "South Goa Heritage Tour", description: "Visit the Basilica of Bom Jesus and Se Cathedral in Old Goa. Later, visit Miramar Beach and enjoy a sunset cruise on the Mandovi River." },
      { day: "Day 4", title: "Adventure & Watersports", description: "A day dedicated to adventure. Enjoy parasailing, jet-skiing, and banana boat rides at the beach, or visit a Spice Plantation." },
      { day: "Day 5", title: "Departure", description: "After breakfast, check out from the hotel. You will be transferred back to the airport for your flight back home with beautiful memories." }
    ]
  }
];

export const getPackageBySlug = (slug: string): PackageData | undefined => {
  return packagesData.find(pkg => pkg.slug === slug);
};