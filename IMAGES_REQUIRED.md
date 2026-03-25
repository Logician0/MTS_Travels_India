# 📸 MTS Travels India - Required Images List

This document lists ALL images used in the website and where they are referenced in the code.

All images must be in **WebP format** for better performance, except where noted.

---

## 📁 Folder Location
```
public/
└── images/
    ├── (all your .webp images go here)
```

---

## 🔷 BRANDING & SEO IMAGES

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `logo.webp` | Website Logo | 200x60 px | Navbar.tsx, Footer.tsx, App.tsx, BookingSuccessPage.tsx | Main logo displayed in navbar and footer across all pages |
| `logo.png` | Logo Fallback | 200x60 px | VerifyBookingPage.tsx, BookingSuccessPage.tsx | Fallback image if webp fails to load |
| `favicon.webp` | Browser Tab Icon | 32x32 px or 64x64 px | index.html | Small icon shown in browser tab and bookmarks |
| `og-image.webp` | Social Media Preview | 1200x630 px | index.html, SEO.tsx | Image shown when sharing website on Facebook, Twitter, WhatsApp |

---

## 🚗 HERO SECTION

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `heroposter.webp` | Main Hero Car Image | 800x600 px | HeroSection.tsx | Premium car image displayed in homepage hero section |

---

## 🚙 VEHICLE FLEET - CARD THUMBNAILS (5 images)

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `sedan-card.webp` | Sedan Card Thumbnail | 400x300 px | cabsData.ts, CabCategories.tsx | Display card for Sedan vehicles on fleet listing page |
| `muv-card.webp` | MUV Card Thumbnail | 400x300 px | cabsData.ts, CabCategories.tsx | Display card for MUV (Multi-Utility Vehicle) on fleet listing page |
| `suv-card.webp` | SUV Card Thumbnail | 400x300 px | cabsData.ts, CabCategories.tsx | Display card for SUV vehicles on fleet listing page |
| `tempo-traveller-card.webp` | Tempo Traveller Card Thumbnail | 400x300 px | cabsData.ts, CabCategories.tsx | Display card for Tempo Traveller on fleet listing page |
| `bus-card.webp` | Bus Card Thumbnail | 400x300 px | cabsData.ts, CabCategories.tsx | Display card for AC/Non-AC Bus on fleet listing page |

---

## 🚕 SEDAN VEHICLES

### Generic Sedan Gallery (3 images)
| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `sedan1.webp` | Sedan Gallery Image 1 | 800x600 px | cabsData.ts | Primary gallery image for sedan vehicles |
| `sedan2.webp` | Sedan Gallery Image 2 | 800x600 px | cabsData.ts | Secondary gallery image for sedan vehicles |
| `sedan3.webp` | Sedan Gallery Image 3 | 800x600 px | cabsData.ts | Tertiary gallery image for sedan vehicles |

### Sedan Model-Specific Images
| Filename | Model | Recommended Size | Used In | Description |
|----------|-------|------------------|---------|-------------|
| `swift-dzire-1.webp` - `swift-dzire-4.webp` | Maruti Swift Dzire | 800x600 px | CabDetailPage.tsx | 4 images showing Maruti Swift Dzire from different angles |
| `toyota-etios-1.webp` - `toyota-etios-4.webp` | Toyota Etios | 800x600 px | CabDetailPage.tsx | 4 images showing Toyota Etios from different angles |
| `honda-amaze-1.webp` - `honda-amaze-4.webp` | Honda Amaze | 800x600 px | CabDetailPage.tsx | 4 images showing Honda Amaze from different angles |
| `hyundai-aura-1.webp` - `hyundai-aura-4.webp` | Hyundai Aura | 800x600 px | CabDetailPage.tsx | 4 images showing Hyundai Aura from different angles |

---

## 🚐 MUV (Multi-Utility Vehicle)

### Generic MUV Gallery (4 images)
| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `muv1.webp` | MUV Gallery Image 1 | 800x600 px | cabsData.ts | Primary gallery image for MUV vehicles |
| `muv2.webp` | MUV Gallery Image 2 | 800x600 px | cabsData.ts | Secondary gallery image for MUV vehicles |
| `muv3.webp` | MUV Gallery Image 3 | 800x600 px | cabsData.ts | Tertiary gallery image for MUV vehicles |
| `muv4.webp` | MUV Gallery Image 4 | 800x600 px | cabsData.ts | Fourth gallery image for MUV vehicles |

### MUV Model-Specific Images
| Filename | Model | Recommended Size | Used In | Description |
|----------|-------|------------------|---------|-------------|
| `maruti-ertiga-1.webp` - `maruti-ertiga-4.webp` | Maruti Ertiga | 800x600 px | CabDetailPage.tsx | 4 images showing Maruti Ertiga from different angles |
| `toyota-rumion-1.webp` - `toyota-rumion-4.webp` | Toyota Rumion | 800x600 px | CabDetailPage.tsx | 4 images showing Toyota Rumion from different angles |
| `kia-carens-1.webp` - `kia-carens-4.webp` | Kia Carens | 800x600 px | CabDetailPage.tsx | 4 images showing Kia Carens from different angles |

---

## 🚙 SUV (Luxury SUV)

### Generic SUV Gallery (4 images)
| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `suv1.webp` | SUV Gallery Image 1 | 800x600 px | cabsData.ts, WhyChooseUs.tsx | Primary gallery image for SUV vehicles, also used in Why Choose Us section |
| `suv2.webp` | SUV Gallery Image 2 | 800x600 px | cabsData.ts | Secondary gallery image for SUV vehicles |
| `suv3.webp` | SUV Gallery Image 3 | 800x600 px | cabsData.ts | Tertiary gallery image for SUV vehicles |
| `suv4.webp` | SUV Gallery Image 4 | 800x600 px | cabsData.ts | Fourth gallery image for SUV vehicles |

### SUV Model-Specific Images
| Filename | Model | Recommended Size | Used In | Description |
|----------|-------|------------------|---------|-------------|
| `toyota-innova-1.webp` - `toyota-innova-4.webp` | Toyota Innova | 800x600 px | CabDetailPage.tsx | 4 images showing Toyota Innova from different angles |
| `innova-crysta-1.webp` - `innova-crysta-4.webp` | Innova Crysta | 800x600 px | CabDetailPage.tsx | 4 images showing Innova Crysta from different angles |
| `mahindra-scorpio-1.webp` - `mahindra-scorpio-4.webp` | Mahindra Scorpio | 800x600 px | CabDetailPage.tsx | 4 images showing Mahindra Scorpio from different angles |
| `mahindra-tuv-1.webp` - `mahindra-tuv-4.webp` | Mahindra TUV | 800x600 px | CabDetailPage.tsx | 4 images showing Mahindra TUV from different angles |
| `toyota-fortuner-1.webp` - `toyota-fortuner-4.webp` | Toyota Fortuner | 800x600 px | CabDetailPage.tsx | 4 images showing Toyota Fortuner from different angles |

---

## 🚌 TEMPO TRAVELLER & BUS

### Tempo Traveller Gallery (3 images)
| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `tempo-traveller1.webp` | Tempo Traveller Gallery Image 1 | 800x600 px | cabsData.ts | Primary gallery image for Tempo Traveller |
| `tempo-traveller2.webp` | Tempo Traveller Gallery Image 2 | 800x600 px | cabsData.ts | Secondary gallery image for Tempo Traveller |
| `tempo-traveller3.webp` | Tempo Traveller Gallery Image 3 | 800x600 px | cabsData.ts | Tertiary gallery image for Tempo Traveller |

### Bus Gallery (4 images)
| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `bus1.webp` | Bus Gallery Image 1 | 800x600 px | cabsData.ts | Primary gallery image for AC/Non-AC Bus |
| `bus2.webp` | Bus Gallery Image 2 | 800x600 px | cabsData.ts | Secondary gallery image for AC/Non-AC Bus |
| `bus3.webp` | Bus Gallery Image 3 | 800x600 px | cabsData.ts | Tertiary gallery image for AC/Non-AC Bus |
| `bus4.webp` | Bus Gallery Image 4 | 800x600 px | cabsData.ts | Fourth gallery image for AC/Non-AC Bus |

---

## 🛎️ SERVICE IMAGES (6 images)

| Filename | Service | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `service-local.webp` | Local Taxi Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | Local area taxi service display image |
| `service-airport.webp` | Airport Transfer Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | Airport pickup and drop service display image |
| `service-oneway.webp` | One Way Taxi Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | One-way taxi service display image |
| `service-roundtrip.webp` | Round Trip Taxi Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | Round trip taxi service display image |
| `service-wedding.webp` | Wedding Taxi Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | Wedding function transportation service display image |
| `service-adventure.webp` | Adventure Tours Service | 800x500 px | servicesData.ts, ServicesSection.tsx, ServiceDetailPage.tsx | Adventure tour and travel service display image |

---

## 🗺️ ROUTE IMAGES (19 Routes)

| Filename | Route | Recommended Size | Used In | Description |
|----------|-------|------------------|---------|-------------|
| `route-delhi.webp` | Dehradun to Delhi | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Delhi taxi route |
| `route-mussoorie.webp` | Dehradun to Mussoorie | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Mussoorie taxi route |
| `route-rishikesh.webp` | Dehradun to Rishikesh | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Rishikesh taxi route |
| `route-haridwar.webp` | Dehradun to Haridwar | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Haridwar taxi route |
| `route-nainital.webp` | Dehradun to Nainital | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Nainital taxi route |
| `route-shimla.webp` | Dehradun to Shimla | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Shimla taxi route |
| `route-chandigarh.webp` | Dehradun to Chandigarh | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Chandigarh taxi route |
| `route-manali.webp` | Dehradun to Manali | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Manali taxi route |
| `route-jammu.webp` | Dehradun to Jammu | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Jammu taxi route |
| `route-agra.webp` | Dehradun to Agra | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Agra (Taj Mahal) taxi route |
| `route-ghaziabad.webp` | Dehradun to Ghaziabad | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Ghaziabad taxi route |
| `route-faridabad.webp` | Dehradun to Faridabad | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Faridabad taxi route |
| `route-gurugram.webp` | Dehradun to Gurugram | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Gurugram taxi route |
| `route-mathura.webp` | Dehradun to Mathura | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Mathura (Krishna Janmabhoomi) taxi route |
| `route-uttarkashi.webp` | Dehradun to Uttarkashi | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Uttarkashi (Char Dham) taxi route |
| `route-roorkee.webp` | Dehradun to Roorkee | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Roorkee (IIT Roorkee) taxi route |
| `route-saharanpur.webp` | Dehradun to Saharanpur | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Saharanpur taxi route |
| `route-noida.webp` | Dehradun to Noida | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Noida (IT Hub) taxi route |
| `route-jaipur.webp` | Dehradun to Jaipur | 800x500 px | routesData.ts, RoutesPage.tsx, RouteDetailPage.tsx | Display image for Dehradun to Jaipur (Pink City) taxi route |

---

## 📦 TOUR PACKAGE IMAGES (7 Packages)

| Filename | Package | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `package-chardham.webp` | Char Dham Yatra | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Complete spiritual journey to four sacred dhams of Uttarakhand |
| `package-nainital.webp` | Nainital Tour | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Explore the beautiful lake city and nearby attractions |
| `package-shimla.webp` | Shimla Tour | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Visit the Queen of Hills with scenic mountain views |
| `package-manali.webp` | Manali Tour | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Adventure and serenity in the beautiful Kullu-Manali valley |
| `package-mussoorie.webp` | Mussoorie Tour | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Queen of Hills - perfect weekend getaway from Dehradun |
| `package-dalhousie.webp` | Jammu-Dalhousie Tour | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Explore mini Switzerland of India (Khajjiar) and Dalhousie |
| `goa-package.webp` | Goa Beach Delight Special | 800x500 px | packagesData.ts, TourPackages.tsx, PackageDetailPage.tsx | Ultimate tropical getaway with beaches, heritage, and nightlife |

---

## 🎥 TESTIMONIAL IMAGES (3 Videos)

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `testimonial-1.webp` | Customer 1 Thumbnail | 400x600 px (vertical) | Testimonials.tsx | Thumbnail/poster image for testimonial video 1 |
| `testimonial-2.webp` | Customer 2 Thumbnail | 400x600 px (vertical) | Testimonials.tsx | Thumbnail/poster image for testimonial video 2 |
| `testimonial-3.webp` | Customer 3 Thumbnail | 400x600 px (vertical) | Testimonials.tsx | Thumbnail/poster image for testimonial video 3 |

---

## 🏢 ABOUT PAGE IMAGE

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `about-team.webp` | Team/Company Photo | 800x600 px | AboutPage.tsx | Team photograph or company image displayed on About page |

---

## ✅ WHY CHOOSE US SECTION

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `suv1.webp` | Vehicle/Feature Image | 600x500 px | WhyChooseUs.tsx | Premium vehicle image showcasing comfort and features (uses SUV1) |

---

## 🏍️ BIKE RENTAL IMAGES (2 Images)

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `bike-hero.webp` | Bike Hero & Section Image | 800x600 px | BikeRentSection.tsx, BikeRentalPage.tsx | Main hero image and section display for bike rental services |
| `bike-rental-why.webp` | Bike Rental Why Choose Us | 800x600 px | BikeRentalPage.tsx | Why Choose Us section image for bike rental page |

---

## 💳 PAYMENT PAGE (Optional)

| Filename | Purpose | Recommended Size | Used In | Description |
|----------|---------|------------------|---------|-------------|
| `qr-code.webp` | UPI Payment QR Code | 300x300 px | PaymentPage.tsx (if needed) | QR code for UPI payment integration |

---

## 📋 COMPLETE IMAGE CHECKLIST

Copy this checklist and check off images as you add them:

### Branding (4 images)
- [ ] `logo.webp`
- [ ] `logo.png` (fallback)
- [ ] `favicon.webp`
- [ ] `og-image.webp`

### Hero (1 image)
- [ ] `heroposter.webp`

### Vehicle Fleet Cards (5 images)
- [ ] `sedan-card.webp`
- [ ] `muv-card.webp`
- [ ] `suv-card.webp`
- [ ] `tempo-traveller-card.webp`
- [ ] `bus-card.webp`

### Sedan Gallery (3 generic + 16 model-specific)
**Generic:**
- [ ] `sedan1.webp`
- [ ] `sedan2.webp`
- [ ] `sedan3.webp`

**Maruti Swift Dzire (4 images):**
- [ ] `swift-dzire-1.webp`
- [ ] `swift-dzire-2.webp`
- [ ] `swift-dzire-3.webp`
- [ ] `swift-dzire-4.webp`

**Toyota Etios (4 images):**
- [ ] `toyota-etios-1.webp`
- [ ] `toyota-etios-2.webp`
- [ ] `toyota-etios-3.webp`
- [ ] `toyota-etios-4.webp`

**Honda Amaze (4 images):**
- [ ] `honda-amaze-1.webp`
- [ ] `honda-amaze-2.webp`
- [ ] `honda-amaze-3.webp`
- [ ] `honda-amaze-4.webp`

**Hyundai Aura (4 images):**
- [ ] `hyundai-aura-1.webp`
- [ ] `hyundai-aura-2.webp`
- [ ] `hyundai-aura-3.webp`
- [ ] `hyundai-aura-4.webp`

### MUV Gallery (4 generic + 12 model-specific)
**Generic:**
- [ ] `muv1.webp`
- [ ] `muv2.webp`
- [ ] `muv3.webp`
- [ ] `muv4.webp`

**Maruti Ertiga (4 images):**
- [ ] `maruti-ertiga-1.webp`
- [ ] `maruti-ertiga-2.webp`
- [ ] `maruti-ertiga-3.webp`
- [ ] `maruti-ertiga-4.webp`

**Toyota Rumion (4 images):**
- [ ] `toyota-rumion-1.webp`
- [ ] `toyota-rumion-2.webp`
- [ ] `toyota-rumion-3.webp`
- [ ] `toyota-rumion-4.webp`

**Kia Carens (4 images):**
- [ ] `kia-carens-1.webp`
- [ ] `kia-carens-2.webp`
- [ ] `kia-carens-3.webp`
- [ ] `kia-carens-4.webp`

### SUV Gallery (4 generic + 20 model-specific)
**Generic:**
- [ ] `suv1.webp`
- [ ] `suv2.webp`
- [ ] `suv3.webp`
- [ ] `suv4.webp`

**Toyota Innova (4 images):**
- [ ] `toyota-innova-1.webp`
- [ ] `toyota-innova-2.webp`
- [ ] `toyota-innova-3.webp`
- [ ] `toyota-innova-4.webp`

**Innova Crysta (4 images):**
- [ ] `innova-crysta-1.webp`
- [ ] `innova-crysta-2.webp`
- [ ] `innova-crysta-3.webp`
- [ ] `innova-crysta-4.webp`

**Mahindra Scorpio (4 images):**
- [ ] `mahindra-scorpio-1.webp`
- [ ] `mahindra-scorpio-2.webp`
- [ ] `mahindra-scorpio-3.webp`
- [ ] `mahindra-scorpio-4.webp`

**Mahindra TUV (4 images):**
- [ ] `mahindra-tuv-1.webp`
- [ ] `mahindra-tuv-2.webp`
- [ ] `mahindra-tuv-3.webp`
- [ ] `mahindra-tuv-4.webp`

**Toyota Fortuner (4 images):**
- [ ] `toyota-fortuner-1.webp`
- [ ] `toyota-fortuner-2.webp`
- [ ] `toyota-fortuner-3.webp`
- [ ] `toyota-fortuner-4.webp`

### Tempo Traveller (3 images)
- [ ] `tempo-traveller1.webp`
- [ ] `tempo-traveller2.webp`
- [ ] `tempo-traveller3.webp`

### Bus (4 images)
- [ ] `bus1.webp`
- [ ] `bus2.webp`
- [ ] `bus3.webp`
- [ ] `bus4.webp`

### Services (6 images)
- [ ] `service-local.webp`
- [ ] `service-airport.webp`
- [ ] `service-oneway.webp`
- [ ] `service-roundtrip.webp`
- [ ] `service-wedding.webp`
- [ ] `service-adventure.webp`

### Routes (19 images)
- [ ] `route-delhi.webp`
- [ ] `route-mussoorie.webp`
- [ ] `route-rishikesh.webp`
- [ ] `route-haridwar.webp`
- [ ] `route-nainital.webp`
- [ ] `route-shimla.webp`
- [ ] `route-chandigarh.webp`
- [ ] `route-manali.webp`
- [ ] `route-jammu.webp`
- [ ] `route-agra.webp`
- [ ] `route-ghaziabad.webp`
- [ ] `route-faridabad.webp`
- [ ] `route-gurugram.webp`
- [ ] `route-mathura.webp`
- [ ] `route-uttarkashi.webp`
- [ ] `route-roorkee.webp`
- [ ] `route-saharanpur.webp`
- [ ] `route-noida.webp`
- [ ] `route-jaipur.webp`

### Tour Packages (7 images)
- [ ] `package-chardham.webp`
- [ ] `package-nainital.webp`
- [ ] `package-shimla.webp`
- [ ] `package-manali.webp`
- [ ] `package-mussoorie.webp`
- [ ] `package-dalhousie.webp`
- [ ] `goa-package.webp`

### Testimonials (3 images)
- [ ] `testimonial-1.webp`
- [ ] `testimonial-2.webp`
- [ ] `testimonial-3.webp`

### About Page (1 image)
- [ ] `about-team.webp`

### Bike Rental (2 images)
- [ ] `bike-hero.webp`
- [ ] `bike-rental-why.webp`

### Payment (1 image - Optional)
- [ ] `qr-code.webp`

---

## 📊 TOTAL IMAGES REQUIRED: **134 images**

**Breakdown:**
- Branding: 4 images
- Hero Section: 1 image
- Vehicle Fleet Cards: 5 images
- Sedan (Generic + Models): 19 images
- MUV (Generic + Models): 16 images
- SUV (Generic + Models): 24 images
- Tempo Traveller: 3 images
- Bus: 4 images
- Services: 6 images
- Routes: 19 images
- Tour Packages: 7 images
- Testimonials: 3 images
- About Page: 1 image
- Bike Rental: 2 images
- Payment (Optional): 1 image

---

## 💡 IMAGE TIPS

1. **Format**: Use WebP format for all images (best compression + quality ratio)
2. **Logo PNG Fallback**: Keep `logo.png` as fallback for browsers that don't support WebP
3. **Optimization**: Compress images before uploading using TinyPNG.com or Squoosh
4. **Naming**: Keep filenames exactly as listed (case-sensitive and match code references)
5. **Quality**: Use high-quality images (minimum 600px width for content images)
6. **Consistency**: Maintain similar style, lighting, and color grading across vehicle images
7. **Vehicle Photos**: 
   - For each car model, get 4 different angles (front, rear, side, interior)
   - Use professional photography or high-quality stock images
   - Ensure consistent background (white or neutral) for product-like presentation

---

## 🔗 WHERE IMAGES ARE USED (Complete Reference)

### Navigation & Layout (Used on All Pages)
| Image | File Location(s) |
|-------|------------------|
| `logo.webp` | Navbar.tsx, Footer.tsx, App.tsx |
| `logo.png` (fallback) | BookingSuccessPage.tsx, VerifyBookingPage.tsx |
| `favicon.webp` | index.html (browser tab) |
| `og-image.webp` | index.html (SEO), SEO.tsx (default for social sharing) |

### Home Page
| Image | Component | Used For |
|-------|-----------|----------|
| `heroposter.webp` | HeroSection.tsx | Main hero image |
| `sedan-card.webp`, `muv-card.webp`, `suv-card.webp`, `tempo-traveller-card.webp`, `bus-card.webp` | CabCategories.tsx | Vehicle category cards |
| `service-*.webp` (6 images) | ServicesSection.tsx | Service offerings section |
| All `route-*.webp` (19 images) | PopularRoutes.tsx | Featured routes |
| All `package-*.webp` & `goa-package.webp` (7 images) | TourPackages.tsx | Tour packages section |
| `suv1.webp` | WhyChooseUs.tsx | Why Choose Us section |
| `testimonial-1/2/3.webp` | Testimonials.tsx | Video testimonials section |
| `bike-hero.webp` | BikeRentSection.tsx | Bike rental CTA section |

### Cab/Vehicle Pages
| Image | Page | Used For |
|-------|------|----------|
| All sedan images | CabDetailPage.tsx (sedan slug) | Sedan vehicle showcase |
| All muv images | CabDetailPage.tsx (muv slug) | MUV vehicle showcase |
| All suv images | CabDetailPage.tsx (suv slug) | SUV vehicle showcase |
| `tempo-traveller*.webp` | CabDetailPage.tsx (tempo-traveller slug) | Tempo Traveller showcase |
| `bus*.webp` | CabDetailPage.tsx (bus slug) | Bus showcase |
| **Model-Specific Images:** | CabDetailPage.tsx | Individual car model galleries with 4 angles each |
| - `swift-dzire-*.webp` | | Maruti Swift Dzire |
| - `toyota-etios-*.webp` | | Toyota Etios |
| - `honda-amaze-*.webp` | | Honda Amaze |
| - `hyundai-aura-*.webp` | | Hyundai Aura |
| - `maruti-ertiga-*.webp` | | Maruti Ertiga |
| - `toyota-rumion-*.webp` | | Toyota Rumion |
| - `kia-carens-*.webp` | | Kia Carens |
| - `toyota-innova-*.webp` | | Toyota Innova |
| - `innova-crysta-*.webp` | | Innova Crysta |
| - `mahindra-scorpio-*.webp` | | Mahindra Scorpio |
| - `mahindra-tuv-*.webp` | | Mahindra TUV |
| - `toyota-fortuner-*.webp` | | Toyota Fortuner |

### Route Pages
| Image | Page | Used For |
|-------|------|----------|
| All `route-*.webp` (19 images) | RoutesPage.tsx, RouteDetailPage.tsx | Route showcase and detail pages |

### Package Pages
| Image | Page | Used For |
|-------|------|----------|
| All `package-*.webp` (7 images) | PackagesPage.tsx, PackageDetailPage.tsx | Package showcase and detail pages |
| `goa-package.webp` | PackagesPage.tsx, PackageDetailPage.tsx | Goa Beach Delight package |

### Service Pages
| Image | Page | Used For |
|-------|------|----------|
| All `service-*.webp` (6 images) | ServicesPage.tsx, ServiceDetailPage.tsx | Service showcase and detail pages |

### Special Pages
| Image | Page | Used For |
|-------|------|----------|
| `about-team.webp` | AboutPage.tsx | About page team/company image |
| `bike-hero.webp` | BikeRentalPage.tsx | Bike rental page hero section |
| `bike-rental-why.webp` | BikeRentalPage.tsx | Bike rental Why Choose Us section |
| `qr-code.webp` | PaymentPage.tsx (optional) | UPI payment QR code |

---

## 🗺️ ROUTE DETAILS (Complete Reference)

All 19 routes stored in `src/data/routesData.ts`:

| # | Route | Distance | Travel Time | Image Filename |
|---|-------|----------|-------------|----------------|
| 1 | Dehradun → Delhi | 250 km | 5-6 hours | `route-delhi.webp` |
| 2 | Dehradun → Mussoorie | 35 km | 1-1.5 hours | `route-mussoorie.webp` |
| 3 | Dehradun → Rishikesh | 45 km | 1-1.5 hours | `route-rishikesh.webp` |
| 4 | Dehradun → Haridwar | 55 km | 1.5-2 hours | `route-haridwar.webp` |
| 5 | Dehradun → Nainital | 280 km | 6-7 hours | `route-nainital.webp` |
| 6 | Dehradun → Shimla | 220 km | 5-6 hours | `route-shimla.webp` |
| 7 | Dehradun → Chandigarh | 170 km | 4-5 hours | `route-chandigarh.webp` |
| 8 | Dehradun → Manali | 380 km | 9-10 hours | `route-manali.webp` |
| 9 | Dehradun → Jammu | 450 km | 9-10 hours | `route-jammu.webp` |
| 10 | Dehradun → Agra | 350 km | 6-7 hours | `route-agra.webp` |
| 11 | Dehradun → Ghaziabad | 230 km | 5-6 hours | `route-ghaziabad.webp` |
| 12 | Dehradun → Faridabad | 270 km | 5-6 hours | `route-faridabad.webp` |
| 13 | Dehradun → Gurugram | 280 km | 5-6 hours | `route-gurugram.webp` |
| 14 | Dehradun → Mathura | 300 km | 6-7 hours | `route-mathura.webp` |
| 15 | Dehradun → Uttarkashi | 150 km | 4-5 hours | `route-uttarkashi.webp` |
| 16 | Dehradun → Roorkee | 70 km | 1.5-2 hours | `route-roorkee.webp` |
| 17 | Dehradun → Saharanpur | 90 km | 2-2.5 hours | `route-saharanpur.webp` |
| 18 | Dehradun → Noida | 240 km | 5-6 hours | `route-noida.webp` |
| 19 | Dehradun → Jaipur | 480 km | 8-9 hours | `route-jaipur.webp` |

---

## 🚗 VEHICLE MODELS REFERENCE

All vehicle models with image gallery stored in `src/pages/CabDetailPage.tsx`:

### Sedan Models (4 models × 4 images each = 16 images)
1. **Maruti Swift Dzire** - `swift-dzire-1.webp` to `swift-dzire-4.webp`
2. **Toyota Etios** - `toyota-etios-1.webp` to `toyota-etios-4.webp`
3. **Honda Amaze** - `honda-amaze-1.webp` to `honda-amaze-4.webp`
4. **Hyundai Aura** - `hyundai-aura-1.webp` to `hyundai-aura-4.webp`

### MUV Models (3 models × 4 images each = 12 images)
1. **Maruti Ertiga** - `maruti-ertiga-1.webp` to `maruti-ertiga-4.webp`
2. **Toyota Rumion** - `toyota-rumion-1.webp` to `toyota-rumion-4.webp`
3. **Kia Carens** - `kia-carens-1.webp` to `kia-carens-4.webp`

### SUV Models (5 models × 4 images each = 20 images)
1. **Toyota Innova** - `toyota-innova-1.webp` to `toyota-innova-4.webp`
2. **Innova Crysta** - `innova-crysta-1.webp` to `innova-crysta-4.webp`
3. **Mahindra Scorpio** - `mahindra-scorpio-1.webp` to `mahindra-scorpio-4.webp`
4. **Mahindra TUV** - `mahindra-tuv-1.webp` to `mahindra-tuv-4.webp`
5. **Toyota Fortuner** - `toyota-fortuner-1.webp` to `toyota-fortuner-4.webp`

---

## 📦 TOUR PACKAGES (7 packages)

All tour packages stored in `src/data/packagesData.ts`:

| Package | Duration | Destinations | Image |
|---------|----------|--------------|-------|
| Char Dham Yatra | 10-12 Days | Yamunotri, Gangotri, Kedarnath, Badrinath | `package-chardham.webp` |
| Nainital Tour | 3-4 Days | Nainital, Bhimtal, Sattal, Mukteshwar | `package-nainital.webp` |
| Shimla Tour | 3-4 Days | Shimla, Kufri, Chail, Naldehra | `package-shimla.webp` |
| Manali Tour | 5-6 Days | Manali, Solang Valley, Rohtang Pass, Kullu | `package-manali.webp` |
| Mussoorie Tour | 1-2 Days | Mussoorie, Kempty Falls, Dhanaulti | `package-mussoorie.webp` |
| Jammu-Dalhousie Tour | 5-6 Days | Jammu, Dalhousie, Khajjiar, Dharamshala | `package-dalhousie.webp` |
| Goa Beach Delight Special | 4 Nights / 5 Days | Panjim, North Goa, South Goa, Dabolim | `goa-package.webp` |

---

## 🛎️ SERVICES (6 Services)

All services stored in `src/data/servicesData.ts`:

| Service | Image |
|---------|-------|
| Local Taxi Service | `service-local.webp` |
| Airport Transfer Service | `service-airport.webp` |
| One Way Taxi Service | `service-oneway.webp` |
| Round Trip Taxi Service | `service-roundtrip.webp` |
| Wedding Taxi Service | `service-wedding.webp` |
| Adventure Tours Service | `service-adventure.webp` |

---

## 📝 NOTES

- All images are referenced from `/images/filename.webp` path in the code
- Make sure images are placed inside `public/images/` folder
- Image filenames are case-sensitive - use exact filenames as listed
- After adding images, refresh the browser (Ctrl+Shift+R on Windows) to clear cache and see changes
- PNG fallback for logo is used when WebP is not supported
- For WebP conversion, use online tools: https://squoosh.app or https://tinypng.com
