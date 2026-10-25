import { NextResponse } from 'next/server';

/**
 * POST /api/join — family signup form handler.
 *
 * Every signup is delivered to realestones@outlook.com.
 *
 * Two sending paths (in order of preference):
 * 1. RESEND (recommended, free tier): set RESEND_API_KEY (+ optional RESEND_FROM)
 *    in your hosting env vars. Signups arrive from your verified sender.
 * 2. FORMSUBMIT fallback (free, no signup): forwards to FormSubmit's ajax
 *    endpoint. ONE-TIME ACTIVATION REQUIRED: submit the form once, then open
 *    realestones@outlook.com and click the FormSubmit activation link.
 *    Until activated, submissions are held, not delivered.
 */

const DESTINATION = 'realestones@outlook.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendViaResend(signupEmail: string): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: 'RESEND_API_KEY is not set' };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'The Realest Ones <noreply@realestones.com>',
      to: [DESTINATION],
      subject: 'New family signup — The Realest Ones',
      text: `New "Join the Family" signup from therealestones.com\n\nEmail: ${signupEmail}\nTime: ${new Date().toISOString()}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    return { ok: false, error: `Resend rejected the request (${res.status}): ${body.slice(0, 200)}` };
  }
  return { ok: true };
}

async function sendViaFormSubmit(signupEmail: string): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(DESTINATION)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      email: signupEmail,
      _subject: 'New family signup — The Realest Ones',
      message: `New "Join the Family" signup.\n\nEmail: ${signupEmail}\nTime: ${new Date().toISOString()}`,
    }),
  });

  if (!res.ok) {
    return { ok: false, error: `FormSubmit rejected the request (${res.status}).` };
  }
  return { ok: true };
}

export async function POST(req: Request) {
  let email: string = '';
  try {
    const body = await req.json();
    email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  // Path 1: Resend (preferred when configured)
  if (process.env.RESEND_API_KEY) {
    const result = await sendViaResend(email);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }
    return NextResponse.json({ ok: true, via: 'resend' });
  }

  // Path 2: FormSubmit fallback (needs one-time activation — see file header)
  try {
    const result = await sendViaFormSubmit(email);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }
    return NextResponse.json({ ok: true, via: 'formsubmit' });
  } catch {
    return NextResponse.json(
      { error: 'Could not deliver your signup right now. Please try again in a moment.' },
      { status: 502 }
    );
  }
}
