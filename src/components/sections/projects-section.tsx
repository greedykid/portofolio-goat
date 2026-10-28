import * as React from "react";
import Image from "next/image";
import {
  Layers,
  ShoppingCart,
  Shirt,
  CheckCircle,
  ExternalLink,
  Lock,
  Globe,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const techIconMap: Record<string, string> = {
  Laravel: "/icons/tech/laravel.svg",
  PHP: "/icons/tech/php.svg",
  Bootstrap: "/icons/tech/bootstrap.svg",
  MySQL: "/icons/tech/mysql.svg",
  "HTML/CSS": "/icons/tech/html5.svg",
  JavaScript: "/icons/tech/javascript.svg",
};

export function ProjectsSection() {
  const { projects } = portfolioData;

  const projectMeta: Record<
    string,
    { url: string; icon: React.ReactNode; color: string }
  > = {
    "more-vapor": {
      url: "morevapor-catalog.app",
      icon: <ShoppingCart className="w-5 h-5 text-[#5865f2]" />,
      color: "#5865f2",
    },
    "toko-baju": {
      url: "tokobaju-store.app",
      icon: <Shirt className="w-5 h-5 text-[#57f287]" />,
      color: "#57f287",
    },
  };

  return (
    <section id="proyek" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#5865f2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#57f287]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5865f2] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#8891f2] uppercase">
              Karya & Implementasi Nyata
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            PENGALAMAN & PROYEK
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-2xl leading-relaxed">
            Aplikasi web fungsional yang dibangun dengan arsitektur backend Laravel, integrasi database relasional MySQL, dan antarmuka responsif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const meta = projectMeta[project.id] || {
              url: `${project.id}.app`,
              icon: <Layers className="w-5 h-5 text-[#5865f2]" />,
              color: "#5865f2",
            };

            return (
              <div
                key={project.id}
                className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] flex flex-col justify-between overflow-hidden relative group hover:border-[#5865f2]/60 hover:shadow-2xl hover:shadow-[#5865f2]/15 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Browser Window Chrome Header */}
                <div className="bg-[#1e2124] border-b border-[#50555f]/40 px-4 py-3 flex items-center justify-between gap-3">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block" />
                  </div>

                  {/* Mock URL bar */}
                  <div className="flex items-center gap-2 bg-[#2c2f33] border border-[#50555f]/30 rounded-lg px-3 py-1 text-xs text-[#99aab5] font-mono flex-1 max-w-[260px] justify-center overflow-hidden text-ellipsis whitespace-nowrap">
                    <Lock className="w-3 h-3 text-[#57f287] shrink-0" />
                    <span className="truncate">{meta.url}</span>
                  </div>

                  {/* Status Badge */}
                  <Badge variant="success" className="text-[10px] py-0.5 px-2">
                    {project.statusText || "Aktif"}
                  </Badge>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1 justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {meta.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#8891f2] tracking-wider uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-[#babcd9] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges with Brand Icons */}
                    <div className="flex flex-col gap-2 pt-1">
                      <span className="text-[11px] text-[#99aab5] uppercase font-bold tracking-wider">
                        Teknologi Utama
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const iconSrc = techIconMap[tech];
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2c2f33] border border-[#50555f]/40 text-xs font-semibold text-white group-hover:border-[#5865f2]/40 transition-colors"
                            >
                              {iconSrc && (
                                <Image
                                  src={iconSrc}
                                  alt=""
                                  aria-hidden="true"
                                  width={14}
                                  height={14}
                                  className="w-3.5 h-3.5 object-contain shrink-0"
                                />
                              )}
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-[#50555f]/30 flex items-center justify-between text-xs text-[#99aab5]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#57f287]" />
                      <span>
                        Peran: <strong className="text-white">{project.role}</strong>
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8891f2] font-mono">
                      Full-Stack Dev
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
