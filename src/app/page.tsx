"use client";

import ExperienceSection from "@/components/sections/experience-section";
import HomeSection from "@/components/sections/home-section";
import ProjectsSection from "@/components/sections/projects-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <div className="flex flex-col w-screen gap-26 ">
      <HomeSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}
