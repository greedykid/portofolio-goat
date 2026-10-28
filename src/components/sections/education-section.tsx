import * as React from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-16 md:py-20 border-t border-[#50555f]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2">
            <Badge variant="blurple">RIWAYAT AKADEMIK</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            PENDIDIKAN
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-xl">
            Latar belakang formal yang menjadi landasan pemahaman logika komputasi, sistem basis data, dan arsitektur aplikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#23272a] border border-[#50555f]/40 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#5865f2]/50 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center text-[#5865f2] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <Badge variant="success">{item.status}</Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-base text-[#8891f2] font-semibold">
                    {item.degree} — {item.field}
                  </p>
                </div>

                {item.description && (
                  <p className="text-sm text-[#babcd9] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#50555f]/30 flex items-center gap-4 text-xs text-[#99aab5]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#5865f2]" />
                  <span>Kurikulum Sistem Informasi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#57f287]" />
                  <span>Gelar Sarjana Terverifikasi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
