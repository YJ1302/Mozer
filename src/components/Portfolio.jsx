import { useState } from 'react';
import { portfolioItems, tattooStyles } from '../data/siteData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filters = [
    { id: 'all', label: 'Todos' },
    ...tattooStyles.map((s) => ({ id: s.id, label: s.name })),
  ];

  const filtered = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.style === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Nuestro Trabajo</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Portafolio</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Cada pieza cuenta una historia. Explora nuestra colección de tatuajes personalizados.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs tracking-wider uppercase rounded-sm transition-all duration-300 border ${
                activeFilter === f.id
                  ? 'bg-gold-500 text-ink-900 border-gold-500 font-bold shadow-lg shadow-gold-500/20'
                  : 'border-ink-500/50 text-ink-300 hover:border-gold-500/30 hover:text-gold-400'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div key={item.id} onClick={() => setLightbox(item)} className="group cursor-pointer reveal">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-ink-800 border border-ink-700/50 hover:border-gold-500/30 transition-all duration-500">
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110 bg-ink-800"
                >
                  <img 
                    src={item.image} 
                    alt={`Tatuaje de ${item.title}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(201,168,76,0.5) 0%, transparent 60%)`
                  }} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <span className="text-gold-400 text-xs tracking-wider uppercase mb-1">{item.style}</span>
                  <h3 className="text-lg font-heading font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-300">{item.placement} · {item.size}</p>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-ink-900/80 backdrop-blur-sm rounded-sm">
                  <span className="text-[10px] text-gold-400 tracking-wider uppercase">{item.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ink-400">Aún no hay piezas en esta categoría. ¡Vuelve pronto!</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full glass-card rounded-sm overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="md:h-[60vh] h-[40vh] w-full bg-ink-950 relative">
              <img 
                src={lightbox.image} 
                alt={`Detalle de tatuaje ${lightbox.title}`} 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="p-6 space-y-3 bg-ink-900">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading font-bold text-ink-100">{lightbox.title}</h3>
                <button onClick={() => setLightbox(null)} className="text-ink-400 hover:text-gold-400 transition-colors text-xl font-bold">✕</button>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gold-500/10 text-gold-400 rounded-sm tracking-wider uppercase">{lightbox.style}</span>
                <span className="px-2 py-1 bg-ink-800 text-ink-300 rounded-sm border border-ink-700/50">{lightbox.placement}</span>
                <span className="px-2 py-1 bg-ink-800 text-ink-300 rounded-sm border border-ink-700/50">{lightbox.size}</span>
              </div>
              <p className="text-ink-300 text-sm leading-relaxed pt-2">{lightbox.description}</p>
              <a href="#booking" onClick={() => setLightbox(null)} className="inline-block mt-3 px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 text-sm font-bold tracking-wider uppercase rounded-sm hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20">
                Solicitar Tatuaje Similar →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
