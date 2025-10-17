import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Container from "@/components/Container";

export default function Projects() {
  return (
    <Container>
      <PageTitle>Projekte</PageTitle>
      <section id="projects">
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projectContent.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <MoreToComeCard />
        </div>
      </section>
    </Container>
  );
}

type ProjectContent = {
  id: number;
  project_name: string;
  short_description: string;
  picture: string;
  link?: string;
  tech: string[];
};

const projectContent = [
  {
    id: 1,
    project_name: "Visualisierung wirtschaftlicher Narrative",
    short_description:
      "Interaktive Graph-Visualisierung von Narrativ-Knoten und -Kanten.",
    picture: "/graph2.png",
    tech: ["python", "fastapi", "vite"],
    link: "https://colinfrugte.github.io/infl_narrative/",
  },
  {
    id: 2,
    project_name: "amplify",
    short_description:
      "Eine App, die Mitarbeitenden hilft, sich jeden Tag kurz zu reflektieren – für mehr mentale Stärke und Bewusstsein im Arbeitsalltag.",
    picture: "/amplify2.png",
    link: "https://www.youtube.com/watch?v=RtpYYggnDDs&t=2s",
    tech: ["flutter", "firebase"],
  },
] satisfies ProjectContent[];

function ProjectCard({ project }: { project: ProjectContent }) {
  const cardInner = (
    <>
      <div className="relative overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            fill
            src={project.picture || "/placeholder.png"}
            alt={project.project_name || "Projektbild"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
            priority={project.id === 1}
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/5 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {project.project_name || "Unnamed Project"}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            {project.short_description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <div
              key={technology}
              className="rounded-full bg-gray-900/5 px-4 py-2 text-xs font-medium text-gray-900 shadow-inner shadow-gray-900/5 ring-1 ring-gray-900/10 dark:bg-gray-800/90 dark:text-gray-100 dark:ring-white/10"
            >
              {technology}
            </div>
          ))}
        </div>
        {project.link ? (
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-500 dark:text-indigo-300 dark:group-hover:text-indigo-200"></span>
        ) : null}
      </div>
    </>
  );

  const sharedClasses =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700 dark:text-white dark:ring-white/10";

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
      >
        {cardInner}
      </a>
    );
  }

  return <div className={sharedClasses}>{cardInner}</div>;
}

const MoreToComeCard = () => {
  return (
    <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-white/90 p-6 text-center shadow-inner shadow-gray-200/70 transition-all duration-300 hover:border-gray-400 hover:bg-white dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:shadow-black/40">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/0 via-indigo-100/20 to-indigo-200/30 opacity-0 transition-opacity duration-500 group-hover:opacity-60 dark:via-indigo-500/10 dark:to-indigo-600/10" />
      <div className="relative space-y-2">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200">
          Work in progress
        </span>
        <p className="text-lg font-semibold">More to come …</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Neue Projekte landen bald hier. Stay tuned! 🚧
        </p>
      </div>
    </div>
  );
};
