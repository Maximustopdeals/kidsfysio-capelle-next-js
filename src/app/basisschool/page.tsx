import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kinderfysiotherapie basisschool Capelle | 4-12 jaar",
  description:
    "Kinderfysiotherapie voor basisschoolkinderen (4-12 jaar) in Capelle aan den IJssel. Hulp bij schrijfmotoriek, houding en sportblessures.",
  alternates: { canonical: "/basisschool/" },
};

const approach = [
  { title: "Spelenderwijs Leren", text: "We gebruiken speelse oefeningen en bewegingen die aansluiten bij de belevingswereld van uw kind.", icon: "target" },
  { title: "Kindvriendelijke Omgeving", text: "Onze praktijkruimte is speciaal ingericht voor schoolgaande kinderen, zodat ze zich veilig en vertrouwd voelen.", icon: "home" },
  { title: "Ouderbetrokkenheid", text: "We betrekken ouders actief bij de behandeling en geven praktische tips om de ontwikkeling thuis en op school te stimuleren.", icon: "users" },
  { title: "Plezier in Bewegen", text: "We helpen angsten overwinnen en laten kinderen ervaren hoe leuk bewegen kan zijn.", icon: "heart" },
];

const indications = [
  "Motorische ontwikkelingsachterstand",
  "Afwijkend looppatroon",
  "Houterig bewegen",
  "Groeipijn of pijn in de benen",
  "Het onhandige kind",
  "Hypermobiliteit",
  "Slechte houding",
  "Sportblessure",
  "Angst voor bewegen",
  "Tenenlopen",
  "Knieklachten",
  "Schrijfproblemen",
  "Snel moe",
  "Ademhalingsproblemen",
  "Jeugdreuma",
  "Nek- of schouderklachten",
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
  "Kindvriendelijke omgeving",
];

export default function BasisschoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-forest mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-forest inline-block"></span>
                4-12 jaar
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-forest mb-8">
                Basisschool kinderen
              </h1>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/80 max-w-md leading-relaxed mb-10">
                Professionele kinderfysiotherapie bij motorische ontwikkeling, schrijfproblemen en sportblessures, afgestemd op schoolgaande kinderen.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                  Afspraak maken
                </Button>
                <Button href="/behandelingen/" variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white rounded-lg px-8 py-4" size="lg">
                  Alle behandelingen
                </Button>
              </div>
            </FadeIn>
          </div>
          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-sage/20 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Kinderfysio-basisschool-kids-fysio-Capelle.webp"
                  alt="Kinderfysiotherapie voor basisschoolkinderen bij Kids Fysio Capelle"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">
                  Een sterke basis
                </p>
                <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
                  Waarom kinderfysiotherapie essentieel is
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8]">
                  Bewegen is van groot belang voor schoolgaande kinderen. Nadat de basisvaardigheden in de eerste levensjaren zijn ontwikkeld, komen nu steeds complexere vaardigheden om de hoek kijken. Onze kinderfysiotherapie voor basisschoolkinderen helpt uw kind bij deze ontwikkeling.
                </p>
                <p className="mt-6 text-muted leading-[1.8]">
                  Op de basisschool worden kinderen uitgedaagd op zowel fijn motorisch als grof motorisch vlak. Ze krijgen gymles, er zijn buitenspeelactiviteiten, gaan op zwemles en/of een andere sport en leren schrijven. Kinderfysiotherapie biedt ondersteuning wanneer deze vaardigheden niet vanzelfsprekend ontwikkelen.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">Onze aanpak</p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">Onze aanpak bij basisschoolkinderen</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-charcoal/5 h-full">
                  <h3 className="text-xl font-bold text-forest mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Indicaties */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-6">Indicaties</p>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest mb-6 leading-[1.1]">Indicaties voor kinderfysiotherapie</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {indications.map((item, i) => (
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

      {/* CTA met snelkoppeling onderaan */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
              Heeft uw kind hulp nodig bij de motorische ontwikkeling?
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg mb-12">
              Onze gespecialiseerde kinderfysiotherapeuten helpen uw kind met plezier te leren bewegen en zich optimaal te ontwikkelen.
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
