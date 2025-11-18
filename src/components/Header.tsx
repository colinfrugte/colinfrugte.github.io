import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({
  onNavigate,
}: {
  onNavigate: (
    section: "introduction" | "projects" | "about" | "contact"
  ) => void;
}) {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative py-1 text-sm text-gray-800 hover:text-gray-900 transition-colors text-lg dark:text-white";

  const underline =
    "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left \
   after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/20">
      <div className="mx-auto px-12">
        <div className="">
          <nav className="hidden h-14 md:flex items-center justify-between font-extrabold">
            <button
              onClick={() => onNavigate("introduction")}
              className={`${linkBase} ${underline}`}
            >
              Colin Frugte
            </button>
            <div className="space-x-6">
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
                Über mich
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className={`${linkBase} ${underline}`}
              >
                Kontakt
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
        {open && (
          <div className="fixed inset-0 z-50 bg-white/50 backdrop-blur px-8 py-10">
            <nav className="flex flex-col space-y-4 items-start text-2xl">
              <button
                className="  rounded-md transition duration-150 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-safe:transform"
                onClick={() => {
                  onNavigate("projects");
                  setOpen(false);
                }}
              >
                Projekte
              </button>
              <button
                className="  rounded-md transition duration-150 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-safe:transform"
                onClick={() => {
                  onNavigate("about");
                  setOpen(false);
                }}
              >
                Über mich
              </button>
              <button
                className="  rounded-md transition duration-150 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-safe:transform"
                onClick={() => {
                  onNavigate("contact");
                  setOpen(false);
                }}
              >
                Kontakt
              </button>
            </nav>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-2xl"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
