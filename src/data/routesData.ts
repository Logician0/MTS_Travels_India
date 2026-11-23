export interface FAQ {
  question: string;
  answer: string;
}

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
  // SEO Fields
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  longDescription?: string;
  faqs?: FAQ[];
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
    image: "/images/routes/route-delhi.webp",
    seoTitle: "Dehradun to Delhi Taxi Cab Service | Book Cab @ ₹3499 | MTS Travels",
    seoDescription: "Book Dehradun to Delhi taxi with MTS Travels India. Affordable cab service for 250km distance. Professional drivers, AC vehicles, 24/7 availability.",
    keywords: ["dehradun to delhi taxi", "delhi to dehradun cab", "dehradun delhi cab booking", "taxi dehradun delhi", "dehradun delhi cabs"],
    longDescription: `Traveling from Dehradun to Delhi is now more convenient and affordable with MTS Travels India's premium taxi service. Our 250 km route is covered in 5-6 hours with experienced drivers who know every turn of the highway. We offer comfortable AC vehicles suitable for solo travelers, business professionals, and families. The journey passes through scenic routes including national highway stretches with multiple stop points if needed. Our service includes professional drivers with excellent knowledge of alternate routes, ensuring timely arrival even during peak traffic. We prioritize your safety with regular vehicle maintenance and trained drivers. Book in advance or avail last-minute bookings - our 24/7 service is always ready to serve you. From early morning airport pickups to late-night office commutes, we handle all your Dehradun to Delhi taxi needs with reliability and affordability. Experience comfortable travel with transparent pricing and no hidden charges.`,
    faqs: [
      {
        question: "What is the current fare for Dehradun to Delhi cab?",
        answer: "The fare for Dehradun to Delhi taxi is ₹3,499 for a sedan. This includes tolls, fuel, and GST. Prices may vary for larger vehicles like MUV (₹4,699) or SUV and above."
      },
      {
        question: "How long does it take to travel from Dehradun to Delhi by taxi?",
        answer: "The average travel time is 5-6 hours depending on traffic conditions and the route taken. During peak hours, it may take an additional 30-60 minutes."
      },
      {
        question: "Can I book a round trip taxi from Dehradun to Delhi?",
        answer: "Yes, we offer round trip services. You can book a taxi for a round journey and specify your return date. This is ideal for weekend trips or multi-city tours."
      },
      {
        question: "Do you provide taxi service early morning for airport pickups?",
        answer: "Absolutely! We offer 24/7 taxi service including early morning rides for flights. Just book in advance or call us, and we'll ensure timely pickup from your location."
      }
    ]
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
    image: "/images/routes/route-mussoorie.webp",
    seoTitle: "Dehradun to Mussoorie Taxi | Cab Service @ ₹1199 | MTS Travels India",
    seoDescription: "Book taxi from Dehradun to Mussoorie (35km). Scenic hill station ride with AC cab, expert drivers, flexible timings. Best rates guaranteed.",
    keywords: ["dehradun to mussoorie taxi", "mussoorie cab service", "mussoorie taxi booking", "dehradun mussoorie cab", "hill station taxi"],
    longDescription: `Mussoorie, the Queen of Hills, is just 35 kilometers away from Dehradun and can be reached in approximately 1-1.5 hours by taxi. MTS Travels India provides comfortable and reliable taxi service for this scenic journey. The route from Dehradun to Mussoorie is famous for its picturesque beauty, winding roads, and panoramic views. Our experienced drivers are well-versed with the hill station roads and navigate safely through curves and traffic. Whether you're visiting Mussoorie for its famous mall road shopping, adventure activities like paragliding and zip-lining, or just for a peaceful retreat, our taxi service ensures a smooth journey. We offer flexible timings to accommodate your travel plans, morning sightseeing tours, or late-night departures. The AC vehicles keep you comfortable during the scenic ride. Perfect for couples, families, and solo tourists exploring Uttarakhand's most visited hill station.`,
    faqs: [
      {
        question: "What is the best time to visit Mussoorie from Dehradun?",
        answer: "Mussoorie is beautiful year-round. Summer (April-June) is ideal for shopping and outdoor activities, monsoon (July-September) offers lush greenery, and winter (October-March) provides pleasant weather with snow views."
      },
      {
        question: "Is the Dehradun to Mussoorie route safe during monsoon?",
        answer: "Yes, the route is generally safe but can have occasional landslides. Our experienced drivers know the safest paths. For monsoon travel, we recommend traveling during daytime and booking in advance."
      },
      {
        question: "Can I hire a taxi for Mussoorie sightseeing after reaching?",
        answer: "Yes! We can arrange local taxi for Mussoorie sightseeing. Popular spots include Mall Road, Camel Back Road, Gun Hill, Jag Mandir, and Kempty Falls."
      },
      {
        question: "What should I pack for Dehradun to Mussoorie taxi journey?",
        answer: "Pack light woolens even in summer as Mussoorie is cooler. Carry water bottles, snacks, and motion sickness medicine if prone. Sunscreen and camera for scenic views are recommended."
      }
    ]
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
    image: "/images/routes/route-rishikesh.webp",
    seoTitle: "Dehradun to Rishikesh Taxi | Yoga Capital Cab Service | MTS Travels",
    seoDescription: "Book Dehradun to Rishikesh taxi (45km). Comfortable cab for yoga retreats, adventure sports. Professional drivers, flexible timings, competitive pricing.",
    keywords: ["dehradun to rishikesh taxi", "rishikesh cab service", "yoga retreat transportation", "adventure taxi rishikesh", "dehradun rishikesh cab"],
    longDescription: `Rishikesh, the spiritual capital and yoga hub of India, is a 45-kilometer journey from Dehradun, taking approximately 1-1.5 hours by taxi. Known as the gateway to the Himalayas and famous for yoga ashrams, adventure sports, and the sacred Ganges River, Rishikesh attracts thousands of pilgrims and tourists annually. MTS Travels India offers comfortable taxi service connecting Dehradun to this spiritual destination. The scenic route along the Ganges valley offers beautiful views and multiple stopping points like scenic pullouts and fruit stands. Whether you're traveling for yoga retreats at renowned ashrams, adventure activities like rafting and bungee jumping, or spiritual pilgrimage, our taxi ensures a smooth and comfortable journey. Our drivers are knowledgeable about Rishikesh's attractions and can suggest best places to visit. We accommodate early morning pickups for ashram schedules and evening drops at your accommodation.`,
    faqs: [
      {
        question: "What are the major attractions to visit in Rishikesh?",
        answer: "Popular attractions include Triveni Ghat, Lakshman Jhula, Ram Jhula, Neelkanth Mahadev Temple, Yoga capital ashrams, adventure sports at Jungle Camps, and water rafting on Ganges River."
      },
      {
        question: "Is Rishikesh safe for solo travelers?",
        answer: "Yes, Rishikesh is generally safe for travelers. However, it's recommended to use registered taxis (like MTS Travels) rather than autos, especially at night."
      },
      {
        question: "What is the cost of yoga retreats in Rishikesh?",
        answer: "Yoga retreat costs vary from ₹5,000-₹20,000+ depending on duration and accommodation level. Our taxi service is separate; book your accommodation directly with ashrams."
      },
      {
        question: "Can I do adventure sports like rafting in Rishikesh?",
        answer: "Yes! Rishikesh offers thrilling water rafting, bungee jumping, zip-lining, and camping. Our drivers can recommend the best operators and arrange bookings."
      }
    ]
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
    image: "/images/routes/route-haridwar.webp",
    seoTitle: "Dehradun to Haridwar Taxi | Pilgrimage Cab Service | MTS Travels India",
    seoDescription: "Book Dehradun to Haridwar taxi (55km). Special pilgrimage service, Ganga Aarti timing, early morning pickups, safe & comfortable travel.",
    keywords: ["dehradun to haridwar taxi", "haridwar pilgrimage cab", "dehradun haridwar taxi booking", "religious tour taxi", "pilgrimage transportation"],
    longDescription: `Haridwar, one of the holiest cities in Hinduism and a major pilgrimage destination, is 55 kilometers from Dehradun, approximately 1.5-2 hours by taxi. Known as the gateway to the Himalayan pilgrimage site Char Dham, Haridwar receives millions of pilgrims annually, especially during holy seasons and festivals. MTS Travels India specializes in pilgrimage transportation with special attention to sacred timing like Ganga Aarti schedules. Our experienced drivers understand the spiritual significance of Haridwar and help navigate the city efficiently. We offer early morning pickups to ensure you don't miss important rituals. The 55 km route is well-maintained with scenic views of the Ganges valley. Whether visiting for Maha Kumbh, Ganga Aarti at Har Ki Pauri, temple darshans, or Char Dham yatra preparation, our taxi service ensures comfortable and spiritually meaningful journey.`,
    faqs: [
      {
        question: "What time is the Ganga Aarti in Haridwar?",
        answer: "Ganga Aarti at Har Ki Pauri is performed twice daily - morning (around 6:00 AM) and evening (around 6:00-6:30 PM). Timings may vary seasonally."
      },
      {
        question: "How much time are you typically required in Haridwar for darshan?",
        answer: "For basic darshan, 3-4 hours is sufficient. For comprehensive visit including temples and Ganga Aarti, plan 6-8 hours. During festivals, you may need to wait in queues."
      },
      {
        question: "Is Haridwar on the way to Char Dham Yatra?",
        answer: "Yes! Haridwar is the gateway to Char Dham Yatra. All four sacred destinations (Kedarnath, Badrinath, Tungnath, Auli) are accessed through Haridwar or nearby towns."
      },
      {
        question: "What is the best season to visit Haridwar?",
        answer: "October to March offers pleasant weather and clear skies for darshan. Maha Kumbh (happens every 12 years) attracts millions. Avoid summer rush and monsoon flooding."
      }
    ]
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
    image: "/images/routes/route-nainital.webp",
    seoTitle: "Dehradun to Nainital Cab | Lake City Taxi Service | MTS Travels India",
    seoDescription: "Book Dehradun to Nainital taxi (280km). Scenic lake city cab with stops, photography points, comfortable AC vehicles, professional drivers.",
    keywords: ["dehradun to nainital taxi", "nainital cab service", "lake city transportation", "mountain cab service", "uttarakhand tour taxi"],
    longDescription: `Nainital, the picturesque lake city nestled in the Kumaon Hills of Uttarakhand, is 280 kilometers from Dehradun and requires 6-7 hours of travel by taxi. Famous for its serene Naini Lake surrounded by snow-capped mountains, Nainital is a favorite destination for families, couples, and adventure seekers. MTS Travels India provides comfortable long-distance taxi service with well-maintained AC vehicles perfect for this scenic journey. The route passes through beautiful landscapes with multiple scenic stops including viewpoints and roadside attractions. Our experienced drivers know the mountain roads well and drive safely maintaining comfort throughout the journey. The journey offers changing vistas - from plains to foothills to lush green mountains. We accommodate preferences for lunch stops, photography breaks, and refreshment halts along the way.`,
    faqs: [
      {
        question: "What are the main attractions in Nainital?",
        answer: "Main attractions include Naini Lake (boat rides), Naina Peak (cable car), Eco Cave Garden, Spiritual Nainital (temples), Zoological Garden, Mall Road shopping, and Snow View Point."
      },
      {
        question: "How many days should be spent in Nainital?",
        answer: "For a comfortable visit covering main attractions, 2-3 days is recommended. This allows 1 day for lake activities, 1 day for hill views and trekking, and 1 day for shopping/relaxation."
      },
      {
        question: "Is Nainital good for family vacation?",
        answer: "Yes! Nainital is excellent for families with activities suitable for all ages - lake boating, cable car rides, zoological garden, and peaceful nature walks."
      },
      {
        question: "What should I pack for Dehradun to Nainital taxi journey?",
        answer: "Pack warm clothes even in summer (higher altitude = cooler). Carry motion sickness medicine, sunscreen, camera, comfortable shoes for walks, and any personal medications."
      }
    ]
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
    image: "/images/routes/route-shimla.webp",
    seoTitle: "Dehradun to Shimla Taxi | Queen of Hills Cab Service | MTS Travels",
    seoDescription: "Book Dehradun to Shimla cab (220km). Mountain ride with scenic views, experienced drivers, AC vehicles, 5-6 hours comfortable journey.",
    keywords: ["dehradun to shimla taxi", "shimla cab service", "queen of hills transportation", "mountain cab shimla", "himachal taxi service"],
    longDescription: `Shimla, the capital of Himachal Pradesh and famously known as the Queen of Hills, is a 220-kilometer journey from Dehradun, taking 5-6 hours by taxi through scenic mountain roads. Rising at an elevation of 2,158 meters, Shimla offers pleasant weather year-round and stunning Himalayan vistas. MTS Travels India provides premium taxi service for this interstate journey with experienced drivers proficient in mountain driving. The route passes through gradually ascending terrain offering breathtaking views of the lower and higher Himalayas. Our well-maintained AC vehicles ensure comfort throughout the winding hill roads. Whether visiting for summer retreat from heat, adventure sports, trekking, cultural exploration, or business, our taxi service provides reliable transportation to this charming hill station.`,
    faqs: [
      {
        question: "What is the best season to visit Shimla?",
        answer: "Summer (April-June) offers pleasant weather perfect for sightseeing. Winter (December-February) brings snow for winter enthusiasts. October-November is ideal for clear mountain views and adventure activities."
      },
      {
        question: "Can I do adventure activities in Shimla?",
        answer: "Yes! Shimla offers trekking, paragliding, horse riding, skiing (in winter), nature walks, and adventure camps. Our drivers can provide recommendations and help with bookings."
      },
      {
        question: "Is the Dehradun to Shimla road safe during winter?",
        answer: "The road is generally safe but can be slippery during heavy snowfall. We recommend traveling during daytime and ensuring your vehicle is fitted with winter tyres."
      },
      {
        question: "How many days should be allocated in Shimla?",
        answer: "For a comfortable visit, 2-3 days is good. This covers main attractions like Mall Road, Jakhoo Temple, Kufri, Chail, and nearby adventure spots."
      }
    ]
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
    image: "/images/routes/route-chandigarh.webp",
    seoTitle: "Dehradun to Chandigarh Taxi | City Beautiful Cab Service | MTS Travels",
    seoDescription: "Book Dehradun to Chandigarh cab (170km). Smooth highway drive, 4-5 hours, AC vehicles, professional drivers, affordable rates.",
    keywords: ["dehradun to chandigarh taxi", "chandigarh cab service", "city beautiful transportation", "chandigarh taxi booking", "highway taxi service"],
    longDescription: `Chandigarh, India's first planned city and the union territory capital, is 170 kilometers from Dehradun, accessible in approximately 4-5 hours by taxi via well-maintained highways. Known for its iconic architecture, garden city beautification, and modern infrastructure, Chandigarh is a hub for business travel, education, and tourism. MTS Travels India offers comfortable highway taxi service for this smooth interstate journey. The scenic route passes through Himachal Pradesh foothills and Punjab plains, offering diverse landscape views. Our fleet includes comfortable AC vehicles perfect for business professionals and leisure travelers. The highway drive is smooth with multiple rest stops available if needed.`,
    faqs: [
      {
        question: "What are the major attractions in Chandigarh?",
        answer: "Popular attractions include Rock Garden, Sukhna Lake, Government Museum, Sector 17 shopping, Rose Garden, Pinjore Garden, Leisure Valley Park, and nearby Morni Hills."
      },
      {
        question: "How many days are needed to explore Chandigarh?",
        answer: "1-2 days is sufficient for main attractions. Day 1 cover Rock Garden and museums, Day 2 cover Sukhna Lake, shopping, and food. Nearby destinations like Shimla can be explored after."
      },
      {
        question: "Is Chandigarh good for business travel?",
        answer: "Yes! Chandigarh has excellent infrastructure for business meetings. Hotels, restaurants, and facilities are world-class. Our taxi service ensures punctual office commute."
      },
      {
        question: "Can I hire a local taxi in Chandigarh for sightseeing?",
        answer: "Yes, MTS Travels can arrange local taxi in Chandigarh for sightseeing. We have partner operators for local trips after your arrival."
      }
    ]
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
    image: "/images/routes/route-manali.webp",
    seoTitle: "Dehradun to Manali Premium Taxi | Adventure Destination Cab | MTS Travels",
    seoDescription: "Book Dehradun to Manali adventure taxi (380km, 9-10hrs). Premium SUV, overnight option, scenic mountain route, professional drivers for adventure travel.",
    keywords: ["dehradun to manali taxi", "manali adventure cab", "mountain destination taxi", "himachal trip transportation", "adventure tour taxi"],
    longDescription: `Manali, the adventure capital of India and a premier hill station in Himalayan Pradesh, is a thrilling 380-kilometer journey from Dehradun, requiring 9-10 hours of travel. Nestled at the foot of the Pir Panjal mountain range, Manali is heaven for adventure enthusiasts, nature lovers, and spiritual seekers. MTS Travels India provides premium taxi service for this long-distance scenic journey, handling the challenging mountain roads with excellence. The route crosses multiple passes and offers breathtaking views of the Himalayas. We recommend overnight journey with strategic breaks for passenger comfort and safety. Our professional drivers are experienced with high altitude driving. Manali is famous for adventure sports like paragliding, white-water rafting, trekking, and mountain biking, making it ideal for thrill-seekers.`,
    faqs: [
      {
        question: "What adventure activities are available in Manali?",
        answer: "Manali offers paragliding, white-water rafting on Beas River, trekking (Hampta Pass, Bhrigu Lake), mountain biking, camping, rock climbing, and skiing in winters."
      },
      {
        question: "Is it better to travel overnight or in daytime to Manali?",
        answer: "Overnight journey (departing evening, arriving morning) is popular to minimize daytime driving through hairpin curves. However, daytime travel offers better scenic views. Both are safe with experienced drivers."
      },
      {
        question: "How many days should be planned for Manali trip?",
        answer: "Minimum 2-3 days for basic sightseeing, 4-5 days for adventure activities. 1 week allows comfortable exploration including nearby destinations like Solang Valley, Kasol, and Rohtang Pass."
      },
      {
        question: "Are there scenic stops between Dehradun and Manali?",
        answer: "Yes! Popular stops include Shimla (can stay overnight), Kinnaur region, Rampur, Kulu Valley. We arrange breaks at scenic viewpoints and local attractions."
      }
    ]
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
    image: "/images/routes/route-jammu.webp",
    seoTitle: "Dehradun to Jammu Pilgrimage Taxi | Vaishno Devi Gateway Cab | MTS Travels",
    seoDescription: "Book Dehradun to Jammu taxi (450km). Vaishno Devi pilgrimage transportation, 9-10 hours, comfortable SUV, professional drivers, flexible timings.",
    keywords: ["dehradun to jammu taxi", "vaishno devi transportation", "jammu pilgrimage cab", "religious tour taxi", "kashmir gateway transportation"],
    longDescription: `Jammu, the winter capital of Jammu & Kashmir and the gateway to Vaishno Devi, is a 450-kilometer pilgrimage destination from Dehradun, requiring 9-10 hours of travel. Every year, millions of pilgrims visit Jammu to access the sacred Vaishno Devi cave shrine, one of Hinduism's holiest pilgrimage sites. MTS Travels India specializes in pilgrimage transportation with particular expertise in Vaishno Devi routes. Our comfortable SUV fleet and experienced drivers ensure safe passage through winding mountain roads. We understand the spiritual significance and accommod ate early morning departures and flexible schedules around pilgrimage timings. The journey offers scenic views of the Himalayas and passes through historically significant regions.`,
    faqs: [
      {
        question: "How do I reach Vaishno Devi from Jammu?",
        answer: "From Jammu, it's about 50km to Katra (base of Vaishno Devi trek). From Katra, it's a 12-14km trek to the cave shrine, taking 4-5 hours each way. Helicopter services are available."
      },
      {
        question: "What is the best time to visit Vaishno Devi?",
        answer: "April-October offers pleasant trekking weather. Winter (Nov-March) is cold with snow, difficult trekking. Avoid monsoon (July-September) due to slippery paths."
      },
      {
        question: "How many days should be planned for Vaishno Devi pilgrimage?",
        answer: "Minimum 3 days (1 day travel to Jammu, 1 day trek, 1 day return). Comfortable pilgrimage would be 4-5 days including rest and acclimatization."
      },
      {
        question: "Is the trek to Vaishno Devi difficult?",
        answer: "The trek is moderately difficult with stairs and uneven terrain. Pilgrims of all ages undertake it. Comfortable shoes, walking stick, and physical fitness are recommended."
      }
    ]
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
    image: "/images/routes/route-agra.webp",
    seoTitle: "Dehradun to Agra Taj Mahal Taxi | Heritage Cab Service | MTS Travels",
    seoDescription: "Book Dehradun to Agra cab for Taj Mahal visit (350km, 6-7hrs). Heritage tourism, comfortable AC vehicle, professional driver, flexible scheduling.",
    keywords: ["dehradun to agra taxi", "taj mahal transportation", "agra cab service", "heritage tourism taxi", "world wonder visiting cab"],
    longDescription: `Agra, home to the world-famous Taj Mahal and one of India's top tourist destinations, is 350 kilometers from Dehradun, accessible in 6-7 hours by comfortable taxi. The Taj Mahal, recognized as one of the Seven Wonders of the World, attracts millions of visitors annually seeking to experience this symbol of eternal love. MTS Travels India provides comfortable highway taxi service for this iconic destination journey. The smooth route predominantly follows national highways through the Indo-Gangetic plains, offering opportunities to experience diverse landscapes and local culture. Our comfortable AC vehicles and experienced drivers ensure a pleasant journey to this UNESCO World Heritage site.`,
    faqs: [
      {
        question: "What is the best time to visit Taj Mahal?",
        answer: "Early morning (sunrise) or evening (sunset) visits offer magical views with fewer crowds. October-March provides pleasant weather. Avoid noon heat and peak tourist season (March-April)."
      },
      {
        question: "How long does a Taj Mahal visit typically take?",
        answer: "2-3 hours is standard for Taj Mahal visit including photography and exploring gardens. Add time for nearby attractions like Agra Fort and Itimad-ud-Daulah."
      },
      {
        question: "Can I do a same-day trip from Dehradun to Agra?",
        answer: "Yes! Same-day trip is possible - early morning departure from Dehradun, Taj Mahal afternoon visit, evening return. However, this is tiring. 2-day trip is recommended."
      },
      {
        question: "What are other attractions in Agra besides Taj Mahal?",
        answer: "Other attractions include Agra Fort, Itimad-ud-Daulah, Mehtab Bagh (for sunset views), Sikandra (Akbar's tomb), and local shopping at Sadar Bazaar and Kinari Bazaar."
      }
    ]
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
    image: "/images/routes/route-ghaziabad.webp",
    seoTitle: "Dehradun to Ghaziabad Taxi | NCR Cab Service | MTS Travels India",
    seoDescription: "Book Dehradun to Ghaziabad cab (230km, 5-6hrs). NCR transportation, doorstep pickup/drop, smooth highway, competitive rates.",
    keywords: ["dehradun to ghaziabad taxi", "ghaziabad cab service", "ncr transportation", "delhi ncr taxi booking", "ghaziabad taxi from dehradun"],
    longDescription: `Ghaziabad, an important city in the National Capital Region (NCR), is 230 kilometers from Dehradun, approximately 5-6 hours by taxi. As the gateway to UP and NCR, Ghaziabad serves as a hub for business, education, and commerce. MTS Travels India provides reliable highway taxi service for this well-established route. The primarily highway journey offers smooth driving conditions and good road infrastructure. Whether for business meetings, education-related travel, or family visits to NCR, our door-to-door service ensures convenient transportation from Dehradun to any location in Ghaziabad.`,
    faqs: [
      {
        question: "What are the main employment hubs in Ghaziabad?",
        answer: "Ghaziabad hosts industrial estates, IT companies, manufacturing units, and logistics centers. Popular areas include Vashundhra Enclave, Indirapuram, Surya Nagar, and Karhel."
      },
      {
        question: "Is Ghaziabad a good base for Delhi visits?",
        answer: "Yes, Ghaziabad is within NCR and well-connected to Delhi by metro and highway. It's more affordable than Delhi but offers access to Delhi's business and cultural centers."
      },
      {
        question: "How is the traffic situation from Dehradun to Ghaziabad?",
        answer: "Most of the route is on highways with smooth traffic. Near Delhi/NCR border, traffic can be heavy during peak hours (7-9 AM, 5-8 PM). We plan journeys accordingly."
      },
      {
        question: "Can I book a taxi for further travel to Delhi from Ghaziabad?",
        answer: "Yes! Upon reaching Ghaziabad, we can arrange additional taxi for Delhi or extend your booking. Ghaziabad to Delhi is about 30-40km and 1 hour drive."
      }
    ]
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
    image: "/images/routes/route-faridabad.webp",
    seoTitle: "Dehradun to Faridabad Taxi | Industrial City Cab Service | MTS Travels",
    seoDescription: "Book Dehradun to Faridabad cab (270km, 5-6hrs). NCR business travel, professional drivers, flexible timings, door-to-door service.",
    keywords: ["dehradun to faridabad taxi", "faridabad cab service", "industrial hub transportation", "ncr business travel", "faridabad taxi booking"],
    longDescription: `Faridabad, an industrial powerhouse and important commercial hub in NCR, is 270 kilometers from Dehradun, accessible in 5-6 hours by taxi. Known for its manufacturing, automobile, and engineering sectors, Faridabad serves as a major employment destination for professionals across India. MTS Travels India provides professional taxi service for this business-focused route. The smooth highway journey connects well with industrial areas and business districts. Our understanding of business travel timelines and flexible scheduling accommodates morning office drops and late afternoon departures.`,
    faqs: [
      {
        question: "What industries dominate Faridabad?",
        answer: "Automotive, machinery, steel, electrical equipment, and chemicals are major industries. Prominent companies include Bharat Petroleum, Birlasoft, Escorts, and Hero MotoCorp."
      },
      {
        question: "Is Faridabad good for corporate meetings?",
        answer: "Yes, Faridabad has developed infrastructure for business including hotels, conference centers, and restaurants. Highway proximity to Delhi makes it easily accessible."
      },
      {
        question: "How far is Faridabad from Delhi?",
        answer: "Faridabad is about 40-50km from Delhi and takes 1.5-2 hours by road depending on traffic. It's closer than Ghaziabad to central Delhi."
      },
      {
        question: "Can I visit industrial estates or manufacturing units in Faridabad?",
        answer: "Yes, many units offer factory tours. Our taxi can take you to SIDCUL (industrial area) and arrange visits upon request. Advance notice to companies is recommended."
      }
    ]
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
    image: "/images/routes/route-gurugram.webp",
    seoTitle: "Dehradun to Gurugram Premium Taxi | Corporate Travel Cab | MTS Travels",
    seoDescription: "Book Dehradun to Gurugram corporate cab (280km, 5-6hrs). Premium vehicles, business travel specialist, airport connectivity, flexible timings.",
    keywords: ["dehradun to gurugram taxi", "gurugram cab service", "corporate travel taxi", "millennium city transportation", "business class cab"],
    longDescription: `Gurugram, the IT and corporate hub of India, is 280 kilometers from Dehradun, approximately 5-6 hours by premium taxi service. Transformed from farmland to a global commercial center, Gurugram hosts major IT companies, multinational corporations, financial institutions, and luxury hospitality. MTS Travels India specializes in corporate travel with premium vehicles and professional drivers accustomed to business transportation requirements. The smooth highway journey provides comfortable space for conference calls and work. Our premium fleet includes vehicles suitable for executive travel, and our drivers understand punctuality demands of business meetings.`,
    faqs: [
      {
        question: "What are the main business districts in Gurugram?",
        answer: "Key business hubs include Cyber City, Campus, Golf Course Road, DLF City, Sector 17, MG Road, and areas near Indira Gandhi International Airport."
      },
      {
        question: "How far is Gurugram from Delhi International Airport?",
        answer: "Gurugram is about 20-25km from IGI Airport and takes 30-40 minutes by car. Our taxi can arrange airport connections."
      },
      {
        question: "Is Gurugram a good base for Delhi business meetings?",
        answer: "Yes, Gurugram is a modern business city with excellent infrastructure. Many corporations headquarters are based here, making it ideal for business travel."
      },
      {
        question: "What are the accommodation options in Gurugram for business travelers?",
        answer: "Gurugram offers luxury 5-star hotels, business hotels, and serviced apartments. Our drivers can recommend options suitable for your company and budget."
      }
    ]
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
    image: "/images/routes/route-mathura.webp",
    seoTitle: "Dehradun to Mathura Pilgrimage Taxi | Krishna Temple Cab | MTS Travels",
    seoDescription: "Book Dehradun to Mathura pilgrimage cab (300km, 6-7hrs). Krishna temple visiting, Vrindavan access, spiritual tourism, comfortable travel.",
    keywords: ["dehradun to mathura taxi", "mathura pilgrimage cab", "krishna birthplace transportation", "vrindavan tour taxi", "religious pilgrimage cab"],
    longDescription: `Mathura, the birthplace of Lord Krishna and a major Hindu pilgrimage destination, is 300 kilometers from Dehradun, requiring 6-7 hours of travel. Sacred to millions of Hindus worldwide, Mathura attracts pilgrims seeking blessings at Krishna Janmabhoomi Temple and nearby sacred sites. The closely adjacent Vrindavan completes the spiritual triangle of Krishna devotion. MTS Travels India provides comfortable pilgrimage transportation with respect for spiritual significance. Our experienced drivers understand pilgrimage timing and logistics. The route offers opportunities to visit other religious sites along the way, and our flexible scheduling accommodates religious calendars and festival times.`,
    faqs: [
      {
        question: "What are the major temples to visit in Mathura?",
        answer: "Krishna Janmabhoomi Temple, Radha Kund, Banke Bihari Temple, Dwarkadhish Temple, Gita Temple, and numerous smaller temples dedicated to Krishna and Radha."
      },
      {
        question: "How far is Vrindavan from Mathura?",
        answer: "Vrindavan is only 60km from Mathura and takes about 1-1.5 hours by taxi. Many pilgrims visit both Mathura and Vrindavan in one trip."
      },
      {
        question: "When is the best time to visit Mathura?",
        answer: "October-March offers pleasant weather. Janmashtami (Krishna's birth celebration) in August brings special preparations. Holi festival in March is particularly vibrant in Mathura-Vrindavan region."
      },
      {
        question: "What is special about Mathura pilgrimage?",
        answer: "Mathura is believed to be Krishna's birthplace, making it one of Hinduism's most sacred cities. Devotees through pilgrimage seek blessings and spiritual enlightenment."
      }
    ]
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
    image: "/images/routes/route-uttarkashi.webp",
    seoTitle: "Dehradun to Uttarkashi Char Dham Taxi | Gangotri Gateway Cab | MTS Travels",
    seoDescription: "Book Dehradun to Uttarkashi cab (150km, 4-5hrs). Char Dham pilgrimage, Gangotri gateway, mountain roads, experienced drivers.",
    keywords: ["dehradun to uttarkashi taxi", "char dham taxi", "gangotri transportation", "pilgrimage route cab", "mountain sacredtown taxi"],
    longDescription: `Uttarkashi, the sacred town perched along the Bhagirathi River in higher Himalayas, is 150 kilometers from Dehradun, accessible in 4-5 hours by mountain taxi. As the gateway to Gangotri, one of the four holiest sites in Char Dham Yatra pilgrimage, Uttarkashi serves millions of pilgrims annually. The town itself is sacred, home to ancient temples and yoga centers. MTS Travels India specializes in Char Dham pilgrimage transportation with expertise in mountain roads and high-altitude driving. The scenic mountain journey offers spiritual preparation for pilgrims. Our experienced drivers navigate winding hill roads safely while respecting the pilgrimage's spiritual significance.`,
    faqs: [
      {
        question: "What is the Char Dham Yatra pilgrimage?",
        answer: "Char Dham (Four Holy Temples) consists of Yamunotri, Gangotri, Kedarnath, and Badrinath. It's Hinduism's holiest pilgrimage traditionally done in summer (May-October)."
      },
      {
        question: "Can I reach Gangotri directly from Uttarkashi?",
        answer: "Yes, Gangotri is 100km further from Uttarkashi and takes 3-4 more hours. Some pilgrims spend 1-2 days in Uttarkashi for acclimatization before proceeding to Gangotri."
      },
      {
        question: "What is the best season for Char Dham pilgrimage?",
        answer: "May-October is the season when all Char Dham sites are accessible. Snow blocks higher passes in winter. June-August is most crowded but weather is stable."
      },
      {
        question: "How many days are needed for complete Char Dham Yatra?",
        answer: "Minimum 7-10 days is needed for all four temples. Starting from Haridwar or Delhi, adding travel time, 2-3 weeks is a comfortable pilgrimage."
      }
    ]
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
    image: "/images/routes/route-roorkee.webp",
    seoTitle: "Dehradun to Roorkee Taxi | IIT Campus Cab Service | MTS Travels India",
    seoDescription: "Book Dehradun to Roorkee quick cab (70km, 1.5-2hrs). IIT Roorkee transportation, economical rates, reliable service.",
    keywords: ["dehradun to roorkee taxi", "roorkee cab service", "iit roorkee transportation", "quick short distance taxi", "roorkee taxi booking"],
    longDescription: `Roorkee, home to the prestigious Indian Institute of Technology (IIT) Roorkee and an important educational and industrial hub, is just 70 kilometers from Dehradun, accessible in 1.5-2 hours by taxi. Also known historically for its pioneering role in Indian engineering, Roorkee attracts students, parents, and professionals for campus visits and business meetings. MTS Travels India provides quick and affordable taxi service for this short distance route. The smooth road and short duration make it ideal for day trips or quick business meetings.`,
    faqs: [
      {
        question: "How do I visit IIT Roorkee campus from outside?",
        answer: "IIT Roorkee allows visitor passes. Contact the institution in advance. Campus tours showcase engineering heritage, laboratories, and student facilities."
      },
      {
        question: "Is Roorkee just for IIT or has other attractions?",
        answer: "Besides IIT, Roorkee has historical significance with Roorkee College (oldest engineering school in Asia), Solani Aqueduct, and industrial areas."
      },
      {
        question: "Can I do a same-day trip from Dehradun to Roorkee?",
        answer: "Yes, with only 70km distance and 1.5-2 hours travel, same-day trip is very feasible. Morning departure for noon arrival allows afternoon campus visit."
      },
      {
        question: "What is the demand for taxi from Dehradun to Roorkee?",
        answer: "Regular demand from students and parents for IIT campus visits, also business travel for professionals. Economical pricing for this short distance attracts frequent bookings."
      }
    ]
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
    image: "/images/routes/route-saharanpur.webp",
    seoTitle: "Dehradun to Saharanpur Taxi | Easy Border Crossing Cab | MTS Travels",
    seoDescription: "Book Dehradun to Saharanpur quick cab (90km, 2-2.5hrs). State border crossing, economical taxi service, convenient booking.",
    keywords: ["dehradun to saharanpur taxi", "saharanpur cab service", "state border taxi", "short distance cab dehradun", "saharanpur taxi booking"],
    longDescription: `Saharanpur, an important city in Uttar Pradesh and across the state border from Uttarakhand, is 90 kilometers from Dehradun, approximately 2-2.5 hours by taxi. Known for its production of wooden handicrafts, marble works, and agricultural trade, Saharanpur serves as a commercial hub. MTS Travels India provides convenient border-crossing taxi service for this short-distance route. The quick journey makes it ideal for business traveler and day trips. The route crosses the Haridwar-Saharanpur highway, well-maintained and smooth.`,
    faqs: [
      {
        question: "What is Saharanpur famous for?",
        answer: "Saharanpur is famous for wooden handicrafts, marble inlay work, carpets, and leather products. The city is an artisan hub with centuries-old craft traditions."
      },
      {
        question: "Can I shop for handicrafts in Saharanpur?",
        answer: "Yes! Saharanpur has bazaars dedicated to wooden items, marble work, and handcrafted goods. Direct factory shopping offers better prices than retail."
      },
      {
        question: "How far is Saharanpur from Delhi?",
        answer: "Saharanpur is about 180km from Delhi and takes 4-5 hours by road. It's positioned between Delhi and Haridwar on the highway route."
      },
      {
        question: "Is Saharanpur a good stop for Haridwar or Delhi trips?",
        answer: "Yes, Saharanpur can be a convenient stop for shopping and refreshment breaks on longer journey. Road distance to both Haridwar and Delhi is significant."
      }
    ]
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
    image: "/images/routes/route-noida.webp",
    seoTitle: "Dehradun to Noida Premium Cab | IT Hub Transportation | MTS Travels India",
    seoDescription: "Book Dehradun to Noida business cab (240km, 5-6hrs). IT corporate travel, premium vehicles, doorstep service, professional drivers.",
    keywords: ["dehradun to noida taxi", "noida cab service", "it hub transportation", "corporate travel noida", "noida taxi booking"],
    longDescription: `Noida (New Okhla Industrial Development Area), a major information technology and corporate hub in NCR, is 240 kilometers from Dehradun, approximately 5-6 hours by taxi. Home to hundreds of IT companies, software firms, manufacturing units, and food courts, Noida is a significant employment destination. MTS Travels India provides professional taxi service tailored for corporate travel. The primarily expressway route offers smooth driving with professional comfort suitable for business passengers. Our premium fleet and punctuality-focused service cater to corporate travel requirements.`,
    faqs: [
      {
        question: "What are the main IT parks and corporate centers in Noida?",
        answer: "Noida has Sector 62 (major IT hub), Sector 63, Sector 67, and emerging tech parks. Notable companies include TCS, Infosys, Wipro, HCL, Accenture offices."
      },
      {
        question: "How far is Noida from Delhi International Airport?",
        answer: "Noida is about 35-40km from IGI Airport and takes 1-1.5 hours depending on traffic. Our taxi can arrange airport connections."
      },
      {
        question: "Is Noida good for business meetings?",
        answer: "Yes, Noida has excellent infrastructure with hotels, restaurants, conference facilities, and proximity to airport. Ideal for business travelers and meetings."
      },
      {
        question: "Can I extend from Noida to Delhi or other NCR cities?",
        answer: "Yes! After Noida, we can arrange further taxi to Greater Noida, Delhi, Gurgaon, or Faridabad for multi-city business tours."
      }
    ]
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
    image: "/images/routes/route-jaipur.webp",
    seoTitle: "Dehradun to Jaipur Tourism Taxi | Pink City Heritage Cab | MTS Travels",
    seoDescription: "Book Dehradun to Jaipur heritage cab (480km, 8-9hrs). Pink city tour, scenic routes, overnight journey available, premium SUV comfort.",
    keywords: ["dehradun to jaipur taxi", "jaipur cab service", "pink city transportation", "heritage tour taxi", "rajasthan trip taxi"],
    longDescription: `Jaipur, the vibrant capital of Rajasthan and famously known as the "Pink City", is a thrilling 480-kilometer journey from Dehradun, requiring 8-9 hours of travel. Founded in 1727 and designed as a walled city with symmetrical grid layout, Jaipur is one of India's most planned and colorful cities. Home to iconic landmarks like City Palace, Jantar Mantar, and the stunning Hawa Mahal, Jaipur attracts culture enthusiasts and heritage tourists. MTS Travels India provides comfortable long-distance taxi service for this cross-state journey, offering overnight options for passenger comfort. The primarily highway route passes through picturesque landscape and offers glimpses of Rajasthan's royal heritage.`,
    faqs: [
      {
        question: "What are the main attractions in Jaipur?",
        answer: "Must-see attractions are Hawa Mahal (Palace of Winds), City Palace, Jantar Mantar (astronomical observation site), Albert Hall Museum, and Govind Dev Ji Temple."
      },
      {
        question: "How many days should be allocated for Jaipur visit?",
        answer: "2-3 days is ideal covenng main attractions. Day 1 for City Palace and bazaar, Day 2 for nearby forts and gardens, Day 3 for shopping and relaxation."
      },
      {
        question: "Is overnight journey comfortable for Dehradun to Jaipur?",
        answer: "Yes, overnight journey is quite comfortable reducing daytime driving fatigue. Evening departure allows fresh morning arrival in Jaipur for full-day sightseeing."
      },
      {
        question: "What shopping is available in Jaipur?",
        answer: "Jaipur is famous for precious stones, jewelry, textiles, carpets, and handicrafts. Bapu Bazaar, Johari Bazaar, and Chaura Rasta are popular shopping destinations."
      }
    ]
  }
];

export const getRouteBySlug = (slug: string): RouteData | undefined => {
  return routesData.find(route => route.slug === slug);
};
