import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function SolutionsSection() {
  const { language } = useLanguage();
  const [expandedTier, setExpandedTier] = useState<string>('basic');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const tiers = [
    {
      id: 'basic',
      nameNl: 'Basis Structuur',
      nameEn: 'Basic Structure',
      priceNl: 'Vanaf €190/m²',
      priceEn: 'Starting from €190/m²',
      descNl: 'Een fundamentele oplossing voor het bouwframe. Ideaal voor degenen die kosten willen verlagen en de expertise hebben om de constructie zelf af te maken.',
      descEn: 'A foundational solution for the building frame. Great for those looking to reduce costs and who have the expertise to complete the construction themselves.',
      image: '/images/solutions/senmar_montage(6).jpg',
      specsNl: [
        { label: 'Externe OSB plaat', value: 'OSB-3, 12mm' },
        { label: 'Houten framestructuur', value: 'C24, 195x45mm' },
        { label: 'Joistbalk', value: 'C24, 390x45mm' },
        { label: 'Dakspanten', value: 'C24, 195x45mm' }
      ],
      specsEn: [
        { label: 'External OSB plate', value: 'OSB-3, 12mm' },
        { label: 'Timber frame structure', value: 'C24, 195x45mm' },
        { label: 'Joist beam', value: 'C24, 390x45mm' },
        { label: 'Rafters', value: 'C24, 195x45mm' }
      ]
    },
    {
      id: 'optimal',
      nameNl: 'Optimale Structuur',
      nameEn: 'Optimal Structure',
      priceNl: 'Vanaf €270/m²',
      priceEn: 'Starting from €270/m²',
      descNl: 'Ontworpen voor gematigde klimaten met 200mm isolatie en interne dampremmende laag. Garandeert comfortabel microklimaat en ondersteunt structurele integriteit.',
      descEn: 'Designed for moderate climates with 200mm of insulation and internal vapor barrier. Guarantees comfortable microclimate and supports structural integrity.',
      image: '/images/solutions/senmar_montage(22).jpg',
      specsNl: [
        { label: 'Primaire isolatie', value: '200mm minerale wol' },
        { label: 'U-waarde', value: '0.035 W/mK' },
        { label: 'R-waarde', value: '5.7 W/m²K' },
        { label: 'Brandveiligheid', value: 'Klasse A' }
      ],
      specsEn: [
        { label: 'Primary insulation', value: '200mm mineral wool' },
        { label: 'U-value', value: '0.035 W/mK' },
        { label: 'R-value', value: '5.7 W/m²K' },
        { label: 'Fire safety', value: 'Class A' }
      ]
    },
    {
      id: 'passive',
      nameNl: 'Passieve Structuur',
      nameEn: 'Passive Structure',
      priceNl: 'Vanaf €320/m²',
      priceEn: 'Starting from €320/m²',
      descNl: 'Met aanvullende externe isolatie. Verbeterde thermische bescherming resulteert in lagere energiekosten.',
      descEn: 'With additional external insulation. Enhanced thermal protection results in lower energy costs.',
      image: '/images/solutions/senmar_asembly(2).jpg',
      specsNl: [
        { label: 'Externe isolatie', value: 'Harde minerale wol' },
        { label: 'Primaire isolatie', value: '200mm minerale wol' },
        { label: 'Dakisolatie', value: '400mm minerale wol' },
        { label: 'R-waarde dak', value: '11.4 W/m²K' }
      ],
      specsEn: [
        { label: 'External insulation', value: 'Hard mineral wool' },
        { label: 'Primary insulation', value: '200mm mineral wool' },
        { label: 'Roof insulation', value: '400mm mineral wool' },
        { label: 'Roof R-value', value: '11.4 W/m²K' }
      ]
    }
  ];

  return (
    <section id={language === 'nl' ? 'oplossingen' : 'solutions'} className="py-20 relative scroll-mt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'nl' ? 'Onze Technische Oplossingen' : 'Our Technical Solutions'}
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            {language === 'nl'
              ? 'Twee bouwmethoden. Vier presets. Eén doel: maximale efficiëntie en kwaliteit.'
              : 'Two construction methods. Four presets. One goal: maximum efficiency and quality.'}
          </p>
        </div>

        {/* Solution Tiers */}
        <div className="max-w-4xl mx-auto space-y-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedTier(expandedTier === tier.id ? '' : tier.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'nl' ? tier.nameNl : tier.nameEn}
                  </h3>
                  <p className="text-lg font-semibold text-[#90dc35] mb-2">
                    {language === 'nl' ? tier.priceNl : tier.priceEn}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'nl' ? tier.descNl : tier.descEn}
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#90dc35] transition-transform ml-4 flex-shrink-0 ${
                    expandedTier === tier.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedTier === tier.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  {/* Image */}
                  <img
                    src={tier.image}
                    alt={language === 'nl' ? tier.nameNl : tier.nameEn}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />

                  {/* Specifications */}
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {language === 'nl' ? 'Technische Specificaties' : 'Technical Specifications'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {(language === 'nl' ? tier.specsNl : tier.specsEn).map((spec, idx) => (
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
              )}
            </div>
          ))}
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
