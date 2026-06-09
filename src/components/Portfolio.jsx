import { portfolioItems } from '../data/siteData'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our successful projects across various industries and technologies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1.5">{item.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
