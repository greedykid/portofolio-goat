"use client";

import * as React from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setStatusMessage(
        data.message || "Terima kasih! Pesan Anda telah berhasil terkirim."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Terjadi gangguan saat mengirim formulir. Silakan gunakan kontak email langsung.";
      setStatusMessage(errorMsg);
    }
  };

  return (
    <section id="kontak" className="py-16 md:py-20 border-t border-[#50555f]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="blurple">HUBUNGI SAYA</Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight font-display">
                MULAI PERCAKAPAN
              </h2>
              <p className="text-sm sm:text-base text-[#babcd9] leading-relaxed">
                Apakah Anda memiliki tawaran pekerjaan, kebutuhan pembuatan website, atau ingin berdiskusi seputar teknologi? Silakan kirimkan pesan melalui formulir atau kontak langsung di bawah ini.
              </p>

              {/* Direct Channels */}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="bg-[#23272a] border border-[#50555f]/40 hover:border-[#5865f2] rounded-xl p-4 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2c2f33] flex items-center justify-center text-[#5865f2] group-hover:bg-[#5865f2] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#99aab5] font-semibold uppercase tracking-wider">
                      Email Langsung
                    </span>
                    <span className="text-sm font-bold text-white">
                      {portfolioData.profile.email}
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/ini.yannnn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#23272a] border border-[#50555f]/40 hover:border-[#eb459e] rounded-xl p-4 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2c2f33] flex items-center justify-center text-[#eb459e] group-hover:bg-[#eb459e] group-hover:text-white transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#99aab5] font-semibold uppercase tracking-wider">
                      Instagram
                    </span>
                    <span className="text-sm font-bold text-white">
                      @ini.yannnn
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Note box */}
            <div className="bg-[#23272a]/60 border border-[#50555f]/30 rounded-xl p-4 text-xs text-[#99aab5] leading-relaxed">
              Pesan yang Anda kirimkan melalui formulir ini akan langsung diteruskan ke kotak masuk email pemilik portofolio secara privat dan aman.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#23272a] border border-[#50555f]/40 rounded-[24px] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Formulir Kirim Pesan
              </h3>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-[#57f287]/10 border border-[#57f287]/40 flex items-start gap-3 text-sm text-[#57f287]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Berhasil Terkirim: </strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 flex items-start gap-3 text-sm text-red-300">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Gagal Mengirim: </strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot field (hidden for anti-spam) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                {/* Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-[#babcd9] uppercase tracking-wider"
                    >
                      Nama Lengkap <span className="text-[#5865f2]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={80}
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-[#2c2f33] border border-[#50555f]/50 focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#99aab5] outline-none transition-all disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-[#babcd9] uppercase tracking-wider"
                    >
                      Alamat Email <span className="text-[#5865f2]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-[#2c2f33] border border-[#50555f]/50 focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#99aab5] outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subjek */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold text-[#babcd9] uppercase tracking-wider"
                  >
                    Subjek Pesan <span className="text-[#5865f2]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={120}
                    placeholder="Contoh: Tawaran Proyek Website"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-[#2c2f33] border border-[#50555f]/50 focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#99aab5] outline-none transition-all disabled:opacity-50"
                  />
                </div>

                {/* Isi Pesan */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-[#babcd9] uppercase tracking-wider"
                  >
                    Isi Pesan <span className="text-[#5865f2]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder="Tuliskan pesan, rincian proyek, atau pertanyaan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-[#2c2f33] border border-[#50555f]/50 focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2]/20 rounded-xl p-4 text-sm text-white placeholder-[#99aab5] outline-none transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto font-semibold px-8"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
