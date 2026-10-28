import * as React from "react";
import Image from "next/image";
import { ArrowDown, Mail, Code2, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="tentang"
      className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#5865f2]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 -left-32 w-[350px] h-[350px] bg-[#57f287]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#23272a]/90 border border-[#50555f]/40 w-fit backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#57f287] animate-pulse shadow-sm shadow-[#57f287]/80" />
              <span className="text-xs font-semibold text-white tracking-wide">
                Lulusan S1 Sistem Informasi • Web Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.05] tracking-tight font-display">
              SIAP MEMBANGUN <br className="hidden sm:inline" />
              <span className="text-[#5865f2]">SOLUSI WEB</span> <br className="hidden sm:inline" />
              YANG HANDAL
            </h1>

            <p className="text-base sm:text-lg text-[#babcd9] leading-relaxed max-w-xl">
              Saya <strong className="text-white">{profile.name}</strong>,{" "}
              {profile.shortBio}
            </p>

            <p className="text-sm text-[#99aab5] leading-relaxed max-w-xl">
              {profile.extendedBio}
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#kontak">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-semibold shadow-lg shadow-[#5865f2]/25 active:scale-[0.98] transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  {profile.ctaTextPrimary}
                </Button>
              </a>

              <a href="#proyek">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-semibold active:scale-[0.98] transition-all duration-200"
                >
                  {profile.ctaTextSecondary}
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Interactive Micro Stats Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#50555f]/30 max-w-xl">
              <div className="bg-[#23272a]/70 border border-[#50555f]/30 rounded-xl p-3.5 flex flex-col hover:border-[#5865f2]/40 transition-colors">
                <span className="text-2xl font-black text-white font-display">9+</span>
                <span className="text-[11px] text-[#99aab5] font-medium mt-0.5">Sertifikat Resmi</span>
              </div>
              <div className="bg-[#23272a]/70 border border-[#50555f]/30 rounded-xl p-3.5 flex flex-col hover:border-[#57f287]/40 transition-colors">
                <span className="text-2xl font-black text-[#57f287] font-display">2+</span>
                <span className="text-[11px] text-[#99aab5] font-medium mt-0.5">Platform E-Commerce</span>
              </div>
              <div className="bg-[#23272a]/70 border border-[#50555f]/30 rounded-xl p-3.5 flex flex-col hover:border-[#8891f2]/40 transition-colors">
                <span className="text-2xl font-black text-[#8891f2] font-display">S1</span>
                <span className="text-[11px] text-[#99aab5] font-medium mt-0.5">Univ. Gunadarma</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Profile Stage Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-[#5865f2]/50 hover:shadow-2xl hover:shadow-[#5865f2]/10 group">
              {/* Background ambient gradient accents */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#5865f2]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#5865f2]/30 transition-colors duration-500" />
              <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#57f287]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Photo Stage Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#2c2f33] border border-[#50555f]/30">
                <Image
                  src={profile.avatarUrl || "/images/profile-rian.jpg"}
                  alt="Foto profil Rian Hartokusumo, Web Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 460px"
                  priority
                  fetchPriority="high"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />

                {/* Floating Status Badge (Top Right) */}
                <div className="absolute top-3 right-3 animate-float-gentle">
                  <div className="bg-[#23272a]/85 backdrop-blur-md border border-[#50555f]/50 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-black/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#57f287] animate-pulse shadow-sm shadow-[#57f287]/80" />
                    <span className="font-medium tracking-wide">Tersedia untuk Kerja</span>
                  </div>
                </div>

                {/* Technical Specialization Pill (Bottom Overlay) */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-[#23272a]/90 backdrop-blur-md border border-[#50555f]/40 px-3.5 py-2 rounded-xl flex items-center justify-between text-xs text-[#babcd9] shadow-lg shadow-black/40">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#57f287] shrink-0" />
                      <span className="font-medium text-white">Laravel • PHP • MySQL</span>
                    </div>
                    <span className="text-[11px] text-[#99aab5] font-mono">Full-Stack</span>
                  </div>
                </div>
              </div>

              {/* Profile Meta Info Bar */}
              <div className="flex items-center justify-between pt-1 px-1">
                <div>
                  <h2 className="text-white font-bold text-base font-display tracking-tight">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-[#babcd9]">
                    S1 Sistem Informasi • Web Developer
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#babcd9] bg-[#2c2f33] px-2.5 py-1 rounded-lg border border-[#50555f]/30">
                  <GraduationCap className="w-3.5 h-3.5 text-[#5865f2]" />
                  <span>Univ. Gunadarma</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="flex justify-center pt-12 sm:pt-16">
          <a
            href="#pendidikan"
            className="flex flex-col items-center gap-2 text-xs text-[#99aab5] hover:text-white transition-colors group"
            aria-label="Gulir ke bagian pendidikan"
          >
            <span className="text-[11px] tracking-wider uppercase font-semibold text-[#8891f2]/80 group-hover:text-white transition-colors">
              Jelajahi Profil
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-[#50555f]/60 flex items-start justify-center p-1 group-hover:border-[#5865f2] transition-colors">
              <span className="w-1 h-2 bg-[#5865f2] rounded-full animate-scroll-glide" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
