import { Bike, Shield, Clock, Fuel, Wrench, Phone, MessageCircle, CreditCard, CheckCircle, MapPin, Sparkles, IndianRupee, FileText, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BikeRentalPage = () => {
  const rentalTerms = [
    {
      icon: Clock,
      title: 'Flexible Duration',
      description: 'Hourly, daily, or weekly rental options available',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Rates',
      description: 'Cheap hourly prices with no hidden charges',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All bikes are insured for your safety',
    },
    {
      icon: Fuel,
      title: 'Fuel Policy',
      description: 'Return with same fuel level as received',
    },
    {
      icon: FileText,
      title: 'ID Required',
      description: 'Valid ID proof and driving license needed',
    },
    {
      icon: Wrench,
      title: 'Well Maintained',
      description: 'All bikes are in new and excellent condition',
    },
  ];

  const features = [
    'Brand new condition bikes',
    'Cheap hourly rental prices',
    'Daily and weekly options',
    'Free helmet with every rental',
    'Well maintained vehicles',
    '24/7 roadside assistance',
    'Easy booking process',
    'Flexible pickup & drop',
  ];

  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call or WhatsApp us with your rental requirements',
    },
    {
      step: '02',
      title: 'Choose Duration',
      description: 'Select hourly, daily, or weekly rental option',
    },
    {
      step: '03',
      title: 'Submit Documents',
      description: 'Provide valid ID proof and driving license',
    },
    {
      step: '04',
      title: 'Ride Away',
      description: 'Pick up your bike and enjoy your ride',
    },
  ];

  return (
    <>
      <SEO
        title="Bike Rental Service in Dehradun - New Bikes at Cheap Hourly Prices | MTS Travels India"
        description="Rent bikes in new condition at affordable hourly prices in Dehradun. Flexible rental options - hourly, daily, weekly. Fully insured bikes with free helmet."
        keywords="bike rental dehradun, rent bike dehradun, bike on rent, hourly bike rental, cheap bike rental, two wheeler rental dehradun"
      />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-20 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffc800] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#ffc800] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image First on Mobile */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/bike-hero.webp"
                  alt="Bike Rental Service in Dehradun"
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 bg-[#ffc800] text-black px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                New Condition
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-xs sm:text-sm">
                <span className="text-[#ffc800] font-bold">Cheap</span> Hourly Prices
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#ffc800] text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Bike className="w-4 h-4" />
                <span>Bike Rental Service</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                Rent Bikes in{' '}
                <span className="text-[#ffc800]">New Condition</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Explore Dehradun and nearby areas on two wheels with our affordable bike rental service. We offer well-maintained bikes at cheap hourly prices with flexible rental options.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">New Condition Bikes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Cheap Hourly Prices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc800]" />
                  <span className="text-gray-300 text-xs sm:text-sm">Free Helmet</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917217667160?text=Hi%2C%20I%20want%20to%20rent%20a%20bike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#ffc800] text-black px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#e6b400] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+917217667160"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Options Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Flexible Rental Options
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Choose the rental duration that suits your needs - from a few hours to weeks
            </p>
          </div>

          {/* Rental Duration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#ffc800] transition-all">
              <div className="w-14 h-14 bg-[#ffc800] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Hourly Rental</h3>
              <p className="text-gray-600 text-sm">
                Perfect for short trips and quick errands around the city
              </p>
            </div>

            <div className="bg-[#ffc800] rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                Popular
              </div>
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bike className="w-7 h-7 text-[#ffc800]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Daily Rental</h3>
              <p className="text-black/70 text-sm">
                Ideal for day trips, sightseeing, and exploring nearby areas
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#ffc800] transition-all">
              <div className="w-14 h-14 bg-[#ffc800] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Weekly Rental</h3>
              <p className="text-gray-600 text-sm">
                Best value for extended trips and long-term needs
              </p>
            </div>
          </div>

          {/* Rental Terms */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {rentalTerms.map((term, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#ffc800] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <term.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{term.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/bike-rental-why.webp"
                  alt="Why Choose Our Bike Rental"
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              
            </div>

            {/* Content */}
            <div className="order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Rent From <span className="text-[#ffc800]">MTS Travels?</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-6">
                We provide the best bike rental experience in Dehradun with new condition bikes at the most affordable prices. Our commitment to quality and customer satisfaction makes us the preferred choice.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#ffc800] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Rent */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How to Rent a Bike
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Simple 4-step process to get your bike
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 text-center h-full hover:shadow-lg transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-[#ffc800] mb-3">{item.step}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#ffc800] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ffc800] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#ffc800]/20 text-[#ffc800] px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Bike className="w-4 h-4" />
              <span>Start Your Ride Today</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Rent a Bike?
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
              Contact us now to book your bike. New condition bikes at cheap hourly prices waiting for you!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/917217667160?text=Hi%2C%20I%20want%20to%20rent%20a%20bike"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffc800] text-black px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#e6b400] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href="tel:+917217667160"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <Link
                to="/payment"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay Online</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="tel:+917217667160"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 72176 67160</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Headphones className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Dehradun, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeRentalPage;
