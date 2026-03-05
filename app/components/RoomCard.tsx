'use client';

import Link from 'next/link';
import { ArrowUpRight, Maximize, User } from 'lucide-react';

interface RoomProps {
    id: number;
    category: string;
    image: string;
    date: string;
    title: string;
    price: string;
    rating: string;
    amenities: string[];
    availableCount?: number;
    checkIn?: string;
    checkOut?: string;
}

export default function RoomCard({ room }: { room: RoomProps }) {
    const href = room.checkIn && room.checkOut
        ? `/rooms/${room.id}?checkIn=${room.checkIn}&checkOut=${room.checkOut}`
        : `/rooms/${room.id}`;

    return (
        <Link href={href} className="group cursor-pointer block">
            {/* Image Card */}
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden mb-6">
                <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                {/* Availability Badge */}
                {room.availableCount !== undefined && room.availableCount > 0 && (
                    <div className="absolute top-6 right-6 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                        {room.availableCount} {room.availableCount === 1 ? 'Room' : 'Rooms'} Left!
                    </div>
                )}

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                        {room.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:underline decoration-2 underline-offset-4">
                        {room.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium mb-4">
                        {room.price}<span className="text-gray-400 text-xs">/night</span>
                    </p>

                    {/* Specs */}
                    <div className="flex items-center gap-4 text-gray-300 text-xs">
                        <div className="flex items-center gap-1">
                            <Maximize className="w-3 h-3" />
                            <span>350 sqft</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>2 Guests</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-between px-2">
                <span className="flex text-yellow-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(Number(room.rating)) ? 'fill-current' : 'text-gray-600'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </span>
                <button className="flex items-center gap-2 text-black dark:text-white text-sm font-bold group-hover:text-blue-500 transition-colors">
                    Explore More!
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ArrowUpRight className="w-3 h-3 text-white" />
                    </span>
                </button>
            </div>
        </Link>
    );
}
