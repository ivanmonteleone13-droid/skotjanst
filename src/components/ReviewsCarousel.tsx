"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[var(--secondary)]" aria-label={`${rating} av 5 stjärnor`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index: _index,
}: {
  review: (typeof business.testimonials)[number];
  index: number;
}) {
  return (
    <figure className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs text-white/60">
        — {review.author} · {review.source}
      </figcaption>
    </figure>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = business.testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="omdomen" className="bg-[var(--primary)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">
            Omdömen
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Vad våra kunder säger</h2>
          <p className="mt-4 text-white/80">
            {business.rating}/5 baserat på {business.reviewCount}+ recensioner — utdrag
            parafraserade från Bokadirekt.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--secondary)]/20 px-4 py-2 text-sm font-semibold text-[var(--secondary)]">
            <span aria-hidden>★</span>
            Verifierade kundomdömen
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {business.testimonials.map((review, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <ReviewCard review={review} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrent((c) => (c - 1 + total) % total)}
              className="rounded-full border border-white/20 p-2"
              aria-label="Föregående omdöme"
            >
              ←
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Välj omdöme">
              {business.testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition ${i === current ? "bg-[var(--secondary)] w-6" : "bg-white/30"}`}
                  aria-label={`Omdöme ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrent((c) => (c + 1) % total)}
              className="rounded-full border border-white/20 p-2"
              aria-label="Nästa omdöme"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {business.testimonials.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-8 py-3 text-sm font-semibold text-[var(--dark)] transition hover:bg-[var(--secondary)]"
          >
            Bli nästa nöjda kund — boka tid
          </a>
        </div>
      </div>
    </section>
  );
}
