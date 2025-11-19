import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Leaf, Zap, Clock, Award, Users, Building2, 
  Hammer, Key, ExternalLink, ChevronDown, 
  Lightbulb, PenTool, ShieldCheck, Ruler, Factory,
  TrendingUp, Briefcase, Home as HomeIcon
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(language === 'nl' ? 'Vul alle verplichte velden in' : 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Niet opgegeven',
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      toast.success(language === 'nl' ? 'Bericht verzonden! We nemen spoedig contact met u op.' : 'Message sent! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(language === 'nl' ? 'Er is een fout opgetreden.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- REAL TECHNICAL CONTENT (Sourced from Senmar & Passive House PDFs) ---

  const faqs = [
    {
      question_nl: "Wat is Senmar MOD technologie?",
      question_en: "What is Senmar MOD technology?",
      answer_nl: "Senmar MOD (Modular On Demand) is een geïndustrialiseerd bouwproces. In tegenstelling tot traditionele bouw, produceren wij in Coja (Portugal) met CNC-machines die een tolerantie van slechts 1mm hanteren. Dit elimineert tocht, koudebruggen en bouwvocht volledig.",
      answer_en: "Senmar MOD (Modular On Demand) is an industrialized construction process. Unlike traditional building, we produce in Coja (Portugal) using CNC machines with a tolerance of just 1mm. This completely eliminates drafts, thermal bridges, and construction moisture."
    },
    {
      question_nl: "Wat zijn de technische isolatiewaarden?",
      question_en: "What are the technical insulation values?",
      answer_nl: "Wij bouwen standaard met Rc-waarden vanaf 5.7 (Optimal) tot 9.9 (Super Passive). Dit wordt bereikt door een gelaagde opbouw van 200mm tot 350mm minerale wol, in combinatie met een luchtdichte schil en dampopen constructie.",
      answer_en: "We build as standard with R-values from 5.7 (Optimal) up to 9.9 (Super Passive). This is achieved through a layered structure of 200mm to 350mm mineral wool, combined with an airtight shell and breathable construction."
    },
    {
      question_nl: "Hoe werkt het transport en de montage?",
      question_en: "How does transport and assembly work?",
      answer_nl: "De woning wordt in elementen getransporteerd (kosten transparant berekend per km). Eenmaal op uw locatie duurt de montage van de wind- en waterdichte structuur slechts 8 tot 12 dagen, waardoor overlast voor de omgeving en weersrisico's minimaal zijn.",
      answer_en: "The home is transported in elements (costs transparently calculated per km). Once at your site, assembly of the wind and watertight structure takes just 8 to 12 days, minimizing neighborhood disruption and weather risks."
    },
    {
      question_nl: "Is maatwerk mogelijk met dit systeem?",
      question_en: "Is customization possible with this system?",
      answer_nl: "Ja, absoluut. Hoewel het systeem modulair is (MOD), betekent dit niet dat u vastzit aan standaardcataloguswoningen. Wij kunnen elk architectonisch ontwerp vertalen naar ons productiesysteem, zolang het binnen de transportafmetingen past.",
      answer_en: "Yes, absolutely. Although the system is modular (MOD), this does not mean you are stuck with standard catalog homes. We can translate any architectural design into our production system, as long as it fits within transport dimensions."
    }
  ];

  // Based on 'detailed_price_analysis.md' - NO PRICES, JUST TECH SPECS
  const systems = [
    {
      name: "Optimal",
      r_value: "5.7",
      insulation: "200mm",
      desc_nl: "De technische basis voor de Nederlandse markt. Overtreft het Bouwbesluit.",
      desc_en: "The technical baseline for the Dutch market. Exceeds building regulations.",
      features_nl: ["200mm Minerale Wol", "C24 Houtskelet (195x45mm)", "OSB-3 Beplating (12mm)", "Dampopen Systeem"],
      features_en: ["200mm Mineral Wool", "C24 Timber Frame (195x45mm)", "OSB-3 Plating (12mm)", "Breathable System"]
    },
    {
      name: "Passive",
      r_value: "8.5",
      insulation: "300mm",
      desc_nl: "Voegt een externe isolatieschil toe om koudebruggen volledig te elimineren.",
      desc_en: "Adds an external insulation shell to completely eliminate thermal bridges.",
      features_nl: ["Optimal Structuur +", "100mm Externe Isolatie", "Verticale Houten Regels", "Wind- en Waterdicht Membraan"],
      features_en: ["Optimal Structure +", "100mm External Insulation", "Vertical Timber Battens", "Wind & Waterproof Membrane"],
      highlight: true
    },
    {
      name: "Super Passive",
      r_value: "9.9",
      insulation: "350mm",
      desc_nl: "Passivhaus standaard. Maximale thermische weerstand voor nul-op-de-meter.",
      desc_en: "Passive House standard. Maximum thermal resistance for net-zero energy.",
      features_nl: ["Passive Structuur +", "50mm Interne Installatielaag", "Horizontaal Regelwerk", "Geschikt voor PH-Certificering"],
      features_en: ["Passive Structure +", "50mm Internal Service Layer", "Horizontal Battens", "Ready for PH Certification"]
    }
  ];

  const markets = [
    {
      title_nl: "Particulier (B2C)",
      title_en: "Private Clients (B2C)",
      desc_nl: "Zekerheid en comfort staan centraal. U koopt geen 'bouwput', maar een geprefabriceerd systeem met garanties.",
      desc_en: "Certainty and comfort are central. You are not buying a 'construction site', but a prefabricated system with guarantees.",
      icon: HomeIcon,
      benefits_nl: ["Vaste prijs (geen meerwerk)", "Gegarandeerde opleverdatum", "Bespaar €2.000/jaar aan energie"],
      benefits_en: ["Fixed price (no overruns)", "Guaranteed delivery date", "Save €2,000/year on energy"]
    },
    {
      title_nl: "Zakelijk (B2B)",
      title_en: "Business (B2B)",
      desc_nl: "Rendement gedreven door snelheid. Onze methode verkort de bouwtijd met 70%, wat leidt tot snellere verhuur of verkoop.",
      desc_en: "ROI driven by speed. Our method reduces construction time by 70%, leading to faster rental or sales turnover.",
      icon: Briefcase,
      benefits_nl: ["Snellere cashflow cyclus", "Schaalbare serieproductie", "Minder faalkosten & risico"],
      benefits_en: ["Faster cashflow cycle", "Scalable serial production", "Reduced failure costs & risk"]
    }
  ];

  const principles = [
    {
      title_nl: "Kwaliteit en maatwerk",
      title_en: "Quality and Customization",
      description_nl: "Onze hooggespecialiseerde en gekwalificeerde medewerkers garanderen dat elk geprefabriceerd huis voldoet aan de hoogste normen van afwerking, duurzaamheid en esthetiek.",
      description_en: "Our highly specialized and qualified team ensures that each prefabricated house meets the highest standards of finish, durability and aesthetics.",
      icon: Award
    },
    {
      title_nl: "Duurzaamheid",
      title_en: "Sustainability",
      description_nl: "Wij geven prioriteit aan milieubewustzijn door gebruik te maken van duurzaam gewonnen hout en milieuvriendelijke bouwmethoden, waardoor onze ecologische voetafdruk wordt geminimaliseerd.",
      description_en: "We prioritize environmental responsibility, using sustainably sourced wood and eco-friendly construction methods, minimizing our ecological footprint.",
      icon: Leaf
    },
    {
      title_nl: "Wij delen kennis",
      title_en: "We Share Knowledge",
      description_nl: "Wij delen informatie met onze klanten over technologieën, processen en de voordelen van geprefabriceerde huizen, zodat zij weloverwogen beslissingen kunnen nemen.",
      description_en: "We share information with our clients about technologies, processes and the benefits of prefabricated houses, so they can make informed decisions.",
      icon: Users
    },
    {
      title_nl: "Flexibiliteit",
      title_en: "Flexibility",
      description_nl: "Wij geloven dat elke klant unieke behoeften heeft. Daarom bieden wij op maat gemaakte oplossingen die voldoen aan de smaak en behoeften van elk individu.",
      description_en: "We believe each client has unique needs. That's why we offer customized solutions that meet each individual's tastes and needs.",
      icon: Key
    }
  ];

  const buildingTypes = [
    {
      title_nl: "Woningen en chalets",
      title_en: "Houses and Chalets",
      description_nl: "Wij hebben uitgebreide ervaring in alle soorten residentiële bouw, van compacte woningen tot luxe villa's.",
      description_en: "We have extensive experience in all types of residential construction, from compact homes to luxurious villas."
    },
    {
      title_nl: "Commerciële gebouwen",
      title_en: "Commercial Buildings",
      description_nl: "Onze technologie stelt ons in staat om commerciële gebouwen en dienstengebouwen met meerdere verdiepingen te ontwerpen en te bouwen.",
      description_en: "Our technology allows us to design and build multi-story commercial and service buildings including office buildings."
    },
    {
      title_nl: "Woongebouwen",
      title_en: "Residential Buildings",
      description_nl: "Onze diensten omvatten de ontwikkeling en bouw van wooncomplexen, van rijtjeshuizen en appartementen tot woonwijken.",
      description_en: "Our services include the development and construction of residential complexes from townhouses and apartments to housing developments."
    },
    {
      title_nl: "Tiny houses / bungalows",
      title_en: "Tiny Houses / Bungalows",
      description_nl: "Wij creëren een verscheidenheid aan tiny houses, perfect voor een eenvoudige en minimalistische levensstijl. Super efficiënt en duurzaam.",
      description_en: "We create a variety of tiny houses, perfect for a simple and minimalist lifestyle. Super efficient and sustainable."
    },
    {
      title_nl: "Sauna's en bijgebouwen",
      title_en: "Saunas and Annexes",
      description_nl: "Wij zijn beschikbaar om elke structuur of bijgebouw bij uw huis te bouwen. Van sauna's, fitnessruimtes tot schuren.",
      description_en: "We are available to build any structure or annex to your home. From saunas, gyms to sheds."
    },
    {
      title_nl: "Buitenaanleg",
      title_en: "Outdoor Arrangements",
      description_nl: "Wij ontwikkelen alle soorten buitenaanleg, van bloembedden tot kassen en vijvers.",
      description_en: "We develop all types of outdoor arrangements, from flower beds to greenhouses and ponds."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />

      {/* 1. HERO SECTION - EXACT ORIGINAL DESIGN (New Image) */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* NEW IMAGE: hero-bg.jpg */}
          <img 
            src="/images/new/hero-bg.jpg" 
            alt="Senmar Passive House Structure" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        
        {/* KvK/Insurance Mini-Badges */}
        <div className="absolute top-24 right-4 z-20 hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-xs space-y-1">
            <div className="font-semibold text-gray-900">KvK: 75308045</div>
            <div className="text-gray-700">€2,5M Verzekerd</div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="lg:hidden text-center pt-8 pb-12">
            <h2 className="text-xl font-normal text-white drop-shadow-2xl italic">Nuchter bouwen. Slim wonen.</h2>
          </div>

          <div className="max-w-4xl lg:mx-0 mx-auto">
            <div className="mb-4 hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light text-green-400 mb-2">Groenvastbouw</h2>
              <p className="text-xl md:text-2xl text-white/90 italic">Nuchter bouwen. Slim wonen.</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              {language === 'nl' ? 'Duurzame woningen op maat' : 'Sustainable Homes Tailored to You'}
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg">
              {language === 'nl' 
                ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energie-efficiënt, duurzaam en betaalbaar.' 
                : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/31629841297?text=Hallo%20Nuno,%20ik%20wil%20meer%20weten%20over%20een%20passiefhuis"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg font-bold px-8 py-6 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Nuno Direct
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => scrollToSection('services')}
              >
                {language === 'nl' ? 'Onze diensten' : 'Our services'}
              </Button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('senmar')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* 2. ABOUT SECTION (Original Design) */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/vista_interior.jpg" 
            alt="Interior" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('about_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about_subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="/images/construction_1.jpg" 
                alt="Construction" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Groenvastbouw is uw partner voor duurzame woningbouw in Nederland. In exclusieve samenwerking met <strong>Senmar</strong>, een toonaangevend Portugees bedrijf gespecialiseerd in hoogwaardige passieve houtskeletbouw, brengen wij geavanceerde technologie naar de Nederlandse markt.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-4">{t('about_mission_title')}</h3>
                <p className="text-gray-700 mb-4">{t('about_mission_text')}</p>
                <a href="/about" className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold transition-colors">
                  {language === 'nl' ? 'Lees meer over ons' : 'Read more about us'}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPLES (Original Design) */}
      <section id="principles" className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Onze Principes' : 'Our Principles'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="border-green-200 hover:shadow-2xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {language === 'nl' ? principle.title_nl : principle.title_en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {language === 'nl' ? principle.description_nl : principle.description_en}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BUILDING TYPES (Original Design) */}
      <section id="building-types" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Wat Wij Bouwen' : 'What We Build'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingTypes.map((type, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-xl transition-all hover:border-green-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">
                    {language === 'nl' ? type.title_nl : type.title_en}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'nl' ? type.description_nl : type.description_en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY / SENMAR SECTION (Upgraded Content) */}
      <section id="senmar" className="relative py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Senmar Partnership
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Technologie & Innovatie' : 'Technology & Innovation'}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {language === 'nl' ? 'De nieuwe standaard in systeembouw.' : 'The new standard in system construction.'}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'nl' 
                  ? 'Groenvastbouw is de exclusieve partner van Senmar. Wij werken met de revolutionaire MOD (Modular On Demand) technologie. In onze geconditioneerde fabriek produceren CNC-machines uw woning tot op de millimeter nauwkeurig. Dit elimineert menselijke fouten en weersinvloeden, wat resulteert in een superieure kwaliteit.' 
                  : 'Groenvastbouw is the exclusive partner of Senmar. We work with the revolutionary MOD (Modular On Demand) technology. In our conditioned factory, CNC machines produce your home with millimeter precision. This eliminates human error and weather influences, resulting in superior quality.'}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  language === 'nl' ? '70% Snellere bouwtijd op locatie' : '70% Faster construction time on site',
                  language === 'nl' ? 'Volledige thermische onderbreking (geen koudebruggen)' : 'Full thermal break (no thermal bridges)',
                  language === 'nl' ? 'Isolatiewaarden tot R-10 (Passivhaus)' : 'Insulation values up to R-10 (Passive House)',
                  language === 'nl' ? 'Gegarandeerde vaste prijs' : 'Guaranteed fixed price'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://senmar.pt/en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  {language === 'nl' ? 'Bezoek Senmar Website' : 'Visit Senmar Website'}
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* NEW IMAGE: tech-frame.jpg */}
              <img 
                src="/images/new/tech-frame.jpg" 
                alt="Senmar CNC Timber Frame" 
                className="rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => { e.currentTarget.src = "/images/construction_1.jpg" }}
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <Ruler className="text-green-600" size={20} />
                  <span className="font-bold text-gray-900">CNC Precisie</span>
                </div>
                <p className="text-xs text-gray-600">Millimeter-nauwkeurig</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARKETS SECTION (New - Mapped to 'benefits') */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Oplossingen op Maat' : 'Tailored Solutions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' ? 'Of u nu particulier bouwt of professioneel ontwikkelt.' : 'Whether you build privately or develop professionally.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* B2C - Private */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                {/* NEW IMAGE: b2c-luxury.jpg */}
                <img 
                  src="/images/new/b2c-luxury.jpg" 
                  alt="Private Luxury Home" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "/images/vista_interior.jpg" }}
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Particulier</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Uw Droomhuis Zonder Zorgen' : 'Your Dream Home Worry-Free'}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'nl' 
                    ? 'Bouwen in eigen beheer is vaak stressvol. Wij nemen die zorg weg. Kies voor een gegarandeerde opleverdatum, een vaste prijs en een woning die klaar is voor de toekomst (BENG & Gasloos).' 
                    : 'Self-building is often stressful. We remove that worry. Choose a guaranteed delivery date, a fixed price, and a home ready for the future.'}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><Leaf size={20} className="text-green-600"/> {language === 'nl' ? 'Gezond binnenklimaat' : 'Healthy indoor climate'}</li>
                  <li className="flex gap-2"><Zap size={20} className="text-green-600"/> {language === 'nl' ? 'Extreem lage energierekening' : 'Extremely low energy bill'}</li>
                  <li className="flex gap-2"><Key size={20} className="text-green-600"/> {language === 'nl' ? 'Sleutelklaar mogelijk' : 'Turnkey possible'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* B2B - Business */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                {/* NEW IMAGE: b2b-project.jpg */}
                <img 
                  src="/images/new/b2b-project.jpg" 
                  alt="Business Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "/images/construction_2.jpg" }}
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">Zakelijk</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Voor Ontwikkelaars' : 'For Developers'}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'nl' 
                    ? 'Tijd is rendement. Onze prefab methode verkort de bouwtijd op locatie met 70%. Ideaal voor woningcorporaties, projectontwikkelaars en recreatieparken die snel willen schakelen.' 
                    : 'Time is ROI. Our prefab method reduces on-site construction time by 70%. Ideal for housing corporations, developers, and recreation parks needing speed.'}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><TrendingUp size={20} className="text-green-600"/> {language === 'nl' ? 'Snellere verhuur/verkoop' : 'Faster rental/sales'}</li>
                  <li className="flex gap-2"><Briefcase size={20} className="text-green-600"/> {language === 'nl' ? 'Schaalbare productie' : 'Scalable production'}</li>
                  <li className="flex gap-2"><ShieldCheck size={20} className="text-green-600"/> {language === 'nl' ? 'Lage faalkosten' : 'Low failure costs'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. SYSTEMS SECTION (New Tech Specs - Mapped to 'services') */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {language === 'nl' ? 'Geavanceerde Bouwsystemen' : 'Advanced Construction Systems'}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Geen compromissen op kwaliteit. Kies het isolatieniveau dat past bij uw ambities.' 
                : 'No compromises on quality. Choose the insulation level that fits your ambitions.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((system, index) => (
              <div key={index} className={`p-8 rounded-xl border transition-all ${system.highlight ? 'bg-gray-800 border-green-500 shadow-2xl transform md:-translate-y-2' : 'bg-gray-800/50 border-gray-700'}`}>
                {system.highlight && (
                   <div className="text-green-400 text-xs font-bold uppercase tracking-wide mb-2">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{system.name}</h3>
                <div className="text-green-400 font-bold text-3xl mb-6">R-{system.r_value}</div>
                <p className="text-gray-400 mb-6 min-h-[80px]">
                  {language === 'nl' ? system.desc_nl : system.desc_en}
                </p>
                <ul className="space-y-3 border-t border-gray-700/50 pt-6">
                  {(language === 'nl' ? system.features_nl : system.features_en).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-green-500 mt-1">●</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button onClick={() => scrollToSection('contact')} className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-6 px-8 text-lg">
               {language === 'nl' ? 'Vergelijk Specificaties' : 'Compare Specifications'}
             </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQ (Original Layout, New Content) */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center font-semibold text-gray-900 text-lg">
                   <span>{language === 'nl' ? faq.question_nl : faq.question_en}</span>
                   <ChevronDown size={20} className={`text-green-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </div>
                {openFaq === index && <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{language === 'nl' ? faq.answer_nl : faq.answer_en}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT (Original) */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_title')}</h2>
            <p className="text-xl text-white/90">
              {language === 'nl' ? 'Laten we uw duurzame droomproject bespreken' : 'Let\'s discuss your sustainable dream project'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">{t('contact_info_title')}</h3>
              <div className="space-y-4">
                <div><h4 className="font-semibold">Groenvastbouw</h4><p className="text-white/90">Wageningen, Nederland</p></div>
                <div><h4 className="font-semibold">Email</h4><a href="mailto:info@groenvastbouw.nl" className="text-green-400 hover:text-green-300">info@groenvastbouw.nl</a></div>
                <div><h4 className="font-semibold">Telefoon</h4><a href="tel:0629841297" className="text-green-400 hover:text-green-300">06 2984 1297</a></div>
                <div><h4 className="font-semibold">KvK</h4><p className="text-white/90">75308045</p></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder={t('contact_name')} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/10 border-white/20 text-white" />
              <Input type="email" placeholder={t('contact_email')} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/10 border-white/20 text-white" />
              <Input type="tel" placeholder={t('contact_phone')} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/10 border-white/20 text-white" />
              <Textarea placeholder={t('contact_message')} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="bg-white/10 border-white/20 text-white" />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6" disabled={isSubmitting}>{isSubmitting ? '...' : t('contact_submit')}</Button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. FOOTER (Original) */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="Groenvastbouw" className="h-20 w-auto mb-4" />
              <p className="text-gray-400 text-sm">{language === 'nl' ? 'Duurzame woningbouw met passie voor kwaliteit en milieu.' : 'Sustainable housing with passion for quality and environment.'}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_links')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white">{t('nav_about')}</a></li>
                <li><a href="#services" className="hover:text-white">{t('nav_services')}</a></li>
                <li><a href="#senmar" className="hover:text-white">{t('nav_senmar')}</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Wageningen, Nederland</li>
                <li><a href="mailto:info@groenvastbouw.nl" className="hover:text-white">info@groenvastbouw.nl</a></li>
                <li><a href="tel:0629841297" className="hover:text-white">06 2984 1297</a></li>
                <li>KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
