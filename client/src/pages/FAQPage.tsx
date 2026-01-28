import { useState } from 'react';
import { ChevronDown, ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSections = [
    {
      title_en: "Passive House Basics",
      title_nl: "Basisprincipes Passief Huis",
      questions: [
        {
          question_en: "What is a passive house?",
          question_nl: "Wat is een passief huis?",
          answer_en: "A passive house is a rigorous building standard for very energy-efficient buildings, focused on low energy use, high comfort and excellent indoor air quality. It is a performance standard that can be applied to many building types, not a single product.",
          answer_nl: "Een passief huis is een strenge bouwstandaard voor zeer energiezuinige gebouwen, gericht op laag energieverbruik, hoog comfort en uitstekende binnenluchtkwaliteit. Het is een prestatiestandaard die op veel gebouwtypen kan worden toegepast, niet een enkel product."
        },
        {
          question_en: "How does a passive house work?",
          question_nl: "Hoe werkt een passief huis?",
          answer_en: "Passive houses minimise energy demand through a highly insulated, airtight building envelope with minimal thermal bridges. They use balanced ventilation with heat recovery and passive solar gains so that only a small heating and cooling system is needed.",
          answer_nl: "Passieve huizen minimaliseren de energievraag door een zeer goed geïsoleerde, luchtdichte gebouwschil met minimale koudebruggen. Ze gebruiken gebalanceerde ventilatie met warmteterugwinning en passieve zonnewinst, zodat slechts een klein verwarmings- en koelsysteem nodig is."
        },
        {
          question_en: "How much energy can a passive house save?",
          question_nl: "Hoeveel energie kan een passief huis besparen?",
          answer_en: "Passive houses typically use about 75% less energy than an average new-build house and up to around 90% less than conventional older buildings. This can lead to very significant reductions in energy bills over the lifetime of the building.",
          answer_nl: "Passieve huizen gebruiken doorgaans ongeveer 75% minder energie dan een gemiddelde nieuwbouwwoning en tot ongeveer 90% minder dan conventionele oudere gebouwen. Dit kan leiden tot zeer aanzienlijke verlagingen van de energierekening gedurende de levensduur van het gebouw."
        }
      ]
    },
    {
      title_en: "Planning, Timing and Scope",
      title_nl: "Planning, Timing en Scope",
      questions: [
        {
          question_en: "What is the lead time from order to mounted structure?",
          question_nl: "Wat is de levertijd van bestelling tot gemonteerde constructie?",
          answer_en: "For standard projects, an indicative lead time of about 3 months from order to mounting of the structural shell on site is realistic, subject to engineering, permits and factory planning. On site, assembly of the main structure normally takes around one to two weeks, depending on size and complexity.",
          answer_nl: "Voor standaard projecten is een indicatieve levertijd van ongeveer 3 maanden van bestelling tot montage van de constructieve schil op locatie realistisch, afhankelijk van engineering, vergunningen en fabrieksplanning. Op locatie duurt de montage van de hoofdconstructie normaal gesproken één tot twee weken, afhankelijk van grootte en complexiteit."
        },
        {
          question_en: "Do you deliver shell only or fully finished?",
          question_nl: "Leveren jullie alleen casco of volledig afgewerkt?",
          answer_en: "Groenvastbouw offers four configuration levels: Basic, Optimal, Passive, and Super Passive. We can supply the structural shell with preparation for façade cladding, or include cladding as part of the package. Windows and doors are typically installed on-site (not factory-installed) to minimize transport damage risk. For modular solutions, we can also deliver fully finished units (excluding movable furniture).",
          answer_nl: "Groenvastbouw biedt vier configuratieniveaus: Basic, Optimal, Passive en Super Passive. Wij kunnen de constructieve schil leveren met voorbereiding voor gevelbekleding, of bekleding als onderdeel van het pakket opnemen. Ramen en deuren worden doorgaans op locatie geïnstalleerd (niet in de fabriek) om transportschade te minimaliseren. Voor modulaire oplossingen kunnen we ook volledig afgewerkte units leveren (exclusief los meubilair)."
        },
        {
          question_en: "What interior and installation options are possible?",
          question_nl: "Welke interieur- en installatieopties zijn mogelijk?",
          answer_en: "For panelized construction, electrical conduits and plumbing are installed on-site by local contractors. For modular solutions, electrical conduits can be pre-installed at the factory. Interior options include drywall, timber finishes, and internal doors. A fully fitted kitchen and bathroom can be arranged through our local partners. Full design flexibility is available for projects over 150 m².",
          answer_nl: "Voor gepaneliseerde constructie worden elektrische leidingen en sanitair op locatie geïnstalleerd door lokale aannemers. Voor modulaire oplossingen kunnen elektrische leidingen in de fabriek worden voorgeïnstalleerd. Interieuropties omvatten gipsplaten, houtafwerkingen en binnendeuren. Een volledig ingerichte keuken en badkamer kan worden geregeld via onze lokale partners. Volledige ontwerpvrijheid is beschikbaar voor projecten groter dan 150 m²."
        }
      ]
    },
    {
      title_en: "Prices and Budgets",
      title_nl: "Prijzen en Budgetten",
      questions: [
        {
          question_en: "How does pricing work?",
          question_nl: "Hoe werkt de prijsopbouw?",
          answer_en: "Pricing depends on the chosen performance level and project specifications. Foundations, transport, assembly, and finishing are calculated separately based on your project. Contact us for a customized quote.",
          answer_nl: "De prijs is afhankelijk van het gekozen prestatieniveau en projectspecificaties. Fundaties, transport, montage en afwerking worden apart berekend op basis van uw project. Neem contact op voor een offerte op maat."
        },
        {
          question_en: "What factors influence the final cost?",
          question_nl: "Welke factoren beïnvloeden de uiteindelijke kosten?",
          answer_en: "Key factors are building size and shape, insulation level, façade and roof finishes, choice of windows and doors, installations and level of prefabrication. Local costs for foundations, utilities and landscaping also play an important role.",
          answer_nl: "Belangrijke factoren zijn gebouwgrootte en -vorm, isolatieniveau, gevel- en dakafwerkingen, keuze van ramen en deuren, installaties en mate van prefabricage. Lokale kosten voor funderingen, nutsvoorzieningen en landschapsinrichting spelen ook een belangrijke rol."
        }
      ]
    },
    {
      title_en: "For Developers, Investors and Architects",
      title_nl: "Voor Ontwikkelaars, Investeerders en Architecten",
      questions: [
        {
          question_en: "What is the realistic production capacity for Dutch projects?",
          question_nl: "Wat is de realistische productiecapaciteit voor Nederlandse projecten?",
          answer_en: "Senmar's total annual production capacity is approximately 19,000 m² of modular houses. Currently operating one shift, production can be scaled up to three shifts daily when needed. Capacity is allocated project by project, typically on a first-come basis, though project importance may influence scheduling. Transport is optimized with up to 70 m² per conventional truck.",
          answer_nl: "De totale jaarlijkse productiecapaciteit van Senmar is ongeveer 19.000 m² modulaire woningen. Momenteel wordt er in één ploeg gewerkt, maar de productie kan indien nodig worden opgeschaald naar drie ploegen per dag. Capaciteit wordt project per project toegewezen, doorgaans op volgorde van binnenkomst, hoewel projectbelang de planning kan beïnvloeden. Transport wordt geoptimaliseerd met tot 70 m² per conventionele vrachtwagen."
        },
        {
          question_en: "How are large projects (20–50 units) managed?",
          question_nl: "Hoe worden grote projecten (20–50 eenheden) beheerd?",
          answer_en: "For multi-unit projects, houses or modules are produced in sequence and transported as each unit is completed, then mounted one after another on site. This phased approach enables a controlled workflow and efficient use of cranes and assembly teams.",
          answer_nl: "Voor projecten met meerdere eenheden worden huizen of modules in volgorde geproduceerd en getransporteerd zodra elke eenheid is voltooid, en vervolgens één voor één op locatie gemonteerd. Deze gefaseerde aanpak maakt een gecontroleerde workflow en efficiënt gebruik van kranen en montageteams mogelijk."
        },
        {
          question_en: "What is the maximum building height?",
          question_nl: "Wat is de maximale bouwhoogte?",
          answer_en: "We can build up to 3 floors above ground, plus a concrete basement garage (floor -1) if needed. This covers most residential and small commercial projects. Higher buildings would require a separate structural concept and project-specific engineering.",
          answer_nl: "Wij kunnen tot 3 verdiepingen bovengronds bouwen, plus een betonnen parkeergarage (souterrain) indien gewenst. Dit dekt de meeste residentiële en kleine commerciële projecten. Hogere gebouwen zouden een apart constructief concept en projectspecifieke engineering vereisen."
        }
      ]
    },
    {
      title_en: "Regulations, Warranty and Service",
      title_nl: "Regelgeving, Garantie en Service",
      questions: [
        {
          question_en: "Do the buildings comply with Eurocodes and Dutch regulations (Bouwbesluit/BENG)?",
          question_nl: "Voldoen de gebouwen aan Eurocodes en Nederlandse regelgeving (Bouwbesluit/BENG)?",
          answer_en: "All Senmar materials have CE certification and designs follow Eurocodes. Groenvastbouw handles Dutch-specific compliance including BENG calculations and Bouwbesluit requirements. We ensure your project meets all local regulations through our local expertise and network of certified professionals.",
          answer_nl: "Alle Senmar materialen hebben CE-certificering en ontwerpen volgen Eurocodes. Groenvastbouw verzorgt de Nederlandse compliance inclusief BENG-berekeningen en Bouwbesluit-eisen. Wij zorgen ervoor dat uw project aan alle lokale regelgeving voldoet via onze lokale expertise en netwerk van gecertificeerde professionals."
        },
        {
          question_en: "What is the structural warranty period?",
          question_nl: "Wat is de structurele garantieperiode?",
          answer_en: "Groenvastbouw provides a 10-year structural warranty on the timber frame construction. For specific components such as windows, roofing and installations, warranties of 4-6 years apply according to manufacturer standards. Average response time for warranty claims is approximately 1 week.",
          answer_nl: "Groenvastbouw biedt 10 jaar structurele garantie op de houtskeletconstructie. Voor specifieke componenten zoals ramen, dakbedekking en installaties gelden garanties van 4-6 jaar volgens fabrikantstandaarden. De gemiddelde reactietijd voor garantieclaims is ongeveer 1 week."
        },
        {
          question_en: "How are complaints and defects handled?",
          question_nl: "Hoe worden klachten en gebreken afgehandeld?",
          answer_en: "In case of defects after assembly, clients can contact Groenvastbouw directly as the Dutch contact point for assessment and follow-up. Critical issues are treated with priority to minimise impact on the building's use and comfort.",
          answer_nl: "Bij gebreken na montage kunnen klanten rechtstreeks contact opnemen met Groenvastbouw als Nederlands contactpunt voor beoordeling en opvolging. Kritieke problemen worden met prioriteit behandeld om de impact op het gebruik en comfort van het gebouw te minimaliseren."
        }
      ]
    },
    {
      title_en: "Next Steps",
      title_nl: "Volgende Stappen",
      questions: [
        {
          question_en: "How do I start a project with Groenvastbouw?",
          question_nl: "Hoe start ik een project met Groenvastbouw?",
          answer_en: (
            <div className="space-y-4">
              <p>Ready to realize your sustainable dream home? Contact us directly and we will guide you through every step of the process.</p>
              <a 
                href="https://wa.me/31628358556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                Get in touch on WhatsApp
              </a>
            </div>
          ),
          answer_nl: (
            <div className="space-y-4">
              <p>Klaar om uw duurzame droomhuis te realiseren? Neem direct contact met ons op en wij begeleiden u door elke stap van het proces.</p>
              <a 
                href="https://wa.me/31628358556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                Neem contact op via WhatsApp
              </a>
            </div>
          )
        }
      ]
    }
  ];

  let questionIndex = 0;

  const content = {
    title: language === 'nl' ? <>FAQ – Passieve Huizen & <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#90dc35] hover:text-[#6fb820] font-bold">Senmar</a> Systeem</> : <>FAQ – Passive Houses & <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#90dc35] hover:text-[#6fb820] font-bold">Senmar</a> System</>,
    intro: language === 'nl' 
      ? <>Groenvastbouw biedt hoogwaardige houtskelet passieve huizen in samenwerking met het <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#90dc35] hover:text-[#6fb820] font-bold">Senmar</a> prefab systeem uit Portugal. Op deze pagina vindt u antwoorden op de meest gestelde vragen van particuliere klanten, ontwikkelaars en architecten.</>
      : <>Groenvastbouw offers high-performance timber frame passive houses in cooperation with the <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#90dc35] hover:text-[#6fb820] font-bold">Senmar</a> prefab system from Portugal. On this page you will find answers to the most common questions from private clients, developers and architects.</>,
    backToHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    contactUs: language === 'nl' ? 'Request an intro call' : 'Request an intro call',
    chatWhatsApp: language === 'nl' ? 'Neem contact op via WhatsApp' : 'Get in touch on WhatsApp',
    readyTitle: language === 'nl' ? 'Klaar om Uw Project te Starten?' : 'Ready to Start Your Project?',
    readyText: language === 'nl' ? 'Neem contact met ons op om uw passief huis project te bespreken.' : 'Get in touch with us to discuss your passive house project.',
    footer: language === 'nl' ? '© 2024 Groenvastbouw. Alle rechten voorbehouden.' : '© 2024 Groenvastbouw. All rights reserved.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors w-fit">
            <ArrowLeft size={20} />
            <span>{content.backToHome}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.intro}
          </p>
        </div>

        {/* Top Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="/#contact" 
            className="inline-flex items-center justify-center gap-2 bg-[#90dc35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#90dc35] transition-colors"
          >
            <Mail size={20} />
            {content.contactUs}
          </a>
          <a 
            href="https://wa.me/31629841297" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle size={20} />
            {content.chatWhatsApp}
          </a>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-10">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#90dc35]">
                {language === 'nl' ? section.title_nl : section.title_en}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div 
                      key={currentIndex}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
                    >
                      <button
                        className="w-full p-5 text-left flex justify-between items-center"
                        onClick={() => setOpenFaq(openFaq === currentIndex ? null : currentIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {language === 'nl' ? faq.question_nl : faq.question_en}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-gray-500 transition-transform flex-shrink-0 ${openFaq === currentIndex ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === currentIndex && (
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed pt-4">
                            {language === 'nl' ? faq.answer_nl : faq.answer_en}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Buttons */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.readyTitle}
          </h2>
          <p className="text-gray-600 mb-6">
            {content.readyText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#90dc35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#90dc35] transition-colors"
            >
              <Mail size={20} />
              {content.contactUs}
            </a>
            <a 
              href="https://wa.me/31629841297" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle size={20} />
              {content.chatWhatsApp}
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">{content.footer}</p>
        </div>
      </footer>
    </div>
  );
}
