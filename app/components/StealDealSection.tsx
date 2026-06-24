'use client';

import { useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function StealDealSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Deluxe Room for you',
      price: 'NGN40,000',
      period: '/night',
      image: '/deluxe-home.jpeg',
      location: 'DWS Hotel - Abraka',
      rating: '4.5/5',
      details: [
        { label: 'Total Rooms', value: '1 King + 2' },
        { label: 'Bathrooms', value: '3 Attached' },
        { label: 'Internet', value: '100Mbps' },
        { label: 'Covered Parking', value: 'Yes Two' },
      ]
    },
    {
      id: 4,
      title: 'Royal treatment specifically for you',
      price: 'NGN100,000',
      period: '/night',
      image: '/royal-home.jpeg',
      location: 'DWS Hotel - Abraka',
      rating: '5.0/5',
      details: [
        { label: 'Total Rooms', value: 'Master + 2' },
        { label: 'Bathrooms', value: '3 Ensuite' },
        { label: 'Internet', value: '1Gbps' },
        { label: 'Covered Parking', value: 'Private Garage' },
      ]
    },
    {
      id: 6,
      title: 'Platinum experience for premium guests',
      price: 'NGN50,000',
      period: '/night',
      image: '/platinum-home.jpeg',
      location: 'DWS Hotel - Abraka',
      rating: '4.9/5',
      details: [
        { label: 'Total Rooms', value: 'Penthouse' },
        { label: 'Bathrooms', value: '2 Luxury' },
        { label: 'Internet', value: '500Mbps' },
        { label: 'Covered Parking', value: 'Valet' },
      ]
    },
  ];

  // Auto-carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white dark:bg-background py-20">
      <div className="mx-4 md:mx-20">
        {/* Section Title */}
        <h2 className="text-4xl  md:text-6xl  text-black dark:text-foreground text-center mb-16">
          Steal Deal
        </h2>

        {/* Carousel Container */}
        <div className="relative group flex flex-col lg:block gap-6">
          {/* Main Image Card */}
          <div className="relative w-full h-[400px] md:h-[700px]  overflow-hidden order-1 lg:order-0">
            {/* Background Image with Transition */}
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Location Tag */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-sm z-10">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-black" />
              <span className="text-xs md:text-sm font-medium text-black">{slides[currentSlide].location}</span>
            </div>

            {/* Rating Tag (Image Overlay) */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:left-[60%] lg:right-auto bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full flex items-center gap-1 z-10">
              <Star className="w-3 h-3 fill-white dark:fill-black" />
              <span className="text-xs font-bold">{slides[currentSlide].rating}</span>
            </div>

            {/* Navigation Arrows */}
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg z-20"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg z-20 lg:right-16"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Floating Info Card */}
          <div className="relative order-2 lg:order-0 w-full lg:absolute lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl max-w-none lg:max-w-md lg:w-[450px] lg:min-h-[500px] mt-[-30px] lg:mt-0 z-30 mx-auto border border-gray-100 dark:border-zinc-800 lg:border-none">
            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl md:text-5xl font-bold text-black dark:text-white">{slides[currentSlide].price}</span>
                <span className="text-gray-400 text-sm md:text-lg">{slides[currentSlide].period}</span>
              </div>
              <h3 className="text-xl md:text-2xl  dark:text-white leading-tight">
                {slides[currentSlide].title}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {slides[currentSlide].details.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-800 pb-2 last:border-0">
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{detail.label}</span>
                  <span className="text-black dark:text-white font-bold text-sm text-right">{detail.value}</span>
                </div>
              ))}
            </div>

            <Link href={`/rooms/${slides[currentSlide].id}`}>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Reserve Now!
              </button>
            </Link>
            <p className="text-center text-gray-300 text-xs mt-4">
              Terms and Conditions Apply
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-black w-8' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
