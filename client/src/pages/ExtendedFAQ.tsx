import { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'wouter';

export default function ExtendedFAQ() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const extendedFaqs = [
    {
      question_nl: "Wat is een passief huis?",
      question_en: "What is a passive house?",
      answer_nl: "Een passief huis is een strenge bouwstandaard voor energiezuinige gebouwen, ontwikkeld in Duitsland, die zeer laag energieverbruik, hoog comfort en uitstekende binnenluchtkwaliteit levert. Het is geen merk of product, maar een prestatiestandaard die kan worden toegepast op veel gebouwtypes.",
      answer_en: "A passive house is a rigorous building standard for energy-efficient buildings, developed in Germany, that delivers very low energy use, high comfort and excellent indoor air quality. It is not a brand or product, but a performance standard that can be applied to many building types."
    },
    {
      question_nl: "Hoe werkt een passief huis?",
      question_en: "How does a passive house work?",
      answer_nl: "In plaats van voornamelijk te focussen op energieproducerende technologieën, minimaliseren passieve huizen eerst de energievraag van de gebouwschil. Met superisolatie en luchtdichte constructie hebben ze slechts een kleine hoeveelheid energie nodig om comfortabel te blijven en vertrouwen ze op gecontroleerde ventilatie met warmteterugwinning om de lucht fris te houden.",
      answer_en: "Instead of focusing mainly on energy-producing technologies, passive houses first minimise the energy demand of the building envelope. With super-insulated and airtight construction, they need only a small amount of energy to remain comfortable and rely on controlled ventilation with heat recovery to keep the air fresh."
    },
    {
      question_nl: "Wat zijn de belangrijkste ontwerpprincipes?",
      question_en: "What are the key design principles?",
      answer_nl: "Passieve huizen vertrouwen op vijf kernprincipes: hoogwaardige isolatie, luchtdichte constructie, vermijding van koudebruggen, hoogwaardige ramen en een gebalanceerd ventilatiesysteem met warmteterugwinning. Samen verminderen deze maatregelen drastisch het warmteverlies, voorkomen tocht en koude oppervlakken, en behouden constante frisse lucht met minimaal energieverbruik.",
      answer_en: "Passive houses rely on five core principles: high-quality insulation, airtight construction, avoidance of thermal bridges, high-performance windows and a balanced ventilation system with heat recovery. Together these measures drastically reduce heat loss, avoid draughts and cold surfaces, and maintain constant fresh air with minimal energy use."
    },
    {
      question_nl: "Hoeveel energie bespaart een passief huis?",
      question_en: "How much energy does a passive house save?",
      answer_nl: "Passieve huizen gebruiken doorgaans ongeveer 75% minder energie dan een gemiddelde nieuwbouwwoning en tot ongeveer 90% minder dan conventionele oudere gebouwen. Ze kunnen vaak warm blijven in de winter en koel in de zomer met zeer kleine verwarmings- en koelsystemen, wat de energierekening aanzienlijk verlaagt.",
      answer_en: "Passive houses typically use about 75% less energy than an average new-build house and up to around 90% less than conventional older buildings. They can often stay warm in winter and cool in summer with very small heating and cooling systems, significantly reducing energy bills."
    },
    {
      question_nl: "Hoe comfortabel is een passief huis?",
      question_en: "How comfortable is a passive house?",
      answer_nl: "Omdat de binnenoppervlakken (muren, ramen) dicht bij de binnenluchttemperatuur blijven, vermijden passieve huizen koude plekken, tocht, condensatie en schimmel. De continue toevoer van gefilterde frisse lucht en stabiele temperaturen creëert een zeer comfortabele en gezonde leefomgeving, ook voor mensen met allergieën of astma.",
      answer_en: "Because the indoor surfaces (walls, windows) remain close to the indoor air temperature, passive houses avoid cold spots, draughts, condensation and mould. The continuous supply of filtered fresh air and stable temperatures creates a very comfortable and healthy living environment, also for people with allergies or asthma."
    },
    {
      question_nl: "Bouwt Senmar alleen huizen?",
      question_en: "Does Senmar only build houses?",
      answer_nl: "Het systeem van Senmar wordt gebruikt voor een breed scala aan projecten, van privéwoningen en tiny houses tot commerciële gebouwen en meergezinsprojecten. Dezelfde houtskelet- en paneel- of modulaire aanpak wordt toegepast op huizen, chalets, tuingebouwen, kleine commerciële units en grotere woonblokken.",
      answer_en: "Senmar's system is used for a wide range of projects, from private homes and tiny houses to commercial buildings and multi-residential projects. The same timber frame and panel or modular approach is applied to houses, chalets, garden buildings, small commercial units and larger residential blocks."
    },
    {
      question_nl: "Wat zijn de belangrijkste voordelen van Senmar's prefab houtsysteem?",
      question_en: "What are the main benefits of Senmar's prefab timber system?",
      answer_nl: "Senmar benadrukt energie-efficiëntie, duurzaamheid, snelle constructie, hoge kwaliteitscontrole, kosteneffectiviteit en aardbevingsbestendigheid als belangrijkste voordelen van zijn prefab houtskeletoplossingen. Prefab productie in een gecontroleerde fabriek vermindert afval, versnelt de bouwtijd en zorgt voor consistente kwaliteit op locatie.",
      answer_en: "Senmar highlights energy efficiency, durability, fast construction, high quality control, cost effectiveness and earthquake resistance as key benefits of its prefab timber frame solutions. Prefab production in a controlled factory reduces waste, speeds up building time and ensures consistent quality on site."
    },
    {
      question_nl: "Hoe snel kan een Senmar constructie worden gemonteerd?",
      question_en: "How fast can a Senmar structure be assembled?",
      answer_nl: "Omdat de wanden, vloeren en daken in de fabriek worden geproduceerd, richt de montage op locatie zich op het installeren van complete elementen in plaats van vanaf nul te bouwen. Dit maakt het mogelijk om de constructieve schil in enkele dagen tot een paar weken te monteren, afhankelijk van de gebouwgrootte en logistiek.",
      answer_en: "Because the walls, floors and roofs are produced in the factory, on-site assembly focuses on installing complete elements rather than building from scratch. This allows the structural shell to be assembled in a matter of days to a couple of weeks, depending on building size and logistics."
    },
    {
      question_nl: "Hoe duurzaam is het systeem?",
      question_en: "How sustainable is the system?",
      answer_nl: "Senmar gebruikt hout van verantwoorde bronnen en energiezuinige productiemethoden, wat de milieu-impact vermindert vergeleken met traditionele bouw. Prefab productie leidt tot minder afval en lagere gebonden energie, terwijl het passief-huisniveau van prestatie het operationele energieverbruik en de uitstoot gedurende de levensduur van het gebouw aanzienlijk vermindert.",
      answer_en: "Senmar uses timber from responsible sources and energy-efficient production methods, reducing the environmental impact compared to traditional construction. Prefab production leads to less waste and lower embodied energy, while the passive-house level of performance significantly reduces operational energy and emissions over the lifetime of the building."
    },
    {
      question_nl: "Welke diensten biedt Senmar die mijn project ondersteunen?",
      question_en: "Which services does Senmar provide that support my project?",
      answer_nl: "Senmar biedt ontwerp-, productie-, leverings- en montage-diensten voor zijn prefab constructies. Groenvastbouw werkt met deze diensten en combineert ze met Nederlandse ontwerppartners, vergunningen en lokale aannemers om uw project te realiseren.",
      answer_en: "Senmar offers design, production, delivery and on-site assembly services for its prefab structures. Groenvastbouw works with these services and combines them with Dutch design partners, permitting and local contractors to deliver your project."
    },
    {
      question_nl: "Voor wie is dit systeem ideaal?",
      question_en: "For whom is this system ideal?",
      answer_nl: "De Senmar-Groenvastbouw combinatie is ideaal voor particuliere klanten die een zeer energiezuinige, duurzame woning willen, en voor ontwikkelaars of architecten die op zoek zijn naar betrouwbare prefab constructies voor meergezinsprojecten. Het past zowel bij eenmalige maatwerkontwerpen als bij herhaalde modellen in serieproductie.",
      answer_en: "The Senmar-Groenvastbouw combination is ideal for private clients who want a very energy-efficient, sustainable home, and for developers or architects looking for reliable prefab structures for multi-unit projects. It suits both one-off bespoke designs and repeated models in serial production."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors w-fit">
            <ArrowLeft size={20} />
            <span>{language === 'nl' ? 'Terug naar Home' : 'Back to Home'}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'nl' ? 'Uitgebreide FAQ' : 'Extended FAQ'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'nl' 
              ? 'Alles wat u moet weten over passieve huizen en het Senmar systeem'
              : 'Everything you need to know about passive houses and the Senmar system'}
          </p>
        </div>

        <div className="space-y-4">
          {extendedFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md cursor-pointer transition-all"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {language === 'nl' ? faq.question_nl : faq.question_en}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </div>
              {openFaq === index && (
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {language === 'nl' ? faq.answer_nl : faq.answer_en}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'nl' ? 'Nog vragen?' : 'Still have questions?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === 'nl' 
              ? 'Neem contact met ons op voor een persoonlijk gesprek over uw project.'
              : 'Get in touch with us for a personal conversation about your project.'}
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            {language === 'nl' ? 'Contact Opnemen' : 'Get in Touch'}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Groenvastbouw. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}
