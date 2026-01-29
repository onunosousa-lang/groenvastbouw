import { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';

export default function Solutions() {
  const { language } = useLanguage();
  const [expandedTier, setExpandedTier] = useState<string>('optimal');

  const tiers = [
    {
      id: 'basic',
      titleNl: 'Basis Structuur',
      titleEn: 'Basic Structure',
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2a3439] to-[#1a1f24] text-foreground py-16 md:py-24 mt-20">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8eb564] hover:text-[#8eb564] font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'nl' ? 'Technische Oplossingen' : 'Technical Solutions'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {language === 'nl'
              ? 'Vier presets ontworpen voor verschillende behoeften. Kies het isolatieniveau dat bij jouw wensen past.'
              : 'Four presets designed for different needs. Choose the insulation level that fits your requirements.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Accordion Tiers */}
          <div className="max-w-4xl mx-auto space-y-3">
            {tiers.map((tier) => (
              <div key={tier.id}>
                <button
                  onClick={() => toggleTier(tier.id)}
                  className="w-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#8eb564] transition-all duration-300 text-left group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#2a3439] mb-2 group-hover:text-[#8eb564] transition-colors">
                        {language === 'nl' ? tier.titleNl : tier.titleEn}
                      </h3>
                      <p className="text-lg font-semibold text-[#8eb564]">
                        {language === 'nl' ? tier.priceNl : tier.priceEn}
                      </p>
                    </div>
                    <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${expandedTier === tier.id ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-6 h-6 text-[#8eb564]" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedTier === tier.id && (
                  <div className="bg-gradient-to-br from-[#f0f7e8] to-white border-2 border-t-0 border-gray-200 rounded-b-lg p-8 space-y-6">
                    {/* Description */}
                    <p className="text-[#2a3439] text-lg leading-relaxed">
                      {language === 'nl' ? tier.descNl : tier.descEn}
                    </p>

                    {/* Specifications */}
                    <div>
                      <h4 className="font-bold text-[#2a3439] mb-4 text-lg">
                        {language === 'nl' ? 'Kenmerken:' : 'Features:'}
                      </h4>
                      <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(language === 'nl' ? tier.specsNl : tier.specsEn).map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                            <span className="mt-1.5 w-3 h-3 rounded-full bg-[#8eb564] flex-shrink-0" />
                            <span className="font-medium">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="/#contact" className="inline-block bg-[#8eb564] hover:bg-[#8eb564] text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-center">
                        {language === 'nl' ? 'Aanvraag indienen' : 'Submit Request'}
                      </a>
                      <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-[#8eb564] text-[#8eb564] hover:bg-[#8eb564] hover:text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-center">
                        {language === 'nl' ? 'Bekijk op Senmar.pt' : 'View on Senmar.pt'}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 max-w-4xl mx-auto p-8 bg-gradient-to-br from-[#f0f7e8] to-white rounded-lg border-2 border-[#8eb564] shadow-lg">
            <h3 className="text-2xl font-bold text-[#2a3439] mb-4">
              {language === 'nl' ? 'Informatie over prijzen' : 'Pricing Information'}
            </h3>
            <p className="text-[#2a3439] leading-relaxed mb-4">
              {language === 'nl'
                ? 'Alle prijzen zijn startprijzen voor de basisstructuur, exclusief transport en BTW. Turn-key oplevering inclusief fundering, afwerking en installaties is beschikbaar.'
                : 'All prices are starting prices for the basic structure, excluding transport and VAT. Turn-key delivery including foundation, finishing, and installations is available.'}
            </p>
            <p className="text-[#2a3439] leading-relaxed">
              {language === 'nl'
                ? 'Neem contact met ons op voor een gedetailleerde offerte op maat voor uw project.'
                : 'Contact us for a detailed custom quote for your project.'}
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-[#2a3439] mb-6">
              {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
            </h3>
            <a href="/#contact" className="inline-block bg-[#8eb564] hover:bg-[#8eb564] text-[#2a3439] font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg">
              {language === 'nl' ? 'Plan een gratis consult' : 'Schedule a Free Consultation'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
