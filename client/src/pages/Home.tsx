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

  // --- PROFESSIONAL CONTENT DATA ---

  const faqs = [
    {
      question_nl: "Wat is Senmar MOD technologie?",
      question_en: "What is Senmar MOD technology?",
      answer_nl: "Senmar MOD (Modular On Demand) is de volgende generatie in systeembouw. Door elementen in een geconditioneerde fabriek te produceren met CNC-precisie, elimineren we weersinvloeden en menselijke fouten. Dit resulteert in een bouwtijd die tot 70% korter is en een superieure afwerkingskwaliteit.",
      answer_en: "Senmar MOD (Modular On Demand) is the next generation in system construction. By producing elements in a conditioned factory with CNC precision, we eliminate weather influences and human errors. This results in a construction time that is up to 70% shorter and superior finish quality."
    },
    {
      question_nl: "Hoe energiezuinig zijn deze woningen?",
      question_en: "How energy efficient are these homes?",
      answer_nl: "Onze woningen besparen tot 90% op energie voor verwarming en koeling. Met isolatiewaarden tot R-10, luchtdichte constructie en standaard drievoudig glas, voldoen we aan de strengste Passivhaus-normen. Dit betekent een besparing van circa €2.000 per jaar op energiekosten.",
      answer_en: "Our homes save up to 90% on energy for heating and cooling. With insulation values up to R-10, airtight construction, and standard triple glazing, we meet the strictest Passive House standards. This means a saving of approximately €2,000 per year on energy costs."
    },
    {
      question_nl: "Wat is de levertijd?",
      question_en: "What is the delivery time?",
      answer_nl: "Dankzij onze geoptimaliseerde productielijn kunnen we een casco woning wind- en waterdicht opleveren in slechts 7-10 dagen op locatie. Het totale proces van opdracht tot oplevering duurt doorgaans 3-5 maanden.",
      answer_en: "Thanks to our optimized production line, we can deliver a shell home wind and watertight in just 7-10 days on site. The total process from order to delivery typically takes 3-5 months."
    }
  ];

  const systems = [
    {
      name: "Optimal",
      r_value: "5.7",
      insulation: "200mm",
      desc_nl: "De ideale balans tussen isolatie en investering. Overtreft standaard bouwbesluit-eisen ruimschoots.",
      desc_en: "The ideal balance between insulation and investment. Far exceeds standard building code requirements.",
      features_nl: ["200mm Minerale Wol", "Dampopen constructie", "Rc > 5.0"],
      features_en: ["200mm Mineral Wool", "Breathable construction", "R-value > 5.0"]
    },
    {
      name: "Passive",
      r_value: "8.5",
      insulation: "300mm",
      desc_nl: "Onze standaard voor energiezuinig wonen. Elimineert koudebruggen voor maximaal comfort.",
      desc_en: "Our standard for energy-efficient living. Eliminates thermal bridges for maximum comfort.",
      features_nl: ["Dubbele isolatielaag (200+100mm)", "Superieure luchtdichtheid", "Rc > 8.0"],
      features_en: ["Double insulation layer (200+100mm)", "Superior airtightness", "R-value > 8.0"],
      highlight: true
    },
    {
      name: "Super Passive",
      r_value: "10.5",
      insulation: "350mm",
      desc_nl: "Ontworpen voor Passivhaus-certificering. De ultieme keuze voor nul-op-de-meter ambities.",
      desc_en: "Designed for Passivhaus certification. The ultimate choice for net-zero ambitions.",
      features_nl: ["Drievoudige isolatielaag", "Passivhaus Certificeerbaar", "Rc > 10.0"],
      features_en: ["Triple insulation layer", "Passivhaus Certifiable", "R-value > 10.0"]
    }
  ];

  const markets = [
    {
      title_nl: "Particulier & Wonen",
      title_en: "Private & Residential",
      desc_nl: "Realiseer uw droomhuis zonder bouwzorgen. Wij garanderen een vaste prijs, een vaste opleverdatum en een woning die klaar is voor de toekomst.",
      desc_en: "Realize your dream home without construction worries. We guarantee a fixed price, a fixed delivery date, and a home that is ready for the future.",
      icon: HomeIcon,
      benefits_nl: ["Energiebesparing tot 90%", "Gezond binnenklimaat", "Sleutelklaar mogelijk"],
      benefits_en: ["Energy savings up to 90%", "Healthy indoor climate", "Turnkey options available"]
    },
    {
      title_nl: "Zakelijk & Ontwikkeling",
      title_en: "Business & Development",
      desc_nl: "Schaalbare oplossingen voor projectontwikkelaars en woningcorporaties. Maximaliseer ROI door snelle bouwtijden en lage faalkosten.",
      desc_en: "Scalable solutions for developers and housing corporations. Maximize ROI through rapid construction times and low failure costs.",
      icon: Briefcase,
      benefits_nl: ["70% Sneller dan traditioneel", "Prefabricage in fabriek", "Voorspelbare kosten"],
      benefits_en: ["70% Faster than traditional", "Factory prefabrication", "Predictable costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />

      {/* 1. HERO SECTION - EXACT ORIGINAL DESIGN */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-groenvastbouw.jpg" 
            alt="Senmar Passive House Structure - 3 months to windproof" 
            className="w-full h-full object-cover"
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
          {/* Mobile: Slogan */}
          <div className="lg:hidden text-center pt-8 pb-12">
            <h2 className="text-xl font-normal text-white drop-shadow-2xl italic">Nuchter bouwen. Slim wonen.</h2>
          </div>

          <div className="max-w-4xl lg:mx-0 mx-auto">
            {/* Desktop: Groenvastbouw + slogan */}
            <div className="mb-4 hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light text-green-400 mb-2">Groenvastbouw</h2>
              <p className="text-xl md:text-2xl text-white/90 italic">Nuchter bouwen. Slim wonen.</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              {language === 'nl' 
                ? 'Duurzame woningen op maat' 
                : 'Sustainable Homes Tailored to You'}
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg">
              {language === 'nl' 
                ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energie-efficiënt, duurzaam en betaalbaar.' 
                : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable.'}
            </p>

            {/* CTAs */}
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

      {/* 2. TECHNOLOGY / SENMAR SECTION (Mapped to #senmar) */}
      <section id="senmar" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl -rotate-2"></div>
              <img 
                src="/images/new/tech-frame.jpg" 
                alt="Senmar Factory CNC Technology" 
                className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
                onError={(e) => { e.currentTarget.src = "/images/construction_3.jpg" }}
              />
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-green-600">
                <p className="text-sm font-bold text-gray-900">
                  CNC Precisie Productie
                </p>
                <p className="text-xs text-gray-600">
                  Millimeter-nauwkeurig, geen foutmarges.
                </p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                <Award size={16} className="text-green-600" />
                Exclusive Partnership
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {language === 'nl' ? 'Innovatie door Automatisering.' : 'Innovation through Automation.'}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {language === 'nl' 
                  ? 'De bouwsector verandert. Traditionele bouw is traag en gevoelig voor weersinvloeden. Groenvastbouw kiest voor Senmar MOD (Modular On Demand): een geïndustrialiseerd proces waarbij uw woning onder ideale omstandigheden wordt geproduceerd.'
                  : 'The construction sector is changing. Traditional building is slow and weather-sensitive. Groenvastbouw chooses Senmar MOD (Modular On Demand): an industrialized process where your home is produced under ideal conditions.'}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{language === 'nl' ? '70% Snellere Bouwtijd' : '70% Faster Construction'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'nl' ? 'Terwijl de fundering wordt gelegd, wordt uw huis geproduceerd. Montage op locatie in dagen, niet maanden.' : 'While the foundation is laid, your home is produced. On-site assembly in days, not months.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{language === 'nl' ? 'Thermische Perfectie' : 'Thermal Perfection'}</h4>
                    <p className="text-gray-600 text-sm">
                      {language === 'nl' ? 'Luchtdichte constructie zonder koudebruggen (Thermal Bridge Free). R-waarden tot 10.5 mogelijk.' : 'Airtight construction without thermal bridges. R-values up to 10.5 possible.'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                 <a href="https://senmar.pt/en" target="_blank" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2">
                   {language === 'nl' ? 'Lees meer over Senmar' : 'Read more about Senmar'} <ExternalLink size={16}/>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARKETS SECTION (Mapped to #benefits) */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Oplossingen voor elke schaal' : 'Solutions for every scale'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' ? 'Of u nu één droomhuis bouwt of een hele wijk ontwikkelt.' : 'Whether you are building one dream home or developing an entire district.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* B2C Card */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                 <img 
                  src="/images/new/b2c-luxury.jpg" 
                  alt="Private Luxury" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "/images/vista_interior.jpg" }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-gray-900">Particulier</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Particulier & Wonen' : 'Private & Residential'}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'nl' ? 'Realiseer uw droomhuis zonder bouwzorgen. Wij garanderen een vaste prijs, een vaste opleverdatum en een woning die klaar is voor de toekomst.' : 'Realize your dream home without construction worries. We guarantee a fixed price, a fixed delivery date, and a home that is ready for the future.'}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><Leaf size={16} className="text-green-600" /> {language === 'nl' ? 'Energiebesparing tot 90%' : 'Energy savings up to 90%'}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><HomeIcon size={16} className="text-green-600" /> {language === 'nl' ? 'Gezond binnenklimaat' : 'Healthy indoor climate'}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><Key size={16} className="text-green-600" /> {language === 'nl' ? 'Sleutelklaar mogelijk' : 'Turnkey options available'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* B2B Card */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                 <img 
                  src="/images/new/b2b-project.jpg" 
                  alt="Business Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "/images/construction_2.jpg" }}
                />
                <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white">Zakelijk</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Zakelijk & Ontwikkeling' : 'Business & Development'}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === 'nl' ? 'Schaalbare oplossingen voor projectontwikkelaars. Maximaliseer ROI door snelle bouwtijden en lage faalkosten.' : 'Scalable solutions for developers. Maximize ROI through rapid construction times and low failure costs.'}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><Clock size={16} className="text-green-600" /> {language === 'nl' ? '70% Sneller dan traditioneel' : '70% Faster than traditional'}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><Factory size={16} className="text-green-600" /> {language === 'nl' ? 'Prefabricage in fabriek' : 'Factory prefabrication'}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><TrendingUp size={16} className="text-green-600" /> {language === 'nl' ? 'Snellere ROI' : 'Faster ROI'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. SYSTEMS SECTION (Mapped to #services) */}
      <section id="services" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Engineering</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              {language === 'nl' ? 'Geavanceerde Bouwsystemen' : 'Advanced Construction Systems'}
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Kies het prestatieniveau dat past bij uw ambities. Van zeer energiezuinig tot volledig zelfvoorzienend.' 
                : 'Choose the performance level that matches your ambitions. From highly energy-efficient to fully self-sufficient.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((system, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  system.highlight 
                    ? 'bg-gray-800 border-green-500 shadow-2xl' 
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                }`}
              >
                {system.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {language === 'nl' ? 'Meest Gekozen' : 'Most Popular'}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{system.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-green-400">R-{system.r_value}</span>
                  <span className="text-gray-500">W/m²K</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-8 min-h-[60px] leading-relaxed">
                  {language === 'nl' ? system.desc_nl : system.desc_en}
                </p>
                
                <div className="space-y-4 border-t border-gray-700/50 pt-6">
                  {(language === 'nl' ? system.features_nl : system.features_en).map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                      <span className="text-sm text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>
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

      {/* 5. FAQ SECTION (Mapped to #faq) */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center font-semibold text-gray-800">
                   <span>{language === 'nl' ? faq.question_nl : faq.question_en}</span>
                   <ChevronDown size={20} className={`text-green-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </div>
                {openFaq === index && <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{language === 'nl' ? faq.answer_nl : faq.answer_en}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (Original Style) */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/construction_4.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact_title')}
            </h2>
            <p className="text-xl text-white/90">
              {language === 'nl' 
                ? 'Laten we uw duurzame droomproject bespreken' 
                : 'Let\'s discuss your sustainable dream project'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact_info_title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Groenvastbouw</h4>
                  <p className="text-white/90">Wageningen, Nederland</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:info@groenvastbouw.nl" className="text-green-400 hover:text-green-300">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">{language === 'nl' ? 'Telefoon' : 'Phone'}</h4>
                  <a href="tel:0629841297" className="text-green-400 hover:text-green-300">
                    06 2984 1297
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">KvK</h4>
                  <p className="text-white/90">75308045</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder={t('contact_name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact_email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact_phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact_message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === 'nl' ? 'Verzenden...' : 'Sending...') 
                  : t('contact_submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER (Original Style) */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="Groenvastbouw" className="h-20 w-auto mb-4" />
              <p className="text-gray-400">
                {language === 'nl' 
                  ? 'Duurzame woningbouw met passie voor kwaliteit en milieu.' 
                  : 'Sustainable housing with passion for quality and environment.'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_links')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">{t('nav_about')}</a></li>
                <li><a href="#services" className="hover:text-white">{t('nav_services')}</a></li>
                <li><a href="#senmar" className="hover:text-white">{t('nav_senmar')}</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wageningen, Nederland</li>
                <li><a href="mailto:info@groenvastbouw.nl" className="hover:text-white">info@groenvastbouw.nl</a></li>
                <li><a href="tel:0629841297" className="hover:text-white">06 2984 1297</a></li>
                <li>KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
            <p className="text-sm">
              {language === 'nl' 
                ? 'KvK: 75308045 | Aansprakelijkheidsverzekering: €2.500.000' 
                : 'Chamber of Commerce: 75308045 | Liability Insurance: €2,500,000'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
