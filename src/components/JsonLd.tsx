import { business, getFullAddress } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const dayMap: Record<string, string> = {
  Måndag: "Monday", Tisdag: "Tuesday", Onsdag: "Wednesday",
  Torsdag: "Thursday", Fredag: "Friday", Lördag: "Saturday", Söndag: "Sunday",
};

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ShoeStore",
    "@id": `${siteUrl}/#localbusiness`,
    name: business.name,
    description: business.description,
    telephone: business.phone,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: business.hours.regular
      .filter((h) => h.hours !== "Stängt")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[h.day] ?? h.day,
        opens: h.hours.split(" – ")[0],
        closes: h.hours.split(" – ")[1],
      })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: business.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
