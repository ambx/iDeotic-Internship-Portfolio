import Head from 'next/head'
import Navbar from '../components/navbar/index'
import Hero from '../components/Hero/index'
import About from '../components/About/index'
import Work from '../components/Work'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div>
      <Head><title>Hiba Fathima</title></Head>
      <Navbar exp='active'/>
      <Hero />
      <About />
      <Work />
      <Clients />
      <Testimonials />
    </div>
  )
}