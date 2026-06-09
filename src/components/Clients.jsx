import { clients } from '../data/siteData'

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">
          Trusted by leading organizations across the globe to deliver exceptional results.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-white rounded-xl p-8 flex items-center justify-center border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{client.charAt(0)}</span>
                </div>
                <p className="font-semibold text-dark text-sm">{client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
