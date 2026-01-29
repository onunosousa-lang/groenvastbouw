import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Leaf, ShieldCheck, Ruler, Zap, Clock, Factory, BarChart3, CheckCircle, Wrench } from 'lucide-react';

export default function WhyUs() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO title={language === 'nl' ? "Waarom Groenvastbouw - Technische & Economische Analyse" : "Why Groenvastbouw - Technical & Economic Analysis"} />
      <Navbar />
      
      {/* Hero Section with Senmar Image */}
      <section className="relative pt-32 pb-20 bg-background text-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/senmar-photos/factory_senmar_2.jpg" alt="Senmar Factory" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A4D65E]/20 text-green-400 border border-[#A4D65E]/30 rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
            <BarChart3 size={16} />
            {language === 'nl' ? 'Markt & Technologie Analyse' : 'Market & Technology Analysis'}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {language === 'nl' ? 'De Logica van Systeembouw.' : 'The Logic of System Construction.'}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Een diepgaande analyse van de economische voordelen, technische superioriteit en ecologische noodzaak van Senmar MOD technologie.' 
              : 'A deep dive into the economic benefits, technical superiority, and ecological necessity of Senmar MOD technology.'}
          </p>
        </div>
      </section>

      {/* Groenvastbouw + Senmar Partnership */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-[#A4D65E] text-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
                {language === 'nl' ? 'Strategisch Partnerschap' : 'Strategic Partnership'}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'nl' ? <>Groenvastbouw × <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A]">Senmar</a></> : <>Groenvastbouw × <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A]">Senmar</a></>}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === 'nl' 
                  ? <>Groenvastbouw is partner van <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> in Nederland. <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a>, gevestigd in Coja, Portugal, is een pionier in geprefabriceerde modulaire bouwtechnologie. Met een state-of-the-art fabriek van 4.000 m² en een jaarlijkse productiecapaciteit van 19.000 m², combineert <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> Portugese vakmanschap met geavanceerde CNC-automatisering.</>
                  : <>Groenvastbouw is a partner of <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> in the Netherlands. <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a>, based in Coja, Portugal, is a pioneer in prefabricated modular construction technology. With a state-of-the-art 4,000 m² factory and an annual production capacity of 19,000 m², <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> combines Portuguese craftsmanship with advanced CNC automation.</>}
              </p>
              <a 
                href="https://senmar.pt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A4D65E] hover:text-[#8BC34A] font-semibold text-lg group"
              >
                {language === 'nl' ? 'Bezoek Senmar.pt' : 'Visit Senmar.pt'}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img src="/senmar-photos/senmar_delivery_4.jpg" alt="Senmar Services" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Analytical Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* 1. ECONOMIC INCENTIVE */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#f0f7e8] rounded-xl text-[#8BC34A]"><TrendingUp size={32} /></div>
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
              <div className="p-4 bg-[#e8f5f0] rounded-xl text-blue-700"><Factory size={32} /></div>
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
              
              {/* Senmar Production Image */}
              <div className="my-10 rounded-xl overflow-hidden shadow-xl">
                <img src="/senmar-photos/factory_senmar_7.jpg" alt="Senmar Production Facilities" className="w-full h-auto" />
              </div>

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

          {/* 3. ENERGY EFFICIENCY & SAVINGS */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-100 rounded-xl text-orange-700"><Wrench size={32} /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{language === 'nl' ? '3. Energie-efficiëntie & Besparingen' : '3. Energy Efficiency & Savings'}</h2>
                <p className="text-gray-500 text-lg mt-1">{language === 'nl' ? 'Van Optimal tot Super Passive' : 'From Optimal to Super Passive'}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl text-foreground mb-8">
              <h3 className="text-2xl font-bold mb-6">{language === 'nl' ? 'Technische Oplossingen' : 'Technical Solutions'}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">R-5.7</div>
                  <h4 className="font-bold mb-2">Optimal</h4>
                  <p className="text-sm text-gray-300">
                    {language === 'nl' ? 'Perfecte balans tussen investering en prestatie. Overtreft ruimschoots standaard bouweisen.' : 'Perfect balance between investment and performance. Far exceeds standard building requirements.'}
                  </p>
                </div>
                <div className="bg-[#A4D65E] p-6 rounded-lg border-2 border-green-400 transform scale-105 shadow-xl">
                  <div className="text-3xl font-bold text-foreground mb-2">R-8.5</div>
                  <h4 className="font-bold mb-2">Passive</h4>
                  <p className="text-sm text-gray-100">
                    {language === 'nl' ? 'Onze standaard voor zeer energiezuinig wonen. Substantiële besparingen op lange termijn.' : 'Our standard for highly energy-efficient living. Substantial long-term savings.'}
                  </p>
                  <div className="mt-3 inline-block bg-[#8BC34A] px-3 py-1 rounded-full text-xs font-bold">
                    {language === 'nl' ? 'Meest Gekozen' : 'Most Popular'}
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">R-10.5</div>
                  <h4 className="font-bold mb-2">Super Passive</h4>
                  <p className="text-sm text-gray-300">
                    {language === 'nl' ? 'Passivhaus-normen. Tot 75% minder energieverbruik vs standaardbouw.' : 'Passivhaus standards. Up to 75% less energy consumption vs standard construction.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-[#A4D65E] p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold mb-2">
                💡 {language === 'nl' ? 'Besparingen over de levensduur' : 'Lifetime Savings'}
              </p>
              <p className="text-gray-700">
                {language === 'nl' 
                  ? 'Hoewel we geen exacte prijzen tonen, levert elke upgrade in isolatieniveau een exponentieel hogere besparing op uw energierekening op gedurende de levensduur van het gebouw (30+ jaar).'
                  : 'While we do not show exact prices, each upgrade in insulation level provides an exponentially higher saving on your energy bill over the lifetime of the building (30+ years).'}
              </p>
            </div>
          </div>

          <hr className="border-gray-200 my-16" />

          {/* 4. ECOLOGICAL IMPACT */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#f0f7e8] rounded-xl text-[#8BC34A]"><Leaf size={32} /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{language === 'nl' ? '4. Ecologische Impact' : '4. Ecological Impact'}</h2>
                <p className="text-gray-500 text-lg mt-1">{language === 'nl' ? 'CO₂, Stikstof & Toekomstbestendigheid' : 'CO₂, Nitrogen & Future Proofing'}</p>
              </div>
            </div>
            
            {/* Senmar Mission Image */}
            <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
              <img src="/senmar-photos/senmar_montage_11.jpg" alt="Senmar Mission" className="w-full h-auto" />
            </div>

            <div className="bg-green-50 p-10 rounded-2xl border border-[#f0f7e8] shadow-inner">
               <h3 className="text-2xl font-bold text-green-900 mb-4">Carbon Negative Bouwen</h3>
               <p className="text-green-800 mb-6 text-lg leading-relaxed">
                 {language === 'nl' 
                   ? <>De bouwsector is verantwoordelijk voor 39% van de wereldwijde CO₂-uitstoot. Onze methode draait dit om. Elk huis slaat ongeveer 20 ton CO₂ op in de houtstructuur. <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> gebruikt uitsluitend FSC-gecertificeerd hout en streeft naar een volledig carbon-negatieve productieketen.</> 
                   : <>The construction sector is responsible for 39% of global CO₂ emissions. Our method reverses this. Each house stores approximately 20 tons of CO₂ in its timber structure. <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> uses only FSC-certified wood and strives for a fully carbon-negative production chain.</>}
               </p>
               <div className="grid md:grid-cols-3 gap-6">
                 <div className="bg-white/60 p-4 rounded-lg">
                   <span className="block font-bold text-green-900 mb-1">Stikstof reductie</span>
                   <span className="text-sm text-green-800">{language === 'nl' ? '80% minder transportbewegingen naar de bouwplaats.' : '80% fewer transport movements to the site.'}</span>
                 </div>
                 <div className="bg-white/60 p-4 rounded-lg">
                   <span className="block font-bold text-green-900 mb-1">Circulair</span>
                   <span className="text-sm text-green-800">{language === 'nl' ? 'Materialen zijn demontabel en recyclebaar.' : 'Materials are demountable and recyclable.'}</span>
                 </div>
                 <div className="bg-white/60 p-4 rounded-lg">
                   <span className="block font-bold text-green-900 mb-1">FSC Gecertificeerd</span>
                   <span className="text-sm text-green-800">{language === 'nl' ? '100% duurzaam geproduceerd hout.' : '100% sustainably sourced timber.'}</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#A4D65E] to-[#8BC34A] text-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'nl' ? 'Klaar om de toekomst te bouwen?' : 'Ready to build the future?'}
          </h2>
          <p className="text-xl mb-10 text-[#f0f7e8]">
            {language === 'nl' 
              ? <>Neem vandaag nog contact op voor een vrijblijvend gesprek en ontdek hoe Groenvastbouw en <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> uw project kunnen transformeren.</>
              : <>Contact us today for a no-obligation consultation and discover how Groenvastbouw and <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold">Senmar</a> can transform your project.</>}
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-[#A4D65E] px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {language === 'nl' ? 'Request an intro call' : 'Request an intro call'}
          </a>
        </div>
      </section>
    </div>
  );
}
