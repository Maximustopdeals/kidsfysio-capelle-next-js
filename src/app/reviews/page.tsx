import type { Metadata } from "next";
import Script from "next/script";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Reviews | Kids Fysio Capelle",
  description:
    "Lees de ervaringen van ouders over Kids Fysio Capelle. Echte Google reviews over kinderfysiotherapie in Capelle aan den IJssel.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ervaringen"
        title={<>Wat ouders <em className="italic">zeggen</em></>}
        subtitle="Echte ervaringen van ouders die hun kind bij ons hebben laten behandelen."
      />

      {/* Elfsight Google Reviews Widget */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div 
              className="elfsight-app-4390dd71-9bdd-4665-a83a-0eb6a2efb9e6" 
              data-elfsight-app-lazy
            />
          </FadeIn>
        </div>
      </section>

      {/* Laad het Elfsight platform script */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload"
      />

      {/* CTA Section */}
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
