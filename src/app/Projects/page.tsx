import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Container from "@/components/Container";

export default function Projects() {
  return (
    <Container className="">
      <PageTitle>Projekte</PageTitle>
      <section id="projects">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 h-screen lg:gap-14">
          {projectContent.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform hover:scale-[1.02] rounded-xl bg-white shadow-xl dark:bg-gray-700 dark:text-white"
            >
              <div key={project.id} className="flex flex-col gap-2">
                <Image
                  className="object-cover aspect-video rounded-t-xl"
                  src={project.picture || "/placeholder.png"}
                  alt={project.project_name || "Project Image"}
                  width={384}
                  height={192}
                />
                <div className="px-8 space-y-1">
                  <div className="text-lg font-bold">
                    {project.project_name || "Unnamed Project"}
                  </div>
                  <p className="text-sm">{project.short_description}</p>
                </div>
              </div>
            </a>
          ))}
          <MoreToComeCard />
        </div>
      </section>
    </Container>
  );
}

const projectContent = [
  {
    id: 1,
    project_name: "Visualisierung wirtschaftlicher Narrative",
    short_description:
      "Interaktive Graph-Visualisierung von Narrativ-Knoten und -Kanten.",
    picture: "/graph2.png",
  },
  {
    id: 2,
    project_name: "amplify",
    short_description:
      "Eine App, die Mitarbeitenden hilft, sich jeden Tag kurz zu reflektieren – für mehr mentale Stärke und Bewusstsein im Arbeitsalltag.",
    picture: "/amplify2.png",

    link: "https://www.youtube.com/watch?v=RtpYYggnDDs&t=2s",
  },
];

const MoreToComeCard = () => {
  return (
    <div className="rounded-xl bg-white shadow-xl dark:bg-gray-700 dark:text-white flex items-center justify-center">
      <p className="text-lg font-semibold">More to come...🚧</p>
    </div>
  );
};
