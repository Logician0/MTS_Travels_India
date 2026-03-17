export interface RouteData {
  slug: string;
  title: string;
  from: string;
  to: string;
  distance: string;
  travelTime: string;
  description: string;
  highlights: string[];
  image: string;
}

export const routesData: RouteData[] = [
  {
    slug: "dehradun-to-delhi",
    title: "Dehradun to Delhi Taxi",
    from: "Dehradun",
    to: "Delhi",
    distance: "250 km",
    travelTime: "5-6 hours",
    description: "Travel comfortably from Dehradun to Delhi with our reliable taxi service. Our professional drivers ensure a safe and pleasant journey through scenic routes.",
    highlights: ["AC Vehicles", "Professional Drivers", "Door-to-door Service", "24/7 Availability"],
    image: "/images/route-delhi.webp"
  },
  {
    slug: "dehradun-to-mussoorie",
    title: "Dehradun to Mussoorie Taxi",
    from: "Dehradun",
    to: "Mussoorie",
    distance: "35 km",
    travelTime: "1-1.5 hours",
    description: "Experience the beautiful hill station of Mussoorie with our comfortable taxi service from Dehradun. Enjoy scenic mountain views throughout your journey.",
    highlights: ["Scenic Route", "Hill Station Expert Drivers", "Flexible Timings", "Return Trip Available"],
    image: "/images/route-mussoorie.webp"
  },
  {
    slug: "dehradun-to-rishikesh",
    title: "Dehradun to Rishikesh Taxi",
    from: "Dehradun",
    to: "Rishikesh",
    distance: "45 km",
    travelTime: "1-1.5 hours",
    description: "Book a taxi from Dehradun to Rishikesh, the yoga capital of the world. Perfect for spiritual seekers and adventure enthusiasts alike.",
    highlights: ["Quick Journey", "Riverside Route", "Multiple Stop Points", "Affordable Rates"],
    image: "/images/route-rishikesh.webp"
  },
  {
    slug: "dehradun-to-haridwar",
    title: "Dehradun to Haridwar Taxi",
    from: "Dehradun",
    to: "Haridwar",
    distance: "55 km",
    travelTime: "1.5-2 hours",
    description: "Travel to the holy city of Haridwar from Dehradun with our comfortable and reliable taxi service. Experience the spiritual journey with ease.",
    highlights: ["Pilgrimage Special", "Early Morning Service", "Ganga Aarti Timing", "Safe Travel"],
    image: "/images/route-haridwar.webp"
  },
  {
    slug: "dehradun-to-nainital",
    title: "Dehradun to Nainital Taxi",
    from: "Dehradun",
    to: "Nainital",
    distance: "280 km",
    travelTime: "6-7 hours",
    description: "Discover the beautiful lake city of Nainital with our premium taxi service from Dehradun. Enjoy comfortable seating and scenic views.",
    highlights: ["Lake City Tour", "Comfortable Journey", "Multiple Stops", "Photography Points"],
    image: "/images/route-nainital.webp"
  },
  {
    slug: "dehradun-to-shimla",
    title: "Dehradun to Shimla Taxi",
    from: "Dehradun",
    to: "Shimla",
    distance: "220 km",
    travelTime: "5-6 hours",
    description: "Experience the queen of hills - Shimla with our reliable taxi service from Dehradun. Travel through beautiful mountain roads with experienced drivers.",
    highlights: ["Mountain Roads", "Experienced Drivers", "Interstate Travel", "Premium Vehicles"],
    image: "/images/route-shimla.webp"
  },
  {
    slug: "dehradun-to-chandigarh",
    title: "Dehradun to Chandigarh Taxi",
    from: "Dehradun",
    to: "Chandigarh",
    distance: "170 km",
    travelTime: "4-5 hours",
    description: "Travel to the city beautiful - Chandigarh from Dehradun with our comfortable taxi service. Enjoy smooth highways and professional service.",
    highlights: ["City Beautiful", "Highway Drive", "Comfortable Cars", "Professional Service"],
    image: "/images/route-chandigarh.webp"
  },
  {
    slug: "dehradun-to-manali",
    title: "Dehradun to Manali Taxi",
    from: "Dehradun",
    to: "Manali",
    distance: "380 km",
    travelTime: "9-10 hours",
    description: "Embark on an adventure to Manali from Dehradun with our premium taxi service. Experience the beauty of Himachal Pradesh.",
    highlights: ["Adventure Route", "Overnight Available", "Multiple Stops", "Premium SUVs"],
    image: "/images/route-manali.webp"
  },
  {
    slug: "dehradun-to-jammu",
    title: "Dehradun to Jammu Taxi",
    from: "Dehradun",
    to: "Jammu",
    distance: "450 km",
    travelTime: "9-10 hours",
    description: "Travel from Dehradun to Jammu with our reliable taxi service. Perfect for pilgrims visiting Vaishno Devi and tourists exploring Jammu region.",
    highlights: ["Pilgrimage Route", "Vaishno Devi Access", "Interstate Travel", "Comfortable SUVs"],
    image: "/images/route-jammu.webp"
  },
  {
    slug: "dehradun-to-agra",
    title: "Dehradun to Agra Taxi",
    from: "Dehradun",
    to: "Agra",
    distance: "350 km",
    travelTime: "6-7 hours",
    description: "Visit the iconic Taj Mahal with our comfortable taxi service from Dehradun to Agra. Experience the wonder of the world with hassle-free travel.",
    highlights: ["Taj Mahal Visit", "Heritage City", "Highway Route", "Day Trip Available"],
    image: "/images/route-agra.webp"
  },
  {
    slug: "dehradun-to-ghaziabad",
    title: "Dehradun to Ghaziabad Taxi",
    from: "Dehradun",
    to: "Ghaziabad",
    distance: "230 km",
    travelTime: "5-6 hours",
    description: "Travel from Dehradun to Ghaziabad with our professional taxi service. Convenient drop-off at any location in Ghaziabad with doorstep pickup.",
    highlights: ["NCR Region", "Door-to-door Service", "Highway Route", "Affordable Rates"],
    image: "/images/route-ghaziabad.webp"
  },
  {
    slug: "dehradun-to-faridabad",
    title: "Dehradun to Faridabad Taxi",
    from: "Dehradun",
    to: "Faridabad",
    distance: "270 km",
    travelTime: "5-6 hours",
    description: "Book a taxi from Dehradun to Faridabad for comfortable and reliable travel. Professional drivers ensure safe journey to your destination.",
    highlights: ["NCR Region", "Industrial Hub", "Professional Drivers", "Flexible Timings"],
    image: "/images/route-faridabad.webp"
  },
  {
    slug: "dehradun-to-gurugram",
    title: "Dehradun to Gurugram Taxi",
    from: "Dehradun",
    to: "Gurugram",
    distance: "280 km",
    travelTime: "5-6 hours",
    description: "Travel to the millennium city Gurugram from Dehradun with our premium taxi service. Perfect for business travelers and corporate trips.",
    highlights: ["Corporate Travel", "Premium Cars", "Highway Route", "Airport Connectivity"],
    image: "/images/route-gurugram.webp"
  },
  {
    slug: "dehradun-to-mathura",
    title: "Dehradun to Mathura Taxi",
    from: "Dehradun",
    to: "Mathura",
    distance: "300 km",
    travelTime: "6-7 hours",
    description: "Visit the birthplace of Lord Krishna with our taxi service from Dehradun to Mathura. Perfect for pilgrimage and spiritual journeys.",
    highlights: ["Krishna Janmabhoomi", "Pilgrimage Route", "Vrindavan Access", "Religious Tourism"],
    image: "/images/route-mathura.webp"
  },
  {
    slug: "dehradun-to-uttarkashi",
    title: "Dehradun to Uttarkashi Taxi",
    from: "Dehradun",
    to: "Uttarkashi",
    distance: "150 km",
    travelTime: "4-5 hours",
    description: "Travel to the sacred town of Uttarkashi from Dehradun. Gateway to Gangotri and perfect for Char Dham Yatra pilgrims.",
    highlights: ["Char Dham Route", "Mountain Roads", "Gangotri Access", "Experienced Hill Drivers"],
    image: "/images/route-uttarkashi.webp"
  },
  {
    slug: "dehradun-to-roorkee",
    title: "Dehradun to Roorkee Taxi",
    from: "Dehradun",
    to: "Roorkee",
    distance: "70 km",
    travelTime: "1.5-2 hours",
    description: "Quick and comfortable taxi service from Dehradun to Roorkee. Perfect for IIT Roorkee visits and business travel.",
    highlights: ["Quick Journey", "IIT Roorkee", "Affordable Rates", "Frequent Service"],
    image: "/images/route-roorkee.webp"
  },
  {
    slug: "dehradun-to-saharanpur",
    title: "Dehradun to Saharanpur Taxi",
    from: "Dehradun",
    to: "Saharanpur",
    distance: "90 km",
    travelTime: "2-2.5 hours",
    description: "Travel from Dehradun to Saharanpur with our reliable taxi service. Convenient and affordable travel across the state border.",
    highlights: ["Short Trip", "Border Crossing", "Affordable", "Multiple Pickups"],
    image: "/images/route-saharanpur.webp"
  },
  {
    slug: "dehradun-to-noida",
    title: "Dehradun to Noida Taxi",
    from: "Dehradun",
    to: "Noida",
    distance: "240 km",
    travelTime: "5-6 hours",
    description: "Book a taxi from Dehradun to Noida for comfortable travel to the IT hub. Professional service with doorstep pickup and drop.",
    highlights: ["IT Hub", "Corporate Travel", "Expressway Route", "Premium Vehicles"],
    image: "/images/route-noida.webp"
  },
  {
    slug: "dehradun-to-jaipur",
    title: "Dehradun to Jaipur Taxi",
    from: "Dehradun",
    to: "Jaipur",
    distance: "480 km",
    travelTime: "8-9 hours",
    description: "Explore the Pink City Jaipur with our long-distance taxi service from Dehradun. Comfortable journey through scenic Rajasthan routes.",
    highlights: ["Pink City", "Heritage Tour", "Overnight Available", "Premium SUVs"],
    image: "/images/route-jaipur.webp"
  }
];

export const getRouteBySlug = (slug: string): RouteData | undefined => {
  return routesData.find(route => route.slug === slug);
};
