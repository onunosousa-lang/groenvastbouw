import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function SolutionsSection() {
  const { language } = useLanguage();
  const [expandedTier, setExpandedTier] = useState<string | null>('basic');

  const content = {
    headline: language === 'nl' ? 'Onze Technische Oplossingen' : 'Our Technical Solutions',
    subheadline: language === 'nl'
      ? 'Twee bouwmethoden. Vier presets. Eén doel: maximale efficiëntie en kwaliteit.'
      : 'Two construction methods. Four presets. One goal: maximum efficiency and quality.',
    
    methods: {
      title: language === 'nl' ? 'Bouwmethoden' : 'Construction Methods',
      panelized: {
        name: language === 'nl' ? 'Gepaneliseerde Constructie' : 'Panelized Construction',
        desc: language === 'nl'
          ? 'Gebouwen worden geconstrueerd met voorgeproduceerde wanden en panelen, gefabriceerd in een gecontroleerde omgeving. Deze panelen worden naar de bouwplaats vervoerd en samengevoegd als bouwstenen, wat snellere bouwmogelijkheden, verbeterde kwaliteitscontrole en minder afval oplevert.'
          : 'Buildings are constructed using pre-manufactured walls and panels, fabricated in a controlled environment. These panels are transported to the construction site and assembled like building blocks, allowing for faster construction times, improved quality control, and reduced waste.'
      },
      modular: {
        name: language === 'nl' ? 'Modulaire Constructie' : 'Modular Construction',
        desc: language === 'nl'
          ? 'Deze benadering gaat nog een stap verder door volledige secties of modules van een gebouw ter plaatse te creëren. Deze modules, die volledige kamers of delen van een structuur kunnen bevatten, zijn volledig uitgerust met elektrische-, sanitaire- en binnenafwerkingswerk voordat ze naar de plaats worden vervoerd. Eenmaal ter plaatse worden de modules als grote puzzelstukken samengevoegd, wat resulteert in een volledig geïntegreerd gebouw.'
          : 'This approach takes prefabrication a step further by creating entire sections or modules of a building off-site. These modules, which can include entire rooms or sections of a structure, are fully outfitted with electrical, plumbing, and interior finishes before being transported to the site. Once on-site, the modules are assembled like large-scale puzzle pieces, resulting in a fully integrated building.'
      }
    },

    tiers: [
      {
        id: 'basic',
        name: language === 'nl' ? 'Basis Structuur' : 'Basic Structure',
        price: language === 'nl' ? 'Vanaf €190/m²' : 'Starting from €190/m²',
        description: language === 'nl'
          ? 'Een fundamentele oplossing voor het bouwframe. Ideaal voor degenen die kosten willen verlagen en de expertise hebben om de constructie zelf af te maken.'
          : 'A foundational solution for the building frame. Great for those looking to reduce costs and who have the expertise to complete the construction themselves.',
        image: '/images/solutions/senmar_montage(6).jpg',
        components: {
          walls: language === 'nl' ? 'Wanden' : 'Walls',
          floor: language === 'nl' ? 'Vloer' : 'Floor',
          roof: language === 'nl' ? 'Dak' : 'Roof'
        },
        specs: [
          { label: language === 'nl' ? 'Externe OSB plaat' : 'External OSB plate', value: 'OSB-3, 12mm' },
          { label: language === 'nl' ? 'Houten framestructuur' : 'Timber frame structure', value: 'C24, 195x45mm' },
          { label: language === 'nl' ? 'Joistbalk' : 'Joist beam', value: 'C24, 390x45mm' },
          { label: language === 'nl' ? 'Dakspanten' : 'Rafters', value: 'C24, 195x45mm' }
        ]
      },
      {
        id: 'optimal',
        name: language === 'nl' ? 'Optimale Structuur' : 'Optimal Structure',
        price: language === 'nl' ? 'Vanaf €270/m²' : 'Starting from €270/m²',
        description: language === 'nl'
          ? 'Ontworpen voor gematigde klimaten met 200mm isolatie en interne dampremmende laag. Garandeert comfortabel microklimaat en ondersteunt structurele integriteit. Perfect voor comfortabel wonen het hele jaar door in regio\'s met milde winters.'
          : 'Designed for moderate climates, with a building frame that includes 200mm of insulation and an internal vapor barrier. This setup guarantees a comfortable microclimate and supports the structural integrity and longevity of the building. Perfect for comfortable year-round living in regions with mild winter conditions.',
        image: '/images/solutions/senmar_montage(22).jpg',
        specs: [
          { label: language === 'nl' ? 'Primaire isolatie' : 'Primary insulation', value: '200mm minerale wol / mineral wool' },
          { label: language === 'nl' ? 'U-waarde' : 'U-value', value: '0.035 W/mK' },
          { label: language === 'nl' ? 'R-waarde' : 'R-value', value: '5.7 W/m²K' },
          { label: language === 'nl' ? 'Brandveiligheid' : 'Fire safety', value: 'Klasse A / Class A' }
        ]
      },
      {
        id: 'passive',
        name: language === 'nl' ? 'Passieve Structuur' : 'Passive Structure',
        price: language === 'nl' ? 'Vanaf €320/m²' : 'Starting from €320/m²',
        description: language === 'nl'
          ? 'Met aanvullende externe isolatie aangepast aan lokale klimaatomstandigheden. Verbeterde thermische bescherming resulteert in een koeler huis in de zomer en verminderde energieverbruik voor verwarming in de winter. Over het volgende decennium aanzienlijke besparing op verwarmings- en koelingskosten. Geschikt voor regio\'s met strenge winters en zeer hete klimaten.'
          : 'This preset features additional external insulation for the building frame, with thickness adjusted according to local climate conditions. The primary benefit of this solution is enhanced thermal protection, resulting in a cooler home during the summer and reduced energy consumption for heating in the winter. Over the next decade, this passive insulation will lead to substantial savings on both heating and cooling costs. Well-suited for regions with harsh winters as well as very hot climates.',
        image: '/images/solutions/senmar_asembly(2).jpg',
        specs: [
          { label: language === 'nl' ? 'Externe isolatie' : 'External insulation', value: 'Harde minerale wol / Hard mineral wool' },
          { label: language === 'nl' ? 'Primaire isolatie' : 'Primary insulation', value: '200mm minerale wol / mineral wool' },
          { label: language === 'nl' ? 'Dakisolatie' : 'Roof insulation', value: '400mm minerale wol / mineral wool' },
          { label: language === 'nl' ? 'R-waarde dak' : 'Roof R-value', value: '11.4 W/m²K' }
        ]
      },
      {
        id: 'super',
        name: language === 'nl' ? 'Super Passieve Structuur' : 'Super Passive Structure',
        price: language === 'nl' ? 'Vanaf €400/m²' : 'Starting from €400/m²',
        description: language === 'nl'
          ? 'Onze meest geavanceerde oplossing met maximale isolatie en airtight construction. Bereikt Passivhaus-certificering standaarden. Minimale energieverbruik, maximaal comfort. Ideaal voor zeer koude klimaten en nul-energie doelstellingen.'
          : 'Our most advanced solution with maximum insulation and airtight construction. Achieves Passivhaus certification standards. Minimal energy consumption, maximum comfort. Ideal for very cold climates and zero-energy objectives.',
        image: '/images/solutions/senmar_asembly(1).jpg',
        specs: [
          { label: language === 'nl' ? 'Externe isolatie' : 'External insulation', value: 'Harde minerale wol / Hard mineral wool' },
          { label: language === 'nl' ? 'Primaire isolatie' : 'Primary insulation', value: '250mm minerale wol / mineral wool' },
          { label: language === 'nl' ? 'Dakisolatie' : 'Roof insulation', value: '500mm minerale wol / mineral wool' },
          { label: language === 'nl' ? 'Airtight construction' : 'Airtight construction', value: language === 'nl' ? 'Volledig luchtdicht / Fully airtight' : 'Fully airtight' }
        ]
      }
    ]
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
    <section id={language === 'nl' ? 'oplossingen' : 'solutions'} className="py-20 relative scroll-mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">{content.subheadline}</p>
        </div>

        {/* Construction Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#90dc35]"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.methods.panelized.name}</h3>
            <p className="text-gray-600 leading-relaxed">{content.methods.panelized.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#90dc35]"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.methods.modular.name}</h3>
            <p className="text-gray-600 leading-relaxed">{content.methods.modular.desc}</p>
          </motion.div>
        </div>

        {/* Solution Tiers */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {content.tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-lg font-semibold text-[#90dc35] mb-2">{tier.price}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-[#90dc35] transition-transform ml-4 flex-shrink-0 ${
                      expandedTier === tier.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedTier === tier.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    {/* Image */}
                    <div className="px-6 md:px-8 pt-6">
                      <img
                        src={tier.image}
                        alt={tier.name}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                      />
                    </div>

                    {/* Specifications */}
                    <div className="px-6 md:px-8 pb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">
                        {language === 'nl' ? 'Technische Specificaties' : 'Technical Specifications'}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {tier.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#90dc35] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-gray-900">{spec.label}</p>
                              <p className="text-sm text-gray-600">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={scrollToContact}
                        className="w-full bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] h-12 text-base font-semibold"
                      >
                        {language === 'nl' ? 'Request an intro call' : 'Request an intro call'}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {language === 'nl'
              ? 'Wil je meer weten over onze technische oplossingen?'
              : 'Want to learn more about our technical solutions?'}
          </p>
          <Button
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] text-lg font-bold rounded-lg"
          >
            {language === 'nl' ? 'Neem contact op' : 'Get in touch'}
          </Button>
        </div>
      </div>
    </section>
  );
}
