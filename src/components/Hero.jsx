export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-dark via-primary-dark to-primary text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Software Development Company
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Bridging the Gap Between{' '}
              <span className="text-accent">Business</span> and Technology
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              We craft innovative products and provide IT software solutions for businesses of any size.
              Ranked among the top software development companies in Bangalore, India.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Contact Us Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {['AI & ML', 'Web Dev', 'Mobile Apps', 'Cloud'].map((item) => (
                    <div
                      key={item}
                      className="bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="text-2xl mb-2">
                        {item === 'AI & ML' && '🤖'}
                        {item === 'Web Dev' && '🌐'}
                        {item === 'Mobile Apps' && '📱'}
                        {item === 'Cloud' && '☁️'}
                      </div>
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-xl font-bold shadow-xl">
                6+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
