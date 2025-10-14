import Image from "next/image";

export default function Contact() {
  return (
    <div className="py-16 px-12 snap-start mt-16  relative isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center opacity-10" />
      </div>

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="w-full max-w-4xl rounded-3xl border border-foreground/10 bg-white/80 p-10 shadow-xl backdrop-blur dark:bg-gray-900/70">
          <div className="mb-10 space-y-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
              Kontakt
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Lass uns zusammenarbeiten
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-300">
              Ob Feedback, neue Projekte oder einfach ein kurzes Hallo – ich
              freue mich auf deine Nachricht. Wähle den Kanal, der für dich am
              besten passt.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
            <div className="space-y-6">
              <div className="rounded-2xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800/60">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Folge mir online
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Bleib auf dem Laufenden über neue Projekte und Modelle.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://huggingface.co/gamatoad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    <Image
                      src="/hugging_face.png"
                      alt="Hugging Face"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>Hugging Face</span>
                  </a>

                  <a
                    href="https://github.com/colinfrugte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    <Image
                      src="/github_logo.svg"
                      alt="Github"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/colinfrugte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    <Image
                      src="/linkedin_logo.jpg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:colin.frugte@gmail.com?subject=Kontakt%20über%20Portfolio&body=Hi%20Colin,"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    📬 Schreib mir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
