import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileActionBar } from '@/components/layout/MobileActionBar'
import { Hero } from '@/components/sections/Hero'
import { WhyUs } from '@/components/sections/WhyUs'
import { Departments } from '@/components/sections/Departments'
import { Offers } from '@/components/sections/Offers'
import { CtaBand } from '@/components/sections/CtaBand'

export function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido principal</a>
      <Header />
      <main id="contenido">
        <Hero />
        <WhyUs />
        <Departments />
        <Offers />
        <CtaBand />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
