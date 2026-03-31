import { Link } from 'react-router-dom';
import { 
  FileText, ArrowLeft, Car, Bike, 
  CreditCard, Ban, Scale, AlertTriangle, FileSignature 
} from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfServicePage = () => {
  const lastUpdated = "March 24, 2026";

  return (
    <>
      <SEO
        title="Terms of Service & Legal Policies - MTS Travels India"
        description="Comprehensive terms of service, cancellation policies, and rental agreements for MTS Travels India taxi and bike services."
        keywords="terms of service, legal, bike rental terms, taxi rules, mts travels terms"
      />

      {/* Reduced top padding from pt-32/lg:pt-40 to pt-24/lg:pt-28 to fix the empty space */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 bg-[#111827] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#ffc800] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0F8A7C] opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ffc800] transition-colors mb-8 text-sm font-medium tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 bg-[#ffc800] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(255,200,0,0.3)]">
              <Scale className="w-8 h-8 text-[#111827]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                Terms of Service & Legal Agreement
              </h1>
              <p className="text-gray-400 text-lg">
                Please read these terms carefully before booking our cabs or renting our bikes.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300 font-mono">
                <FileSignature className="w-3 h-3" /> Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100 shadow-sm border-l-4 border-l-[#0F8A7C]">
            <p className="text-gray-600 text-base leading-relaxed m-0">
              Welcome to <strong>MTS Travels India</strong>. By accessing our website, booking a taxi, or renting a vehicle, you agree to be bound by the following Terms of Service. This document constitutes a legally binding agreement between you (the "User", "Customer", or "Renter") and MTS Travels India.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* 1. General Booking & Services */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="p-2 bg-blue-50 rounded-lg"><FileText className="w-6 h-6 text-blue-600" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">1. General Booking Terms</h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong className="text-gray-800">Right to Refuse:</strong> MTS Travels India reserves the right to refuse service to any individual without providing a reason.</li>
                <li><strong className="text-gray-800">Booking Accuracy:</strong> Customers must provide accurate phone numbers, email IDs, and pickup details. We are not liable for delays caused by incorrect information.</li>
                <li><strong className="text-gray-800">Advance Notice:</strong> Outstation cab bookings and bike rentals require an advance booking of at least 3 hours.</li>
                <li><strong className="text-gray-800">Verification:</strong> Valid government-issued ID (Aadhar Card, Passport, or Voter ID) must be presented to the driver or rental agent upon request before boarding/handover.</li>
              </ul>
            </div>

            {/* 2. Pricing & Payments */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="p-2 bg-emerald-50 rounded-lg"><CreditCard className="w-6 h-6 text-emerald-600" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">2. Pricing & Payments</h2>
              </div>
              <ul className="list-disc list-inside space-y-4 text-gray-600">
                <li><strong className="text-gray-800">Standard Cab Fares:</strong> Unless explicitly stated, base taxi fares for point-to-point drops do not include state border taxes, toll taxes, parking fees, or monument entry fees. These must be paid directly by the customer during the trip.</li>
                <li><strong className="text-gray-800">Night Charges:</strong> Standard trips operating between 10:00 PM and 6:00 AM may incur additional driver night allowances.</li>
                
                {/* PRE-MADE PACKAGE EXEMPTION */}
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 mt-2 mb-2 shadow-sm">
                  <p className="text-emerald-900 text-sm leading-relaxed">
                    <strong className="text-emerald-800 block text-base mb-1">✨ Pre-Made Package Exemption:</strong> 
                    If you have booked any of our <strong>Pre-Made Packages</strong> (including Route Packages, Tour Packages, or specialized offerings) through the website, the above out-of-pocket expenses (such as toll taxes, parking fees, state border taxes, and driver night charges) are <strong>completely included</strong> in your total package price. You will not be asked to pay any extra hidden fees for these during your trip.
                  </p>
                </div>

                <li><strong className="text-gray-800">Payment Gateway:</strong> All online transactions are securely processed via Razorpay. We do not store your credit/debit card details.</li>
              </ul>
            </div>

            {/* 3. Cancellation Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-red-500">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="p-2 bg-red-50 rounded-lg"><Ban className="w-6 h-6 text-red-600" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">3. Cancellation & Refund Policy</h2>
              </div>
              <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-6 text-sm font-medium">
                🚨 A strict 20% cancellation fee applies to all bookings across our platform.
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong className="text-gray-800">Non-Refundable Fee:</strong> If you cancel your trip for any reason after payment is made, 20% of the total booking amount will be retained as a non-refundable cancellation fee.</li>
                <li><strong className="text-gray-800">No-Show Policy:</strong> If the customer fails to appear at the pickup location within 45 minutes of the scheduled time without prior notification, the booking will be marked as a "No-Show" and no refund will be issued.</li>
                <li><strong className="text-gray-800">Refund Processing:</strong> Approved refunds (remaining 80%) will be credited back to the original payment method within 5-7 business days.</li>
              </ul>
            </div>

            {/* 4. BIKE RENTAL LEGAL TERMS */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc800] opacity-10 rounded-bl-full"></div>
              <div className="flex items-center gap-3 mb-6 border-b pb-4 relative z-10">
                <div className="p-2 bg-amber-50 rounded-lg"><Bike className="w-6 h-6 text-amber-600" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">4. Bike & Two-Wheeler Rental Terms</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-bold">Mandatory Legal Requirements for Riders</p>
              
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4.1 Age & Licensing</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>The primary rider <strong>must be strictly 18 years of age or older</strong>.</li>
                    <li>Rider must possess and present a valid, original Indian Driving License (DL) authorized for two-wheelers with/without gear. Learners' licenses are strictly prohibited.</li>
                    <li>Foreign nationals must provide an International Driving Permit (IDP) along with their original passport and valid visa.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4.2 Documents & Security Deposit</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>One original government ID (Aadhar Card, Voter ID, or Passport) must be deposited with us at the time of vehicle handover. Pan Cards are not accepted as valid address proof.</li>
                    <li>A refundable security deposit (amount varies by vehicle model) is mandatory prior to handover.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4.3 Rider Liability & Damages</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-gray-800">Traffic Violations:</strong> The rider is 100% responsible for all traffic violations, challans, toll penalties, or illegal parking fees incurred during the rental period.</li>
                    <li><strong className="text-gray-800">Accidents & Damages:</strong> In the event of an accident, scratch, or mechanical damage caused by negligence, the rider must bear the full cost of repairs at an authorized service center.</li>
                    <li><strong className="text-gray-800">Theft:</strong> In case of theft, the rider must immediately file an FIR at the local police station and notify MTS Travels. The rider will be liable for the market value of the vehicle if negligence is proven.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4.4 Usage Restrictions</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-gray-800">Helmets:</strong> The use of helmets is mandatory by law for both the rider and pillion. Failure to do so will result in traffic fines borne by the rider.</li>
                    <li><strong className="text-gray-800">Speed Limit:</strong> Vehicles must not exceed 80 km/h. Dangerous driving, stunting, racing, or off-roading is strictly prohibited and will result in immediate termination of the rental without refund.</li>
                    <li><strong className="text-gray-800">Fuel:</strong> Vehicles are provided without fuel or with minimal fuel. Customers must refill the tank based on their travel needs. No refunds will be given for excess fuel left in the tank upon return.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Cab & Taxi specific Terms */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="p-2 bg-purple-50 rounded-lg"><Car className="w-6 h-6 text-purple-600" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">5. Cab & Taxi Service Rules</h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                {/* 🚨 NEW POINT ADDED HERE */}
                <li><strong className="text-gray-800">Chauffeur-Driven Only:</strong> Please note that apart from bike rentals, all our cab, taxi, and tour vehicles are strictly provided with a professional driver from our end. We do not offer self-drive cars under any circumstances.</li>
                <li><strong className="text-gray-800">Luggage Limits:</strong> Luggage must fit within the vehicle's standard boot space. Heavy commercial goods, hazardous materials, or oversized items are not permitted.</li>
                <li><strong className="text-gray-800">Vehicle Cleanliness:</strong> A cleaning fee of up to ₹1,500 may be charged if the vehicle is returned heavily soiled due to vomiting, food spills, or pet messes.</li>
                <li><strong className="text-gray-800">AC Usage:</strong> Air conditioning will be turned off while driving on steep hilly terrain (e.g., Mussoorie routes) to prevent engine overheating and ensure passenger safety.</li>
              </ul>
            </div>

            {/* 6. Legal Jurisdiction & Force Majeure */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="p-2 bg-gray-100 rounded-lg"><AlertTriangle className="w-6 h-6 text-gray-700" /></div>
                <h2 className="text-2xl font-bold text-[#111827]">6. Liability & Jurisdiction</h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong className="text-gray-800">Force Majeure:</strong> MTS Travels India shall not be liable for delays, cancellations, or missed flights/trains caused by unforeseeable events such as extreme weather, landslides, roadblocks, strikes, or mechanical failures.</li>
                <li><strong className="text-gray-800">Personal Belongings:</strong> We are not responsible for the loss or damage of any personal items, cash, or electronics left behind in our vehicles.</li>
                <li><strong className="text-gray-800">Jurisdiction:</strong> Any legal disputes arising from these services shall be strictly subject to the exclusive jurisdiction of the courts located in Dehradun, Uttarakhand, India.</li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-[#111827] rounded-2xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-[#ffc800] mb-2">Legal or Support Inquiries?</h3>
                <p className="text-gray-400 text-sm">If you require clarification on any of these terms, please contact our administrative team.</p>
              </div>
              <div className="flex-shrink-0 text-center sm:text-right">
                <p className="text-lg font-bold">info@mtstravelsindia.com</p>
                <p className="text-xl font-black text-[#ffc800] mt-1">+91 72176 67160</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;