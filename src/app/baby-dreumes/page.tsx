import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Baby fysiotherapie Capelle aan den IJssel | 0-2 jaar",
  description:
    "Kinderfysiotherapie voor baby en dreumes (0-2 jaar) in Capelle aan den IJssel. Hulp bij voorkeurshouding, overstrekken en motorische ontwikkeling. Ook Rotterdam, Barendrecht en omgeving.",
  alternates: { canonical: "/baby-dreumes/" },
  openGraph: {
    title: "Baby fysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description:
      "Professionele begeleiding bij motorische ontwikkeling, voorkeurshouding en overstrekking voor baby's en dreumes.",
  },
};

const approach = [
  {
    title: "Intake & Onderzoek",
    text: "Een uitgebreid intakegesprek en lichamelijk onderzoek bepalen of kinderfysiotherapie voor baby en dreumes geïndiceerd is.",
    icon: "clipboard",
  },
  {
    title: "Ouderbegeleiding",
    text: "Wij geven u handvatten om de motorische ontwikkeling thuis te stimuleren. U bent de belangrijkste coach van uw kind.",
    icon: "users",
  },
  {
    title: "Spelenderwijs Leren",
    text: "Door speelse oefeningen helpen we uw baby de wereld te ontdekken op een manier die past bij zijn of haar ontwikkeling.",
    icon: "target",
  },
];

const indications = [
  "Afplatting van de schedel",
  "Voorkeurshouding",
  "Overstrekken",
  "Slappe baby",
  "Overmatig huilen",
  "Motorische achterstand",
  "Niet rollen of kruipen",
  "Billenschuiven",
  "Tenelopen",
  "Prematuur geboren",
  "Overgevoeligheid",
  "Complexe aandoeningen",
];

const complex = [
  "Hersenbeschadiging (Cerebrale Parese)",
  "Open ruggetje (Spina Bifida)",
  "Erbse Parese (Plexus Brachialis)",
  "Syndroom van Down",
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
];

export default function BabyDreumesPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                0-2 jaar
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Baby & 
                <br />
                <em className="italic font-light">Dreumes</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Professionele kinderfysiotherapie bij motorische ontwikkeling, voorkeurshoudingen en overstrekking, afgestemd op de allerkleinsten.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" variant="primary" size="lg">
                  Afspraak maken
                </Button>
                <Button href="/behandelingen/" variant="outline" size="lg">
                  Alle behandelingen
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-3 text-sm text-muted font-light">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-mint/20 text-brand-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                Geen verwijzing nodig
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Kinderfysiotherapeut-begeleidt-een-baby-tijdens-een-oefening-op-een-speelmat.jpg"
                  alt="Kinderfysiotherapeut begeleidt een baby tijdens een oefening op een speelmat bij Kids Fysio Capelle"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Waarom vroeg starten */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Waarom vroeg starten
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Vroegsignalering
                  <br />
                  <em className="italic">is cruciaal</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Uw baby maakt in de eerste twee jaar een razendsnelle ontwikkeling door. Wij helpen waar nodig een handje. Hoe eerder een eventuele achterstand of afwijkende houding wordt gesignaleerd, hoe beter de behandelresultaten.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Onze gespecialiseerde kinderfysiotherapeuten in Capelle aan den IJssel hebben oog voor de allerkleinste signalen. Wij werken volgens de nieuwste inzichten en bieden kinderfysiotherapie voor baby en dreumes die volledig is afgestemd op de ontwikkelingsfase van uw kind.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USP / Stats */}
      <section className="py-20 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeIn>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">18</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Behandelingen vergoed</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">0-2</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Leeftijd baby & dreumes</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">✓</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Geen verwijzing nodig</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">100%</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Persoonlijke aandacht</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Onze aanpak */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Onze aanpak
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Onze aanpak bij kinderfysiotherapie
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Wij werken volgens een bewezen methode die aansluit bij de belevingswereld van uw kind.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-6">
                    {item.icon === "clipboard" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                    )}
                    {item.icon === "users" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    )}
                    {item.icon === "target" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Indicaties */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Indicaties
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Indicaties voor kinderfysiotherapie
              </h2>
              <p className="text-muted text-lg leading-[1.8] font-light">
                Herkenbaar bij uw baby? Wij helpen graag bij deze en andere indicaties.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {indications.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex items-start gap-3 py-3 border-t border-charcoal/10">
                  <span className="text-brand-primary text-sm mt-0.5">✓</span>
                  <span className="text-charcoal font-light text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-12 text-muted font-light text-sm">
              Staat de indicatie er niet tussen? Neem contact op voor persoonlijk advies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Complexe aandoeningen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-12">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Gespecialiseerde zorg
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Complexere aandoeningen
              </h2>
              <p className="text-muted text-lg leading-relaxed font-light">
                Onze therapeuten hebben ruime ervaring met complexere aandoeningen waarbij kinderfysiotherapie voor baby en dreumes essentieel is.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 max-w-3xl">
              {complex.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-4 border-t border-charcoal/10 text-charcoal font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen over kinderfysiotherapie?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Twijfelt u over de motorische ontwikkeling van uw kind? Bel of mail ons gerust voor een vrijblijvend gesprek. U heeft geen verwijzing van de huisarts nodig.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="text-brand-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-charcoal">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Afspraak maken
              </Button>
              <Button href="tel:0103032575" variant="outline" size="lg">
                Bel 010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
