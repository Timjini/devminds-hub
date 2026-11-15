import { Contact } from '@/app/features/contact-us/types';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { turnstileToken, email, purpose, message, phone } = body;
    const fullName = body.name || body.fullName || 'Unknown';

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY is missing in environment variables');
      return NextResponse.json({ error: 'Server Turnstile secret not configured' }, { status: 500 });
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      }),
    });

    const outcome = await verifyRes.json();

    if (!outcome.success) {
      console.error('Cloudflare Turnstile verification failed:', outcome['error-codes']);
      return NextResponse.json(
        {
          error: 'Bot detected / Invalid token',
          codes: outcome['error-codes'], // e.g. ['invalid-input-secret'] or ['timeout-or-duplicate']
        },
        { status: 403 }
      );
    }

    const to = process.env.NEXT_PUBLIC_EMAIL_TO;
    const smtpUser = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      pool: true,
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to,
      replyTo: email,
      subject: purpose || 'No Subject',
      text: message,
      html: emailTemplate({ fullName, email, phone, purpose, message } as Contact),
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
