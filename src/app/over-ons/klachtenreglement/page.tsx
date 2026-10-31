import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Klachtenreglement | Kids Fysio Capelle",
  description: "Bekijk het klachtenreglement van Kids Fysio Capelle. Wij staan open voor feedback en gaan zorgvuldig om met klachten.",
  alternates: { canonical: "/over-ons/klachtenreglement/" },
};

const tabs = [
  { name: "Over ons", href: "/over-ons", current: false },
  { name: "Het team", href: "/over-ons/het-team", current: false },
  { name: "Eerste bezoek", href: "/over-ons/eerste-bezoek", current: false },
  { name: "Belangrijke informatie", href: "/over-ons/belangrijke-informatie", current: false },
  { name: "Klachtenreglement", href: "/over-ons/klachtenreglement", current: true },
  { name: "Vergoedingen", href: "/vergoedingen", current: false },
];

export default function KlachtenreglementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
              Kwaliteit & Zorg
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
              Klachtenreglement
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="text-[1.05rem] lg:text-lg text-muted max-w-2xl mx-auto leading-[1.8] font-light">
              Wij doen ons uiterste best om de beste zorg te leveren. Bent u desondanks niet tevreden? Dan horen wij dat graag. Bekijk ons klachtenreglement voor de procedure.
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

      {/* Document */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <FadeIn>
            <a
              href="/images/Klachtenregeling-Kids-Fysio-Capelle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-10 lg:p-16 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5 text-center"
            >
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-light text-charcoal mb-4 group-hover:text-forest transition-colors">
                Klachtenregeling Kids Fysio Capelle
              </h2>
              <p className="text-muted leading-relaxed font-light mb-8 max-w-md mx-auto">
                Klik op de knop hieronder om het volledige klachtenreglement als PDF te openen.
              </p>
              <span className="inline-flex items-center justify-center gap-2 bg-forest text-white font-bold px-8 py-4 rounded-full transition-transform group-hover:-translate-y-1">
                Open PDF
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
