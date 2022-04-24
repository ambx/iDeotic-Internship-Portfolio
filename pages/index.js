import Head from 'next/head'
import Navbar from '../components/Navbar/index.js'
import Hero from '../components/Hero/index'
import About from '../components/About/index'
import Work from '../components/Work'
import USP from '../components/USP/index.js'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head><title>Hiba Fathima</title></Head>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <USP />
      <Clients />
      <Testimonials />
      <Contact />
    </div>
  )
}