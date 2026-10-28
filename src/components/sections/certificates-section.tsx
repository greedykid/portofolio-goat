"use client";

import * as React from "react";
import {
  Award,
  ShieldCheck,
  FileText,
  ExternalLink,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CertificatesSection() {
  const { certificates } = portfolioData;

  const categories = React.useMemo(() => {
    const set = new Set<string>();
    certificates.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return ["Semua", ...Array.from(set)];
  }, [certificates]);

  const [activeCategory, setActiveCategory] = React.useState("Semua");

  const filteredCertificates = React.useMemo(() => {
    if (activeCategory === "Semua") return certificates;
    return certificates.filter((c) => c.category === activeCategory);
  }, [certificates, activeCategory]);

  return (
    <section id="sertifikat" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#5865f2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal duration={850}>
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5865f2] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#8891f2] uppercase">
                Kredensial & Lisensi Resmi
              </span>
              <span className="text-xs text-[#99aab5] font-mono font-medium ml-1">
                ({certificates.length} Berkas Terverifikasi)
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
              SERTIFIKAT & LISENSI
            </h2>
            <p className="text-sm sm:text-base text-[#babcd9] max-w-2xl leading-relaxed">
              Bukti verifikasi keahlian, pelatihan teknis, dan sertifikasi resmi yang diterbitkan oleh institusi pendidikan tinggi terakreditasi.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        {categories.length > 1 && (
          <ScrollReveal delay={100} duration={850}>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-[#50555f]/40">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "Semua"
                    ? certificates.length
                    : certificates.filter((c) => c.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865f2] ${
                      isActive
                        ? "bg-[#5865f2] text-white shadow-lg shadow-[#5865f2]/25 border border-[#5865f2]"
                        : "bg-[#23272a] text-[#babcd9] hover:text-white hover:bg-[#2c2f33] border border-[#50555f]/40"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#2c2f33] text-[#8e9297]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Certificate Cards Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <ScrollReveal
                key={cert.id}
                delay={(index % 3) * 100}
                duration={850}
                className="h-full"
              >
                <div
                  className="bg-[#23272a] border border-[#50555f]/40 hover:border-[#5865f2]/60 rounded-[22px] p-6 flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1.5 group hover:shadow-2xl hover:shadow-[#5865f2]/10 h-full"
                >
                  {/* Card Top */}
                  <div className="flex flex-col gap-4">
                    {/* Top Bar: Icon, Verified Badge, Year */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[#5865f2]/15 border border-[#5865f2]/30 flex items-center justify-center text-[#5865f2] shrink-0 group-hover:scale-105 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#57f287]/10 text-[#57f287] border border-[#57f287]/20">
                          <ShieldCheck className="w-3 h-3 text-[#57f287]" />
                          Resmi
                        </span>
                      </div>
                      {cert.year && (
                        <span className="text-xs font-mono font-semibold text-[#8891f2] bg-[#2c2f33] px-2.5 py-1 rounded-md border border-[#50555f]/40">
                          {cert.year}
                        </span>
                      )}
                    </div>

                    {/* Title and English Subtitle */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#8891f2] transition-colors line-clamp-2">
                        {cert.name}
                      </h3>
                      {cert.englishTitle && (
                        <p className="text-xs text-[#8e9297] italic mt-1 line-clamp-1">
                          {cert.englishTitle}
                        </p>
                      )}
                    </div>

                    {/* Metadata: Issuer, ID, Date */}
                    <div className="flex flex-col gap-1.5 text-xs text-[#babcd9] bg-[#2c2f33]/60 rounded-xl p-3 border border-[#50555f]/25">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#5865f2] shrink-0" />
                        <span className="font-medium text-white truncate">
                          {cert.issuer}
                        </span>
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center gap-2 text-[#8e9297] font-mono text-[11px]">
                          <span className="font-semibold text-[#babcd9]">No:</span>
                          <span>{cert.credentialId}</span>
                        </div>
                      )}
                      {cert.issueDate && (
                        <div className="flex items-center gap-2 text-[#babcd9] text-[11px]">
                          <Calendar className="w-3 h-3 text-[#8e9297] shrink-0" />
                          <span>Diterbitkan: {cert.issueDate}</span>
                        </div>
                      )}
                    </div>

                    {/* Skill Chips */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] bg-[#2c2f33] text-[#babcd9] px-2 py-0.5 rounded-md border border-[#50555f]/30 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card CTA: Direct PDF Link */}
                  <div className="pt-2 border-t border-[#50555f]/20">
                    {cert.fileUrl ? (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#2c2f33] hover:bg-[#5865f2] text-white text-xs font-semibold border border-[#50555f]/40 hover:border-transparent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865f2] group/btn"
                      >
                        <FileText className="w-4 h-4 text-[#8891f2] group-hover/btn:text-white transition-colors" />
                        <span>Buka Dokumen PDF</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#babcd9] group-hover/btn:text-white transition-colors ml-auto opacity-70" />
                      </a>
                    ) : (
                      <span className="text-xs text-[#8e9297] italic block text-center py-2">
                        Dokumen digital dalam proses
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="bg-[#23272a] border border-[#50555f]/30 rounded-[20px] p-8 text-center flex flex-col items-center gap-3 max-w-md mx-auto">
            <Award className="w-8 h-8 text-[#8e9297]" />
            <p className="text-sm text-[#babcd9]">
              Tidak ada sertifikat dalam kategori ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
