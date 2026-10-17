import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie tiener Capelle | 12–18 jaar",
  description:
    "Kinderfysiotherapie voor tieners (12–18 jaar) in Capelle aan den IJssel. Groeipijnen, sportblessures en houding. Ook voor Rotterdam, Barendrecht en omgeving.",
  alternates: { canonical: "/tiener/" },
};

const indications = [
  "Groeipijnen of groeigerelateerde klachten",
  "Sportblessures en overbelasting",
  "Rug-, nek- of schouderklachten",
  "Slechte houding (scheefstand, bolle rug)",
  "Knieklachten (o.a. Osgood-Schlatter)",
  "Enkel- of voetproblemen",
  "Conditieopbouw na blessure of ziekte",
  "Hypermobiliteit",
];

const approach = [
  { title: "Persoonlijke intake", text: "We luisteren naar de klachten, sport- en schoolactiviteiten en stellen samen realistische doelen." },
  { title: "Gerichte behandeling", text: "Training en oefentherapie afgestemd op de groeifase, de sport en de belastbaarheid van de tiener." },
  { title: "Zelfstandigheid", text: "We leren de tiener hoe hij of zij zelf klachten kan voorkomen en de training kan voortzetten." },
];

export default function TienerPage() {
  return (
    <>
      <PageHero
        eyebrow="12–18 jaar"
        title={<>Tiener<em className="italic">zorg</em></>}
        subtitle="Begeleiding bij groeigerelateerde klachten, sportblessures, houdingscorrectie en conditietraining — met respect voor de puberteit."
      />

      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/Tiener-die-kinderfysiotherapie-krijgt-van-Kids-Fysio-Capelle.jpg"
          alt="Tiener die kinderfysiotherapie krijgt bij Kids Fysio Capelle in Capelle aan den IJssel"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Groei & sport</p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Begeleiding op<br /><em className="italic">maat van de tiener</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.1}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  De puberteit brengt snelle groei, veranderende belastbaarheid en vaak intensievere sport. Klachten die hieruit voortkomen vragen om gespecialiseerde kennis.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Onze kinderfysiotherapeuten begrijpen de combinatie van groei, sport en schoolbelasting en begeleiden tieners respectvol en resultaatgericht — in Capelle, bereikbaar vanuit Rotterdam, Barendrecht, Nieuwerkerk en Krimpen.
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
              Respectvol en <em className="italic">resultaatgericht</em>
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
            {indications.map((item) => (
              <div key={item} className="flex items-start gap-4 py-4 border-t border-charcoal/8">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                <span className="text-ink font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal">Plan een intake</h2>
            <p className="mt-6 text-muted leading-relaxed font-light">Geen verwijzing nodig. Wij denken graag met u en uw tiener mee.</p>
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
