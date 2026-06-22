import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="relative border-b-4 border-[var(--secondary)] bg-[var(--accent)]">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-center bg-[var(--primary)] px-8 py-16 text-[var(--accent)] lg:px-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--secondary)]">Hantverk sedan generationer</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hantverk som <span className="text-[var(--secondary)]">håller i generationer</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[var(--accent)]/90">{business.description}</p>
          <div className="mt-8 flex gap-4">
            <a href={business.phoneLink} className="bg-[var(--secondary)] px-8 py-3 font-semibold text-[var(--dark)]">Ring oss</a>
            <a href="#tjanster" className="border border-[var(--accent)]/40 px-8 py-3 font-semibold">Våra tjänster</a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-[var(--dark)] p-12">
          <div className="text-center">
            <span className="text-9xl" aria-hidden>👞</span>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-2xl text-[var(--secondary)]">{business.address.street}</p>
            <p className="text-sm text-white/60">{business.address.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
