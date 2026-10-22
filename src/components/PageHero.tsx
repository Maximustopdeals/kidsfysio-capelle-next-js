import FadeIn from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 bg-sage overflow-hidden">
      {/* Optionele decoratie voor de "thuis" look */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          {eyebrow && (
            <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-forest mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-forest max-w-4xl leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-forest/80 text-lg max-w-2xl leading-[1.8]">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
