import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SocialProof from '../components/SocialProof';
import OfferBreakdown from '../components/OfferBreakdown';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Nav />
      <Hero />
      <Marquee />
      <SocialProof />
      <OfferBreakdown />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
