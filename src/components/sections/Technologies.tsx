"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const technologies = [
    {
        name: "Webflow",
        icon: "/assets/webflow.svg",
    },
    {
        name: "Flutter",
        icon: "/assets/flutter-svgrepo-com.svg",
    },
    {
        name: "Figma",
        icon: "/assets/figma-svgrepo-com.svg",
    },
    {
        name: "Blender",
        icon: "/assets/blender-svgrepo-com.svg",
    },
    {
        name: "TensorFlow",
        icon: "/assets/tensorflow-svgrepo-com.svg",
    },
    {
        name: "Notion",
        icon: "/assets/notion-svgrepo-com.svg",
    },
    {
        name: "Adobe",
        icon: "/assets/adobe-svgrepo-com.svg",
    },
    {
        name: "Next.js",
        icon: "/assets/next-dot-js-svgrepo-com.svg",
    },
];

const TechnologyItem = memo(({ tech, index }: { tech: typeof technologies[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="flex items-center gap-1.5 group cursor-pointer"
    >
        <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                loading="lazy"
                className="w-full h-full invert brightness-0 group-hover:opacity-80 transition-opacity duration-300"
            />
        </div>
        <span className="text-2xl font-semibold text-white tracking-tight group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
            {tech.name === "Blender" ? "blender" : tech.name}
        </span>
    </motion.div>
));

TechnologyItem.displayName = "TechnologyItem";

export function Technologies() {
    return (
        <section className="w-full bg-black pb-10 px-4 overflow-hidden relative">
            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-11 items-center justify-items-center">
                    {technologies.map((tech, index) => (
                        <TechnologyItem key={tech.name} tech={tech} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
