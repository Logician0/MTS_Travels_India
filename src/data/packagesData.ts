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
  // SEO Fields
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  longDescription?: string;
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
    image: "/images/packages/package-chardham.webp",
    seoTitle: "Char Dham Yatra Package from Dehradun | 10-12 Days Pilgrimage | MTS Travels",
    seoDescription: "Book Char Dham Yatra package (10-12 days) visiting Yamunotri, Gangotri, Kedarnath, Badrinath. Comfortable transportation, experienced drivers, VIP darshan options.",
    keywords: ["char dham yatra package", "char dham tour from dehradun", "kedarnath badrinath tour", "uttarakhand pilgrimage tour", "yamunotri gangotri tour"],
    longDescription: `The Char Dham Yatra is Hinduism's most sacred pilgrimage journey, visiting the four holiest temples - Yamunotri, Gangotri, Kedarnath, and Badrinath - nestled in the Uttarakhand Himalayas. This 10-12 day package offers a transformative spiritual experience while ensuring maximum comfort and convenience. Yamunotri, the source of the Yamuna River, is devoted to Goddess Yamuna. Gangotri Temple, the source of the Ganges River, honors Goddess Ganga. Kedarnath, one of the 12 Jyotirlingas of Lord Shiva, holds immense spiritual significance. Badrinath Temple, dedicated to Lord Vishnu, completes the sacred circuit. MTS Travels provides comprehensive pilgrimage transportation with experienced drivers trained in mountain driving and familiar with all temple procedures. We arrange all logistics including comfortable stays, flexible schedules for religious observances, and support for elderly pilgrims. Helicopter options are available for those unable to trek. Our 24/7 support ensures peace of mind throughout your spiritual journey. Whether you're seeking redemption, spiritual growth, or fulfilling a family tradition, our Char Dham package provides a memorable and blessed pilgrimage experience.`,
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
    image: "/images/packages/package-nainital.webp",
    seoTitle: "Nainital Tour Package from Dehradun | 3-4 Days Lake City Holiday | MTS Travels",
    seoDescription: "Book Nainital package (3-4 days) with lake boating, cable car, mall road shopping. Family vacation in beautiful lake district of Uttarakhand.",
    keywords: ["nainital tour package", "lake city tour", "nainital family holiday", "naini lake boating", "nainital honeymoon package"],
    longDescription: `Nainital, characterized by its stunning Naini Lake surrounded by snow-capped peaks, is one of India's most picturesque hill stations. This 3-4 day package offers the perfect escape for families, couples, and solo travelers seeking natural beauty and adventure combined. The Naini Lake, sacred to Hindus as the site where Sati's eyes fell, offers scenic boat rides providing panoramic views of the Himalayas. The iconic cable car ride up Naina Peak rewards visitors with breathtaking vistas. Mall Road, the heart of Nainital, bustles with shops, cafes, and restaurants. Nearby attractions include Sattal (cluster of seven interconnected lakes), Bhimtal with its unique underwater Bhimeshwar Temple, and Mukteshwar offering panoramic Himalayan views. The tour accommodates all age groups and preferences - adventure seekers can engage in trekking and water sports, while those seeking peace can enjoy nature walks and lake-side relaxation. Our AC vehicles navigate the scenic mountain roads comfortably, and our flexible itinerary allows customization based on your interests.`,
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
    image: "/images/packages/package-shimla.webp",
    seoTitle: "Shimla Tour Package from Dehradun | Queen of Hills Holiday | MTS Travels",
    seoDescription: "Book Shimla tour (3-4 days) with Mall Road, Kufri adventure, toy train ride. Colonial charm and mountain fun in Himachal Pradesh.",
    keywords: ["shimla tour package", "queen of hills tour", "shimla holiday", "kufri adventure tour", "toy train shimla"],
    longDescription: `Shimla, the Queen of the Himalayas and erstwhile summer capital of British India, combines colonial architecture with modern hospitality. This 3-4 day package captures the essence of this charming hill station with its pleasant weather, breathtaking mountain vistas, and rich cultural heritage. The famous Mall Road retains Victorian architecture while offering modern shopping and dining. The Christ Church, built in 1857, stands as a remarkable example of neo-Gothic architecture. The Shimla Toy Train, a UNESCO World Heritage site, offers a nostalgic journey through picturesque landscapes. Kufri, just 16km from Shimla, provides adventure activities including horse riding, skiing (in winter), and nature walks. Chail offers adventure sports opportunities. Our experienced drivers navigate Shimla's winding roads safely while providing insights into local culture and history. The tour suits families, adventure seekers, and those seeking respite from city chaos. We recommend visiting during October-November for pleasant weather and clear mountain views.`,
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
    image: "/images/packages/package-manali.webp",
    seoTitle: "Manali Tour Package from Dehradun | 5-6 Days Adventure Holiday | MTS Travels",
    seoDescription: "Book Manali tour (5-6 days) with Rohtang Pass, adventure sports, hot springs. Paragliding, rafting, Solang Valley in Himachal Pradesh.",
    keywords: ["manali tour package", "adventure tour manali", "rohtang pass tour", "solang valley paragliding", "manali holiday package"],
    longDescription: `Manali, the adventure capital of Himachal Pradesh, sits at an elevation of 2,050 meters in the picturesque Kullu Valley. This 5-6 day package combines adventure thrills with serene natural beauty, offering experiences for every travel type. Solang Valley presents world-class paragliding opportunities, zip-lining, and white-water rafting on the Beas River. Rohtang Pass, at 3,979 meters, offers snow play in winter and panoramic mountain views year-round. The charming Old Manali retains its bohemian charm with local cafes and artisan shops. Vashisht Hot Springs provide therapeutic mineral-rich waters. Hadimba Devi Temple, a 16th-century pagoda-style wooden temple, stands serene amid towering deodars. The tour accommodates adventure seekers, nature lovers, and spirituality-inclined travelers. The journey to Manali itself is an experience with continuous scenery changes from plains to mid-altitude forests to high peaks. Our experienced drivers handle mountain roads expertly, and our flexible scheduling allows optimal exploration of this adventure paradise. Best time to visit is June-September for clear weather and accessible high-altitude sites.`,
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
    image: "/images/packages/package-mussoorie.webp",
    seoTitle: "Mussoorie Weekend Tour from Dehradun | 1-2 Days Hill Station Holiday | MTS Travels",
    seoDescription: "Book Mussoorie weekend tour (1-2 days). Kempty Falls, Gun Hill, Mall Road shopping. Perfect quick getaway from Dehradun.",
    keywords: ["mussoorie weekend tour", "mussoorie getaway", "kempty falls tour", "gun hill mussoorie", "mussoorie short trip"],
    longDescription: `Mussoorie, located just 35 kilometers from Dehradun, is the perfect weekend getaway offering the classic hill station experience without requiring extensive time commitment. This 1-2 day package is ideal for those seeking quick mountain escape for refreshment and rejuvenation. Kempty Falls, the only natural waterfall in the region, presents picturesque cascades surrounded by lush greenery. Gun Hill provides panoramic views of the surrounding landscape and nearby towns. Lal Tibba, Mussoorie's highest point, offers stunning vistas during clear weather. The charming Mall Road retains its colonial heritage with local shops and cafes serving traditional dishes alongside modern offerings. The nearby Dhanaulti eco-park offers adventure activities including zip-lining through forests. Mussoorie suits everyone - couples seeking romantic moments, families wanting safe adventure, and solo travelers finding solitude in nature. The short distance makes it accessible for even day trips, though overnight stays enhance the experience allowing for sunrise views and relaxed exploration.`,
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
    image: "/images/packages/package-dalhousie.webp",
    seoTitle: "Jammu Dalhousie Khajjiar Tour Package | 5-6 Days | MTS Travels India",
    seoDescription: "Book Jammu Dalhousie tour (5-6 days) with Khajjiar (Mini Switzerland), Vaishno Devi, Dharamshala. Unexplored Himachal beauty.",
    keywords: ["dalhousie tour package", "khajjiar tour", "jammu dalhousie package", "mini switzerland tour", "dharamshala tour package"],
    longDescription: `This 5-6 day package explores the lesser-known treasures of Jammu & Kashmir and Himachal Pradesh, combining spiritual significance with breathtaking natural beauty. Jammu serves as the starting point, a city of pilgrimage and history. Dalhousie, a quaint hill station developed during British rule, retains colonial charm with honeycomb-like structures built into hillsides. Khajjiar, famously called the Mini Switzerland of India due to its lush meadows, scenic lake, and surrounding pine forests, offers serene natural beauty and adventure activities. Dharamshala, home to the Dalai Lama and Tibetan culture, combines spiritual vibes with pleasant climate. The tour optionally includes Vaishno Devi pilgrimage for those interested. Our experienced drivers navigate the mountain roads safely, providing cultural commentary and local insights. The journey showcases off-the-beaten-path beauty, perfect for travelers seeking authentic experiences away from mainstream tourist circuits. This package suits nature lovers, spiritual seekers, and photographers capturing landscape beauty.`,
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
    image: "/images/packages/goa-package.webp",
    seoTitle: "Goa Beach Holiday Package from Dehradun | 4N/5D | MTS Travels India",
    seoDescription: "Book Goa holiday package (4N/5D) with beach tours, heritage sightseeing, watersports, Mandovi cruise. Tropical vacation from Dehradun.",
    keywords: ["goa tour package", "goa beach holiday", "goa vacation from dehradun", "goa watersports tour", "goa heritage tour"],
    longDescription: `This 4 nights / 5 days Goa package offers the ultimate tropical escape combining coastal beauty with cultural heritage and exciting activities. Goa, India's smallest state, boasts unique Portuguese-influenced architecture, spice plantations, pristine beaches, and vibrant nightlife. North Goa presents famous beaches like Calangute, Baga, and Anjuna with water sports, beach shacks, and buzzing nightlife appealing to adventure seekers. South Goa maintains tranquility with untouched beaches and sacred heritage sites including the UNESCO-listed Basilica of Bom Jesus and Se Cathedral in Old Goa. The Mandovi River cruise offers sunset vistas and dolphin spotting opportunities. Watersports include parasailing, jet skiing, and banana boat rides. Spice plantation visits showcase tropical agriculture and offer authentic cuisine. The package suits all categories - adventure enthusiasts, peace seekers, culture explorers, and romance-focused couples. Air transportation to Goa combined with AC ground transportation ensures comfortable travel. Our drivers provide local knowledge about hidden gems beyond tourist circuits, helping create authentic Goa experience beyond typical beach resorts.`,
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