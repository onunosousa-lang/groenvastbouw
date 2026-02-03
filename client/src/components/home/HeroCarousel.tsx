import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { Button } from '@/components/ui/button';

interface HeroCarouselProps {
  scrollToSection: (id: string) => void;
}

export default function HeroCarousel({ scrollToSection }: HeroCarouselProps) {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Define all slides with different messaging
  const slides = [
    {
      id: 1,
      headline: language === 'nl' 
        ? 'Jouw Passiefhuis. Gebouwd in 3 Maanden.'
        : 'Your Passive House. Built in 3 Months.',
      subheadline: language === 'nl'
        ? <>Prefab passiefhuizen. volledige structuur geleverd en gemonteerd op locatie. In partnerschap met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8eb564] font-bold hover:underline">SENMAR</a></>
        : <>Prefab passive houses. full structure delivered and mounted on site. In partnership with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8eb564] font-bold hover:underline">SENMAR</a></>,
      description: language === 'nl'
        ? 'Onze technologie zorgt voor maximale efficiëntie in productie. gecontroleerde kosten zonder verrassingen, minimaal afval, toekomstbestendig comfort.'
        : 'Our technology allows for maximum efficiency in production. controlled costs without surprises, minimum waste, future-proof comfort.',
      points: language === 'nl' 
        ? [
            '90% lagere energierekeningen. voor het leven',
            '3 maanden van bestelling tot gemonteerde structuur',
            'Maximale kwaliteit, gebouwd om te duren'
          ]
        : [
            '90% lower energy bills. for life',
            '3 months from order to mounted structure',
            'Maximum quality, built to last'
          ]
    },
    {
      id: 2,
      headline: language === 'nl' 
        ? 'Duurzaam Bouwen. Verantwoord Wonen.'
        : 'Sustainable Building. Responsible Living.',
      subheadline: language === 'nl'
        ? 'Minimale ecologische voetafdruk. Maximaal comfort. Gebouwd met respect voor het milieu en toekomstige generaties.'
        : 'Minimal ecological footprint. Maximum comfort. Built with respect for the environment and future generations.',
      description: language === 'nl'
        ? 'Houtbouw met FSC-gecertificeerd hout. Carbon-negatieve constructie. 50+ jaar levensduur met minimaal onderhoud.'
        : 'Timber construction with FSC-certified wood. Carbon-negative building. 50+ year lifespan with minimal maintenance.',
      points: language === 'nl' 
        ? [
            'Carbon-negatief vanaf dag één',
            'FSC-gecertificeerd duurzaam hout',
            'Minimaal afval tijdens productie'
          ]
        : [
            'Carbon-negative from day one',
            'FSC-certified sustainable timber',
            'Minimal waste during production'
          ]
    },
    {
      id: 3,
      headline: language === 'nl' 
        ? 'Innovatie Ontmoet Vakmanschap'
        : 'Innovation Meets Craftsmanship',
      subheadline: language === 'nl'
        ? 'CNC-precisie van 1mm. Fabrieksgecontroleerde kwaliteit. Geen weerschade tijdens bouw.'
        : 'CNC precision of 1mm. Factory-controlled quality. No weather damage during construction.',
      description: language === 'nl'
        ? 'Geavanceerde productietechnologie gecombineerd met traditioneel vakmanschap. Elke component wordt geproduceerd onder optimale omstandigheden.'
        : 'Advanced production technology combined with traditional craftsmanship. Every component is manufactured under optimal conditions.',
      points: language === 'nl' 
        ? [
            'CNC-precisie: 1mm nauwkeurigheid',
            'Fabrieksproductie: geen weerschade',
            '10 jaar garantie op structuur'
          ]
        : [
            'CNC precision: 1mm accuracy',
            'Factory production: no weather damage',
            '10-year warranty on structure'
          ]
    },
    {
      id: 4,
      headline: language === 'nl' 
        ? '90% Energiebesparing. Voor Het Leven.'
        : '90% Energy Savings. For Life.',
      subheadline: language === 'nl'
        ? 'Passivhaus-standaard betekent extreme energiezuinigheid. Aanzienlijke besparingen op energiekosten, jaar na jaar.'
        : 'Passivhaus standard means extreme energy efficiency. Significant savings on energy costs, year after year.',
      description: language === 'nl'
        ? 'Superieure isolatie, luchtdichte constructie en warmteterugwinning zorgen voor minimaal energieverbruik zonder comfort in te leveren.'
        : 'Superior insulation, airtight construction and heat recovery ensure minimal energy consumption without compromising comfort.',
      points: language === 'nl' 
        ? [
            '90% minder energieverbruik',
            'Constant binnenklimaat zonder tocht',
            'Onafhankelijk van energieprijzen'
          ]
        : [
            '90% less energy consumption',
            'Constant indoor climate without drafts',
            'Independent of energy prices'
          ]
    },
    {
      id: 5,
      headline: language === 'nl' 
        ? 'Jouw Visie. Onze Expertise.'
        : 'Your Vision. Our Expertise.',
      subheadline: language === 'nl'
        ? 'Volledig op maat ontworpen passiefhuizen. Van compact tot ruim, van modern tot klassiek. Jouw droomhuis, precies zoals jij het wilt.'
        : 'Fully custom-designed passive houses. From compact to spacious, from modern to classic. Your dream home, exactly as you want it.',
      description: language === 'nl'
        ? 'Ons modulair systeem biedt volledige architecturale vrijheid. Elk project is uniek - alleen de productie is gestandaardiseerd, niet het ontwerp.'
        : 'Our modular system offers complete architectural freedom. Every project is unique - only production is standardized, not the design.',
      points: language === 'nl' 
        ? [
            'Volledig op maat ontworpen',
            'Architecturale vrijheid',
            'Passivhaus-certificering mogelijk'
          ]
        : [
            'Fully custom designed',
            'Architectural freedom',
            'Passivhaus certification possible'
          ]
    },
    {
      id: 6,
      headline: language === 'nl' 
        ? 'Bewezen Prefab Modellen'
        : 'Proven Prefab Models',
      subheadline: language === 'nl'
        ? 'Kies uit geteste passiefhuisontwerpen van Senmar. Voorspelbare kosten, voorspelbare resultaten, voorspelbare planning.'
        : 'Choose from Senmar\'s tested passive house designs. Predictable costs, predictable results, predictable planning.',
      description: language === 'nl'
        ? 'Meerdere bewezen modellen beschikbaar in drie prestatieniveaus: Optimal, Passive en Super Passive. Klaar voor levering.'
        : 'Multiple proven models available in three performance levels: Optimal, Passive and Super Passive. Ready for delivery.',
      points: language === 'nl' 
        ? [
            'Bewezen ontwerpen, geen verrassingen',
            '3 prestatieniveaus beschikbaar',
            'Turn-key afwerking mogelijk'
          ]
        : [
            'Proven designs, no surprises',
            '3 performance levels available',
            'Turn-key finishing possible'
          ]
    },
    {
      id: 7,
      headline: language === 'nl' 
        ? 'Schaal Met Vertrouwen'
        : 'Scale With Confidence',
      subheadline: language === 'nl'
        ? 'Voor projectontwikkelaars en woningcorporaties. Serieproductie tot 19.000m² per jaar met consistente kwaliteit.'
        : 'For project developers and housing corporations. Series production up to 19,000m² per year with consistent quality.',
      description: language === 'nl'
        ? 'Onze productiefaciliteit is ontworpen voor grootschalige projecten. Dedicated projectcoördinatie en flexibele afleveringsplanning.'
        : 'Our production facility is designed for large-scale projects. Dedicated project coordination and flexible delivery scheduling.',
      points: language === 'nl' 
        ? [
            'Capaciteit: 19.000m² per jaar',
            'Consistente kwaliteit op schaal',
            'Dedicated B2B projectcoördinatie'
          ]
        : [
            'Capacity: 19,000m² per year',
            'Consistent quality at scale',
            'Dedicated B2B project coordination'
          ]
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* STATIC Background Image - Does NOT slide */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg"
          alt="Groenvastbouw Passive House"
          className="w-full h-full object-cover"
        />
        {/* No overlay - photos fully visible */}
      </div>

      {/* Text Content Carousel - ONLY THIS SLIDES */}
      <div className="container mx-auto px-4 z-10 relative min-h-screen flex items-center pt-24 pb-20">
        <div className="embla w-full max-w-4xl" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide min-w-full">
                {/* Text content with light gray background box for contrast - Senmar style */}
                <div className="bg-[#dcdcdc]/70 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
                  {/* Headline */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8eb564] mb-6 leading-tight">
                    {slide.headline}
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg md:text-xl text-[#2a3439] mb-6 font-semibold leading-relaxed">
                    {slide.subheadline}
                  </p>

                  {/* Description */}
                  <p className="text-base md:text-lg text-[#2a3439] mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 mb-10">
                    {slide.points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#8eb564] flex-shrink-0 mt-1" />
                        <span className="text-[#2a3439] text-base md:text-lg font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <a 
                      href="https://wa.me/31629841298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#8eb564] hover:bg-[#8eb564] text-[#2a3439] text-lg font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center border-2 border-dashed border-[#8eb564]"
                    >
                      WhatsApp
                    </a>
                    <Button 
                      onClick={openModal}
                      className="flex-1 bg-[#8eb564] hover:bg-[#8eb564] text-[#2a3439] text-lg font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 border-2 border-dashed border-[#8eb564]"
                    >
                      {language === 'nl' ? 'Request an intro call' : 'Request an intro call'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Dots Navigation */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-[#8eb564] w-8' 
                : 'bg-[#2a3439]/40 hover:bg-[#2a3439]/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('offer')} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#2a3439] hover:text-[#8eb564] transition-colors animate-bounce z-20"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
