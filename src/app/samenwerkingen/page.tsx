import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Samenwerkingen | Kids Fysio Capelle",
  description:
    "Kids Fysio Capelle werkt samen met huisartsen, scholen, CityKids, CVV Zwervers en specialisten voor multidisciplinaire kinderfysiotherapie in Capelle aan den IJssel.",
  alternates: { canonical: "/samenwerkingen/" },
};

const partners = [
  {
    name: "CityKids",
    text: "Medische kindzorg voor kinderen van 0 tot 23 jaar. Wij behandelen kinderen met ontwikkelingsachterstanden en prikkelverwerkingsproblemen.",
    link: "https://www.citykids.nl/",
    logo: "/images/Logo-CityKids.png",
    placeholder: "CK",
  },
  {
    name: "CVV Zwervers",
    text: "Mellisa draait iedere maandagavond een blessurespreekuur voor de jeugdleden. Ook zijn wij intensief betrokken bij het internationale U13 toernooi.",
    link: "https://cvvzwervers.nl/component/finder/search?q=blessure+spreekuur+&Itemid=101",
    logo: "/images/logo-cvv-zwervers.webp",
    placeholder: "CVV",
  },
  {
    name: "FS Fysio",
    text: "Bekkenfysiotherapie voor kinderen met poep- of plasproblemen. Gespecialiseerde zorg in samenwerking met het IJsselland ziekenhuis.",
    link: "https://www.fsfysio.nl/bekkenfysiotherapie/kinder_bekkenfysiotherapie/",
    logo: "", // Nog geen logo
    placeholder: "FS",
  },
  {
    name: "Slaapcoach",
    text: "Baby- & kinderslaapcoach voor professionele begeleiding bij slaapproblemen bij kinderen, in aanvulling op kinderfysiotherapie.",
    link: "https://www.slaapdoormetfloor.nl/",
    logo: "", // Nog geen logo
    placeholder: "SC",
  },
];

const schools = [
  { name: "PCB De Horizon", logo: "/images/pcb-De-Horizon-Capelle-aan-den-IJssel.png", link: "https://www.horizoncapelle.nl/" },
  { name: "Groen van Prinstererschool", logo: "/images/Groen-van-Prinstererschool.png", link: "https://www.groencapelle.nl/" },
  { name: "OBS De Catamaran", logo: "/images/logo_OBS-catamaran.png", link: "https://www.obsdecatamaran.nl/" },
  { name: "IKC Cornelis Haak", logo: "/images/IKC-Cornelis-Haak.png", link: "https://ikccornelishaak.nl/" },
];

export default function SamenwerkingenPage() {
  return (
    <>
      <PageHero
        eyebrow="Netwerk"
        title={<>Samenwerkingen voor<br /><em className="italic">optimale zorg</em></>}
        subtitle="Kids Fysio Capelle werkt intensief samen met huisartsen, scholen, specialisten en organisaties in Capelle aan den IJssel voor de beste kinderfysiotherapie."
      />

      {/* 1. Multidisciplinair */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Multidisciplinair
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Samen voor het <em className="italic">beste resultaat</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Bij Kids Fysio Capelle vinden wij het belangrijk om multidisciplinair te werken. Wanneer een probleem meer aandacht vraagt, is het prettig om snel te kunnen schakelen.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn delay={0.1}>
              <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                  Zorgprofessionals
                </h3>
                <p className="mt-4 text-muted leading-relaxed font-light">
                  Wij hebben nauw contact met de huisartsen, het consultatiebureau, de osteopaat, de kindermanueeltherapeut en nog vele andere disciplines in de regio. Door deze intensieve samenwerking kunnen wij snel schakelen, integrale behandelplannen opstellen en expertise delen.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300">
                  Scholen
                </h3>
                <p className="mt-4 text-muted leading-relaxed font-light">
                  Kids Fysio Capelle werkt samen met diverse basisscholen in Capelle aan den IJssel. Wij observeren en behandelen indien nodig de kinderen op school. Er is nauw contact met de leerkrachten en de intern begeleiders, zodat wij een behandelplan kunnen aanbieden in de setting waar de hulpvraag zich afspeelt.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Wijk Oostgaarde */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Betrokken in de wijk
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-8">
              Wijk Oostgaarde
            </h2>
            <p className="text-muted text-lg leading-[1.8] font-light mb-6">
              Kids Fysio Capelle is aangesloten bij het wijk-jeugdoverleg van de wijk Oostgaarde in Capelle aan den IJssel. In dit overleg zitten onder andere de buurtcoach, de gemeente, Welzijn Capelle, Sportief Capelle, de scholen, het Centrum voor Jeugd en Gezin en de wijkagent.
            </p>
            <p className="text-muted text-lg leading-[1.8] font-light">
              Tijdens dit overleg wordt er vanuit ieders oogpunt gekeken naar wat er speelt en leeft in de wijk. Wij brainstormen met elkaar om vanuit elkaars expertise optimaal te kunnen inspelen op de jeugd van de wijk Oostgaarde.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Onze samenwerkingspartners */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Partners
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Onze samenwerkingspartners
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.1}>
                <a 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-white rounded-[1.5rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5"
                >
                  {/* Logo Container - ALTIJD IN KLEUR */}
                  <div className="w-24 h-24 bg-white border border-charcoal/5 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                    {partner.logo ? (
                       <Image 
                         src={partner.logo} 
                         alt={partner.name} 
                         fill 
                         className="object-contain p-3" 
                       />
                    ) : (
                      <span className="font-serif text-3xl text-brand-primary font-bold">
                        {partner.placeholder}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-muted leading-relaxed font-light flex-grow mb-6">
                    {partner.text}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                    Bezoek website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Basisscholen */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Op school
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Samenwerking met <em className="italic">basisscholen</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Wij werken intensief samen met deze basisscholen in Capelle aan den IJssel voor kinderfysiotherapie op school.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {schools.map((school, i) => (
              <FadeIn key={school.name} delay={i * 0.1}>
                <a 
                  href={school.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center bg-white rounded-2xl p-6 h-32 lg:h-40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-charcoal/5"
                >
                  {/* Logo Container - ALTIJD IN KLEUR */}
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image 
                      src={school.logo} 
                      alt={school.name} 
                      fill 
                      className="object-contain" 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                    />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gespecialiseerde samenwerkingen */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Specialisten
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Gespecialiseerde <em className="italic">samenwerkingen</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn delay={0.1}>
              <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300 mb-4">
                  Bekkenfysiotherapie
                </h3>
                <p className="text-muted leading-relaxed font-light mb-4">
                  Voor kinderen met poep- of plasproblemen werken wij samen met FS Fysio. Bekkenfysiotherapeut Jolanda is gespecialiseerd in het behandelen van kinderen en werkt nauw samen met het IJsselland ziekenhuis. Zij draait ook het{" "}
                  <a href="https://www.ysl.nl/specialismen/picobelly-polikliniek/" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline decoration-brand-primary/30 hover:decoration-brand-primary transition-colors">
                    Picobelly spreekuur
                  </a>{" "}
                  in het ziekenhuis.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                <h3 className="font-serif text-2xl font-light text-charcoal group-hover:text-forest transition-colors duration-300 mb-4">
                  Kindermanueeltherapie
                </h3>
                <p className="text-muted leading-relaxed font-light mb-4">
                  Voor gespecialiseerde manuele therapie voor kinderen werken wij samen met:
                </p>
                <ul className="space-y-2 text-muted font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1">•</span>
                    <span><strong className="text-charcoal font-medium">Fysiotherapie Heiszwolf</strong> - Nicole Overmaat & Peter Heiszwolf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1">•</span>
                    <span><strong className="text-charcoal font-medium">FS Fysio</strong> - Jasper Bier</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-28 lg:py-40 bg-warm-gray">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Vragen over onze samenwerkingen?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg">
              Neem contact op voor meer informatie over hoe wij samenwerken met specialisten en scholen in Capelle aan den IJssel.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Contact opnemen
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
