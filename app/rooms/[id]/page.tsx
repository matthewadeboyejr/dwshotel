'use client';

import { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ROOMS } from '../../data/rooms';
import { Star, MapPin, Wifi, Wind, Tv, Coffee, ArrowUpRight, CheckCircle, Bath, BedDouble, Users, Maximize, Share2, Heart, Loader2, CreditCard } from 'lucide-react';
import Image from 'next/image';
import CommitmentSection from '@/app/components/CommitmentSection';
import Input from '@/app/components/ui/Input';
import { toast } from 'sonner';
import { MessageCircle } from 'lucide-react';

export default function RoomDetailsPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = Number(params.id);
    const room = ROOMS.find((r) => r.id === id);

    // State for dates — pre-fill from query params if coming from properties page
    const [checkInDate, setCheckInDate] = useState(searchParams.get('checkIn') || '');
    const [checkOutDate, setCheckOutDate] = useState(searchParams.get('checkOut') || '');

    // Removed API Availability Query as we are now an enquiry-based site
    const isLoading = false;
    const isFetching = false;
    const isAvailable = true; // Always allow enquiry
    const availabilityData = { data: 5 }; // Placeholder for UI if needed

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background text-black dark:text-white">
                <h1 className="text-4xl font-bold">Room not found</h1>
            </div>
        );
    }



    const today = new Date().toISOString().split('T')[0];

    const [numberOfRooms, setNumberOfRooms] = useState(1);

    const calculateNights = () => {
        if (!checkInDate || !checkOutDate) return 0;
        const start = new Date(checkInDate);
        const end = new Date(checkOutDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays || 1; // Default to 1 night if same day selected provided min date logic handles it
    };

    const calculateTotal = () => {
        const pricePerNight = Number(room.price.replace(/[^0-9]/g, ''));
        const nights = calculateNights();
        const roomTotal = pricePerNight * nights * numberOfRooms;
        const cleaningFee = 0; // Keeping as 0 based on previous code
        const serviceFee = 0; // Keeping as 0 based on previous code
        return {
            roomTotal,
            cleaningFee,
            serviceFee,
            grandTotal: roomTotal + cleaningFee + serviceFee
        };
    };

    const totals = calculateTotal();

    const handleEnquiry = () => {
        const message = `Hello DWS Hotels, I'm interested in booking the ${room.title} (${room.category}).

Details:
- Check-in: ${checkInDate || 'Not selected'}
- Check-out: ${checkOutDate || 'Not selected'}
- Number of Rooms: ${numberOfRooms}
- Total Price Estimate: NGN ${totals.grandTotal.toLocaleString()}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/2349040663871?text=${encodedMessage}`, '_blank');
        toast.success("Opening WhatsApp...");
    };

    const isProcessing = false;

    return (
        <div className="min-h-screen bg-white dark:bg-background text-black dark:text-foreground font-sans">
            {/* Hero Header */}
            <div className="bg-gray-50 dark:bg-zinc-900 pt-32 pb-12">
                <div className="mx-4 md:mx-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium uppercase tracking-widest mb-4">
                                <span>Home</span>
                                <span className="text-gray-300 dark:text-gray-600">/</span>
                                <span>Rooms</span>
                                <span className="text-gray-300 dark:text-gray-600">/</span>
                                <span className="text-black dark:text-white">{room.category}</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-white mb-2">{room.title}</h1>
                            <div className="flex items-center gap-4 text-gray-500">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Abraka, Delta State</span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="font-bold text-black dark:text-white">{room.rating}</span>
                                    <span className="text-gray-400">(45 Reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                                <Share2 className="w-5 h-5 text-black dark:text-white" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                                <Heart className="w-5 h-5 text-black dark:text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px] rounded-3xl md:rounded-[2rem] overflow-hidden relative">
                        {/* Main Large Image */}
                        <div className="md:col-span-2 md:row-span-2 relative h-[300px] md:h-full">
                            <Image src={room.image} alt={room.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* Smaller Images */}
                        {room.images.slice(1, 5).map((img, idx) => (
                            <div key={idx} className="relative h-[150px] md:h-full min-h-[150px]">
                                <Image src={img} alt={`${room.title} view ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        ))}

                        {/* Sticky Price Tag */}
                        <div className="absolute bottom-8 right-8 bg-black text-white px-8 py-4 rounded-full shadow-2xl z-20 animate-bounce-slow">
                            <p className="text-sm uppercase tracking-widest text-gray-400">Start From</p>
                            <div className="text-2xl font-bold flex items-baseline gap-1">
                                {room.price}<span className="text-sm font-normal text-gray-400">/night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 md:mx-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-8 py-8 border-y border-gray-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Guests</p>
                                <p className="font-bold text-black dark:text-white">{room.stats.guests} Adults</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                                <BedDouble className="w-5 h-5 text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Bedroom</p>
                                <p className="font-bold text-black dark:text-white">{room.stats.bedrooms} Bed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                                <Bath className="w-5 h-5 text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Bathroom</p>
                                <p className="font-bold text-black dark:text-white">{room.stats.bathrooms} Bath</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                                <Maximize className="w-5 h-5 text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Area</p>
                                <p className="font-bold text-black dark:text-white">{room.stats.area}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">About this room</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {room.description}
                        </p>
                    </div>

                    {/* Amenities Grid */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Amenities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {room.features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-black dark:text-white">{feature.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder Map */}
                    <div className="rounded-4xl overflow-hidden h-[400px] relative bg-gray-200">
                        {/* In a real app, use Google Maps Embed here */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 bg-gray-100">
                            <MapPin className="w-12 h-12 text-gray-400" />
                            <p className="text-gray-500 font-medium">Abraka, Delta State</p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Sticky Booking Widget */}
                <div className="lg:col-span-1">
                    <div className="bg-black dark:bg-zinc-900 border dark:border-zinc-800 text-white rounded-2xl p-8 sticky top-32 ">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold">Booking</h3>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-white">{room.price}</p>
                                <p className="text-gray-400 text-sm">/night</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {/* Date Picker Inputs */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Check In</label>
                                    <input
                                        type="date"
                                        min={today}
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-sm p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Check Out</label>
                                    <input
                                        type="date"
                                        min={checkInDate || today}
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-sm p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Enquiry Message Header */}
                        {checkInDate && checkOutDate && (
                            <div className="p-4 rounded-xl mb-4 text-center bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                                <span className="font-bold">Ready to enquire for your stay?</span>
                            </div>
                        )}



                        {isAvailable ? (<>
                            <div className="space-y-4">
                                <div className="grid grid-cols- gap-4">
                                    <Input
                                        label="Number of Rooms"
                                        type="number"
                                        min={1}
                                        max={availabilityData?.data || 10}
                                        value={numberOfRooms}
                                        onChange={(e) => setNumberOfRooms(Number(e.target.value))}
                                        className="text-black"
                                    />
                                </div>
                            </div>

                            <hr className="border-gray-800" />

                            <div className="border-t border-gray-100 pt-6 space-y-3 mb-8">
                                <div className="flex justify-between text-white">
                                    <span>{calculateNights()} Nights x {numberOfRooms} Rooms</span>
                                    <span>NGN {totals.roomTotal.toLocaleString()}</span>
                                </div>


                                <div className="flex justify-between font-bold text-lg pt-4">
                                    <span>Total Estimate</span>
                                    <span>NGN {totals.grandTotal.toLocaleString()}</span>
                                </div>
                            </div>



                            <button
                                onClick={handleEnquiry}
                                className="w-full py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all bg-green-500 text-white hover:bg-[#20bd5a] group shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Enquire on WhatsApp
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </button>
                        </>
                        ) : ""}


                        <p className="text-center text-gray-400 text-xs mt-4">Immediate support available 24/7</p>
                    </div>
                </div>

            </div>

            <CommitmentSection />
        </div>
    );
}
