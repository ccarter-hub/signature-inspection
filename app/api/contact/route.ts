import { NextResponse } from "next/server";

const MAX_LENGTHS = { name: 120, phone: 30, address: 250, message: 1500 };

function strip(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>/g, "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot — bots fill this; real users don't
    if (body.bot_field) {
      return NextResponse.json({ success: true }); // silent reject
    }

    const name    = strip(body.name).slice(0, MAX_LENGTHS.name);
    const phone   = strip(body.phone).slice(0, MAX_LENGTHS.phone);
    const address = strip(body.address).slice(0, MAX_LENGTHS.address);
    const message = strip(body.message).slice(0, MAX_LENGTHS.message);

    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: "Name, phone, and property address are required." },
        { status: 400 },
      );
    }

    const notifyEmail = process.env.CONTACT_EMAIL ?? "info@signatureinspectionservice.com";

    if (process.env.RESEND_API_KEY) {
      const emailBody = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Property Address: ${address}`,
        message ? `Message: ${message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Signature Inspection Website <noreply@signatureinspectionservice.com>",
          to: notifyEmail,
          subject: `New Inspection Request — ${name}`,
          text: emailBody,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
