"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#skill", label: "Skill" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("tentang");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0e0f2d]/80 border-b border-white/10 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="#tentang"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple rounded-lg"
          onClick={closeMenu}
        >
          <div className="w-10 h-10 rounded-xl bg-[#5865f2] flex items-center justify-center text-white font-extrabold text-lg tracking-tight group-hover:bg-[#3442d9] transition-colors">
            RH
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base tracking-tight font-display">
              Rian Hartokusumo
            </span>
            <span className="text-xs text-[#babcd9] font-medium hidden sm:inline">
              Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-[#babcd9] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#kontak">
            <Button variant="header" size="sm" className="font-semibold px-4">
              Kirim Pesan
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#babcd9] hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple cursor-pointer"
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#23272a] border-b border-[#50555f]/40 px-6 py-6 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Navigasi Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#50555f]/40">
            <a href="#kontak" onClick={closeMenu} className="w-full">
              <Button variant="primary" className="w-full font-semibold">
                Kirim Pesan
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
