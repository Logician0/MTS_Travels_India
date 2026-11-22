import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Calendar, Car, ArrowRight, Printer, Phone, ShieldAlert, Mail } from 'lucide-react'; // 👈 Added Mail icon
import SEO from '../components/SEO';

const BookingSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  let savedConfirmation: { booking?: any; paymentId?: string } = {};
  try {
    savedConfirmation = JSON.parse(sessionStorage.getItem('mts-last-booking-confirmation') || '{}');
  } catch {
    // A malformed or expired browser value should never break the receipt page.
  }
  const { booking, paymentId } = location.state || savedConfirmation;

  useEffect(() => {
    if (!booking) {
      navigate('/');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  return (
    <>
      <SEO title="Booking Confirmed - MTS Travels India" description="Your booking is successful." />
      
      {/* 🚨 PRINT CSS: Forces 1 Page, Hides UI, and Removes Browser Headers */}
      <style>
        {`
          @media print {
            @page { 
              size: A4 portrait;
              margin: 0.5cm; /* Strict margin to remove browser URLs */
            }
            html, body {
              height: 100vh;
              overflow: hidden; /* Prevents scrolling to a second blank page */
              background: white;
            }
            body * {
              visibility: hidden;
            }
            #printable-receipt, #printable-receipt * {
              visibility: visible;
            }
            #printable-receipt {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              max-width: 100%;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
              page-break-inside: avoid; /* Forces content to stay bundled on one page */
              break-inside: avoid;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Added print:min-h-0 and print:pt-0 to stop the background from stretching */}
      <div className="min-h-screen bg-[#F8FAFC] print:bg-white pt-24 print:pt-0 pb-16 print:pb-0 px-4 font-sans print:min-h-0">
        <div className="max-w-2xl mx-auto">
          
          {/* Main Receipt Container */}
          <div id="printable-receipt" className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
            
            {/* OFFICIAL BRANDING HEADER WITH LOCAL LOGO */}
            <div className="px-8 py-6 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between bg-white">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
                {/* 🚨 Local Logo Path (Includes a fallback to .png just in case) */}
                <img 
                  src="/images/logo.webp" 
                  onError={(e) => { e.currentTarget.src = '/images/logo.png' }}
                  alt="MTS Travels India" 
                  className="h-12 w-auto object-contain"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-black text-[#111827] tracking-tight uppercase">MTS Travels India</h2>
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-0.5">Premium Cab Services</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm font-bold text-gray-800 uppercase tracking-wider">Booking Receipt</p>
                <p className="text-xs text-gray-500 mt-1">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            {/* Success Banner Section */}
            <div className="px-8 pt-8 pb-8 text-center bg-[#111827] text-white print:bg-white print:text-[#111827] print:border-b print:border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/20 mb-4 no-print">
                <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
              </div>
              <h1 className="text-3xl font-black mb-2 tracking-tight">Booking Confirmed!</h1>
              <p className="text-gray-300 print:text-gray-600 text-base mb-6">
                Thank you, <span className="font-bold text-white print:text-[#111827]">{booking.name}</span>. Your cab is officially booked.
              </p>
              
              {/* 🚨 NEW: Email Notification Callout */}
              <div className="inline-flex items-center gap-3 bg-white/10 print:bg-gray-100 px-5 py-3 rounded-xl border border-white/20 print:border-gray-300">
                <Mail className="w-5 h-5 text-[#ffc800] print:text-gray-700" />
                <p className="text-sm font-medium text-white print:text-gray-800 text-left">
                  You will receive a booking confirmation email shortly at <strong className="text-[#ffc800] print:text-black block sm:inline">{booking.email}</strong>
                </p>
              </div>
            </div>

            {/* Receipt Body */}
            <div className="p-8 print:py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-gray-200 pb-6 mb-6 print:pb-4 print:mb-4 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Paid</p>
                  <p className="text-4xl font-black text-[#111827]">₹{booking.price}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Inclusive of GST</p>
                </div>
                <div className="sm:text-right w-full sm:w-auto bg-gray-50 print:bg-transparent p-4 sm:p-0 rounded-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Payment ID</p>
                  <p className="text-sm font-mono font-bold text-gray-800 break-all">{paymentId}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-3 mb-1">Passenger Email</p>
                  <p className="text-sm font-bold text-gray-800 break-all">{booking.email}</p>
                </div>
              </div>

              {/* Grid Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 print:gap-y-6">
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 print:bg-transparent flex items-center justify-center flex-shrink-0 border border-blue-100 print:border-gray-300">
                    <MapPin className="w-5 h-5 text-blue-600 print:text-gray-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Route</p>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{booking.direction || 'Custom Route'}</p>
                    <p className="text-sm text-gray-500 font-medium capitalize mt-1">{booking.tripType ? booking.tripType.replace('_', ' ') : 'N/A'}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-50 print:bg-transparent flex items-center justify-center flex-shrink-0 border border-purple-100 print:border-gray-300">
                    <Calendar className="w-5 h-5 text-purple-600 print:text-gray-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pickup Schedule</p>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{booking.date}</p>
                    <p className="text-sm text-gray-500 font-medium mt-1">{booking.time}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 print:bg-transparent flex items-center justify-center flex-shrink-0 border border-emerald-100 print:border-gray-300">
                    <Car className="w-5 h-5 text-emerald-600 print:text-gray-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Vehicle Details</p>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{booking.specificVehicle}</p>
                    <p className="text-sm text-gray-500 font-medium uppercase mt-1">{booking.vehicleType} • {booking.passengers} PAX</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-50 print:bg-transparent flex items-center justify-center flex-shrink-0 border border-amber-100 print:border-gray-300">
                    <Phone className="w-5 h-5 text-amber-600 print:text-gray-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Passenger Contact</p>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{booking.phone}</p>
                    <p className="text-sm text-gray-500 font-medium mt-1">Driver will call this number</p>
                  </div>
                </div>

              </div>

              {/* TERMS AND CONDITIONS SECTION */}
              <div className="mt-10 pt-6 border-t border-gray-200 print:mt-6 print:pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-4 h-4 text-gray-400 print:text-gray-800" />
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Terms & Conditions</h3>
                </div>
                <ul className="text-xs text-gray-500 space-y-2 pl-6 list-decimal">
                  <li><strong className="text-gray-700">Cancellation Policy:</strong> A strict 20% cancellation fee applies to all bookings. If you cancel your trip for any reason, 20% of the total payment will be non-refundable.</li>
                  <li>Please ensure you are ready at the pickup location at least 15 minutes prior to the scheduled time.</li>
                  <li>Tolls, parking fees, and state taxes (if crossing state borders) may be extra unless explicitly stated in your package.</li>
                  <li>The driver's contact details will be shared with you 2-4 hours prior to the journey.</li>
                </ul>
              </div>

            </div>
            
            {/* Print Footer / Support Info */}
            <div className="bg-gray-50 print:bg-white px-8 py-6 border-t border-gray-100 print:border-gray-300 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm font-bold text-gray-800">Need Assistance?</p>
                <p className="text-xs text-gray-500">Contact our 24/7 support team</p>
              </div>
              <div className="font-bold text-[#0F8A7C] print:text-black">
                +91 72176 67160
              </div>
            </div>
          </div>

          {/* Action Buttons Below Receipt (HIDDEN IN PRINT DUE TO .no-print CLASS) */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center no-print">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 text-gray-600 hover:text-[#111827] bg-white px-6 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow border border-gray-200 w-full sm:w-auto justify-center"
            >
              <Printer className="w-4 h-4" /> Print Receipt
            </button>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 bg-[#111827] hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Return to Home <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default BookingSuccessPage;
