import { Ween } from "@/components/main/ween";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Achievements } from "@/components/main/achievements";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
        <Ween />
      </div>
    </main>
  );
}
