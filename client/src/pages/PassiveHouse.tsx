import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import { Home, AlertTriangle, CheckCircle, Thermometer, Wind, Shield, Eye, Zap, Building2, Award, Sparkles } from 'lucide-react';

export default function PassiveHouse() {
  const { language } = useLanguage();

  const content = {
    // Hero Section
    badge: language === 'nl' ? 'Passiefhuis Uitgelegd' : 'Passive House Explained',
    title: language === 'nl' ? 'Wat Is een Passiefhuis?' : 'What Is a Passive House?',
    subtitle: language === 'nl'
      ? 'Een passiefhuis is een gebouw dat is ontworpen om zeer weinig energie nodig te hebben voor verwarming of koeling, terwijl het hele jaar door een constant, comfortabel binnenklimaat wordt behouden.'
      : 'A passive house is a building designed to need very little energy to heat or cool, while keeping a constant, comfortable indoor climate all year round.',
    intro1: language === 'nl'
      ? 'Het gaat niet om het toevoegen van meer installaties.'
      : 'It is not about adding more installations.',
    intro2: language === 'nl'
      ? 'Het gaat om het zo goed bouwen van de constructie dat het gebouw zelf het meeste werk doet.'
      : 'It is about building the structure so well that the building itself does most of the work.',
    intro3: language === 'nl'
      ? 'Een passiefhuis kan tot 90% minder verwarmingsenergie gebruiken dan een conventionele Nederlandse woning.'
      : 'A passive house can use up to 90% less heating energy than a conventional Dutch home.',

    // Problem Section
    problemTitle: language === 'nl' ? 'Het Probleem met Conventionele Bouw' : 'The Problem with Conventional Construction',
    problemSubtitle: language === 'nl' ? 'Waarom traditionele bouw tekortschiet' : 'Why traditional construction falls short',
    problemIntro: language === 'nl' ? 'In traditionele bouw:' : 'In traditional construction:',
    problemPoints: language === 'nl'
      ? [
          'Veel materialen worden op locatie samengesteld',
          'Luchtdichtheid hangt af van vakmanschap',
          'Koudebruggen zijn gebruikelijk',
          'Isolatie wordt vaak onderbroken',
          'Warmte ontsnapt door kleine bouwfouten'
        ]
      : [
          'Many materials are assembled on site',
          'Airtightness depends on workmanship',
          'Thermal bridges are common',
          'Insulation is often interrupted',
          'Heat escapes through small construction errors'
        ],
    resultIntro: language === 'nl' ? 'Dit resulteert in:' : 'This results in:',
    resultPoints: language === 'nl'
      ? [
          'Hoge energierekeningen',
          'Koude plekken en tocht',
          'Oververhitting in de zomer',
          'Gebouwen die sterk afhankelijk zijn van verwarmingssystemen'
        ]
      : [
          'High energy bills',
          'Cold spots and drafts',
          'Overheating in summer',
          'Buildings that depend heavily on heating systems'
        ],

    // Solution Section
    solutionTitle: language === 'nl' ? 'Hoe een Passiefhuis Dit Oplost' : 'How a Passive House Solves This',
    solutionSubtitle: language === 'nl' ? 'De vijf kernprincipes' : 'The five key principles',
    principles: [
      {
        title: language === 'nl' ? '1. Zeer Hoge Isolatie' : '1. Very High Insulation',
        description: language === 'nl'
          ? 'Wanden en daken bevatten veel dikkere isolatie dan standaard gebouwen, waardoor warmteverlies drastisch wordt verminderd.'
          : 'Walls and roofs contain much thicker insulation than standard buildings, drastically reducing heat loss.',
        icon: Thermometer
      },
      {
        title: language === 'nl' ? '2. Luchtdichte Constructie' : '2. Airtight Construction',
        description: language === 'nl'
          ? 'De gebouwschil wordt in fabriekscondities afgedicht met membranen, waardoor ongecontroleerde luchtlekkage wordt voorkomen.'
          : 'The building envelope is sealed with membranes in factory conditions, preventing uncontrolled air leakage.',
        icon: Shield
      },
      {
        title: language === 'nl' ? '3. Geen Koudebruggen' : '3. No Thermal Bridges',
        description: language === 'nl'
          ? 'Omdat elementen met precisie worden gemaakt, zijn er geen zwakke punten waar warmte kan ontsnappen.'
          : 'Because elements are precision-made, there are no weak points where heat can escape.',
        icon: CheckCircle
      },
      {
        title: language === 'nl' ? '4. Hoogwaardige Ramen' : '4. High-Performance Windows',
        description: language === 'nl'
          ? 'Driedubbele beglazing en correcte plaatsing voorkomen warmteverlies en oververhitting.'
          : 'Triple glazing and correct placement prevent heat loss and overheating.',
        icon: Eye
      },
      {
        title: language === 'nl' ? '5. Gecontroleerde Ventilatie' : '5. Controlled Ventilation',
        description: language === 'nl'
          ? 'Verse lucht wordt constant aangevoerd via een warmteterugwinsysteem zonder warmte te verliezen.'
          : 'Fresh air is constantly supplied through a heat recovery system without losing warmth.',
        icon: Wind
      }
    ],

    // Comparison Table
    comparisonTitle: language === 'nl' ? 'Wat Dit Betekent in de Praktijk' : 'What This Means in Practice',
    comparisonSubtitle: language === 'nl' ? 'Vergelijking conventioneel vs passiefhuis' : 'Comparing conventional vs passive house',
    tableHeaders: language === 'nl'
      ? ['Conventionele Woning', 'Passiefhuis']
      : ['Conventional Home', 'Passive Home'],
    tableRows: language === 'nl'
      ? [
          ['Verwarming draait altijd', 'Verwarming nauwelijks nodig'],
          ['Tocht en koude plekken', 'Stabiele temperatuur overal'],
          ['Hoge gas-/elektriciteitsrekeningen', 'Zeer lage energiekosten'],
          ['Afhankelijk van installaties', 'Prestatie komt uit de constructie'],
          ['Moeilijk om luchtdichtheid te bereiken', 'Luchtdicht door ontwerp']
        ]
      : [
          ['Heating always running', 'Heating barely needed'],
          ['Drafts and cold areas', 'Stable temperature everywhere'],
          ['High gas/electric bills', 'Very low energy costs'],
          ['Dependent on installations', 'Performance comes from the structure'],
          ['Hard to achieve airtightness', 'Airtight by design']
        ],

    // How Groenvastbouw Achieves This
    howTitle: language === 'nl' ? 'Hoe Groenvastbouw Dit Bereikt' : 'How Groenvastbouw Achieves This',
    howSubtitle: language === 'nl' ? 'Fabrieksproductie met CNC-precisie' : 'Factory production with CNC precision',
    howText1: language === 'nl'
      ? 'De meest kritieke onderdelen van een passiefhuis — isolatie, luchtdichte lagen en constructie — worden in fabriekscondities voltooid met CNC-precisie.'
      : 'The most critical parts of a passive house — insulation, airtight layers, and structure — are completed in factory conditions with CNC precision.',
    howText2: language === 'nl'
      ? 'Dit vermijdt de veelvoorkomende fouten op de bouwplaats die passieve prestaties moeilijk bereikbaar maken in traditionele bouw.'
      : 'This avoids the common on-site errors that make passive performance difficult to achieve in traditional builds.',
    howText3: language === 'nl'
      ? 'Wanneer het gebouw op locatie arriveert, is de prestatie al ingebouwd in de wanden en het dak.'
      : 'When the building arrives on site, the performance is already built into the walls and roof.',

    // The Result
    resultTitle: language === 'nl' ? 'Het Resultaat' : 'The Result',
    resultSubtitle: language === 'nl' ? 'Concrete voordelen' : 'Concrete benefits',
    resultList: language === 'nl'
      ? [
          'Tot 90% reductie in verwarmingsbehoefte',
          'Zeer comfortabel binnenklimaat, zomer en winter',
          'Gezonde luchtkwaliteit',
          'Lagere energiekosten over de levensduur',
          'Een toekomstbestendig gebouw dat gemakkelijk voldoet aan Nederlandse BENG-eisen'
        ]
      : [
          'Up to 90% reduction in heating demand',
          'Very comfortable indoor climate, summer and winter',
          'Healthy air quality',
          'Lower lifetime energy costs',
          'A future-proof building that easily meets Dutch BENG requirements'
        ],

    // Passive vs Super Passive
    versusTitle: language === 'nl' ? 'Passive vs "Super Passive"' : 'Passive vs "Super Passive"',
    versusSubtitle: language === 'nl' ? 'Onze twee prestatieniveaus' : 'Our two performance levels',
    versusIntro: language === 'nl' ? 'Bij Groenvastbouw bieden wij:' : 'At Groenvastbouw, we offer:',
    passiveLabel: 'Passive',
    passiveDesc: language === 'nl'
      ? 'volledig conforme hoogpresterende bouw'
      : 'fully compliant high-performance building',
    superPassiveLabel: 'Super Passive',
    superPassiveDesc: language === 'nl'
      ? 'verbeterde isolatie en luchtdichtheid voor nog lagere energievraag'
      : 'enhanced insulation and airtightness for even lower energy demand',
    versusConclusion: language === 'nl'
      ? 'Beide beginnen met hetzelfde principe: het gebouw presteert door hoe het is gebouwd, niet door wat je later toevoegt.'
      : 'Both start with the same principle: the building performs because of how it is built, not because of what you add later.',

    // In Simple Terms
    simpleTitle: language === 'nl' ? 'In Eenvoudige Woorden' : 'In Simple Terms',
    simpleText1: language === 'nl'
      ? 'Een passiefhuis is niet duur omdat het complex is.'
      : 'A passive house is not expensive because it is complex.',
    simpleText2: language === 'nl'
      ? 'Het is efficiënt omdat het vanaf het begin correct is gebouwd.'
      : 'It is efficient because it is built correctly from the start.',
  };

  return (
    <div className="min-h-screen bg-[#dcdcdc] font-sans">
      <SEO title={content.title} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#dcdcdc] text-[#2a3439] overflow-hidden">
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8edb38]/20 text-[#8edb38] border border-[#8edb38]/30 rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
            <Home size={16} />
            {content.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-[#2a3439] leading-relaxed max-w-3xl mx-auto mb-8">
            {content.subtitle}
          </p>
          <div className="max-w-2xl mx-auto text-lg text-[#2a3439] leading-relaxed space-y-4">
            <p>{content.intro1}</p>
            <p className="font-semibold">{content.intro2}</p>
            <p className="text-[#8edb38] font-bold text-xl mt-6">{content.intro3}</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-[#dcdcdc] rounded-xl text-[#ea4924] border border-[#ea4924]/20">
              <AlertTriangle size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2a3439]">{content.problemTitle}</h2>
              <p className="text-[#2a3439] text-lg mt-1">{content.problemSubtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[#2a3439] font-semibold mb-4">{content.problemIntro}</p>
              <ul className="space-y-3">
                {content.problemPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2a3439]">
                    <span className="text-[#ea4924] mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-[#2a3439] font-semibold mb-4">{content.resultIntro}</p>
              <ul className="space-y-3">
                {content.resultPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2a3439]">
                    <span className="text-[#ea4924] mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">{content.solutionTitle}</h2>
            <p className="text-lg text-[#2a3439]">{content.solutionSubtitle}</p>
          </div>

          <div className="space-y-8">
            {content.principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl shadow-md border border-[#dcdcdc] hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-[#8edb38]/10 rounded-lg text-[#8edb38]">
                      <IconComponent size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2a3439] mb-2">{principle.title}</h3>
                      <p className="text-[#2a3439] leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">{content.comparisonTitle}</h2>
            <p className="text-lg text-[#2a3439]">{content.comparisonSubtitle}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-md overflow-hidden">
              <thead>
                <tr className="bg-[#2a3439] text-white">
                  <th className="px-6 py-4 text-left font-bold">{content.tableHeaders[0]}</th>
                  <th className="px-6 py-4 text-left font-bold bg-[#8edb38] text-[#2a3439]">{content.tableHeaders[1]}</th>
                </tr>
              </thead>
              <tbody>
                {content.tableRows.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#dcdcdc]' : 'bg-white'}>
                    <td className="px-6 py-4 text-[#2a3439] border-b border-[#dcdcdc]">{row[0]}</td>
                    <td className="px-6 py-4 text-[#2a3439] border-b border-[#dcdcdc] font-semibold">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How Groenvastbouw Achieves This Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-[#8edb38]/10 rounded-xl text-[#8edb38]">
              <Building2 size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2a3439]">{content.howTitle}</h2>
              <p className="text-[#2a3439] text-lg mt-1">{content.howSubtitle}</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-[#2a3439] leading-relaxed">
            <p>{content.howText1}</p>
            <p>{content.howText2}</p>
            <p className="font-semibold text-[#8edb38]">{content.howText3}</p>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-[#8edb38]/10 rounded-xl text-[#8edb38]">
              <Award size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2a3439]">{content.resultTitle}</h2>
              <p className="text-[#2a3439] text-lg mt-1">{content.resultSubtitle}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {content.resultList.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-[#2a3439] text-lg">
                <CheckCircle className="text-[#8edb38] mt-1 flex-shrink-0" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Passive vs Super Passive Section */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-[#8edb38]/10 rounded-xl text-[#8edb38]">
              <Sparkles size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2a3439]">{content.versusTitle}</h2>
              <p className="text-[#2a3439] text-lg mt-1">{content.versusSubtitle}</p>
            </div>
          </div>

          <p className="text-lg text-[#2a3439] mb-6">{content.versusIntro}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl shadow-md border border-[#8edb38]/30">
              <h3 className="text-xl font-bold text-[#8edb38] mb-2">{content.passiveLabel}</h3>
              <p className="text-[#2a3439]">{content.passiveDesc}</p>
            </div>
            <div className="bg-[#8edb38] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#2a3439] mb-2">{content.superPassiveLabel}</h3>
              <p className="text-[#2a3439]">{content.superPassiveDesc}</p>
            </div>
          </div>

          <p className="text-lg text-[#2a3439] leading-relaxed font-semibold">
            {content.versusConclusion}
          </p>
        </div>
      </section>

      {/* In Simple Terms Section */}
      <section className="py-20 bg-[#8edb38]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Zap className="mx-auto mb-6 text-[#2a3439]" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-8">{content.simpleTitle}</h2>
          <p className="text-xl text-[#2a3439] mb-4">{content.simpleText1}</p>
          <p className="text-2xl text-[#2a3439] font-bold">{content.simpleText2}</p>
        </div>
      </section>
    </div>
  );
}
