const TESTIMONIALS = [
  {
    quote: (
      <>
        I built this for people who <em className="not-italic text-blood-ember">refuse to fold</em>.
        People rediscovering their purpose. Purpose is the Real Legacy.
      </>
    ),
    who: 'Greg Mann, Founder — Jacksonville',
  },
  {
    quote: (
      <>
        Hand-pressed in Jacksonville. Small batches, limited runs,{' '}
        <em className="not-italic text-blood-ember">no mass production</em>.
      </>
    ),
    who: 'How It’s Made',
  },
  {
    quote: (
      <>
        Not for ourselves alone are we born. That line is{' '}
        <em className="not-italic text-blood-ember">on the back</em> of the Fallen Angel hoodie for a
        reason.
      </>
    ),
    who: 'The Motto',
  },
];

const STATS = [
  { num: '100', suffix: '%', label: 'Purpose-driven — every piece carries the mission' },
  { num: '20', suffix: '×', label: 'Units per Signature Drop — collectible by design' },
  { num: '01', suffix: '.', label: 'Vow — turn pain into purpose' },
];

export default function SocialProof() {
  return (
    <section id="manifesto" className="mx-auto max-w-shell px-sm py-24 md:px-md">
      <p className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        The Movement
      </p>
      <h2 className="mb-4 font-heading text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
        Worn by the ones who stayed solid
      </h2>
      <p className="mb-12 max-w-2xl text-ash">
        This isn&rsquo;t fashion. It&rsquo;s armor &mdash; testimony you survived something that tried to
        break you. Here&rsquo;s the truth of it.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.who} className="flex flex-col gap-5 rounded-card border border-line bg-coal p-8">
            <blockquote className="font-display text-xl uppercase leading-[1.35] tracking-[0.01em]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="text-[13px] uppercase tracking-[0.08em] text-ash">
              &mdash; {t.who}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="mb-2 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none">
              {s.num}
              <span className="text-blood">{s.suffix}</span>
            </div>
            <p className="text-xs uppercase tracking-[0.12em] text-ash">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
