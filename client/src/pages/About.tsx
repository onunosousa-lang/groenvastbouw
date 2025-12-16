import { motion } from 'framer-motion';
import { ArrowLeft, Hammer, Globe, ShieldCheck, Leaf, Zap, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();
  
  const content = {
    backToHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    heroTitle: language === 'nl' ? 'De Toekomst van Nederlandse Woningbouw' : 'The Future of Dutch Housing',
    heroSubtitle: language === 'nl' ? 'Waar Traditioneel Vakmanschap Industriële Precisie Ontmoet.' : 'Where Traditional Craftsmanship Meets Industrial Precision.',
    founderTag: language === 'nl' ? 'DE OPRICHTER' : 'THE FOUNDER',
    founderTitle: language === 'nl' ? 'Van Ambachtelijk Timmerman tot Eco-Constructie Specialist' : 'From Artisan Carpenter to Eco-Construction Specialist',
    founderName: 'Nuno Machado e Sousa',
    founderStory1: language === 'nl' 
      ? 'Het verhaal van Groenvastbouw begon niet in een vergaderzaal; het begon op de steiger. Nuno werkte meer dan tien jaar door heel Europa—van de zonnige heuvels van Portugal tot de renovatieprojecten in Frankrijk en de veeleisende markt van Nederland.'
      : "The story of Groenvastbouw didn't start in a boardroom; it started on the scaffolding. Nuno spent over a decade working across Europe—from the sun-drenched hills of Portugal to the renovation sites of France and the high-demand market of the Netherlands.",
    founderStory2: language === 'nl'
      ? 'Als traditioneel timmerman zag Nuno een terugkerend probleem: conventionele bouwmethoden waren te traag, te verspillend, en voldeden vaak niet aan de urgente behoefte aan energie-efficiëntie. Hij besefte dat "groen" bouwen geen luxe zou moeten zijn—het zou de standaard moeten zijn.'
      : 'While working as a traditional carpenter, Nuno noticed a recurring problem: conventional building methods were too slow, too wasteful, and often failed to meet the urgent need for energy efficiency. He realized that building "green" shouldn\'t be a luxury—it should be the standard.',
    founderStory3: language === 'nl'
      ? 'Zijn zoektocht naar een betere manier bracht hem naar Batipole Limoux in Frankrijk, een gerenommeerd centrum voor ecologische constructie. Daar beheerste hij de wetenschap van het bouwen—luchtdichtheid, koudebruggen en natuurlijke isolatie. Sinds 2019 past hij deze expertise toe in Nederland, met passieve kantoren en zonne-installaties.'
      : 'His quest for a better way led him to Batipole Limoux in France, a renowned center for ecological construction. There, he mastered the science of building—studying airtightness, thermal bridges, and natural insulation. Since 2019, he has applied this expertise in the Netherlands, realizing passive offices and leading solar installations.',
    partnershipTitle: language === 'nl' ? 'Groenvastbouw x Senmar' : 'Groenvastbouw x Senmar',
    partnershipSubtitle: language === 'nl' 
      ? 'Alleen kan een vakman één huis per jaar bouwen. Samen met technologie kunnen we een wijk bouwen.'
      : 'Alone, a craftsman can build one house a year. Together with technology, we can build a neighborhood.',
    engineTitle: language === 'nl' ? 'Industriële Precisie (De Motor)' : 'Industrial Precision (The Engine)',
    engineDesc: language === 'nl'
      ? 'Groenvastbouw heeft een strategisch partnerschap met Senmar. Hun fabriek in Portugal gebruikt CNC-robotica om houtskeletframes met millimeterprecisie te snijden. Deze "off-site" productie betekent dat uw huis wordt gebouwd in een geconditioneerde omgeving—beschermd tegen regen en wind—resulterend in nul afval en perfecte structurele integriteit.'
      : 'Groenvastbouw has formed a strategic partnership with Senmar. Their factory in Portugal uses CNC robotics to cut timber frames with millimeter accuracy. This "off-site" production means your home is built in a conditioned environment—safe from rain and wind—resulting in zero waste and perfect structural integrity.',
    driverTitle: language === 'nl' ? 'Lokale Expertise (De Bestuurder)' : 'Local Expertise (The Driver)',
    driverDesc: language === 'nl'
      ? 'Groenvastbouw brengt deze technologie naar Nederlandse bodem. Wij navigeren lokale regelgeving (BENG-normen), beheren funderingen en afwerking, en zorgen dat het project perfect past binnen het Nederlandse landschap.'
      : 'Groenvastbouw brings this technology to Dutch soil. We navigate local regulations (BENG standards), manage foundations and finishing, and ensure the project fits perfectly within the Dutch landscape.',
    missionTitle: language === 'nl' ? 'Nuchter Bouwen. Slim Wonen.' : 'Sober Building. Smart Living.',
    missionText: language === 'nl'
      ? '"Wij geloven dat de transitie naar duurzame woningbouw te langzaam gaat. Onze missie is om dit te versnellen door woningen te leveren die koolstofnegatief, energie-onafhankelijk en gebouwd voor het leven zijn."'
      : '"We believe the transition to sustainable housing is moving too slowly. Our mission is to accelerate it by delivering homes that are carbon-negative, energy-independent, and built for life."',
    whyUsTitle: language === 'nl' ? 'Internationale Standaarden, Lokaal Vertrouwen' : 'International Standards, Local Trust',
    whyUsSubtitle: language === 'nl' ? 'Waarom huiseigenaren en CPO-groepen kiezen voor Groenvastbouw' : 'Why homeowners and CPO groups choose Groenvastbouw',
    bootsTitle: language === 'nl' ? 'Laarzen op de Grond' : 'Boots on the Ground',
    bootsDesc: language === 'nl'
      ? 'Nuno is uw directe contactpersoon in Nederland. Hij beheert de bouwplaats, coördineert teams en zorgt voor duidelijke, transparante communicatie gedurende het hele proces.'
      : 'Nuno is your direct point of contact in the Netherlands. He manages the site, coordinates teams, and ensures clear, transparent communication throughout the entire process.',
    certifiedTitle: language === 'nl' ? 'Gecertificeerde Expertise' : 'Certified Expertise',
    certifiedDesc: language === 'nl'
      ? 'Wij beschikken over volledige VCA-certificering en uitgebreide verzekering. Onze toewijding aan veiligheid en naleving geeft u gemoedsrust vanaf dag één.'
      : 'We hold full VCA certification and carry comprehensive insurance. Our commitment to safety and compliance gives you peace of mind from day one.',
    multilingualTitle: language === 'nl' ? 'Meertalig Management' : 'Multilingual Management',
    multilingualDesc: language === 'nl'
      ? 'Vloeiend in Engels, Frans, Portugees en Nederlands. Wij elimineren de communicatiebarrières die vaak voorkomen in internationale toeleveringsketens, zodat uw visie perfect wordt begrepen.'
      : 'Fluent in English, French, Portuguese, and Dutch. We eliminate the communication barriers often found in international supply chains, ensuring your vision is perfectly understood.',
    ctaTitle: language === 'nl' ? 'Klaar om de Toekomst te Bouwen?' : 'Ready to Build the Future?',
    ctaText: language === 'nl'
      ? 'Of u nu een particuliere huiseigenaar bent die op zoek is naar een passieve villa of een CPO-groep die een duurzame gemeenschap plant, laten we bespreken hoe we uw visie werkelijkheid kunnen maken.'
      : 'Whether you are a private homeowner looking for a passive villa or a CPO group planning a sustainable community, let\'s discuss how we can turn your vision into reality.',
    contactNuno: language === 'nl' ? 'Contact Nuno' : 'Contact Nuno',
    exploreSystems: language === 'nl' ? 'Ontdek Onze Systemen' : 'Explore Our Systems',
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#2A3439]">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 bg-[#2A3439] text-white">
        <div className="max-w-6xl mx-auto mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-[#7FB956] hover:text-white font-semibold transition-colors group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {content.backToHome}
          </a>
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
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center p-8 bg-gray-50">
                <img
                  src="/nuno-sousa-profile.jpg"
                  alt="Nuno Machado e Sousa"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#7FB956]/10 text-[#7FB956] rounded-full text-sm font-bold mb-6 w-fit">
                  {content.founderTag}
                </div>
                <h2 className="text-3xl font-bold mb-4">{content.founderTitle}</h2>
                <h3 className="text-xl text-gray-500 mb-6">{content.founderName}</h3>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{content.founderStory1}</p>
                  <p>{content.founderStory2}</p>
                  <p>{content.founderStory3}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SENMAR PARTNERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{content.partnershipTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.partnershipSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7FB956]/10 flex items-center justify-center">
                  <Zap className="text-[#7FB956]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{content.engineTitle}</h3>
                  <p className="text-gray-600">
                    {language === 'nl' 
                      ? <>Groenvastbouw heeft een strategisch partnerschap met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] hover:underline font-semibold">Senmar</a>. Hun fabriek in Portugal gebruikt CNC-robotica om houtskeletframes met millimeterprecisie te snijden. Deze "off-site" productie betekent dat uw huis wordt gebouwd in een geconditioneerde omgeving—beschermd tegen regen en wind—resulterend in nul afval en perfecte structurele integriteit.</>
                      : <>Groenvastbouw has formed a strategic partnership with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] hover:underline font-semibold">Senmar</a>. Their factory in Portugal uses CNC robotics to cut timber frames with millimeter accuracy. This "off-site" production means your home is built in a conditioned environment—safe from rain and wind—resulting in zero waste and perfect structural integrity.</>
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2A3439]/10 flex items-center justify-center">
                  <HardHat className="text-[#2A3439]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{content.driverTitle}</h3>
                  <p className="text-gray-600">{content.driverDesc}</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/senmar-photos/factory_senmar(12).jpg" 
                alt="Senmar CNC Factory Production" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold">
                {language === 'nl' ? 'Fabriek Unit 1 | Coija, Portugal' : 'Factory Unit 1 | Coija, Portugal'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION */}
      <section className="py-20 bg-[#7FB956] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Leaf className="mx-auto mb-6 w-16 h-16 text-white/80" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{content.missionTitle}</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            {content.missionText}
          </p>
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{content.whyUsTitle}</h2>
            <p className="text-gray-600">{content.whyUsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Hammer className="text-[#7FB956] mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">{content.bootsTitle}</h3>
              <p className="text-gray-600">{content.bootsDesc}</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="text-[#7FB956] mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">{content.certifiedTitle}</h3>
              <p className="text-gray-600">{content.certifiedDesc}</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Globe className="text-[#7FB956] mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">{content.multilingualTitle}</h3>
              <p className="text-gray-600">{content.multilingualDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section id="contact-cta" className="py-20 bg-[#2A3439] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8">{content.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#7FB956] hover:bg-[#6da545] text-white px-8 py-6 text-lg" onClick={() => window.location.href = '/#contact'}>
              {content.contactNuno}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A3439] px-8 py-6 text-lg" onClick={() => window.location.href = '/#services'}>
              {content.exploreSystems}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
