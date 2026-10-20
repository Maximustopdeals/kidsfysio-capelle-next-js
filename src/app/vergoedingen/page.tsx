import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Vergoedingen & Tarieven | Kids Fysio Capelle",
  description:
    "Heldere informatie over vergoedingen vanuit de zorgverzekering en onze tarieven voor kinderfysiotherapie in Capelle aan den IJssel.",
  alternates: { canonical: "/vergoedingen/" },
};

const corePoints = [
  {
    title: "18 Behandelingen vergoed",
    text: "Kinderfysiotherapie wordt 18 keer per kalenderjaar vanuit de basisverzekering vergoed. Als meer behandelingen nodig zijn, worden deze vergoed vanuit de aanvullende verzekering.",
    icon: "hospital",
  },
  {
    title: "Contracten met alle verzekeraars",
    text: "We hebben met alle zorgverzekeraars contracten afgesloten voor kinderfysiotherapie. Behandelingen worden rechtstreeks gedeclareerd, dus u ontvangt geen rekening.",
    icon: "clipboard",
  },
  {
    title: "Annuleringsbeleid",
    text: "Indien een afspraak niet 24 uur van tevoren wordt afgezegd, worden de kosten bij u in rekening gebracht. Deze kosten worden niet door de zorgverzekeraar vergoed voor kinderfysiotherapie.",
    icon: "alert",
  },
];

const tariffs = [
  { title: "Screening, intake en onderzoek", price: "€50,00" },
  { title: "Intake en onderzoek na verwijzing", price: "€47,50" },
  { title: "Kinderfysiotherapeutische zitting", price: "€50,00" },
  { title: "Toeslag aan huis behandeling", price: "€10,00" },
  { title: "Instructie/overleg ouders", price: "€50,00" },
  { title: "Kinderfysiotherapeutische rapportage", price: "€45,00" },
  { title: "Niet nagekomen afspraak", price: "€35,00" },
];

const conditions = [
  { title: "Geen verwijzing nodig", text: "U kunt direct een afspraak maken voor kinderfysiotherapie. Geen verwijzing van de huisarts vereist.", icon: "check" },
  { title: "Rechtstreekse declaratie", text: "Wij declareren de kinderfysiotherapie rechtstreeks bij uw zorgverzekeraar. U ontvangt geen rekening.", icon: "check" },
  { title: "18 behandelingen per jaar", text: "De basisverzekering vergoedt 18 behandelingen kinderfysiotherapie per kalenderjaar.", icon: "check" },
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
  "Rechtstreekse declaratie",
];

export default function VergoedingenPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                Kosten & dekking
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Vergoedingen
                <br />
                <em className="italic font-light">& tarieven</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Heldere informatie over vergoedingen vanuit de zorgverzekering en onze tarieven. Geen verrassingen, wel optimale zorg voor uw kind in Capelle aan den IJssel.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" variant="primary" size="lg">
                  Afspraak maken
                </Button>
                <Button href="tel:0103032575" variant="outline" size="lg">
                  Bel 010 303 2575
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-3 text-sm text-muted font-light">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-mint/20 text-brand-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                Volledig vergoed vanuit de basisverzekering
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10 bg-brand-light flex items-center justify-center">
                {/* Decoratief element in plaats van een foto, omdat er geen specifieke vergoedingenfoto is */}
                <div className="text-center p-12">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a5c47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                  <p className="font-serif text-3xl lg:text-4xl font-light text-charcoal mb-4">100%</p>
                  <p className="text-sm font-medium text-muted uppercase tracking-wider">Vergoed door de basisverzekering</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Kernpunten */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Vergoedingen
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Vergoedingen voor <em className="italic">kinderfysiotherapie</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Bij Kids Fysio Capelle geloven we in transparantie. Daarom vindt u hier een volledig overzicht van vergoedingen en tarieven voor kinderfysiotherapie in Capelle aan den IJssel. De meeste behandelingen worden volledig vergoed door uw zorgverzekeraar.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePoints.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-8">
                    {item.icon === "hospital" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/></svg>
                    )}
                    {item.icon === "clipboard" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                    )}
                    {item.icon === "alert" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
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

      {/* 3. Tarieventabel */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Tarieven
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Praktijktarieven <em className="italic">kinderfysiotherapie</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Alleen van toepassing indien behandeling niet wordt vergoed door de zorgverzekeraar.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-[1.5rem] shadow-sm border border-charcoal/5 overflow-hidden">
              {tariffs.map((tariff, i) => (
                <div 
                  key={tariff.title} 
                  className={`flex justify-between items-center px-8 py-5 ${i !== tariffs.length - 1 ? 'border-b border-charcoal/5' : ''}`}
                >
                  <span className="text-charcoal font-light">{tariff.title}</span>
                  <span className="font-serif text-lg text-brand-primary">{tariff.price}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Voorwaarden */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Informatie & voorwaarden
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Goed om te weten
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conditions.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light text-charcoal mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen over vergoedingen voor kinderfysiotherapie?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Ons team staat klaar om al uw vragen over vergoedingen en tarieven voor kinderfysiotherapie in Capelle aan den IJssel te beantwoorden. Neem gerust contact met ons op!
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
                Contact opnemen
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
