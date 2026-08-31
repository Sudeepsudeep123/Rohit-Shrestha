import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Credentials from '@/components/Credentials';
import Programs from '@/components/Programs';
import WhyTrain from '@/components/WhyTrain';
import Philosophy from '@/components/Philosophy';
import Results from '@/components/Results';
import TrainingProcess from '@/components/TrainingProcess';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Programs />
        <WhyTrain />
        <Philosophy />
        <Results />
        <TrainingProcess />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
