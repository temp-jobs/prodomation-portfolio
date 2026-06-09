import { aiTechnologies, techStack } from '../data/siteData'

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Technologies</h2>
        <p className="section-subtitle">
          We leverage the latest tools and frameworks to build scalable, high-performance solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🧠</span> AI &amp; Data Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold mb-6 text-dark flex items-center gap-2">
              <span className="text-2xl">⚡</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
