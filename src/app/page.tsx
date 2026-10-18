import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
  },
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Ook voor Rotterdam, Barendrecht, Nieuwerkerk en Krimpen. Voor kinderen van 0 tot 18 jaar.",
  alternates: { canonical: "/" },
};

const ageGroups = [
  {
    href: "/baby-dreumes/",
    title: "Baby & Dreumes",
    years: "0-2",
    description:
      "Motorische ontwikkeling, voorkeurshoudingen en overstrekking. Met rust en aandacht voor de allerkleinsten.",
  },
  {
    href: "/peuters-kleuters/",
    title: "Peuters & Kleuters",
    years: "2-4",
    description:
      "Evenwicht, coördinatie en de motorische basis voor een soepele start op de basisschool.",
  },
  {
    href: "/basisschool/",
    title: "Basisschool",
    years: "5-12",
    description:
      "Schrijfmotoriek, houding, sportblessures en vaardigheden die meedoen vanzelfsprekend maken.",
  },
  {
    href: "/tiener/",
    title: "Tiener",
    years: "12-18",
    description:
      "Groeigerelateerde klachten, sport en houding. Begeleiding die past bij de puberteit.",
  },
];

const usps = [
  "Persoonlijke begeleiding en behandelplannen",
  "Motoriek, balans, grove & fijne motoriek",
  "Ondersteuning bij prikkelverwerking & concentratie",
  "Volledig vergoed door de zorgverzekering",
];

const pillars = [
  { title: "Gespecialiseerd Kinderteam", text: "Al onze therapeuten zijn BIG-geregistreerd en gespecialiseerd in kinderfysiotherapie." },
  { title: "4 Behandelruimtes", text: "Vier moderne, prikkelarme behandelkamers voor optimale aandacht en rust." },
  { title: "Speelse Oefenzaal", text: "Een grote, kindvriendelijke oefenzaal waar bewegen voelt als spelen." },
  { title: "Van baby tot tiener", text: "Wij begeleiden kinderen in elke ontwikkelfase, van 0 tot 18 jaar." },
];

const badges = [
  "Gecertificeerd Kinderteam",
  "Veilige spelomgeving",
  "Bewezen resultaten",
  "Vergoeding door zorgverzekering",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic full-bleed hero */}
      <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <Image
          src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
          alt="Oefenzaal Kids Fysio Capelle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-cream/60 mb-8">
              Capelle aan den IJssel
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,8vw,6.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-cream max-w-[12ch]">
              Spelend
              <br />
              <em className="italic font-light">in beweging</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="mt-8 text-[1.05rem] lg:text-lg text-cream/75 max-w-md leading-relaxed font-light">
              Gespecialiseerde kinderfysiotherapie voor kinderen van 0 tot 18
              jaar. Met aandacht, rust en plezier.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="/contact/" variant="primary" size="lg">
                Maak direct een afspraak
              </Button>
              <Button
                href="/behandelingen/"
                variant="text"
                className="text-cream decoration-cream/30 hover:decoration-cream/70"
              >
                Onze behandelingen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Age groups */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-xl mb-20 lg:mb-28">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Ontwikkelfasen
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Afgestemd op
                <br />
                <em className="italic">elke leeftijd</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {ageGroups.map((group, i) => (
              <FadeIn key={group.href} delay={i * 0.06}>
                <Link
                  href={group.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 lg:py-12 border-t border-charcoal/10 hover:border-forest/30 transition-colors duration-500"
                >
                  <div className="md:col-span-2">
                    <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">
                      {group.years} jaar
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-forest transition-colors duration-500">
                      {group.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted leading-relaxed font-light max-w-md">
                      {group.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-start pt-1">
                    <span className="text-sage opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-lg">
                      →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* 3. NEW: Gespecialiseerde Kinderfysiotherapie & CTA */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Tekst & USPs */}
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Gespecialiseerde zorg
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-8">
                  Kinderfysiotherapie in <em className="italic">Capelle aan den IJssel</em>
                </h2>
                <p className="text-muted text-lg leading-[1.8] font-light mb-10 max-w-2xl">
                  Voor kinderen van 0 tot 18 jaar. Gericht op motoriek, ademhaling, balans, prikkelverwerking en gezonde ontwikkeling. Altijd met plezier, vertrouwen en vooruitgang als basis.
                </p>
                <ul className="space-y-4">
                  {usps.map((usp) => (
                    <li key={usp} className="flex items-center gap-4 text-charcoal font-light">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-light text-brand-primary flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </span>
                      {usp}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* CTA Kaart */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="bg-brand-dark rounded-[2rem] p-10 lg:p-12 text-center shadow-2xl shadow-brand-dark/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <h3 className="font-serif text-2xl text-white mb-4">
                    Maak direct een afspraak
                  </h3>
                  <p className="text-white/70 font-light mb-8">
                    Geen verwijzing nodig. Wij denken graag met u mee.
                  </p>
                  <a 
                    href="tel:0103032575" 
                    className="inline-flex items-center justify-center w-full py-4 rounded-full bg-brand-mint text-brand-dark font-nunito font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 hover:bg-white"
                  >
                    Bel 010 303 2575
                  </a>
                  <p className="mt-4 text-xs text-brand-mint/80 font-medium tracking-wide uppercase">
                    Meestal direct bereikbaar
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW: Waarom Kids Fysio Capelle */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-20">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Waarom wij
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Waarom ouders <em className="italic">voor ons kiezen</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary font-serif text-xl font-bold mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-xl font-light text-charcoal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light">
                    {pillar.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Visual moment met Badges */}
      <section className="relative py-28 lg:py-36 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/KidsFysioCapelle-praktijkruimte.webp"
                  alt="Praktijkruimte Kids Fysio Capelle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-8">
                Onze kindvriendelijke <em className="italic">praktijkruimte</em>
              </h2>
              <p className="text-muted text-lg leading-relaxed font-light mb-10">
                Met vier moderne behandelkamers en een grote oefenzaal groeit ieder kind op zijn eigen tempo, stap voor stap, met plezier.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-charcoal/5">
                    <span className="text-sage">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-charcoal">{badge}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Quiet CTA */}
      <section className="py-32 lg:py-44 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.15]">
              Klaar om de eerste
              <br />
              <em className="italic">stap te zetten?</em>
            </h2>
            <p className="mt-8 text-muted text-lg leading-relaxed font-light max-w-md mx-auto">
              Neem vrijblijvend contact op. Wij denken graag met u mee over de
              ontwikkeling van uw kind.
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
