import { artistInfo } from '../data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold-500/[0.04] rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-crimson-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-bold brand-mozer-hero inline-block relative -ml-4 md:-ml-8 select-none">
            {artistInfo.name}
          </h1>
        </div>

        {/* Decorative line */}
        <div className="brand-line-thick w-56 mx-auto mb-5" />

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-ink-200/90 font-heading italic tracking-wide mb-3">
          {artistInfo.tagline}
        </p>

        <p className="text-xs sm:text-sm text-ink-400 tracking-[0.2em] uppercase max-w-lg mx-auto mb-3">
          {artistInfo.subtitle}
        </p>

        {/* Location badge */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold-500/40" />
          <span className="text-gold-500/70 text-[10px] tracking-[0.4em] uppercase font-medium flex items-center gap-1.5">
            📍 Lince, Lima · Perú
          </span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold-500/40" />
        </div>

        {/* CTA Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#booking"
            className="group px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            Reservar Cita
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-gold-500/30 text-gold-400 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            Ver Portafolio
          </a>
          <a
            href={artistInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* TikTok CTA */}
        <a
          href={artistInfo.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-ink-400 hover:text-ink-200 text-xs tracking-wider uppercase transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V12.8a8.28 8.28 0 004.87 1.58V11a4.84 4.84 0 01-.71.05 4.8 4.8 0 01-2.58-.75V6.69h4z"/></svg>
          Síguenos en TikTok · @mozertattoo
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink-400">Explorar</span>
          <svg className="w-4 h-4 text-gold-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}
