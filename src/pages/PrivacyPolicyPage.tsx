import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - MTS Travels India"
        description="Read our privacy policy to understand how MTS Travels India collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, mts travels privacy"
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
                Privacy Policy
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
                At MTS Travels India, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">1. Information We Collect</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Name and contact information (phone number, email address)</li>
                  <li>Pickup and drop-off locations</li>
                  <li>Travel dates and times</li>
                  <li>Payment information</li>
                  <li>Communication records with our customer service team</li>
                  <li>Feedback and reviews</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">2. How We Use Your Information</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Process and fulfill your taxi booking requests</li>
                  <li>Communicate with you about your bookings</li>
                  <li>Send booking confirmations and trip details</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our services and user experience</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">3. Information Sharing</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li><strong>Drivers:</strong> To facilitate your ride, we share necessary trip details with assigned drivers</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                </ul>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">4. Data Security</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">5. Your Rights</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6B7280] text-sm sm:text-base">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">6. Cookies</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">7. Children's Privacy</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">8. Changes to This Policy</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">9. Contact Us</h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-100">
                  <p className="text-[#111827] font-semibold mb-2">MTS Travels India</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Email: info@mtstravelsindia.com</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Phone: +91 72176 67160</p>
                  <p className="text-[#6B7280] text-sm sm:text-base">Address: Near Barhatwal Sweet Shop, Chakrata Road, Selaqui, Dehradun 248011</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
