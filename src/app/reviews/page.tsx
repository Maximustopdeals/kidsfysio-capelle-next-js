import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Reviews | Kids Fysio Capelle",
  description:
    "Lees de ervaringen van ouders over Kids Fysio Capelle. Echte Google reviews over kinderfysiotherapie in Capelle aan den IJssel.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      {/* 1. Full-width Hero met teamfoto en lichtgroene gradient */}
      <section className="relative h-[60vh] min-h-[450px] max-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/KidsFysioCapelle-kinder-fysiotherapeuten.webp"
          alt="Het team van kinderfysiotherapeuten bij Kids Fysio Capelle"
          fill
          priority
          className="object-cover object-[50%_30%]"
          sizes="100vw"
        />
        {/* Huiskleur gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b5dfcb]/95 via-[#b5dfcb]/70 to-transparent z-10" />

        <div className="relative z-20 w-full mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-xl">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-4">
                Ervaringen
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-forest mb-6">
                Wat ouders zeggen
              </h1>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/90 max-w-md leading-relaxed">
                Echte ervaringen van ouders die hun kind bij ons hebben laten behandelen in Capelle aan den IJssel.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Elfsight Google Reviews Widget */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest mb-4">Google Reviews</h2>
              <p className="text-muted">Lees wat anderen over ons zeggen.</p>
            </div>
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

      {/* 3. CTA Section */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-forest leading-[1.1]">
              Deel ook uw ervaring
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              Help andere ouders bij hun keuze en deel hoe Kids Fysio Capelle uw kind heeft geholpen.
            </p>
            <div className="mt-12">
              <Button href="/contact/" className="bg-forest text-white hover:bg-charcoal shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                Contact opnemen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
