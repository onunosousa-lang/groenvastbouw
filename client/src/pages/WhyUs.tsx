import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Leaf, ShieldCheck, Ruler, Zap, Clock, Factory, BarChart3 } from 'lucide-react';

export default function WhyUs() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO title={language === 'nl' ? "Waarom Groenvastbouw - Technische & Economische Analyse" : "Why Groenvastbouw - Technical & Economic Analysis"} />
      <Navbar />
      
      {/* Scientific Header */}
      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 border border-green-600/30 rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
            <BarChart3 size={16} />
            {language === 'nl' ? 'Markt & Technologie Analyse' : 'Market & Technology Analysis'}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {language === 'nl' ? 'De Logica van Systeembouw.' : 'The Logic of System Construction.'}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Een diepgaande analyse van de economische voordelen, technische superioriteit en ecologische noodzaak van Senmar MOD technologie.' 
              : 'A deep dive into the economic benefits, technical superiority, and ecological necessity of Senmar MOD technology.'}
          </p>
        </div>
      </section>

      {/* Main Analytical Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* 1. ECONOMIC INCENTIVE */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-green-100 rounded-xl text-green-700"><TrendingUp size={32} /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{language === 'nl' ? '1. Het Economische Perspectief' : '1. The Economic Perspective'}</h2>
                <p className="text-gray-500 text-lg mt-1">{language === 'nl' ? 'ROI, Cashflow & Risicobeheersing' : 'ROI, Cashflow & Risk Management'}</p>
              </div>
            </div>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-8">
                {language === 'nl' 
                  ? 'De Nederlandse bouwsector kampt met een structureel tekort aan vakmensen en stijgende materiaalkosten. Traditionele bouw op locatie is hierdoor onvoorspelbaar en duur geworden. Onze geïndustrialiseerde aanpak biedt de enige schaalbare oplossing.'
                  : 'The Dutch construction sector faces a structural shortage of skilled labor and rising material costs. Traditional on-site construction has become unpredictable and expensive. Our industrialized approach offers the only scalable solution.'}
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <Card className="bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl">{language === 'nl' ? 'Versnelde Cashflow' : 'Accelerated Cashflow'}</h4>
                    <p className="text-base">{language === 'nl' ? 'Een bouwtijdverkorting van 70% betekent dat uw kapitaal 6-9 maanden eerder vrijkomt. Voor verhuurders betekent dit directe inkomsten in plaats van renteverlies tijdens de bouw.' : 'A 70% reduction in construction time means your capital is released 6-9 months earlier. For landlords, this means immediate income instead of interest loss during construction.'}</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl">{language === 'nl' ? 'Financiële Zekerheid' : 'Financial Certainty'}</h4>
                    <p className="text-base">{language === 'nl' ? 'Geen onverwacht meerwerk. Geen faalkosten door weerverlet. De kosten zijn tot op de euro nauwkeurig vastgesteld voordat de productie start.' : 'No unexpected extra costs. No failure costs due to weather delays. Costs are fixed down to the euro before production starts.'}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-16" />

          {/* 2. TECHNICAL SUPERIORITY */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-100 rounded-xl text-blue-700"><Factory size={32} /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{language === 'nl' ? '2. Technische Superioriteit' : '2. Technical Superiority'}</h2>
                <p className="text-gray-500 text-lg mt-1">{language === 'nl' ? 'Fysica & Productieprecisie' : 'Physics & Manufacturing Precision'}</p>
              </div>
            </div>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-8">
                {language === 'nl'
                  ? 'Een bouwplaats is een chaotische omgeving blootgesteld aan regen en wind. Een fabriek is een gecontroleerd laboratorium. Dit fundamentele verschil leidt tot meetbaar betere prestaties van de gebouwschil.'
                  : 'A construction site is a chaotic environment exposed to rain and wind. A factory is a controlled laboratory. This fundamental difference leads to measurably better performance of the building envelope.'}
              </p>
              <ul className="space-y-6 list-none pl-0 mt-8">
                <li className="flex gap-5 items-start">
                  <div className="mt-1 p-2 bg-gray-100 rounded-lg"><Ruler className="text-gray-700" size={20} /></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">1mm Tolerantie</strong>
                    {language === 'nl' ? 'CNC-machines frezen het hout met een precisie die op de bouwplaats onmogelijk is. Dit garandeert naadloze aansluitingen en superieure luchtdichtheid.' : 'CNC machines mill the timber with a precision impossible on a construction site. This guarantees seamless connections and superior airtightness.'}
                  </div>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 p-2 bg-gray-100 rounded-lg"><Zap className="text-gray-700" size={20} /></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Thermal Bridge Free</strong>
                    {language === 'nl' ? 'Doordat isolatie machinaal en onder ideale omstandigheden wordt aangebracht, ontstaan er geen "gaps" of koudebruggen. Dit is essentieel voor het behalen van de Passiefhuis-standaard.' : 'Because insulation is applied mechanically under ideal conditions, there are no gaps or thermal bridges. This is essential for achieving the Passive House standard.'}
                  </div>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 p-2 bg-gray-100 rounded-lg"><ShieldCheck className="text-gray-700" size={20} /></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Geen Bouwvocht</strong>
                    {language === 'nl' ? 'Traditionele bouw sluit duizenden liters water in (beton, regen). Onze droogbouw methode elimineert schimmelrisico en zorgt voor een direct gezond binnenklimaat.' : 'Traditional construction traps thousands of liters of water (concrete, rain). Our dry construction method eliminates mold risk and ensures an immediately healthy indoor climate.'}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-200 my-16" />

          {/* 3. ECOLOGICAL IMPACT */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-green-100 rounded-xl text-green-700"><Leaf size={32} /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{language === 'nl' ? '3. Ecologische Impact' : '3. Ecological Impact'}</h2>
                <p className="text-gray-500 text-lg mt-1">{language === 'nl' ? 'CO₂, Stikstof & Toekomstbestendigheid' : 'CO₂, Nitrogen & Future Proofing'}</p>
              </div>
            </div>
            <div className="bg-green-50 p-10 rounded-2xl border border-green-100 shadow-inner">
               <h3 className="text-2xl font-bold text-green-900 mb-4">Carbon Negative Bouwen</h3>
               <p className="text-green-800 mb-6 text-lg leading-relaxed">
                 {language === 'nl' 
                   ? 'De bouwsector is verantwoordelijk voor 39% van de wereldwijde CO₂-uitstoot. Onze methode draait dit om. Elk huis slaat ongeveer 20 ton CO₂ op in de houtstructuur.' 
                   : 'The construction sector is responsible for 39% of global CO₂ emissions. Our method reverses this. Each house stores approximately 20 tons of CO₂ in its timber structure.'}
               </p>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white/60 p-4 rounded-lg">
                   <span className="block font-bold text-green-900 mb-1">Stikstof reductie</span>
                   <span className="text-sm text-green-800">{language === 'nl' ? '80% minder transportbewegingen naar de bouwplaats.' : '80% fewer transport movements to the site.'}</span>
                 </div>
                 <div className="bg-white/60 p-4 rounded-lg">
                   <span className="block font-bold text-green-900 mb-1">Circulair</span>
                   <span className="text-sm text-green-800">{language === 'nl' ? 'Materialen zijn demontabel en recyclebaar.' : 'Materials are demountable and recyclable.'}</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
