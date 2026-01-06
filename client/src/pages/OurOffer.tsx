import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Leaf, Factory, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function OurOffer() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#2A3439] to-[#1a1f23] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {language === 'nl'
                ? 'Senmar Passief Huisstructuur. Uw Passief Huis. Gebouwd in 3 Maanden.'
                : 'Senmar Passive House Structure. Your Passive House. Built in 3 Months.'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              {language === 'nl'
                ? 'Groenvastbouw levert hoogperformante passiefhuisstructuren, fabrieksgebouwd met CNC-precisie tot op 1 mm voor een perfecte pasvorm ter plaatse. Kies tussen turn-key woningen of alleen-structuurpakketten en krijg een voorspelbare, snelle en echt duurzame manier om te bouwen.'
                : 'Groenvastbouw delivers high-performance passive house structures, factory-built with CNC precision down to 1 mm for a perfect fit on site. Choose between turnkey homes or structure-only packages and get a predictable, fast and truly sustainable way to build.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#90dc35] text-[#2A3439] font-semibold rounded-lg hover:bg-[#6fb820] transition-colors"
              >
                {language === 'nl' ? 'Bekijk Ons Aanbod' : 'See Our Offer'}
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                {language === 'nl' ? 'Gratis Consult' : 'Free Consultation'}
              </button>
            </div>
            <p className="text-sm text-gray-300">
              {language === 'nl'
                ? 'Vanaf €1.550/m² voor de basisstructuur, exclusief transport en BTW. Turn-key opties beschikbaar.'
                : 'From €1,550/m² for the basic structure, excluding transport and VAT. Turn-key options available.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Groenvastbouw × Senmar Partnership */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'Groenvastbouw × Senmar — Passieve Bouwsystemen' : 'Groenvastbouw × Senmar — Passive Building Systems'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {language === 'nl'
                ? 'Groenvastbouw werkt in partnerschap met Senmar, een geavanceerd bouwbedrijf gevestigd in Portugal, gespecialiseerd in hoogperformante passiefhuisstructuren.'
                : 'Groenvastbouw works in partnership with Senmar, a cutting-edge construction company based in Portugal, specialized in high-performance passive building structures.'}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {language === 'nl'
                ? 'Senmar richt zich op echte duurzaamheid en lange termijn duurzaamheid. Door geavanceerde off-site fabricage en CNC-gecontroleerde productie worden bouwcomponenten met millimeternauwkeurigheid geproduceerd, wat constructieafval aanzienlijk vermindert. Dit gecontroleerde proces garandeert maximale kwaliteit tegen voorspelbare en gecontroleerde kosten.'
                : 'Senmar focuses on true sustainability and long-term durability. Through advanced off-site manufacturing and CNC-controlled production, building components are produced with millimetre precision, significantly reducing construction waste. This controlled process ensures maximum quality at predictable and controlled costs.'}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'nl'
                ? 'Samen leveren we hoogperformante passiefhuisstructuren die in de fabriek worden gebouwd en efficiënt ter plaatse worden gemonteerd. Afhankelijk van het project kunnen oplossingen variëren van alleen-structuursystemen tot volledig gecoördineerde, turn-key ontwikkelingen.'
                : 'Together, we deliver high-performance passive building structures that are factory-built and assembled efficiently on site. Depending on the project, solutions can range from structure-only systems to fully coordinated, turnkey developments.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built for the Future */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {language === 'nl' ? 'Gebouwd voor de Toekomst van Wonen en Verder' : 'Built for the Future of Housing and Beyond'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'We geloven dat dit bouwsysteem de toekomst vertegenwoordigt van:'
                : 'We believe this building system represents the future of:'}
            </p>
            <ul className="space-y-4 mb-12">
              {[
                language === 'nl' ? 'Woningbouw en buurtontikkelingen' : 'Residential housing and neighbourhood developments',
                language === 'nl' ? 'Verzorgingstehuizen en ondersteunde woonvoorzieningen' : 'Retirement homes and assisted living facilities',
                language === 'nl' ? 'Scholen en onderwijsgebouwen' : 'Schools and educational buildings',
                language === 'nl' ? 'Kantoorgebouwen en werkruimten' : 'Office buildings and workspaces',
                language === 'nl' ? 'Commerciële en openbare gebouwen' : 'Commercial and public buildings'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#90dc35] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'nl'
                ? 'Het systeem is vooral geschikt voor herhaalbare, schaalbare ontwikkelingen waar snelheid, kostenbeheer en lange termijn prestaties essentieel zijn.'
                : 'The system is especially suitable for repeatable, scalable developments where speed, cost control and long-term performance are essential.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dutch Housing Challenge */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {language === 'nl' ? 'Een Oplossing voor de Nederlandse Woninguitdaging' : 'A Solution to the Dutch Housing Challenge'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Nederland staat voor een groeiende woninguitdaging:'
                : 'The Netherlands faces a growing housing challenge:'}
            </p>
            <ul className="space-y-4 mb-12">
              {[
                language === 'nl' ? 'Ernstige woningtekorten' : 'Severe housing shortages',
                language === 'nl' ? 'Stijgende en onvoorspelbare bouwkosten' : 'Rising and unpredictable construction costs',
                language === 'nl' ? 'Lange en onzekere bouwtijden' : 'Long and uncertain build times',
                language === 'nl' ? 'Toenemende duurzaamheids- en energieeisen' : 'Increasing sustainability and energy requirements',
                language === 'nl' ? 'Arbeidstekorten in traditioneel bouwen' : 'Labour shortages in traditional construction'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#90dc35] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-semibold">
              {language === 'nl'
                ? 'Onze aanpak spreekt deze problemen rechtstreeks aan.'
                : 'Our approach directly addresses these issues.'}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Door het merendeel van de constructie naar een gecontroleerde fabrieksomgeving te verplaatsen, verminderen we de afhankelijkheid van arbeid ter plaatse, verkorten we de bouwtijdlijnen en elimineren we veel kostonzekerheden die gepaard gaan met traditionele bouwmethoden.'
                : 'By shifting the majority of construction to a controlled factory environment, we reduce on-site labour dependency, shorten construction timelines, and eliminate many cost uncertainties associated with traditional building methods.'}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Het resultaat:'
                : 'The result:'}
            </p>
            <ul className="space-y-4 mb-12">
              {[
                language === 'nl' ? 'Snellere levering' : 'Faster delivery',
                language === 'nl' ? 'Voorspelbare kosten' : 'Predictable costs',
                language === 'nl' ? 'Consistente, hoogwaardige uitvoering' : 'Consistent, high-quality execution',
                language === 'nl' ? 'Toekomstbestendige energieprestaties' : 'Future-proof energy performance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-[#90dc35] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Development-Ready System */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {language === 'nl' ? 'Een Ontwikkelings-Klaar Bouwsysteem' : 'A Development-Ready Building System'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Dit is geen experimenteel concept, maar een ontwikkelings-klaar bouwsysteem ontworpen ter ondersteuning van:'
                : 'This is not an experimental concept, but a development-ready building system designed to support:'}
            </p>
            <ul className="space-y-4 mb-12">
              {[
                language === 'nl' ? 'Woningontwikkelaars' : 'Housing developers',
                language === 'nl' ? 'Investeerders' : 'Investors',
                language === 'nl' ? 'Woningcorporaties' : 'Housing corporations',
                language === 'nl' ? 'Gemeentelijke en publieke projecten' : 'Municipal and public-sector projects'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#90dc35] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'nl'
                ? 'We geloven stellig dat deze aanpak een betekenisvolle rol kan spelen in het oplossen van huidige en toekomstige bouwuitdagingen in Nederland. Niet alleen voor woningbouw, maar voor de bredere gebouwde omgeving.'
                : 'We strongly believe that this approach can play a meaningful role in solving current and future building challenges in the Netherlands — not only for housing, but for the broader built environment.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Product */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'Het Product: Passiefhuisstructuur' : 'The Product: Passive House Structure'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Ons kernproduct is de structurele schil van uw huis: voorgefabriceerde muren, vloeren en daken die een luchtdichte, thermische-brugvrije passiefhuisomhulling vormen.'
                : 'Our core product is the structural shell of your house: prefabricated walls, floors and roofs that form an airtight, thermal-bridge-free passive envelope.'}
            </p>
            <ul className="space-y-4">
              {[
                language === 'nl'
                  ? 'CNC-gesneden structuurelementen met ongeveer 1 mm tolerantie voor naadloze verbindingen en details.'
                  : 'CNC-cut structural elements with approximately 1 mm tolerance for seamless joints and details.',
                language === 'nl'
                  ? 'Geïntegreerde isolatie en luchtdichte lagen ontworpen om passiefhuisprestaties te bereiken in combinatie met de juiste installaties.'
                  : 'Integrated insulation and airtight layers designed to reach passive-house performance when combined with the right installations.',
                language === 'nl'
                  ? 'Vooruitgesneden openingen voor ramen, deuren en sleutelinstallaties om fouten en tijd ter plaatse te minimaliseren.'
                  : 'Pre-cut openings for windows, doors and key installations to minimise errors and time on site.'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#90dc35] mt-2 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CNC Production & Quality - with Factory Images */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'CNC Productie & Kwaliteit' : 'CNC Production & Quality'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Elk element wordt in een gecontroleerde fabrieksomgeving in Portugal geproduceerd met behulp van een volledig digitale workflow van 3D-model tot CNC-machine.'
                : 'Every element is produced in a controlled factory environment in Portugal using a fully digital workflow from 3D model to CNC machine.'}
            </p>
            <ul className="space-y-4 mb-12">
              {[
                language === 'nl'
                  ? '1 mm precisie zorgt voor schone verbindingen, hoge luchtdichtheid en voorspelbare montage ter plaatse.'
                  : '1 mm precision ensures clean connections, high airtightness and a predictable on-site assembly.',
                language === 'nl'
                  ? 'Droge, binnenproductie voorkomt vochtproblemen en levert consistente, herhaalbare kwaliteit.'
                  : 'Dry, indoor production avoids moisture problems and delivers consistent, repeatable quality.',
                language === 'nl'
                  ? 'Bewezen details voor luchtdichtheid en thermische prestaties verminderen warmteverlies en ongewenste tochten.'
                  : 'Proven details for airtightness and thermal performance reduce heat loss and unwanted drafts.'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#90dc35] mt-2 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Factory Images Grid */}
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/factory_senmar(2).jpg"
                alt="Senmar Factory Production"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/factory_senmar(3).jpg"
                alt="CNC Robot Assembly"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/factory_senmar(4).jpg"
                alt="Wooden Frame Assembly"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/factory_senmar(7).jpg"
                alt="Quality Control"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Why 1mm Precision Matters */}
          <motion.div {...fadeInUp} className="bg-gradient-to-r from-[#90dc35]/10 to-transparent rounded-2xl p-8 border border-[#90dc35]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'Waarom 1 mm Precisie Belangrijk Is' : 'Why 1 mm Precision Matters'}
            </h3>
            <ul className="space-y-4">
              {[
                language === 'nl'
                  ? 'Minder correcties ter plaatse en snellere montage.'
                  : 'Fewer on-site corrections and faster assembly.',
                language === 'nl'
                  ? 'Betere luchtdichtheid en thermische prestaties.'
                  : 'Better airtightness and thermal performance.',
                language === 'nl'
                  ? 'Schonere integratie met ramen, daken en installaties.'
                  : 'Cleaner integration with windows, roofs and installations.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-[#90dc35] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Real Sustainability */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'Echte Duurzaamheid, Geen Greenwashing' : 'Real Sustainability, Not Greenwashing'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Echte duurzaamheid is ingebouwd in de structuur, niet alleen als label toegevoegd.'
                : 'Real sustainability is built into the structure, not just added as a label.'}
            </p>
            <ul className="space-y-4">
              {[
                language === 'nl'
                  ? 'Een zeer geisoleerde, luchtdichte omhulling vermindert de verwarmings- en koelbehoefte drastisch gedurende de levensduur van het gebouw.'
                  : 'A highly insulated, airtight envelope cuts heating and cooling demand dramatically over the lifetime of the building.',
                language === 'nl'
                  ? 'Nauwkeurige fabrieksproductie vermindert afval, optimaliseert materiaalgebruik en beperkt onnodige transportbewegingen.'
                  : 'Precise factory production reduces waste, optimises material use and limits unnecessary transport movements.',
                language === 'nl'
                  ? 'Het systeem is ontworpen om naadloos met hernieuwbare energiesystemen te werken en moderne energieregels te bereiken of te overtreffen in combinatie met geschikte installaties.'
                  : 'The system is designed to work seamlessly with renewable energy systems and to meet or exceed modern energy regulations when combined with suitable installations.'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Leaf className="w-5 h-5 text-[#90dc35] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Hoe Het Werkt' : 'How It Works'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'nl' ? 'Van ontwerp tot geleverde structuur in 3 maanden' : 'From design to delivered structure in 3 months'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: '1',
                title: language === 'nl' ? 'Ontwerp & Offerte' : 'Design & Quote',
                desc: language === 'nl'
                  ? 'Kies een prefab model of bespreek uw aangepaste ontwerp. Ontvang een vaste prijsofferte.'
                  : 'Choose a prefab model or discuss your custom design. Receive a fixed price quote.'
              },
              {
                number: '2',
                title: language === 'nl' ? 'Productie in Senmar Fabriek' : 'Production in Senmar Factory',
                desc: language === 'nl'
                  ? 'De volledige prefab structuur wordt in onze gecontroleerde fabriek in Portugal geproduceerd.'
                  : 'The complete prefab structure is produced in our controlled factory in Portugal.'
              },
              {
                number: '3',
                title: language === 'nl' ? 'Structuur Levering' : 'Structure Delivery',
                desc: language === 'nl'
                  ? 'De volledige prefab structuur wordt op uw locatie geleverd, klaar voor montage. Transport naar Nederland inbegrepen.'
                  : 'The complete prefab structure is delivered to your location, ready for assembly. Transport to the Netherlands included.'
              },
              {
                number: '4',
                title: language === 'nl' ? 'Volledige Montage' : 'Full Assembly',
                desc: language === 'nl'
                  ? 'Volledige montage van de prefab structuur op uw locatie. Fundering en grondwerk voorbereid van tevoren.'
                  : 'Complete assembly of the prefab structure at your location. Foundation and groundwork prepared in advance.'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#90dc35] text-[#2A3439] font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeInUp} className="text-center text-sm text-gray-500 mt-12">
            {language === 'nl'
              ? 'Totale tijdlijn: ongeveer 3 maanden voor de structuur. Fundering en grondwerk worden van tevoren voorbereid.'
              : 'Total timeline: approximately 3 months for the structure. Foundation and groundwork are prepared in advance.'}
          </motion.p>
        </div>
      </section>

      {/* Is This For You */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' ? 'Is Dit Voor U?' : 'Is This For You?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'nl'
                ? 'Dit aanbod is ideaal voor klanten die hoog comfort, zeer laag energieverbruik en een voorspelbaar bouwproces willen.'
                : 'This offer is ideal for clients who want high comfort, very low energy use and a predictable building process.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'nl' ? 'Particuliere Klanten' : 'Private Clients',
                desc: language === 'nl'
                  ? 'Voor degenen die een gezond, comfortabel huis willen zonder greenwashing.'
                  : 'For those who want a healthy, comfortable home without greenwashing.'
              },
              {
                title: language === 'nl' ? 'Architecten' : 'Architects',
                desc: language === 'nl'
                  ? 'Voor ontwerpers die een betrouwbare passiefhuisstructuur partner nodig hebben.'
                  : 'For designers who need a reliable passive-house structure partner.'
              },
              {
                title: language === 'nl' ? 'Ontwikkelaars & Investeerders' : 'Developers & Investors',
                desc: language === 'nl'
                  ? 'Voor schaalbare, herhaalbare, energiezuinige woningconcepten.'
                  : 'For scalable, repeatable, energy-efficient housing concepts.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realized Projects */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Gerealiseerde Projecten' : 'Realized Projects'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'nl'
                ? 'Zie hoe de Senmar passiefhuisoplossing in echte projecten in heel Europa presteert.'
                : 'See how the Senmar passive solution performs in real projects across Europe.'}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Link href="/projects" className="inline-flex items-center px-8 py-4 bg-[#90dc35] text-[#2A3439] font-semibold rounded-lg hover:bg-[#6fb820] transition-colors">
              {language === 'nl' ? 'Bekijk Alle Projecten' : 'View All Projects'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#2A3439] to-[#1a1f23] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'nl' ? 'Klaar om uw project te bespreken?' : 'Ready to discuss your project?'}
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {language === 'nl'
                ? 'Deel uw plannen of kies een model en ontvang een duidelijke offerte en tijdlijn voor uw passiefhuisstructuur.'
                : 'Share your plans or choose a model, and receive a clear offer and timeline for your passive house structure.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#90dc35] text-[#2A3439] font-semibold rounded-lg hover:bg-[#6fb820] transition-colors"
              >
                {language === 'nl' ? 'Plan Gratis Consult' : 'Schedule Free Consultation'}
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                {language === 'nl' ? 'Stuur Uw Plannen' : 'Send Your Plans'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
