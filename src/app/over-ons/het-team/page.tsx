import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Ons team | Kids Fysio Capelle",
  description: "Maak kennis met de gespecialiseerde kinderfysiotherapeuten van Kids Fysio Capelle in Capelle aan den IJssel.",
  alternates: { canonical: "/over-ons/het-team/" },
};

const team = [
  {
    name: "Mellisa",
    role: "Praktijkeigenaar & Kinderfysiotherapeut",
    titles: ["Kinderfysiotherapeut MSc.", "SI-therapeut"],
    big: "BIG: 89919206204",
    bio: "Afgestudeerd in 2014 en gespecialiseerd in kinderfysiotherapie sinds 2016. Mijn passie is kinderen het plezier van bewegen te laten ervaren.",
  },
  {
    name: "Renate",
    role: "Kinderfysiotherapeut & SI-therapeut",
    titles: ["Kinderfysiotherapeut MSc.", "SI-therapeut"],
    big: "BIG: 39921638804",
    bio: "Ervaren in kinderfysiotherapie met achtergrond in pedagogiek. Gespecialiseerd in sensorische informatieverwerking. Werkdagen: di, do en vr.",
  },
  {
    name: "Myrthe",
    role: "Kinderfysiotherapeut",
    titles: ["Kinderfysiotherapeut MSc."],
    big: "BIG: 89927748804",
    bio: "Recent afgestudeerd in kinderfysiotherapie met veel enthousiasme. Werkzaam op basisscholen, Citykids en in onze praktijk.",
  },
  {
    name: "Joyce",
    role: "Teamlid",
    titles: [],
    big: "",
    bio: "Binnenkort meer informatie over Joyce! Ze versterkt ons team in kinderfysiotherapie.",
  },
];

const tabs = [
  { name: "Over ons", href: "/over-ons", current: false },
  { name: "Het team", href: "/over-ons/het-team", current: true },
  { name: "Eerste bezoek", href: "/over-ons/eerste-bezoek", current: false },
  { name: "Belangrijke informatie", href: "/over-ons/belangrijke-informatie", current: false },
  { name: "Klachtenreglement", href: "/over-ons/klachtenreglement", current: false },
  { name: "Vergoedingen", href: "/over-ons/vergoedingen", current: false },
];

export default function HetTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
              De Specialisten
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
              Ons team
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="text-[1.05rem] lg:text-lg text-muted max-w-2xl mx-auto leading-[1.8] font-light">
              Maak kennis met onze gepassioneerde kinderfysiotherapeuten die klaar staan voor uw kind in Capelle aan den IJssel.
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

      {/* Team Grid */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5 h-full flex flex-col">
                  <div className="aspect-[4/5] bg-brand-light flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-primary/5"></div>
                    <span className="font-serif text-6xl text-brand-primary/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-serif text-2xl font-light text-charcoal">
                      {member.name}
                    </h2>
                    <p className="text-sm font-semibold text-brand-primary mt-1 mb-4">
                      {member.role}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      {member.titles.map((title) => (
                        <p key={title} className="text-xs text-muted font-medium">
                          {title}
                        </p>
                      ))}
                      {member.big && (
                        <p className="text-xs text-muted/70 font-light mt-2">
                          {member.big}
                        </p>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted leading-relaxed font-light mt-auto">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen of een afspraak maken?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Onze specialisten staan graag voor u en uw kind klaar. Neem contact met ons op voor een vrijblijvend gesprek.
            </p>
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
