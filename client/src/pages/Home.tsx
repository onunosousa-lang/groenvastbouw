import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import ProblemSolution from '@/components/home/ProblemSolution';
import SenmarVideo from '@/components/home/SenmarVideo';
import TechnologySection from '@/components/home/TechnologySection';
import MarketsSection from '@/components/home/MarketsSection';
import SystemsSection from '@/components/home/SystemsSection';
import EnergyComparison from '@/components/home/EnergyComparison';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />
      <HeroSection scrollToSection={scrollToSection} />
      <ProblemSolution />
      <SenmarVideo />
      <TechnologySection />
      <MarketsSection />
      <SystemsSection />
      <EnergyComparison />
      <ContactForm />
    </div>
  );
}
