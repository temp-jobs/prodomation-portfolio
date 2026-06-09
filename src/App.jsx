import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Technologies from './components/Technologies'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import Milestones from './components/Milestones'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Technologies />
        <Clients />
        <ContactForm />
        <Testimonials />
        <Milestones />
        <Portfolio />
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}
