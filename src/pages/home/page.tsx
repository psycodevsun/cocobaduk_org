
import Navbar from '../../components/feature/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Instructor from './components/Instructor';
import OnlineAdvantages from './components/OnlineAdvantages';
import BrainDevelopment from './components/BrainDevelopment';
import LearningProcess from './components/LearningProcess';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import WhyOnline from './components/WhyOnline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Instructor />
      <OnlineAdvantages />
      <BrainDevelopment />
      <LearningProcess />
      <Curriculum />
      <Pricing />
      <CTA />
      <WhyOnline />
      <Testimonials />
      <Footer />
    </div>
  );
}
