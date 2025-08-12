import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "" } = (await req.json()) as Body;
    if (!message || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || siteConfig.email;
    if (!apiKey || !toEmail) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const subject = `New message from portfolio${name ? ` - ${name}` : ""}`;
    const text = `From: ${name || "Anonymous"} <${email}>

${message}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json({ error: "Failed to send", detail }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

