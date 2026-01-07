import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechnicalSolutions() {
  const { language } = useLanguage();
  const [expandedTier, setExpandedTier] = useState<string>('optimal');

  const tiers = [
    {
      id: 'basic',
      titleNl: 'Basis Structuur',
      titleEn: 'Basic Structure',
      priceNl: 'Vanaf €190/m²',
      priceEn: 'Starting from €190/m²',
      descNl: 'Een fundamentele oplossing voor het bouwframe. Ideaal voor degenen die kosten willen verlagen en de expertise hebben om de constructie zelf af te maken.',
      descEn: 'A foundational solution for the building frame. Great for those looking to reduce costs and who have the expertise to complete the construction themselves.',
      specsNl: [
        'Prefab bouwframe structuur',
        'Standaard isolatie',
        'Basisafwerking',
        'Snelle levering'
      ],
      specsEn: [
        'Prefab building frame structure',
        'Standard insulation',
        'Basic finishing',
        'Fast delivery'
      ]
    },
    {
      id: 'optimal',
      titleNl: 'Optimale Structuur',
      titleEn: 'Optimal Structure',
      priceNl: 'Vanaf €270/m²',
      priceEn: 'Starting from €270/m²',
      descNl: 'Ontworpen voor gematigde klimaten met 200mm isolatie. De perfecte balans tussen efficiëntie en kostenbesparing.',
      descEn: 'Designed for moderate climates with 200mm of insulation. The perfect balance between efficiency and cost savings.',
      specsNl: [
        '200mm isolatie',
        'Interne dampremmende laag',
        'Verbeterde thermische bescherming',
        'Energiezuinig ontwerp'
      ],
      specsEn: [
        '200mm insulation',
        'Internal vapor barrier',
        'Enhanced thermal protection',
        'Energy-efficient design'
      ]
    },
    {
      id: 'passive',
      titleNl: 'Passieve Structuur',
      titleEn: 'Passive Structure',
      priceNl: 'Vanaf €320/m²',
      priceEn: 'Starting from €320/m²',
      descNl: 'Met aanvullende externe isolatie. Verbeterde thermische bescherming resulteert in veel lagere energiekosten.',
      descEn: 'With additional external insulation. Enhanced thermal protection results in significantly lower energy costs.',
      specsNl: [
        'Externe en interne isolatie',
        'Maximale thermische bescherming',
        'Passivhaus-gereed',
        '90% lagere energierekeningen'
      ],
      specsEn: [
        'External and internal insulation',
        'Maximum thermal protection',
        'Passivhaus-ready',
        '90% lower energy bills'
      ]
    },
    {
      id: 'superpassive',
      titleNl: 'Super Passieve Structuur',
      titleEn: 'Super Passive Structure',
      priceNl: 'Vanaf €400/m²',
      priceEn: 'Starting from €400/m²',
      descNl: 'Maximale isolatie voor off-grid ambities en extreme klimaten. Passivhaus gecertificeerd voor optimale prestatie.',
      descEn: 'Maximum insulation for off-grid ambitions and extreme climates. Passivhaus certified for optimal performance.',
      specsNl: [
        'Maximale isolatie (300mm+)',
        'Passivhaus certificering',
        'Off-grid gereed',
        'Minimale energiebehoefte'
      ],
      specsEn: [
        'Maximum insulation (300mm+)',
        'Passivhaus certification',
        'Off-grid ready',
        'Minimal energy requirement'
      ]
    }
  ];

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? '' : tierId);
  };

  return (
    <section id="technical-solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'nl' ? 'Technische Oplossingen' : 'Technical Solutions'}
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            {language === 'nl'
              ? 'Vier presets. Eén doel: maximale efficiëntie en kwaliteit.'
              : 'Four presets. One goal: maximum efficiency and quality.'}
          </p>
        </div>

        {/* Accordion Tiers */}
        <div className="max-w-3xl mx-auto space-y-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleTier(tier.id)}
                className="w-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#90dc35] transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#90dc35] transition-colors">
                      {language === 'nl' ? tier.titleNl : tier.titleEn}
                    </h3>
                    <p className="text-lg font-semibold text-[#90dc35]">
                      {language === 'nl' ? tier.priceNl : tier.priceEn}
                    </p>
                  </div>
                  <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${expandedTier === tier.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-[#90dc35]" />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedTier === tier.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-[#f0f7e8] to-white border-2 border-t-0 border-gray-200 rounded-b-lg p-6 space-y-4">
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">
                        {language === 'nl' ? tier.descNl : tier.descEn}
                      </p>

                      {/* Specifications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {language === 'nl' ? 'Kenmerken:' : 'Features:'}
                        </h4>
                        <ul className="space-y-2">
                          {(language === 'nl' ? tier.specsNl : tier.specsEn).map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#90dc35] flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <a href="/#contact" className="inline-block bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                          {language === 'nl' ? 'Meer informatie' : 'Learn More'}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center max-w-3xl mx-auto p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 text-sm leading-relaxed">
            {language === 'nl'
              ? 'Alle prijzen zijn startprijzen voor de basisstructuur, exclusief transport en BTW. Turn-key oplevering inclusief fundering, afwerking en installaties is beschikbaar.'
              : 'All prices are starting prices for the basic structure, excluding transport and VAT. Turn-key delivery including foundation, finishing, and installations is available.'}
          </p>
        </div>
      </div>
    </section>
  );
}
