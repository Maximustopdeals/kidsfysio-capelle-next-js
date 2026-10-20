import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie peuters Capelle | 2-4 jaar",
  description:
    "Kinderfysiotherapie voor peuters en kleuters (2-4 jaar) in Capelle aan den IJssel. Hulp bij motorische ontwikkeling, houterig bewegen en veelvallen. Ook Rotterdam, Barendrecht en omgeving.",
  alternates: { canonical: "/peuters-kleuters/" },
};

const milestones = [
  { title: "Grove motoriek", text: "Lopen, rennen, springen, klimmen en balvaardigheid ontwikkelen zich in rap tempo tijdens de kinderfysiotherapie.", icon: "run" },
  { title: "Fijne motoriek", text: "Tekenen, knippen, kleuren en knutselen worden steeds beter gecoördineerd. Kinderfysiotherapie helpt hierbij.", icon: "pen" },
  { title: "Evenwicht", text: "Balans en coördinatie verbeteren, wat zorgt voor meer stabiliteit bij bewegen. Een belangrijk onderdeel van kinderfysiotherapie.", icon: "scale" },
  { title: "Zelfvertrouwen", text: "Succeservaringen in bewegen bouwen zelfvertrouwen op voor nieuwe uitdagingen. Dat is het doel van onze kinderfysiotherapie.", icon: "smile" },
];

const approach = [
  { title: "Spelenderwijs Leren", text: "We gebruiken speelse oefeningen en bewegingen die aansluiten bij de belevingswereld van uw kind om motorische vaardigheden te ontwikkelen binnen de kinderfysiotherapie.", icon: "target" },
  { title: "Kindvriendelijke Omgeving", text: "Onze praktijkruimte is speciaal ingericht voor jonge kinderen, zodat ze zich veilig en vertrouwd voelen tijdens de kinderfysiotherapie.", icon: "home" },
  { title: "Ouderbetrokkenheid", text: "We betrekken ouders actief bij de behandeling en geven praktische tips om de ontwikkeling thuis te stimuleren met kinderfysiotherapie.", icon: "users" },
  { title: "Plezier in Bewegen", text: "We helpen angsten overwinnen en laten kinderen ervaren hoe leuk bewegen kan zijn, van klimmen tot balvaardigheid tijdens de kinderfysiotherapie.", icon: "heart" },
];

const indications = [
  "Motorische ontwikkelingsachterstand",
  "Afwijkend looppatroon",
  "Houterig bewegen",
  "Veelvuldig vallen en struikelen",
  "Het onhandige kind",
  "Hypermobiliteit",
  "Moeite met gooien en vangen",
  "Angst voor bewegen en klimmen",
  "Tenelopen",
  "Groeipijn in de benen",
  "Schrijfproblemen",
  "Moeite met knippen en kleuren",
  "Snel moe, niet zelf willen lopen",
  "Ademhalingsproblemen",
  "Jeugdreuma",
  "Anders bewegen na gips",
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
  "Kindvriendelijke omgeving",
];

export default function PeutersKleutersPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
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
                Spelenderwijs leren bewegen. Professionele kinderfysiotherapie bij motorische ontwikkeling, evenwicht en coördinatie.
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
              
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/KidsFysioCapelle-behandeling.webp"
                  alt="Kinderfysiotherapie behandeling bij Kids Fysio Capelle"
                  fill
                  priority
                  className="object-cover object-[50%_20%] transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Waarom kinderfysiotherapie */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Een goede start
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Waarom kinderfysiotherapie
                  <br />
                  <em className="italic">essentieel is</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  De leeftijd van 2 tot 4 jaar is een periode van enorme motorische ontwikkeling. Bij Kids Fysio Capelle helpen we uw peuter of kleuter spelenderwijs de wereld te ontdekken met plezier in bewegen. Onze kinderfysiotherapie voor peuters en kleuters is specifiek afgestemd op deze leeftijdsgroep.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  In deze cruciale fase leert uw kind lopen, rennen, springen, huppelen, gooien en vangen. Ieder kind ontwikkelt zich op zijn eigen tempo, maar sommige kinderen hebben extra ondersteuning nodig bij het aanleren van deze vaardigheden. Kinderfysiotherapie biedt die ondersteuning op een speelse, kindgerichte manier.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Wij helpen uw kind in een veilige, kindvriendelijke omgeving om met plezier te bewegen en angsten te overwinnen. Door middel van spel en beweging stimuleren we de motorische ontwikkeling op een natuurlijke manier, afgestemd op de belevingswereld van uw peuter of kleuter.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USP / Stats */}
      <section className="py-20 bg-warm-gray">
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
                <span className="font-serif text-5xl lg:text-6xl font-light text-brand-primary mb-2">2-4</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Leeftijd peuter & kleuter</span>
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
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Spelenderwijs leren</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Ontwikkelingsmijlpalen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Mijlpalen
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Belangrijke ontwikkelingsmijlpalen
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                In de leeftijd van 2 tot 4 jaar worden grote motorische stappen gemaakt. Dit is wat uw kind normaal gesproken kan leren.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-8">
                    {item.icon === "run" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M4 17l5-3 2-6 3 4h5"/><path d="M9 14l-2 7"/></svg>
                    )}
                    {item.icon === "pen" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                    )}
                    {item.icon === "scale" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M6 8l6-5 6 5"/><path d="M6 8H3v3h3z"/><path d="M18 8h3v3h-3z"/></svg>
                    )}
                    {item.icon === "smile" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
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

      {/* 5. Onze aanpak */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Onze aanpak
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Onze aanpak bij kinderfysiotherapie
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
                    {item.icon === "target" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    )}
                    {item.icon === "home" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    )}
                    {item.icon === "users" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    )}
                    {item.icon === "heart" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
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

      {/* 6. Angsten overwinnen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2rem] shadow-2xl shadow-charcoal/10 overflow-hidden">
              <Image
                src="/images/KidsFysioCapelle-behandeling.webp"
                alt="Kinderfysiotherapie voor peuters en kleuters bij Kids Fysio Capelle"
                fill
                className="object-cover object-[50%_30%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Angsten overwinnen
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                  Angsten overwinnen met <em className="italic">kinderfysiotherapie</em>
                </h2>
                <p className="text-muted max-w-xl mb-8 font-light leading-relaxed text-lg">
                  Veel jonge kinderen hebben angsten voor bewegen, zoals klimmen, klauteren of het vangen van een bal. Wij helpen uw kind stap voor stap deze angsten te overwinnen door:
                </p>
                <ul className="space-y-4 text-charcoal font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">✓</span>
                    Kleine, haalbare stapjes in de oefeningen
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">✓</span>
                    Veel positieve bekrachtiging en aanmoediging
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">✓</span>
                    Aansluiten bij de interesses van uw kind
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">✓</span>
                    Een veilige en uitdagende speelomgeving
                  </li>
                </ul>
                <p className="mt-8 text-muted font-light leading-relaxed">
                  Zo bouwen we aan zelfvertrouwen en plezier in bewegen met kinderfysiotherapie voor peuters en kleuters!
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Indicaties */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Indicaties
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                Indicaties voor kinderfysiotherapie
              </h2>
              <p className="text-muted text-lg leading-[1.8] font-light">
                Herkenbaar bij uw peuter of kleuter? Wij helpen graag bij deze en andere indicaties.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {indications.map((item, i) => (
              <FadeIn key={item} delay={i * 0.02}>
                <div className="flex items-start gap-3 py-3 border-t border-charcoal/10">
                  <span className="text-brand-primary text-sm mt-0.5">✓</span>
                  <span className="text-charcoal font-light text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-12 text-muted font-light text-sm">
              Staat de indicatie er niet tussen? Neem contact op voor persoonlijk advies over kinderfysiotherapie voor peuters en kleuters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Ziet u ontwikkelingsuitdagingen bij uw peuter of kleuter?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Onze gespecialiseerde kinderfysiotherapeuten helpen uw kind met plezier te leren bewegen en zich optimaal te ontwikkelen met kinderfysiotherapie voor peuters en kleuters.
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
