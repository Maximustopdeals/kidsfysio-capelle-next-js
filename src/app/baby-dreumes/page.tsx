import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Baby fysiotherapie Capelle aan den IJssel | 0-2 jaar",
  description:
    "Kinderfysiotherapie voor baby en dreumes (0-2 jaar) in Capelle aan den IJssel. Gespecialiseerde zorg bij prematuriteit, voorkeurshouding, overstrekking en de motorische ontwikkeling.",
  alternates: { canonical: "/baby-dreumes/" },
  openGraph: {
    title: "Baby fysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description:
      "Professionele begeleiding bij motorische ontwikkeling, voorkeurshouding en overstrekking voor baby's en dreumes.",
  },
};

const indications = [
  "Afplatting van de schedel",
  "Voorkeurshouding",
  "Overstrekken",
  "Slappe baby",
  "Overmatig huilen",
  "Motorische achterstand",
  "Niet rollen of kruipen",
  "Billenschuiven",
  "Tenenlopen",
  "Prematuur geboren",
  "Overgevoeligheid",
];

const complex = [
  "Oncologische behandeling",
  "Neurodivergenties",
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
      {/* 1. Hero */}
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
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Kinderfysiotherapie voor baby's en dreumesen
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Gespecialiseerde zorg bij onder andere prematuriteit, voorkeurshouding, overstrekking en de motorische ontwikkeling.
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
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Kinderfysiotherapeut-begeleidt-een-baby-tijdens-een-oefening-op-een-speelmat.jpg"
                  alt="Kinderfysiotherapeut begeleidt een baby tijdens een oefening op een speelmat bij Kids Fysio Capelle"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-[50%_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Motorische ontwikkeling 0-2 jaar */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  De eerste stappen
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Motorische ontwikkeling<br />
                  <em className="italic">0-2 jaar</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  In de eerste twee levensjaren worden de bouwstenen gelegd voor de motorische ontwikkeling van uw baby. Deze vaardigheden vormen de basis voor het ontdekken van de wereld om hen heen. Ieder kind ontwikkelt zich in zijn eigen tempo, maar soms heeft uw baby extra ondersteuning nodig.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Onze aanpak (Gespecialiseerde zorg links, aanpak rechts) */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Links: Gespecialiseerde zorg */}
            <div>
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Gespecialiseerde zorg
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-8">
                  Wanneer kunt u bij ons terecht?
                </h2>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Wij zijn gespecialiseerd in de allerkleinsten. Of het nu gaat om een voorkeurshouding, een motorische achterstand of complexere zorgvragen: wij kijken verder dan alleen het bewegen. Met een grondige intake en persoonlijke aandacht zorgen we voor een veilige basis waarin uw baby zich optimaal kan ontwikkelen.
                </p>
              </FadeIn>
            </div>

            {/* Rechts: Onze aanpak (drie blokjes onder elkaar) */}
            <div>
              <FadeIn delay={0.1}>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Onze aanpak
                </p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-10">
                  Onze aanpak bij baby's en dreumesen
                </h2>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.15}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5">
                    <h3 className="text-lg font-semibold text-forest mb-2">Intake & Onderzoek</h3>
                    <p className="text-muted text-sm leading-relaxed font-light">
                      Via een uitgebreid intakegesprek en lichamelijk onderzoek beoordelen we of kinderfysiotherapie geïndiceerd is voor uw baby. In dat geval maken we een passend behandelplan.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5">
                    <h3 className="text-lg font-semibold text-forest mb-2">Spelenderwijs Leren</h3>
                    <p className="text-muted text-sm leading-relaxed font-light">
                      Door middel van speelse oefeningen helpen we uw baby bewegen, zodat hij of zij de wereld verder kan gaan ontdekken.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5">
                    <h3 className="text-lg font-semibold text-forest mb-2">Heeft u vragen over de ontwikkeling van uw baby?</h3>
                    <p className="text-muted text-sm leading-relaxed font-light mb-4">
                      Twijfelt u over de motorische ontwikkeling van uw kind? Onze kinderfysiotherapeuten staan klaar om u te adviseren.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-forest">
                        <span className="text-brand-primary">✓</span> Vergoed door alle zorgverzekeraars
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-forest">
                        <span className="text-brand-primary">✓</span> Geen wachtlijst
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Indicaties */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Indicaties
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Indicaties voor kinderfysiotherapie
              </h2>
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

      {/* 5. Complexe aandoeningen */}
      <section className="py-28 lg:py-36 bg-cream border-t border-charcoal/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-12">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Complexere zorg
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Complexere aandoeningen
              </h2>
              <p className="text-muted text-lg leading-relaxed font-light">
                Onze therapeuten hebben ruime ervaring met complexere aandoeningen waarbij kinderfysiotherapie essentieel is.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 max-w-3xl">
              {complex.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 border-t border-charcoal/10 text-charcoal font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen over kinderfysiotherapie?
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 mt-8">
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
              <Button href="/contact/" variant="primary" size="lg">Afspraak maken</Button>
              <Button href="tel:0103032575" variant="outline" size="lg">Bel 010 303 2575</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
