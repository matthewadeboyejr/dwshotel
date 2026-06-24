'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommitmentSection from '../components/CommitmentSection';
import Image from 'next/image';
import { Award, Users, Globe, Shield } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            <div className="relative h-[60vh] bg-black text-white flex items-center justify-center overflow-hidden  ">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/superior-home.jpeg")' }}
                />
                <ScrollReveal className="relative z-20 text-center space-y-4 px-4" animation="fade-in-up">
                    <p className="text-sm font-bold tracking-widest uppercase text-gray-300">Discover Our Story</p>
                    <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
                </ScrollReveal>
            </div>

            {/* Our Story Intro */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal className="space-y-8" animation="fade-in-up">
                        <h2 className="text-4xl md:text-5xl leading-tight">
                            Redefining Luxury and Comfort in Abraka
                        </h2>
                        <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                            <p>
                                Welcome to DWS Hotel, where hospitality meets elegance. Since our inception, we have been dedicated to providing an exceptional experience for travelers seeking comfort, style, and personalized service.
                            </p>
                            <p>
                                Located in the heart of Delta State, our hotel serves as a sanctuary for both leisure and business travelers. We believe that every stay should be memorable, which is why we meticulously curate every detail of your experience, from our premium amenities to our dedicated staff.
                            </p>
                            <p>
                                Whether you are here for a weekend getaway or a business conference, DWS Hotel offers the perfect blend of modern luxury and warm, authentic Nigerian hospitality.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal className="relative h-[400px] md:h-[600px]  overflow-hidden shadow-2xl" animation="fade-in-up" delay={200}>
                        <Image
                            src="/deluxe-home.jpeg"
                            alt="Hotel Interior"
                            fill
                            className="object-cover"
                        />
                    </ScrollReveal>
                </div>
            </div>

            {/* Stats / Why Choose Us */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ScrollReveal className="space-y-2 text-center" animation="fade-in-up" delay={0}>
                            <h3 className="text-5xl font-bold text-black">1+</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Years of Service</p>
                        </ScrollReveal>
                        <ScrollReveal className="space-y-2 text-center" animation="fade-in-up" delay={100}>
                            <h3 className="text-5xl font-bold text-black">20+</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Luxury Rooms</p>
                        </ScrollReveal>
                        <ScrollReveal className="space-y-2 text-center" animation="fade-in-up" delay={200}>
                            <h3 className="text-5xl font-bold text-black">1k+</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Happy Guests</p>
                        </ScrollReveal>
                        <ScrollReveal className="space-y-2 text-center" animation="fade-in-up" delay={300}>
                            <h3 className="text-5xl font-bold text-black">4.9</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Rating</p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Mission & Values */}
            <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" animation="fade-in-up">
                    <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
                    <p className="text-gray-600 text-lg">
                        We are driven by a commitment to excellence in everything we do. Our values shape the way we serve our guests and interact with our community.
                    </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollReveal className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-white group" animation="fade-in-up" delay={0}>
                        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 border-2 border-black group-hover:bg-white group-hover:text-black transition-colors">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We strive for perfection in every service we provide, ensuring that every guest leaves with a smile and a desire to return.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-white group" animation="fade-in-up" delay={150}>
                        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 border-2 border-black group-hover:bg-white group-hover:text-black transition-colors">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Trust is the foundation of our business. We operate with transparency, honesty, and a deep respect for our guests and staff.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-white group" animation="fade-in-up" delay={300}>
                        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 border-2 border-black group-hover:bg-white group-hover:text-black transition-colors">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Community</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are proud to be part of the Abraka community. We believe in giving back and creating a welcoming space for locals and visitors.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <CommitmentSection />

        </div>
    );
}
