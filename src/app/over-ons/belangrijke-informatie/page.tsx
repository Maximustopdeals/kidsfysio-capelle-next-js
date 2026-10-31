import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Belangrijke informatie & Huisregels | Kids Fysio Capelle",
  description: "Lees onze huisregels en bekijk de privacyverklaring van Kids Fysio Capelle.",
  alternates: { canonical: "/over-ons/belangrijke-informatie/" },
};

const tabs = [
  { name: "Over ons", href: "/over-ons", current: false },
  { name: "Het team", href: "/over-ons/het-team", current: false },
  { name: "Eerste bezoek", href: "/over-ons/eerste-bezoek", current: false },
  { name: "Belangrijke informatie", href: "/over-ons/belangrijke-informatie", current: true },
  { name: "Klachtenreglement", href: "/over-ons/klachtenreglement", current: false },
  { name: "Vergoedingen", href: "/vergoedingen", current: false },
];

const documenten = [
  {
    title: "Huisregels",
    description: "Onze praktijkregels voor een veilige en fijne omgeving voor iedereen.",
    fileUrl: "/images/Huisregels.pdf",
  },
  {
    title: "Privacyverklaring",
    description: "Hoe wij omgaan met uw persoonsgegevens en de gegevens van uw kind.",
    fileUrl: "/images/Privacyverklaring-KidsFysioCapelle.pdf",
  },
];

export default function BelangrijkeInformatiePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
              Informatie
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
              Belangrijke informatie
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="text-[1.05rem] lg:text-lg text-muted max-w-2xl mx-auto leading-[1.8] font-light">
              Alles wat u moet weten over onze praktijk, van huisregels tot privacy.
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

      {/* Documenten */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documenten.map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.1}>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full"
                >
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-light text-charcoal mb-3 group-hover:text-forest transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed font-light mb-6">
                    {doc.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-forest">
                    Bekijk PDF
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
