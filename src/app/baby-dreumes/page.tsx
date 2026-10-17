import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Baby fysiotherapie Capelle aan den IJssel | 0–2 jaar",
  description:
    "Kinderfysiotherapie voor baby en dreumes (0–2 jaar) in Capelle aan den IJssel. Voorkeurshouding, overstrekking en motorische ontwikkeling. Ook voor Rotterdam, Barendrecht en omgeving.",
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
      <PageHero
        eyebrow="0–2 jaar"
        title={<>Baby & <em className="italic">Dreumes</em></>}
        subtitle="Professionele begeleiding bij motorische ontwikkeling, voorkeurshoudingen en overstrekking — afgestemd op de allerkleinsten."
      />

      {/* Photo moment */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/Kinderfysiotherapeut-begeleidt-een-baby-tijdens-een-oefening-op-een-speelmat.jpg"
          alt="Kinderfysiotherapeut begeleidt een baby tijdens een oefening op een speelmat bij Kids Fysio Capelle"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Waarom vroeg starten
                </p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Vroegsignalering
                  <br />
                  <em className="italic">is cruciaal</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.1}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Uw baby maakt in de eerste twee jaar een razendsnelle
                  ontwikkeling door. Hoe eerder een eventuele achterstand of
                  afwijkende houding wordt gesignaleerd, hoe beter de
                  behandelresultaten.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Wij werken volgens de nieuwste inzichten en bieden
                  kinderfysiotherapie die volledig is afgestemd op de
                  ontwikkelingsfase van uw kind — in Capelle aan den IJssel,
                  bereikbaar voor families uit Rotterdam, Barendrecht,
                  Nieuwerkerk en Krimpen.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Onze aanpak
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20">
              Bewezen methode,{" "}
              <em className="italic">aansluitend bij uw kind</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div>
                  <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl lg:text-2xl font-light text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/babies-op-een-speelmat-bij-Kids-Fysio-Capelle.png"
                alt="Baby's op een speelmat bij Kids Fysio Capelle in Capelle aan den IJssel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Indicaties
                </p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-4">
                  Wanneer is kinderfysiotherapie
                  <br />
                  <em className="italic">zinvol?</em>
                </h2>
                <p className="text-muted max-w-xl mb-10 font-light leading-relaxed">
                  Herkenbaar bij uw baby? Wij helpen graag bij deze en andere
                  indicaties.
                </p>
                <div className="space-y-0">
                  {indications.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 py-3.5 border-t border-charcoal/8"
                    >
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                      <span className="text-ink font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-6">
              Complexere aandoeningen
            </h2>
            <p className="text-muted max-w-2xl mb-12 leading-relaxed font-light">
              Onze therapeuten hebben ruime ervaring met complexere
              aandoeningen waarbij kinderfysiotherapie essentieel is.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 max-w-2xl">
              {complex.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-4 border-t border-charcoal/8 text-ink font-light"
                >
                  <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal">
              Geen verwijzing nodig
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light">
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
