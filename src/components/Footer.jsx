import { artistInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-ink-900 relative overflow-hidden">
      {/* CTA Banner */}
      <div className="relative py-20 bg-gradient-to-r from-ink-800 via-ink-900 to-ink-800 border-b border-ink-800">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/[0.03] via-transparent to-gold-500/[0.03]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-5xl font-heading font-bold gold-gradient-text mb-4">
            ¿Listo Para Tu Próximo Tatuaje?
          </h2>
          <p className="text-ink-300 max-w-lg mx-auto mb-8">
            Tu próxima obra maestra comienza con una conversación. Creemos algo inolvidable juntos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5"
            >
              Reservar Sesión →
            </a>
            <a
              href={artistInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactar por WhatsApp
            </a>
            <a
              href={artistInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-pink-500/30 text-pink-400 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-pink-500/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.8a8.28 8.28 0 004.87 1.58V11a4.84 4.84 0 01-.71.05 4.8 4.8 0 01-2.58-.75V6.69h4z"/></svg>
              Seguir en TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-ink-800 pb-8 mb-8">
            {/* Logo area */}
            <div className="flex justify-center md:justify-start">
              <img src="/logo.png" alt="MOZER Logo" className="h-24 w-auto invert opacity-80 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(201,168,76,0.1)]" />
            </div>

            {/* Address area */}
            <div className="text-center">
              <p className="text-sm font-semibold text-ink-200 mb-1">{artistInfo.address}</p>
              <a href={artistInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-500 hover:text-gold-400 tracking-wider uppercase transition-colors">
                Ver en Google Maps →
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a href={artistInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center text-ink-300 hover:text-purple-400 hover:bg-purple-500/10 hover:ring-1 hover:ring-purple-500/30 transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={artistInfo.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center text-ink-300 hover:text-pink-400 hover:bg-pink-500/10 hover:ring-1 hover:ring-pink-500/30 transition-all duration-300" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.8a8.28 8.28 0 004.87 1.58V11a4.84 4.84 0 01-.71.05 4.8 4.8 0 01-2.58-.75V6.69h4z"/></svg>
              </a>
              <a href={artistInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center text-ink-300 hover:text-emerald-400 hover:bg-emerald-500/10 hover:ring-1 hover:ring-emerald-500/30 transition-all duration-300" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div className="text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink-500 tracking-wider">
              © {new Date().getFullYear()} {artistInfo.name} Tattoo Studio. Todos los derechos reservados.
            </p>
            <p className="text-xs text-ink-600">
              Hecho con <span className="text-crimson-500/80">♥</span> en Lima
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
