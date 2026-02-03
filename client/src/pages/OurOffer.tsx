import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { ArrowLeft, Check, Factory, Zap, Leaf, Shield, Clock, Building2, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import RollingGallery from '@/components/RollingGallery';

export default function OurOffer() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const [expandedSection, setExpandedSection] = useState<string>('intro');

  const content = {
    backHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    
    // SECTION 1: Intro
    intro: {
      titleNl: 'Wat Wij Aanbieden',
      titleEn: 'What We Offer',
      subtitleNl: 'Hoogperformante Geprefabriceerde Timmerhuizen voor Nederland',
      subtitleEn: 'High-Performance Prefabricated Timber Homes for the Netherlands',
      descNl: 'Groenvastbouw levert hoogperformante geprefabriceerde timmerhuizen in samenwerking met Senmar, Portugal, met behulp van een geavanceerd CNC-prefabricatiesysteem, speciaal ontworpen voor het Nederlandse klimaat, Nederlandse bouwregels en Passieve energiestandaarden.',
      descEn: 'Groenvastbouw delivers high-performance prefabricated timber homes in partnership with Senmar, Portugal, using an advanced CNC-prefabrication system, specifically designed for the Dutch climate, Dutch building regulations, and Passive energy standards.',
      featuresNl: [
        'Duurzame geprefabriceerde timmerconstructie (C24)',
        'Passief-klare isolatie en luchtdichtheid',
        'CNC-precisie ±1mm tolerantie',
        'Bijna nul-afval productie',
        'Ontworpen voor Nederlands klimaat en energiewetten (BENG/Bouwbesluit/EPC)',
        'Sneller, schoner en voorspelbaar bouwen'
      ],
      featuresEn: [
        'Sustainable prefabricated timber construction (C24)',
        'Passive-ready insulation and airtightness',
        'CNC precision ±1mm tolerance',
        'Near zero-waste production',
        'Designed for Dutch climate and energy laws (BENG/Bouwbesluit/EPC)',
        'Faster, cleaner, and predictable construction'
      ]
    },

    // SECTION 2: How We Do It
    method: {
      titleNl: 'Hoe We Het Doen',
      titleEn: 'How We Do It',
      subtitleNl: 'Vier Fasen: Ontwerp → Productie → Transport → Montage',
      subtitleEn: 'Four Phases: Design → Production → Transport → Assembly',
      phasesNl: [
        {
          title: 'Fase 1: CNC Prefabricage (Portugal)',
          items: [
            'CNC gesneden C24 Nordic Pine hout',
            'Tolerantie ±1mm voor architecturale nauwkeurigheid',
            'Bijna nul-afval via geoptimaliseerde nesting-algoritmen',
            'Buitenwanden, binnenwanden, vloeren, dakstructuur',
            'Minerale wol isolatie (Optimal/Passive/Super Passive)',
            'Lucht- en dampmembranen',
            'Buitenbekleding (hout of vezelcement)',
            'Dakwaterdichting (PVC/EPDM) of pannen-klaar',
            'Optionele badkamermodules (volledig afgewerkt)',
            'Optionele keukenmodules',
            'Warmwatervoorziening (indien modulair)',
            'Voorbereiding ventilatie (VMC of decentraal)'
          ]
        },
        {
          title: 'Fase 2: Transport & Montage (Nederland)',
          items: [
            'Transport per TIR-vrachtwagen',
            'Kraanwerk ter plaatse',
            'Assemblage tot waterdicht casco',
            'Montage doorgaans in 1–3 weken',
            'Montage-crew: 3–4 gespecialiseerde installers'
          ]
        },
        {
          title: 'Fase 3: Installaties & Afwerking (Nederland)',
          items: [
            'Ramen worden altijd ter plaatse gemonteerd',
            'Elektriciteit en water aansluitingen',
            'Warmtepomp of HVAC-systeem',
            'Ventilatie (VMC of decentraal)',
            'Binnenafwerking',
            'Eindcontrole en oplevering met documentatie'
          ]
        }
      ],
      phasesEn: [
        {
          title: 'Phase 1: CNC Prefabrication (Portugal)',
          items: [
            'CNC-cut C24 Nordic Pine timber',
            'Tolerance ±1mm for architectural accuracy',
            'Near zero-waste via optimized nesting algorithms',
            'Exterior walls, interior partitions, floors, roof structure',
            'Mineral wool insulation (Optimal/Passive/Super Passive)',
            'Air and vapor membranes',
            'Exterior cladding (timber or fiber cement)',
            'Roof waterproofing (PVC/EPDM) or tile-ready',
            'Optional finished bathroom modules',
            'Optional kitchen modules',
            'Hot water provision (if modular)',
            'Ventilation preparation (VMC or decentralized)'
          ]
        },
        {
          title: 'Phase 2: Transport & Assembly (Netherlands)',
          items: [
            'Transport by TIR truck',
            'Crane work on-site',
            'Assembly to weathertight shell',
            'Assembly typically in 1–3 weeks',
            'Assembly crew: 3–4 specialized installers'
          ]
        },
        {
          title: 'Phase 3: Installations & Finishing (Netherlands)',
          items: [
            'Windows always installed on-site',
            'Electrical and water connections',
            'Heat pump or HVAC system',
            'Ventilation (VMC or decentralized)',
            'Interior finishing',
            'Final inspection and handover with documentation'
          ]
        }
      ]
    },

    // SECTION 3: What's Included
    scope: {
      titleNl: 'Wat Komt Klaar Voor Je?',
      titleEn: 'What Comes Ready For You?',
      introNl: 'Afhankelijk van je bestelling. Bij onze prefab modellen en bij bestellingen van meerdere identieke gebouwen kunnen we het volgende includeren:',
      introEn: 'Depending on your order. With our prefab models and when ordering multiple identical buildings, we can include:',
      factoryNl: 'In de Fabriek Voorbereide Componenten',
      factoryEn: 'Factory-Prepared Components',
      factoryItemsNl: [
        'Binnenwanden',
        'Luchtdichte en dampremmende membranen',
        'Buitenbekleding (hout of vezelcement)',
        'Dakwaterdichting (PVC of pannen-klaar)',
        'Afgewerkte badkamermodule',
        'Afgewerkte en uitgeruste keukenmodule',
        'Elektriciteit en verlichting',
        'Warmwatervoorziening (bij modulaire levering)'
      ],
      factoryItemsEn: [
        'Interior partitions',
        'Airtight and vapor barrier membranes',
        'Exterior cladding (timber or fiber cement)',
        'Roof waterproofing (PVC or tile-ready)',
        'Finished bathroom module',
        'Finished equipped kitchen module',
        'Electricity and lighting',
        'Hot water provision (with modular delivery)'
      ],
      onsiteNl: 'Ter Plaatse in Nederland',
      onsiteEn: 'On-Site in the Netherlands',
      onsiteItemsNl: [
        'Fundering en grondwerk',
        'Kraan en assemblage',
        'Ramen altijd op locatie gemonteerd',
        'Aansluitingen water, riool en elektra',
        'Warmtepomp of HVAC-systeem'
      ],
      onsiteItemsEn: [
        'Foundation and groundwork',
        'Crane and assembly',
        'Windows always installed on-site',
        'Water, sewer and electrical connections',
        'Heat pump or HVAC system'
      ]
    },

    // SECTION 4: Timeline
    timeline: {
      titleNl: 'Hoe Lang Duurt Het?',
      titleEn: 'How Long Does It Take?',
      phasesNl: [
        { phase: 'Ontwerp & Vergunning', duration: '± 4–8 weken' },
        { phase: 'CNC Productie', duration: '± 6–8 weken' },
        { phase: 'Transport', duration: '± 1 week' },
        { phase: 'Montage', duration: '± 1–3 weken' }
      ],
      phasesEn: [
        { phase: 'Design & Permits', duration: '± 4–8 weeks' },
        { phase: 'CNC Production', duration: '± 6–8 weeks' },
        { phase: 'Transport', duration: '± 1 week' },
        { phase: 'Assembly', duration: '± 1–3 weeks' }
      ],
      totalNl: 'Totale tijd van bestelling tot gemonteerd casco: ca. 3 maanden',
      totalEn: 'Total time from order to mounted structure: approx. 3 months',
      noteNl: 'Na montage worden ramen, installaties en binnenafwerkingen uitgevoerd ter plaatse.',
      noteEn: 'After assembly, windows, installations and interior finishing are completed on-site.'
    },

    // SECTION 5: Technology & Energy
    technology: {
      titleNl: 'Technologie, Energie & Comfort',
      titleEn: 'Technology, Energy & Comfort',
      itemsNl: [
        'CNC-productie met ±1mm precisie voor architecturale nauwkeurigheid',
        'Gesloten-lus fabriek met minimale fouten',
        'Passief-klaar met geavanceerde isolatie',
        'Luchtdichte bouwschil voor maximale efficiëntie',
        'Triple glas (PVC-ramen, Aluplast Ideal 7000)',
        'Lagere energievraag voor verwarmen en koelen',
        'Akoestische isolatie en comfort binnen',
        'CO₂-reductie (materiaal + operationeel verbruik)',
        'Minder bouwafval (bijna nul-afval)',
        'Lokaal vervaardigde minerale wol isolatie: Optimal (R 5.7), Passive (R 8.5–9.9), Super Passive (R 11.4)'
      ],
      itemsEn: [
        'CNC production with ±1mm precision for architectural accuracy',
        'Closed-loop factory with minimal errors',
        'Passive-ready with advanced insulation',
        'Airtight building envelope for maximum efficiency',
        'Triple glazing (PVC windows, Aluplast Ideal 7000)',
        'Lower energy demand for heating and cooling',
        'Acoustic insulation and indoor comfort',
        'CO₂ reduction (material + operational consumption)',
        'Reduced construction waste (near zero-waste)',
        'Locally manufactured mineral wool insulation: Optimal (R 5.7), Passive (R 8.5–9.9), Super Passive (R 11.4)'
      ]
    },

    // SECTION 6: Use Cases
    usecases: {
      titleNl: 'Geschikt Voor',
      titleEn: 'Suitable For',
      itemsNl: [
        'Particulieren op bouwkavel',
        'CPO-groepen (5–20 huishoudens)',
        'Projectontwikkelaars',
        'Zorg- en seniorenhuisvesting',
        'Recreatie- en vakantieparken',
        'Woningcorporaties (sociale woningbouw)',
        'Scholen en onderwijsgebouwen',
        'Kantoor- en werkruimten'
      ],
      itemsEn: [
        'Individual homeowners on building plots',
        'CPO groups (5–20 households)',
        'Property developers',
        'Care and senior housing',
        'Recreation and holiday parks',
        'Housing associations (social housing)',
        'Schools and educational buildings',
        'Office and workspace buildings'
      ]
    },

    // SECTION 7: Compliance
    compliance: {
      titleNl: 'Naleving & Normen',
      titleEn: 'Compliance & Standards',
      itemsNl: [
        'BENG-verplichting (Bijna Energie Neutraal)',
        'Bouwbesluit compliance',
        'EPC-waarden en energieprestatie',
        'Eurocodes voor structurele veiligheid',
        'CE-markering van materialen',
        'Isolatiewaarden volgens NEN-normen',
        'Brandveiligheid via gips en membranen',
        'Geluidsnormen (akoestische isolatie)',
        'Ventilatienormen (CO₂-controle)',
        'Geschikt voor Nederlands klimaat'
      ],
      itemsEn: [
        'BENG compliance (Nearly Energy Neutral Building)',
        'Building code compliance',
        'EPC values and energy performance',
        'Eurocodes for structural safety',
        'CE-marking of materials',
        'Insulation values per NEN standards',
        'Fire safety via gypsum and membranes',
        'Acoustic standards (sound insulation)',
        'Ventilation standards (CO₂ control)',
        'Suitable for Dutch climate'
      ]
    },

    // SECTION 8: Warranty
    warranty: {
      titleNl: 'Garantie & Betrouwbaarheid',
      titleEn: 'Warranty & Reliability',
      itemsNl: [
        'Constructiegarantie: 10 jaar',
        'Componenten (ramen, dak, installaties): 4–6 jaar',
        'Ondersteuning bij oplevering',
        'Volledige documentatie en gebruikshandleidingen',
        'Responstijd: ca. 1 week'
      ],
      itemsEn: [
        'Structural warranty: 10 years',
        'Components (windows, roof, installations): 4–6 years',
        'Support at handover',
        'Complete documentation and user manuals',
        'Response time: approx. 1 week'
      ]
    },



    // CTA
    cta: {
      titleNl: 'Klaar om Te Beginnen?',
      titleEn: 'Ready to Get Started?',
      descNl: 'Benieuwd of jouw kavel of project geschikt is? Neem contact op voor een vrijblijvende verkenning.',
      descEn: 'Curious if your plot or project is suitable? Contact us for a no-obligation exploration.',
      buttonNl: 'Neem Contact Op',
      buttonEn: 'Get in Touch'
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative text-foreground py-16 md:py-24 mt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/passief-huis-zonnepanelen-buitenkant.png)' }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a3439]/95 to-[#1a1f24]/90" />
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8edb38] hover:text-[#8edb38] font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {content.backHome}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'nl' ? content.intro.titleNl : content.intro.titleEn}
          </h1>
          <p className="text-xl text-[#2a3439] max-w-2xl">
            {language === 'nl' ? content.intro.subtitleNl : content.intro.subtitleEn}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/moderne-woonkamer-open-keuken-passief-huis.png)' }}
        />
        {/* Dark Background */}
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <p className="text-lg text-[#2a3439] mb-8 leading-relaxed">
            {language === 'nl' ? (
              <>
                <button 
                  onClick={openModal}
                  className="text-[#8edb38] hover:text-[#8edb38] font-semibold underline decoration-[#8edb38] underline-offset-2 transition-colors cursor-pointer"
                >
                  Groenvastbouw
                </button>
                {' '}levert hoogperformante geprefabriceerde timmerhuizen in samenwerking met{' '}
                <a 
                  href="https://www.senmar.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8edb38] hover:text-[#8edb38] font-semibold underline decoration-[#8edb38] underline-offset-2 transition-colors"
                >
                  Senmar
                </a>
                , Portugal, met behulp van een geavanceerd CNC-prefabricatiesysteem, speciaal ontworpen voor het Nederlandse klimaat, Nederlandse bouwregels en Passieve energiestandaarden.
              </>
            ) : (
              <>
                <button 
                  onClick={openModal}
                  className="text-[#8edb38] hover:text-[#8edb38] font-semibold underline decoration-[#8edb38] underline-offset-2 transition-colors cursor-pointer"
                >
                  Groenvastbouw
                </button>
                {' '}delivers high-performance prefabricated timber homes in partnership with{' '}
                <a 
                  href="https://www.senmar.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8edb38] hover:text-[#8edb38] font-semibold underline decoration-[#8edb38] underline-offset-2 transition-colors"
                >
                  Senmar
                </a>
                , Portugal, using an advanced CNC-prefabrication system, specifically designed for the Dutch climate, Dutch building regulations, and Passive energy standards.
              </>
            )}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {(language === 'nl' ? content.intro.featuresNl : content.intro.featuresEn).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-[#dcdcdc] hover:border-[#8edb38] transition-colors">
                <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                <span className="text-[#2a3439]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How We Do It */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/houten-frame-constructie-kraan.jpg)' }}
        />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'nl' ? content.method.titleNl : content.method.titleEn}
          </h2>
          <p className="text-lg text-[#2a3439] mb-12">
            {language === 'nl' ? content.method.subtitleNl : content.method.subtitleEn}
          </p>
          
          <div className="space-y-4">
            {(language === 'nl' ? content.method.phasesNl : content.method.phasesEn).map((phase, idx) => (
              <div key={idx} className="border-2 border-[#dcdcdc] rounded-lg overflow-hidden hover:border-[#8edb38] transition-colors">
                <button
                  onClick={() => toggleSection(`phase-${idx}`)}
                  className="w-full p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 flex items-center justify-between text-left">
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#8edb38] transition-transform ${expandedSection === `phase-${idx}` ? 'rotate-180' : ''}`} />
                </button>
                
                {expandedSection === `phase-${idx}` && (
                  <div className="bg-card/30 backdrop-blur-sm p-6 border-t-2 border-[#dcdcdc]">
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-[#2a3439]">
                          <span className="w-2 h-2 rounded-full bg-[#8edb38] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Production Process Gallery 1 */}
          <div className="mt-12">
            <RollingGallery
              images={[
                { src: '/fabriek-productie-houten-wanden-assemblage.jpg', alt: 'Fabriek productie - houten wanden assemblage' },
                { src: '/fabriek-productie-prefab-wand-constructie.jpg', alt: 'Fabriek productie - prefab wand constructie' },
                { src: '/fabriek-productie-houten-frame-detail.jpg', alt: 'Fabriek productie - houten frame detail' },
              ]}
              speed={30}
              height="300px"
            />
          </div>
        </div>
      </section>

      {/* Scope of Delivery */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/bouwplaats-montage-houten-frame.jpg)' }}
        />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'nl' ? content.scope.titleNl : content.scope.titleEn}
          </h2>
          <p className="text-lg text-[#2a3439] mb-12">
            {language === 'nl' ? content.scope.introNl : content.scope.introEn}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Factory */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-[#8edb38]">
                {language === 'nl' ? content.scope.factoryNl : content.scope.factoryEn}
              </h3>
              <ul className="space-y-3">
                {(language === 'nl' ? content.scope.factoryItemsNl : content.scope.factoryItemsEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                    <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* On-Site */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-[#8edb38]">
                {language === 'nl' ? content.scope.onsiteNl : content.scope.onsiteEn}
              </h3>
              <ul className="space-y-3">
                {(language === 'nl' ? content.scope.onsiteItemsNl : content.scope.onsiteItemsEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                    <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Production Process Gallery 2 */}
          <div className="mt-12">
            <RollingGallery
              images={[
                { src: '/fabriek-productie-wand-isolatie-plaatsing.jpg', alt: 'Fabriek productie - wand isolatie plaatsing' },
                { src: '/fabriek-productie-houten-structuur-montage.jpg', alt: 'Fabriek productie - houten structuur montage' },
                { src: '/fabriek-productie-prefab-panelen-opslag.jpg', alt: 'Fabriek productie - prefab panelen opslag' },
                { src: '/fabriek-productie-houten-balken-bewerking.jpg', alt: 'Fabriek productie - houten balken bewerking' },
              ]}
              speed={30}
              height="300px"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/dakconstructie-houten-balken-detail.jpg)' }} />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            {language === 'nl' ? content.timeline.titleNl : content.timeline.titleEn}
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border-2 border-[#8edb38] mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {(language === 'nl' ? content.timeline.phasesNl : content.timeline.phasesEn).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-[#2a3439]/50 rounded-lg border border-[#dcdcdc]">
                  <span className="font-semibold text-foreground">{item.phase}</span>
                  <span className="text-[#8edb38] font-bold">{item.duration}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#2a3439]/50 p-6 rounded-lg border-2 border-[#8edb38]">
              <p className="text-lg font-bold text-foreground mb-4">
                {language === 'nl' ? content.timeline.totalNl : content.timeline.totalEn}
              </p>
              <p className="text-[#2a3439]">
                {language === 'nl' ? content.timeline.noteNl : content.timeline.noteEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/passief-huis-interieur-houten-balken.jpg)' }} />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            {language === 'nl' ? content.technology.titleNl : content.technology.titleEn}
          </h2>
          
          <div className="space-y-3">
            {(language === 'nl' ? content.technology.itemsNl : content.technology.itemsEn).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-[#dcdcdc] hover:border-[#8edb38] transition-colors">
                <span className="text-[#8edb38] font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-[#2a3439]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/moderne-badkamer-passief-huis.png)' }} />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            {language === 'nl' ? content.usecases.titleNl : content.usecases.titleEn}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {(language === 'nl' ? content.usecases.itemsNl : content.usecases.itemsEn).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-[#8edb38]">
                <Building2 className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                <span className="text-[#2a3439]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/prefab-wand-plaatsing-bouwplaats.jpg)' }} />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            {language === 'nl' ? content.compliance.titleNl : content.compliance.titleEn}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {(language === 'nl' ? content.compliance.itemsNl : content.compliance.itemsEn).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-[#dcdcdc] hover:border-[#8edb38] transition-colors">
                <Shield className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                <span className="text-[#2a3439]">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Production Process Gallery 3 */}
          <div className="mt-12">
            <RollingGallery
              images={[
                { src: '/fabriek-productie-wand-assemblage-lijn.jpg', alt: 'Fabriek productie - wand assemblage lijn' },
                { src: '/fabriek-productie-prefab-module-constructie.jpg', alt: 'Fabriek productie - prefab module constructie' },
                { src: '/fabriek-productie-houten-frame-assemblage.jpg', alt: 'Fabriek productie - houten frame assemblage' },
              ]}
              speed={30}
              height="300px"
            />
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/houten-balk-plaatsing-kraan.jpg)' }} />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            {language === 'nl' ? content.warranty.titleNl : content.warranty.titleEn}
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border-2 border-[#8edb38]">
            <ul className="space-y-4">
              {(language === 'nl' ? content.warranty.itemsNl : content.warranty.itemsEn).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                  <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#8edb38] to-[#8edb38]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2a3439] mb-6">
            {language === 'nl' ? content.cta.titleNl : content.cta.titleEn}
          </h2>
          <p className="text-[#2a3439] text-lg mb-8">
            {language === 'nl' ? content.cta.descNl : content.cta.descEn}
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-[#2a3439] hover:bg-background text-[#8edb38] font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg"
          >
            {language === 'nl' ? content.cta.buttonNl : content.cta.buttonEn}
          </button>
        </div>
      </section>
    </div>
  );
}
