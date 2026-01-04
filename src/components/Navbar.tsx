"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#projects", label: "Works" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "glass border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                    >
                        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black font-bold text-lg">C</span>
                        </div>
                        <span className="text-lg font-semibold">Chizel</span>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-normal"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Theme Toggle + CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Toggle theme"
                        >
                            <div className={`w-5 h-5 rounded-full transition-colors ${isDark ? 'bg-white' : 'bg-gray-400'}`} />
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 border border-white/30 rounded-full text-sm text-white hover:bg-white hover:text-black transition-all duration-300 font-normal"
                        >
                            Let's Connect
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white/70 hover:text-white transition-colors"
                        aria-label="Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
