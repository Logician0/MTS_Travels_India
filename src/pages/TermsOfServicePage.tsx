import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfServicePage = () => {
  return (
    <>
      <SEO
        title="Terms of Service - MTS Travels India"
        description="Read our terms of service to understand the rules and regulations for using MTS Travels India taxi services."
        keywords="terms of service, terms and conditions, mts travels terms"
      />

      {/* Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-72 h-72 bg-[#0F8A7C] -top-36 -right-36" />
        <div className="floating-shape w-56 h-56 bg-[#F5A623] -bottom-28 -left-28" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#0F8A7C] transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
                Terms of Service
              </h1>
              <p className="text-sm text-[#6B7280]">Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            
            <div className="bg-[#F8FAFC] rounded-xl p-6 mb-8 border border-gray-100">
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed m-0">
                Welcome to MTS Travels India. By using our services, you agree to be bound by these Terms of Service. Please read them carefully before booking a taxi with us.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  By accessing or using the services provided by MTS Travels India, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">2. Services</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  MTS Travels India provides taxi and transportation services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Local taxi services within Dehradun</li>
                  <li>Airport pickup and drop services</li>
                  <li>One-way and round-trip taxi services</li>
                  <li>Outstation travel services</li>
                  <li>Tour packages and pilgrimage travel</li>
                  <li>Wedding and event transportation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">3. Booking and Reservations</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Bookings can be made via phone, website, or in person</li>
                  <li>A valid phone number and pickup details are required for booking</li>
                  <li>Advance booking is recommended for outstation and tour packages</li>
                  <li>Booking confirmation will be sent via SMS or email</li>
                  <li>We reserve the right to refuse service for any reason</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">4. Pricing and Payment</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Prices are quoted based on distance, vehicle type, and trip duration</li>
                  <li>Additional charges may apply for waiting time, toll taxes, and parking</li>
                  <li>Payment can be made in cash or via digital payment methods</li>
                  <li>For outstation trips, advance payment may be required</li>
                  <li>Prices are subject to change without prior notice</li>
                  <li>GST and other applicable taxes will be charged as per government regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">5. Cancellation Policy</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Free cancellation is available up to 2 hours before the scheduled pickup time</li>
                  <li>Cancellations made within 2 hours may incur a cancellation fee</li>
                  <li>No-shows will be charged the full fare or a cancellation fee</li>
                  <li>For tour packages, cancellation policies vary and will be communicated at booking</li>
                  <li>Refunds, if applicable, will be processed within 7-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">6. Passenger Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Passengers must be ready at the pickup location at the scheduled time</li>
                  <li>Valid ID proof may be required for certain trips</li>
                  <li>Passengers are responsible for their personal belongings</li>
                  <li>Smoking and consumption of alcohol inside the vehicle is prohibited</li>
                  <li>Any damage to the vehicle caused by passengers will be charged</li>
                  <li>Passengers must wear seat belts at all times</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">7. Driver and Vehicle</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>All our drivers are licensed and professionally trained</li>
                  <li>Vehicles are regularly maintained and sanitized</li>
                  <li>We reserve the right to assign a different vehicle or driver if necessary</li>
                  <li>Drivers may refuse service if passengers behave inappropriately</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">8. Luggage Policy</h2>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Standard luggage allowance depends on the vehicle type</li>
                  <li>Excess luggage may require a larger vehicle at additional cost</li>
                  <li>We are not liable for loss or damage to luggage unless due to negligence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">9. Liability</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  MTS Travels India shall not be liable for any delays, cancellations, or service interruptions due to circumstances beyond our control, including but not limited to weather conditions, road conditions, traffic, natural disasters, or government restrictions. Our liability is limited to the fare paid for the trip.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">10. Complaints and Disputes</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  Any complaints or disputes should be reported within 24 hours of the trip completion. We will investigate and respond within 7 business days. All disputes shall be subject to the jurisdiction of courts in Dehradun, Uttarakhand.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">11. Modifications to Terms</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">12. Contact Information</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-100">
                  <p className="text-[#111827] font-semibold mb-2">MTS Travels India</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Email: info@mtstravelsindia.com</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Phone: +91 72176 67160</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Address: 123 Rajpur Road, Dehradun, Uttarakhand 248001</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
