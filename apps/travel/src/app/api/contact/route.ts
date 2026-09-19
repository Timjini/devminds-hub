import { ContactProps } from "@/entities/contact";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, message, phone }: ContactProps = await req.json();

    const transporter = nodemailer.createTransport(
      `smtps://${process.env.SMTP_USER}:${process.env.SMTP_PASS}@${process.env.SMTP_HOST}/?pool=true`,
    );

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_TO,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: "New From From Maroko Ekspert",
      text: message,
      html: emailTemplate({ fullName, email, phone, message }),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}

const emailTemplate = ({
  fullName,
  email,
  phone,
  message,
}: ContactProps): string => {
  return `<div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #ddd; padding: 24px; border-radius: 12px;">
          <h2 style="text-align: center; color: #2E86AB;">📋 New Contact Form</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>`;
};
