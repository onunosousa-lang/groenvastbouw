import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Factory, Truck, Construction, Plug, Key, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
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
        title: language === 'nl' ? 'Productie in Senmar Fabriek' : 'Production in Senmar Factory',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt geproduceerd in onze gecontroleerde fabriek in Portugal, gebouwd met Senmar technologie voor maximale efficiëntie.' : 'The complete prefab structure is produced in our controlled factory in Portugal, built with Senmar technology for maximum efficiency.',
        duration: language === 'nl' ? '8-12 weken' : '8-12 weeks',
        icon: Factory
      },
      {
        title: language === 'nl' ? 'Transport & Volledige Montage' : 'Transport & Full Assembly',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt op uw locatie geleverd en gemonteerd door ons team. Transport naar Nederland en volledige montage zijn inbegrepen. Fundering en grondwerk worden van tevoren door u of op aanvraag door ons voorbereid.' : 'The complete prefab structure is delivered to your location and assembled by our team. Transport to the Netherlands and full assembly are included. Foundation and groundwork are prepared in advance by you or by us upon request.',
        duration: language === 'nl' ? 'Maand 3' : 'Month 3',
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
      structure: language === 'nl' ? 'Totale doorlooptijd: 3 maanden (inclusief volledige montage)' : 'Total timeline: 3 months (including full assembly)',
      turnkey: language === 'nl' ? 'Totale doorlooptijd: 4-6 maanden (afhankelijk van afwerking)' : 'Total timeline: 4-6 months (depending on finishing)'
    },

    asteriskNote: language === 'nl' 
      ? 'Volledige montage door ons team is inbegrepen in de 3-maanden timeline. Fundering en grondwerk worden van tevoren door u of op aanvraag door ons voorbereid.'
      : 'Full assembly by our team is included in the 3-month timeline. Foundation and groundwork are prepared in advance by you or by us upon request.',

    cta: {
      text: language === 'nl' ? 'Wil je meer weten over het proces?' : 'Want to know more about the process?',
      button: language === 'nl' ? 'Plan Gratis Consult' : 'Schedule Free Consultation'
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
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.headline}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">{content.subheadline}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'structure' 
                  ? 'bg-gray-900 text-[#90dc35] shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {content.tabs.structure}
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'turnkey' 
                  ? 'bg-gray-900 text-[#90dc35] shadow-sm' 
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
              className={`grid gap-8 ${
                activeTab === 'structure' 
                  ? 'md:grid-cols-2 lg:grid-cols-3' 
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {(activeTab === 'structure' ? content.structureSteps : content.turnkeySteps).map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connecting Line (Desktop) */}
                  {index < (activeTab === 'structure' ? content.structureSteps : content.turnkeySteps).length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                  )}
                  
                  <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      activeTab === 'structure' ? 'bg-green-50 text-[#90dc35]' : 'bg-green-50 text-[#90dc35]'
                    }`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="absolute top-6 right-6 text-xs font-bold text-gray-300">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex-grow">{step.desc}</p>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      activeTab === 'structure' ? 'bg-[#f0f7e8] text-[#6fb820]' : 'bg-[#f0f7e8] text-[#6fb820]'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-gray-800 mb-2">
              {activeTab === 'structure' ? content.totalTimeline.structure : content.totalTimeline.turnkey}
            </p>
            {activeTab === 'structure' && (
              <p className="text-sm text-gray-600 mb-8">{content.asteriskNote}</p>
            )}
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600">{content.cta.text}</p>
              <Button 
                onClick={openModal}
                className={`px-8 py-6 text-lg font-semibold text-[#2A3439] ${
                  activeTab === 'structure' 
                    ? 'bg-[#90dc35] hover:bg-[#6fb820]' 
                    : 'bg-[#90dc35] hover:bg-[#6fb820]'
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
