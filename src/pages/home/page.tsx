
import Navbar from '../../components/feature/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Instructor from './components/Instructor';
import OnlineAdvantages from './components/OnlineAdvantages';
import BrainDevelopment from './components/BrainDevelopment';
import LearningProcess from './components/LearningProcess';
import Curriculum from './components/Curriculum';
import CTA from './components/CTA';
import WhyOnline from './components/WhyOnline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Instructor />
      <Features />
      <OnlineAdvantages />
      <BrainDevelopment />
      <LearningProcess />
      <Curriculum />
      <Reviews />
      <CTA />
      <WhyOnline />
      <Testimonials />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
