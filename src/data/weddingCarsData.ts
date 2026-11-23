export interface WeddingCar {
  id: number;
  name: string;
  images: string[];
  category?: string;
}

export const weddingCars: WeddingCar[] = [
  {
    id: 1,
    name: "Audi A3 Cabriolet",
    images: ["/images/wedding/audi-a3-cabriole-1.webp", "/images/wedding/audi-a3-cabriolet-2.webp", "/images/wedding/audi-a3-cabriolet-3.webp"],
    category: "Audi"
  },
  {
    id: 2,
    name: "Audi A4",
    images: ["/images/wedding/audi-a4.webp"],
    category: "Audi"
  },
  {
    id: 3,
    name: "Audi A6",
    images: ["/images/wedding/audi-a6-1.webp", "/images/wedding/audi-a6-2.webp", "/images/wedding/audi-a6-3.webp"],
    category: "Audi"
  },
  {
    id: 4,
    name: "Audi Q5 45 TFSI",
    images: ["/images/wedding/audi-q5-1.webp", "/images/wedding/audi-q5-2.webp", "/images/wedding/audi-q5-3.webp"],
    category: "Audi"
  },
  {
    id: 5,
    name: "Audi Q7",
    images: ["/images/wedding/audi-q7-1.webp", "/images/wedding/audi-q7-2.webp", "/images/wedding/audi-q7-3.webp"],
    category: "Audi"
  },
  {
    id: 6,
    name: "Jaguar XF",
    images: ["/images/wedding/jaguar-xf-1.webp", "/images/wedding/jaguar-xf-2.webp"],
    category: "Jaguar"
  },
  {
    id: 7,
    name: "Jaguar XJL",
    images: ["/images/wedding/jaguar-xjl-1.webp"],
    category: "Jaguar"
  },
  {
    id: 8,
    name: "Jaguar XJ50",
    images: ["/images/wedding/jaguar-xj50-1.webp", "/images/wedding/jaguar-xj50-2.webp"],
    category: "Jaguar"
  },
  {
    id: 9,
    name: "Range Rover Evoque",
    images: ["/images/wedding/range-rover-evoque-1.webp"],
    category: "Range Rover"
  },
  {
    id: 10,
    name: "Range Rover Sports",
    images: ["/images/wedding/range-rover-sports-1.webp"],
    category: "Range Rover"
  },
  {
    id: 11,
    name: "Mercedes C - Class",
    images: ["/images/wedding/mercedes-c-class-1.webp", "/images/wedding/mercedes-c-class-2.webp"],
    category: "Mercedes"
  },
  {
    id: 12,
    name: "Mercedes E - Class",
    images: ["/images/wedding/mercedes-e-class-1.webp"],
    category: "Mercedes"
  },
  {
    id: 13,
    name: "Mercedes S - Class",
    images: ["/images/wedding/mercedes-s-class-1.webp"],
    category: "Mercedes"
  },
  {
    id: 14,
    name: "Mercedes-GLS 400D",
    images: ["/images/wedding/mercedes-gls-slide1.webp", "/images/wedding/mercedes-gls-slide-2.webp"],
    category: "Mercedes"
  },
  {
    id: 15,
    name: "Bentley",
    images: ["/images/wedding/bentley-1.webp"],
    category: "Luxury"
  },
  {
    id: 16,
    name: "Fortuner",
    images: ["/images/vehicles/fortuner-1.webp", "/images/vehicles/fortuner-2.webp"],
    category: "SUV"
  }
];
