"use client";

import { useCallback, useEffect, useState } from "react";
import { business } from "@/lib/business";

type GalleryItem = (typeof business.gallery)[number];

function hasBeforeAfter(item: GalleryItem): item is GalleryItem & { beforeImage: string; afterImage: string } {
  return "beforeImage" in item && "afterImage" in item && !!item.beforeImage && !!item.afterImage;
}

function hasSingleImage(item: GalleryItem): item is GalleryItem & { image: string } {
  return "image" in item && !!item.image;
}

function GalleryTile({ item }: { item: GalleryItem }) {
  if (hasBeforeAfter(item)) {
    return (
      <div className="grid grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <img src={item.beforeImage} alt={`${item.label} — före`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-white/90">Före</span>
        </div>
        <div className="relative aspect-square overflow-hidden">
          <img src={item.afterImage} alt={`${item.label} — efter`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-white/90">Efter</span>
        </div>
      </div>
    );
  }

  if (hasSingleImage(item)) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.label} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
      </div>
    );
  }

  const before = "before" in item ? item.before : "from-[#3D2914] to-[#5C4033]";
  const after = "after" in item ? item.after : "from-[#C9A227]/40 to-[#5C4033]";

  return (
    <div className="grid grid-cols-2">
      <div className={`aspect-square bg-gradient-to-br ${before} flex items-center justify-center`} aria-hidden>
        <span className="text-xs font-medium uppercase tracking-wider text-white/50">Före</span>
      </div>
      <div className={`aspect-square bg-gradient-to-br ${after} flex items-center justify-center`} aria-hidden>
        <span className="text-xs font-medium uppercase tracking-wider text-white/80">Efter</span>
      </div>
    </div>
  );
}

function GalleryLightbox({ item }: { item: GalleryItem }) {
  if (hasBeforeAfter(item)) {
    return (
      <div className="grid grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={item.beforeImage} alt={`${item.label} — före`} className="h-full w-full object-cover" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={item.afterImage} alt={`${item.label} — efter`} className="h-full w-full object-cover" />
        </div>
      </div>
    );
  }

  if (hasSingleImage(item)) {
    return (
      <div className="relative aspect-[4/3] max-h-[70vh] overflow-hidden">
        <img src={item.image} alt={item.label} className="h-full w-full object-contain bg-black" />
      </div>
    );
  }

  return null;
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [activeIndex, close]);

  const active = activeIndex !== null ? business.gallery[activeIndex] : null;

  return (
    <section id="galleri" className="bg-[var(--dark)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">Galleri</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Hantverk i bild</h2>
          <p className="mt-4 text-white/80">Riktiga bilder från {business.name} på Stora Torget — klicka för att förstora.</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.gallery.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-[var(--secondary)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]">
              <GalleryTile item={item} />
              <p className="bg-white/5 px-4 py-3 text-sm font-medium group-hover:bg-white/10">{item.label}</p>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={`Galleri: ${active.label}`} onClick={close}>
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20" aria-label="Stäng">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <GalleryLightbox item={active} />
            <p className="bg-[var(--primary)] px-6 py-4 text-center text-lg font-semibold">{active.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
