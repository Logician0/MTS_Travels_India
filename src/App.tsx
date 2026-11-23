import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const VerifyBookingPage = lazy(() => import('./pages/VerifyBookingPage'));
const BookingSuccessPage = lazy(() => import('./pages/BookingSuccessPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const CabsPage = lazy(() => import('./pages/CabsPage'));
const CabDetailPage = lazy(() => import('./pages/CabDetailPage'));
const RoutesPage = lazy(() => import('./pages/RoutesPage'));
const RouteDetailPage = lazy(() => import('./pages/RouteDetailPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const BikeRentalPage = lazy(() => import('./pages/BikeRentalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 animate-pulse">
        <img
          src="/images/brand/logo.webp"
          alt="MTS Travels India"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-1">
        <div className="w-2 h-2 bg-[#ffc800] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-[#ffc800] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-[#ffc800] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// SEO Route Redirects
const SEORouteRedirect = ({ to }: { to: string }) => {
  return <Navigate to={to} replace />;
};

// Main Layout Component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Only show Navbar if NOT on admin page */}
        {!isAdminPage && <Navbar />}

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/verify-booking" element={<VerifyBookingPage />} />
              <Route path="/booking-success" element={<BookingSuccessPage />} />
              <Route path="/admin" element={<AdminDashboard />} />

              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />

              {/* Bike Rental */}
              <Route path="/bike-rental" element={<BikeRentalPage />} />

              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

              {/* SEO-friendly service URLs */}
              <Route path="/taxi-service-in-dehradun" element={<SEORouteRedirect to="/services/local-taxi-service" />} />
              <Route path="/airport-taxi-dehradun" element={<SEORouteRedirect to="/services/airport-transfer" />} />

              {/* Cabs */}
              <Route path="/cabs" element={<CabsPage />} />
              <Route path="/cabs/:cabSlug" element={<CabDetailPage />} />

              {/* Routes */}
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/routes/:routeSlug" element={<RouteDetailPage />} />

              {/* SEO-friendly route URLs */}
              <Route path="/dehradun-to-delhi-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-delhi" />} />
              <Route path="/dehradun-to-mussoorie-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-mussoorie" />} />
              <Route path="/dehradun-to-rishikesh-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-rishikesh" />} />
              <Route path="/dehradun-to-haridwar-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-haridwar" />} />
              <Route path="/dehradun-to-nainital-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-nainital" />} />
              <Route path="/dehradun-to-shimla-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-shimla" />} />
              <Route path="/dehradun-to-chandigarh-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-chandigarh" />} />
              <Route path="/dehradun-to-manali-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-manali" />} />
              <Route path="/dehradun-to-jammu-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-jammu" />} />
              <Route path="/dehradun-to-agra-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-agra" />} />
              <Route path="/dehradun-to-ghaziabad-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-ghaziabad" />} />
              <Route path="/dehradun-to-faridabad-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-faridabad" />} />
              <Route path="/dehradun-to-gurugram-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-gurugram" />} />
              <Route path="/dehradun-to-mathura-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-mathura" />} />
              <Route path="/dehradun-to-uttarkashi-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-uttarkashi" />} />
              <Route path="/dehradun-to-roorkee-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-roorkee" />} />
              <Route path="/dehradun-to-saharanpur-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-saharanpur" />} />
              <Route path="/dehradun-to-noida-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-noida" />} />
              <Route path="/dehradun-to-jaipur-taxi" element={<SEORouteRedirect to="/routes/dehradun-to-jaipur" />} />

              {/* Packages */}
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/packages/:packageSlug" element={<PackageDetailPage />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Only show Footer and Widget if NOT on admin page */}
        {!isAdminPage && (
          <>
            <Footer />
            <WhatsAppWidget />
          </>
        )}
      </div>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
