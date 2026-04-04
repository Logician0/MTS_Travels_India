import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ServicesSection from '../components/ServicesSection';
import CabCategories from '../components/CabCategories';
import BikeRentSection from '../components/BikeRentSection';
import PopularRoutes from '../components/PopularRoutes';
import TourPackages from '../components/TourPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mtstravelsindia.com/#business",
    "name": "MTS Travels India",
    "alternateName": "MTS Travels",
    "description": "Premium government-approved taxi and car rental service in Dehradun, Uttarakhand.",
    "url": "https://www.mtstravelsindia.com",
    "telephone": "+91-7217667160",
    "email": "info@mtstravelsindia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Sliver City Mall, Rajpur Road, Dehradun 248001",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248001",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO
        title="Dehradun Taxi Booking | Cab Service in Uttarakhand | MTS Travels India"
        description="Premium taxi service in Dehradun - Book cabs for local rides, airport transfers, and outstation travel. Government-approved, reliable service for Delhi, Haridwar, Mussoorie, Shimla & throughout Uttarakhand."
        keywords="dehradun taxi booking, cab service dehradun, airport taxi service, outstation cab, haridwar taxi, mussoorie taxi, shimla taxi, uttarakhand tour by cab"
        url="/"
        canonical="https://www.mtstravelsindia.com"
        schema={homePageSchema}
        ogType="business.business"
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <CabCategories />
      <BikeRentSection />
      <PopularRoutes />
      <TourPackages />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default HomePage;
