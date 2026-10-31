import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Specialisaties kinderfysiotherapie Capelle | SI-therapie",
  description:
    "Specialisaties van Kids Fysio Capelle: SI-therapie (0-4 en 4-18 jaar), oncologie, prematuriteit en meer in Capelle aan den IJssel.",
  alternates: { canonical: "/specialisaties/" },
};

const specialisaties = [
  { title: "Sensorische Integratie (SI)", text: "Begeleiding bij prikkelverwerkingsproblemen. Kinderen die over- of ondergevoelig zijn voor prikkels leren beter reguleren en functioneren.", link: "/specialisaties/si-therapie" },
  { title: "Oncologie", text: "Gespecialiseerde begeleiding en revalidatie voor kinderen die te maken hebben (gehad) met kanker, afgestemd op de mogelijkheden van het kind.", link: null },
  { title: "Prematuriteit", text: "Vroeggeboorte vraagt om specifieke aandacht voor de motorische en neurologische ontwikkeling. Wij bieden gespecialiseerde zorg.", link: null },
  { title: "Neurologische aandoeningen", text: "Ervaring met cerebrale parese, spina bifida, plexus brachialis en syndroom van Down, met een individueel behandelplan.", link: null },
  { title: "Schrijfmotoriek", text: "Gerichte training bij problemen met schrijven, potloodgreep, lettervorming en schrijftempo, zodat schrijven weer soepel gaat.", link: null },
  { title: "Sportfysiotherapie", text: "Preventie en behandeling van sportblessures bij kinderen en tieners, afgestemd op de sport en de groeifase.", link: null },
];

export default function SpecialisatiesPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-forest mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-forest inline-block"></span>
                Expertise
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-forest mb-8">
                Onze
                <br />
                specialisaties
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/80 max-w-md leading-relaxed mb-10">
                In onze praktijk hebben alle fysiotherapeuten de specialisatie kinderfysiotherapie. Daarnaast zijn er meerdere therapeuten gespecialiseerd in sensorische integratieverwerking: SI-therapie.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                  Afspraak maken
                </Button>
                <Button href="/behandelingen/" variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white rounded-lg px-8 py-4" size="lg">
                  Alle behandelingen
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-sage/20 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Header-voor-Sensorische-informatieverwerking.webp"
                  alt="Sensorische informatieverwerking (SI) therapie bij Kids Fysio Capelle"
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

      {/* 2. Lijst met specialisaties */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Onze expertise
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
                Gespecialiseerde zorg
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisaties.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="group flex flex-col h-full bg-sage rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-forest mb-4 group-hover:text-brand-dark transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-forest/80 leading-relaxed text-sm mb-6 flex-grow">
                    {s.text}
                  </p>
                  {s.link && (
                    <Link href={s.link} className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-charcoal transition-colors">
                      Lees meer over SI-therapie
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Netwerken */}
      <section className="py-20 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-forest mb-4">Aangesloten bij netwerken</h2>
            <p className="text-muted mb-8">Wij werken samen binnen gespecialiseerde netwerken om de beste zorg te kunnen bieden.</p>
            <div className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-full shadow-sm border border-charcoal/5">
              <span className="font-semibold text-charcoal">OncoNet</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Banner BIG-registratie */}
      <section className="py-12 bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-white font-medium text-lg">
              Alle kinderfysiotherapeuten in onze praktijk zijn BIG-geregistreerd.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
