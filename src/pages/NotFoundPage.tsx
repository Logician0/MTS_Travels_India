import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to homepage to explore our taxi services."
      />
      
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-[#F8FAFC] to-white relative overflow-hidden">
        <div className="floating-shape w-72 h-72 bg-[#0F8A7C] -top-36 -right-36" />
        <div className="floating-shape w-56 h-56 bg-[#F5A623] -bottom-28 -left-28" />

        <div className="max-w-xl mx-auto px-4 text-center relative z-10">
          <div className="text-9xl font-bold gradient-text mb-6">404</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-[#6B7280] mb-8">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold btn-hover flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#111827] text-[#111827] px-8 py-4 rounded-xl font-semibold btn-hover flex items-center justify-center gap-2"
            >
              Book a Taxi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
