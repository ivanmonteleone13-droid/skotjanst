export const business = {
  name: "Skotjänst",
  tagline: "Skomakeri & nyckelservice i Uppsala",
  description: "Centralt skomakeri på Stora Torget i Uppsala. Vi reparerar skor, väskor och skidpjäxor, säljer skovårdsprodukter och erbjuder nyckel- och låsservice.",
  category: "Lokal verksamhet",
  address: {
    street: "Stora Torget 1A",
    postalCode: "753 20",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 75 54",
  phoneLink: "tel:+4618137554",
  email: "Info@skotjanst.nu" as string | null,
  emailLink: "mailto:Info@skotjanst.nu" as string | null,
  bookingUrl: "tel:+4618137554",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Skotjänst Uppsala",
  rating: 5.0,
  reviewCount: 2,
  foundedYear: 2010,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "5.0 på Bokadirekt", icon: "star" },
    { label: "2+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "👞 Cobbler", icon: "student" },
  ],
  usps: [
    {
      title: "Kvalitet",
      description: "Professionell service hos Skotjänst.",
    },
    {
      title: "Erfarenhet",
      description: "2+ nöjda kunder.",
    },
    {
      title: "Centralt läge",
      description: "På Stora Torget 1A i Uppsala.",
    },
  ],
  services: [
    {
      id: "klackning",
      name: "Klackning",
      icon: "✂️",
      description: "Byte och reparation av klackar på skor i olika material.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sulning",
      name: "Sulning",
      icon: "💇",
      description: "Ny sula eller förstärkning av befintlig sula för längre livslängd.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "utlastning",
      name: "Utlästning",
      icon: "⭐",
      description: "Justering av passform för bekvämare skor.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "dragkedja",
      name: "Dragkedjebyte",
      icon: "🎯",
      description: "Reparation och byte av dragkedjor på skor, väskor och plagg.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skidpjaxor",
      name: "Skidpjäxor",
      icon: "✨",
      description: "Service och reparation av skidpjäxor.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nyckel",
      name: "Nyckel- & låsservice",
      icon: "💈",
      description: "Kopiering och tillverkning av nycklar samt låsservice.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "produkter",
      name: "Skovårdsprodukter",
      icon: "🐾",
      description: "Försäljning av produkter för rengöring, impregnering och vård av skor.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Styling", before: "from-[#3D2914] to-[#5C4033]", after: "from-[#C9A227]/40 to-[#5C4033]" },
    { id: 2, label: "Behandling", before: "from-[#5C4033] to-[#3D2914]", after: "from-[#C9A227]/30 to-[#3D2914]" },
    { id: 3, label: "Resultat", before: "from-[#3D2914] to-[#5C4033]/80", after: "from-[#C9A227] to-[#5C4033]/50" },
    { id: 4, label: "Salong", before: "from-[#5C4033]/90 to-[#3D2914]", after: "from-[#C9A227]/50 to-[#C9A227]" },
    { id: 5, label: "Detalj", before: "from-[#3D2914] to-[#C9A227]/20", after: "from-[#5C4033] to-[#C9A227]/35" },
    { id: 6, label: "Atmosfär", before: "from-[#5C4033] to-[#C9A227]/25", after: "from-[#C9A227]/60 to-[#3D2914]" },
  ],
  testimonials: [
    {
      text: "Mycket nöjd – varmt och professionellt bemötande. Nyckeln passade perfekt och skorna kom tillbaka i fantastiskt skick.",
      author: "Kundrecension",
      source: "Reco.se (offentligt omdöme, parafraserat)",
      rating: 5,
    },
    {
      text: "Kunde kopiera vår nyckel direkt och priset var skäligt. Fantastiskt trevliga också.",
      author: "Kundrecension",
      source: "Reco.se (offentligt omdöme, parafraserat)",
      rating: 5,
    },
  ],
  about: {
    headline: "Om Skotjänst",
    paragraphs: [
      "Centralt skomakeri på Stora Torget i Uppsala. Vi reparerar skor, väskor och skidpjäxor, säljer skovårdsprodukter och erbjuder nyckel- och låsservice.",
    ],
  },
  faq: [
    {
      question: "Var ligger Skotjänst?",
      answer: "Vi finns på Stora Torget 1A, 753 20 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Skotjänst?",
      answer: "Boka via Bokadirekt eller ring 018-13 75 54.",
    },
    {
      question: "Vad säger kunder om Skotjänst?",
      answer: "Vi har 5.0 i snittbetyg baserat på 2+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Hur lång tid tar en klackning?",
      answer: "De flesta reparationer är klara inom några dagar beroende på material.",
    },
    {
      question: "Lagrar ni skidpjäxor?",
      answer: "Ja, vi servar och reparerar skidpjäxor.",
    },
  ],
  seoKeywords: [
    "Skotjänst",
    "Skotjänst Uppsala",
    "Uppsala cobbler",
  ],
  brandColors: {
    primary: "#5C4033",
    secondary: "#C9A227",
    accent: "#FAF7F2",
    dark: "#3D2914",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
