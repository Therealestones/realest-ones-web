'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What makes The Realest Ones different?',
    a: 'We don\u2019t sell hype. Every piece is designed as recognition for people who live with purpose \u2014 survivors, rebuilders, quiet fighters. The apparel is the uniform; the movement is the point.',
  },
  {
    q: 'How do drops work?',
    a: 'Limited runs, announced to the family first. Signature pieces are capped \u2014 like the 12-unit Shaka Wear collab. When a drop sells out, it\u2019s retired. No restocks, no exceptions.',
  },
  {
    q: 'What\u2019s the fit and quality?',
    a: 'True-to-size with a structured streetwear fit. Built to be worn hard \u2014 like armor, not fast fashion.',
  },
  {
    q: 'Shipping & returns?',
    a: 'Ships from Jacksonville, FL within 3\u20135 business days. Unworn pieces can be returned within 30 days.',
  },
  {
    q: 'Where does my money go?',
    a: 'Back into the mission: recognizing people who carry weight quietly. Not for ourselves alone are we born \u2014 every purchase funds the next drop and the community behind it.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-shell px-sm py-24 md:px-md">
      <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Straight Answers
      </p>
      <h2 className="mb-12 font-heading text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
        Before you ask
      </h2>

      <div className="max-w-3xl">
        {FAQS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className="mb-3 overflow-hidden rounded-btn border border-line bg-coal">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left font-heading text-base font-bold uppercase tracking-[0.02em]"
              >
                {item.q}
                <span aria-hidden className="shrink-0 font-display text-2xl text-blood">
                  {open ? '\u2013' : '+'}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                className={`grid transition-all duration-200 ease-out ${
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] text-ash">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
