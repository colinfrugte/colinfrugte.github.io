import Image from "next/image";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";

const contactLinks = [
  {
    label: "Hugging Face",
    href: "https://huggingface.co/gamatoad/",
    icon: "/hugging_face.png",
    alt: "Hugging Face",
  },
  {
    label: "GitHub",
    href: "https://github.com/colinfrugte",
    icon: "/github_logo.svg",
    alt: "GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/colinfrugte/",
    icon: "/linkedin_logo.jpg",
    alt: "LinkedIn",
  },
  {
    label: "Schreib mir",
    href: "mailto:colin.frugte@gmail.com?subject=Kontakt%20über%20Portfolio&body=Hi%20Colin,",
  },
];

export default function Contact() {
  return (
    <Container>
      <div className="" />
      <section
        id="contact"
        className="mx-auto flex w-full max-w-6xl flex-col gap-12"
      >
        <div className="max-w-xl">
          <PageTitle>Kontakt</PageTitle>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200/60 bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-gray-900/70 dark:ring-white/10">
            <div className="space-y-2">
              <h2 className="inline-block lg:text-xl text-xl font-bold ">
                Lass uns connecten 💘
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Klick dich gern durch die Links oder schick mir direkt eine Mail
                ✉️
              </p>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-4 grid-cols-1">
              {contactLinks.map(({ label, href, icon, alt }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-gray-900 dark:text-white"
                >
                  {icon ? (
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl shadow-inner shadow-gray-900/5 dark:bg-gray-800">
                      <Image
                        src={icon}
                        alt={alt ?? label}
                        width={20}
                        height={20}
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl text-lg shadow-inner shadow-gray-900/5">
                      📬
                    </span>
                  )}
                  <span className="text-lg">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
