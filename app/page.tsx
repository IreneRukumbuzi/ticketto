import Agency from '@/components/Agency';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Vision from '@/components/Vision';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Agency />
      <Services />
      <Work />
      <Footer />
    </>
  )
}
