'use client';

import { useState } from 'react';
import { products, formatPrice, type Product } from '../data/products';

function ProductImage({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // No photo yet: a coming-soon piece gets a COMING SOON treatment
    // rather than a blank spot. The photo takes over automatically
    // once it lands in public/images/.
    if (product.stockLabel.toLowerCase().includes('coming soon')) {
      return (
        <div className="flex aspect-[4/5] flex-col items-center justify-center bg-elevated px-6 text-center">
          <span className="font-display text-6xl uppercase leading-[0.95] text-bone">
            Coming
            <br />
            Soon
          </span>
        </div>
      );
    }
    // Branded placeholder — shows until you add the real image to public/images/
    return (
      <div className="flex aspect-[4/5] items-center justify-center bg-elevated">
        <span className="font-display text-7xl uppercase text-concrete">
          {product.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-[4/5] overflow-hidden bg-elevated">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function OfferBreakdown() {
  return (
    <section id="drop" className="border-y border-line bg-ink">
      <div className="mx-auto max-w-shell px-sm py-24 md:px-md">
        <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          The Arsenal
        </p>
        <h2 className="mb-4 font-heading text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
          Built like armor.
          <br />
          Worn like truth.
        </h2>
        <p className="mb-12 max-w-2xl text-ash">
          Small batches. Meaningful design. Limited runs &mdash; no restocks, no watered-down
          versions.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-card border border-line bg-coal"
            >
              <div
                className={`px-4 py-[10px] font-heading text-[11px] font-bold uppercase tracking-[0.18em] ${
                  p.flagGold ? 'bg-gold text-ink' : 'bg-blood text-bone'
                }`}
              >
                {p.flag}
              </div>
              <ProductImage product={p} />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 font-heading text-[22px] font-extrabold uppercase">{p.name}</h3>
                <p className="mb-5 flex-1 text-[15px] text-ash">{p.description}</p>
                <div className="mb-5 flex items-center justify-between border-t border-line pt-5">
                  <span className="font-display text-[28px]">{formatPrice(p.price)}</span>
                  <span className="text-xs uppercase tracking-[0.1em] text-blood-ember">
                    {p.stockLabel}
                  </span>
                </div>
                <a
                  href="#join"
                  className="rounded-btn bg-blood px-9 py-[18px] text-center font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-colors hover:bg-blood-ember"
                >
                  Get First Access
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
