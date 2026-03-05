'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import CommitmentSection from '../components/CommitmentSection';
import { ROOMS } from '../data/rooms';
import { useGetAvailabilityQuery } from '@/app/lib/redux/services/api';
import { Calendar, Search, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface AvailabilityItem {
    Category: string;
    Rooms: number;
}

interface AvailabilityResponse {
    status: string;
    message: string;
    data: AvailabilityItem[];
}

export default function PropertiesPage() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [searchTerms, setSearchTerms] = useState<{ arrival: string; departure: string } | null>(null);

    const { data: availabilityData, isLoading, isError } = useGetAvailabilityQuery(
        searchTerms || { arrival: '', departure: '' },
        { skip: !searchTerms }
    );

    const handleSearch = () => {
        if (!checkIn || !checkOut) {
            toast.warning('Please select both Check-in and Check-out dates.');
            return;
        }
        setSearchTerms({ arrival: checkIn, departure: checkOut });
    };

    // Filter Logic
    let filteredRooms = ROOMS;
    let noRoomsFound = false;

    // Helper map to store availability count per category
    const availabilityMap: { [key: string]: number } = {};

    if (searchTerms && availabilityData?.data) {
        // cast data to AvailabilityItem[] - assuming API returns consistent structure locally matching my interface
        const availableItems = (availabilityData.data as AvailabilityItem[])
            .filter(item => item.Rooms > 0);

        // Populate map for easy lookup
        availableItems.forEach(item => {
            availabilityMap[item.Category.toUpperCase()] = item.Rooms;
        });

        const availableCategoryNames = availableItems.map(item => item.Category.toUpperCase());

        filteredRooms = ROOMS.filter(room =>
            availableCategoryNames.includes(room.category.toUpperCase())
        );

        if (filteredRooms.length === 0) {
            noRoomsFound = true;
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-background">


            {/* Hero / Search Section */}
            <div className="relative bg-black text-white py-24 px-4 md:px-8 rounded-4xl mx-4 md:mx-20">
                <div className="absolute inset-0 bg-neutral-900/90 z-0 rounded-4xl mx-4 md:mx-20 "></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                    style={{ backgroundImage: 'url("/superior-home.jpeg")' }}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Book Your Stay</h1>
                        <p className="text-gray-300 text-lg">Find the perfect room for your dates</p>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-4xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 w-full relative">
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-4 mb-1">Check In</label>
                            <div className="flex items-center px-4 bg-gray-50 dark:bg-zinc-800 rounded-xl h-14 border border-gray-100 dark:border-zinc-700 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                <input
                                    type="date"
                                    className="bg-transparent w-full outline-none text-black dark:text-white font-medium"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-4 mb-1">Check Out</label>
                            <div className="flex items-center px-4 bg-gray-50 dark:bg-zinc-800 rounded-xl h-14 border border-gray-100 dark:border-zinc-700 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                <input
                                    type="date"
                                    className="bg-transparent w-full outline-none text-black dark:text-white font-medium"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    min={checkIn || new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto px-8 h-20 md:h-full bg-black dark:bg-white text-white dark:text-black rounded-3xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex flex-col items-center justify-center md:mt-5 py-4 "
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Check Availability'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

                {searchTerms && !isLoading && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-black dark:text-white">
                            Availability for <span className="text-blue-600">{searchTerms.arrival}</span> to <span className="text-blue-600">{searchTerms.departure}</span>
                        </h2>
                    </div>
                )}

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 animate-spin text-black dark:text-white mb-4" />
                        <p className="text-gray-500">Checking room availability...</p>
                    </div>
                ) : (
                    <>
                        {noRoomsFound ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-gray-500 mb-4">No rooms available for the selected dates.</p>
                                <button
                                    onClick={() => { setCheckIn(''); setCheckOut(''); setSearchTerms(null); }}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    Clear Search
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredRooms.map((room) => (
                                    <RoomCard
                                        key={room.id}
                                        room={{
                                            ...room,
                                            availableCount: searchTerms ? availabilityMap[room.category.toUpperCase()] : undefined,
                                            checkIn: searchTerms?.arrival,
                                            checkOut: searchTerms?.departure
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <CommitmentSection />

        </div>
    );
}
