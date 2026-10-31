import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie tiener Capelle | 12-18 jaar",
  description:
    "Kinderfysiotherapie voor tieners (12-18 jaar) in Capelle aan den IJssel. Hulp bij groeipijnen, sportblessures en houding.",
  alternates: { canonical: "/tiener/" },
};

const approach = [
  { title: "Persoonsgerichte Benadering", text: "We kijken samen met de tiener waar de klachten vandaan komen en hoe het probleem het best aangepakt kan worden.", icon: "target" },
  { title: "Inzicht & Zelfmanagement", text: "In deze leeftijd is het belangrijk inzichtelijk te krijgen waar de klachten vandaan komen zodat terugkeer voorkomen kan worden.", icon: "brain" },
  { title: "Multidisciplinaire Samenwerking", text: "Indien nodig werken wij samen met een multidisciplinair team om de beste hulp te kunnen bieden.", icon: "users" },
  { title: "Zelfstandigheid & Vertrouwen", text: "We betrekken ouders waar nodig, maar stimuleren ook de zelfstandigheid van de tiener.", icon: "shield" },
];

const indications = [
  "Hoofdpijn en migraine",
  "SOLK (onverklaarde klachten)",
  "Nek- en schouderklachten",
  "Rugpijn en houdingsproblemen",
  "Sportblessures",
  "Groeipijn",
  "Knieklachten",
  "Enkelklachten",
  "Hyperventilatie",
  "Houdingsproblemen",
  "Scoliose of hypermobiliteit",
  "Verminderde conditie",
  "Overgewicht of diabetes",
  "Jeugdreuma",
  "Verminderde belastbaarheid",
  "Heup- en liesklachten",
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
  "Tienergerichte aanpak",
];

export default function TienerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                12-18 jaar
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Kinderfysiotherapie voor tieners
              </h1>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Professionele kinderfysiotherapie bij groeigerelateerde klachten, sportblessures en houdingscorrectie, met respect voor de puberteit.
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
          </div>
          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Tiener-die-kinderfysiotherapie-krijgt-van-Kids-Fysio-Capelle.jpg"
                  alt="Tiener die kinderfysiotherapie krijgt bij Kids Fysio Capelle in Capelle aan den IJssel"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Een cruciale fase
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Waarom kinderfysiotherapie<br />
                  <em className="italic">essentieel is</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  De tienerleeftijd is een cruciale fase waarin zowel lichamelijke als emotionele veranderingen plaatsvinden. Onze kinderfysiotherapie voor tieners sluit perfect aan bij de belevingswereld van jongeren.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Begeleiding bij groeigerelateerde klachten, sportblessures, houding en conditie. Begeleiding die past bij de tienerontwikkeling en -interesse.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Onze aanpak</p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">Onze aanpak bij tieners</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-charcoal/5 h-full">
                  <h3 className="font-serif text-xl font-light text-charcoal mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Indicaties */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Indicaties</p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">Indicaties voor kinderfysiotherapie</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Heeft uw tiener hulp nodig bij lichamelijke klachten?
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
