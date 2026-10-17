"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/** Volgorde en structuur zoals op de live site */
const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/over-ons/",
    label: "Over ons",
    children: [{ href: "/samenwerkingen/", label: "Samenwerkingen" }],
  },
  {
    href: "/behandelingen/",
    label: "Behandelingen",
    children: [
      { href: "/baby-dreumes/", label: "Baby-dreumes" },
      { href: "/peuters-kleuters/", label: "Peuters-kleuters" },
      { href: "/basisschool/", label: "Basisschool" },
      { href: "/tiener/", label: "Tiener" },
    ],
  },
  { href: "/reviews/", label: "Reviews" },
  { href: "/specialisaties/", label: "Specialisaties" },
  { href: "/vergoedingen/", label: "Vergoedingen" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,27,25,0.06)]"
          : "bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-[4.5rem] lg:h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0" aria-label="Kids Fysio Capelle — Home">
            <Image
              src="/images/Logo_Kids_Fysio_Capelle.png"
              alt="Kids Fysio Capelle"
              width={180}
              height={56}
              className="h-11 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Hoofdmenu">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3.5 py-2 text-[0.9rem] font-medium tracking-[0.01em] transition-colors duration-300 ${
                    pathname === item.href || pathname.startsWith(item.href.replace(/\/$/, "") + "/")
                      ? "text-sage"
                      : "text-ink/80 hover:text-sage"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-60" aria-hidden>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-2 min-w-[200px]"
                    >
                      <div className="bg-white rounded-lg shadow-[0_8px_30px_rgba(28,27,25,0.1)] border border-charcoal/5 overflow-hidden">
                        <div className="h-0.5 bg-sage/40" />
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-5 py-2.5 text-[0.9rem] text-ink/80 hover:text-sage hover:bg-warm-gray/60 transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden relative z-10 p-2 -mr-2 text-charcoal"
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-charcoal/5 bg-cream"
          >
            <nav className="px-6 py-6 space-y-1" aria-label="Mobiel menu">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2.5 text-[1rem] font-medium text-charcoal"
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-[0.95rem] text-muted"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
