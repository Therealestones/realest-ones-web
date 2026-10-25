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
      <div className="relative mx-auto max-w-shell px-sm pb-20 pt-24 md:px-md md:pb-24 md:pt-28">
        <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Jacksonville &bull; Est. 2026 &bull; Purpose is the real flex
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
            className="rounded-btn border-2 border-blood bg-blood px-9 py-[18px] font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-colors hover:border-blood-ember hover:bg-blood-ember"
          >
            Shop the Drop
          </a>
          <a
            href="#manifesto"
            className="rounded-btn border-2 border-slate bg-transparent px-9 py-[18px] font-heading text-sm font-bold uppercase tracking-[0.12em] text-bone transition-colors hover:border-bone"
          >
            Our Manifesto
          </a>
        </div>
        <p className="text-[13px] uppercase tracking-[0.06em] text-ash">
          <strong className="text-blood-ember">Drop 002 &mdash; Coming This Fall</strong> &mdash; limited
          units. When it&rsquo;s gone, it&rsquo;s gone.
        </p>
      </div>
    </section>
  );
}
