'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section
      id="join"
      className="border-t border-line"
      style={{ background: 'linear-gradient(180deg, #160709 0%, #0A0A0A 100%)' }}
    >
      <div className="mx-auto max-w-3xl px-sm py-28 text-center md:px-md">
        <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          The Call
        </p>
        <h2 className="mb-5 font-display text-[clamp(3rem,9vw,5.5rem)] uppercase leading-[0.98] tracking-[0.01em]">
          Become one of
          <br />
          <span className="text-blood">the realest</span> ones.
        </h2>
        <p className="mx-auto mb-9 max-w-xl text-ash">
          If you&rsquo;ve been through hell and kept going &mdash; you&rsquo;re one of us. Join the family
          for first access to drops, stories, and the mission.
        </p>

        {status === 'success' ? (
          <div className="mx-auto max-w-xl rounded-btn border border-gold p-6 font-heading text-sm font-bold uppercase tracking-[0.08em] text-gold">
            Welcome to the family. Real never fold. &#10003;
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mb-5 flex max-w-xl flex-col gap-3 md:flex-row">
            <label htmlFor="tro-email" className="sr-only">
              Email address
            </label>
            <input
              id="tro-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === 'sending'}
              className="min-w-0 flex-1 rounded-btn border border-line bg-coal px-5 py-[18px] text-base text-bone placeholder:text-ash focus:border-blood focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-btn bg-blood px-9 py-[18px] font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-colors hover:bg-blood-ember disabled:opacity-60"
            >
              {status === 'sending' ? 'Joining…' : 'Join the Family'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p role="alert" className="mb-5 text-sm text-blood-ember">
            {errorMsg}
          </p>
        )}

        <p className="text-xs uppercase tracking-[0.08em] text-ash">
          Drops &bull; Stories &bull; First Access &mdash; No spam. No watered-down versions.
        </p>
      </div>
    </section>
  );
}
