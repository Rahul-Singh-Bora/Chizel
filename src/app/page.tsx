import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Technologies />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
