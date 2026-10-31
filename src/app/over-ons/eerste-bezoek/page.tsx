import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Eerste bezoek | Kids Fysio Capelle",
  description: "Wat kunt u verwachten tijdens het eerste bezoek bij Kids Fysio Capelle? Lees meer over de intake, het onderzoek en het behandelplan.",
  alternates: { canonical: "/over-ons/eerste-bezoek/" },
};

const tabs = [
  { name: "Over ons", href: "/over-ons", current: false },
  { name: "Het team", href: "/over-ons/het-team", current: false },
  { name: "Eerste bezoek", href: "/over-ons/eerste-bezoek", current: true },
  { name: "Belangrijke informatie", href: "/over-ons/belangrijke-informatie", current: false },
  { name: "Klachtenreglement", href: "/over-ons/klachtenreglement", current: false },
  { name: "Vergoedingen", href: "/over-ons/vergoedingen", current: false },
];

const steps = [
  {
    title: "1. Aanmelding & Intake",
    text: "Tijdens het eerste telefonische contact bespreken we kort de hulpvraag. Vervolgens plannen we een intakegesprek in. Neem uw legitimatiebewijs (ID-kaart of paspoort) mee naar het eerste bezoek. Dit is verplicht vanuit de zorgverzekeraar.",
  },
  {
    title: "2. Het Eerste Onderzoek",
    text: "Tijdens het eerste bezoek observeren en onderzoeken we uw kind spelenderwijs. We kijken naar de motoriek, houding en ontwikkeling. Voor baby's en jonge kinderen verloopt dit vaak via spel en observatie. Bij een eerste bezoek voor SI-therapie (Sensorische Informatieverwerking) komt uw kind de eerste keer soms nog niet mee, zodat we eerst uitgebreid met u als ouder(s) kunnen inventariseren.",
  },
  {
    title: "3. Opbouw & Behandelplan",
    text: "Na het onderzoek bespreken we de bevindingen en stellen we een persoonlijk behandelplan op. We stemmen af hoeveel behandelingen er nodig zijn en wat de frequentie wordt. Samen met u als ouder bepalen we de doelen.",
  },
  {
    title: "4. Start van de Behandeling",
    text: "We starten met de behandeling in onze oefenzaal of praktijkruimte. Er is veel ruimte voor spel, plezier en vertrouwen. U als ouder bent altijd welkom om mee te kijken of actief mee te doen.",
  },
];

export default function EersteBezoekPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
              Wat kunt u verwachten
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
              Eerste bezoek
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="text-[1.05rem] lg:text-lg text-muted max-w-2xl mx-auto leading-[1.8] font-light">
              Spannend, zo'n eerste keer bij de fysiotherapeut. We nemen stap voor stap de tijd om u en uw kind op het gemak te stellen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabs Navigatie */}
      <section className="bg-cream border-b border-charcoal/10 sticky top-[72px] z-40 backdrop-blur-md bg-cream/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  tab.current
                    ? "border-forest text-forest"
                    : "border-transparent text-muted hover:text-charcoal hover:border-charcoal/20"
                }`}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Stappenplan */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-sm border border-charcoal/5 relative">
                  <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted leading-[1.8] font-light text-lg">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-16 bg-brand-light/30 p-8 rounded-[2rem] text-center border border-brand-primary/10">
              <p className="text-charcoal font-medium mb-4">
                Goed om te weten: u heeft voor de kinderfysiotherapie in principe geen verwijzing van de huisarts nodig.
              </p>
              <Button href="/over-ons/vergoedingen" variant="outline" size="md">
                Lees meer over vergoedingen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
