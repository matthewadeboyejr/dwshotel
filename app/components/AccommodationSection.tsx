'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function AccommodationSection() {
  const [activeTab, setActiveTab] = useState('Deluxe');

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

  return (
    <section className=" bg-white dark:bg-background py-16 mx-4 md:mx-20">
      <div className=" ">

        {/* Tabs */}
        <div className="flex flex-wrap justify-between items-center bg-gray-50 dark:bg-zinc-900 rounded-2xl p-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-8 py-4 text-sm font-medium rounded-xl transition-all duration-300 ${activeTab === tab
                ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800' // Added hover bg for better feedback
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="rounded-3xl p-6  bg-gray-50 dark:bg-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Image Section */}
            <div className="lg:col-span-4 relative h-[400px] lg:h-auto">
              <div className="absolute top-4 right-4 z-10 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 text-black fill-black" />
                <span className="text-xs font-bold text-black">{currentListing?.rating}</span>
              </div>
              <img
                src={currentListing?.image}
                alt={currentListing?.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Content Section */}
            <div className="lg:col-span-8 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

                {/* Column 1: Title & Host */}
                <div className="flex flex-col justify-between border-r border-gray-200 dark:border-zinc-800">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">DWS Hotel</p>
                    <h3 className="text-2xl font-bold text-black dark:text-white leading-tight mb-4">
                      {currentListing?.title}
                    </h3>
                  </div>
                  <Link href={`/rooms/${currentListing?.id}`} className="inline-flex items-center text-3xl  text-black dark:text-white hover:underline mt-auto">
                    View details
                    <span className="ml-1 bg-black dark:bg-white text-white dark:text-black rounded-full p-0.5 w-6 h-6 flex items-center justify-center text-2xl">↗</span>
                  </Link>
                </div>

                {/* Column 2: Price & Info */}
                <div className="flex flex-col bg-white dark:bg-zinc-800 p-6 rounded-2xl">
                  <div className="mb-8">
                    <h4 className="text-3xl font-bold text-black dark:text-white">{currentListing?.price}</h4>
                    <p className="text-xs text-gray-400 mt-1">{currentListing?.tax}</p>
                  </div>

                  <div className="mt-auto">
                    <h5 className="font-bold text-black dark:text-white text-sm mb-4">Basic Information</h5>
                    <div className="space-y-3">
                      {currentListing?.basicInfo.map((info, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-500 font-medium">{info.label}</span>
                          <span className="text-gray-400">{info.value}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/rooms/${currentListing?.id}`}>
                      <button className="px-4 py-4 w-full mt-4 bg-black dark:bg-white text-white dark:text-black text-lg font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        Book Now!
                      </button>
                    </Link>
                  </div>
                </div>




              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
