import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { motion } from 'framer-motion';
import { Home, Pencil, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OfferSection() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();

  const content = {
    headline: language === 'nl' ? 'Ons Aanbod' : 'Our Offer',
    subheadline: language === 'nl' 
      ? 'Jouw passiefhuis, jouw manier. Kies uit bewezen prefab modellen of volledig op maat. Structuur geleverd in 3 maanden. turn-key opties beschikbaar.'
      : 'Your passive house, your way. Choose proven prefab models or go fully custom. Structure delivered in 3 months. turn-key options available.',
    
    prefab: {
      title: language === 'nl' ? 'Prefab Modellen' : 'Prefab Models',
      subtitle: language === 'nl' ? 'Bewezen ontwerpen. Voorspelbare resultaten.' : 'Proven designs. Predictable results.',
      description: language === 'nl'
        ? 'Kies uit geteste passiefhuisontwerpen van Senmar. ontworpen voor efficiëntie, klaar voor levering.'
        : 'Choose from Senmar\'s tested passive house designs. engineered for efficiency, ready for delivery.',
      points: language === 'nl' ? [
        'Meerdere modellen beschikbaar',
        '3 prestatie-niveaus: Optimal / Passive / Super Passive',
        'Volledige structuur geleverd in 3 maanden',
        'Turn-key afwerking beschikbaar'
      ] : [
        'Multiple models available',
        '3 performance levels: Optimal / Passive / Super Passive',
        'Complete structure delivered in 3 months',
        'Turn-key finishing available'
      ],
      price: language === 'nl' ? 'Vanaf €1.550/m²*' : 'Starting from €1,550/m²*',
      cta: language === 'nl' ? 'Bekijk Senmar Modellen' : 'View Senmar Models',
      priceNote: language === 'nl' 
        ? '*Startprijs voor basisstructuur, exclusief transport en BTW.\nTurn-key oplevering inclusief fundering, afwerking en installaties. langere levertijd.'
        : '*Starting price for basic structure, excluding transport and VAT.\nTurn-key delivery includes foundation, finishing, and installations. longer delivery time applies.'
    },

    custom: {
      title: language === 'nl' ? 'Volledig Op Maat' : 'Fully Custom',
      subtitle: language === 'nl' ? 'Jouw visie. Onze precisie.' : 'Your vision. Our precision.',
      description: language === 'nl'
        ? 'Een woning volledig naar jouw wensen ontworpen. dezelfde fabrieksgecontroleerde kwaliteit, dezelfde snelle levering.'
        : 'A home designed entirely to your specifications. same factory-controlled quality, same fast delivery.',
      points: language === 'nl' ? [
        'Ontwerp op basis van jouw eisen',
        'Passivhaus certificering mogelijk',
        'Volledige structuur geleverd in 3 maanden',
        'Turn-key afwerking beschikbaar'
      ] : [
        'Design based on your requirements',
        'Passivhaus certification possible',
        'Complete structure delivered in 3 months',
        'Turn-key finishing available'
      ],
      price: language === 'nl' ? 'Vanaf €1.550/m²*' : 'Starting from €1,550/m²*',
      cta: language === 'nl' ? 'Start Op Maat Project' : 'Start Your Custom Project',
      priceNote: language === 'nl' 
        ? '*Startprijs voor basisstructuur, exclusief transport en BTW.\nTurn-key oplevering inclusief fundering, afwerking en installaties. langere levertijd.'
        : '*Starting price for basic structure, excluding transport and VAT.\nTurn-key delivery includes foundation, finishing, and installations. longer delivery time applies.'
    },

    b2b: {
      title: language === 'nl' ? 'B2B & Projectontwikkelaars' : 'B2B & Project Developers',
      subtitle: language === 'nl' ? 'Schaal met vertrouwen.' : 'Scale with confidence.',
      description: language === 'nl'
        ? 'Heb je volume nodig? Onze productiefaciliteit levert tot 19.000m² modulaire passiefhuizen per jaar. ideaal voor ontwikkelaars, woningcorporaties, openbare gebouwen, kantoren en grootschalige projecten, inclusief 3-laagse gebouwen.'
        : 'Need volume? Our production facility delivers up to 19,000m² of modular passive houses per year. ideal for developers, housing corporations, public buildings, offices, and large-scale projects, including 3-storey buildings.',
      points: language === 'nl' ? [
        'Serieproductiecapaciteit',
        'Consistente kwaliteit op schaal',
        'Dedicated projectcoördinatie',
        'Flexibele afleveringsplanning'
      ] : [
        'Series production capacity',
        'Consistent quality at scale',
        'Dedicated project coordination',
        'Flexible delivery scheduling'
      ],
      cta: language === 'nl' ? 'Bespreek Jouw Project' : 'Discuss Your Project'
    }
  };



  return (
    <section id={language === 'nl' ? 'aanbod' : 'offer'} className="py-20 relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Images with Transparency */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/features-background.jpg" 
          alt="" 
          className="absolute top-0 right-0 w-1/2 h-auto opacity-8 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.headline}</h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">{content.subheadline}</p>
        </div>

        {/* Three Column Grid - REORGANIZED ORDER */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* B2B Card - FIRST */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/85 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-[#f0f7e8] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-[#90dc35] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{content.b2b.title}</h3>
              <p className="text-sm font-semibold text-[#90dc35] mb-3">{content.b2b.subtitle}</p>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{content.b2b.description}</p>
              
              <ul className="space-y-2.5 mb-8">
                {content.b2b.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#90dc35] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-gray-700/50 border-t border-gray-700">
              <Button 
                onClick={openModal}
                className="w-full bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] h-12 text-base font-semibold group"
              >
                {content.b2b.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Prefab Models Card - SECOND */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/85 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-[#f0f7e8] rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#90dc35] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.prefab.title}</h3>
              <p className="text-sm font-semibold text-[#90dc35] mb-3">{content.prefab.subtitle}</p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{content.prefab.description}</p>
              
              <ul className="space-y-2.5 mb-8">
                {content.prefab.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#90dc35] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold text-[#90dc35] mb-6">{content.prefab.price}</p>
            </div>
            
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <a 
                href="https://senmar.pt/en/projects#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] h-12 text-base font-semibold group">
                  {content.prefab.cta}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="mt-4 text-xs text-gray-400 space-y-1 text-center whitespace-pre-line">
                <p>{content.prefab.priceNote}</p>
              </div>
            </div>
          </motion.div>

          {/* Custom Project Card - THIRD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/85 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-[#e8f5f0] rounded-xl flex items-center justify-center mb-6">
                <Pencil className="text-[#90dc35] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.custom.title}</h3>
              <p className="text-sm font-semibold text-[#90dc35] mb-3">{content.custom.subtitle}</p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{content.custom.description}</p>
              
              <ul className="space-y-2.5 mb-8">
                {content.custom.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#90dc35] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold text-[#90dc35] mb-6">{content.custom.price}</p>
            </div>
            
            <div className="p-8 bg-gray-700/50 border-t border-gray-700">
              <Button 
                onClick={openModal}
                className="w-full bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] h-12 text-base font-semibold group"
              >
                {content.custom.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-4 text-xs text-gray-400 space-y-1 text-center whitespace-pre-line">
                <p>{content.custom.priceNote}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Solutions */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Technische Oplossingen' : 'Technical Solutions'}
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              {language === 'nl'
                ? 'Vier niveaus van passiefhuisvoorbereiding, van basis tot super-passief.'
                : 'Four levels of passive house readiness, from basic to super-passive.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
