"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Over ons", 
    href: "/over-ons",
    children: [
      { name: "Het team", href: "/over-ons/het-team" },
      { name: "Eerste bezoek", href: "/over-ons/eerste-bezoek" },
      { name: "Belangrijke informatie", href: "/over-ons/belangrijke-informatie" },
      { name: "Klachtenreglement", href: "/over-ons/klachtenreglement" },
      { name: "Vergoedingen", href: "/over-ons/vergoedingen" },
      { name: "Samenwerkingen", href: "/samenwerkingen" }
    ]
  },
  { 
    name: "Behandelingen", 
    href: "/behandelingen",
    children: [
      { name: "Baby & dreumes", href: "/baby-dreumes" },
      { name: "Peuters & kleuters", href: "/peuters-kleuters" },
      { name: "Basisschool", href: "/basisschool" },
      { name: "Tiener", href: "/tiener" },
    ],
    dropdownOnly: true,
  },
  { name: "Reviews", href: "/reviews" },
  { name: "Specialisaties", href: "/specialisaties" },
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
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-[1000] w-full flex flex-col">
      
      {/* TOPBAR */}
      <div className="bg-sage text-forest text-[0.65rem] sm:text-xs py-2.5 px-6 lg:px-12 grid grid-cols-3 items-center font-bold tracking-[0.15em] uppercase">
        <a className="hover:text-charcoal transition-colors flex items-center gap-2 justify-self-start" href="https://www.instagram.com/kidsfysiocapelle/" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op Instagram">
          <InstagramIcon />
          <span className="hidden sm:inline">@kidsfysiocapelle</span>
        </a>
        
        <span className="hidden md:block text-center truncate">
          Samen maken we bewegen weer leuk
        </span>
        
        <a href="mailto:info@kidsfysiocapelle.nl" className="hover:text-charcoal transition-colors justify-self-end font-semibold">
          info@kidsfysiocapelle.nl
        </a>
      </div>

      {/* HOOFDNAVIGATIE */}
      <header className={`w-full transition-all duration-500 border-b border-charcoal/5 ${scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm py-2 lg:py-3" : "bg-cream py-3 lg:py-5"}`}>
        <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          
          {/* Links: Logo (Iets groter op mobiel voor betere balans) */}
          <div className="flex justify-start">
            <Link 
              href="/" 
              onClick={handleHomeClick}
              className="relative z-10 shrink-0" 
              aria-label="Kids Fysio Capelle - Home"
            >
              <Image 
                src="/images/Logo_Kids_Fysio_Capelle.png" 
                alt="Kids Fysio Capelle" 
                width={220} 
                height={90} 
                className="h-12 lg:h-14 w-auto object-contain transition-transform hover:scale-105" 
                priority 
              />
            </Link>
          </div>

          {/* Midden: Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8" aria-label="Hoofdmenu">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              const hasChildren = !!item.children;
              const isDropdownOnly = item.dropdownOnly === true;

              return (
                <div 
                  key={item.name} 
                  className="relative group" 
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.name)} 
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    isDropdownOnly ? (
                      <button 
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`flex items-center justify-center gap-1.5 py-2 font-bold text-[0.85rem] tracking-wide uppercase transition-all duration-300 ${isActive ? "text-sage" : "text-charcoal hover:text-forest"}`}
                      >
                        {item.name}
                        <svg 
                          className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Link 
                          href={item.href} 
                          className={`flex items-center justify-center py-2 font-bold text-[0.85rem] tracking-wide uppercase transition-all duration-300 ${isActive ? "text-sage" : "text-charcoal hover:text-forest"}`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === item.name ? null : item.name);
                          }}
                          aria-label={`Submenu van ${item.name} ${activeDropdown === item.name ? "sluiten" : "openen"}`}
                          className={`p-1 rounded transition-colors ${isActive ? "text-sage" : "text-charcoal hover:text-forest"}`}
                        >
                          <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    )
                  ) : (
                    <Link 
                      href={item.href} 
                      onClick={item.name === "Home" ? handleHomeClick : undefined}
                      className={`flex items-center justify-center gap-1.5 py-2 font-bold text-[0.85rem] tracking-wide uppercase transition-all duration-300 ${isActive ? "text-sage" : "text-charcoal hover:text-forest"}`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {hasChildren && (
                    <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 origin-top rounded-2xl bg-white p-2 shadow-xl shadow-charcoal/5 ring-1 ring-black/5 transition-all duration-300 ${activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                      {item.children.map((child) => (
                        <Link 
                          key={child.name} 
                          href={child.href} 
                          className="block text-center rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-sage/10 hover:text-forest transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <a href="tel:0103032575" className="hidden lg:inline-flex items-center justify-center rounded-full bg-forest px-6 py-2.5 font-bold text-[0.85rem] text-white tracking-wide shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-charcoal">
              Bel ons
            </a>

            {/* Modernere Hamburger Toggle */}
            <button 
              className="lg:hidden p-2 text-forest hover:bg-sage/30 rounded-xl transition-colors" 
              aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"} 
              aria-expanded={mobileOpen} 
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBIEL MENU (Speelser en moderner) */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-cream z-[999] transition-all duration-500 ease-in-out origin-top flex flex-col ${
          mobileOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="flex-grow overflow-y-auto px-6 py-6">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              const isDropdownOpen = mobileDropdown === item.name;
              const hasChildren = !!item.children;
              const isDropdownOnly = item.dropdownOnly === true;

              return (
                <li key={item.name} className="pb-2">
                  {hasChildren ? (
                    isDropdownOnly ? (
                      <button 
                        type="button"
                        onClick={() => setMobileDropdown(isDropdownOpen ? null : item.name)}
                        className={`flex items-center justify-between w-full font-bold text-lg tracking-wide py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-sage/30 text-forest" : "text-charcoal hover:bg-sage/10"}`}
                      >
                        {item.name}
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <Link 
                          href={item.href} 
                          className={`flex-grow font-bold text-lg tracking-wide py-3 px-4 rounded-2xl transition-colors ${
                            isActive ? "bg-sage/30 text-forest" : "text-charcoal hover:bg-sage/10"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMobileDropdown(isDropdownOpen ? null : item.name);
                          }}
                          aria-label={`Submenu van ${item.name} ${isDropdownOpen ? "sluiten" : "openen"}`}
                          className="p-3 text-forest hover:bg-sage/20 rounded-2xl transition-colors ml-1"
                        >
                          <svg 
                            className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    )
                  ) : (
                    <Link 
                      href={item.href} 
                      onClick={item.name === "Home" ? handleHomeClick : undefined}
                      className={`block font-bold text-lg tracking-wide py-3 px-4 rounded-2xl transition-colors ${
                        isActive ? "bg-sage/30 text-forest" : "text-charcoal hover:bg-sage/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {hasChildren && (
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isDropdownOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col space-y-1 pl-4 border-l-2 border-sage/40 ml-2">
                          {item.children.map((child) => (
                            <Link 
                              key={child.name} 
                              href={child.href} 
                              className="block py-2.5 px-4 text-base font-semibold text-muted hover:bg-sage/10 hover:text-forest rounded-xl transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sticky onderkant voor de Bel-knop */}
        <div className="p-6 bg-cream border-t border-charcoal/5 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <a 
            href="tel:0103032575" 
            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-forest px-5 py-4 font-bold text-sm uppercase tracking-wide text-white shadow-lg shadow-forest/20 transition-transform hover:bg-charcoal active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Bel ons direct
          </a>
        </div>
      </div>
    </div>
  );
}
