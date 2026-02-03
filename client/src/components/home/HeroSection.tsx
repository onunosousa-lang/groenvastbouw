import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();
  const { openModal } = useContactModal();

  const content = {
    company: 'Groenvastbouw',
    tagline: language === 'nl' ? 'Nuchter bouwen. Slim wonen.' : 'Smart building. Smart living.',
    partnership: language === 'nl'
      ? 'In partnerschap met Senmar. innovatief bedrijf uit Portugal, gericht op maximale kwaliteit, efficiëntie en duurzaam bouwen.'
      : 'In partnership with Senmar. cutting-edge company based in Portugal, focused on maximum quality, efficiency, and truly sustainable building.',
    headline: language === 'nl' 
      ? 'Jouw Passiefhuis. Montage in 8-12 Dagen.'
      : 'Your Passive House. Assembly in 8-12 Days.',
    subheadline: language === 'nl'
      ? <>Prefab passiefhuizen. volledige structuur geleverd en gemonteerd op locatie. In partnerschap met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] font-bold hover:underline">SENMAR</a></>
      : <>Prefab passive houses. full structure delivered and mounted on site. In partnership with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] font-bold hover:underline">SENMAR</a></>,
    description: language === 'nl'
      ? 'Onze technologie zorgt voor maximale efficiëntie in productie. gecontroleerde kosten zonder verrassingen, minimaal afval, toekomstbestendig comfort.'
      : 'Our technology allows for maximum efficiency in production. controlled costs without surprises, minimum waste, future-proof comfort.',
    ctaPrimary: language === 'nl' ? 'Bekijk Ons Aanbod' : 'See Our Offer',
    ctaSecondary: language === 'nl' ? 'Request an intro call' : 'Request an intro call',
    points: language === 'nl' 
      ? [
          '90% lagere energierekeningen. voor het leven',
          'Montage: 8-12 dagen. Totale doorlooptijd: 3 maanden',
          'Maximale kwaliteit, gebouwd om te duren'
        ]
      : [
          '90% lower energy bills. for life',
          'Assembly: 8-12 days. Total lead time: 3 months',
          'Maximum quality, built to last'
        ],
    footnotes: language === 'nl'
      ? [
          '*Van bestelling tot volledig gemonteerde structuur.'
        ]
      : [
          '*From order to fully mounted structure.'
        ]
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="Senmar Passive House Structure" 
          className="w-full h-full object-cover"
        />
        {/* No overlays - photos fully visible */}
      </div>
      

      
      <div className="container mx-auto px-4 z-10 pt-24 pb-32">
        <div className="max-w-3xl lg:mx-0 mx-auto">
          {/* Brand Section - Removed */}

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#8edb38] mb-6 drop-shadow-2xl leading-tight">
            {content.headline}
          </h1>

          {/* Primary Subheadline */}
          <p className="text-lg md:text-xl text-[#2a3439] mb-6 drop-shadow-lg max-w-2xl font-semibold leading-relaxed">
            {content.subheadline}
          </p>

          {/* Description Paragraph */}
          <p className="text-base md:text-lg text-[#2a3439] mb-8 drop-shadow-lg max-w-2xl leading-relaxed">
            {content.description}
          </p>

          {/* Key Benefits with Checkmarks */}
          <div className="space-y-3 mb-10">
            {content.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-1" />
                <span className="text-[#2a3439] text-base md:text-lg font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-2xl">
            <a 
              href="https://wa.me/31629841298"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#8edb38] hover:bg-[#8edb38] text-[#2a3439] text-lg font-bold px-8 py-6 rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              WhatsApp
            </a>
            <Button 
              onClick={openModal}
              className="flex-1 bg-[#8edb38] hover:bg-[#8edb38] text-[#2a3439] text-lg font-bold px-8 py-6 rounded-lg shadow-xl transition-all duration-300"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Footnotes */}
          <div className="space-y-2 text-[#2a3439]/70 text-xs md:text-sm">
            {content.footnotes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('offer')} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#2a3439]/80 hover:text-[#2a3439] transition-colors animate-bounce z-20"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
