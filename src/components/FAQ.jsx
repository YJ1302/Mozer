import { useState } from 'react';
import { faqData } from '../data/siteData';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="glass-card rounded-sm overflow-hidden hover:border-gold-500/20 transition-all duration-300">
      <button onClick={onToggle} className="w-full p-5 text-left flex items-center justify-between gap-4">
        <span className="text-ink-100 font-medium">{item.question}</span>
        <span className={`text-gold-500 text-xl transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-5 pt-0">
          <div className="h-[1px] bg-ink-600/30 mb-4" />
          <p className="text-sm text-ink-300 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">¿Tienes Dudas?</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Preguntas Frecuentes</h2>
          <p className="text-ink-300 max-w-xl mx-auto">Todo lo que necesitas saber antes de hacerte un tatuaje.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="space-y-3 stagger-children">
          {faqData.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-ink-400 text-sm mb-3">¿Aún tienes preguntas?</p>
          <a href="#contact" className="inline-block px-6 py-3 border border-gold-500/30 text-gold-400 text-sm tracking-wider uppercase hover:bg-gold-500/10 transition-all duration-300 rounded-sm">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
