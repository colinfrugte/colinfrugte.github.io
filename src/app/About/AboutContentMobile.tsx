"use client";

import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import BoxItemHeaderTitle from "@/components/BoxItemHeaderTitle";

const skills = [
  "Python",
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Natural Language Processing (NLP)",
  "Machine Learning",
];

const interests = ["Natur", "Wandern", "Yoga", "Musik"];

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

const listVariants = {
  hidden: {},
  show: { transition: { delayChildren: 0.05, staggerChildren: 0.08 } },
};

export default function AboutContentMobile() {
  return (
    <div className="px-6 pb-20 pt-24 space-y-8 bg-gradient-to-b from-white/80 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
      <PageTitle>Über mich</PageTitle>

      <motion.section
        className="rounded-3xl bg-white/80 p-6 shadow-lg  shadow-gray-900/10 backdrop-blur dark:bg-gray-900/80 dark:shadow-black/30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <BoxItemHeaderTitle>👨🏻‍🔧 Skills</BoxItemHeaderTitle>
        <motion.ul
          className="mt-4 flex flex-wrap gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              className="rounded-full bg-gray-900/5 px-4 py-2 text-sm font-medium text-gray-900 shadow-inner shadow-gray-900/5 ring-1 ring-gray-900/10 dark:bg-gray-800/90 dark:text-gray-100 dark:ring-white/10"
              whileTap={{ scale: 0.96 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
      <div className="rounded-3xl  p-6 shadow-md">
        <BoxItemHeaderTitle>🏄🏻‍♂️ Hobbys</BoxItemHeaderTitle>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
          {interests.map((interest) => (
            <motion.span
              key={interest}
              className="rounded-xl px-3 py-2
              bg-gradient-to-r from-amber-300 to-amber-400 
              text-white font-bold             
              text-center shadow-inner shadow-2xl"
              whileTap={{ scale: 0.94 }}
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.section
        className="rounded-3xl bg-white/85 p-6 shadow-lg shadow-indigo-900/10 backdrop-blur dark:bg-gray-900/85 dark:shadow-black/40"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <BoxItemHeaderTitle>🧠 Erfahrung</BoxItemHeaderTitle>
        <motion.ul
          className="relative mt-4 space-y-5 pl-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants}
        >
          <span className="absolute left-1 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-gradient-to-b from-sky-400 via-indigo-400 to-transparent dark:from-sky-500/70 dark:via-indigo-500/60" />
          {experiences.map(({ id, role, company, description, start, end }) => (
            <motion.li
              key={id}
              className="relative rounded-3xl bg-gray-900/5 p-4 pr-5 shadow-inner shadow-gray-900/10 dark:bg-gray-800/70 dark:shadow-black/30"
            >
              <span className="absolute -left-[22px] top-5 h-3 w-3 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg shadow-sky-500/40" />
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  <span>{role}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300">
                    {start} – {end}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-300">
                  {company}
                </span>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-200">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section
        className="rounded-3xl bg-white/85 p-6 shadow-lg shadow-emerald-900/10 backdrop-blur dark:bg-gray-900/85 dark:shadow-black/40"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <BoxItemHeaderTitle>🎓 Ausbildung</BoxItemHeaderTitle>
        <motion.ul
          className="mt-4 space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          {education.map(({ id, university, degree, time }) => (
            <motion.li
              key={id}
              className="rounded-3xl border border-emerald-500/15 bg-emerald-500/5 p-4 shadow-inner shadow-emerald-900/10 dark:border-emerald-400/30 dark:bg-emerald-500/10"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {university}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {degree}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </div>
  );
}
