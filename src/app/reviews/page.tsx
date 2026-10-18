import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Lees de ervaringen van ouders over Kids Fysio Capelle. Echte reviews over kinderfysiotherapie in Capelle aan den IJssel.",
  alternates: { canonical: "/reviews/" },
};

const reviews = [
  { text: "Onze zoon ging met veel plezier naar de behandelingen. De therapeuten zijn deskundig, geduldig en leggen alles helder uit. We zagen snel vooruitgang.", author: "Ouder van een basisschoolkind" },
  { text: "Fijne, rustige praktijk. Onze baby werd goed begeleid bij de voorkeurshouding. We kregen duidelijke tips voor thuis. Aanrader!", author: "Ouder van een baby" },
  { text: "Eindelijk iemand die écht naar ons kind keek. Geen standaardtraject, maar zorg op maat. De oefenzaal is top en de sfeer is warm.", author: "Ouder van een peuter" },
  { text: "Na een sportblessure was onze tiener snel weer op de been. Duidelijke uitleg, goede oefeningen en prettige begeleiding.", author: "Ouder van een tiener" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ervaringen"
        title={<>Wat ouders <em className="italic">zeggen</em></>}
        subtitle="Echte ervaringen van ouders die hun kind bij ons hebben laten behandelen."
      />

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <blockquote className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                  <p className="text-charcoal leading-[1.8] font-light text-lg lg:text-xl">
                    “{r.text}”
                  </p>
                  <footer className="mt-6">
                    <span className="inline-block text-[0.75rem] font-medium tracking-[0.15em] uppercase text-sage">
                      {r.author}
                    </span>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Deel ook uw ervaring
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Help andere ouders bij hun keuze en deel hoe Kids Fysio Capelle uw kind heeft geholpen.
            </p>
            <div className="mt-12">
              <Button href="/contact/" variant="primary" size="lg">
                Contact opnemen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
