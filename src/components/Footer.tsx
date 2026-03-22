import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white relative overflow-hidden"> {/* Added overflow-hidden to stop the scrollbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <img src="/images/logo.webp" alt="MTS Travels India" className="h-10 sm:h-15 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold">MTS Travels</span>
                <span className="text-[10px] sm:text-xs text-gray-400 -mt-0.5 sm:-mt-1">India</span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm">
              Your trusted partner for reliable and comfortable taxi services in Dehradun. 
              We provide premium transportation solutions for local, outstation, and pilgrimage travel.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-[#ffc800]/10 text-[#ffc800] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Government Approved
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#ffc800] hover:text-[#111827] transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#ffc800] hover:text-[#111827] transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#ffc800] hover:text-[#111827] transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#ffc800] hover:text-[#111827] transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/services/local-taxi-service" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Local Taxi</Link></li>
              <li><Link to="/services/airport-transfer" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Airport Transfer</Link></li>
              <li><Link to="/services/one-way-taxi" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">One Way Taxi</Link></li>
              <li><Link to="/services/round-trip-taxi" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Round Trip</Link></li>
              <li><Link to="/bike-rental" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Bike Rental</Link></li>
              <li><Link to="/payment" className="text-[#ffc800] hover:text-white transition-colors text-xs sm:text-sm font-medium">Pay Online →</Link></li>
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-4 sm:mb-6">Popular Routes</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/routes/dehradun-to-delhi" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Dehradun to Delhi</Link></li>
              <li><Link to="/routes/dehradun-to-mussoorie" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Dehradun to Mussoorie</Link></li>
              <li><Link to="/routes/dehradun-to-rishikesh" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Dehradun to Rishikesh</Link></li>
              <li><Link to="/routes/dehradun-to-haridwar" className="text-gray-400 hover:text-[#ffc800] transition-colors text-xs sm:text-sm">Dehradun to Haridwar</Link></li>
              <li><Link to="/routes" className="text-[#ffc800] hover:text-white transition-colors text-xs sm:text-sm font-medium">View All →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+917217667160" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block">+91 72176 67160</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@mtstravelsindia.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">info@mtstravelsindia.com</a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm">123 Rajpur Road, Dehradun, Uttarakhand 248001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Scrollbar fix applied here */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 MTS Travels India. All rights reserved.
          </p>

          {/* 🕵️ SECRET INVISIBLE LINK MOVED TO MIDDLE */}
          <a 
            href="https://www.instagram.com/logiciancreatives/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-4 bg-transparent opacity-0 cursor-default select-none mx-2"
            aria-hidden="true"
          >
            .
          </a>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;