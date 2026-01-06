"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const [auroraBlobs, setAuroraBlobs] = useState<
    Array<{
      id: number;
      color: string;
      x: number[];
      y: number[];
      scale: number[];
      size: string;
      duration: number;
      delay: number;
      opacity: number;
      blur: string;
    }>
  >([]);

  useEffect(() => {
    // Generate liquid light blobs with vibrant colors
    const liquidBlobs = [
      {
        id: 0,
        color: '#FF3B3B', // Vibrant Red
        size: 'w-[700px] h-[700px]',
        blur: 'blur(100px)',
        x: [-200, 100, -150, 200, -200],
        y: [-100, 150, -50, 100, -100],
        scale: [1, 1.2, 0.9, 1.1, 1],
        duration: 25,
        delay: 0,
        opacity: 0.7,
      },
      {
        id: 1,
        color: '#1A1F3A', // Dark Navy
        size: 'w-[900px] h-[900px]',
        blur: 'blur(120px)',
        x: [300, -100, 250, -200, 300],
        y: [100, -150, 200, -100, 100],
        scale: [1, 1.3, 1, 1.2, 1],
        duration: 30,
        delay: 2,
        opacity: 0.8,
      },
      {
        id: 2,
        color: '#2E5EFF', // Electric Blue
        size: 'w-[600px] h-[600px]',
        blur: 'blur(90px)',
        x: [-300, 200, -250, 150, -300],
        y: [200, -100, 150, -150, 200],
        scale: [1, 1.1, 1.3, 0.9, 1],
        duration: 22,
        delay: 4,
        opacity: 0.6,
      },
      {
        id: 3,
        color: '#FFD93D', // Golden Yellow
        size: 'w-[500px] h-[500px]',
        blur: 'blur(80px)',
        x: [150, -250, 100, -200, 150],
        y: [-200, 100, -150, 150, -200],
        scale: [1, 1.2, 1, 1.3, 1],
        duration: 20,
        delay: 1,
        opacity: 0.65,
      },
      {
        id: 4,
        color: '#FF3B3B', // Vibrant Red (second blob)
        size: 'w-[800px] h-[800px]',
        blur: 'blur(110px)',
        x: [250, -150, 200, -100, 250],
        y: [-150, 200, -100, 180, -150],
        scale: [1, 0.9, 1.2, 1, 1],
        duration: 28,
        delay: 3,
        opacity: 0.7,
      },
      {
        id: 5,
        color: '#2E5EFF', // Electric Blue (second blob)
        size: 'w-[750px] h-[750px]',
        blur: 'blur(95px)',
        x: [-100, 300, -50, 250, -100],
        y: [150, -200, 100, -150, 150],
        scale: [1, 1.1, 1.2, 0.95, 1],
        duration: 24,
        delay: 5,
        opacity: 0.65,
      },
      {
        id: 6,
        color: '#1A1F3A', // Dark Navy (second blob)
        size: 'w-[650px] h-[650px]',
        blur: 'blur(105px)',
        x: [100, -200, 150, -250, 100],
        y: [-100, 150, -200, 100, -100],
        scale: [1, 1.25, 0.95, 1.15, 1],
        duration: 26,
        delay: 1.5,
        opacity: 0.75,
      },
    ];

    setAuroraBlobs(liquidBlobs as any);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-16">
      {/* Liquid Light Background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      >
        {auroraBlobs.map((blob) => (
          <motion.div
            key={blob.id}
            className={`absolute ${blob.size} rounded-full`}
            style={{
              backgroundColor: blob.color,
              opacity: blob.opacity,
              left: '50%',
              top: '50%',
              filter: blob.blur,
            }}
            animate={{
              x: blob.x,
              y: blob.y,
              scale: blob.scale,
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: blob.delay,
            }}
          />
        ))}
      </div>

      {/* Noise/Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\")",
          filter: "contrast(170%) brightness(1000%)",
          mixBlendMode: "overlay",
        }}
      />



      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="space-y-12 max-w-6xl z-40 relative"
      >
        <span className="ext-2xl md:text-4xl lg:text-xl leading-[0.95] relative block mb-16">
          Interfaces That Scale
        </span>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] relative">
            <span className="font-heading font-bold tracking-tighter text-white uppercase">
              From{" "}
            </span>
            <span className="font-serif italic font-light text-white tracking-tight">
              interface
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] relative">
            <span className="font-serif italic font-light text-white tracking-tight">
              to{" "}
            </span>
            <span className="font-heading font-bold tracking-tighter text-white uppercase">
              application.
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] relative">
            <span className="font-heading font-bold tracking-tighter text-white uppercase">
              Done{" "}
            </span>
            <span className="font-serif italic font-light text-white tracking-tight">
              right.
            </span>
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl text-gray-300 font-bold-200 tracking-wide max-w-3xl mx-auto pt-4">
          Premium Apps crafted for bold brands.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-12"
        >
          <Button
            size="lg"
            className="rounded-full border border-white/40 bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm px-10 h-14 font-medium"
            asChild
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-zinc-800/80 text-white backdrop-blur-md hover:bg-zinc-700 transition-all duration-300 text-sm px-10 h-14 font-medium"
            asChild
          >
            <Link href="#projects">See our work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
