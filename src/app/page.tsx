import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const SITE_URL = "https://www.kidsfysiocapelle.nl";
const PHONE_NUMBER = "0103032575";
const PHONE_DISPLAY = "010 303 2575";
const REVIEWS_URL = "/reviews/"; // TODO: vervangen door Google reviews URL of interne reviewpagina

export const metadata: Metadata = {
  title: {
    absolute: "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
  },
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Voor kinderen van 0 tot 18 jaar. Ook gezinnen uit Ridderkerk, Hazerswoude, Rotterdam, Barendrecht en Krimpen zijn welkom.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description:
      "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Voor kinderen van 0 tot 18 jaar.",
    url: "/",
    siteName: "Kids Fysio Capelle",
    locale: "nl_NL",
    type: "website",
  },
};

const ageGroups = [
  {
    href: "https://kidsfysio-capelle-next-js.vercel.app/baby-dreumes/",
    title: "Baby & Dreumes",
    years: "0-2 jaar",
    description:
      "Gespecialiseerde zorg bij prematuriteit, voorkeurshouding, overstrekking en de motorische ontwikkeling.",
  },
  {
    href: "https://kidsfysio-capelle-next-js.vercel.app/peuters-kleuters/",
    title: "Peuters & Kleuters",
    years: "2-4 jaar",
    description:
      "Ondersteuning bij de motorische ontwikkeling, evenwicht en coördinatie. De motorische basis voor een soepele start op de basisschool.",
  },
  {
    href: "https://kidsfysio-capelle-next-js.vercel.app/basisschool/",
    title: "Basisschool",
    years: "4-12 jaar",
    description:
      "Hulp bij motorische vaardigheden, schrijfmotoriek, houding, sportblessures en conditieverbetering. Motorische vaardigheden die op school meedoen, vanzelfsprekend maken.",
  },
  {
    href: "https://kidsfysio-capelle-next-js.vercel.app/tiener/",
    title: "Tieners",
    years: "12-18 jaar",
    description:
      "Begeleiding bij groeigerelateerde klachten, sportblessures, houding en conditie. Begeleiding die past bij de tienerontwikkeling en -interesse.",
  },
];

const usps = [
  "Persoonlijke begeleiding en behandelplannen",
  "Motoriek, balans, grove & fijne motoriek",
  "Ondersteuning bij prikkelverwerking & concentratie",
  "Volledig vergoed door de zorgverzekering",
];

const pillars = [
  {
    title: "Gespecialiseerd Kinderteam",
    text: "Al onze therapeuten zijn BIG-geregistreerd en gespecialiseerd in kinderfysiotherapie.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "4 Behandelruimtes",
    text: "Vier moderne, prikkelarme behandelkamers voor optimale aandacht en rust.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Speelse Oefenzaal",
    text: "Een grote, kindvriendelijke oefenzaal waar bewegen voelt als spelen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Van baby tot tiener",
    text: "Wij begeleiden kinderen in elke ontwikkelfase, van 0 tot 18 jaar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 4 5-5" />
      </svg>
    ),
  },
];

const badges = [
  "Master Kinderfysiotherapeuten",
  "Veilige spelomgeving",
  "Positieve reviews",
  "Vergoeding door zorgverzekering",
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Kids Fysio Capelle",
    url: SITE_URL,
    telephone: "+31103032575",
    medicalSpecialty: "PediatricPhysiotherapy",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Capelle aan den IJssel",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    areaServed: [
      "Capelle aan den IJssel",
      "Ridderkerk",
      "Hazerswoude",
      "Rotterdam",
      "Barendrecht",
      "Nieuwerkerk aan den IJssel",
      "Krimpen aan den IJssel",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero: Aparte mobiele afbeelding en desktop afbeelding */}
      <section className="relative h-[80vh] lg:h-[75vh] min-h-[550px] max-h-[800px] flex items-end lg:items-center justify-center overflow-hidden">
        
        {/* Desktop Afbeelding (Verborgen op mobiel) */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
            alt="Oefenzaal van Kids Fysio Capelle in Capelle aan den IJssel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Mobiele Afbeelding (Verborgen op desktop) */}
        <div className="block lg:hidden absolute inset-0">
          <Image
            src="/images/afbeelding-KidsFysioCapelle-oefenzaal-mobiel.webp"
            alt="Oefenzaal van Kids Fysio Capelle in Capelle aan den IJssel"
            fill
            priority
            className="object-cover object-[center_top]"
            sizes="100vw"
          />
        </div>
        
        {/* Gradient overlay voor leesbaarheid van de tekst */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#b5dfcb] via-[#b5dfcb]/40 to-transparent lg:bg-gradient-to-b lg:from-[#b5dfcb]/50 lg:via-[#b5dfcb]/20 lg:to-[#b5dfcb]/80 z-10" />

        {/* Tekstblok: Op mobiel onderaan (op de vloer), op desktop in het midden */}
        <div className="relative z-20 w-full mx-auto max-w-4xl px-6 pb-20 lg:pb-0 text-center">
          <div className="flex flex-col items-center">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-forest mb-3 lg:mb-4">
                Kids Fysio Capelle
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-forest">
                Spelend in beweging!
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. CTA banner (donkergroen), direct onder de hero */}
      <section className="bg-cream pt-16 pb-8 lg:pt-20 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="bg-forest rounded-[2rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 bg-sage/10 rounded-full -mr-24 -mt-24 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Maak direct een afspraak
                  </h2>
                  <p className="text-white/85 text-lg leading-relaxed max-w-xl">
                    Wij denken graag met u mee. In de meeste gevallen is er geen verwijzing nodig.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-sage text-forest font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 hover:bg-white"
                  >
                    Bel {PHONE_DISPLAY}
                  </a>
                  <Button
                    href="/contact/"
                    variant="outline"
                    className="border-white/40 !text-white hover:bg-white hover:!text-forest rounded-full px-8 py-4"
                    size="lg"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Leeftijdsrange */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-4">
                Ontwikkelfasen
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-6">
                Afgestemd op<br />elke leeftijd
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Onze kinderfysiotherapeuten begeleiden kinderen van baby- tot tienerleeftijd.
              </p>
              <p className="text-muted text-lg leading-relaxed mt-4">
                Met creativiteit en fantasie creëren we uitdaging voor de jongere kinderen. Met tieners werken we samen naar weer zelfstandig bewegen en sporten, met ruimte voor de autonomie.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => (
              <FadeIn key={group.href} delay={i * 0.06}>
                <a
                  href={group.href}
                  className="group flex flex-col h-full bg-sage rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/50"
                >
                  <h3 className="text-2xl font-bold text-forest mb-2 group-hover:text-brand-dark transition-colors">
                    {group.title}
                  </h3>
                  <span className="text-sm font-semibold tracking-wider uppercase text-forest/70 mb-4 block">
                    {group.years}
                  </span>
                  <p className="text-forest/80 leading-relaxed text-sm mb-6 flex-grow">
                    {group.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-forest">
                    Lees meer
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gespecialiseerde zorg (groene kader) */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Gespecialiseerde zorg
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-8">
                Kinderfysiotherapie in Capelle aan den IJssel
              </h2>
              <p className="text-muted text-lg leading-[1.8] mb-6 max-w-2xl mx-auto">
                Voor kinderen van 0 tot 18 jaar. Gericht op motoriek, ademhaling, balans, prikkelverwerking en ontwikkeling passend bij de leeftijd van uw kind. Altijd met aandacht, plezier en vertrouwen, zodat uw kind vooruit kan.
              </p>
              <p className="text-muted text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">
                Samen zorgen we voor plezier in bewegen en vertrouwen om te ontdekken en te groeien.
              </p>
              <ul className="space-y-4 mb-10 max-w-md mx-auto text-left">
                {usps.map((usp) => (
                  <li key={usp} className="flex items-center gap-4 text-charcoal">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-forest flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {usp}
                  </li>
                ))}
              </ul>
              <Button
                href="/over-ons/"
                variant="outline"
                className="border-forest !text-forest hover:bg-forest hover:!text-white"
              >
                Over ons
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Waarom ouders voor ons kiezen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Waarom Kids Fysio Capelle
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-8">
                Waarom ouders voor ons kiezen
              </h2>
              <p className="text-muted text-lg leading-[1.8]">
                Onze gespecialiseerde kinderfysiotherapeuten begeleiden uw kind in een speelse en veilige omgeving waarbij de prikkels zorgvuldig worden afgestemd op de unieke behoeften van uw kind.
              </p>
              <p className="mt-4 text-muted text-lg leading-[1.8]">
                Wij denken mee, kijken verder en nemen altijd de tijd voor persoonlijk advies.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center text-forest mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-forest mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link
                href={REVIEWS_URL}
                className="group inline-flex items-center gap-2 text-lg font-bold text-forest hover:text-charcoal transition-colors"
              >
                Lees de ervaringen van andere ouders
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Praktijkruimte */}
      <section className="relative py-28 lg:py-36 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/KidsFysioCapelle-prakijkruimte.webp"
                  alt="Kindvriendelijke praktijkruimte van Kids Fysio Capelle in Oostgaarde"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-8">
                Onze kindvriendelijke praktijkruimte
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Met vier moderne behandelkamers en een uitdagende oefenzaal groeit ieder kind op zijn eigen tempo, stap voor stap, met plezier.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-charcoal/5"
                  >
                    <span className="text-forest shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-charcoal">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Quiet CTA */}
      <section className="py-32 lg:py-44 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-forest leading-[1.15]">
              Klaar om de eerste stap te zetten?
            </h2>
            <p className="mt-8 text-muted text-lg leading-relaxed max-w-md mx-auto">
              Neem vrijblijvend contact op. Wij denken graag met u mee over de ontwikkeling van uw kind.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button
                href="/contact/"
                className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4"
                size="lg"
              >
                Contact opnemen
              </Button>
              <Button
                href={`tel:${PHONE_NUMBER}`}
                className="border-forest !text-forest hover:bg-forest hover:!text-white rounded-lg px-8 py-4"
                variant="outline"
                size="lg"
              >
                {PHONE_DISPLAY}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
