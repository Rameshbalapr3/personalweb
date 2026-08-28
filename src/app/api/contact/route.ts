import { contactFormSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(value: string | undefined): value is string {
  return (
    !!value &&
    value !== "EMAIL" &&
    !value.startsWith("YOUR_") &&
    value.includes("@")
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    const contactEmail = process.env.CONTACT_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ??
      "Portfolio Contact <onboarding@resend.dev>";

    if (!isValidEmail(contactEmail)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Contact form is not configured. Set CONTACT_EMAIL in .env.local",
        },
        { status: 503 }
      );
    }

    const recipientEmail = contactEmail;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service not configured. Add RESEND_API_KEY to .env.local",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);

      const resendMessage =
        typeof error.message === "string" ? error.message : "Unknown Resend error";

      return NextResponse.json(
        {
          success: false,
          message: resendMessage.includes("only send testing emails")
            ? "Email service is in test mode: Resend can only deliver to your verified signup email. Verify a domain at resend.com or use the same email you signed up with for CONTACT_EMAIL."
            : `Could not send email: ${resendMessage}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks! Your message was sent. I'll reply to the email you provided.",
      emailId: data?.id,
    });
  } catch (error) {
    console.error("[Contact Form] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
