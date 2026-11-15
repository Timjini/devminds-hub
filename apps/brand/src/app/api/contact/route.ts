import { Contact } from '@/app/features/contact-us/types';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { turnstileToken, fullName, email, purpose, message, phone }: { turnstileToken: string } & Contact = await req.json();

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 });
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: turnstileToken,
      }),
    });

    const outcome = await verifyRes.json();

    if (!outcome.success) {
      return NextResponse.json({ error: 'Bot detected / Invalid token' }, { status: 403 });
    }

    const transporter = nodemailer.createTransport(
         `smtps://${process.env.SMTP_USER}:${process.env.SMTP_PASS}@${process.env.SMTP_HOST}/?pool=true`
       );

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: purpose || 'No Subject',
      text: message,
      html: emailTemplate({ fullName, email, phone, purpose, message })
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

const emailTemplate = ({ fullName, email, phone, purpose, message }: Contact): string => {
  return `<div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #ddd; padding: 24px; border-radius: 12px;">
      <h2 style="text-align: center; color: #2E86AB;">📋 New Contact Form</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Enquiry Context:</strong> ${purpose}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>`;
};
