"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ContentCard } from "@/components/ContentCard";
import projectsData from "@/mocks/project.json";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export default function IndexPage() {
  const projects = projectsData as Project[];
  const [activeTag, setActiveTag] = useState("Todos");

  const filterTags = useMemo(() => {
    const tags = new Set<string>();

    projects.forEach((project) => {
      project.tags?.forEach((tag) => tags.add(tag));
    });

    return ["Todos", ...Array.from(tags)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "Todos") return projects;
    return projects.filter((project) => project.tags?.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-white">
        <div className="container mx-auto flex flex-col items-center space-y-6 px-4 py-20 text-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl">
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
            <p className="text-lg leading-relaxed text-slate-600">
              Boas-vindas ao meu site! Aqui você pode encontrar as minhas
              traduções de mods do The Sims 4 e também conteúdo personalizado
              criado para o jogo.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4">
            <a
              href="https://x.com/theusosroom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-[#5865F2] hover:text-white"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            <a
              href="https://www.patreon.com/c/theuso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-[#FF424D] hover:text-white"
              aria-label="Patreon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <g transform="matrix(.47407 0 0 .47407 .383 .422)">
                  <clipPath id="prefix__a">
                    <path d="M0 0h1080v1080H0z" />
                  </clipPath>
                  <g clipPath="url(#prefix__a)">
                    <path
                      d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </svg>
            </a>

            <a
              href="https://theusosroomcc.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-[#001935] hover:text-white"
              aria-label="Tumblr"
            >
              <svg
                width="20"
                height="20"
                viewBox="-5 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <path d="m12.634 19.166 1.154 3.418c-.418.457-.962.791-1.578.947l-.022.005c-.758.28-1.634.448-2.547.462h-.006c-.077.003-.168.004-.259.004-.888 0-1.744-.139-2.548-.396l.059.016c-.788-.241-1.472-.606-2.068-1.077l.013.01c-.531-.436-.984-.94-1.355-1.504l-.016-.025c-.335-.497-.609-1.072-.789-1.687l-.011-.044c-.149-.509-.237-1.094-.24-1.7v-7.847h-2.422v-3.101c.711-.256 1.327-.595 1.878-1.015l-.017.012c.502-.374.935-.801 1.301-1.282l.012-.016c.313-.425.592-.908.817-1.42l.019-.049c.186-.401.353-.877.478-1.37l.012-.058c.085-.35.161-.785.211-1.229l.005-.051c.009-.048.032-.09.065-.122.027-.03.065-.048.108-.05h3.52v6.115h4.8v3.634h-4.817v7.47.025c0 .278.034.548.099.806l-.005-.023c.076.287.188.539.332.768l-.007-.012c.171.267.415.474.703.595l.01.004c.307.13.663.205 1.037.205.049 0 .097-.001.145-.004h-.007c.701-.001 1.366-.155 1.964-.43l-.029.012z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      <section className="w-full flex-1 bg-slate-300 py-20">
        <div className="container mx-auto px-4">
          <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Conteúdos em Destaque
              </h3>
            </div>

            <span className="text-sm font-medium text-slate-500">
              {filteredProjects.length} itens
            </span>
          </header>

          <div className="mb-10 flex flex-wrap gap-3">
            {filterTags.map((tag) => {
              const isActive = activeTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ContentCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}