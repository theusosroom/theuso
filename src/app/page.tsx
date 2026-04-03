import Image from "next/image";
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
    <div className="w-full flex flex-col">
      
      {/* --- SEÇÃO 1: PERFIL (Branca) --- */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center space-y-6">
          
          <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-xl border-4 border-white bg-slate-200">
            <Image
              src="https://i.imgur.com/hSrfLzX.png" 
              alt="Foto de perfil Theuso"
              fill
              className="object-cover"
              sizes="160px"
              priority 
            />
          </div>

          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl">
              Theuso.
            </h1>
            <h2 className="text-xl font-medium text-blue-600">
              Criador de Traduções e Conteúdo Personalizado para The Sims 4
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Boas vindas ao meu site! Aqui você pode encontrar as minhas traduções de mods do The Sims 4, e também conteúdo personalizado.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4">
            <a href="https://x.com/theusosroom" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#5865F2] hover:text-white hover:scale-110" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://www.patreon.com/c/theuso" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-[#FF424D] hover:text-white hover:scale-110" aria-label="Patreon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><g transform="matrix(.47407 0 0 .47407 .383 .422)"><clipPath id="prefix__a"><path d="M0 0h1080v1080H0z"/></clipPath><g clipPath="url(#prefix__a)"><path d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z" fillRule="nonzero"/></g></g></svg>
            </a>
          </div>
        </div>
      </section>

      {/* LINHA DIVISÓRIA DE VOLTA */}
      <hr className="border-slate-200" />

      {/* --- SEÇÃO 2: CARDS (Cinza mais escuro para destaque) --- */}
      <section className="w-full bg-slate-300 py-20 flex-1">
        <div className="container mx-auto px-4">
          <header className="mb-10 flex items-center justify-between">
            <h3 className="text-3xl font-bold text-slate-900">Projetos em Destaque</h3>
            <span className="text-sm font-medium text-slate-400">{projects.length} itens</span>
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
        </div>
      </section>

    </div>
  );
}