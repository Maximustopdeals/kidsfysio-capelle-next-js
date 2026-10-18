import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
  },
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Ook voor Rotterdam, Barendrecht, Nieuwerkerk en Krimpen. Voor kinderen van 0 tot 18 jaar.",
  alternates: { canonical: "/" },
};

const ageGroups = [
  {
    href: "/baby-dreumes/",
    title: "Baby & Dreumes",
    years: "0–2",
    description:
      "Motorische ontwikkeling, voorkeurshoudingen en overstrekking — met rust en aandacht voor de allerkleinsten.",
  },
  {
    href: "/peuters-kleuters/",
    title: "Peuters & Kleuters",
    years: "2–4",
    description:
      "Evenwicht, coördinatie en de motorische basis voor een soepele start op de basisschool.",
  },
  {
    href: "/basisschool/",
    title: "Basisschool",
    years: "5–12",
    description:
      "Schrijfmotoriek, houding, sportblessures en vaardigheden die meedoen vanzelfsprekend maken.",
  },
  {
    href: "/tiener/",
    title: "Tiener",
    years: "12–18",
    description:
      "Groeigerelateerde klachten, sport en houding — begeleiding die past bij de puberteit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Cinematic full-bleed hero ─── */}
      <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <Image
          src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
          alt="Oefenzaal Kids Fysio Capelle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft, layered overlays — not heavy gradients */}
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-cream/60 mb-8">
              Capelle aan den IJssel
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-serif text-[clamp(3.25rem,8vw,6.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-cream max-w-[12ch]">
              Spelend
              <br />
              <em className="italic font-light">in beweging</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="mt-8 text-[1.05rem] lg:text-lg text-cream/75 max-w-md leading-relaxed font-light">
              Gespecialiseerde kinderfysiotherapie voor kinderen van 0 tot 18
              jaar. Met aandacht, rust en plezier.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="/contact/" variant="primary" size="lg">
                Afspraak maken
              </Button>
              <Button
                href="/behandelingen/"
                variant="text"
                className="text-cream decoration-cream/30 hover:decoration-cream/70"
              >
                Onze behandelingen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Intro — editorial split ─── */}
      <section className="py-28 lg:py-40 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  De praktijk
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Zorg die
                  <br />
                  <em className="italic">rust geeft</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.15}>
                <p className="text-muted text-lg leading-[1.8] font-light">
                  Onze gespecialiseerde kinderfysiotherapeuten begeleiden
                  kinderen in een speelse, veilige en prikkelarme omgeving.
                  Met vier moderne behandelkamers en een ruime oefenzaal groeit
                  ieder kind op zijn eigen tempo.
                </p>
                <p className="mt-6 text-muted leading-[1.8] font-light">
                  Ouders ervaren rust. Kinderen voelen vertrouwen. Wij denken
                  mee, kijken verder en nemen altijd de tijd.
                </p>
                <div className="mt-10">
                  <Button href="/over-ons/" variant="outline">
                    Over onze praktijk
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Age groups — asymmetrical editorial ─── */}
      <section className="py-28 lg:py-36 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-xl mb-20 lg:mb-28">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                Ontwikkelfasen
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                Afgestemd op
                <br />
                <em className="italic">elke leeftijd</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {ageGroups.map((group, i) => (
              <FadeIn key={group.href} delay={i * 0.06}>
                <Link
                  href={group.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 lg:py-12 border-t border-charcoal/10 hover:border-charcoal/20 transition-colors duration-500"
                >
                  <div className="md:col-span-2">
                    <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-sage">
                      {group.years} jaar
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-sage transition-colors duration-500">
                      {group.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted leading-relaxed font-light max-w-md">
                      {group.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-start pt-1">
                    <span className="text-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg">
                      →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* ─── Visual moment — large image ─── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/KidsFysioCapelle-prakijkruimte.webp"
          alt="Praktijkruimte Kids Fysio Capelle"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full mx-auto max-w-7xl px-6 lg:px-12 pb-14 lg:pb-20">
            <FadeIn>
              <p className="font-serif text-3xl lg:text-5xl font-light text-cream leading-tight max-w-lg tracking-[-0.02em]">
                Vier behandelkamers.
                <br />
                <em className="italic">Eén speelse oefenzaal.</em>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Quiet CTA ─── */}
      <section className="py-32 lg:py-44 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.15]">
              Klaar om de eerste
              <br />
              <em className="italic">stap te zetten?</em>
            </h2>
            <p className="mt-8 text-muted text-lg leading-relaxed font-light max-w-md mx-auto">
              Neem vrijblijvend contact op. Wij denken graag met u mee over de
              ontwikkeling van uw kind.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/contact/" variant="primary" size="lg">
                Contact opnemen
              </Button>
              <Button href="tel:0103032575" variant="outline" size="lg">
                010 303 2575
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
