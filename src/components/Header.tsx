"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Over ons", 
    href: "/over-ons",
    children: [{ name: "Samenwerkingen", href: "/samenwerkingen" }]
  },
  { 
    name: "Behandelingen", 
    href: "/behandelingen",
    children: [
      { name: "Baby & dreumes", href: "/baby-dreumes" },
      { name: "Peuters & kleuters", href: "/peuters-kleuters" },
      { name: "Basisschool", href: "/basisschool" },
      { name: "Tiener", href: "/tiener" },
    ]
  },
  { name: "Reviews", href: "/reviews" },
  { name: "Specialisaties", href: "/specialisaties" },
  { name: "Vergoedingen", href: "/vergoedingen" },
  { name: "Contact", href: "/contact" },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-[1000] w-full flex flex-col">
      
      {/* ─── TOPBAR (Minimalistisch & Luxe) ─── */}
      <div className="bg-sage text-forest text-[0.65rem] sm:text-xs py-2.5 px-6 lg:px-12 grid grid-cols-3 items-center font-bold tracking-[0.15em] uppercase">
        {/* Links: Instagram */}
        <a className="hover:text-charcoal transition-colors flex items-center gap-2 justify-self-start" href="https://www.instagram.com/kidsfysiocapelle/" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op Instagram">
          <InstagramIcon />
          <span className="hidden sm:inline">@kidsfysiocapelle</span>
        </a>
        
        {/* Midden: Slogan */}
        <span className="hidden md:block text-center truncate">
          Samen maken we bewegen weer leuk
        </span>
        
        {/* Rechts: Leeg voor perfecte centrering */}
        <div className="justify-self-end"></div>
      </div>

      {/* ─── HOOFDNAVIGATIE ─── */}
      <header className={`w-full transition-all duration-500 border-b border-charcoal/5 ${scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm py-3" : "bg-cream py-5"}`}>
        <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          
          {/* Links: Logo */}
          <div className="flex justify-start">
            <Link href="/" className="relative z-10 shrink-0" aria-label="Kids Fysio Capelle - Home">
              <Image 
                src="/images/Logo_Kids_Fysio_Capelle.png" // <-- HIER IS DE FIX TOEGEPAST
                alt="Kids Fysio Capelle" 
                width={220} // Iets breder voor een mooiere verhouding
                height={90} 
                className="h-10 lg:h-14 w-auto object-contain transition-transform hover:scale-105" 
                priority 
              />
            </Link>
          </div>

          {/* Midden: Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8" aria-label="Hoofdmenu">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.name} className="relative group" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={item.href} className={`flex items-center justify-center gap-1.5 py-2 font-nunito font-bold text-[0.85rem] tracking-wide uppercase transition-all duration-300 ${isActive ? "text-sage" : "text-charcoal hover:text-forest"}`}>
                    {item.name}
                    {item.children && (
                      <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 origin-top rounded-2xl bg-white p-2 shadow-xl shadow-charcoal/5 ring-1 ring-black/5 transition-all duration-300 ${activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} className="block text-center rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-sage/10 hover:text-forest transition-colors">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Rechts: CTA & Mobile Toggle */}
          <div className="flex items-center justify-end gap-4">
            <a href="tel:0103032575" className="hidden lg:inline-flex items-center justify-center rounded-full bg-forest px-6 py-2.5 font-nunito font-bold text-[0.85rem] text-white tracking-wide shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-charcoal">
              Bel ons
            </a>

            <button className="lg:hidden p-2 text-charcoal hover:bg-charcoal/5 rounded-lg transition-colors" aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}>
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobiel Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-cream border-t border-charcoal/5 shadow-xl transition-all duration-300 ease-in-out origin-top ${mobileOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}`}>
          <div className="px-6 py-8 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl font-nunito font-bold text-sm uppercase tracking-wide text-charcoal hover:bg-sage/10 hover:text-forest transition-colors text-center">
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-sage/30 ml-4">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-muted hover:text-forest hover:bg-sage/10 transition-colors text-center">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-6 border-t border-charcoal/5">
              <a href="tel:0103032575" className="flex items-center justify-center w-full rounded-xl bg-forest px-5 py-4 font-nunito font-bold text-sm uppercase tracking-wide text-white shadow-lg shadow-forest/20 transition-colors hover:bg-charcoal">
                Bel ons direct
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
