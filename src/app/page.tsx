"use client";

import Header from "@/components/Header";
import Projects from "./Projects/page";
import Introduction from "./Introduction/page";
import About from "./About/AboutContent";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = {
    introduction: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
  };

  // Dynamische Scrollfunktion
  const handleScrollTo = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header onNavigate={handleScrollTo} />
      <div className="divide-y-2 divide-gray-500">
        <div ref={sectionRefs.introduction}>
          <Introduction />
        </div>
        <div ref={sectionRefs.projects}>
          <Projects />
        </div>
        <div ref={sectionRefs.about}>
          <About />
        </div>
      </div>
    </main>
  );
}
