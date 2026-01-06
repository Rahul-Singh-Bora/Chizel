"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isFlipping, setIsFlipping] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const cardRef2 = useRef<HTMLDivElement>(null);
    
    // First card motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 300,
        damping: 30
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 300,
        damping: 30
    });

    // Second card motion values
    const mouseX2 = useMotionValue(0);
    const mouseY2 = useMotionValue(0);
    
    const rotateX2 = useSpring(useTransform(mouseY2, [-0.5, 0.5], [10, -10]), {
        stiffness: 300,
        damping: 30
    });
    const rotateY2 = useSpring(useTransform(mouseX2, [-0.5, 0.5], [-10, 10]), {
        stiffness: 300,
        damping: 30
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef2.current) return;
        const rect = cardRef2.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX2.set(x);
        mouseY2.set(y);
    };

    const handleMouseLeave2 = () => {
        mouseX2.set(0);
        mouseY2.set(0);
    };

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
        <main className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    {/* Contact Form with Liquid Glass Effect and Book Animation */}
                    <motion.div
                        ref={cardRef}
                        initial={{ opacity: 0, rotateY: -15 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ 
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        style={{
                            perspective: 1000,
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative group"
                    >
                        {/* Contact Form Card */}
                        <div className="relative rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-xl p-8 md:p-10">
                                
                                <motion.form 
                                    onSubmit={handleSubmit} 
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
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
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                                                placeholder="Your name"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
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
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
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
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                                                placeholder="Project inquiry"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                        >
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
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-white via-white to-gray-100 text-black font-medium rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                                    >
                                        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <span className="relative z-10">Send Message</span>
                                    </motion.button>
                                </motion.form>
                        </div>
                    </motion.div>

                    {/* Contact Information - Also with Glass Effect */}
                    <motion.div
                        ref={cardRef2}
                        initial={{ opacity: 0, rotateY: 15 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ 
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2
                        }}
                        style={{
                            perspective: 1000,
                            rotateX: rotateX2,
                            rotateY: rotateY2,
                            transformStyle: "preserve-3d"
                        }}
                        onMouseMove={handleMouseMove2}
                        onMouseLeave={handleMouseLeave2}
                        className="space-y-8"
                    >
                        <div className="relative rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-xl p-8 md:p-10">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 uppercase tracking-tighter">
                                        Contact Information
                                    </h2>
                                    <p className="text-gray-400 mb-8">
                                        Feel free to reach out through any of these channels. We typically respond within 24 hours.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="p-3 rounded-xl bg-white/10">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <a
                                                href="mailto:hello@chizel.co"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                hello@chizel.co
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="p-3 rounded-xl bg-white/10">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <a
                                                href="tel:+91 9635710104 / +91 8218116900"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                +91 9635710104 / +91 8218116900
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="p-3 rounded-xl bg-white/10">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Location</h3>
                                            <p className="text-gray-400">
                                                Working remotely worldwide
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="pt-8 mt-8 border-t border-white/10"
                                >
                                    <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
                                        Follow Us
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            Upwork
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            Fiverr
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            LinkedIn
                                        </motion.a>
                                    </div>
                                </motion.div>
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
