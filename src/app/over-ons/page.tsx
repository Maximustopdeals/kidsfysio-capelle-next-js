import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Over Kids Fysio Capelle | Praktijk Capelle aan den IJssel",
  description:
    "Maak kennis met Kids Fysio Capelle. Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel, speels, veilig en prikkelarm.",
  alternates: { canonical: "/over-ons/" },
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

const uniquePoints = [
  { title: "Moderne locatie", text: "Vier behandelkamers en een grote, speelse oefenzaal in de wijk Oostgaarde, Capelle aan den IJssel voor optimale kinderfysiotherapie.", type: "location" },
  { title: "Kindvriendelijke omgeving", text: "Speciaal ingericht zodat kinderen zich direct veilig en op hun gemak voelen tijdens kinderfysiotherapie.", type: "heart" },
  { title: "Persoonlijke aanpak", text: "Ieder kind is uniek, daarom werken we met persoonlijke behandelplannen binnen de kinderfysiotherapie.", type: "user" },
  { title: "Vertrouwensband", text: "We investeren in een goede relatie met uw kind voor een optimale kinderfysiotherapie behandeling.", type: "shield" },
];

export default function OverOnsPage() {
  return (
    <>
      {/* 1. Split-Screen Hero (behouden, met Over ons tekst) */}
      <section className="relative w-full bg-cream pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Linkerkant: Tekst */}
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                De Praktijk
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Over ons
                <br />
                <em className="italic font-light">verhaal</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Spelenderwijs in beweging, van baby tot tiener.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" variant="primary" size="lg">
                  Maak een afspraak
                </Button>
                <Button
                  href="/behandelingen/"
                  variant="outline"
                  size="lg"
                >
                  Onze behandelingen
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-3 text-sm text-muted font-light">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-mint/20 text-brand-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                Volledig vergoed door alle zorgverzekeraars
              </div>
            </FadeIn>
          </div>

          {/* Rechterkant: Afbeelding */}
          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/KidsFysioCapelle-De-Praktijk.webp"
                  alt="KidsFysioCapelle-De-Praktijk"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Moderne praktijk in Oostgaarde */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Onze praktijk
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Een plek waar kinderen
                  <br />
                  <em className="italic">zich thuis voelen</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Kids Fysio Capelle is gevestigd in de wijk Oostgaarde in Capelle aan den IJssel. In onze praktijk aan De Linie beschikken wij over een moderne, ruime locatie met vier behandelkamers en een grote, speelse oefenzaal voor kinderfysiotherapie.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Deze omgeving is speciaal ingericht zodat kinderen zich direct veilig en op hun gemak voelen. Vaak zien we dat spanning voor een medische afspraak al in de eerste minuten verdwijnt. Kinderen stappen spelenderwijs binnen en voelen zich meteen thuis.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Onze kinderfysiotherapie praktijk is ontworpen met oog voor de belevingswereld van kinderen. Kleuren, materialen en indeling zijn allemaal afgestemd op de jonge bezoeker.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ons gespecialiseerde team */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Ons team
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Maak kennis met onze <em className="italic">specialisten</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Maak kennis met onze gepassioneerde kinderfysiotherapeuten die klaar staan voor uw kind in Capelle aan den IJssel.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5 h-full flex flex-col">
                  {/* Placeholder voor portretfoto */}
                  <div className="aspect-[4/5] bg-brand-light flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-primary/5"></div>
                    <span className="font-serif text-6xl text-brand-primary/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl font-light text-charcoal">
                      {member.name}
                    </h3>
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

      {/* 4. Bewegen met plezier */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* AANGEPAST: aspect-[4/5] in plaats van aspect-[4/3] */}
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/10">
              <Image
                src="/images/KidsFysioCapelle-behandeling.webp"
                alt="Kinderfysiotherapie behandeling bij Kids Fysio Capelle"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Onze filosofie
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-8 leading-[1.1]">
                  Bewegen met <em className="italic">plezier</em>
                </h2>
                <p className="text-muted leading-[1.8] font-light text-lg mb-6">
                  Bij Kids Fysio Capelle draait alles om bewegen met plezier. Ieder kind is anders, daarom combineren wij onze professionele expertise met creativiteit, passend oefenmateriaal en persoonlijke aandacht.
                </p>
                <p className="text-muted leading-[1.8] font-light text-lg">
                  We investeren bewust in het opbouwen van een vertrouwensband met uw kind, zodat hij of zij gemotiveerd raakt om actief te oefenen. Zo maken we samen stap voor stap vooruitgang met plezier, veiligheid en vertrouwen voorop.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wat onze praktijk bijzonder maakt */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Waarom wij
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Wat onze praktijk <em className="italic">bijzonder maakt</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniquePoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  
                  {/* High-End Icoon Container */}
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-8">
                    {point.type === "location" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {point.type === "heart" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                    {point.type === "user" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {point.type === "shield" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-light text-charcoal mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light">
                    {point.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Locatie */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/10">
              <Image
                src="/images/Kids-Fysio-Capelle-wachtkamer.webp"
                alt="Wachtkamer Kids Fysio Capelle"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Locatie
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-6 leading-[1.1]">
                  Kom een keer langs
                </h2>
                <p className="text-muted max-w-lg text-lg leading-[1.8] mb-10 font-light">
                  Wilt u onze praktijk bezoeken? Neem contact op voor een afspraak of meer informatie. We heten u graag welkom aan De Linie 1D, 2905 AX Capelle aan den IJssel.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Contact & route
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Afsluitende CTA met badges */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Wilt u onze praktijk bezoeken?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Neem contact op voor een afspraak of meer informatie. We heten u graag welkom!
            </p>
            
            {/* High-End Badges (Plat en minimalistisch) */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14">
              {[
                "Vergoed door alle zorgverzekeraars",
                "Geen wachtlijst",
                "Gespecialiseerde therapeuten",
                "Kindvriendelijke omgeving"
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="text-brand-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-charcoal">{badge}</span>
                </div>
              ))}
            </div>

            {/* Knoppen */}
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
