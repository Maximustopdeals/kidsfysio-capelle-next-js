import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie peuters Capelle | 2–4 jaar",
  description:
    "Kinderfysiotherapie voor peuters en kleuters (2–4 jaar) in Capelle aan den IJssel. Evenwicht, coördinatie en motorische ontwikkeling. Ook Rotterdam, Barendrecht en omgeving.",
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
      <PageHero
        eyebrow="2–4 jaar"
        title={<>Peuters & <em className="italic">Kleuters</em></>}
        subtitle="Spelenderwijs leren bewegen. Professionele begeleiding bij motorische ontwikkeling, evenwicht en coördinatie."
      />

      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/KidsFysioCapelle-behandeling.webp"
          alt="Kinderfysiotherapie behandeling bij Kids Fysio Capelle Capelle aan den IJssel"
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
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Een goede start</p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Essentieel voor<br /><em className="italic">de basisschool</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.1}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  De leeftijd van 2 tot 4 jaar is een periode van enorme motorische ontwikkeling. Bij Kids Fysio Capelle helpen we uw peuter of kleuter spelenderwijs sterker, zekerder en vaardiger te worden.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Een stevige motorische basis maakt de overstap naar de basisschool soepeler — zowel in de gymzaal als in de klas.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Onze aanpak</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20">
              Therapie die <em className="italic">voelt als spelen</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div>
                  <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-xl lg:text-2xl font-light text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed font-light">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Indicaties</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-14">
              Wanneer is hulp zinvol?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
            {indications.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex items-start gap-4 py-4 border-t border-charcoal/8">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  <span className="text-ink font-light">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal">
              Direct een afspraak maken
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light">Geen verwijzing nodig. Wij denken graag met u mee.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">Afspraak maken</Button>
              <Button href="tel:0103032575" variant="outline" size="lg">010 303 2575</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
