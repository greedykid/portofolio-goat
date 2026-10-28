import * as React from "react";
import { ArrowDown, Mail, Code2, GraduationCap, CheckCircle2 } from "lucide-react";
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

          {/* Right Column: Visual Feature Stage Card (Discord Feature Stage Style) */}
          <div className="lg:col-span-5">
            <div className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
              {/* Background ambient gradient accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5865f2]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#50555f]/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#5865f2] flex items-center justify-center text-white font-extrabold text-xl tracking-tight">
                    RH
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base font-display">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-[#babcd9]">
                      Web Developer / Sistem Informasi
                    </p>
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#57f287] shadow-sm shadow-[#57f287]/50" />
              </div>

              {/* Status Box */}
              <div className="bg-[#2c2f33] rounded-xl p-4 border border-[#50555f]/30 flex flex-col gap-2">
                <span className="text-xs text-[#99aab5] uppercase font-bold tracking-wider">
                  Fokus Pengembangan Saat Ini
                </span>
                <p className="text-sm text-white font-medium">
                  Pengembangan aplikasi web berbasis framework Laravel & perancangan basis data relasional.
                </p>
              </div>

              {/* Key Competency List */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs text-[#99aab5] uppercase font-bold tracking-wider">
                  Spesialisasi Teknis
                </span>
                <ul className="flex flex-col gap-2 text-sm text-[#babcd9]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5865f2] shrink-0" />
                    <span>Pembuatan arsitektur sistem informasi e-commerce & katalog</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5865f2] shrink-0" />
                    <span>Integrasi database relasional MySQL & query performan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5865f2] shrink-0" />
                    <span>Antarmuka responsif ramah pengguna mobile & desktop</span>
                  </li>
                </ul>
              </div>

              {/* Verified Education Footnote */}
              <div className="mt-2 pt-4 border-t border-[#50555f]/30 flex items-center justify-between text-xs text-[#99aab5]">
                <span>Pendidikan Terverifikasi</span>
                <span className="text-white font-medium">S1 Sistem Informasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
