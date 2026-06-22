"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-semibold text-emerald-900">Tack för ditt meddelande!</p>
        <p className="mt-2 text-sm text-[var(--primary)]/70">
          Vi återkommer så snart vi kan. För snabbast svar, ring{" "}
          <a href={business.phoneLink} className="font-semibold underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5 rounded-2xl border border-[var(--primary)]/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <p className="text-sm text-[var(--primary)]/60">
        Ingen e-post? Ring oss direkt på{" "}
        <a href={business.phoneLink} className="font-semibold text-[var(--primary)] hover:underline">
          {business.phone}
        </a>
        .
      </p>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--primary)]">
          Namn
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[var(--primary)]">
          Telefon <span className="text-[var(--secondary)]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--primary)]">
          E-post <span className="font-normal text-[var(--primary)]/50">(valfritt)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--primary)]">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="T.ex. önskad tid, typ av klippning..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[var(--dark)] sm:w-auto"
      >
        Skicka meddelande
      </button>
    </form>
  );
}
