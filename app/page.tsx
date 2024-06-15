import Agency from '@/app/pages/homepage/Agency';
import Footer from '@/components/common/Footer';
import Hero from '@/app/pages/homepage/Hero';
import Navbar from '@/components/common/Navbar';
import Services from '@/app/pages/homepage/Services';
import Vision from '@/app/pages/homepage/Vision';
import Work from '@/app/pages/homepage/Work';

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
