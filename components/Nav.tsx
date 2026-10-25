export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between px-sm py-4 md:px-md">
        <a href="#top" className="font-display text-xl uppercase tracking-wide text-bone">
          The Realest <span className="text-blood">Ones</span>
        </a>
        <a
          href="#drop"
          className="rounded-btn bg-blood px-5 py-3 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-bone transition-colors hover:bg-blood-ember"
        >
          Shop the Drop
        </a>
      </div>
    </header>
  );
}
