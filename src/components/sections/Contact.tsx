"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden bg-black">
            <div className="max-w-md mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-heading font-bold mb-4 uppercase tracking-tighter">Ready to build?</h2>
                    <p className="text-gray-400 mb-8 font-light">Let's turn your idea into a reality.</p>

                    <div className="space-y-4">


                        <Button size="lg" className="w-full rounded-none border border-white hover:bg-white hover:text-black transition-all" asChild>
                            <a href="mailto:chizel.dev@gmail.com">
                                <Mail className="mr-2 w-4 h-4" /> chizel.dev@gmail.com
                            </a>
                        </Button>

                        <p className="text-xs text-gray-500 pt-2 tracking-widest uppercase">Typically responds within 24 hours.</p>
                    </div>

                    <div className="flex justify-center gap-6 mt-12 text-sm text-gray-400 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Upwork</a>
                        <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Fiverr</a>
                        <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">LinkedIn</a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-24 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} Chizel. All rights reserved.
            </footer>
        </section>
    );
}
