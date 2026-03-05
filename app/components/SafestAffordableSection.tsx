import {
  Wallet,
  Package,
  Car,
  Utensils,
  Wifi,
  CircleDollarSign,
  Zap,
  ShieldCheck,
  Armchair,
  Star,
  ArrowUpRight
} from 'lucide-react';

export default function SafestAffordableSection() {
  const rightFeatures = [
    { icon: <Wallet className="w-6 h-6" />, title: 'Best Value', desc: 'Luxury that fits your budget' },
    { icon: <Package className="w-6 h-6" />, title: 'Secure Storage', desc: 'Complimentary luggage safety' },
    { icon: <Car className="w-6 h-6" />, title: 'Valet Service', desc: 'Hassle-free parking included' },
    { icon: <Utensils className="w-6 h-6" />, title: 'Fine Dining', desc: '24/7 Room service & restaurant' },
    { icon: <Wifi className="w-6 h-6" />, title: 'Connectivity', desc: 'High-speed fiber internet' },
  ];

  const bottomFeatures = [
    { icon: <CircleDollarSign className="w-8 h-8" />, title: 'Flexible Booking', desc: 'Free cancellation up to 24hrs' },
    { icon: <Zap className="w-8 h-8" />, title: 'Always On', desc: '24/7 Uninterrupted power supply' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Secure Stay', desc: 'Top-tier security protocols' },
  ];

  /*  const stats = [
     { value: '3', label: 'Prime Locations' },
     { value: '10+', label: 'Years Serving You' },
     { value: '5000+', label: 'Happy Guests' },
     { value: '4.8', label: 'Average Rating' },
     { value: '25+', label: 'Awards Won' },
   ]; */

  return (
    <section className="w-full bg-white dark:bg-background py-20">
      <div className="mx-4 md:mx-20"> {/* Match other sections margin */}

        {/* Dark Container */}
        <div className="bg-black dark:bg-zinc-900 text-white rounded-3xl md:rounded-[3rem] p-6 md:p-16 mb-20">

          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">DWS Hotels</p>
            <h2 className="text-5xl md:text-6xl font-bold">
              Safest and Affordable
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Column 1: Info & Testimonial */}
            <div className="flex flex-col gap-8">
              {/* Intro Text */}
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold leading-snug">
                  Experience World-Class Hospitality in Abraka
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Welcome to DWS Hotels, where luxury meets affordability. Located in the heart of Abraka, we offer a serene escape with state-of-the-art facilities including a swimming pool, fitness center, and exquisite dining. Whether for business or leisure, enjoy a stay defined by comfort and class.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:underline">
                  Explore Our Rooms
                  <span className="ml-1 bg-white text-black rounded-full p-0.5 w-4 h-4 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-black" />
                  </span>
                </a>
              </div>

              {/* Testimonial Card */}
              <div className="bg-[#111] p-6 rounded-3xl mt-auto">
                <div className="w-10 h-10 bg-gray-700 rounded-full mb-4 overflow-hidden">
                  {/* Avatar placeholder */}
                  <div className="w-full h-full bg-gray-500"></div>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  "The service at DWS Hotels is unmatched. From the moment I arrived, I felt right at home. The rooms are spacious, clean, and the food is amazing. Definitely my go-to spot in Abraka."
                </p>
                <div>
                  <p className="font-bold text-white text-sm">Adebayo O.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Center Image & Stats Block */}
            <div className="flex flex-col gap-8">
              {/* Center Image */}
              <div className="bg-[#EAD8C6] rounded-3xl overflow-hidden h-[350px] relative">
                <img src="/safe-home.jpeg" alt="Interior" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>

              {/* Stats Block */}
              <div className="bg-black p-4"> {/* Transparent or black bg to blend */}
                <div className="flex items-center gap-4 mb-4">
                  <Armchair className="w-10 h-10 text-white" />
                  <span className="text-6xl font-light text-white">100+</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Luxury rooms and suites designed for your ultimate comfort.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:underline">
                  Explore Our Rooms
                  <span className="ml-1 bg-white text-black rounded-full p-0.5 w-4 h-4 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-black" />
                  </span>
                </a>
              </div>
            </div>

            {/* Column 3: Feature Stack & Bottom Image */}
            <div className="flex flex-col gap-8">
              {/* Features Stack */}
              <div className="space-y-3">
                {rightFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-[#111] p-4 rounded-2xl flex items-center gap-4 hover:bg-[#1a1a1a] transition-colors">
                    <div className="text-white">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interior Image (Bottom Right in grid logic, actually part of Col 3 in this structure) */}
              <div className="bg-[#EAD8C6] rounded-3xl overflow-hidden h-[250px] mt-auto">
                <img src="/platinum-home.jpeg" alt="Interior" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Bottom Features Row (Inside Dark Container) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {bottomFeatures.map((feature, idx) => (
              <div key={idx} className="bg-[#111] p-6 rounded-3xl flex items-center gap-4">
                <div className="p-3 bg-black rounded-2xl border border-gray-800 text-white">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{feature.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row (Outside Dark Container) */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-black mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
