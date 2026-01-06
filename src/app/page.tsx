import { Hero } from "@/components/sections/Hero";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Technologies } from "@/components/sections/Technologies";
import { Services } from "@/components/sections/Services";

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
