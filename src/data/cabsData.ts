export interface Cab {
  id: string;
  slug: string;
  name: string;
  type: string;
  image: string;
  images: string[];
  seating: string;
  luggage: string;
  ac: boolean;
  features: string[];
  description: string;
  bestFor: string[];
}

export const cabsData: Cab[] = [
  {
    id: '1',
    slug: 'sedan',
    name: 'Sedan',
    type: 'Premium Sedan',
    image: '/images/sedan-card.webp',
    images: [
      '/images/sedan1.webp',
      '/images/sedan2.webp',
      '/images/sedan3.webp'
    ],
    seating: '4 Passengers',
    luggage: '2 Large Bags',
    ac: true,
    features: [
      'Air Conditioning',
      'Leather Seats',
      'Music System',
      'Phone Charger',
      'First Aid Kit',
      'GPS Navigation'
    ],
    description: 'Our premium sedan fleet includes well-maintained vehicles like Swift Dzire, Honda Amaze, and Toyota Etios. Perfect for business travel, airport transfers, and comfortable city rides with professional drivers.',
    bestFor: ['Business Travel', 'Airport Transfer', 'City Rides', 'Small Families']
  },
  {
    id: '2',
    slug: 'suv',
    name: 'SUV',
    type: 'Luxury SUV',
    image: '/images/suv-card.webp',
    images: [
      '/images/suv1.webp',
      '/images/suv2.webp',
      '/images/suv3.webp',
      '/images/suv4.webp'
    ],
    seating: '6-7 Passengers',
    luggage: '4 Large Bags',
    ac: true,
    features: [
      'Air Conditioning',
      'Premium Interiors',
      'Music System',
      'Phone Charger',
      'First Aid Kit',
      'GPS Navigation',
      'Extra Legroom',
      'Roof Carrier Available'
    ],
    description: 'Our SUV fleet includes Innova, Innova Crysta, Ertiga, and similar premium vehicles. Ideal for family trips, group travel, and hill station journeys with ample space and comfort.',
    bestFor: ['Family Trips', 'Group Travel', 'Hill Stations', 'Outstation Tours']
  },
  {
    id: '3',
    slug: 'tempo-traveller',
    name: 'Tempo Traveller',
    type: 'Group Transport',
    image: '/images/tempo-traveller-card.webp',
    images: [
      '/images/tempo-traveller1.webp',
      '/images/tempo-traveller2.webp',
      '/images/tempo-traveller3.webp'
    ],
    seating: '9-15 Passengers',
    luggage: '10+ Bags',
    ac: true,
    features: [
      'Air Conditioning',
      'Push Back Seats',
      'Music System',
      'LED TV',
      'Mic System',
      'First Aid Kit',
      'Large Windows',
      'Ample Luggage Space'
    ],
    description: 'Our Tempo Travellers are perfect for group tours, pilgrimages, and corporate outings. Available in 9, 12, and 15 seater configurations with push-back seats and entertainment systems.',
    bestFor: ['Group Tours', 'Pilgrimages', 'Corporate Events', 'Wedding Functions']
  },
  {
    id: '4',
    slug: 'bus',
    name: 'AC / Non-AC Bus',
    type: 'Large Group Transport',
    image: '/images/bus-card.webp',
    images: [
      '/images/bus1.webp',
      '/images/bus2.webp',
      '/images/bus3.webp',
      '/images/bus4.webp'
    ],
    seating: '20-45 Passengers',
    luggage: '20+ Bags',
    ac: true,
    features: [
      'AC / Non-AC Options',
      'Reclining Seats',
      'Music System',
      'LED TV',
      'Mic System',
      'First Aid Kit',
      'Large Luggage Compartment',
      'Professional Driver'
    ],
    description: 'Our bus fleet includes mini buses (20-25 seater) and full-size buses (35-45 seater) in both AC and Non-AC variants. Perfect for large groups, school trips, corporate events, and wedding functions.',
    bestFor: ['Large Groups', 'School Trips', 'Corporate Tours', 'Wedding Transport']
  }
];

export const getCabBySlug = (slug: string): Cab | undefined => {
  return cabsData.find(cab => cab.slug === slug);
};
