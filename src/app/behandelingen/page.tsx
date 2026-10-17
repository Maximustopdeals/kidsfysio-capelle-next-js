import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Behandelingen",
  description:
    "Kinderfysiotherapie afgestemd op elke ontwikkelfase: baby-dreumes, peuters-kleuters, basisschoolkinderen en tieners in Capelle aan den IJssel.",
  alternates: { canonical: "/behandelingen/" },
};

const categories = [
  { href: "/baby-dreumes/", title: "Baby & Dreumes", years: "0–2", text: "Gespecialiseerde zorg voor de allerkleinsten. Van motorische ontwikkeling tot voorkeurshoudingen en overstrekking." },
  { href: "/peuters-kleuters/", title: "Peuters & Kleuters", years: "2–4", text: "Ondersteuning bij motorische ontwikkeling, evenwicht, coördinatie en voorbereiding op de basisschool." },
  { href: "/basisschool/", title: "Basisschool", years: "5–12", text: "Hulp bij motorische vaardigheden, schrijfproblemen, houding, sportblessures en conditieverbetering." },
  { href: "/tiener/", title: "Tiener", years: "12–18", text: "Begeleiding bij groeigerelateerde klachten, sportblessures, houdingscorrectie en conditietraining." },
];

export default function BehandelingenPage() {
  return (
    <>
      <PageHero
        eyebrow="Behandelingen"
        title={<>Zorg op maat voor<br /><em className="italic">iedere leeftijd</em></>}
        subtitle="Kinderfysiotherapie afgestemd op elke ontwikkelfase — van baby tot tiener, altijd spelenderwijs en op maat."
      />

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-0">
            {categories.map((c, i) => (
              <FadeIn key={c.href} delay={i * 0.06}>
                <Link
                  href={c.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 lg:py-12 border-t border-charcoal/10 hover:border-charcoal/20 transition-colors duration-500"
                >
                  <div className="md:col-span-2">
                    <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">{c.years} jaar</span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-sage transition-colors duration-500">{c.title}</h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted leading-relaxed font-light max-w-md">{c.text}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-start pt-1">
                    <span className="text-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg">→</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-28 lg:mt-36 text-center max-w-xl mx-auto">
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal">
                Vragen over kinderfysiotherapie?
              </h2>
              <p className="mt-6 text-muted leading-relaxed font-light">
                Onze gespecialiseerde kinderfysiotherapeuten staan voor u klaar.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <Button href="tel:0103032575" variant="primary">Bel 010 303 2575</Button>
                <Button href="/contact/" variant="outline">Afspraak maken</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
