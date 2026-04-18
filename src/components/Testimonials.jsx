import { testimonials } from '../data/siteData';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold-500' : 'text-ink-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Lo Que Dicen Nuestros Clientes</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-4 gold-gradient-text">Testimonios</h2>
          <p className="text-ink-300 max-w-xl mx-auto">No solo confíes en nuestra palabra — escucha a los clientes que confiaron en nosotros con su arte.</p>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((review, i) => (
            <div key={i} className="glass-card rounded-sm p-6 hover:border-gold-500/20 hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <StarRating rating={review.rating} />
              <p className="mt-4 text-ink-200 text-sm leading-relaxed flex-grow">"{review.text}"</p>
              <div className="mt-5 pt-4 border-t border-ink-600/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center">
                  <span className="text-gold-400 font-heading font-bold text-sm">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-100">{review.name}</p>
                  <p className="text-xs text-ink-400">{review.tattoo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 glass-card rounded-sm p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center reveal">
          <div>
            <div className="text-2xl font-heading font-bold gold-gradient-text">4.9★</div>
            <div className="text-xs text-ink-400 tracking-wider uppercase mt-1">Google Reviews</div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-ink-600/50" />
          <div>
            <div className="text-2xl font-heading font-bold gold-gradient-text">5.0★</div>
            <div className="text-xs text-ink-400 tracking-wider uppercase mt-1">Instagram</div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-ink-600/50" />
          <div>
            <div className="text-2xl font-heading font-bold gold-gradient-text">3,000+</div>
            <div className="text-xs text-ink-400 tracking-wider uppercase mt-1">Clientes Satisfechos</div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-ink-600/50" />
          <div>
            <div className="text-2xl font-heading font-bold gold-gradient-text">100%</div>
            <div className="text-xs text-ink-400 tracking-wider uppercase mt-1">Satisfacción Garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
}
