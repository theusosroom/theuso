import { ContentCard } from "@/components/ContentCard";
import projectsData from "@/mocks/project.json";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function IndexPage() {
    const projects = projectsData as Project[];

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900">Projetos em Destaque</h1>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ContentCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}