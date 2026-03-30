# MTS Travels India - Premium Taxi Service Website

A modern, premium taxi service website for **MTS Travels India** - a government-approved taxi service based in Dehradun, Uttarakhand, India.

---

## 🌐 Website Overview

| Property | Details |
|----------|---------|
| **Website Type** | Taxi & Travel Service Booking Platform |
| **Company Name** | MTS Travels India |
| **Location** | Dehradun, Uttarakhand, India |
| **Primary Services** | Local Taxi, Airport Transfer, Outstation Travel, Tour Packages |
| **Theme** | Light Theme (White, Black, Yellow #ffc800) |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend UI Library |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Build Tool & Dev Server |
| **React Router v6** | Client-side Routing & SEO URLs |
| **React Helmet Async** | SEO Meta Tags Management |
| **Tailwind CSS** | Utility-first CSS Styling |
| **Lucide React** | Modern Icon Library |

---

## 🎨 Design System

### Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Yellow | `#ffc800` | Buttons, Highlights, Accents |
| Black | `#000000` | Text, Backgrounds, Buttons |
| White | `#FFFFFF` | Backgrounds, Cards |
| Light Gray | `#F8FAFC` | Section Backgrounds |
| Dark Gray | `#111827` | Primary Text |
| Medium Gray | `#6B7280` | Secondary Text |

### Typography
| Element | Size |
|---------|------|
| Hero Heading | 56-64px |
| Section Heading | 34-40px |
| Card Title | 20-22px |
| Body Text | 16px |
| Small Text | 14px |

---

## 📁 Project Structure

```
MTS Travel/
├── MTS Program Files/
│   ├── public/
│   │   ├── images/                # All website images
│   │   ├── robots.txt             # SEO robots file
│   │   └── sitemap.xml            # XML sitemap
│   │
│   ├── src/
│   │   ├── components/            # Reusable UI Components
│   │   │   ├── Navbar.tsx         # Navigation bar
│   │   │   ├── Footer.tsx         # Footer section
│   │   │   ├── HeroSection.tsx    # Homepage hero section
│   │   │   ├── TrustStrip.tsx     # Trust indicators strip
│   │   │   ├── ServicesSection.tsx # Services grid
│   │   │   ├── CabCategories.tsx  # Vehicle categories
│   │   │   ├── PopularRoutes.tsx  # Popular taxi routes
│   │   │   ├── TourPackages.tsx   # Tour packages grid
│   │   │   ├── WhyChooseUs.tsx    # Features section
│   │   │   ├── Testimonials.tsx   # Video testimonials
│   │   │   ├── CTASection.tsx     # Call to action section
│   │   │   ├── BikeRentSection.tsx # Bike rental section
│   │   │   ├── WeddingCarRental.tsx # Wedding car rental
│   │   │   ├── WhatsAppWidget.tsx # WhatsApp chat widget
│   │   │   └── SEO.tsx            # Meta tags component
│   │   │
│   │   ├── data/                  # Data files (Edit these to update content)
│   │   │   ├── routesData.ts      # All taxi routes data
│   │   │   ├── servicesData.ts    # All services data
│   │   │   ├── cabsData.ts        # All vehicle/cab data
│   │   │   ├── packagesData.ts    # All tour packages data
│   │   │   └── weddingCarsData.ts # Wedding car rentals data
│   │   │
│   │   ├── pages/                 # Page Components
│   │   │   ├── HomePage.tsx       # Main landing page
│   │   │   ├── AboutPage.tsx      # About us page
│   │   │   ├── ContactPage.tsx    # Contact & booking form
│   │   │   ├── ServicesPage.tsx   # All services listing
│   │   │   ├── ServiceDetailPage.tsx # Individual service detail
│   │   │   ├── CabsPage.tsx       # All vehicles/fleet listing
│   │   │   ├── CabDetailPage.tsx  # Individual vehicle detail
│   │   │   ├── RoutesPage.tsx     # All routes listing
│   │   │   ├── RouteDetailPage.tsx # Individual route detail
│   │   │   ├── PackagesPage.tsx   # All packages listing
│   │   │   ├── PackageDetailPage.tsx # Individual package detail
│   │   │   ├── BikeRentalPage.tsx # Bike rental page
│   │   │   ├── PaymentPage.tsx    # Payment/UPI page
│   │   │   ├── BookingSuccessPage.tsx # Booking confirmation
│   │   │   ├── VerifyBookingPage.tsx # Verify booking status
│   │   │   ├── AdminDashboard.tsx # Admin dashboard
│   │   │   ├── TestPaymentPage.tsx # Payment testing page
│   │   │   ├── PrivacyPolicyPage.tsx # Privacy policy
│   │   │   ├── TermsOfServicePage.tsx # Terms of service
│   │   │   └── NotFoundPage.tsx   # 404 error page
│   │   │
│   │   ├── utils/                 # Utility functions
│   │   │   └── cn.ts              # Class name utilities
│   │   │
│   │   ├── App.tsx                # Main app with routing
│   │   ├── main.tsx               # React entry point
│   │   └── index.css              # Global styles & Tailwind
│   │
│   ├── IMAGES_REQUIRED.md         # Required images documentation
│   ├── index.html                 # HTML template
│   ├── package.json               # Frontend dependencies
│   ├── tsconfig.json              # TypeScript configuration
│   ├── vite.config.ts             # Vite build configuration
│   ├── vercel.json                # Vercel deployment config
│   └── README.md                  # This file
│
└── mts-backend/
    ├── package.json               # Backend dependencies
    └── server.js                  # Backend server file
```

---

## 📄 Pages & Routes

| Page | Route | File |
|------|-------|------|
| Home | `/` | `src/pages/HomePage.tsx` |
| About | `/about` | `src/pages/AboutPage.tsx` |
| Contact | `/contact` | `src/pages/ContactPage.tsx` |
| All Services | `/services` | `src/pages/ServicesPage.tsx` |
| Service Detail | `/services/:slug` | `src/pages/ServiceDetailPage.tsx` |
| All Cabs/Fleet | `/cabs` | `src/pages/CabsPage.tsx` |
| Cab Detail | `/cabs/:slug` | `src/pages/CabDetailPage.tsx` |
| All Routes | `/routes` | `src/pages/RoutesPage.tsx` |
| Route Detail | `/routes/:slug` | `src/pages/RouteDetailPage.tsx` |
| All Packages | `/packages` | `src/pages/PackagesPage.tsx` |
| Package Detail | `/packages/:slug` | `src/pages/PackageDetailPage.tsx` |
| Bike Rental | `/bike-rental` | `src/pages/BikeRentalPage.tsx` |
| Payment | `/payment` | `src/pages/PaymentPage.tsx` |
| Booking Success | `/booking-success` | `src/pages/BookingSuccessPage.tsx` |
| Verify Booking | `/verify-booking` | `src/pages/VerifyBookingPage.tsx` |
| Admin Dashboard | `/admin` | `src/pages/AdminDashboard.tsx` |
| Test Payment | `/test-payment` | `src/pages/TestPaymentPage.tsx` |
| Privacy Policy | `/privacy-policy` | `src/pages/PrivacyPolicyPage.tsx` |
| Terms of Service | `/terms-of-service` | `src/pages/TermsOfServicePage.tsx` |
| Not Found | `*` | `src/pages/NotFoundPage.tsx` |

### SEO-Friendly Routes
| SEO Route | Redirects To |
|-----------|--------------|
| `/taxi-service-in-dehradun` | `/services/local-taxi` |
| `/dehradun-to-delhi-taxi` | `/routes/dehradun-to-delhi` |
| `/dehradun-to-mussoorie-taxi` | `/routes/dehradun-to-mussoorie` |
| `/dehradun-to-rishikesh-taxi` | `/routes/dehradun-to-rishikesh` |
| `/dehradun-to-haridwar-taxi` | `/routes/dehradun-to-haridwar` |

---

## ✏️ How to Update Content

### 1. Update Contact Information

**Phone Number & Email** - Update in these files:

| File | Location | What to Update |
|------|----------|----------------|
| `src/components/Navbar.tsx` | Lines with phone number | Phone number in header |
| `src/components/Footer.tsx` | Contact section | Phone, email, address |
| `src/components/HeroSection.tsx` | Call Now button | Phone number |
| `src/components/CTASection.tsx` | Contact Us button | Phone number |
| `src/pages/ContactPage.tsx` | Contact info cards | Phone, email, WhatsApp |
| `src/pages/PaymentPage.tsx` | WhatsApp & contact section | Phone, email |
| `src/pages/PrivacyPolicyPage.tsx` | Contact section | Email |
| `src/pages/TermsOfServicePage.tsx` | Contact section | Email |
| All detail pages | Call Now buttons | Phone number |

**Current Contact Info:**
- Phone/WhatsApp: `+91 72176 67160`
- Email: `info@mtstravelsindia.com`

---

### 2. Update Taxi Routes

**File:** `src/data/routesData.ts`

Each route has:
```typescript
{
  slug: "dehradun-to-delhi",        // URL slug
  title: "Dehradun to Delhi",       // Display title
  from: "Dehradun",                 // Starting city
  to: "Delhi",                      // Destination city
  distance: "250 km",               // Distance
  duration: "5-6 hours",            // Travel time
  image: "image_url",               // Route image
  description: "...",               // Short description
  fullDescription: "...",           // Detailed description
  highlights: ["...", "..."],       // Route highlights
  popularStops: ["...", "..."]      // Stops on the way
}
```

**To add a new route:**
1. Open `src/data/routesData.ts`
2. Add a new object to the `routesData` array
3. The route will automatically appear on:
   - Popular Routes section (homepage)
   - Routes page (`/routes`)
   - Route detail page (`/routes/your-slug`)

---

### 3. Update Services

**File:** `src/data/servicesData.ts`

Each service has:
```typescript
{
  slug: "local-taxi",               // URL slug
  title: "Local Taxi Service",      // Display title
  shortDescription: "...",          // Card description
  fullDescription: "...",           // Page description
  image: "image_url",               // Service image
  icon: "Car",                      // Lucide icon name
  features: ["...", "..."],         // Service features
  benefits: [                       // Benefits with icons
    { icon: "Clock", title: "...", description: "..." }
  ]
}
```

**To add a new service:**
1. Open `src/data/servicesData.ts`
2. Add a new object to the `servicesData` array
3. The service will automatically appear on:
   - Services section (homepage)
   - Services page (`/services`)
   - Service detail page (`/services/your-slug`)

---

### 4. Update Vehicle/Cab Fleet

**File:** `src/data/cabsData.ts`

Each vehicle has:
```typescript
{
  slug: "sedan",                    // URL slug
  name: "Sedan",                    // Vehicle name
  tagline: "...",                   // Short tagline
  description: "...",               // Full description
  image: "image_url",               // Vehicle image
  capacity: "4 Passengers",         // Seating capacity
  luggage: "2 Large Bags",          // Luggage capacity
  ac: true,                         // AC available
  type: "Sedan",                    // Vehicle type
  features: ["...", "..."],         // Features list
  bestFor: ["...", "..."],          // Best use cases
  models: ["...", "..."]            // Available models
}
```

**To add a new vehicle:**
1. Open `src/data/cabsData.ts`
2. Add a new object to the `cabsData` array
3. The vehicle will automatically appear on:
   - Cab Categories section (homepage)
   - Cabs/Fleet page (`/cabs`)
   - Cab detail page (`/cabs/your-slug`)

---

### 5. Update Tour Packages

**File:** `src/data/packagesData.ts`

Each package has:
```typescript
{
  slug: "char-dham-yatra",          // URL slug
  title: "Char Dham Yatra",         // Package name
  duration: "10-12 Days",           // Duration
  places: 4,                        // Number of places
  shortDescription: "...",          // Card description
  fullDescription: "...",           // Page description
  image: "image_url",               // Package image
  highlights: ["...", "..."],       // Package highlights
  itinerary: [                      // Day-wise itinerary
    { day: 1, title: "...", description: "..." }
  ],
  inclusions: ["...", "..."],       // What's included
  exclusions: ["...", "..."]        // What's not included
}
```

**To add a new package:**
1. Open `src/data/packagesData.ts`
2. Add a new object to the `packagesData` array
3. The package will automatically appear on:
   - Tour Packages section (homepage)
   - Packages page (`/packages`)
   - Package detail page (`/packages/your-slug`)

---

### 6. Update Images

**📁 Image Folder:** `public/images/`

All website images should be placed in the `public/images/` folder as `.webp` files.

**Available Image Files:**

| Image File | Usage |
|------------|-------|
| `heroposter.webp` | Hero section main car image |
| `sedan-card.webp` | Sedan card thumbnail |
| `sedan1.webp`, `sedan2.webp`, `sedan3.webp` | Sedan detail page gallery |
| `suv-card.webp` | SUV card thumbnail |
| `suv1.webp`, `suv2.webp`, `suv3.webp`, `suv4.webp` | SUV detail page gallery |
| `tempo-traveller-card.webp` | Tempo Traveller card thumbnail |
| `tempo-traveller1.webp`, `tempo-traveller2.webp`, `tempo-traveller3.webp` | Tempo Traveller gallery |
| `bus-card.webp` | Bus card thumbnail |
| `bus1.webp`, `bus2.webp`, `bus3.webp`, `bus4.webp` | Bus detail page gallery |

**How Images Are Used:**

| Image Type | File Location | Image Path |
|------------|---------------|------------|
| Hero Car Image | `src/components/HeroSection.tsx` | `/images/heroposter.webp` |
| Cab Card Images | `src/data/cabsData.ts` | `/images/[vehicle]-card.webp` |
| Cab Gallery Images | `src/data/cabsData.ts` | `/images/[vehicle]1.webp`, etc. |
| Why Choose Us | `src/components/WhyChooseUs.tsx` | `/images/suv1.webp` |
| Payment QR Code | `src/pages/PaymentPage.tsx` | Replace placeholder |
| UPI App Icons | `src/pages/PaymentPage.tsx` | Add your icon images |

**To Update Images:**
1. Add your `.webp` images to `public/images/` folder
2. Use the exact filenames listed above
3. Images will automatically appear on the website

**Image Best Practices:**
- Use WebP format for best compression
- Recommended dimensions: 1200×800px for cards, 1920×1080px for hero
- Optimize images for web (compress using tools like Squoosh or TinyPNG)

---

### 7. Update Payment Page

**File:** `src/pages/PaymentPage.tsx`

**QR Code:**
- Find the QR code `img` tag and replace the `src` URL with your UPI QR code image

**UPI ID:**
- Search for `mtstravelsindia@upi` and replace with your UPI ID

**UPI Apps:**
- Update the `upiApps` array with your payment app links
- Each app has: `name`, `icon`, `color`, `upiLink`

---

### 8. Update Testimonials

**File:** `src/components/Testimonials.tsx`

Each testimonial has:
```typescript
{
  id: 1,
  name: "Customer Name",
  location: "City, State",
  rating: 5,
  quote: "Customer review...",
  videoThumbnail: "thumbnail_url",
  videoUrl: "youtube_embed_url"
}
```

**To add testimonials:**
1. Upload video to YouTube
2. Get the embed URL (e.g., `https://www.youtube.com/embed/VIDEO_ID`)
3. Add to the `testimonials` array

---

### 9. Update Company Information

| Information | File |
|-------------|------|
| Company Name | `src/components/Navbar.tsx`, `src/components/Footer.tsx` |
| Company Address | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| About Company | `src/pages/AboutPage.tsx` |
| Privacy Policy | `src/pages/PrivacyPolicyPage.tsx` |
| Terms of Service | `src/pages/TermsOfServicePage.tsx` |
| Website Title | `index.html` |

---

### 10. Update SEO Meta Tags

**For each page:**
- Meta tags are managed using the `SEO` component
- Each page has its own SEO component at the top

**Example:**
```tsx
<SEO 
  title="Page Title - MTS Travels India"
  description="Page description for search engines..."
  keywords="keyword1, keyword2, keyword3"
/>
```

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Description |
|------------|-------------|-------------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |
| `2xl` | 1536px+ | Large screens |

---

## 🔧 Customization

### Change Primary Color
1. Open `src/index.css`
2. Find the custom color classes
3. Replace `#ffc800` with your color

### Change Font
1. Open `index.html`
2. Update Google Fonts link
3. Open `tailwind.config.js`
4. Update `fontFamily` configuration

### Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`
4. Add footer link in `src/components/Footer.tsx`

---

## 📞 Support

For any queries or customization requests, contact:
- **Phone/WhatsApp:** +91 72176 67160
- **Email:** info@mtstravelsindia.com

---

## 📝 License

This website is proprietary software developed for MTS Travels India. All rights reserved.

---

**Built with ❤️ for MTS Travels India**
