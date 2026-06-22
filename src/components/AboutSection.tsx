import { business } from "@/lib/business";

export default function AboutSection() {
  return (
    <section id="om-oss" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)]/30 shadow-xl"
            role="img"
            aria-label="Interiör och atmosfär hos #1 Frisör Uppsala"
          >
            <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
              <span className="text-6xl" aria-hidden>
                🪒
              </span>
              <p className="mt-6 text-2xl font-bold">Sedan {business.foundedYear}</p>
              <p className="mt-2 text-sm text-white/70">på Drottninggatan i Uppsala</p>
              <div className="mt-8 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-bold text-[var(--secondary)]">{business.rating}</p>
                <p className="text-xs text-white/60">{business.reviewCount}+ omdömen</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">
              Om oss
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
              {business.about.headline}
            </h2>
            <div className="mt-6 space-y-4 text-[var(--primary)]/80 leading-relaxed">
              {business.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--dark)]"
              >
                Boka din tid
              </a>
              <a
                href={business.phoneLink}
                className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                Ring oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
