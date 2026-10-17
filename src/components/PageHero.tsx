import FadeIn from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-36 lg:pt-44 pb-20 lg:pb-28 bg-warm-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          {eyebrow && (
            <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light tracking-[-0.03em] text-charcoal max-w-3xl leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-muted text-lg max-w-xl leading-[1.8] font-light">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
