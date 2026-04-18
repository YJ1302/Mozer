import { featuredCampaigns } from '../data/siteData';

export default function FeaturedCampaigns() {
  return (
    <section className="py-24 md:py-32 bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Novedades</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Diseños Destacados</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Descubre nuestros diseños exclusivos de la temporada. Piezas únicas que no encontrarás en otro lugar.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {featuredCampaigns.map((campaign, i) => (
            <div key={i} className="group glass-card rounded-sm overflow-hidden hover:border-gold-500/20 hover:-translate-y-1 transition-all duration-500 flex flex-col">
              {/* Image area */}
              <div
                className="aspect-[16/10] w-full relative overflow-hidden bg-ink-900"
              >
                <img 
                  src={campaign.image} 
                  alt={campaign.subtitle} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent opacity-80" />
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, rgba(201,168,76,0.6) 0%, transparent 60%)`
                }} />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm bg-ink-900/80 border border-gold-500/30 text-gold-400 font-semibold backdrop-blur-sm badge-glow">
                    {campaign.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gold-500/80 tracking-wider uppercase">{campaign.title}</span>
                  <h3 className="text-xl font-heading font-bold text-ink-100 group-hover:text-gold-400 transition-colors mt-1 mb-3">{campaign.subtitle}</h3>
                  <p className="text-sm text-ink-300 leading-relaxed drop-shadow-sm">{campaign.description}</p>
                </div>
                <div className="flex items-center justify-between pt-5 mt-4 border-t border-ink-700/50">
                  <span className="text-gold-500 font-bold text-sm bg-gold-500/10 px-3 py-1 rounded-sm">{campaign.price}</span>
                  <a href="#booking" className="text-xs text-gold-400 tracking-wider uppercase hover:text-gold-300 transition-colors font-semibold group/btn flex items-center gap-1">
                    Reservar 
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
