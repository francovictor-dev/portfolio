"use client";

import projectsMock from "@/mocks/projects-mock.json";
import { motion, TargetAndTransition } from "motion/react";
import ProjectCard from "../ui/project-card";

const ProjectsSection = () => {
  const projects = projectsMock as ProjectInterface[];

  const renderProjectCards = () => {
    const justityType = (index: number) => {
      const isEven = index % 2 == 0;
      return isEven ? "justify-end" : "justify-start";
    };

    const handleInitialPosition = (index: number): TargetAndTransition => {
      const isEven = index % 2 == 0;
      return isEven ? { x: "-20%" } : { x: "20%" };
    };

    return projects.map((item, index) => (
      <motion.a
        key={item.slug}
        className={`flex w-full  ${justityType(index)}`}
        initial={handleInitialPosition(index)}
        style={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        href={`/projetos/${item.slug}`}
      >
        <div className="absolute z-10 m-2 rounded-2xl bg-neutral-700 p-2">
          <span className="text-gray-300 font-semibold">
            {item.stacks.slice(0, 2).join("-")}
          </span>
        </div>
        <ProjectCard title={item.title} src={item.images[0]} />
      </motion.a>
    ));
  };

  return (
    <div id="projects" className="flex flex-col gap-10 px-4">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-tr from-(--grad-orange-900) to-(--grad-orange-800) bg-clip-text text-transparent">
        PROJETOS
      </h1>
      <div className="grid grid-flow-row grid-cols-2 gap-8 place-items-center max-sm:grid-cols-1 overflow-hidden">
        {renderProjectCards()}
      </div>
    </div>
  );
};

export default ProjectsSection;
