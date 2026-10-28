import * as React from "react";
import { Code, Database, Palette, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Web Development": <Code className="w-5 h-5 text-[#5865f2]" />,
    Database: <Database className="w-5 h-5 text-[#00b0f4]" />,
    "Desain & Konten": <Palette className="w-5 h-5 text-[#eb459e]" />,
    Produktivitas: <Wrench className="w-5 h-5 text-[#fda220]" />,
  };

  return (
    <section id="skill" className="py-16 md:py-20 border-t border-[#50555f]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2">
            <Badge variant="blurple">KOMPETENSI & TOOLS</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            KEAHLIAN & TEKNOLOGI
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-xl">
            Kumpulan teknologi dan peralatan kerja yang aktif saya kuasai dan terapkan dalam pengembangan sistem maupun konten pendukung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.name}
              className="bg-[#23272a] border border-[#50555f]/40 rounded-[20px] p-6 sm:p-8 flex flex-col gap-5 hover:border-[#5865f2]/40 transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-[#50555f]/30 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center shrink-0">
                  {categoryIcons[category.name] || (
                    <Code className="w-5 h-5 text-[#5865f2]" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 py-2 rounded-xl bg-[#2c2f33] border border-[#50555f]/40 text-sm font-medium text-white hover:border-[#5865f2] hover:text-[#8891f2] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
