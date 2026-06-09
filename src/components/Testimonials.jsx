import { useState } from 'react'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-dark to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-blue-200 text-center max-w-2xl mx-auto mb-12">
          Hear what our clients say about working with us.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center">
            <svg className="w-10 h-10 text-accent mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-blue-50">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div>
              <h4 className="font-bold text-lg">{testimonials[active].name}</h4>
              <p className="text-accent text-sm">{testimonials[active].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === active ? 'bg-accent' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all ${
                i === active
                  ? 'bg-white/15 border-accent'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <h4 className="font-semibold text-sm">{t.name}</h4>
              <p className="text-blue-300 text-xs">{t.role}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
