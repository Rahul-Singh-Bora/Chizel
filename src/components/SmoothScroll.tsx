"use client";

import { useEffect } from "react";

export function SmoothScroll() {
    useEffect(() => {
        // Dynamically import Lenis to avoid SSR issues
        (async () => {
            const Lenis = (await import("lenis")).default;

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false,
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        })();
    }, []);

    return null;
}
