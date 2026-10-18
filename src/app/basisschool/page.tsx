import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie basisschool Capelle | 5-12 jaar",
  description:
    "Kinderfysiotherapie voor basisschoolkinderen (5-12 jaar) in Capelle aan den IJssel. Schrijfmotoriek, houding en sportblessures. Ook Rotterdam en omgeving.",
  alternates: { canonical: "/basisschool/" },
};

const indications = [
  "Moeite met schrijven of fijne motoriek",
  "Houterig of onzeker bewegen in de gymles",
  "Problemen met evenwicht of coördinatie",
  "Slechte houding of rugklachten",
  "Sportblessures of overbelasting",
  "Lage conditie of snelle vermoeidheid",
  "Sensorische prikkelverwerking",
  "Hyper- of hypomobiliteit",
];

const approach = [
  { title: "Doelgerichte intake", text: "We brengen motorische vaardigheden, houding en eventuele klachten in kaart, afgestemd op school en sport." },
  { title: "Functionele training", text: "Oefeningen die direct aansluiten bij de klas, de gymzaal en de sport die uw kind beoefent." },
  { title: "Samenwerking", text: "Indien gewenst overleggen we met de leerkracht, IB'er of sporttrainer voor een integraal plan." },
];

export default function BasisschoolPage() {
  return (
    <>
      <PageHero
        eyebrow="5-12 jaar"
        title={<>Basisschool<em className="italic">kinderen</em></>}
        subtitle="Hulp bij motorische vaardigheden, schrijfproblemen, houding, sportblessures en conditie, zodat bewegen weer vanzelfsprekend wordt."
      />

      {/* Sfeerbeeld */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
          alt="Oefenzaal kinderfysiotherapie Kids Fysio Capelle"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
      </section>

      {/* Op school en op het veld */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Op school en op het veld
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Meedoen zonder
                  <br />
                  <em className="italic">beperkingen</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Op de basisschool wordt steeds meer gevraagd van de motoriek van kinderen: schrijven, gym, buitenspelen en sport. Wanneer dat niet vanzelf gaat, kan kinderfysiotherapie het verschil maken.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Wij helpen kinderen sterker, vaardiger en zelfverzekerder te bewegen, in de klas, op het schoolplein en op het sportveld.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Onze aanpak
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-24">
              Praktisch en <em className="italic">resultaatgericht</em>
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

      {/* Indicaties */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Indicaties
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-14 leading-[1.1]">
              Wanneer is kinderfysiotherapie zinvol?
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

      {/* Call to action */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Klaar om te starten?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Geen verwijzing nodig. Neem contact op voor een intake.
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
