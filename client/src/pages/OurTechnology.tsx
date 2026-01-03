import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Leaf, Home, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function OurTechnology() {
  const { language } = useLanguage();
  
  const content = {
    backToHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    heroTitle: language === 'nl' ? 'Onze Technologie' : 'Our Technology',
    heroSubtitle: language === 'nl' 
      ? 'Hoe Passieve Huizen de Toekomst van Duurzaam Wonen Definiëren'
      : 'How Passive Houses Define the Future of Sustainable Living',
    passiveHousingTitle: language === 'nl' ? 'Wat is Passieve Huisbouw?' : 'What is Passive House Construction?',
    passiveHousingDesc: language === 'nl'
      ? 'Passieve huizen zijn gebouwen die extreme thermische efficiëntie bereiken door geavanceerde isolatie, luchtdichtheid en warmteterugwinning. In plaats van afhankelijk te zijn van traditionele verwarmings- en koelsystemen, behouden passieve huizen hun interne temperatuur door intelligente ontwerp en materiaalgebruik.'
      : 'Passive houses are buildings that achieve extreme thermal efficiency through advanced insulation, airtightness, and heat recovery. Rather than relying on traditional heating and cooling systems, passive houses maintain their internal temperature through intelligent design and material use.',
    
    comparisonTitle: language === 'nl' ? 'Passief Huis vs. Nederlands Standaard' : 'Passive House vs. Dutch Standard',
    comparisonSubtitle: language === 'nl'
      ? 'Hoe onze technologie Nederlandse bouwstandaarden overtreft'
      : 'How our technology exceeds Dutch building standards',
    
    metric1Label: language === 'nl' ? 'Energieverbruik' : 'Energy Consumption',
    metric1Passive: language === 'nl' ? '15 kWh/m²/jaar' : '15 kWh/m²/year',
    metric1Dutch: language === 'nl' ? '120 kWh/m²/jaar' : '120 kWh/m²/year',
    metric1Ratio: '8x efficiënter',
    
    metric2Label: language === 'nl' ? 'Verwarmingsbehoefte' : 'Heating Demand',
    metric2Passive: language === 'nl' ? '10 kWh/m²/jaar' : '10 kWh/m²/year',
    metric2Dutch: language === 'nl' ? '80 kWh/m²/jaar' : '80 kWh/m²/year',
    metric2Ratio: '8x lager',
    
    metric3Label: language === 'nl' ? 'Luchtdichtheid' : 'Airtightness',
    metric3Passive: language === 'nl' ? '0,6 ACH @ 50Pa' : '0.6 ACH @ 50Pa',
    metric3Dutch: language === 'nl' ? '3-5 ACH @ 50Pa' : '3-5 ACH @ 50Pa',
    metric3Ratio: '5-8x beter',
    
    metric4Label: language === 'nl' ? 'Jaarlijkse Verwarmingskosten' : 'Annual Heating Costs',
    metric4Passive: language === 'nl' ? '€300-500' : '€300-500',
    metric4Dutch: language === 'nl' ? '€2,500-4,000' : '€2,500-4,000',
    metric4Ratio: '8-10x goedkoper',

    technologyTitle: language === 'nl' ? 'Kerncomponenten van Onze Technologie' : 'Core Components of Our Technology',
    
    component1Title: language === 'nl' ? 'Geavanceerde Isolatie' : 'Advanced Insulation',
    component1Desc: language === 'nl'
      ? 'Wij gebruiken 300-400mm isolatie in muren en 400-500mm in daken—veel meer dan Nederlandse standaarden. Dit creëert een thermische schil die warmte vasthoudt in de winter en koelte in de zomer.'
      : 'We use 300-400mm insulation in walls and 400-500mm in roofs—far exceeding Dutch standards. This creates a thermal envelope that retains heat in winter and coolness in summer.',
    
    component2Title: language === 'nl' ? 'Luchtdichte Constructie' : 'Airtight Construction',
    component2Desc: language === 'nl'
      ? 'Onze CNC-gesneden houten frames en membranen zorgen ervoor dat geen warme lucht ongewild ontsnapt. Dit is essentieel voor passieve huizen—een klein gat kan het hele systeem ondergraven.'
      : 'Our CNC-cut timber frames and membranes ensure no warm air escapes unintentionally. This is critical for passive houses—a small gap can undermine the entire system.',
    
    component3Title: language === 'nl' ? 'Warmteterugwinning' : 'Heat Recovery Ventilation',
    component3Desc: language === 'nl'
      ? 'Onze HRV-systemen (Warmteterugwinning Ventilatie) halen 90% van de warmte uit uitgaande lucht en gebruiken deze om inkomende lucht te verwarmen. Frisse lucht, zonder energieverlies.'
      : 'Our HRV (Heat Recovery Ventilation) systems extract 90% of heat from outgoing air and use it to warm incoming air. Fresh air, with no energy loss.',
    
    component4Title: language === 'nl' ? 'Thermische Bruggen Minimaliseren' : 'Minimize Thermal Bridges',
    component4Desc: language === 'nl'
      ? 'Traditionele huizen hebben thermische bruggen (waar warmte ontsnapt via staal of beton). Onze ontwerpen elimineren deze zwakke punten door isolatie door te trekken en kritische verbindingen te isoleren.'
      : 'Traditional homes have thermal bridges (where heat escapes via steel or concrete). Our designs eliminate these weak points by running insulation continuously and isolating critical connections.',
    
    component5Title: language === 'nl' ? 'Passieve Zonnewarmte' : 'Passive Solar Gain',
    component5Desc: language === 'nl'
      ? 'Zuidgericht ramen met laag-emissie glas vangen zonnewarmte op in de winter. Zomerse overkoepeling voorkomt oververhitting. Dit is gratis verwarming en koeling.'
      : 'South-facing windows with low-emissivity glass capture solar heat in winter. Summer overhangs prevent overheating. This is free heating and cooling.',
    
    component6Title: language === 'nl' ? 'Kwaliteitscontrole via Blower Door Test' : 'Quality Control via Blower Door Test',
    component6Desc: language === 'nl'
      ? 'Elk huis wordt getest met een "blower door" om luchtdichtheid te verifiëren. Dit is geen optie—het is een vereiste. Geen huis verlaat onze site zonder certificering.'
      : 'Every house is tested with a "blower door" to verify airtightness. This is not optional—it is required. No house leaves our site without certification.',

    benefitsTitle: language === 'nl' ? 'Voordelen van Passieve Huizen' : 'Benefits of Passive Houses',
    
    benefit1Title: language === 'nl' ? 'Drastisch Lagere Energierekeningen' : 'Drastically Lower Energy Bills',
    benefit1Desc: language === 'nl'
      ? 'Gemiddeld besparen huiseigenaren €2,000-3,000 per jaar op verwarmings- en koelingskosten. Over 30 jaar is dat €60,000-90,000—geld in uw zak.'
      : 'On average, homeowners save €2,000-3,000 per year on heating and cooling costs. Over 30 years, that is €60,000-90,000—money in your pocket.',
    
    benefit2Title: language === 'nl' ? 'Verbeterde Binnenluchtcondities' : 'Improved Indoor Air Quality',
    benefit2Desc: language === 'nl'
      ? 'Voortdurende ventilatie met gefilterde lucht betekent minder stof, pollen en vervuiling. Ideaal voor mensen met allergieën of ademhalingsproblemen.'
      : 'Continuous ventilation with filtered air means less dust, pollen, and pollution. Ideal for people with allergies or respiratory issues.',
    
    benefit3Title: language === 'nl' ? 'Thermisch Comfort' : 'Thermal Comfort',
    benefit3Desc: language === 'nl'
      ? 'Geen koude hoeken, geen tocht, geen grote temperatuurverschillen. Elk vertrek voelt prettig aan, het hele jaar door.'
      : 'No cold corners, no drafts, no large temperature differences. Every room feels comfortable, year-round.',
    
    benefit4Title: language === 'nl' ? 'Koolstofnegatief' : 'Carbon-Negative',
    benefit4Desc: language === 'nl'
      ? 'De energiebesparing over de levensduur van het huis compenseert meer dan de koolstof die nodig is om het te bouwen. Dit is echte duurzaamheid.'
      : 'The energy savings over the house\'s lifetime more than compensate for the carbon needed to build it. This is true sustainability.',
    
    benefit5Title: language === 'nl' ? 'Toekomstige Waarde' : 'Future-Proof Value',
    benefit5Desc: language === 'nl'
      ? 'Naarmate energiekosten stijgen en regelgeving aanscherpt, worden passieve huizen steeds waardevoller. U investeert in de toekomst.'
      : 'As energy costs rise and regulations tighten, passive houses become increasingly valuable. You are investing in the future.',
    
    benefit6Title: language === 'nl' ? 'Geluid Isolatie' : 'Sound Insulation',
    benefit6Desc: language === 'nl'
      ? 'De dichte constructie betekent ook uitstekende geluidsisolatie. Minder straatlawaai, meer rust.'
      : 'The airtight construction also means excellent sound insulation. Less street noise, more peace.',

    standardsTitle: language === 'nl' ? 'Certificering & Standaarden' : 'Certification & Standards',
    standardsDesc: language === 'nl'
      ? 'Onze huizen voldoen aan internationale Passive House Institute (PHI) standaarden en Nederlandse BENG-eisen. Dit is niet alleen een label—het is een garantie voor prestaties.'
      : 'Our homes meet international Passive House Institute (PHI) standards and Dutch BENG requirements. This is not just a label—it is a performance guarantee.',

    ctaTitle: language === 'nl' ? 'Klaar voor Passieve Huisbouw?' : 'Ready for Passive House Living?',
    ctaText: language === 'nl'
      ? 'Ontdek hoe onze technologie uw energierekeningen kan halveren en uw wooncomfort kan transformeren.'
      : 'Discover how our technology can halve your energy bills and transform your living comfort.',
    contactButton: language === 'nl' ? 'Contact Ons' : 'Contact Us',
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2A3439]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-[#2A3439] text-white">
        <div className="max-w-6xl mx-auto mb-8">
          <Link href="/" className="inline-flex items-center text-[#9abb32] hover:text-white font-semibold transition-colors group">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {content.backToHome}
          </Link>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Passive Housing */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">{content.passiveHousingTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              {content.passiveHousingDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">{content.comparisonTitle}</h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed">{content.comparisonSubtitle}</p>
          </motion.div>

          <motion.div {...fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#2A3439] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{language === 'nl' ? 'Metriek' : 'Metric'}</th>
                  <th className="px-6 py-4 text-left font-semibold">{language === 'nl' ? 'Passief Huis' : 'Passive House'}</th>
                  <th className="px-6 py-4 text-left font-semibold">{language === 'nl' ? 'Nederlands Standaard' : 'Dutch Standard'}</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#9abb32]">{language === 'nl' ? 'Voordeel' : 'Advantage'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{content.metric1Label}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric1Passive}</td>
                  <td className="px-6 py-4 text-gray-600">{content.metric1Dutch}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric1Ratio}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{content.metric2Label}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric2Passive}</td>
                  <td className="px-6 py-4 text-gray-600">{content.metric2Dutch}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric2Ratio}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{content.metric3Label}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric3Passive}</td>
                  <td className="px-6 py-4 text-gray-600">{content.metric3Dutch}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric3Ratio}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{content.metric4Label}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric4Passive}</td>
                  <td className="px-6 py-4 text-gray-600">{content.metric4Dutch}</td>
                  <td className="px-6 py-4 text-[#9abb32] font-bold">{content.metric4Ratio}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{content.technologyTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: content.component1Title, desc: content.component1Desc, icon: Zap },
              { title: content.component2Title, desc: content.component2Desc, icon: Shield },
              { title: content.component3Title, desc: content.component3Desc, icon: Lightbulb },
              { title: content.component4Title, desc: content.component4Desc, icon: TrendingUp },
              { title: content.component5Title, desc: content.component5Desc, icon: Home },
              { title: content.component6Title, desc: content.component6Desc, icon: Leaf },
            ].map((component, idx) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9abb32]/10 flex items-center justify-center">
                      <Icon className="text-[#9abb32]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{component.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{content.benefitsTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: content.benefit1Title, desc: content.benefit1Desc },
              { title: content.benefit2Title, desc: content.benefit2Desc },
              { title: content.benefit3Title, desc: content.benefit3Desc },
              { title: content.benefit4Title, desc: content.benefit4Desc },
              { title: content.benefit5Title, desc: content.benefit5Desc },
              { title: content.benefit6Title, desc: content.benefit6Desc },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-[#9abb32]">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.standardsTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content.standardsDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#2A3439] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
            <p className="text-xl text-gray-300 mb-8">{content.ctaText}</p>
            <Link href="/">
              <Button className="bg-[#9abb32] hover:bg-[#6fa844] text-white px-8 py-3 rounded-lg font-semibold text-lg">
                {content.contactButton}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
