import * as React from "react";
import { Layers, ShoppingCart, Shirt, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const { projects } = portfolioData;

  const projectIcons: Record<string, React.ReactNode> = {
    "more-vapor": <ShoppingCart className="w-6 h-6 text-[#5865f2]" />,
    "toko-baju": <Shirt className="w-6 h-6 text-[#57f287]" />,
  };

  return (
    <section id="proyek" className="py-16 md:py-20 border-t border-[#50555f]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2">
            <Badge variant="blurple">PORTOFOLIO KARYA</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            PENGALAMAN & PROYEK
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-xl">
            Implementasi nyata solusi sistem informasi dan web e-commerce yang telah saya rancang dan bangun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#5865f2]/50 transition-colors relative overflow-hidden group"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center shrink-0">
                    {projectIcons[project.id] || (
                      <Layers className="w-6 h-6 text-[#5865f2]" />
                    )}
                  </div>
                  <Badge variant="success">{project.statusText}</Badge>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#8891f2] tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#babcd9] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs text-[#99aab5] uppercase font-bold tracking-wider">
                    Teknologi yang Digunakan
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[#2c2f33] border border-[#50555f]/40 text-xs font-semibold text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#50555f]/30 flex items-center justify-between text-xs text-[#99aab5]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#57f287]" />
                  <span>Peran: <strong className="text-white">{project.role}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
