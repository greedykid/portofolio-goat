"use client";

import * as React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#23272a] border-t border-[#50555f]/40 pt-16 pb-12 mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#5865f2] flex items-center justify-center text-white font-extrabold text-base tracking-tight">
                RH
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight font-display">
                {portfolioData.profile.name}
              </span>
            </div>
            <p className="text-sm text-[#babcd9] max-w-md leading-relaxed">
              {portfolioData.profile.shortBio}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#57f287] inline-block animate-pulse" />
              <span className="text-xs text-[#57f287] font-semibold tracking-wide">
                Tersedia untuk peluang kerja & proyek web
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#babcd9]">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#pendidikan" className="hover:text-white transition-colors">
                  Pendidikan
                </a>
              </li>
              <li>
                <a href="#skill" className="hover:text-white transition-colors">
                  Keahlian & Skill
                </a>
              </li>
              <li>
                <a href="#proyek" className="hover:text-white transition-colors">
                  Proyek Unggulan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider">
              Koneksi
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#babcd9]">
              {portfolioData.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <span>{social.platform}</span>
                    <span className="text-xs text-[#99aab5] group-hover:text-white">
                      ({social.username})
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#50555f]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#99aab5]">
          <p>
            © {currentYear} {portfolioData.profile.name}. Hak Cipta Dilindungi.
          </p>

          <a
            href="#tentang"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/5"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
