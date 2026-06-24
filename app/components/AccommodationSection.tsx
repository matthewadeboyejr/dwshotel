'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ui/ScrollReveal';

export default function AccommodationSection() {
  const [activeTab, setActiveTab] = useState('Deluxe');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs = ['Deluxe', 'Superior', 'Platinum', 'Business Class', 'Executive', 'Royal Suite'];

  const listings = {
    'Deluxe': {
      id: 1,
      image: '/deluxe-home.jpeg',
      rating: '4.5',
      title: 'Deluxe Room for you',
      price: 'NGN40,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: '1 King + 2' },
        { label: 'Bathrooms', value: '3 Attached' },
        { label: 'Internet', value: '100Mbps' },
        { label: 'Covered Parking', value: 'Yes Two' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'Lorem ipsum dolor sit ametony cosectetur adiinteger pt nea.' },
        { title: 'Amenities', desc: 'Lorem ipsum dolor sit ametony cosectetur adiinteger pt nea.' },
      ]
    },
    'Superior': {
      id: 2,
      image: '/superior-home.jpeg',
      rating: '4.7',
      title: 'Superior living experience for you',
      price: 'NGN45,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: '2 King' },
        { label: 'Bathrooms', value: '2 Attached' },
        { label: 'Internet', value: '200Mbps' },
        { label: 'Covered Parking', value: 'Yes One' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'High standard cleaning protocols.' },
        { title: 'Amenities', desc: 'Pool access, Gym, and Spa.' },
      ]
    },
    'Executive': {
      id: 3,
      image: '/executive-home.jpeg',
      rating: '4.7',
      title: 'Executive living experience for you',
      price: 'NGN90,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: '2 King' },
        { label: 'Bathrooms', value: '2 Attached' },
        { label: 'Internet', value: '200Mbps' },
        { label: 'Covered Parking', value: 'Yes One' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'High standard cleaning protocols.' },
        { title: 'Amenities', desc: 'Pool access, Gym, and Spa.' },
      ]
    },
    'Royal Suite': {
      id: 4,
      image: '/royal-home.jpeg',
      rating: '5.0',
      title: 'Royal treatment specifically for you',
      price: 'NGN100,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: 'Master + 2' },
        { label: 'Bathrooms', value: '3 Ensuite' },
        { label: 'Internet', value: '1Gbps' },
        { label: 'Covered Parking', value: 'Private Garage' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'Daily housekeeping included.' },
        { title: 'Amenities', desc: 'Private butler, Jacuzzi.' },
      ]
    },
    'Business Class': {
      id: 5,
      image: '/business-home.jpeg',
      rating: '4.8',
      title: 'Perfect environment for your business trip',
      price: 'NGN60,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: '1 Suite' },
        { label: 'Bathrooms', value: '1 Attached' },
        { label: 'Internet', value: 'High Speed' },
        { label: 'Covered Parking', value: 'Yes' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'Sanitized workspace.' },
        { title: 'Amenities', desc: 'Meeting room access, Printer.' },
      ]
    },
    'Platinum': {
      id: 6,
      image: '/platinum-home.jpeg',
      rating: '4.9',
      title: 'Platinum experience for premium guests',
      price: 'NGN50,000/night',
      tax: 'Including all taxed',
      basicInfo: [
        { label: 'Total Rooms', value: 'Penthouse' },
        { label: 'Bathrooms', value: '2 Luxury' },
        { label: 'Internet', value: '500Mbps' },
        { label: 'Covered Parking', value: 'Valet' },
      ],
      features: [
        { title: 'Cleanliness', desc: 'Premium deep cleaning.' },
        { title: 'Amenities', desc: 'Rooftop access, Lounge.' },
      ]
    }
  };

  const currentListing = listings[activeTab as keyof typeof listings];

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section className="bg-white dark:bg-zinc-950 py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-4 md:mx-20 max-w-7xl lg:mx-auto lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="flex flex-col mb-16 space-y-4 text-center lg:text-left" animation="fade-in-up">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-[#b08b5c] font-semibold tracking-widest text-sm uppercase">
            <svg className="w-8 h-3 text-[#b08b5c]/70" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,5 Q10,0 20,5 T40,5" strokeLinecap="round" />
            </svg>
            <span>Our Accommodation</span>
          </div>
          <h2 className="text-4xl md:text-5xl  text-zinc-900 dark:text-white font-serif">
            Luxury Suites & Rooms
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Vertical Navigation Tabs (Desktop) */}
          <ScrollReveal className="hidden lg:flex lg:col-span-4 flex-col space-y-3 pr-4 border-r border-zinc-100 dark:border-zinc-900" animation="fade-in-up">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex items-center text-left py-4 px-6 border-l-2 transition-all duration-300 group focus:outline-none cursor-pointer ${isActive
                    ? 'border-[#b08b5c] pl-8 bg-zinc-50 dark:bg-zinc-900/40'
                    : 'border-transparent hover:border-zinc-300 hover:pl-7 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20'
                    }`}
                >
                  <span className={`text-xs font-bold tracking-wider mr-4 transition-colors duration-300 ${isActive ? 'text-[#b08b5c]' : 'text-zinc-400 group-hover:text-zinc-600'
                    }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${isActive
                    ? 'text-zinc-900 dark:text-white font-serif font-bold'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                    }`}>
                    {tab}
                  </span>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Horizontal Scrollable Tabs (Mobile & Tablet) */}
          <ScrollReveal className="lg:hidden flex overflow-x-auto pb-4 gap-4 scrollbar-none mb-4 -mx-4 px-4" animation="fade-in-up">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-450'
                    }`}
                >
                  <span className="mr-1.5 opacity-60">0{idx + 1}</span>
                  {tab}
                </button>
              );
            })}
          </ScrollReveal>

          {/* Right Side: Cinematic Room Showcase Panel */}
          <ScrollReveal className="lg:col-span-8" animation="fade-in-up" delay={200}>
            <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
              }`}>
              <div className="bg-[#EAD8C6]/10 dark:bg-zinc-900/40    p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 overflow-hidden ">

                {/* Left Section: Image Display */}
                <div className="md:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md group/img">
                  <img
                    src={currentListing?.image}
                    alt={currentListing?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  {/* Floating Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-zinc-100 dark:border-zinc-800">
                    <Star className="w-3.5 h-3.5 text-[#b08b5c] fill-[#b08b5c]" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">{currentListing?.rating}</span>
                  </div>
                </div>

                {/* Right Section: Details Description */}
                <div className="md:col-span-6 flex flex-col justify-between py-2">
                  <div className="space-y-4">
                    <p className="text-xs font-bold tracking-widest text-[#b08b5c] uppercase">DWS Hotel Portfolio</p>
                    <h3 className="text-2xl md:text-3xl  text-zinc-900 dark:text-white leading-snug font-serif">
                      {currentListing?.title}
                    </h3>
                    <div className="pt-2 border-b border-zinc-200/50 dark:border-zinc-800/60 pb-4">
                      <span className="text-xl font-bold text-zinc-900 dark:text-white">{currentListing?.price}</span>
                      <span className="text-xs text-zinc-400 block mt-1">{currentListing?.tax}</span>
                    </div>
                  </div>

                  {/* 2x2 Info Details Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 my-6">
                    {currentListing?.basicInfo.map((info, idx) => {
                      // Custom SVG Icon selection
                      let icon = (
                        <svg className="w-5 h-5 text-[#b08b5c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="9" cy="9" r="2" />
                        </svg>
                      );
                      if (info.label.includes('Room')) {
                        icon = (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 4v16M22 4v16M2 8h20M2 17h20" />
                            <rect x="6" y="8" width="12" height="6" rx="1" />
                          </svg>
                        );
                      } else if (info.label.includes('Bathroom')) {
                        icon = (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 6a3 3 0 1 1 6 0M4 12h16M2 19h20M7 12v7M17 12v7" />
                          </svg>
                        );
                      } else if (info.label.includes('Internet')) {
                        icon = (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5a10 10 0 0 1 14 0" />
                            <path d="M8.5 16a6 6 0 0 1 7 0" />
                            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                          </svg>
                        );
                      } else if (info.label.includes('Parking')) {
                        icon = (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="8" rx="2" />
                            <path d="M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
                          </svg>
                        );
                      }

                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#b08b5c]/10 rounded-xl text-[#b08b5c]">
                            {icon}
                          </div>
                          <div>
                            <span className="text-[11px] text-zinc-400 block tracking-wide">{info.label}</span>
                            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{info.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 mt-2">
                    <Link href={`/rooms/${currentListing?.id}`} className="flex-1">
                      <button className="w-full py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-850 dark:hover:bg-zinc-100 text-sm font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
                        Explore & Book
                        <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-300 text-base">→</span>
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

