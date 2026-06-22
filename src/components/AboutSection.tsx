import { business, getFullAddress } from "@/lib/business";

export default function AboutSection() {
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <section id="om-oss" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            {aboutImage ? (
              <img src={aboutImage} alt={`${business.name} — skomakeri på ${getFullAddress()}`} className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)]/30 p-8 text-center text-white" role="img" aria-label={`Om ${business.name}`}>
                <span className="text-6xl" aria-hidden>👞</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">Om oss</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--primary)] sm:text-4xl">{business.about.headline}</h2>
            <div className="mt-6 space-y-4 text-[var(--primary)]/80 leading-relaxed">
              {business.about.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--primary)]/10 bg-[var(--accent)] px-6 py-4">
              <p className="text-3xl font-bold text-[var(--primary)]">{business.rating}</p>
              <p className="text-sm text-[var(--primary)]/70">{business.reviewCount} omdömen på Reco.se</p>
              <p className="mt-2 text-sm text-[var(--primary)]/70">Sedan {business.foundedYear} · {getFullAddress()}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={business.phoneLink} className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--dark)]">Ring oss</a>
              {"websiteUrl" in business && business.websiteUrl && (
                <a href={business.websiteUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">Besök webbplats</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
