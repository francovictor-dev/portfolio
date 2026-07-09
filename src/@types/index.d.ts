type PROJECT_TYPE = "Lançado" | "Em andamento" | "Em pausa";

interface ProjectInterface {
  slug: string;
  type: "web" | "mobile";
  status: PROJECT_TYPE;
  href: string;
  title: string;
  description: string;
  enterprise: string;
  activity: string;
  stacks: string[];
  ui: string[];
  services: string[];
  repository?: string | null;
  images: string[];
}

interface PublicRepository {
  title: string;
  href: string;
  stacks: string[];
}
