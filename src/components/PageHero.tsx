import FadeIn from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    // Padding-top flink verlaagd voor een strakkere aansluiting op de header
    <section className="pt-16 lg:pt-24 pb-16 lg:pb-24 bg-warm-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          {eyebrow && (
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              {eyebrow}
            </p>
          )}
          
          {/* max-w-5xl geeft de titel meer ademruimte */}
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light tracking-[-0.03em] text-charcoal max-w-5xl leading-[1.05]">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-8 text-muted text-lg max-w-2xl leading-[1.8] font-light">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
