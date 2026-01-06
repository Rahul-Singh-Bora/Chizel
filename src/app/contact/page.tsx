"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // You can integrate with your backend or email service here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
                        Get In Touch
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6 uppercase tracking-tighter">
                                Contact Information
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out through any of these channels. We typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <Mail className="w-6 h-6 text-white mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a
                                        href="mailto:hello@chizel.co"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        hello@chizel.co
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <Phone className="w-6 h-6 text-white mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <a
                                        href="tel:+91 9635710104 / +91 8218116900"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        +91 9635710104 / +91 8218116900
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-white mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-gray-400">
                                        Working remotely worldwide
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Upwork
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Fiverr
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Back to Home Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                        <span>←</span> Back to Home
                    </Link>
                </motion.div>
            </div>

            <footer className="mt-24 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} Chizel. All rights reserved.
            </footer>
        </main>
    );
}
