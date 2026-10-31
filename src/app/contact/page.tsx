import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Contact | Kids Fysio Capelle",
  description:
    "Neem contact op met Kids Fysio Capelle in Capelle aan den IJssel. Bel, mail of vul het formulier in voor een afspraak voor kinderfysiotherapie.",
  alternates: { canonical: "/contact/" },
};

const practiceFeatures = [
  {
    title: "Kindvriendelijk",
    text: "Wachtkamer en behandelruimtes speciaal ingericht voor kinderen.",
    icon: "heart",
  },
  {
    title: "Gratis parkeren",
    text: "Ruime parkeergelegenheid direct voor de deur.",
    icon: "car",
  },
  {
    title: "Goed bereikbaar",
    text: "Met zowel eigen vervoer als openbaar vervoer.",
    icon: "bus",
  },
  {
    title: "BIG-geregistreerd",
    // Aangepast voor consistentie met de gewenste warmere toon uit het Word-document
    text: "Alle kinderfysiotherapeuten in onze praktijk zijn BIG-geregistreerd en gespecialiseerd.",
    icon: "shield",
  },
];

const openingHours = [
  { day: "Maandag t/m vrijdag", hours: "08:30 - 18:00" },
  { day: "Avondspreekuur", hours: "Op afspraak" },
  { day: "Zaterdag", hours: "Gesloten" },
  { day: "Zondag", hours: "Gesloten" },
];

const badges = [
  "Vergoed door alle zorgverzekeraars",
  "Geen wachtlijst",
  "Gespecialiseerde kinderfysiotherapeuten",
  "Kindvriendelijke omgeving",
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full bg-cream pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start z-10">
            <FadeIn>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-sage mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-sage inline-block"></span>
                Contact
              </p>
            </FadeIn>
            
            <FadeIn delay={0.12}>
              <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-charcoal mb-8">
                Laten we in gesprek
                <br />
                <em className="italic font-light">gaan</em>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.28}>
              <p className="text-[1.05rem] lg:text-lg text-muted max-w-md leading-[1.8] font-light mb-10">
                Heeft u vragen over de ontwikkeling van uw kind of wilt u direct een afspraak maken? Wij staan voor u klaar.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="tel:0103032575" variant="primary" size="lg">
                  Bel 010 303 2575
                </Button>
                <Button href="#contactformulier" variant="outline" size="lg">
                  Stuur een bericht
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-3 text-sm text-muted font-light">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-mint/20 text-brand-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                Reactie binnen 24 uur
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full">
            <FadeIn delay={0.2} direction="left">
              <div className="absolute -inset-4 bg-brand-mint/10 rounded-[2.5rem] transform rotate-2 blur-lg"></div>
              
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10">
                <Image
                  src="/images/Kids-Fysio-Capelle-wachtkamer.webp"
                  alt="Wachtkamer Kids Fysio Capelle in Capelle aan den IJssel"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 2. Contactgegevens en Formulier */}
      <section id="contactformulier" className="py-28 lg:py-36 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Linkerkolom: Contactgegevens */}
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  Bereik ons
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1] mb-10">
                  Hoe kunnen we u <em className="italic">helpen?</em>
                </h2>
                
                <div className="space-y-8">
                  
                  {/* Telefoon */}
                  <div className="group border-t border-charcoal/10 pt-6 transition-colors duration-500 hover:border-forest/40">
                    <h3 className="font-serif text-xl font-light text-charcoal mb-3">Telefonisch contact</h3>
                    <a href={siteConfig.phoneHref} className="text-lg text-charcoal hover:text-forest transition-colors font-light">
                      {siteConfig.phone}
                    </a>
                    <p className="mt-2 text-sm text-muted font-light">
                      Bereik ons tijdens kantooruren voor vragen of het maken van een afspraak.
                    </p>
                  </div>

                  {/* E-mail */}
                  <div className="group border-t border-charcoal/10 pt-6 transition-colors duration-500 hover:border-forest/40">
                    <h3 className="font-serif text-xl font-light text-charcoal mb-3">E-mail</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg text-charcoal hover:text-forest transition-colors font-light break-all">
                      {siteConfig.email}
                    </a>
                    <p className="mt-2 text-sm text-muted font-light">
                      Stuur ons een e-mail. Wij reageren binnen 24 uur.
                    </p>
                  </div>

                  {/* Praktijkadres */}
                  <div className="group border-t border-charcoal/10 pt-6 transition-colors duration-500 hover:border-forest/40">
                    <h3 className="font-serif text-xl font-light text-charcoal mb-3">Bezoek onze praktijk</h3>
                    <address className="not-italic text-muted leading-relaxed font-light">
                      {siteConfig.name}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </address>
                    <p className="mt-2 text-sm text-muted font-light">
                      Gratis parkeren en goed bereikbaar.
                    </p>
                  </div>

                  {/* Openingstijden */}
                  <div className="group border-t border-charcoal/10 pt-6 transition-colors duration-500 hover:border-forest/40">
                    <h3 className="font-serif text-xl font-light text-charcoal mb-4">Openingstijden</h3>
                    <ul className="space-y-2">
                      {openingHours.map((item) => (
                        <li key={item.day} className="flex justify-between items-center text-sm text-muted font-light">
                          <span>{item.day}</span>
                          <span className="font-medium text-charcoal">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </FadeIn>
            </div>

            {/* Rechterkolom: Formulier */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.12}>
                <div className="bg-warm-gray rounded-[2rem] p-8 lg:p-12 shadow-sm">
                  <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal mb-2">
                    Stuur ons een bericht
                  </h2>
                  <p className="text-muted mb-10 font-light">
                    Vul onderstaand formulier in en we nemen zo snel mogelijk contact met u op over kinderfysiotherapie in Capelle aan den IJssel.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Onze kindvriendelijke praktijk */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-2xl mb-16 lg:mb-24">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Onze praktijk
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Onze kindvriendelijke <em className="italic">praktijk</em>
              </h2>
              <p className="mt-6 text-muted text-lg leading-[1.8] font-light">
                Bij Kids Fysio Capelle staat uw kind centraal. Ontdek waarom ouders voor ons kiezen voor kinderfysiotherapie in Capelle aan den IJssel.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceFeatures.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-charcoal/5 h-full">
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-8">
                    {item.icon === "heart" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    )}
                    {item.icon === "car" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17v-4l2-5h10l2 5v4M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M19 17v2a1 1 0 0 0-1 1h-1a1 1 0 0 0-1-1v-2"/><circle cx="7.5" cy="14.5" r=".5"/><circle cx="16.5" cy="14.5" r=".5"/></svg>
                    )}
                    {item.icon === "bus" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 12h18"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                    )}
                    {item.icon === "shield" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-light text-charcoal mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
              Heeft u vragen over kinderfysiotherapie?
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light text-lg mb-12">
              Onze gespecialiseerde kinderfysiotherapeuten in Capelle aan den IJssel staan voor u klaar. Neem vrijblijvend contact op voor advies of het maken van een afspraak.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="text-brand-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-charcoal">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <Button href="tel:0103032575" variant="primary" size="lg">
                Bel 010 303 2575
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="outline" size="lg">
                Stuur een e-mail
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
