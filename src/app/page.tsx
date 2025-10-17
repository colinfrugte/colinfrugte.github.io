"use client";

import Header from "@/components/Header";
import Projects from "./Projects/page";
import Introduction from "./Introduction/page";
import About from "./About/page";
import { useRef } from "react";
import Contact from "./Contact/page";

export default function Home() {
  const sectionRefs = {
    introduction: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Dynamische Scrollfunktion
  const handleScrollTo = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onNavigate={handleScrollTo} />
      <main className="lg:h-screen snap-y snap-mandatory overflow-y-scroll">
        <div className="lg:divide-y-2 lg:divide-gray-500">
          <div ref={sectionRefs.introduction}>
            <Introduction />
          </div>
          <div ref={sectionRefs.projects}>
            <Projects />
          </div>
          <div ref={sectionRefs.about}>
            <About />
          </div>
          <div ref={sectionRefs.contact}>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
