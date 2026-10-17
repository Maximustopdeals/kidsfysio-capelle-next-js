import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vergoedingen",
  description:
    "Kinderfysiotherapie wordt vergoed vanuit de basisverzekering. Informatie over vergoedingen bij Kids Fysio Capelle.",
  alternates: { canonical: "/vergoedingen/" },
};

const points = [
  { title: "Basisverzekering", text: "Kinderfysiotherapie tot 18 jaar wordt vergoed vanuit de basisverzekering. Er geldt geen eigen risico voor kinderen." },
  { title: "Geen verwijzing nodig", text: "U kunt direct een afspraak maken. Een verwijzing van de huisarts is niet verplicht." },
  { title: "Directe toegang", text: "Wij werken met directe toegang fysiotherapie (DTF). Na de intake beoordelen wij of behandeling zinvol is." },
  { title: "Transparante communicatie", text: "Twijfelt u over de dekking? Neem contact op met uw zorgverzekeraar of vraag het ons — wij denken graag mee." },
];

export default function VergoedingenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kosten & dekking"
        title={<>Vergoedingen & <em className="italic">verzekering</em></>}
        subtitle="Kinderfysiotherapie tot 18 jaar wordt vergoed vanuit de basisverzekering. Geen eigen risico voor kinderen."
      />

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {points.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="border-t border-charcoal/10 pt-8">
                  <h2 className="font-serif text-xl lg:text-2xl font-light text-charcoal">{p.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed font-light">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal">
              Vragen over vergoeding?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light">Bel of mail ons. Wij helpen u graag verder.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">Contact opnemen</Button>
              <Button href="tel:0103032575" variant="outline" size="lg">010 303 2575</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
