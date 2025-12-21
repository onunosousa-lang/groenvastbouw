import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/hero-bg.jpg" 
          alt="Senmar Passive House Structure" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
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
            {language === 'nl' ? 'Duurzame woningen op maat' : 'Sustainable Homes Tailored to You'}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg max-w-2xl">
            {language === 'nl' 
              ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energiezuinig, duurzaam en betaalbaar.'
              : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/31629841297" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg font-bold px-8 py-5 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
              💬 {language === 'nl' ? 'Neem contact op via WhatsApp' : 'Get in touch on WhatsApp'}
            </a>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-5 backdrop-blur-sm" onClick={() => scrollToSection('services')}>
              {language === 'nl' ? 'Onze diensten' : 'Our services'}
            </Button>
          </div>
        </div>
      </div>
      <button onClick={() => scrollToSection('senmar')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
