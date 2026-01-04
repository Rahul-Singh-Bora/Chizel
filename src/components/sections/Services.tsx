"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Smartphone } from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Web Development",
        description: "Fast, responsive websites built with modern frameworks like Next.js."
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Web Applications",
        description: "Complex functionality wrapped in simple, intuitive user interfaces."
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "UI-Focused Builds",
        description: "Pixel-perfect implementation of designs with smooth interactions."
    }
];

export function Services() {
    return (
        <section className="py-24 px-4 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-12 space-y-8 hover:bg-white/5 transition-colors group"
                        >
                            <div className="text-white/40 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-normal uppercase tracking-wide text-white">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm font-light tracking-wide">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
