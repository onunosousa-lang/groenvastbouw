import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Factory, Truck, Construction, Plug, Key, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'structure' | 'turnkey'>('structure');

  const content = {
    headline: language === 'nl' ? 'Hoe Het Werkt' : 'How It Works',
    subheadline: language === 'nl' ? 'Van ontwerp tot geleverde structuur in 3 maanden' : 'From design to delivered structure in 3 months',
    
    tabs: {
      structure: language === 'nl' ? 'Structuur Levering (3 maanden)' : 'Structure Delivery (3 months)',
      turnkey: language === 'nl' ? 'Turn-key Levering (B2C)' : 'Turn-key Delivery (B2C)'
    },

    structureSteps: [
      {
        title: language === 'nl' ? 'Ontwerp & Offerte' : 'Design & Quote',
        desc: language === 'nl' ? 'Kies een prefab model of bespreek jouw op maat ontwerp. Ontvang een vaste prijsofferte.' : 'Choose a prefab model or discuss your custom design. Receive a fixed price quote.',
        duration: language === 'nl' ? '1-2 weken' : '1-2 weeks',
        icon: Ruler
      },
      {
        title: language === 'nl' ? 'Productie in Portugal' : 'Production in Portugal',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt geproduceerd in een gecontroleerde fabriek in Portugal.' : 'The complete prefab structure is produced in a controlled factory in Portugal.',
        duration: language === 'nl' ? '8-12 weken' : '8-12 weeks',
        icon: Factory
      },
      {
        title: language === 'nl' ? 'Transport naar Nederland' : 'Transport to Netherlands',
        desc: language === 'nl' ? 'De structuur wordt naar Nederland getransporteerd.' : 'The structure is transported to the Netherlands.',
        duration: language === 'nl' ? 'Inbegrepen' : 'Included',
        icon: Truck
      },
      {
        title: language === 'nl' ? 'Levering Structuur' : 'Structure Delivery',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt op uw locatie geleverd, klaar voor montage.' : 'The complete prefab structure is delivered to your location, ready for assembly.',
        duration: language === 'nl' ? 'Einde maand 3' : 'End of month 3',
        icon: Construction
      }
    ],

    turnkeySteps: [
      {
        title: language === 'nl' ? 'Ontwerp & Offerte' : 'Design & Quote',
        desc: language === 'nl' ? 'Kies een prefab model of bespreek jouw op maat ontwerp. Ontvang een volledige turn-key offerte.' : 'Choose a prefab model or discuss your custom design. Receive a complete turn-key quote.',
        duration: language === 'nl' ? '1-2 weken' : '1-2 weeks',
        icon: Ruler
      },
      {
        title: language === 'nl' ? 'Vergunningen & Fundering' : 'Permits & Foundation',
        desc: language === 'nl' ? 'Wij regelen vergunningen en voorbereiden de fundering in Nederland.' : 'We arrange permits and prepare the foundation in the Netherlands.',
        duration: language === 'nl' ? '4-8 weken (parallel)' : '4-8 weeks (parallel)',
        icon: Calendar
      },
      {
        title: language === 'nl' ? 'Productie in Portugal' : 'Production in Portugal',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt geproduceerd in een gecontroleerde fabriek.' : 'The complete prefab structure is produced in a controlled factory.',
        duration: language === 'nl' ? '8-12 weken' : '8-12 weeks',
        icon: Factory
      },
      {
        title: language === 'nl' ? 'Montage Structuur' : 'Structure Assembly',
        desc: language === 'nl' ? 'De structuur wordt op de fundering gemonteerd.' : 'The structure is assembled on the foundation.',
        duration: language === 'nl' ? '8-12 dagen' : '8-12 days',
        icon: Construction
      },
      {
        title: language === 'nl' ? 'Afwerking & Installaties' : 'Finishing & Installations',
        desc: language === 'nl' ? 'Volledige afwerking, elektrische en sanitaire installaties.' : 'Complete finishing, electrical and plumbing installations.',
        duration: language === 'nl' ? '4-8 weken' : '4-8 weeks',
        icon: Plug
      },
      {
        title: language === 'nl' ? 'Oplevering' : 'Handover',
        desc: language === 'nl' ? 'Sleuteloverdracht, klaar om in te trekken.' : 'Key handover, ready to move in.',
        duration: language === 'nl' ? 'Einde project' : 'End of project',
        icon: Key
      }
    ],

    totalTimeline: {
      structure: language === 'nl' ? 'Totale doorlooptijd: 3 maanden' : 'Total timeline: 3 months',
      turnkey: language === 'nl' ? 'Totale doorlooptijd: 4-6 maanden (afhankelijk van afwerking)' : 'Total timeline: 4-6 months (depending on finishing)'
    },

    cta: {
      text: language === 'nl' ? 'Wil je meer weten over het proces?' : 'Want to know more about the process?',
      button: language === 'nl' ? 'Plan Gratis Consult' : 'Schedule Free Consultation'
    }
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
    <section id={language === 'nl' ? 'proces' : 'process'} className="py-20 relative scroll-mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/process-bg.jpg" 
          alt="Process Background" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
          <p className="text-xl text-gray-700 font-medium">{content.subheadline}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'structure' 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {content.tabs.structure}
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'turnkey' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {content.tabs.turnkey}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {(activeTab === 'structure' ? content.structureSteps : content.turnkeySteps).map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connecting Line (Desktop) */}
                  {index < (activeTab === 'structure' ? content.structureSteps : content.turnkeySteps).length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                  )}
                  
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      activeTab === 'structure' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="absolute top-6 right-6 text-xs font-bold text-gray-300">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex-grow">{step.desc}</p>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      activeTab === 'structure' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-gray-800 mb-8">
              {activeTab === 'structure' ? content.totalTimeline.structure : content.totalTimeline.turnkey}
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600">{content.cta.text}</p>
              <Button 
                onClick={scrollToContact}
                className={`px-8 py-6 text-lg font-semibold text-white ${
                  activeTab === 'structure' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {content.cta.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
