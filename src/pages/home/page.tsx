import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import FloatingCallButton from '@/components/FloatingCallButton';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Consultation from './components/Consultation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Section01/>
      <Section02/>
      <Section03/>
      <OnlineAdvantages />
      <BrainDevelopment />
      <LearningProcess />
      <Curriculum />
      <Instructor />
      <Reviews />
      <CTA />
      <WhyOnline />
      <Consultation/>
      {/* <Features /> */}
      <Testimonials />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
