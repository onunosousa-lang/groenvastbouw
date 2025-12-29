import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Jouw Passiefhuis Structuur in 3 Maanden' : 'Your Passive House Structure in 3 Months',
    subheadline: language === 'nl' 
      ? 'Prefab passiefhuizen vanaf €1.550/m². Structuur geleverd of volledig turn-key.'
      : 'Prefab passive houses from €1,550/m². Structure delivered or full turn-key.',
    ctaPrimary: language === 'nl' ? 'Bekijk Ons Aanbod' : 'View Our Offer',
    ctaSecondary: language === 'nl' ? 'Plan Gratis Consult' : 'Schedule Free Consultation',
    points: language === 'nl' 
      ? ['90% lagere energiekosten', '3 maanden structuur', 'Turn-key optie beschikbaar']
      : ['90% lower energy costs', '3-month structure', 'Turn-key option available']
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/hero-bg.jpg" 
          alt="Senmar Passive House Structure" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
      <div className="absolute top-24 right-4 z-20 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-xs space-y-1">
          <div className="font-semibold text-gray-900">KvK: 75308045</div>
          <div className="text-gray-700">€2,5M Verzekerd</div>
        </div>
      </div>
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="max-w-3xl lg:mx-0 mx-auto">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#7FB956] mb-2">Groenvastbouw</h2>
            <p className="text-lg md:text-xl text-white/90 italic">Nuchter bouwen. Slim wonen.</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            {content.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg max-w-2xl">
            {content.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 backdrop-blur-sm"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90 text-sm md:text-base font-medium">
            {content.points.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7FB956]" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => scrollToSection('offer')} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce z-20">
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
