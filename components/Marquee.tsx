const PHRASES = ['Real — Never Fold', 'Built Different — Always Loyal', 'No Filter — All Heart'];

function Strip() {
  return (
    <>
      {PHRASES.map((p) => (
        <span key={p} className="mx-6 inline-flex items-center">
          {p} <span className="ml-12 text-blood">&bull;</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-line bg-[#111111] py-[18px]">
      <div className="inline-block animate-marquee font-display text-[22px] uppercase tracking-[0.06em]">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
