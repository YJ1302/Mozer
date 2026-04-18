import { artistInfo } from '../data/siteData';

export default function SocialMedia() {
  return (
    <section className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/[0.04] via-pink-500/[0.03] to-cyan-400/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Síguenos</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Redes Sociales</h2>
          <p className="text-ink-300 max-w-xl mx-auto">
            Mira nuestro trabajo más reciente, videos del proceso, resultados curados y promociones exclusivas.
          </p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Social cards */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {/* TikTok Card */}
          <a
            href={artistInfo.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group promo-card rounded-sm p-8 hover:-translate-y-2 transition-all duration-500 block ring-1 ring-ink-600/30 hover:ring-pink-500/30"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 via-red-500/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.8a8.28 8.28 0 004.87 1.58V11a4.84 4.84 0 01-.71.05 4.8 4.8 0 01-2.58-.75V6.69h4z"/></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-bold text-ink-100 mb-1 group-hover:text-pink-400 transition-colors">TikTok</h3>
                <p className="text-sm text-ink-400 mb-3">@mozertattoo</p>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">
                  Mira videos del proceso de tatuaje, resultados curados, transformaciones de diseño y contenido exclusivo detrás de cámaras.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["#ProcesoTatuaje", "#Resultados", "#Transformaciones", "#BehindTheScenes"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-pink-500/10 text-pink-400/70 rounded-full tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 py-3 border-t border-ink-600/30 text-pink-400 text-sm font-semibold tracking-wider uppercase group-hover:text-pink-300">
              Seguir en TikTok
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={artistInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group promo-card rounded-sm p-8 hover:-translate-y-2 transition-all duration-500 block ring-1 ring-ink-600/30 hover:ring-purple-500/30"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-bold text-ink-100 mb-1 group-hover:text-purple-400 transition-colors">Instagram</h3>
                <p className="text-sm text-ink-400 mb-3">@mozer.ink</p>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">
                  Explora nuestra galería completa de trabajos terminados, stories del día a día y reels con los mejores momentos del estudio.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["#TattooBrooklyn", "#CustomTattoo", "#InkArt", "#TattooStudio"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-purple-500/10 text-purple-400/70 rounded-full tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 py-3 border-t border-ink-600/30 text-purple-400 text-sm font-semibold tracking-wider uppercase group-hover:text-purple-300">
              Seguir en Instagram
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>

        {/* Content ideas strip */}
        <div className="mt-10 reveal">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "📹 Videos del Proceso",
              "✨ Resultados Curados",
              "🎨 Diseños Exclusivos",
              "🔥 Promociones",
              "💬 Tips de Cuidado",
              "🏆 Trabajos Premiados",
            ].map((item, i) => (
              <span key={i} className="text-[11px] px-3 py-1.5 glass-card rounded-full text-ink-300 tracking-wider">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
