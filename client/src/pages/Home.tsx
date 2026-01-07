import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import OfferSection from '@/components/home/OfferSection';
import HowItWorks from '@/components/home/HowItWorks';
// import SolutionsSection from '@/components/home/SolutionsSection';
import PerformanceLevels from '@/components/home/PerformanceLevels';
import SenmarVideo from '@/components/home/SenmarVideo';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ContactForm from '@/components/home/ContactForm';
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />
      <HeroSection scrollToSection={scrollToSection} />
      <OfferSection />
      <HowItWorks />
      {/* <SolutionsSection /> */}
      <PerformanceLevels />
      <SenmarVideo />
      <FeaturedProjects />
      <ContactForm />
      <FAQSection />
    </div>
  );
}
