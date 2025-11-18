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
];

export default function Contact() {
  return (
    <Container>
      <PageTitle>Kontakt</PageTitle>
      <section id="contact" className="flex w-full flex-col gap-12">
        <div className="flex flex-col justify-between  bg-white/80 mx-auto w-full max-w-3xl ">
          <div className="space-y-2 mx-auto pt-10">
            <h2 className="inline-block lg:text-2xl text-xl font-bold ">
              Wo du mich finden kannst
            </h2>
          </div>
          <div className="pt-5 grid lg:grid-cols-3 grid-cols-2 gap-4">
            {contactLinks.map(({ label, href, icon, alt }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="rounded-2xl text-sm font-medium 
                              dark:border-white/10 dark:bg-gray-900 
                              flex flex-col items-center justify-center gap-3"
              >
                {icon && (
                  <span
                    className="lg:h-30 h-30 w-full flex items-center justify-center  
                              transition-all duration-200 
                                rounded-xl shadow-inner shadow-gray-900/5 dark:bg-gray-800 
                                border border-gray-200 bg-white/90 hover:-translate-y-0.5 hover:shadow-lg "
                  >
                    <Image
                      src={icon}
                      alt={alt ?? label}
                      width={30}
                      height={30}
                      className="h-20 w-20 object-contain"
                    />
                  </span>
                )}

                <span className="text-lg dark:text-white text-gray-900">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
