import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Over Kids Fysio Capelle | Praktijk Capelle aan den IJssel",
  description:
    "Maak kennis met Kids Fysio Capelle. Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel — speels, veilig en prikkelarm.",
  alternates: { canonical: "/over-ons/" },
};

const values = [
  { title: "Gespecialiseerd kinderteam", text: "Al onze therapeuten zijn gespecialiseerd in kinderfysiotherapie en BIG-geregistreerd." },
  { title: "Speelse omgeving", text: "Vier moderne behandelkamers en een grote oefenzaal waar kinderen zich veilig en uitgedaagd voelen." },
  { title: "Persoonlijke aandacht", text: "We nemen de tijd voor u en uw kind. Geen standaardtrajecten, maar zorg op maat." },
  { title: "Geen wachtlijst", text: "U kunt snel terecht. Direct een afspraak maken is mogelijk zonder verwijzing." },
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="De praktijk"
        title={<>Over <em className="italic">Kids Fysio Capelle</em></>}
        subtitle="Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Spelenderwijs in beweging, van baby tot tiener."
      />

      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/KidsFysioCapelle-prakijkruimte.webp"
          alt="Praktijkruimte Kids Fysio Capelle in Capelle aan den IJssel"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Onze missie</p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Elk kind verdient<br /><em className="italic">om te stralen</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.1}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Kids Fysio Capelle is een gespecialiseerde praktijk voor kinderfysiotherapie. Wij begeleiden kinderen van 0 tot 18 jaar bij motorische ontwikkeling, houdingsproblemen, sportblessures en complexere aandoeningen.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  In een speelse, veilige en prikkelarme omgeving groeit ieder kind op zijn eigen tempo. Ouders uit Capelle, Rotterdam, Barendrecht, Nieuwerkerk en Krimpen ervaren rust; kinderen voelen vertrouwen.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Wat ons kenmerkt</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20">
              Waarom ouders <em className="italic">voor ons kiezen</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((v) => (
              <div key={v.title} className="border-t border-charcoal/10 pt-8">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-charcoal">{v.title}</h3>
                <p className="mt-3 text-muted leading-relaxed font-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/Kids-Fysio-Capelle-wachtkamer.webp"
                alt="Wachtkamer Kids Fysio Capelle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">Locatie</p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-6">
                  Praktijk in Capelle
                </h2>
                <p className="text-muted max-w-xl leading-relaxed mb-10 font-light">
                  De Linie 1D, 2905 AX Capelle aan den IJssel. Gratis parkeren en goed bereikbaar. Open maandag t/m vrijdag van 08:30 tot 18:00.
                </p>
                <Button href="/contact/" variant="primary">Contact & route</Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
