import ProjectComponent from "@/components/project";
import projectMock from "@/mocks/projects-mock.json";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<Pick<ProjectInterface, "slug">>;
};

export async function generateStaticParams() {
  const posts = projectMock.map((e) => ({ slug: e.slug }));

  return posts;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectMock.find((e) => e.slug == slug) as ProjectInterface;

  if (!slug) return notFound();

  return <ProjectComponent project={project} />;
}
