import * as React from "react";
import Image from "next/image";
import { BookOpen, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#5865f2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5865f2] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#8891f2] uppercase">
              Fondasi Formal & Akademik
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            PENDIDIKAN
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-2xl leading-relaxed">
            Latar belakang formal yang menjadi landasan pemahaman rekayasa perangkat lunak, sistem basis data, dan arsitektur aplikasi web.
          </p>
        </div>

        <div>
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-6 sm:p-10 flex flex-col lg:flex-row justify-between gap-8 hover:border-[#5865f2]/60 hover:shadow-2xl hover:shadow-[#5865f2]/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Left Column: Details & Description */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/95 p-2 border border-[#50555f]/40 flex items-center justify-center shrink-0 shadow-lg shadow-black/40 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/gunadarma-logo.svg"
                      alt="Logo Resmi Universitas Gunadarma"
                      width={52}
                      height={52}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        {item.institution}
                      </h3>
                      <Badge variant="success" className="text-xs font-semibold py-1 px-3">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-base sm:text-lg text-[#8891f2] font-semibold">
                      {item.degree} • {item.field}
                    </p>
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm sm:text-base text-[#babcd9] leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                )}

                <div className="pt-4 border-t border-[#50555f]/30 flex flex-wrap items-center gap-6 text-xs text-[#99aab5]">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5865f2]" />
                    <span>Kurikulum Rekayasa Sistem Informasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#57f287]" />
                    <span>Gelar Sarjana Terverifikasi Resmi</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Focus Areas & Badges */}
              <div className="lg:w-80 bg-[#2c2f33] border border-[#50555f]/30 rounded-2xl p-5 flex flex-col justify-between gap-4 shrink-0">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#99aab5] uppercase font-bold tracking-wider">
                    Fokus Pembelajaran Utama
                  </span>
                  <ul className="flex flex-col gap-2 text-xs text-[#babcd9]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5865f2]" />
                      <span>Analisis & Perancangan Sistem</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5865f2]" />
                      <span>Rekayasa Basis Data Relasional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#57f287]" />
                      <span>Pemrograman Web & Logika Algoritma</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#50555f]/40 flex items-center justify-between text-[11px] text-[#99aab5]">
                  <span>Jenjang Studi</span>
                  <span className="text-white font-mono font-semibold">Sarjana (S1)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
