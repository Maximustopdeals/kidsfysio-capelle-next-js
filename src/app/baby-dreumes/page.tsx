import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Baby fysiotherapie Capelle aan den IJssel | 0-2 jaar",
  description:
    "Kinderfysiotherapie voor baby en dreumes (0-2 jaar) in Capelle aan den IJssel. Voorkeurshouding, overstrekking en motorische ontwikkeling. Ook voor Rotterdam, Barendrecht en omgeving.",
  alternates: { canonical: "/baby-dreumes/" },
  openGraph: {
    title: "Baby fysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description:
      "Professionele begeleiding bij motorische ontwikkeling, voorkeurshouding en overstrekking voor baby's en dreumes.",
  },
};

const indications = [
  "Voorkeurshouding of scheefstand van het hoofd",
  "Overstrekking of hoge spierspanning",
  "Lage spierspanning (hypotonie)",
  "Vertraagde motorische ontwikkeling",
  "Problemen met omrollen, zitten of kruipen",
  "Asymmetrische bewegingen",
  "Billenschuiven in plaats van kruipen",
  "Afwijkende voetstand of heupontwikkeling",
];

const approach = [
  {
    title: "Intake & Onderzoek",
    text: "Een uitgebreid intakegesprek en lichamelijk onderzoek bepalen of kinderfysiotherapie geïndiceerd is.",
  },
  {
    title: "Ouderbegeleiding",
    text: "Handvatten om de motorische ontwikkeling thuis te stimuleren. U bent de belangrijkste coach van uw kind.",
  },
  {
    title: "Spelenderwijs leren",
    text: "Speelse oefeningen die aansluiten bij de belevingswereld en ontwikkelingsfase van uw baby.",
  },
];

const complex = [
  "Hersenbeschadiging (Cerebrale Parese)",
  "Open ruggetje (Spina Bifida)",
  "Erbse Parese (Plexus Brachialis)",
  "Syndroom van Down",
];

export default function BabyDreumesPage() {
  return (
    <>
      {/* 1. Split-Screen Hero (High-End Editorial) */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Linkerkant: Tekst */}
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
                Professionele begeleiding bij motorische ontwikkeling, voorkeurshoudingen en overstrekking, afgestemd op de allerkleinsten.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" variant="primary" size="lg">
                  Afspraak maken
                </Button>
                <Button
                  href="/behandelingen/"
                  variant="outline"
                  size="lg"
                >
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

          {/* Rechterkant: Afbeelding */}
          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Kinderfysiotherapeut-begeleidt-een-baby-tijdens-een-oefening-op-een-speelmat.jpg"
                  alt="Kinderfysiotherapeut begeleidt een baby tijdens een oefening op een speelmat bij Kids Fysio Capelle"
                  fill
                  priority
                  className="object-cover object-center"
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
                  Uw baby maakt in de eerste twee jaar een razendsnelle
                  ontwikkeling door. Hoe eerder een eventuele achterstand of
                  afwijkende houding wordt gesignaleerd, hoe beter de
                  behandelresultaten.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Wij werken volgens de nieuwste inzichten en bieden
                  kinderfysiotherapie die volledig is afgestemd op de
                  ontwikkelingsfase van uw kind, in Capelle aan den IJssel,
                  bereikbaar voor families uit Rotterdam, Barendrecht,
                  Nieuwerkerk en Krimpen.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Onze aanpak */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Onze aanpak
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-24">
              Bewezen methode,{" "}
              <em className="italic">aansluitend bij uw kind</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                  <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
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

      {/* 4. Indicaties */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2rem] shadow-2xl shadow-charcoal/10 overflow-hidden">
              <Image
                src="/images/babies-op-een-speelmat-bij-Kids-Fysio-Capelle.png"
                alt="Baby's op een speelmat bij Kids Fysio Capelle in Capelle aan den IJssel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Indicaties
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                  Wanneer is kinderfysiotherapie
                  <br />
                  <em className="italic">zinvol?</em>
                </h2>
                <p className="text-muted max-w-xl mb-10 font-light leading-relaxed text-lg">
                  Herkenbaar bij uw baby? Wij helpen graag bij deze en andere
                  indicaties.
                </p>
                <div className="space-y-0">
                  {indications.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 py-4 border-t border-charcoal/10"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span className="text-charcoal font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complexere aandoeningen */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
              Complexere aandoeningen
            </h2>
            <p className="text-muted max-w-2xl mb-12 leading-relaxed font-light text-lg">
              Onze therapeuten hebben ruime ervaring met complexere
              aandoeningen waarbij kinderfysiotherapie essentieel is.
            </p>
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

      {/* 6. Call to action */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Geen verwijzing nodig
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              U kunt direct een afspraak maken voor intake en onderzoek.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Afspraak maken
              </Button>
              <Button href="tel:0103032575" variant="outline" size="lg">
                010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
