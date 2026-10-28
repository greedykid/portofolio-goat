import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactFormSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Data formulir tidak valid.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = result.data;

    // Honeypot check untuk menghentikan bot spam tanpa alert
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Pesan berhasil dikirim.",
      });
    }

    const recipientEmail =
      process.env.CONTACT_TO_EMAIL || "rianharto1945@gmail.com";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!resend) {
      // Fallback dev mode jika RESEND_API_KEY belum diisi di environment
      console.warn(
        `[Contact API] RESEND_API_KEY tidak ditemukan. Pesan dari ${name} (${email}) dicatat di log.`
      );
      return NextResponse.json({
        success: true,
        message:
          "Pesan Anda berhasil diterima (mode pratinjau: API email belum disetel).",
      });
    }

    const response = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portofolio] ${subject} — dari ${name}`,
      text: `Pesan baru dari website portofolio:\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`,
    });

    if (response.error) {
      console.error("[Contact API Error]", response.error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Gagal mengirim pesan melalui penyedia email. Silakan hubungi langsung ke rianharto1945@gmail.com",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan Anda telah berhasil terkirim.",
    });
  } catch (error) {
    console.error("[Contact API Catch Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server saat memproses pesan.",
      },
      { status: 500 }
    );
  }
}
