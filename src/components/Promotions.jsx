import { promotions } from '../data/siteData';

export default function Promotions() {
  return (
    <section id="promotions" className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Ofertas Especiales</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Promociones</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Aprovecha nuestras promociones exclusivas y haz realidad tu próximo tatuaje a un precio especial.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {promotions.map((promo, i) => (
            <div key={i} className={`promo-card rounded-sm p-6 hover:-translate-y-2 transition-all duration-500 ${promo.highlight ? 'ring-1 ring-gold-500/30' : ''}`}>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{promo.icon}</span>
                <span className={`text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-semibold ${
                  promo.highlight
                    ? 'bg-gold-500/20 text-gold-400 badge-glow'
                    : 'bg-ink-600/50 text-ink-300'
                }`}>
                  {promo.badge}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-ink-100 mb-2">{promo.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed mb-5">{promo.description}</p>

              <a
                href="#booking"
                className={`inline-block w-full text-center py-3 text-sm font-bold tracking-wider uppercase rounded-sm transition-all duration-300 ${
                  promo.highlight
                    ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 hover:from-gold-500 hover:to-gold-300 shadow-lg shadow-gold-500/20'
                    : 'border border-gold-500/30 text-gold-400 hover:bg-gold-500/10'
                }`}
              >
                {promo.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="mt-10 text-center reveal">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-crimson-400 rounded-full animate-pulse" />
            <span className="text-xs text-ink-300 tracking-wider uppercase">
              Promociones por tiempo limitado · Cupos reducidos · Reserva antes de que se agoten
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
