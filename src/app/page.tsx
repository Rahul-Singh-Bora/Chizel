import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";

// Lazy load heavy components
const DeviceShowcase = dynamic(() => import("@/components/sections/DeviceShowcase").then(mod => ({ default: mod.DeviceShowcase })), {
  loading: () => <div className="min-h-screen bg-black" />
});
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-[50vh] bg-black" />
});
const Process = dynamic(() => import("@/components/sections/Process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="min-h-[50vh] bg-black" />
});
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-[50vh] bg-black" />
});
const Technologies = dynamic(() => import("@/components/sections/Technologies").then(mod => ({ default: mod.Technologies })));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <DeviceShowcase />
      <Technologies />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
