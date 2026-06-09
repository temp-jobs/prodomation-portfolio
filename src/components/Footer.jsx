import { contactInfo, navLinks, socialLinks } from '../data/siteData'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Prodomation Technologies logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">
                Prodomation<span className="text-primary ml-2">Technologies</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting innovative products and providing IT software solutions for businesses of any size.
              Top software development company in Bangalore, India.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>Website Development</li>
              <li>UI / UX Designing</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {contactInfo.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>Banglore,Lucknow, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Prodomation Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                {social.name === 'LinkedIn' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.name === 'Instagram' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C8.74 0 8.333.018 7.053.075 2.695.272.273 2.69.075 7.052.018 8.333 0 8.74 0 12s.018 3.667.075 4.948c.2 4.361 2.62 6.78 6.98 6.98 1.28.057 1.688.075 4.948.075s3.668-.018 4.948-.075c4.358-.2 6.78-2.62 6.98-6.98.057-1.28.075-1.689.075-4.948 0-3.263-.017-3.67-.075-4.95-.2-4.362-2.617-6.78-6.98-6.98C15.668.017 15.26 0 12 0zm0 5.838c3.403 0 6.162 2.759 6.162 6.162s-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163 2.759-6.162 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
