"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { memo } from "react";

const HeroContent = memo(() => (
  <div className="space-y-12 max-w-6xl z-40 relative animate-fade-in">
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

    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fade-in-delay">
      <Button
        size="lg"
        className="rounded-full border border-white/40 bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm px-10 h-14 font-medium"
        asChild
      >
        <Link href="/contact">Get in touch</Link>
      </Button>

    </div>
  </div>
));

HeroContent.displayName = 'HeroContent';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-16">


      {/* Simplified grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\")",
          filter: "contrast(170%) brightness(1000%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-20" />

      <HeroContent />
    </section>
  );
}
