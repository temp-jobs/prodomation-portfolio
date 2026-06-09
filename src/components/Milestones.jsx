import { milestones } from '../data/siteData'

export default function Milestones() {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Milestones</h2>
        <p className="section-subtitle">
          Our journey of growth and excellence in delivering world-class software solutions.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((item) => (
            <div
              key={item.label}
              className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{item.value}</p>
              <p className="text-muted text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
            <span className="text-4xl">🏆</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
              ISO Certified For Quality &amp; Excellence
            </h3>
            <p className="text-muted leading-relaxed">
              Prodomation Technologies has successfully obtained ISO certification, demonstrating compliance with global
              quality standards and best practices. It strengthens our promise of consistent performance,
              customer satisfaction, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
