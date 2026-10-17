import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand + social */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo-voor-footer.webp"
                alt="Kids Fysio Capelle"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm text-cream/55">
              KVK: 87211445
            </p>
            <p className="mt-3 text-sm text-cream/55 leading-relaxed max-w-[220px]">
              Alle kinderfysiotherapeuten in deze praktijk zijn BIG-geregistreerd.
            </p>
            <div className="mt-8 flex flex-col gap-3 max-w-[200px]">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-cream/15 text-sm text-cream/70 hover:text-cream hover:border-cream/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-cream/15 text-sm text-cream/70 hover:text-cream hover:border-cream/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Handige links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium tracking-wide text-cream mb-1">Handige links</h4>
            <div className="w-8 h-0.5 bg-sage-light/50 mb-5" />
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/over-ons/", label: "Over ons" },
                { href: "/samenwerkingen/", label: "Samenwerkingen" },
                { href: "/behandelingen/", label: "Behandelingen" },
                { href: "/specialisaties/", label: "Specialisaties" },
                { href: "/reviews/", label: "Reviews" },
                { href: "/contact/", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.95rem] text-cream/55 hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium tracking-wide text-cream mb-1">Informatie</h4>
            <div className="w-8 h-0.5 bg-sage-light/50 mb-5" />
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/images/Klachtenregeling-Kids-Fysio-Capelle.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-cream/55 hover:text-cream transition-colors"
                >
                  Klachtenregeling
                </a>
              </li>
              <li>
                <a
                  href="/images/Huisregels.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-cream/55 hover:text-cream transition-colors"
                >
                  Huisregels
                </a>
              </li>
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium tracking-wide text-cream mb-1">Bedrijfsgegevens</h4>
            <div className="w-8 h-0.5 bg-sage-light/50 mb-5" />
            <address className="not-italic text-[0.95rem] text-cream/55 leading-relaxed space-y-4">
              <p>
                Kids Fysio Capelle
                <br />
                De Linie 1D, 2905 AX
                <br />
                Capelle aan den IJssel
              </p>
              <p>
                <a href={siteConfig.phoneHref} className="hover:text-cream transition-colors">
                  010 303 2575
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream transition-colors">
                  info@kidsfysiocapelle.nl
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-cream/35">
          <p>© {new Date().getFullYear()} Kids Fysio Capelle – Alle rechten voorbehouden</p>
          <a
            href="/images/Privacyverklaring-KidsFysioCapelle.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream/60 transition-colors"
          >
            Privacy verklaring
          </a>
        </div>
      </div>
    </footer>
  );
}
