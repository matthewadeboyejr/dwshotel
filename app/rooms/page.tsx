'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import PremierBargain from '../components/PremierBargain';
import CommitmentSection from '../components/CommitmentSection';
import { ROOMS } from '../data/rooms';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function RoomsPage() {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Deluxe', 'Superior', 'Platinum', 'Business Class', 'Executive', 'Royal Suite',];

    const filteredRooms = activeTab === 'All'
        ? ROOMS
        : ROOMS.filter(room => room.category === activeTab);

    return (
        <div className="min-h-screen bg-white dark:bg-background">


            {/* Hero Section */}
            <div className="relative h-[60vh] bg-black text-white flex items-center justify-center overflow-hidden  ">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/superior-home.jpeg")' }}
                />
                <ScrollReveal className="relative z-20 text-center space-y-4 px-4" animation="fade-in-up">
                    <p className="text-sm font-bold tracking-widest uppercase text-gray-300">Discover Our Story</p>
                    <h1 className="text-5xl md:text-7xl font-bold">Rooms</h1>
                </ScrollReveal>
            </div>

            {/* Filter & Grid Section */}
            <section className="w-full bg-white dark:bg-background pb-32">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Container */}
                    <div className="bg-gray-100 dark:bg-[#111]  p-6 md:p-12 min-h-[800px]">

                        {/* Tabs */}
                        <ScrollReveal className="flex flex-wrap items-center justify-center gap-4 mb-16 border-b border-gray-300 dark:border-gray-800 pb-8" animation="fade-in-up">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat
                                        ? 'bg-black/90 dark:bg-black text-white shadow-lg shadow-blue-900/20'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </ScrollReveal>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRooms.map((room, idx) => (
                                <ScrollReveal key={room.id} animation="fade-in-up" delay={(idx % 6) * 100}>
                                    <RoomCard room={room} />
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Pagination / Load More */}
                        <ScrollReveal className="mt-20 flex justify-center" animation="fade-in-up">
                            <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                Load More Rooms
                            </button>
                        </ScrollReveal>



                    </div>
                </div>

            </section>


            <PremierBargain />
            <CommitmentSection />

        </div >
    );
}
