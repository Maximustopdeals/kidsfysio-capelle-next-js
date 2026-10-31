import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Samenwerkingen | Kids Fysio Capelle",
  description: "Kids Fysio Capelle werkt samen met scholen, zorginstellingen en professionals in de regio Capelle aan den IJssel voor de beste zorg voor uw kind.",
  alternates: { canonical: "/samenwerkingen/" },
};

const scholen = [
  { name: "Catamaran", type: "Basisschool" },
  { name: "CHS", type: "Basisschool" },
  { name: "Horizon Koggerwaard", type: "Basisschool" },
  { name: "GvP", type: "Basisschool" },
];

const zorgprofessionals = [
  { name: "Heiszwolf", type: "Zorginstelling" },
  { name: "Diëtiste", type: "Voedingsdeskundige" },
  { name: "Podotherapeuten", type: "Voet- en houdingsspecialisten" },
  { name: "CJG", type: "Centrum voor Jeugd en Gezin" },
];

export default function SamenwerkingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-cream pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
              Ons netwerk
              <span className="w-8 h-[1px] bg-sage inline-block"></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
              Samenwerkingen
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="text-[1.05rem] lg:text-lg text-muted max-w-2xl mx-auto leading-[1.8] font-light">
              Goede zorg voor kinderen is teamwork. Wij werken daarom nauw samen met basisscholen, zorginstellingen en andere professionals in de regio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Scholen */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-12">
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light text-charcoal">
                Lopende scholen
              </h2>
              <p className="mt-4 text-muted font-light max-w-2xl">
                Wij zijn actief betrokken bij de motorische ontwikkeling van kinderen op verschillende basisscholen in de regio.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholen.map((school, i) => (
              <FadeIn key={school.name} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-charcoal/5 h-full flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-forest text-xl mb-2">{school.name}</h3>
                  <p className="text-muted text-sm">{school.type}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Zorgprofessionals */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-12">
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light text-charcoal">
                Zorg & Welzijn
              </h2>
              <p className="mt-4 text-muted font-light max-w-2xl">
                Voor een integrale aanpak werken we samen met diverse zorgprofessionals en instanties, zodat uw kind de best mogelijke ondersteuning krijgt.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zorgprofessionals.map((pro, i) => (
              <FadeIn key={pro.name} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-charcoal/5 h-full flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-forest text-xl mb-2">{pro.name}</h3>
                  <p className="text-muted text-sm">{pro.type}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-cream border-t border-charcoal/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Ook een samenwerking aangaan?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Bent u een zorgprofessional of school in de regio en ziet u kansen voor een samenwerking? Neem vrijblijvend contact met ons op.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Neem contact op
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
