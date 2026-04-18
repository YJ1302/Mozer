import { artistInfo } from '../data/siteData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Ubicación</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Estudio y Contacto</h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 reveal">
            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">📍 ¿Cómo Llegar?</h3>
              <p className="text-ink-200 font-semibold mb-2">{artistInfo.address}</p>
              <p className="text-emerald-400 text-sm italic">✓ Estudio privado ubicado en una zona céntrica y segura de Lince, Lima.</p>
            </div>

            <div className="glass-card rounded-sm p-6 space-y-4">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-2">Contacto</h3>
              <a href={`tel:${artistInfo.phone}`} className="flex items-center gap-3 text-ink-200 hover:text-gold-400 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-sm">📞</span>
                {artistInfo.phone}
              </a>
              <a href={`mailto:${artistInfo.email}`} className="flex items-center gap-3 text-ink-200 hover:text-gold-400 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-sm">✉️</span>
                {artistInfo.email}
              </a>
            </div>

            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">Síguenos</h3>
              <div className="flex flex-wrap gap-3">
                <a href={artistInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/20 rounded-sm text-sm text-ink-200 hover:text-white hover:border-purple-400/40 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
                <a href={artistInfo.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-ink-700/50 border border-ink-600/50 rounded-sm text-sm text-ink-200 hover:text-white hover:border-ink-400/40 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.8a8.28 8.28 0 004.87 1.58V11a4.84 4.84 0 01-.71.05 4.8 4.8 0 01-2.58-.75V6.69h4z"/></svg>
                  TikTok
                </a>
                <a href={artistInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600/20 border border-emerald-500/20 rounded-sm text-sm text-ink-200 hover:text-white hover:border-emerald-400/40 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">🕐 Horario de Atención</h3>
              <div className="space-y-2">
                {artistInfo.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-ink-300">{h.day}</span>
                    <span className={h.time === "Cerrado" ? "text-crimson-400 font-medium" : "text-ink-200"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="reveal flex flex-col h-full">
            <div className="glass-card rounded-sm overflow-hidden border border-ink-700/50 flex flex-col flex-1">
              <a 
                href={artistInfo.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-[4/3] md:aspect-auto md:flex-1 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-800 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-lg">📍</div>
                    <p className="text-gold-500 font-heading font-semibold text-lg mb-1">Ver en Google Maps</p>
                    <p className="text-ink-300 text-sm max-w-xs mx-auto">Haz clic para abrir la dirección exacta en el mapa</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
                  backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                {/* Decorative UI elements for the map placeholder */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="px-3 py-1.5 bg-ink-900/80 backdrop-blur border border-ink-600 rounded-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-ink-200 font-medium uppercase tracking-wider">Estudio MOZER</span>
                  </div>
                </div>
              </a>
              <div className="p-5 border-t border-ink-700/50 bg-ink-800/80">
                <p className="text-ink-200 text-sm flex items-start gap-3">
                  <span className="text-gold-500 mt-0.5">✦</span>
                  <span className="leading-relaxed">Estamos ubicados en Av. Arequipa 2039, Lince. A un paso de San Isidro y con fácil acceso desde todo Lima.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
