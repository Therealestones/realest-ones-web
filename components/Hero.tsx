export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(163,22,33,0.22), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[26vw] uppercase leading-none text-bone/[0.04] md:text-[20vw]"
      >
        Realest
      </div>
      <div className="relative mx-auto max-w-shell px-sm pb-20 pt-24 md:px-md md:pb-24 md:pt-28">
        <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Jacksonville &bull; Est. 2026 &bull; Purpose is the real legacy
        </p>
        <h1 className="mb-7 font-display text-[clamp(3.5rem,12vw,8rem)] uppercase leading-[0.95] tracking-[0.01em]">
          Real
          <br />
          <span className="text-blood">Never</span> Fold.
        </h1>
        <p className="mb-3 max-w-xl text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed">
          Apparel for the ones who carry weight quietly &mdash; who show up raw, stay
          solid when the room gets shaky, and move with purpose.
        </p>
        <p className="mb-10 font-heading text-sm font-bold uppercase tracking-[0.08em] text-ash">
          Not for ourselves alone are we born.
        </p>
        <div className="mb-7 flex flex-wrap gap-4">
          <a
            href="#drop"
            className="rounded-btn border-2 border-blood bg-blood px-9 py-[18px] font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-all hover:-translate-y-1 hover:border-blood-ember hover:bg-blood-ember hover:shadow-[0_15px_30px_rgba(215,38,61,0.25)]"
          >
            Shop the Drop
          </a>
          <a
            href="#manifesto"
            className="rounded-btn border-2 border-slate bg-transparent px-9 py-[18px] font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-all hover:-translate-y-1 hover:border-bone hover:shadow-[0_15px_30px_rgba(244,241,234,0.10)]"
          >
            Our Manifesto
          </a>
        </div>
        <p className="text-[13px] uppercase tracking-[0.06em] text-ash">
          <strong className="text-blood-ember">Drop 002 &mdash; Coming This Fall</strong> &mdash; limited
          units. When it&rsquo;s gone, it&rsquo;s gone.
        </p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 opacity-40"
      >
        <div className="flex h-[35px] w-[20px] justify-center rounded-[10px] border-2 border-bone pt-[6px]">
          <div className="scroll-dot h-[8px] w-[4px] rounded-[2px] bg-bone" />
        </div>
      </div>
    </section>
  );
}
