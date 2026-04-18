import { useState } from 'react';
import { tattooStyles, bodySections } from '../data/siteData';

export default function CustomRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClasses = "w-full bg-ink-800/80 border border-ink-600/50 rounded-sm px-4 py-3 text-ink-100 text-sm placeholder-ink-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300";

  return (
    <section id="custom" className="py-24 md:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Tu Visión, Nuestro Arte</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Diseño Personalizado</h2>
          <p className="text-ink-300 max-w-xl mx-auto">
            ¿Tienes una idea única? Nos especializamos en transformar tus conceptos en diseños de tatuaje únicos.
            Comparte tu inspiración y dejemos que creemos algo extraordinario solo para ti.
          </p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Process steps */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 reveal">
          {[
            { icon: "💡", title: "Comparte Tu Idea", desc: "Cuéntanos sobre tu visión, preferencias de estilo e imágenes de referencia." },
            { icon: "✏️", title: "Nosotros Diseñamos", desc: "Nuestro artista crea un diseño personalizado adaptado a tu cuerpo y estilo." },
            { icon: "🎨", title: "Refinar y Tatuar", desc: "Revisa, da retroalimentación, finaliza — y lo traemos a la vida." },
          ].map((step, i) => (
            <div key={i} className="glass-card rounded-sm p-6 text-center hover:border-gold-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="text-gold-400 font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-ink-400">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="reveal">
          {submitted ? (
            <div className="glass-card rounded-sm p-10 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-heading font-bold text-gold-400 mb-3">¡Solicitud de Diseño Enviada!</h3>
              <p className="text-ink-300">Revisaremos tu idea y te contactaremos para discutir el proceso de diseño. ¡Cosas emocionantes por venir!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-sm p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Tu Nombre *</label>
                  <input type="text" required placeholder="Tu nombre" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Correo Electrónico *</label>
                  <input type="email" required placeholder="tu@correo.com" className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Descripción de la Idea *</label>
                <textarea required rows={4} placeholder="Describe tu concepto de tatuaje en detalle. Incluye temas, símbolos, estado de ánimo y cualquier elemento específico que desees..." className={inputClasses + " resize-none"} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Estilo Preferido</label>
                  <select className={inputClasses}>
                    <option value="">Elige un estilo</option>
                    {tattooStyles.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Ubicación</label>
                  <select className={inputClasses}>
                    <option value="">Seleccionar zona</option>
                    {bodySections.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Imágenes de Referencia / Inspiración</label>
                <div className="border-2 border-dashed border-ink-600/50 rounded-sm p-8 text-center hover:border-gold-500/30 transition-colors cursor-pointer">
                  <div className="text-3xl text-ink-500 mb-2">📷</div>
                  <p className="text-sm text-ink-400">Arrastra y suelta imágenes aquí o haz clic para buscar</p>
                  <p className="text-xs text-ink-500 mt-1">PNG, JPG hasta 10MB cada una</p>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20">
                Enviar Solicitud de Diseño →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
