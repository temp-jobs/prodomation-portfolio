import { services } from '../data/siteData'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive IT solutions tailored to drive your business forward with cutting-edge technology.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">{service.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
