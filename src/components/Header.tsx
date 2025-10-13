"use client";

import { useState } from "react";

export default function Header({
  onNavigate,
}: {
  onNavigate: (section: "introduction" | "projects" | "about") => void;
}) {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative px-3 py-1 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors text-lg";

  const underline =
    "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left \
   after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/20">
      <div className="mx-auto max-w-6xl px-8">
        <div>
          <nav className="h-14 flex items-center justify-between">
            <button
              onClick={() => onNavigate("introduction")}
              className={`${linkBase} ${underline}`}
            >
              Colin Frugte
            </button>
            <div className="">
              <button
                onClick={() => onNavigate("projects")}
                className={`${linkBase} ${underline}`}
              >
                Projekte
              </button>
              <button
                onClick={() => onNavigate("about")}
                className={`${linkBase} ${underline}`}
              >
                About
              </button>
            </div>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-foreground/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 5.25h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 5.25h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <div id="mobile-nav" className={open ? "md:hidden pb-3" : "hidden"}>
          <nav className="flex flex-col gap-3 text-sm">
            <a
              href="#projects"
              className="py-1 hover:opacity-80 transition-opacity"
            >
              Projekte
            </a>
            <a
              href="#about"
              className="py-1 hover:opacity-80 transition-opacity"
            >
              Über mich
            </a>
            <a
              href="#contact"
              className="py-1 hover:opacity-80 transition-opacity"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
