import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Specialisaties kinderfysiotherapie Capelle | SI-therapie",
  description:
    "Specialisaties van Kids Fysio Capelle: SI-therapie, schrijfmotoriek, sportfysiotherapie en meer in Capelle aan den IJssel.",
  alternates: { canonical: "/specialisaties/" },
};

const specialisaties = [
  { title: "Sensorische Integratie (SI)", text: "Begeleiding bij prikkelverwerkingsproblemen. Kinderen die over- of ondergevoelig zijn voor prikkels leren beter reguleren en functioneren." },
  { title: "Schrijfmotoriek", text: "Gerichte training bij problemen met schrijven, potloodgreep, lettervorming en schrijftempo, zodat schrijven weer soepel gaat." },
  { title: "Sportfysiotherapie", text: "Preventie en behandeling van sportblessures bij kinderen en tieners, afgestemd op de sport en de groeifase." },
  { title: "Pre- & postnatale zorg", text: "Ondersteuning rondom de geboorte: houding, bekken, herstel en begeleiding van de motorische start van de baby." },
  { title: "Neurologische aandoeningen", text: "Ervaring met cerebrale parese, spina bifida, plexus brachialis en syndroom van Down, met een individueel behandelplan." },
  { title: "Houding & groei", text: "Correctie van houdingsafwijkingen, scoliose-screening en begeleiding bij groeigerelateerde klachten." },
];

export default function SpecialisatiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title={<>Onze <em className="italic">specialisaties</em></>}
        subtitle="Naast algemene kinderfysiotherapie bieden wij gerichte specialisaties voor specifieke hulpvraagstukken."
      />

      {/* Header afbeelding */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/Header-voor-Sensorische-informatieverwerking.webp"
          alt="Sensorische informatieverwerking (SI) therapie bij Kids Fysio Capelle"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
      </section>

      {/* Lijst met specialisaties */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-0">
            {specialisaties.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 lg:py-12 border-t border-charcoal/10 hover:border-forest/40 transition-colors duration-500">
                  <div className="md:col-span-5">
                    <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted leading-relaxed font-light max-w-lg">
                      {s.text}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-start pt-1">
                    <span className="text-sage opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-lg">
                      →
                    </span>
                  </div>
                </article>
              </FadeIn>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* SI-therapie setting */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/10">
              <Image
                src="/images/Setting-voor-SI-therapie-bij-Kids-Fysio-Capelle.png"
                alt="Setting voor SI-therapie bij Kids Fysio Capelle"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  SI-therapie
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                  Een prikkelarme, <em className="italic">veilige setting</em>
                </h2>
                <p className="text-muted leading-[1.8] font-light text-lg">
                  Voor sensorische informatieverwerking werken we in een omgeving die past bij het kind, met de juiste materialen en de rust die nodig is om prikkels te leren verwerken.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen over een specialisatie?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Neem contact op. Wij denken graag met u mee over de beste aanpak voor uw kind.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Contact opnemen
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
