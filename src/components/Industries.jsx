import { industries } from '../data/siteData'

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Industries</h2>
        <p className="section-subtitle">
          We serve diverse sectors with specialized solutions designed for each industry&apos;s unique challenges.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="font-semibold text-dark text-sm">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
