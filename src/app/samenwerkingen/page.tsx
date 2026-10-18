import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Samenwerkingen | Kids Fysio Capelle",
  description:
    "Kids Fysio Capelle werkt samen met huisartsen, scholen en specialisten in Capelle aan den IJssel en omgeving voor optimale kinderzorg.",
  alternates: { canonical: "/samenwerkingen/" },
};

const partners = [
  { title: "Zorgprofessionals", text: "Nauw contact met huisartsen, consultatiebureau, osteopaat, kindermanueeltherapeut en andere disciplines. Zo schakelen we snel en stellen we integrale behandelplannen op." },
  { title: "Scholen", text: "Samenwerking met basisscholen in Capelle. Wij observeren en behandelen waar nodig op school, in de setting waar de hulpvraag speelt." },
  { title: "Wijk Oostgaarde", text: "Aangesloten bij het wijk-jeugdoverleg met buurtcoach, gemeente, Welzijn Capelle, Sportief Capelle, scholen en Centrum voor Jeugd en Gezin." },
];

const specialistPartners = [
  { title: "Medische kindzorg", text: "Samenwerking bij ontwikkelingsachterstanden en prikkelverwerkingsproblemen voor kinderen van 0 tot 23 jaar." },
  { title: "Sportclubs", text: "Blessurespreekuur en begeleiding bij jeugdsport, onder andere in samenwerking met lokale verenigingen." },
  { title: "Bekkenfysiotherapie", text: "Samenwerking bij poep- of plasproblemen bij kinderen, onder andere met het IJsselland ziekenhuis." },
  { title: "Baby- & kinderslaapcoach", text: "Aanvullende begeleiding bij slaapproblemen, in combinatie met kinderfysiotherapie." },
];

const logos = [
  { src: "/images/Logo-CityKids.png", alt: "CityKids" },
  { src: "/images/IKC-Cornelis-Haak.png", alt: "IKC Cornelis Haak" },
  { src: "/images/logo_OBS-catamaran.png", alt: "OBS Catamaran" },
  { src: "/images/Groen-van-Prinstererschool.png", alt: "Groen van Prinstererschool" },
];

export default function SamenwerkingenPage() {
  return (
    <>
      <PageHero
        eyebrow="Netwerk"
        title={<>Samenwerkingen voor<br /><em className="italic">optimale zorg</em></>}
        subtitle="Kids Fysio Capelle werkt intensief samen met huisartsen, scholen, specialisten en organisaties in de regio."
      />

      {/* Multidisciplinair */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Multidisciplinair
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-24">
              Samen voor het beste resultaat
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-16">
            {partners.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                  <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-12 text-center">
              Onder meer in samenwerking met
            </p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {logos.map((logo) => (
              <div 
                key={logo.alt} 
                className="relative h-20 w-36 lg:h-24 lg:w-48 bg-white/60 rounded-2xl p-4 shadow-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white transition-all duration-500 hover:-translate-y-1"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill 
                  className="object-contain p-2" 
                  sizes="(max-width: 768px) 150px, 200px" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gespecialiseerde samenwerkingen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Partners
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-24">
              Gespecialiseerde samenwerkingen
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16">
            {specialistPartners.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                  <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Samenwerken met ons?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Bent u zorgprofessional of school en wilt u samenwerken? Neem contact op.
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
