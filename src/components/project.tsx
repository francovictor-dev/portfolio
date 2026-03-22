"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectComponent({
  project,
}: {
  project: ProjectInterface;
}) {
  return (
    <motion.article
      layout="position"
      onLayoutAnimationStart={() =>
        window.scrollTo({ behavior: "instant", top: 0 })
      }
      layoutId={project.slug}
      className="w-full flex flex-col items-center gap-8 py-36 text-white max-sm:py-28"
    >
      <h3 className="text-3xl font-bold">{project?.title}</h3>
      <div className="w-[50vw] relative flex-col gap-6 min-h-3.5 flex items-center justify-center max-md:w-full max-sm:px-4">
        <div
          className="w-full rounded-4xl overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: "var(--footer)" }}
        >
          <Image
            className="h-[50vh] object-contain  max-md:w-full"
            src={project?.images[1]!}
            alt=""
            height={800}
            width={1200}
            priority
          />
        </div>
        <label className="text-2xl font-semibold ">Descrição</label>
        <label>{project?.description}</label>

        <label className="text-2xl font-semibold ">Detalhes</label>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full grid grid-cols-2 grid-flow-row gap-4">
            <label>
              <strong>Empresa:</strong> {project?.enterprise}
            </label>
            <label>
              <strong>Status:</strong> {project?.status}
            </label>
            <label>
              <strong>Papel:</strong> {project?.activity}
            </label>
            {project?.repository && (
              <label>
                <strong>Repositório:</strong>{" "}
                <a href={project?.repository} target="_blank">
                  {project?.repository}
                </a>
              </label>
            )}
            <label>
              <strong>Stacks:</strong> {project?.stacks.join(", ")}
            </label>
          </div>
          <label>
            <strong>Link:</strong>{" "}
            <a href={project?.href} target="_blank">
              {project?.href}
            </a>
          </label>
        </div>
      </div>
    </motion.article>
  );
}
