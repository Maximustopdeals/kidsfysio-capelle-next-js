import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
  },
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Ook voor Rotterdam, Barendrecht, Nieuwerkerk en Krimpen. Voor kinderen van 0 tot 18 jaar.",
  alternates: { canonical: "/" },
};

const ageGroups = [
  {
    href: "/baby-dreumes/",
    title: "Baby & Dreumes",
    years: "0-2 jaar",
    description:
      "Motorische ontwikkeling, voorkeurshoudingen en overstrekking. Met rust en aandacht voor de allerkleinsten.",
  },
  {
    href: "/peuters-kleuters/",
    title: "Peuters & Kleuters",
    years: "2-4 jaar",
    description:
      "Evenwicht, coördinatie en de motorische basis voor een soepele start op de basisschool.",
  },
  {
    href: "/basisschool/",
    title: "Basisschool",
    years: "5-12 jaar",
    description:
      "Schrijfmotoriek, houding, sportblessures en vaardigheden die meedoen vanzelfsprekend maken.",
  },
  {
    href: "/tiener/",
    title: "Tiener",
    years: "12-18 jaar",
    description:
      "Groeigerelateerde klachten, sport en houding. Begeleiding die past bij de puberteit.",
  },
];

const usps = [
  "Persoonlijke begeleiding en behandelplannen",
  "Motoriek, balans, grove & fijne motoriek",
  "Ondersteuning bij prikkelverwerking & concentratie",
  "Volledig vergoed door de zorgverzekering",
];

const pillars = [
  { title: "Gespecialiseerd Kinderteam", text: "Al onze therapeuten zijn BIG-geregistreerd en gespecialiseerd in kinderfysiotherapie." },
  { title: "4 Behandelruimtes", text: "Vier moderne, prikkelarme behandelkamers voor optimale aandacht en rust." },
  { title: "Speelse Oefenzaal", text: "Een grote, kindvriendelijke oefenzaal waar bewegen voelt als spelen." },
  { title: "Van baby tot tiener", text: "Wij begeleiden kinderen in elke ontwikkelfase, van 0 tot 18 jaar." },
];

const badges = [
  "Gecertificeerd Kinderteam",
  "Veilige spelomgeving",
  "Bewezen resultaten",
  "Vergoeding door zorgverzekering",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Split-Screen Hero: tekst links, foto rechts (muurtekening volledig zichtbaar) */}
      <section className="relative w-full bg-sage overflow-hidden">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Linkerkant: Tekst op de huiskleur */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-32">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-forest mb-4">
                Kids Fysio Capelle
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-forest mb-6">
                Spelend in beweging!
              </h1>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/80 max-w-md leading-relaxed mb-10">
                Onze kinderfysiotherapeuten begeleiden kinderen van baby tot tiener met gerichte behandeling, motorische stimulatie en ontwikkeling in beweging.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  href="/contact/" 
                  className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" 
                  size="lg"
                >
                  Maak direct een afspraak
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Rechterkant: Foto zonder overlay */}
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
              alt="Oefenzaal Kids Fysio Capelle"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* 2. Age groups (Lichtgroene blokken, leeftijd onder titel) */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-xl mb-16 lg:mb-20">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-4">
                Ontwikkelfasen
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
                Afgestemd op<br />elke leeftijd
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => (
              <FadeIn key={group.href} delay={i * 0.06}>
                <Link
                  href={group.href}
                  className="group flex flex-col h-full bg-sage rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Gespecialiseerde Kinderfysiotherapie & CTA */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Tekst & USPs */}
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                  Gespecialiseerde zorg
                </p>
                <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-8">
                  Kinderfysiotherapie in Capelle aan den IJssel
                </h2>
                <p className="text-muted text-lg leading-[1.8] mb-10 max-w-2xl">
                  Voor kinderen van 0 tot 18 jaar. Gericht op motoriek, ademhaling, balans, prikkelverwerking en gezonde ontwikkeling. Altijd met plezier, vertrouwen en vooruitgang als basis.
                </p>
                <ul className="space-y-4 mb-10">
                  {usps.map((usp) => (
                    <li key={usp} className="flex items-center gap-4 text-charcoal">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sage text-forest flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </span>
                      {usp}
                    </li>
                  ))}
                </ul>
                <Button href="/over-ons/" variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                  Over ons
                </Button>
              </FadeIn>
            </div>

            {/* CTA Kaart */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="bg-forest rounded-[2rem] p-10 lg:p-12 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Maak direct een afspraak
                  </h3>
                  <p className="text-white/80 mb-8">
                    Geen verwijzing nodig. Wij denken graag met u mee.
                  </p>
                  <a 
                    href="tel:0103032575" 
                    className="inline-flex items-center justify-center w-full py-4 rounded-full bg-sage text-forest font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 hover:bg-white"
                  >
                    Bel 010 303 2575
                  </a>
                  <p className="mt-4 text-xs text-sage/80 font-semibold tracking-wide uppercase">
                    Meestal direct bereikbaar
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Waarom Kids Fysio Capelle */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Waarom wij
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1] mb-8">
                Waarom ouders voor ons kiezen
              </h2>
              <p className="text-muted text-lg leading-[1.8]">
                Onze gespecialiseerde kinderfysiotherapeuten begeleiden kinderen in een speelse, veilige en prikkelarme omgeving.
              </p>
              <p className="mt-4 text-muted text-lg leading-[1.8]">
                Ouders ervaren rust, kinderen voelen vertrouwen. Wij denken mee, kijken verder en nemen altijd de tijd voor persoonlijk advies.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-forest text-xl font-bold mb-6">
                    0{i + 1}
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
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                Afspraak maken
              </Button>
              <Link href="/reviews/" className="group flex items-center gap-2 text-lg font-bold text-forest hover:text-charcoal transition-colors">
                Lees de ervaringen van andere ouders
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Visual moment met Badges */}
      <section className="relative py-28 lg:py-36 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/KidsFysioCapelle-prakijkruimte.webp"
                  alt="Praktijkruimte Kids Fysio Capelle"
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
                Met vier moderne behandelkamers en een grote oefenzaal groeit ieder kind op zijn eigen tempo, stap voor stap, met plezier.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-charcoal/5">
                    <span className="text-forest">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-charcoal">{badge}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Quiet CTA */}
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
              <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                Contact opnemen
              </Button>
              <Button href="tel:0103032575" className="border-forest text-forest hover:bg-forest hover:text-white rounded-lg px-8 py-4" variant="outline" size="lg">
                010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
