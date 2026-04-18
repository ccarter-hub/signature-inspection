import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, address, message } = body;

    if (!name || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const notifyEmail = process.env.CONTACT_EMAIL ?? "info@signatureinspectionservice.com";

    if (process.env.RESEND_API_KEY) {
      const emailBody = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        message ? `Message: ${message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Signature Inspection Website <noreply@signatureinspectionservice.com>",
          to: notifyEmail,
          subject: `New Inspection Request from ${name}`,
          text: emailBody,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
