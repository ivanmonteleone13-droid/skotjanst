import { business } from "@/lib/business";

export default function CraftStory() {
  return (
    <section id="hantverk" className="bg-[var(--accent)] py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--secondary)]">Vårt hantverk</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Skor som håller — reparationer med själ
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]/75">
            På {business.address.street} i Uppsala har vi lagat skor, väskor och läder i generationer.
            Varje reparation görs för hand med kvalitetsmaterial som förlänger livet på dina favoriter.
          </p>
          <ul className="mt-8 space-y-3 text-[var(--foreground)]/80">
            <li>✓ Klackning & sulning med premiumläder</li>
            <li>✓ Skidpjäxor & dragkedjor — inget är för svårt</li>
            <li>✓ Nyckel- och låsservice under samma tak</li>
          </ul>
        </div>
        <div className="flex aspect-square items-center justify-center bg-[var(--primary)] text-[var(--accent)]">
          <div className="text-center">
            <span className="text-8xl" aria-hidden>👞</span>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-2xl">{business.rating}★ betyg</p>
          </div>
        </div>
      </div>
    </section>
  );
}
