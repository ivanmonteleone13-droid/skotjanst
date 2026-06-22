"use client";

import { useCallback, useEffect, useState } from "react";
import { business } from "@/lib/business";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close]);

  const active = activeIndex !== null ? business.gallery[activeIndex] : null;

  return (
    <section id="galleri" className="bg-[var(--dark)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">
            Resultat
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Före &amp; efter</h2>
          <p className="mt-4 text-white/80">
            Se transformationer från stolen — klicka på en bild för att förstora.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.gallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-[var(--secondary)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]"
            >
              <div className="grid grid-cols-2">
                <div
                  className={`aspect-square bg-gradient-to-br ${item.before} flex items-center justify-center`}
                  aria-hidden
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Före
                  </span>
                </div>
                <div
                  className={`aspect-square bg-gradient-to-br ${item.after} flex items-center justify-center`}
                  aria-hidden
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                    Efter
                  </span>
                </div>
              </div>
              <p className="bg-white/5 px-4 py-3 text-sm font-medium group-hover:bg-white/10">
                {item.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Galleri: ${active.label}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Stäng"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2">
              <div className={`aspect-[3/4] bg-gradient-to-br ${active.before} flex flex-col items-center justify-center`}>
                <span className="text-lg font-semibold text-white/60">Före</span>
              </div>
              <div className={`aspect-[3/4] bg-gradient-to-br ${active.after} flex flex-col items-center justify-center`}>
                <span className="text-lg font-semibold text-white/90">Efter</span>
              </div>
            </div>
            <p className="bg-[var(--primary)] px-6 py-4 text-center text-lg font-semibold">
              {active.label}
            </p>
            <div className="flex justify-center gap-4 bg-[var(--primary)] pb-6">
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
                className="rounded-full border border-white/20 px-4 py-2 text-sm disabled:opacity-30"
              >
                ← Föregående
              </button>
              <button
                type="button"
                disabled={activeIndex === business.gallery.length - 1}
                onClick={() =>
                  setActiveIndex((i) =>
                    i !== null && i < business.gallery.length - 1 ? i + 1 : i
                  )
                }
                className="rounded-full border border-white/20 px-4 py-2 text-sm disabled:opacity-30"
              >
                Nästa →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
