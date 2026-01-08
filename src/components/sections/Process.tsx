"use client";

import { motion } from "framer-motion";

const steps = [
    { number: "01", title: "Understand", desc: "We start by deeply understanding your problem and goals." },
    { number: "02", title: "Design & Build", desc: "We craft the interface and build the core functionality." },
    { number: "03", title: "Test & Refine", desc: "Rigorous testing ensures everything works perfectly." },
    { number: "04", title: "Deliver", desc: "We launch your product and provide ongoing support." },
];

export function Process() {
    return (
        <section id="process" className="py-24 px-4 bg-black border-y border-white/10">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">Our Process</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative space-y-4 pt-8 border-t border-white/10"
                        >
                            <div className="text-sm font-light text-white/40 tracking-widest absolute -top-3 bg-black pr-2">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
