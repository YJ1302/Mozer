import { tattooStyles } from '../data/siteData';

export default function Styles() {
  return (
    <section id="styles" className="py-24 md:py-32 bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Estilos de Tatuaje</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Desde blackwork audaz hasta líneas finas delicadas, dominamos cada estilo para dar vida a tu visión.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {tattooStyles.map((style) => (
            <div
              key={style.id}
              className="group glass-card rounded-sm overflow-hidden hover:bg-ink-700/50 hover:border-gold-500/20 transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-1"
            >
              {/* Thumbnail banner area */}
              <div className="h-32 w-full overflow-hidden relative border-b border-ink-700/50 bg-ink-900">
                <img 
                  src={style.image} 
                  alt={`Estilo de tatuaje ${style.name}`} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-6 text-2xl text-gold-500 group-hover:scale-110 group-hover:text-gold-400 transition-all duration-300 drop-shadow-md">
                  {style.icon}
                </div>
              </div>
              
              {/* Text content */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-heading font-bold text-ink-100 mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {style.name}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed group-hover:text-ink-300 transition-colors duration-300 mt-1">
                  {style.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-gold-500 to-transparent transition-all duration-500 absolute bottom-0 left-0" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-ink-300 mb-4">¿No ves tu estilo? Nos encantan los desafíos.</p>
          <a
            href="#custom"
            className="inline-block px-6 py-3 border border-gold-500/30 text-gold-400 text-sm tracking-wider uppercase hover:bg-gold-500/10 transition-all duration-300 rounded-sm font-semibold shadow-lg shadow-gold-500/5"
          >
            Solicitar Diseño Personalizado →
          </a>
        </div>
      </div>
    </section>
  );
}
