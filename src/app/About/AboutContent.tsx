"use client";

import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import Container from "@/components/Container";
import BoxItemHeaderTitle from "@/components/BoxItemHeaderTitle";

export default function AboutContent() {
  const [active, setActive] = useState<string | null>("one");

  const items = [
    {
      key: "skill",

      component: <SkillsAndInterests />,
    },
    {
      key: "exp",

      component: <Experiences />,
    },
    {
      key: "edu",
      component: <Education />,
    },
  ];

  function Education() {
    return (
      <div>
        <div className="flex flex-row">
          <div className="h-full flex-1"></div>
          <div className="flex-3">
            <div className="pb-3">
              <BoxItemHeaderTitle>🎓 Education</BoxItemHeaderTitle>
              <ul className="pl-7">
                {education.map(({ id, university, degree, time }) => (
                  <li
                    key={id}
                    className={`py-2  
                ${
                  active === "one"
                    ? "hover:translate-x-1 transition-transform "
                    : "overflow-hidden whitespace-nowrap"
                }
              `}
                  >
                    <div>
                      <div className="grid grid-cols-[1fr_auto] ">
                        <div className="font-medium truncate whitespace-nowrap">
                          {university}
                        </div>
                        <div className="text-right text-sm opacity-80 overflow-hidden whitespace-nowrap">
                          {time}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-white">
                      {degree}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-full flex-1"></div>
        </div>
      </div>
    );
  }

  const education = [
    {
      id: 1,
      university: "University of Hamburg",
      degree: "M. Sc. Informatik",
      time: "04/2021 - Today",
    },
    {
      id: 2,
      university: "Hochschule Osnabrück, MKT Lingen",
      degree: "B.Sc. Wirtschaftsinformatik",
      time: "10/2013 - 09/2017",
    },
  ];

  function Experiences() {
    return (
      <div>
        <div className="flex flex-row">
          <div className="h-full flex-1"></div>

          <div className="flex-3">
            <div className="">
              <BoxItemHeaderTitle>🧠 Erfahrung</BoxItemHeaderTitle>
              <ul className="pl-7">
                {experiences.map((exp) => (
                  <li
                    key={exp.id}
                    className={`py-2  
                ${
                  active === "one"
                    ? "hover:translate-x-1 transition-transform "
                    : ""
                }
              `}
                  >
                    <div>
                      <div className="grid grid-cols-[1fr_auto] ">
                        <div className="font-medium truncate ">{exp.role}</div>
                        <div className="text-right text-sm opacity-80">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-white">
                      {exp.description}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-white">
                      {exp.start} – {exp.end}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-full flex-1"></div>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <PageTitle>About</PageTitle>
      <section id="about" className="flex flex-col sm:flex-row gap-4 ">
        {items.map(({ key, component }) => (
          <div
            key={key}
            onMouseEnter={() => setActive(key)} // wenn Maus drüber geht
            onMouseLeave={() => setActive(null)} // wenn Maus weggeht
            className={`
    lg:flex-auto sm:flex-none rounded-lg cursor-pointer
    transition-all lg:duration-500 ease-in-out items-center
    lg:whitespace-nowrap bg-white dark:bg-gray-700 lg:p-3 p-2 shadow-xl  border border-foreground/10
    ${
      active === key
        ? "lg:w-lg lg:h-auto w-auto h-auto text-black dark:text-white"
        : "lg:w-0 lg:h-auto h-12 overflow-hidden lg:opacity-70 hover:opacity-100"
    }
  `}
          >
            <div
              className={` duration-500 ease-in-out 
    ${
      active === key
        ? "text-black dark:text-white "
        : " text-gray-500 dark:text-white overflow-hidden "
    }
  `}
            >
              {component}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}

function SkillsAndInterests() {
  return (
    <div className="flex">
      <div className="flex-1"></div>
      <div className="flex-1">
        <BoxItemHeaderTitle>👨🏻‍🔧 Skills</BoxItemHeaderTitle>
        <section className="">
          <ul className="gap-1 pl-7 space-y-1">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
        <div className="border-t border-white my-5" /> {/* Divider */}
        <BoxItemHeaderTitle>🏄🏻‍♂️ Hobbys</BoxItemHeaderTitle>
        <section>
          <ul className="gap-1 pl-7 space-y-1">
            {interests.map((interest) => (
              <li key={interest} className="">
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

const skills = [
  "Python",
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Natural Language Processing (NLP)",
  "Machine Learning",
];

const interests = ["Natur", "Wandern", "Yoga", "Musik"];

// projects.ts
export const experiences = [
  {
    id: 1,
    role: "Math Tutor",
    company: "Schülerhilfe",
    description: "Tutoring middle and high school students in mathematics",
    start: "02/2025",
    end: "today",
  },
  {
    id: 2,
    role: "Research Assistant",
    company: "University of Hamburg",
    description: "Working student in various research projects",
    start: "11/2022",
    end: "11/2024",
  },
  {
    id: 3,
    role: "Fullstack Developer",
    company: "AClue Consulting",
    description: "Working student",
    start: "03/2021",
    end: "06/2021",
  },
  {
    id: 4,
    role: "SAP Consultant",
    company: "Bandtworks GmbH",
    description: "Consulting and development in retail",
    start: "01/2020",
    end: "05/2020",
  },
  {
    id: 5,
    role: "SAP Consultant",
    company: "Acando GmbH (now part of CGI)",
    description: "Consulting and development",
    start: "01/2018",
    end: "12/2019",
  },
];
