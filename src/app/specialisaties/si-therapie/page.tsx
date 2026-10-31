import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "SI-therapie | Kids Fysio Capelle",
  description:
    "Wat is sensorische informatieverwerking (SI) therapie? Lees meer over prikkelverwerking, herkenbare signalen en onze aanpak bij Kids Fysio Capelle.",
  alternates: { canonical: "/specialisaties/si-therapie/" },
};

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

export default function SiTherapiePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-forest mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-forest inline-block"></span>
                Specialisatie
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-forest mb-8">
                Wat is sensorische informatieverwerking (SI) therapie?
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/80 max-w-md leading-relaxed mb-10">
                Bij Kids Fysio Capelle combineren we specialistische kennis met persoonlijke aandacht. Onze gespecialiseerde therapeuten helpen uw kind bij uiteenlopende uitdagingen rondom de sensorische informatieverwerking (SI). Sensorische informatieverwerking wordt ook wel prikkelverwerking genoemd.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                  Afspraak maken
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-sage/20 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Setting-voor-SI-therapie-bij-Kids-Fysio-Capelle.png"
                  alt="Setting voor SI-therapie bij Kids Fysio Capelle"
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

      {/* Uitleg over SI (direct doorgeschakeld naar signalen) */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-muted text-lg leading-[1.8] mb-6">
              Sensorische informatieverwerking is het proces waarbij prikkels die het lijf en hoofd binnenkomen, worden verwerkt in de hersenen. Daarop volgt een reactie of handeling; de prikkel wordt bijvoorbeeld gedempt om niet te storen, of wordt gebruikt om jezelf te activeren of tot rust te brengen. Wanneer het proces van prikkels ontvangen, verwerken en daar passend op reageren niet adequaat verloopt, spreken we van prikkelverwerkingsproblematiek. SI-therapie helpt hierbij.
            </p>
            <p className="text-muted text-lg leading-[1.8] mb-12">
              Gedurende de therapie onderzoeken we samen met jullie als ouders of verzorgers wat er precies gebeurt binnen de verwerking van en het reageren op prikkels en zetten we handvatten in om dat proces te ondersteunen.
            </p>
            <p className="text-muted text-lg leading-[1.8] mb-12">
              Wij zijn gespecialiseerde therapeuten en helpen kinderen van 0-4 jaar en 4-18 jaar om de prikkelverwerking te verbeteren met sensorische informatieverwerking (SI) therapie in Capelle aan den IJssel.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Signalen */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Signalen
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest mb-6 leading-[1.1]">
                Herkenbare signalen bij SI-problemen
              </h2>
              <p className="text-muted text-lg leading-[1.8]">
                Kinderen met sensorische informatieverwerkingsproblemen kunnen verschillende signalen vertonen. Herkent u deze bij uw kind?
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
            {signals.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div className="flex items-start gap-3 py-3 border-t border-charcoal/10">
                  <span className="text-forest text-sm mt-0.5">✓</span>
                  <span className="text-charcoal text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Onze aanpak SI */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                Onze aanpak
              </p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
                Onze aanpak bij SI-therapie
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center text-forest mb-8">
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
                  <h3 className="text-xl font-bold text-forest mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
              Heeft uw kind moeite met prikkelverwerking?
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg mb-12">
              Onze gespecialiseerde therapeuten helpen uw kind met sensorische informatieverwerking (SI) therapie om beter om te gaan met prikkels en zich optimaal te ontwikkelen.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="text-forest flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-semibold text-charcoal">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                Afspraak maken
              </Button>
              <Button href="tel:0103032575" variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white rounded-lg px-8 py-4" size="lg">
                Bel 010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
