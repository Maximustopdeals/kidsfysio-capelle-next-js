import Link from "next/link";
import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a4a3d] text-white font-open-sans mt-auto relative">
      
      {/* pb-32 zorgt voor genoeg ruimte onderaan voor de FloatingButtons */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-32 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Kolom 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image 
                src="/images/Logo-voor-footer.webp" 
                alt="Kids Fysio Capelle" 
                width={180} 
                height={80} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <div className="space-y-3 text-sm text-white/80 mt-2">
              <p className="font-semibold">KVK: 87211445</p>
              <p className="leading-relaxed">Alle kinderfysiotherapeuten in deze praktijk zijn BIG-geregistreerd.</p>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a href="https://www.instagram.com/kidsfysiocapelle/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-nunito font-bold text-sm transition-all hover:bg-white/15 hover:-translate-y-0.5">
                <span className="text-[#b5dfcb]"><InstagramIcon /></span> Instagram
              </a>
            </div>
          </div>

          {/* Kolom 2: Handige Links */}
          <div>
            <h4 className="text-[#b5dfcb] text-lg font-bold mb-4 relative inline-block">
              Handige links
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#b5dfcb]"></span>
            </h4>
            <ul className="space-y-2 mt-6 text-sm">
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
                  <Link href={link.href} className="inline-flex items-center text-white/90 transition-all hover:text-[#b5dfcb] hover:pl-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Informatie */}
          <div>
            <h4 className="text-[#b5dfcb] text-lg font-bold mb-4 relative inline-block">
              Informatie
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#b5dfcb]"></span>
            </h4>
            <ul className="space-y-2 mt-6 text-sm">
              <li>
                <a href="/images/Klachtenregeling-Kids-Fysio-Capelle.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/90 transition-all hover:text-[#b5dfcb] hover:pl-1">
                  Klachtenregeling
                </a>
              </li>
              <li>
                <a href="/images/Huisregels.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/90 transition-all hover:text-[#b5dfcb] hover:pl-1">
                  Huisregels
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contactgegevens */}
          <div>
            <h4 className="text-[#b5dfcb] text-lg font-bold mb-4 relative inline-block">
              Bedrijfsgegevens
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#b5dfcb]"></span>
            </h4>
            <div className="space-y-3 mt-6 text-sm text-white/90">
              <p className="font-bold text-[#b5dfcb]">Kids Fysio Capelle</p>
              <p>De Linie 1D, 2905 AX<br />Capelle aan den IJssel</p>
              <p>
                <a href="tel:0103032575" className="transition-colors hover:text-[#b5dfcb]">010 303 2575</a>
              </p>
              <p>
                <a href="mailto:info@kidsfysiocapelle.nl" className="transition-colors hover:text-[#b5dfcb]">info@kidsfysiocapelle.nl</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Balk */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#b5dfcb]/30 bg-[#2a4a3d]/95 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80">
          
          {/* Links leeg, Midden Copyright, Rechts Webboostpartner */}
          <div className="hidden md:block md:w-1/4"></div>
          
          <p className="text-center md:w-1/2 flex flex-wrap justify-center gap-x-1">
            <span>© {new Date().getFullYear()} Kids Fysio Capelle - Alle rechten voorbehouden |</span>
            <a href="/images/Privacyverklaring-KidsFysioCapelle.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-[#b5dfcb] hover:text-white transition-colors underline decoration-[#b5dfcb]/50 underline-offset-2">
              Privacy verklaring
            </a>
          </p>

          <p className="text-center md:text-right md:w-1/4 font-medium whitespace-nowrap">
            Webdesign door{" "}
            <a 
              href="https://www.webboostpartner.nl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#b5dfcb] hover:text-white transition-colors underline decoration-[#b5dfcb]/50 underline-offset-2"
            >
              Webboostpartner
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
