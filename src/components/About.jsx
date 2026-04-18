import { aboutData, trustIndicators } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Conócenos</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Sobre el Artista</h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Artist Image */}
          <div className="reveal">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-ink-900 border border-ink-700/50 relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="Artista trabajando en el estudio" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent mix-blend-overlay" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-4 py-2 bg-ink-900/80 backdrop-blur-md border border-gold-500/30 rounded-sm">
                    <span className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold">Tatuajes Premium</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 rounded-sm -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              <div className="absolute -top-4 -left-4 w-full h-full border border-ink-600/30 rounded-sm -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "6+", label: "Años" },
                { value: "3K+", label: "Tatuajes" },
                { value: "100%", label: "Personalizado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card rounded-sm p-4 relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="text-2xl font-heading font-bold gold-gradient-text">{stat.value}</div>
                  <div className="text-xs text-ink-300 tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="reveal space-y-6">
            <p className="text-lg text-ink-200 leading-relaxed relative">
              <span className="absolute -left-4 -top-3 text-4xl text-gold-500/20 font-heading">"</span>
              {aboutData.bio}
            </p>

            <div className="space-y-4 pt-2">
              <div className="glass-card rounded-sm p-5 hover:border-gold-500/20 transition-colors duration-300">
                <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-2">Experiencia</h3>
                <p className="text-ink-200">{aboutData.experience}</p>
              </div>
              <div className="glass-card rounded-sm p-5 hover:border-gold-500/20 transition-colors duration-300">
                <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-2">Especialización</h3>
                <p className="text-ink-200">{aboutData.specialization}</p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">¿Por Qué Elegir a Mozer?</h3>
              <ul className="space-y-3">
                {aboutData.whyChoose.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-200">
                    <span className="text-gold-500 mt-0.5 text-lg leading-none">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-sm p-5 border-l-2 border-gold-500/50 mt-4 relative overflow-hidden">
              <div className="absolute right-0 top-0 text-6xl opacity-5 -translate-y-4 translate-x-2">🛡️</div>
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-2 flex items-center gap-2">
                <span>🛡️</span> Higiene y Seguridad
              </h3>
              <p className="text-ink-300 text-sm leading-relaxed relative z-10">{aboutData.hygiene}</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-24 border-t border-ink-800 pt-16">
          <h3 className="text-center text-gold-500 text-xs tracking-[0.4em] uppercase font-medium mb-10 reveal">Razones para Confiar</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {trustIndicators.map((item, i) => (
              <div key={i} className="glass-card rounded-sm p-5 text-center hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xs font-semibold text-gold-400 tracking-wider uppercase mb-2">{item.title}</h4>
                <p className="text-[11px] text-ink-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
