import { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';

export default function OurTechnology() {
  const { language } = useLanguage();
  const [expandedTier, setExpandedTier] = useState<string>('optimal');

  const tiers = [
    {
      id: 'basic',
      titleNl: 'Basis Structuur',
      titleEn: 'Basic Structure',
      descNl: 'Onze basis preset levert een fundamentele oplossing voor het bouwframe, waarmee je een geprefabriceerde structuur krijgt die je vervolgens kunt aanpassen en afmaken. Het is een geweldige keuze voor degenen die kosten willen besparen en die de expertise hebben om de constructie zelf af te maken.',
      descEn: 'Our basic preset delivers a foundational solution for the building frame, giving you a prefabricated structure that you can then customize and complete. It\'s a great choice for those looking to reduce costs and who have the expertise to complete the construction themselves.',
      componentsNl: [
        'Externe OSB plaat (12mm)',
        'Houten framestructuur (195x45mm)',
        'Joist beam (390x45mm)',
        'Dakconstructie met purlins'
      ],
      componentsEn: [
        'External OSB plate (12mm)',
        'Timber frame structure (195x45mm)',
        'Joist beam (390x45mm)',
        'Roof construction with purlins'
      ]
    },
    {
      id: 'optimal',
      titleNl: 'Optimale Structuur',
      titleEn: 'Optimal Structure',
      descNl: 'De optimale preset is ontworpen voor gematigde klimaten, met een bouwframe dat 200 millimeter isolatie en een interne dampremmende laag bevat. Deze opstelling garandeert een comfortabel microklimaat en ondersteunt de structurele integriteit en levensduur van het gebouw. Deze oplossing is perfect voor comfortabel wonen het hele jaar door in regio\'s met milde winteromstandigheden.',
      descEn: 'The optimal preset is designed for moderate climates, with a building frame that includes 200 millimeters of insulation and an internal vapor barrier. This setup guarantees a comfortable microclimate and supports the structural integrity and longevity of the building. This solution is perfect for comfortable year-round living in regions with mild winter conditions.',
      componentsNl: [
        'Zachte minerale wol isolatie (200mm)',
        'U-waarde = 0.035 W/mK',
        'Dampremmende membraan',
        'Interne en externe OSB platen',
        'Volledige vloer- en dakconstructie'
      ],
      componentsEn: [
        'Soft mineral wool insulation (200mm)',
        'U-value = 0.035 W/mK',
        'Vapor barrier membrane',
        'Internal and external OSB plates',
        'Complete floor and roof construction'
      ]
    },
    {
      id: 'passive',
      titleNl: 'Passieve Structuur',
      titleEn: 'Passive Structure',
      descNl: 'Deze preset bevat aanvullende externe isolatie voor het bouwframe, met dikte aangepast aan lokale klimaatomstandigheden. Het primaire voordeel van deze oplossing is verbeterde thermische bescherming, wat resulteert in een koeler huis in de zomer en verminderd energieverbruik voor verwarming in de winter. Over het volgende decennium zal deze passieve isolatie leiden tot aanzienlijke besparingen op zowel verwarmings- als koelkosten. Deze oplossing is zeer geschikt voor regio\'s met strenge winters en zeer hete klimaten.',
      descEn: 'This preset features additional external insulation for the building frame, with thickness adjusted according to local climate conditions. The primary benefit of this solution is enhanced thermal protection, resulting in a cooler home during the summer and reduced energy consumption for heating in the winter. Over the next decade, this passive insulation will lead to substantial savings on both heating and cooling costs. This solution is well-suited for regions with harsh winters as well as very hot climates.',
      componentsNl: [
        'Harde minerale wol externe isolatie',
        'Zachte minerale wol (200mm)',
        'Verticale houten latten (120x45mm)',
        'Dampremmende membraan',
        'Verbeterde thermische bescherming'
      ],
      componentsEn: [
        'Hard mineral wool external insulation',
        'Soft mineral wool (200mm)',
        'Vertical timber battens (120x45mm)',
        'Vapor barrier membrane',
        'Enhanced thermal protection'
      ]
    },
    {
      id: 'superpassive',
      titleNl: 'Super Passieve Structuur',
      titleEn: 'Super Passive Structure',
      descNl: 'Onze SuperPassive Preset voldoet aan Passivhaus-normen en biedt een uitzonderlijke oplossing voor energiezuinige, comfortabele huizen. Deze geprefabriceerde presets beschikken over geavanceerde isolatie die het hele jaar door een stabiele interne temperatuur handhaaft, waardoor het energieverbruik met tot 75% wordt verminderd in vergelijking met standaardbouw. Dit voorkomt ook tocht, koude plekken, schimmel en condensatie, wat een gezondere leefomgeving bevordert. Ontworpen met een "fabric first"-benadering en ondersteund door uitgebreid onderzoek, leveren onze SuperPassive muren blijvende kwaliteit en prestaties voor zowel comfort als duurzaamheid.',
      descEn: 'Our SuperPassive Preset meets Passivhaus standards, providing an exceptional solution for energy-efficient, comfortable homes. These prefab preset feature advanced insulation that maintains a steady internal temperature year-round, reducing energy use by up to 75% compared to standard builds. That also prevents draughts, cold spots, mold, and condensation, promoting a healthier living environment. Designed with a "fabric first" approach and backed by extensive research, our SuperPassive walls deliver lasting quality and performance for both comfort and sustainability.',
      componentsNl: [
        'Maximale isolatie (400mm+)',
        'Passivhaus certificering',
        'Interne en externe isolatie',
        'Geavanceerde dampremmende systemen',
        'Optimale luchtdichtheid'
      ],
      componentsEn: [
        'Maximum insulation (400mm+)',
        'Passivhaus certification',
        'Internal and external insulation',
        'Advanced vapor barrier systems',
        'Optimal airtightness'
      ]
    }
  ];

  const constructionMethods = [
    {
      titleNl: 'Gepaneliseerde Constructie',
      titleEn: 'Panelized Construction',
      descNl: 'Bij deze methode worden gebouwen geconstrueerd met behulp van vooraf vervaardigde wanden en panelen, die in een gecontroleerde omgeving off-site worden gefabriceerd. Deze panelen worden vervolgens naar de bouwplaats getransporteerd en als bouwstenen in elkaar gezet, wat snellere bouwtijden, verbeterde kwaliteitscontrole en minder afval mogelijk maakt.',
      descEn: 'In this method, buildings are constructed using pre-manufactured walls and panels, which are fabricated off-site in a controlled environment. These panels are then transported to the construction site and assembled like building blocks, allowing for faster construction times, improved quality control, and reduced waste.'
    },
    {
      titleNl: 'Modulaire Constructie',
      titleEn: 'Modular Construction',
      descNl: 'Deze benadering gaat geprefabricatie een stap verder door volledige secties of modules van een gebouw off-site te creëren. Deze modules, die volledige kamers of secties van een structuur kunnen bevatten, zijn volledig uitgerust met elektriciteit, leidingwerk en binnenafwerking voordat ze naar de plaats worden vervoerd. Eenmaal ter plaatse worden de modules als grote puzzelstukken in elkaar gezet, wat resulteert in een volledig geïntegreerd gebouw.',
      descEn: 'This approach takes prefabrication a step further by creating entire sections or modules of a building off-site. These modules, which can include entire rooms or sections of a structure, are fully outfitted with electrical, plumbing, and interior finishes before being transported to the site. Once on-site, the modules are assembled like large-scale puzzle pieces, resulting in a fully integrated building.'
    }
  ];

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? '' : tierId);
  };

  return (
    <div className="min-h-screen bg-[#dcdcdc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2a3439] to-[#1a1f24] text-foreground py-16 md:py-24 mt-20">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8eb564] hover:text-[#8eb564] font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'nl' ? 'Onze Technologie' : 'Our Technology'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {language === 'nl'
              ? 'Vier technische presets ontworpen voor verschillende klimaten en behoeften. Kies het isolatieniveau dat bij jouw project past.'
              : 'Four technical presets designed for different climates and needs. Choose the insulation level that fits your project.'}
          </p>
        </div>
      </section>

      {/* Construction Methods */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2a3439] mb-12 text-center">
            {language === 'nl' ? 'Onze Constructiemethoden' : 'Our Construction Methods'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {constructionMethods.map((method, idx) => (
              <div key={idx} className="bg-[#dcdcdc] rounded-lg border-2 border-gray-200 p-8 hover:border-[#8eb564] transition-colors">
                <h3 className="text-2xl font-bold text-[#2a3439] mb-4 text-[#8eb564]">
                  {language === 'nl' ? method.titleNl : method.titleEn}
                </h3>
                <p className="text-[#2a3439] leading-relaxed">
                  {language === 'nl' ? method.descNl : method.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tiers */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2a3439] mb-12 text-center">
            {language === 'nl' ? 'Onze Technische Presets' : 'Our Technical Presets'}
          </h2>

          <div className="max-w-4xl mx-auto space-y-3">
            {tiers.map((tier) => (
              <div key={tier.id}>
                <button
                  onClick={() => toggleTier(tier.id)}
                  className="w-full bg-[#dcdcdc] border-2 border-gray-200 rounded-lg p-6 hover:border-[#8eb564] transition-all duration-300 text-left group shadow-sm hover:shadow-md"
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

                    {/* Components */}
                    <div>
                      <h4 className="font-bold text-[#2a3439] mb-4 text-lg">
                        {language === 'nl' ? 'Componenten:' : 'Components:'}
                      </h4>
                      <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(language === 'nl' ? tier.componentsNl : tier.componentsEn).map((comp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                            <span className="mt-1.5 w-3 h-3 rounded-full bg-[#8eb564] flex-shrink-0" />
                            <span className="font-medium">{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="/#contact" className="inline-block bg-[#8eb564] hover:bg-[#8eb564] text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-center">
                        {language === 'nl' ? 'Offerte aanvragen' : 'Request Quote'}
                      </a>
                      <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-[#8eb564] text-[#8eb564] hover:bg-[#8eb564] hover:text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-center">
                        {language === 'nl' ? 'Meer info op Senmar' : 'More info on Senmar'}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#8eb564] to-[#8eb564]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2a3439] mb-6">
            {language === 'nl' ? 'Klaar om uw project te starten?' : 'Ready to start your project?'}
          </h2>
          <p className="text-[#2a3439] text-lg mb-8 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'Neem contact met ons op voor een gratis consult en ontdek welke technische preset het beste bij uw behoeften past.'
              : 'Contact us for a free consultation and discover which technical preset best fits your needs.'}
          </p>
          <a href="/#contact" className="inline-block bg-[#2a3439] hover:bg-background text-[#8eb564] font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg">
            {language === 'nl' ? 'Neem contact op' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}
