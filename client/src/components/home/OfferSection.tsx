import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Home, Pencil, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OfferSection() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Ons Aanbod' : 'Our Offer',
    subheadline: language === 'nl' 
      ? 'Kies jouw passiefhuis oplossing: prefab modellen of volledig op maat. Structuur in 3 maanden, turn-key optie beschikbaar.'
      : 'Choose your passive house solution: prefab models or fully customized. Structure in 3 months, turn-key option available.',
    
    prefab: {
      title: language === 'nl' ? 'Prefab Modellen' : 'Prefab Models',
      subtitle: language === 'nl' ? 'Bewezen ontwerpen van Senmar' : 'Proven designs from Senmar',
      points: language === 'nl' ? [
        'Meerdere modellen beschikbaar',
        'Vanaf €1.550/m²*',
        '3 maanden: volledige prefab structuur geleverd',
        'Turn-key optie beschikbaar (B2C)',
        '3 prestatie-niveaus (Optimal/Passive/Super Passive)'
      ] : [
        'Multiple models available',
        'From €1,550/m²*',
        '3 months: complete prefab structure delivered',
        'Turn-key option available (B2C)',
        '3 performance levels (Optimal/Passive/Super Passive)'
      ],
      cta: language === 'nl' ? 'Bekijk Senmar Modellen' : 'View Senmar Models',
      priceNote: language === 'nl' ? '*Indicatieve prijs excl. BTW en transport. Structuur levering.' : '*Indicative price excl. VAT and transport. Structure delivery.',
      turnkeyNote: language === 'nl' ? 'Turn-key oplevering mogelijk met extra levertijd.' : 'Turn-key delivery possible with additional time.'
    },

    custom: {
      title: language === 'nl' ? 'Volledig Op Maat' : 'Fully Customized',
      subtitle: language === 'nl' ? 'Jouw unieke woning, ontworpen naar jouw wensen' : 'Your unique home, designed to your specifications',
      points: language === 'nl' ? [
        'Ontwerp op basis van jouw eisen',
        'Vanaf €1.550/m²*',
        '3 maanden: volledige prefab structuur geleverd',
        'Turn-key optie beschikbaar (B2C)',
        'Passivhaus certificering mogelijk'
      ] : [
        'Design based on your requirements',
        'From €1,550/m²*',
        '3 months: complete prefab structure delivered',
        'Turn-key option available (B2C)',
        'Passivhaus certification possible'
      ],
      cta: language === 'nl' ? 'Start Op Maat Project' : 'Start Custom Project',
      priceNote: language === 'nl' ? '*Indicatieve prijs excl. BTW en transport. Structuur levering.' : '*Indicative price excl. VAT and transport. Structure delivery.',
      turnkeyNote: language === 'nl' ? 'Turn-key oplevering mogelijk met extra levertijd.' : 'Turn-key delivery possible with additional time.'
    },

    bottomNote: language === 'nl'
      ? 'Standaard levering: Volledige prefab structuur in 3 maanden. Turn-key oplevering (B2C): Inclusief fundering, afwerking en installaties. Langere levertijd.'
      : 'Standard delivery: Complete prefab structure in 3 months. Turn-key delivery (B2C): Including foundation, finishing and installations. Longer delivery time.'
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id={language === 'nl' ? 'aanbod' : 'offer'} className="py-20 relative scroll-mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/offer-bg.jpg" 
          alt="Construction Background" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
          <p className="text-xl text-gray-700 font-medium">{content.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Prefab Models Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.prefab.title}</h3>
              <p className="text-gray-500 mb-6">{content.prefab.subtitle}</p>
              
              <ul className="space-y-3 mb-8">
                {content.prefab.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <a 
                href="https://www.senmar.pt/en/models" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold group">
                  {content.prefab.cta}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="mt-4 text-xs text-gray-500 space-y-1 text-center">
                <p>{content.prefab.priceNote}</p>
                <p className="font-medium text-green-700">{content.prefab.turnkeyNote}</p>
              </div>
            </div>
          </motion.div>

          {/* Custom Project Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Pencil className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.custom.title}</h3>
              <p className="text-gray-500 mb-6">{content.custom.subtitle}</p>
              
              <ul className="space-y-3 mb-8">
                {content.custom.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Button 
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold group"
              >
                {content.custom.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-4 text-xs text-gray-500 space-y-1 text-center">
                <p>{content.custom.priceNote}</p>
                <p className="font-medium text-blue-700">{content.custom.turnkeyNote}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/50 shadow-sm">
          <p className="text-gray-800 font-semibold">
            {content.bottomNote}
          </p>
        </div>
      </div>
    </section>
  );
}
