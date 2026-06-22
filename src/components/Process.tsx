import { business } from "@/lib/business";

export default function Process() {
  const steps = [
    { n: "1", title: "Boka", desc: "Välj tid via Bokadirekt eller ring oss." },
    { n: "2", title: "Konsultation", desc: "Vi går igenom önskemål och anpassar behandlingen." },
    { n: "3", title: "Behandling", desc: "Professionell service med omsorg och kvalitet." },
    { n: "4", title: "Nöjd kund", desc: "Du lämnar oss med ett leende — varje gång." },
  ];
  return (
    <section id="process" className="bg-[var(--primary)] py-20 text-[var(--accent)]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Så fungerar det</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--secondary)] text-xl font-bold text-[var(--dark)]">{s.n}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm opacity-70">{business.name} · {business.address.street}</p>
      </div>
    </section>
  );
}
