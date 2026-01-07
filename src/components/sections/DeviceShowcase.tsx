"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function DeviceShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // iPhone animations - bottom left
    const iphoneScale = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.6, 1, 1]);
    const iphoneOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.8, 1]);
    const iphoneY = useTransform(scrollYProgress, [0, 0.5], [150, 0]);
    const iphoneX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-32"
        >
            {/* Ambient background with depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

            {/* Radial glow from center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black" />

            {/* Scene 1 - Static Right Side - Full Width */}
            <div
                className="absolute z-10 right-0 top-0 bottom-0 w-[65%] overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to left, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.8) 20%, black 30%, black 70%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.4) 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskImage: "linear-gradient(to left, black 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.8) 20%, black 30%, black 70%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.4) 90%, transparent 100%)",
                    WebkitMaskComposite: "source-in"
                }}
            >
                <div className="relative w-full h-full">
                    {/* Sharp main image */}
                    <Image
                        src="/mockups/Scene 1.png"
                        alt="Device Mockup Scene"
                        fill
                        quality={75}
                        priority={false}
                        loading="lazy"
                        className="object-contain object-right drop-shadow-2xl"
                    />
                    {/* Simplified glow effect */}
                    <div className="absolute inset-0 bg-purple-500/10 blur-2xl -z-10" />
                </div>
            </div>

            {/* Device container */}
            <div className="relative w-full max-w-7xl mx-auto px-8 h-[700px] flex items-end justify-center pb-20">

                {/* iPhone - Bottom Left */}
                <motion.div
                    style={{
                        scale: iphoneScale,
                        opacity: iphoneOpacity,
                        x: iphoneX,
                        y: iphoneY,
                    }}
                    className="absolute z-30 left-[-2%] bottom-[-8%]"
                >
                    <div className="relative w-[400px] h-[800px]">
                        <Image
                            src="/mockups/iMockup - iPhone 15 Pro Max.png"
                            alt="iPhone 17 Pro Max Mockup"
                            fill
                            quality={75}
                            priority={false}
                            loading="lazy"
                            className="object-contain drop-shadow-2xl"
                        />
                        {/* Simplified glow effect */}
                        <div className="absolute inset-0 bg-blue-500/15 blur-2xl -z-10" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
