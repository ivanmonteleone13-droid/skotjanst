"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--accent)] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Vanliga frågor
          </h2>
          <p className="mt-4 text-lg text-[var(--primary)]/70">
            Allt du behöver veta innan du bokar din herrklippning i Uppsala.
          </p>
        </div>
        <div className="mt-12 space-y-3">
          {business.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[var(--primary)]/8 bg-white shadow-sm"
              >
                <button
                  type="button"
                  id={`faq-q-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[var(--primary)] transition hover:bg-[var(--accent)]/50"
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-[var(--secondary)] transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-a-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                    className="border-t border-[var(--primary)]/5 px-6 py-4 text-sm leading-relaxed text-[var(--primary)]/75"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
