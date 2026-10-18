"use client";

import { useEffect, useState } from "react";

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
    </svg>
  );
}

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toon de knop pas als je 400px naar beneden hebt gescrold
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Deze wrapper is fixed, maar de inhoud lijnt perfect uit met de footer (max-w-7xl)
    <div className="fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 flex justify-between items-end w-full">
        
        {/* BackToTop Knop - Helemaal links uitgelijnd */}
        <button
          onClick={scrollToTop}
          aria-label="Terug naar boven"
          className={`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#144536] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f3328] ${
            showBackToTop ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>

        {/* WhatsApp Knop - Helemaal rechts uitgelijnd */}
        <a
          href="https://wa.me/31682013490"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
        >
          {/* Pulse animatie ring */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75 animate-ping" />
          <WhatsAppIcon />
        </a>

      </div>
    </div>
  );
}
