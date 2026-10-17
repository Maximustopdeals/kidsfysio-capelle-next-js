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

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Multidisciplinair</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20">
              Samen voor het beste resultaat
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {partners.map((p) => (
              <div key={p.title} className="border-t border-charcoal/10 pt-8">
                <h3 className="font-serif text-xl font-light text-charcoal">{p.title}</h3>
                <p className="mt-3 text-muted leading-relaxed font-light">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-10 text-center">
              Onder meer in samenwerking met
            </p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {logos.map((logo) => (
              <div key={logo.alt} className="relative h-14 w-28 lg:h-16 lg:w-36 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="140px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Partners</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20">
              Gespecialiseerde samenwerkingen
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {specialistPartners.map((p) => (
              <div key={p.title} className="border-t border-charcoal/10 pt-8">
                <h3 className="font-serif text-xl font-light text-charcoal">{p.title}</h3>
                <p className="mt-3 text-muted leading-relaxed font-light">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal">
              Samenwerken met ons?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light">
              Bent u zorgprofessional of school en wilt u samenwerken? Neem contact op.
            </p>
            <div className="mt-12">
              <Button href="/contact/" variant="primary" size="lg">Contact opnemen</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
