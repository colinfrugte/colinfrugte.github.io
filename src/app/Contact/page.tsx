import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Container from "@/components/Container";
import Image from "next/image";

const contactEmail = "mail@colinfrugte.de";

export default function Contact() {
  return (
    <Container className="relative isolate">
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
                      src="/huggingface-logo.png"
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
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800/60">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Direkt per Mail
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Du möchtest dein eigenes Mailprogramm nutzen? Klick einfach
                  auf die Adresse.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  <EnvelopeIcon className="h-5 w-5" aria-hidden />
                  {contactEmail}
                </a>
              </div>
            </div>

            <form
              action={`mailto:${contactEmail}`}
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4 rounded-2xl bg-gray-900 p-6 text-gray-100 shadow-xl dark:bg-gray-100 dark:text-gray-900"
            >
              <h3 className="text-lg font-semibold">Schreib mir eine Nachricht</h3>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-gray-200 dark:text-gray-700"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="Name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-lg border border-white/20 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white dark:border-gray-300 dark:bg-white dark:text-gray-900 dark:placeholder:text-gray-500 dark:focus:border-gray-900 dark:focus:ring-gray-900"
                  placeholder="Wie darf ich dich nennen?"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-gray-200 dark:text-gray-700"
                >
                  E-Mail
                </label>
                <input
                  id="contact-email"
                  name="E-Mail"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-lg border border-white/20 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white dark:border-gray-300 dark:bg-white dark:text-gray-900 dark:placeholder:text-gray-500 dark:focus:border-gray-900 dark:focus:ring-gray-900"
                  placeholder="deine@mail.de"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-200 dark:text-gray-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="contact-message"
                  name="Nachricht"
                  rows={5}
                  required
                  className="rounded-lg border border-white/20 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white dark:border-gray-300 dark:bg-white dark:text-gray-900 dark:placeholder:text-gray-500 dark:focus:border-gray-900 dark:focus:ring-gray-900"
                  placeholder="Worum geht es?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 dark:focus-visible:ring-gray-900 dark:focus-visible:ring-offset-gray-100"
              >
                Nachricht senden
                <PaperAirplaneIcon className="h-4 w-4" aria-hidden />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}
