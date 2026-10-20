import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

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

const signals = [
  "Schrikken van geluiden",
  "Moeite met concentreren",
  "Overgevoeligheid voor licht",
  "Overgevoeligheid voor aanraking",
  "Constant in beweging moeten zijn",
  "Problemen met smaken of texturen",
  "Nauwelijks reageren bij aanspreken",
  "Moeite met nieuwe situaties",
];

const approach = [
  {
    title: "Prikkelverwerking inzichtelijk",
    text: "We maken samen met uw kind inzichtelijk hoe prikkels worden verwerkt en waar de uitdagingen liggen binnen de sensorische informatieverwerking (SI) therapie.",
    icon: "brain",
  },
  {
    title: "Spelenderwijs oefenen",
    text: "Door middel van gerichte oefeningen en spel leren we uw kind omgaan met prikkels tijdens de sensorische informatieverwerking (SI) therapie.",
    icon: "target",
  },
  {
    title: "Ouderbegeleiding",
    text: "We betrekken ouders actief bij de behandeling en geven praktische tips voor thuis om de sensorische informatieverwerking (SI) therapie te ondersteunen.",
    icon: "users",
  },
  {
    title: "Multidisciplinaire aanpak",
    text: "Indien nodig werken we samen met andere specialisten om de beste zorg te bieden binnen de sensorische informatieverwerking (SI) therapie.",
    icon: "shield",
  },
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde therapeuten",
  "Kindvriendelijke omgeving",
];

export default function SpecialisatiesPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                Expertise
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Onze
                <br />
                <em className="italic font-light">specialisaties</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Naast algemene kinderfysiotherapie bieden wij gerichte specialisaties voor specifieke hulpvraagstukken, zoals SI-therapie.
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
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Onze expertise
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Gespecialiseerde <em className="italic">zorg</em>
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-0">
            {specialisaties.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 lg:py-12 border-t border-charcoal/10 hover:border-forest/40 transition-colors duration-500">
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                      {s.title}
                    </h3>
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

      {/* 3. SI-therapie Uitgebreid */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/10">
              <Image
                src="/images/Setting-voor-SI-therapie-bij-Kids-Fysio-Capelle.png"
                alt="Setting voor SI-therapie bij Kids Fysio Capelle"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  SI-therapie
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                  Wat is sensorische <em className="italic">informatieverwerking?</em>
                </h2>
                <p className="text-muted leading-[1.8] font-light text-lg mb-6">
                  Sensorische informatieverwerking (ook wel prikkelverwerking genoemd) is het proces waarbij prikkels die via uw lichaam binnenkomen worden verwerkt in de hersenen. Kinderen met sensorische informatieverwerkingsproblemen hebben zintuigen die niet optimaal samenwerken. SI-therapie helpt hierbij.
                </p>
                <p className="text-muted leading-[1.8] font-light text-lg">
                  Wij zijn gespecialiseerde therapeuten en helpen kinderen van 4-18 jaar om de prikkelverwerking te verbeteren met sensorische informatieverwerking (SI) therapie in Capelle aan den IJssel.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USP / Stats */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeIn>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">18</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Behandelingen vergoed</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">4-18</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Leeftijd kinderen</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">✓</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Geen verwijzing nodig</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">100%</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Persoonlijke aandacht</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Signalen */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Signalen
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Herkenbare signalen bij <em className="italic">SI-problemen</em>
              </h2>
              <p className="text-muted text-lg leading-[1.8] font-light">
                Kinderen met sensorische informatieverwerkingsproblemen kunnen verschillende signalen vertonen. Herkent u deze bij uw kind?
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
            {signals.map((item, i) => (
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
              Herkent u deze signalen? Neem contact op voor een vrijblijvend gesprek over sensorische informatieverwerking (SI) therapie.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Onze aanpak SI */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Onze aanpak
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Onze aanpak bij <em className="italic">SI-therapie</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Wij werken volgens een bewezen methode die aansluit bij de belevingswereld van uw kind.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-8">
                    {item.icon === "brain" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
                    )}
                    {item.icon === "target" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    )}
                    {item.icon === "users" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    )}
                    {item.icon === "shield" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-light text-charcoal mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Heeft uw kind moeite met prikkelverwerking?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Onze gespecialiseerde therapeuten helpen uw kind met sensorische informatieverwerking (SI) therapie om beter om te gaan met prikkels en zich optimaal te ontwikkelen.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
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
              <Button href="/contact/" variant="primary" size="lg">
                Afspraak maken
              </Button>
              <Button href="tel:0103032575" variant="outline" size="lg">
                Bel 010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
