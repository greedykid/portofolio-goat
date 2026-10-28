import * as React from "react";
import { Award, ShieldCheck, Clock } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function CertificatesSection() {
  const { certificates } = portfolioData;

  return (
    <section id="sertifikat" className="py-16 md:py-20 border-t border-[#50555f]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2">
            <Badge variant="blurple">VERIFIKASI KOMPETENSI</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
            SERTIFIKAT & LISENSI
          </h2>
          <p className="text-sm sm:text-base text-[#babcd9] max-w-xl">
            Bukti verifikasi keahlian, pelatihan teknis, dan sertifikasi profesional yang telah ditempuh.
          </p>
        </div>

        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#23272a] border border-[#50555f]/40 rounded-[20px] p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5865f2]/20 flex items-center justify-center text-[#5865f2] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-[#8891f2] font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#23272a] border border-[#50555f]/30 rounded-[20px] p-8 sm:p-10 text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#2c2f33] border border-[#50555f]/40 flex items-center justify-center text-[#99aab5]">
              <Clock className="w-7 h-7 text-[#8891f2]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-bold text-white font-display">
                Dokumen Sertifikasi Sedang Dikurasi
              </h3>
              <p className="text-sm text-[#babcd9] max-w-md leading-relaxed">
                Berkas sertifikat pelatihan dan uji kompetensi sedang dipersiapkan dan akan ditampilkan segera setelah verifikasi digital selesai.
              </p>
            </div>
            <Badge variant="outline" className="mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#57f287]" />
              Akan diperbarui secara bertahap
            </Badge>
          </div>
        )}
      </div>
    </section>
  );
}
