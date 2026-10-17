/**
 * Central configuration for Kids Fysio Capelle
 * Fill in the integration IDs once received.
 */

export const siteConfig = {
  name: "Kids Fysio Capelle",
  domain: "https://kidsfysiocapelle.nl",
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Ook voor families uit Rotterdam, Barendrecht, Nieuwerkerk en Krimpen aan den IJssel. Voor kinderen van 0 tot 18 jaar — spelenderwijs in beweging.",
  phone: "010-3032575",
  phoneHref: "tel:0103032575",
  email: "info@kidsfysiocapelle.nl",
  whatsapp: "https://wa.me/31682013490",
  address: {
    street: "De Linie 1D",
    postalCode: "2905 AX",
    city: "Capelle aan den IJssel",
    country: "NL",
  },
  geo: {
    lat: 51.934169,
    lng: 4.5948,
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:00",
  },
  areaServed: [
    "Capelle aan den IJssel",
    "Rotterdam",
    "Barendrecht",
    "Nieuwerkerk aan den IJssel",
    "Krimpen aan den IJssel",
  ],
  socials: {
    instagram: "https://www.instagram.com/kidsfysiocapelle/",
  },
  formspreeFormId: "",
  googleAnalyticsId: "",
  googleTagManagerId: "",
  googleSiteVerification: "",
} as const;

export const formspreeEndpoint = siteConfig.formspreeFormId
  ? `https://formspree.io/f/${siteConfig.formspreeFormId}`
  : "https://formspree.io/f/placeholder";
