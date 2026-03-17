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
  return (
    <>
      <SEO
        title="Premium Taxi Service in Dehradun"
        description="Book reliable and comfortable taxi service in Dehradun. Airport transfers, outstation trips, local rides, and tour packages with professional drivers. 24/7 service."
        keywords="taxi service dehradun, cab booking, airport taxi, outstation taxi, car rental dehradun, bike rental dehradun"
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
