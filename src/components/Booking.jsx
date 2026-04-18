import { useState } from 'react';
import { budgetRanges, bodySections, artistInfo } from '../data/siteData';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', idea: '',
    date: '', placement: '', size: '', budget: '', message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClasses = "w-full bg-ink-800/80 border border-ink-600/50 rounded-sm px-4 py-3 text-ink-100 text-sm placeholder-ink-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300";

  return (
    <section id="booking" className="py-24 md:py-32 bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Agenda Tu Cita</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Reservar Sesión</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Comparte tu visión con nosotros. Completa el formulario y te contactaremos en menos de 24 horas para programar tu consulta.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 reveal">
            {submitted ? (
              <div className="glass-card rounded-sm p-10 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-heading font-bold text-gold-400 mb-3">¡Solicitud Recibida!</h3>
                <p className="text-ink-300 mb-2">Gracias por contactarnos. Revisaremos tu idea de tatuaje y te responderemos en menos de 24 horas.</p>
                <p className="text-ink-400 text-sm">Revisa tu correo para una confirmación.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-sm p-6 md:p-8 space-y-5">
                <p className="text-ink-400 text-xs tracking-wider uppercase mb-2">
                  ⓘ Este es un formulario de solicitud de consulta — no una confirmación de reserva definitiva.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Nombre Completo *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre completo" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Teléfono *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Correo Electrónico *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="tu@correo.com" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Fecha Preferida</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Idea del Tatuaje *</label>
                  <textarea name="idea" required rows={3} value={form.idea} onChange={handleChange} placeholder="Describe tu idea de tatuaje en detalle..." className={inputClasses + " resize-none"} />
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Ubicación en el Cuerpo</label>
                    <select name="placement" value={form.placement} onChange={handleChange} className={inputClasses}>
                      <option value="">Seleccionar zona</option>
                      {bodySections.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Tamaño Estimado</label>
                    <select name="size" value={form.size} onChange={handleChange} className={inputClasses}>
                      <option value="">Seleccionar tamaño</option>
                      <option value="tiny">Diminuto (&lt; 5cm)</option>
                      <option value="small">Pequeño (5–10cm)</option>
                      <option value="medium">Mediano (10–15cm)</option>
                      <option value="large">Grande (15–25cm)</option>
                      <option value="xlarge">Extra Grande (25cm+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Rango de Presupuesto</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className={inputClasses}>
                      <option value="">Seleccionar presupuesto</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-ink-300 tracking-wider uppercase mb-2">Mensaje Adicional</label>
                  <textarea name="message" rows={2} value={form.message} onChange={handleChange} placeholder="Otros detalles, preguntas o solicitudes especiales..." className={inputClasses + " resize-none"} />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-ink-900 font-bold text-sm tracking-[0.2em] uppercase rounded-sm hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40">
                  Enviar Solicitud de Reserva →
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 reveal">
            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Disponibilidad
              </h3>
              <div className="space-y-2">
                {artistInfo.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-ink-300">{h.day}</span>
                    <span className={h.time === "Cerrado" ? "text-crimson-400" : "text-ink-200"}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gold-500/5 rounded-sm border border-gold-500/10">
                <p className="text-xs text-ink-400">⏰ Las próximas citas disponibles suelen ser en 2-3 semanas. Se recomienda reservar con anticipación.</p>
              </div>
            </div>

            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">Contacto Rápido</h3>
              <div className="space-y-3">
                <a href={artistInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  <span>💬</span> Escríbenos por WhatsApp
                </a>
                <a href={`tel:${artistInfo.phone}`} className="flex items-center gap-3 text-sm text-ink-200 hover:text-gold-400 transition-colors">
                  <span>📞</span> {artistInfo.phone}
                </a>
                <a href={`mailto:${artistInfo.email}`} className="flex items-center gap-3 text-sm text-ink-200 hover:text-gold-400 transition-colors">
                  <span>✉️</span> {artistInfo.email}
                </a>
              </div>
            </div>

            <div className="glass-card rounded-sm p-6">
              <h3 className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">Qué Esperar</h3>
              <ol className="space-y-3 text-sm text-ink-300">
                {["Envía tu solicitud", "Consulta gratuita", "Diseño personalizado", "Aprueba y agenda sesión", "¡Hazte tu tatuaje!"].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xs font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
