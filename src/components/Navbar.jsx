import { useState, useEffect } from 'react';
import { artistInfo } from '../data/siteData';

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Artista", href: "#about" },
  { label: "Estilos", href: "#styles" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Reservas", href: "#booking" },
  { label: "Reseñas", href: "#reviews" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-900/95 backdrop-blur-xl shadow-lg shadow-black/30 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo + Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="MOZER Tattoo Studio"
            className="h-10 md:h-12 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-ink-200 hover:text-gold-400 transition-colors duration-300 tracking-wider uppercase font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 text-sm font-bold tracking-wider uppercase rounded hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            Reservar Cita
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ink-900/98 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-5 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-gold-400 text-3xl hover:rotate-90 transition-transform duration-300"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        {/* Logo in mobile menu */}
        <img src="/logo.png" alt="MOZER" className="h-20 w-auto invert opacity-80 mb-4" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-xl text-ink-100 hover:text-gold-400 transition-colors duration-300 tracking-[0.3em] uppercase font-heading"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 font-bold tracking-wider uppercase rounded text-lg shadow-lg shadow-gold-500/20"
        >
          Reservar Cita
        </a>
      </div>
    </nav>
  );
}
