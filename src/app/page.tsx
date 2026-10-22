      {/* 1. Cinematic Hero met lichtgroene gradient en tekst onderaan */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[800px] flex items-end overflow-hidden">
        <Image
          src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
          alt="Oefenzaal Kids Fysio Capelle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Lichtgroene gradient: bovenin transparant zodat de muurtekening zichtbaar is, onderin sterker voor de tekst */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#b5dfcb] via-[#b5dfcb]/60 to-transparent z-10" />

        <div className="relative z-20 w-full mx-auto max-w-7xl px-6 lg:px-12 pb-16 lg:pb-24">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-forest mb-4">
                Kids Fysio Capelle
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-forest mb-4">
                Spelend in beweging!
              </h1>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p className="text-lg text-forest/90 max-w-md leading-relaxed mb-8">
                Onze kinderfysiotherapeuten begeleiden kinderen van baby tot tiener met gerichte behandeling, motorische stimulatie en ontwikkeling in beweging.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact/" className="bg-white text-forest hover:bg-forest hover:text-white shadow-lg border-none rounded-lg px-8 py-4" size="lg">
                  Maak direct een afspraak
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
