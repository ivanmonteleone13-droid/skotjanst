import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">
            Kontakt
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
            Hitta &amp; kontakta oss
          </h2>
          <p className="mt-4 text-lg text-[var(--primary)]/70">
            Besök oss på Drottninggatan, ring direkt eller skicka ett meddelande.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactForm />

            <div className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--accent)] p-6">
              <h3 className="font-semibold text-[var(--primary)]">Kontaktuppgifter</h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-[var(--primary)]/80">
                <p>
                  <strong className="text-[var(--primary)]">Adress:</strong>
                  <br />
                  {getFullAddress()}
                </p>
                <p>
                  <strong className="text-[var(--primary)]">Telefon:</strong>
                  <br />
                  <a href={business.phoneLink} className="font-semibold text-[var(--primary)] hover:underline">
                    {business.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-[var(--primary)]">Bokning:</strong>
                  <br />
                  <a
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--secondary)] hover:underline"
                  >
                    {business.bookingLabel}
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--accent)] p-6">
              <h3 className="font-semibold text-[var(--primary)]">Öppettider</h3>
              <p className="mt-2 text-xs text-[var(--primary)]/60">{business.hours.note}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {business.hours.regular.map((row) => (
                  <li key={row.day} className="flex justify-between text-[var(--primary)]/80">
                    <span>{row.day}</span>
                    <span className={row.hours === "Stängt" ? "text-[var(--primary)]/40" : "font-medium"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-[var(--primary)]/10 shadow-sm">
              <iframe
                title={`Karta — ${business.name}`}
                src={getMapsEmbedUrl()}
                className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-[var(--primary)] hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
