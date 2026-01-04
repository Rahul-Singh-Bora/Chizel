"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "Analytics dashboard with real-time data visualization.",
        tags: ["Next.js", "Tailwind", "Recharts"],
        image: "bg-neutral-900"
    },
    {
        title: "SaaS Landing Page",
        description: "High-conversion landing page with smooth usage.",
        tags: ["React", "Framer Motion", "TypeScript"],
        image: "bg-neutral-800"
    },
    {
        title: "Portfolio Template",
        description: "Minimalist portfolio theme for creatives.",
        tags: ["Next.js", "Contentlayer", "MDX"],
        image: "bg-neutral-900"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 w-full bg-black">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">Selected Work</h2>
                    <span className="text-sm font-light tracking-widest uppercase text-gray-500 mb-2">01 — 03</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group border border-white/10 bg-black hover:border-white/40 transition-colors duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-64 w-full ${project.image} relative flex items-center justify-center border-b border-white/10`}>
                                <span className="text-white/20 font-heading text-lg font-bold tracking-widest uppercase">Sample Project</span>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-white transition-colors uppercase tracking-tight">{project.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 border border-white/20 text-gray-400 uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
