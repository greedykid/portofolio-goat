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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Badge variant="blurple">PORTFOLIO RESMI</Badge>
              <Badge variant="success">LULUSAN S1 SISTEM INFORMASI</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.05] tracking-tight font-display">
              SIAP MEMBANGUN <br className="hidden sm:inline" />
              SOLUSI WEB <br className="hidden sm:inline" />
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
                <Button variant="primary" size="lg" className="font-semibold shadow-lg shadow-[#5865f2]/20">
                  <Mail className="w-5 h-5" />
                  {profile.ctaTextPrimary}
                </Button>
              </a>

              <a href="#proyek">
                <Button variant="secondary" size="lg" className="font-semibold">
                  {profile.ctaTextSecondary}
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Quick Fact Badges */}
            <div className="pt-6 border-t border-[#50555f]/30 flex flex-wrap gap-6 text-xs text-[#babcd9]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#5865f2]" />
                <span>Universitas Gunadarma</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#57f287]" />
                <span>Laravel • PHP • MySQL • Bootstrap</span>
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
      </div>
    </section>
  );
}
