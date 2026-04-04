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
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.mtstravelsindia.com/#business',
    'name': 'MTS Travels India',
    'description': 'Premium government-approved taxi and car rental service in Dehradun, Uttarakhand.',
    'url': 'https://www.mtstravelsindia.com',
    'telephone': '+91-7217667160',
    'email': 'info@mtstravelsindia.com',
    'image': '/images/og-image.webp',
    'priceRange': '₹10-₹200 per km',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Near Sliver City Mall, Rajpur Road, Dehradun 248001',
      'addressLocality': 'Dehradun',
      'addressRegion': 'Uttarakhand',
      'postalCode': '248001',
      'addressCountry': 'IN'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Dehradun' },
      { '@type': 'City', 'name': 'Haridwar' },
      { '@type': 'City', 'name': 'Mussoorie' },
      { '@type': 'City', 'name': 'Shimla' },
      { '@type': 'City', 'name': 'Chandigarh' },
      { '@type': 'City', 'name': 'Rishikesh' },
      { '@type': 'State', 'name': 'Uttarakhand' },
      { '@type': 'City', 'name': 'Delhi' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Taxi & Cab Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'name': 'Local Taxi Service',
          'description': 'City rides and local transportation in Dehradun'
        },
        {
          '@type': 'Offer',
          'name': 'Airport Transfer',
          'description': 'Jolly Grant Airport to Dehradun transfers'
        },
        {
          '@type': 'Offer',
          'name': 'Outstation Cabs',
          'description': 'Long-distance cab service to nearby cities'
        },
        {
          '@type': 'Offer',
          'name': 'Tour Packages',
          'description': 'Complete tour packages with cab and accommodation'
        }
      ]
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.facebook.com/mtstravelsindia',
      'https://www.instagram.com/mtstravelsindia',
      'https://www.twitter.com/mtstravelsindia'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '500'
    }
  };

  return (
    <>
      <SEO
        title="Dehradun Taxi Booking | Outstation Cab Service | MTS Travels India"
        description="Book premium taxi service in Dehradun for local rides, airport transfers, and outstation cab travel. Government-approved, 24/7 service to Delhi, Haridwar, Mussoorie, Shimla & throughout Uttarakhand."
        keywords="dehradun taxi booking, cab service dehradun, airport taxi service, outstation cab, haridwar taxi, mussoorie taxi, shimla taxi, uttarakhand tour by cab"
        url="/"
        canonical="https://www.mtstravelsindia.com"
        schema={localBusinessSchema}
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
