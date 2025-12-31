import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();

  const content = {
    company: 'Groenvastbouw',
    tagline: language === 'nl' ? 'Nuchter bouwen. Slim wonen.' : 'Smart building. Smart living.',
    partnership: language === 'nl'
      ? 'In partnerschap met Senmar — innovatief bedrijf uit Portugal, gericht op maximale kwaliteit, efficiëntie en duurzaam bouwen.'
      : 'In partnership with Senmar — cutting-edge company based in Portugal, focused on maximum quality, efficiency, and truly sustainable building.',
    headline: language === 'nl' 
      ? 'Jouw Passiefhuis. Gebouwd in 3 Maanden.'
      : 'Your Passive House. Built in 3 Months.',
    subheadline: language === 'nl'
      ? <>Prefab passiefhuizen vanaf €1.550/m²* — volledige structuur geleverd en gemonteerd op locatie. In partnerschap met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] font-bold hover:underline">SENMAR</a></>
      : <>Prefab passive houses starting from €1,550/m²* — full structure delivered and mounted on site. In partnership with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] font-bold hover:underline">SENMAR</a></>,
    description: language === 'nl'
      ? 'Onze technologie zorgt voor maximale efficiëntie in productie — gecontroleerde kosten zonder verrassingen, minimaal afval, toekomstbestendig comfort.'
      : 'Our technology allows for maximum efficiency in production — controlled costs without surprises, minimum waste, future-proof comfort.',
    ctaPrimary: language === 'nl' ? 'Bekijk Ons Aanbod' : 'See Our Offer',
    ctaSecondary: language === 'nl' ? 'Gratis Consult' : 'Free Consultation',
    points: language === 'nl' 
      ? [
          '90% lagere energierekeningen — voor het leven',
          '3 maanden van bestelling tot gemonteerde structuur',
          'Maximale kwaliteit, gebouwd om te duren'
        ]
      : [
          '90% lower energy bills — for life',
          '3 months from order to mounted structure',
          'Maximum quality, built to last'
        ],
    footnotes: language === 'nl'
      ? [
          '*Van bestelling tot volledig gemonteerde structuur.',
          '*Startprijs voor basisstructuur, exclusief transport en VAT. Turn-key opties beschikbaar.'
        ]
      : [
          '*From order to fully mounted structure.',
          '*Starting price for basic structure, excluding transport and VAT. Turn-key options available.'
        ]
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/hero-bg.jpg" 
          alt="Senmar Passive House Structure" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/75 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
      </div>
      
      <div className="absolute top-24 right-4 z-20 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-xs space-y-1">
          <div className="font-semibold text-gray-900">KvK: 75308045</div>
          <div className="text-gray-700">€2,5M Verzekerd</div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-24 pb-32">
        <div className="max-w-3xl lg:mx-0 mx-auto">
          {/* Brand Section - Removed */}

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#7FB956] mb-6 drop-shadow-2xl leading-tight">
            {content.headline}
          </h1>

          {/* Primary Subheadline */}
          <p className="text-lg md:text-xl text-white/95 mb-4 drop-shadow-lg max-w-2xl font-semibold">
            {content.subheadline}
          </p>

          {/* Description Paragraph */}
          <p className="text-base md:text-lg text-white/90 mb-8 drop-shadow-lg max-w-2xl leading-relaxed">
            {content.description}
          </p>

          {/* Key Benefits with Checkmarks */}
          <div className="space-y-3 mb-10">
            {content.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#7FB956] flex-shrink-0 mt-1" />
                <span className="text-white/95 text-base md:text-lg">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              onClick={() => scrollToSection('offer')}
              className="bg-[#7FB956] hover:bg-[#6da04a] text-white text-lg font-bold px-8 py-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {content.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 backdrop-blur-sm font-semibold"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Footnotes */}
          <div className="space-y-2 text-white/70 text-xs md:text-sm">
            {content.footnotes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('offer')} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce z-20"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
