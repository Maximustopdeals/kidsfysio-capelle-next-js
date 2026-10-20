import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie peuters Capelle | 2-4 jaar",
  description:
    "Kinderfysiotherapie voor peuters en kleuters (2-4 jaar) in Capelle aan den IJssel. Evenwicht, coördinatie en motorische ontwikkeling. Ook Rotterdam, Barendrecht en omgeving.",
  alternates: { canonical: "/peuters-kleuters/" },
};

const indications = [
  "Onzeker of houterig bewegen",
  "Problemen met evenwicht of coördinatie",
  "Moeite met klimmen, springen of balvaardigheid",
  "Afwijkende looppatroon of tenenlopen",
  "Lage of hoge spierspanning",
  "Problemen met fijne motoriek (knutselen, puzzelen)",
  "Sensorische gevoeligheid of prikkelverwerking",
  "Achterstand in motorische mijlpalen",
];

const approach = [
  { title: "Observatie & Analyse", text: "We kijken hoe uw kind beweegt in spel en dagelijkse situaties, en bepalen samen de hulpvraag." },
  { title: "Speelse oefeningen", text: "Therapie voelt als spelen. Materialen en spellen die aansluiten bij de belevingswereld van peuters en kleuters." },
  { title: "Ouders & omgeving", text: "Concrete tips voor thuis en, indien gewenst, overleg met de kinderopvang of peuterspeelzaal." },
];

export default function PeutersKleutersPage() {
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
                2-4 jaar
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Peuters & 
                <br />
                <em className="italic font-light">Kleuters</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Spelenderwijs leren bewegen. Professionele begeleiding bij motorische ontwikkeling, evenwicht en coördinatie.
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
                  src="/images/KidsFysioCapelle-behandeling.webp"
                  alt="Kinderfysiotherapie behandeling bij Kids Fysio Capelle"
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

      {/* 2. Een goede start */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Een goede start
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Essentieel voor
                  <br />
                  <em className="italic">de basisschool</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  De leeftijd van 2 tot 4 jaar is een periode van enorme motorische ontwikkeling. Bij Kids Fysio Capelle helpen we uw peuter of kleuter spelenderwijs sterker, zekerder en vaardiger te worden.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Een stevige motorische basis maakt de overstap naar de basisschool soepeler, zowel in de gymzaal als in de klas.
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
              Therapie die <em className="italic">voelt als spelen</em>
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
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Indicaties
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-14 leading-[1.1]">
              Wanneer is hulp zinvol?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
            {indications.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex items-start gap-4 py-4 border-t border-charcoal/10">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="text-charcoal font-light">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to action */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Direct een afspraak maken
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Geen verwijzing nodig. Wij denken graag met u mee.
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
