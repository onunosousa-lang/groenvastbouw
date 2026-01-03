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
        title: language === 'nl' ? 'Productie in Senmar Fabriek' : 'Production in Senmar Factory',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt geproduceerd in onze gecontroleerde fabriek in Portugal, gebouwd met Senmar technologie voor maximale efficiëntie.' : 'The complete prefab structure is produced in our controlled factory in Portugal, built with Senmar technology for maximum efficiency.',
        duration: language === 'nl' ? '8-12 weken' : '8-12 weeks',
        icon: Factory
      },
      {
        title: language === 'nl' ? 'Levering Structuur' : 'Structure Delivery',
        desc: language === 'nl' ? 'De volledige prefab structuur wordt op uw locatie geleverd, klaar voor montage. Transport naar Nederland inbegrepen.' : 'The complete prefab structure is delivered to your location, ready for assembly. Transport to Netherlands included.',
        duration: language === 'nl' ? 'Einde maand 3' : 'End of month 3',
        icon: Construction
      },
      {
        title: language === 'nl' ? 'Volledige Montage' : 'Full Assembly',
        desc: language === 'nl' ? 'Volledige montage van de prefab structuur op uw locatie. Fundering en grondwerk worden van tevoren door u of op aanvraag door ons voorbereid.' : 'Complete assembly of the prefab structure at your location. Foundation and groundwork prepared in advance by you or by us upon request.',
        duration: language === 'nl' ? 'Optioneel' : 'Optional',
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
      structure: language === 'nl' ? 'Totale doorlooptijd: 3 maanden*' : 'Total timeline: 3 months*',
      turnkey: language === 'nl' ? 'Totale doorlooptijd: 4-6 maanden (afhankelijk van afwerking)' : 'Total timeline: 4-6 months (depending on finishing)'
    },

    asteriskNote: language === 'nl' 
      ? '* Fundering en grondwerk worden van tevoren door u of op aanvraag door ons voorbereid.'
      : '* Foundation and groundwork are prepared in advance by you or by us upon request.',

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A3439] mb-6 leading-tight">{content.headline}</h2>
          <p className="text-xl text-[#2A3439]/80 font-medium leading-relaxed">{content.subheadline}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#D7D7D6]/40 p-1.5 rounded-xl inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-8 py-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'structure'
                  ? 'bg-white text-[#7FB956] shadow-lg scale-105'
                  : 'text-[#8C9194] hover:text-[#2A3439]'
              }`}
            >
              {content.tabs.structure}
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-8 py-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'turnkey'
                  ? 'bg-white text-[#8EB564] shadow-lg scale-105'
                  : 'text-[#8C9194] hover:text-[#2A3439]'
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
                    <div className={`hidden lg:block absolute top-10 left-1/2 w-full h-1 -z-10 ${
                      activeTab === 'structure' ? 'bg-[#7FB956]/20' : 'bg-[#8EB564]/20'
                    }`} />
                  )}

                  <div className={`bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center relative z-10 ${
                    activeTab === 'structure'
                      ? 'border-[#7FB956]/20 hover:border-[#7FB956]/40'
                      : 'border-[#8EB564]/20 hover:border-[#8EB564]/40'
                  }`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-2 ${
                      activeTab === 'structure'
                        ? 'bg-[#7FB956]/10 text-[#7FB956] ring-[#7FB956]/30'
                        : 'bg-[#8EB564]/10 text-[#8EB564] ring-[#8EB564]/30'
                    }`}>
                      <step.icon className="w-10 h-10" />
                    </div>

                    <div className={`absolute top-6 right-6 text-lg font-bold ${
                      activeTab === 'structure' ? 'text-[#7FB956]/30' : 'text-[#8EB564]/30'
                    }`}>
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-[#2A3439] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#2A3439]/70 mb-6 flex-grow leading-relaxed">{step.desc}</p>

                    <div className={`inline-block px-4 py-2 rounded-lg text-xs font-bold shadow-sm ${
                      activeTab === 'structure'
                        ? 'bg-[#7FB956]/15 text-[#7FB956] ring-1 ring-[#7FB956]/30'
                        : 'bg-[#8EB564]/15 text-[#8EB564] ring-1 ring-[#8EB564]/30'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-[#2A3439] mb-3">
              {activeTab === 'structure' ? content.totalTimeline.structure : content.totalTimeline.turnkey}
            </p>
            {activeTab === 'structure' && (
              <p className="text-sm text-[#8C9194] mb-10 leading-relaxed">{content.asteriskNote}</p>
            )}

            <div className="flex flex-col items-center gap-6 mt-8">
              <p className="text-lg text-[#2A3439]/80 font-medium">{content.cta.text}</p>
              <Button
                onClick={scrollToContact}
                className={`px-10 py-7 text-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 ${
                  activeTab === 'structure'
                    ? 'bg-[#7FB956] hover:bg-[#6da04a]'
                    : 'bg-[#8EB564] hover:bg-[#7da355]'
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
