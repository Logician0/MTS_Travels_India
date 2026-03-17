import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, CreditCard } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Cab Fleet', path: '/cabs' },
    { name: 'Bike Rental', path: '/bike-rental' },
    { name: 'Routes', path: '/routes' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* Option 1: Use logo image (uncomment below and comment out the div with "M") */}
            { <img src="/images/logo.webp" alt="MTS Travels India" className="h-10 sm:h-15 w-auto" /> }
            
            
            
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-[#111827]">MTS Travels</span>
              <span className="text-[10px] sm:text-xs text-[#6B7280] -mt-0.5 sm:-mt-1 flex items-center gap-1">
                India
                <span className="hidden sm:inline-flex items-center gap-0.5 text-[#111827]">
                  <Shield className="w-3 h-3" />
                  <span className="text-[10px]">Govt. Approved</span>
                </span>
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#111827] border-b-2 border-[#ffc800]'
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/payment"
              className="flex items-center gap-2 border-2 border-[#ffc800] text-[#111827] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#ffc800]/10 transition-colors"
            >
              <CreditCard className="w-4 h-4" />
              Pay Now
            </Link>
            <Link
              to="/contact"
              className="bg-[#ffc800] text-[#111827] px-5 xl:px-6 py-2.5 rounded-xl text-sm font-semibold btn-hover hover:bg-[#e6b400] hover:shadow-lg hover:shadow-[#ffc800]/25"
            >
              Book Taxi
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <Link
              to="/payment"
              className="flex items-center gap-1 border-2 border-[#ffc800] text-[#111827] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold"
            >
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
              Pay
            </Link>
            <Link
              to="/contact"
              className="bg-[#ffc800] text-[#111827] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#ffc800]/10 text-[#111827]'
                      : 'text-[#6B7280] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100 mt-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/payment"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 border-2 border-[#ffc800] text-[#111827] px-4 py-3 rounded-xl text-sm font-semibold"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay Now
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#ffc800] text-[#111827] px-4 py-3 rounded-xl text-sm font-semibold text-center"
                  >
                    Book Taxi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;