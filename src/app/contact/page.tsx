import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Kids Fysio Capelle in Capelle aan den IJssel. Bel, mail of vul het formulier in voor een afspraak.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Laten we in gesprek<br /><em className="italic">gaan</em></>}
        subtitle="Heeft u vragen over de ontwikkeling van uw kind of wilt u direct een afspraak maken? Wij staan voor u klaar."
      />

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Linkerkolom: Contactgegevens */}
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="space-y-12">
                  
                  {/* Telefoon */}
                  <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                    <h2 className="font-serif text-xl font-light text-charcoal mb-3">
                      Telefoon
                    </h2>
                    <a 
                      href={siteConfig.phoneHref} 
                      className="text-lg text-charcoal hover:text-forest transition-colors font-light"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="mt-1 text-sm text-muted font-light">
                      Ma t/m Vr 08:30 - 18:00
                    </p>
                  </div>

                  {/* E-mail */}
                  <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                    <h2 className="font-serif text-xl font-light text-charcoal mb-3">
                      E-mail
                    </h2>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-lg text-charcoal hover:text-forest transition-colors font-light break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  {/* Praktijkadres */}
                  <div className="group border-t border-charcoal/10 pt-8 transition-colors duration-500 hover:border-forest/40">
                    <h2 className="font-serif text-xl font-light text-charcoal mb-3">
                      Praktijk
                    </h2>
                    <address className="not-italic text-muted leading-relaxed font-light">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </address>
                    <p className="mt-2 text-sm text-muted font-light">
                      Gratis parkeren · Goed bereikbaar
                    </p>
                  </div>

                  {/* Belknop */}
                  <div>
                    <Button href="tel:0103032575" variant="outline">
                      Bel direct
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Rechterkolom: Formulier */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.12}>
                <div className="bg-warm-gray rounded-[2rem] p-8 lg:p-12 shadow-sm">
                  <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal mb-2">
                    Stuur een bericht
                  </h2>
                  <p className="text-muted mb-10 font-light">
                    Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
