import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import About from './components/About';
import Styles from './components/Styles';
import FeaturedCampaigns from './components/FeaturedCampaigns';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import CustomRequest from './components/CustomRequest';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import ShareReferral from './components/ShareReferral';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-900 text-ink-100 overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Gold divider */}
      <div className="gold-divider w-full opacity-30" />

      <Promotions />
      <About />
      <Styles />
      <FeaturedCampaigns />
      <Portfolio />
      <Booking />
      <CustomRequest />
      <Testimonials />
      <SocialMedia />
      <ShareReferral />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
