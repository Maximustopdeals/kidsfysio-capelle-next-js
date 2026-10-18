import Link from "next/link";
import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-cream/80 font-open-sans mt-auto overflow-hidden">
      
      {/* pb-28 zorgt voor ruimte onderaan voor de WhatsApp-knop */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-28 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Kolom 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit bg-cream p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/Logo-voor-footer.webp" 
                alt="Kids Fysio Capelle" 
                width={160} 
                height={70} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="space-y-3 text-sm text-cream/70 mt-2">
              <p>KVK: 87211445</p>
              <p className="leading-relaxed">Alle kinderfysiotherapeuten in deze praktijk zijn <strong className="text-cream font-semibold">BIG-geregistreerd</strong>.</p>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a href="https://www.instagram.com/kidsfysiocapelle/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-cream/20 bg-cream/5 text-cream font-nunito font-bold text-sm transition-all hover:bg-cream/10 hover:border-cream/40">
                <span className="text-sage group-hover:scale-110 transition-transform"><InstagramIcon /></span> Instagram
              </a>
              <a href="https://wa.me/31682013490" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-cream/20 bg-cream/5 text-cream font-nunito font-bold text-sm transition-all hover:bg-cream/10 hover:border-cream/40">
                <span className="text-sage group-hover:scale-110 transition-transform"><WhatsAppIcon /></span> WhatsApp
              </a>
            </div>
          </div>

          {/* Kolom 2: Handige Links */}
          <div>
            <h4 className="font-serif text-xl font-light text-cream mb-6">Handige links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Over ons", href: "/over-ons" },
                { name: "Samenwerkingen", href: "/samenwerkingen" },
                { name: "Behandelingen", href: "/behandelingen" },
                { name: "Specialisaties", href: "/specialisaties" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-sage group">
                    <span className="w-1 h-1 rounded-full bg-sage/50 group-hover:bg-sage transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Informatie */}
          <div>
            <h4 className="font-serif text-xl font-light text-cream mb-6">Informatie</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/images/Klachtenregeling-Kids-Fysio-Capelle.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-sage group">
                  <span className="w-1 h-1 rounded-full bg-sage/50 group-hover:bg-sage transition-colors" />
                  Klachtenregeling
                </a>
              </li>
              <li>
                <a href="/images/Huisregels.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-sage group">
                  <span className="w-1 h-1 rounded-full bg-sage/50 group-hover:bg-sage transition-colors" />
                  Huisregels
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contactgegevens */}
          <div>
            <h4 className="font-serif text-xl font-light text-cream mb-6">Bedrijfsgegevens</h4>
            <address className="not-italic space-y-4 text-sm text-cream/70">
              <div>
                <strong className="block text-cream font-semibold mb-1">Kids Fysio Capelle</strong>
                De Linie 1D, 2905 AX<br />Capelle aan den IJssel
              </div>
              <div className="space-y-1">
                <a href="tel:0103032575" className="block transition-colors hover:text-sage"><span className="text-sage/50 mr-2">T:</span> 010 303 2575</a>
                <a href="mailto:info@kidsfysiocapelle.nl" className="block transition-colors hover:text-sage"><span className="text-sage/50 mr-2">E:</span> info@kidsfysiocapelle.nl</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Balk */}
      <div className="border-t border-cream/10 bg-black/10">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Kids Fysio Capelle. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-6">
            <a href="/images/Privacyverklaring-KidsFysioCapelle.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">
              Privacyverklaring
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
