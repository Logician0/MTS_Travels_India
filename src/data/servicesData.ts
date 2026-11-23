export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
  benefits: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "local-taxi-service",
    title: "Local Taxi Service",
    shortDescription: "Comfortable rides within city limits for all your daily travel needs.",
    description: "Our local taxi service in Dehradun offers convenient and affordable transportation for all your daily commute needs. Whether you need to visit the market, attend a meeting, or explore the city, our professional drivers are ready to serve you 24/7.",
    features: ["Hourly Packages", "Full Day Rentals", "Multiple Stops", "Waiting Time Included"],
    icon: "car",
    image: "/images/services/service-local.webp",
    benefits: ["Flexible timings", "Affordable rates", "Clean and sanitized vehicles", "GPS-enabled tracking"]
  },
  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    shortDescription: "Reliable airport pickup and drop services with flight tracking.",
    description: "Never miss a flight with our punctual airport transfer service. We offer seamless pickup and drop services to Jolly Grant Airport, Dehradun with real-time flight tracking and professional drivers who ensure you reach on time.",
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance", "24/7 Service"],
    icon: "plane",
    image: "/images/services/service-airport.webp",
    benefits: ["On-time guarantee", "Flight delay adjustments", "Comfortable vehicles", "Professional chauffeurs"]
  },
  {
    slug: "one-way-taxi",
    title: "One Way Taxi",
    shortDescription: "Pay only for one way journey with no return fare charges.",
    description: "Our one-way taxi service allows you to travel to your destination without paying for return fare. Perfect for one-way journeys between cities, our transparent pricing ensures you only pay for the distance traveled.",
    features: ["No Return Fare", "Multiple Cities", "Transparent Pricing", "Instant Booking"],
    icon: "arrowRight",
    image: "/images/services/service-oneway.webp",
    benefits: ["Cost-effective travel", "Drop anywhere service", "Multiple vehicle options", "No hidden charges"]
  },
  {
    slug: "round-trip-taxi",
    title: "Round Trip Taxi",
    shortDescription: "Book return journey together and save more on your trip.",
    description: "Plan your complete trip with our round trip taxi service. Book your outward and return journey together and enjoy discounted rates. Ideal for business trips, family visits, or tourist excursions.",
    features: ["Discounted Rates", "Same Driver", "Flexible Itinerary", "Multiple Day Trips"],
    icon: "repeat",
    image: "/images/services/service-roundtrip.webp",
    benefits: ["Better rates than one-way", "Familiar driver", "Customizable schedule", "Wait and return options"]
  },
  {
    slug: "wedding-taxi-service",
    title: "Wedding Taxi Service",
    shortDescription: "Premium decorated cars for your special day celebrations.",
    description: "Make your special day even more memorable with our premium wedding car service. We offer beautifully decorated luxury vehicles for wedding ceremonies, with professional chauffeurs ensuring a grand entrance.",
    features: ["Decorated Vehicles", "Luxury Cars", "Professional Chauffeurs", "Custom Decorations"],
    icon: "heart",
    image: "/images/services/service-wedding.webp",
    benefits: ["Luxury experience", "Flower decorations", "Red carpet service", "Photography support"]
  },
  {
    slug: "adventure-tours",
    title: "Adventure Tours",
    shortDescription: "Explore thrilling destinations with our adventure tour packages.",
    description: "Experience the thrill of adventure with our specially curated tour packages. From river rafting in Rishikesh to trekking in the Himalayas, we provide safe and comfortable transportation for all your adventure activities.",
    features: ["Expert Guides", "Safe Transport", "Multiple Activities", "Group Packages"],
    icon: "mountain",
    image: "/images/services/service-adventure.webp",
    benefits: ["Adventure specialists", "Safety equipment", "Experienced drivers", "Flexible itineraries"]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};
