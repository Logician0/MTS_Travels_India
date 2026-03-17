import { Link } from 'react-router-dom';
import { Users, Car, Award, MapPin, ArrowRight, Target, Heart, Shield, CheckCircle, BadgeCheck } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Customers' },
    { icon: Car, value: '50+', label: 'Premium Vehicles' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: MapPin, value: '100+', label: 'Routes Covered' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide safe, reliable, and affordable taxi services that exceed customer expectations while supporting sustainable tourism in Uttarakhand.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in honesty, punctuality, and customer-first approach. Every ride is an opportunity to create a memorable experience.',
    },
    {
      icon: Shield,
      title: 'Our Promise',
      description: 'We promise transparent pricing, professional service, well-maintained vehicles, and 24/7 support for all your travel needs.',
    },
  ];

  const certifications = [
    'Registered with Uttarakhand Tourism Department',
    'Verified Fleet with RTO Compliance',
    'Licensed Commercial Vehicle Operator',
    'GST Registered Business',
    'Insured Vehicles & Passengers',
    'Professional Driver Licensing',
  ];

  return (
    <>
      <SEO
        title="About Us - Government Approved Taxi Service"
        description="Learn about MTS Travels India - Dehradun's trusted & government approved taxi service provider with 10+ years of experience, 50+ premium vehicles, and 15,000+ satisfied customers."
        keywords="about mts travels, taxi company dehradun, travel company uttarakhand, government approved taxi"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">
        <div className="floating-shape w-72 h-72 bg-[#ffc800] -top-36 -right-36" />
        <div className="floating-shape w-56 h-56 bg-[#111827] -bottom-28 -left-28" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            {/* Government Approved Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffc800]/10 border border-[#ffc800] text-[#111827] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Government Approved Taxi Service
              <BadgeCheck className="w-4 h-4 text-[#ffc800]" />
            </div>
            
            <span className="block px-4 py-2 text-[#111827] text-sm font-semibold mb-4">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-4 sm:mb-6">
              Your Trusted <span className="text-[#ffc800]">Travel Partner</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              MTS Travels India has been serving travelers in Dehradun and Uttarakhand for over a decade. 
              We are committed to providing safe, reliable, and comfortable transportation solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#ffc800] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#111827]" />
                </div>
                <div className="text-xl sm:text-3xl font-bold text-[#111827] mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Certification Section */}
      <section className="py-12 sm:py-16 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#ffc800]/20 text-[#ffc800] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Official Certifications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Government Approved & Certified
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
              MTS Travels India operates with full government authorization and compliance with all transportation regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-8 h-8 bg-[#ffc800]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#ffc800]" />
                </div>
                <span className="text-white text-sm sm:text-base font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.webp"
                  alt="MTS Travels Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-[#ffc800] rounded-2xl sm:rounded-3xl -z-10 opacity-30" />
              
              {/* Government Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[#ffc800]" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Government</p>
                    <p className="text-xs text-[#ffc800]">Approved</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-[#ffc800]/10 text-[#111827] text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-4 sm:mb-6">
                A Decade of <span className="text-[#ffc800]">Excellence</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-4 sm:mb-6">
                Founded in 2014, MTS Travels India started with a simple mission - to provide reliable 
                and affordable taxi services in Dehradun. Over the years, we have grown from a small 
                fleet of 5 cars to over 50 premium vehicles.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-6 sm:mb-8">
                Our team of professional drivers, many of whom have been with us since the beginning, 
                are experts in navigating the beautiful yet challenging roads of Uttarakhand. We have 
                successfully completed over 50,000 trips, serving pilgrims, tourists, and locals alike.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 bg-[#ffc800]/10 text-[#111827] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  Govt. Approved
                </div>
                <div className="flex items-center gap-2 bg-gray-100 text-[#111827] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified Business
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#ffc800] text-[#111827] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold btn-hover text-sm sm:text-base hover:bg-[#e6b400]"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-3 sm:mb-4">
              What Drives <span className="text-[#ffc800]">Us</span>
            </h2>
            <p className="text-sm sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
              Our core values guide everything we do at MTS Travels India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ffc800] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#111827]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
