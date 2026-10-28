import * as React from "react";
import Image from "next/image";
import { Code, Database, Palette, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const techIconMap: Record<string, string> = {
  Laravel: "/icons/tech/laravel.svg",
  PHP: "/icons/tech/php.svg",
  Bootstrap: "/icons/tech/bootstrap.svg",
  "Web Development": "/icons/tech/html5.svg",
  "HTML/CSS": "/icons/tech/html5.svg",
  JavaScript: "/icons/tech/javascript.svg",
  MySQL: "/icons/tech/mysql.svg",
  "Relational Database Design": "/icons/tech/sql.svg",
  "SQL Queries": "/icons/tech/sql.svg",
  Canva: "/icons/tech/canva.svg",
  CapCut: "/icons/tech/capcut.svg",
  "Microsoft Word": "/icons/tech/word.svg",
  "Microsoft Excel": "/icons/tech/excel.svg",
  "Microsoft PowerPoint": "/icons/tech/powerpoint.svg",
};

export function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Web Development": <Code className="w-5 h-5 text-[#5865f2]" />,
    Database: <Database className="w-5 h-5 text-[#00b0f4]" />,
    "Desain & Konten": <Palette className="w-5 h-5 text-[#eb459e]" />,
    Produktivitas: <Wrench className="w-5 h-5 text-[#fda220]" />,
  };

  const categoryMeta: Record<
    string,
    { span: string; tag: string; tagColor: string }
  > = {
    "Web Development": {
      span: "lg:col-span-7",
      tag: "Spesialisasi Inti",
      tagColor: "text-[#5865f2] bg-[#5865f2]/10 border-[#5865f2]/30",
    },
    Database: {
      span: "lg:col-span-5",
      tag: "Relational Data Layer",
      tagColor: "text-[#00b0f4] bg-[#00b0f4]/10 border-[#00b0f4]/30",
    },
    "Desain & Konten": {
      span: "lg:col-span-5",
      tag: "Visual & Kreatif",
      tagColor: "text-[#eb459e] bg-[#eb459e]/10 border-[#eb459e]/30",
    },
    Produktivitas: {
      span: "lg:col-span-7",
      tag: "Administrasi & Workflow",
      tagColor: "text-[#fda220] bg-[#fda220]/10 border-[#fda220]/30",
    },
  };

  return (
    <section id="skill" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#5865f2]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5865f2] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#8891f2] uppercase">
              Stack Teknologi & Peralatan Kerja
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            KEAHLIAN & TEKNOLOGI
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-2xl leading-relaxed">
            Perangkat lunak, framework, dan teknologi yang saya terapkan dalam membangun antarmuka web responsif, logika backend, dan tata kelola data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {skills.map((category) => {
            const meta = categoryMeta[category.name] || {
              span: "lg:col-span-6",
              tag: "Keahlian",
              tagColor: "text-[#babcd9] bg-white/5 border-white/10",
            };

            return (
              <div
                key={category.name}
                className={`${meta.span} bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#5865f2]/50 hover:shadow-2xl hover:shadow-[#5865f2]/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#50555f]/30 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {categoryIcons[category.name] || (
                          <Code className="w-5 h-5 text-[#5865f2]" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {category.name}
                      </h3>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${meta.tagColor}`}
                    >
                      {meta.tag}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const iconSrc = techIconMap[skill];
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#2c2f33] border border-[#50555f]/40 text-sm font-medium text-white hover:border-[#5865f2] hover:bg-[#2c2f33]/90 transition-all duration-200 group/pill"
                        >
                          {skill === "HTML/CSS" ? (
                            <span className="flex items-center gap-1 shrink-0">
                              <Image
                                src="/icons/tech/html5.svg"
                                alt=""
                                aria-hidden="true"
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain transition-transform duration-200 group-hover/pill:scale-110"
                              />
                              <Image
                                src="/icons/tech/css3.svg"
                                alt=""
                                aria-hidden="true"
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain transition-transform duration-200 group-hover/pill:scale-110"
                              />
                            </span>
                          ) : iconSrc ? (
                            <Image
                              src={iconSrc}
                              alt=""
                              aria-hidden="true"
                              width={18}
                              height={18}
                              className="w-4.5 h-4.5 object-contain shrink-0 transition-transform duration-200 group-hover/pill:scale-110"
                            />
                          ) : null}
                          <span>{skill}</span>
                        </span>
                      );
                    })}
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
