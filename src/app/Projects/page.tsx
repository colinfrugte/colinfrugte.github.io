import { ReactNode } from "react";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Container from "@/components/Container";

export default function Projects() {
  return (
    <Container className="">
      <PageTitle>Projekte</PageTitle>
      <section id="projects">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projectContent.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              <div>
                <Image
                  className="h-36 w-48 object-cover"
                  src={project.picture || "/placeholder.png"}
                  alt={project.project_name || "Project Image"}
                  width={384}
                  height={192}
                />
              </div>
              <div className="text-xl font-bold">
                {project.project_name || "Unnamed Project"}
              </div>
              <p className="text-sm">{project.short_description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Visit Project
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`cursor-pointer rounded-xl p-8 ${className}  transition-transform duration-300 ease-out
     hover:-translate-y-1`}
    >
      <section className="">{children}</section>
    </div>
  );
}

const projectContent = [
  {
    id: 1,
    project_name: "flutterproject",
    short_description:
      "did a flutterproject for a project seminar in university",
    picture: "/iPhone_13_Blue.webp",
    // link: "https://www.uni-hamburg.de",
  },
  {
    id: 2,
    project_name: "Economic Narrative Graph Visualization",
    short_description:
      "Interactive graph visualization of narrative nodes and edges.",
    picture: "",
    link: "https://www.uni-hamburg.de",
  },
];
