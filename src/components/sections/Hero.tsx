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
    }>
  >([]);

  useEffect(() => {
    // Generate aurora gradient blobs on client side only
    const colorSets = [
      [
        "rgba(99, 102, 241, 0.5)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(99, 102, 241, 0.5)",
      ], // Indigo to Violet
      [
        "rgba(168, 85, 247, 0.5)",
        "rgba(236, 72, 153, 0.5)",
        "rgba(168, 85, 247, 0.5)",
      ], // Purple to Pink
      [
        "rgba(236, 72, 153, 0.4)",
        "rgba(59, 130, 246, 0.4)",
        "rgba(236, 72, 153, 0.4)",
      ], // Pink to Blue
      [
        "rgba(59, 130, 246, 0.5)",
        "rgba(99, 102, 241, 0.5)",
        "rgba(59, 130, 246, 0.5)",
      ], // Blue to Indigo
      [
        "rgba(139, 92, 246, 0.5)",
        "rgba(168, 85, 247, 0.5)",
        "rgba(139, 92, 246, 0.5)",
      ], // Violet to Purple
    ];

    setAuroraBlobs(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        color: colorSets[i][0],
        x: [
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
        ],
        y: [
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
        ],
        scale: [1, 1.3, 0.9, 1.2, 1],
        size: i % 2 === 0 ? "w-[800px] h-[800px]" : "w-[700px] h-[700px]",
        duration: 20 + i * 3,
        delay: i * 1.5,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-16">
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
