'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommitmentSection from '../components/CommitmentSection';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function ContactPage() {
    const handleWhatsAppClick = () => {
        // Replace with actual number
        window.open('https://wa.me/+2349040663871', '_blank');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background">


            {/* Hero Section */}
            <div className="relative h-[60vh] bg-black text-white flex items-center justify-center overflow-hidden  ">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/superior-home.jpeg")' }} // Using existing image
                />
                <ScrollReveal className="relative z-20 text-center space-y-4 px-4" animation="fade-in-up">
                    <p className="text-sm font-bold tracking-widest uppercase text-gray-300">Get in Touch</p>
                    <h1 className="text-5xl md:text-7xl font-bold">Contact Us</h1>
                </ScrollReveal>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Information Column */}
                    <ScrollReveal className="space-y-12" animation="fade-in-up">
                        <div>
                            <h2 className="text-4xl  mb-6 text-black dark:text-white">We'd love to hear from you</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                Whether you have a question about our rooms, pricing, need a reservation, or anything else, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-black dark:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-black dark:text-white">Visit Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Abraka, Delta State, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-black dark:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-black dark:text-white">Call Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+234 904 066 3871</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Mon-Sund 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-black dark:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-black dark:text-white">Chat to us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Our friendly team is here to help.</p>
                                    <a href="mailto:infodws@gmail.com" className="text-black dark:text-white font-bold mt-1 block">infodws@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* WhatsApp Action Column (Replacing Form) */}
                    <ScrollReveal className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col justify-center text-center space-y-8" animation="fade-in-up" delay={200}>
                        <div>
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MessageCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl mb-4 text-black dark:text-white">Chat on WhatsApp</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base">
                                need immediate assistance? Start a conversation with our support team on WhatsApp for quick responses.
                            </p>
                        </div>

                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-[#25D366] text-white text-xl font-bold py-5 px-8 rounded-full hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Message us on WhatsApp
                        </button>

                        <p className="text-sm text-gray-500">
                            Typical response time: Under 5 minutes
                        </p>
                    </ScrollReveal>

                </div>
            </div>

            {/* Map Section */}
            <div className="h-[500px] w-full bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.046399437146!2d6.100912374984572!3d5.789173994196129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104199c072453667%3A0xe7c4c7c8c692881!2sAbraka%2C%20Delta!5e0!3m2!1sen!2sng!4v1706385482385!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <CommitmentSection />

        </div>
    );
}
