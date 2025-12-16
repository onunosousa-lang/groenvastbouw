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

  // --- CONTENT (Senmar MOD & Price Analysis) ---

  const faqs = [
    {
      question_nl: "Wat is Senmar MOD technologie?",
      question_en: "What is Senmar MOD technology?",
      answer_nl: "Senmar MOD (Modular On Demand) is een geïndustrialiseerd bouwproces. Door elementen in een geconditioneerde fabriek te produceren met CNC-precisie, elimineren we weersinvloeden en menselijke fouten.",
      answer_en: "Senmar MOD (Modular On Demand) is an industrialized construction process. By producing elements in a conditioned factory with CNC precision, we eliminate weather influences and human errors."
    },
    {
      question_nl: "Hoe energiezuinig zijn deze woningen?",
      question_en: "How energy efficient are these homes?",
      answer_nl: "Onze woningen besparen tot 90% op energie. Met isolatiewaarden tot R-10 en luchtdichte constructie voldoen we aan de strengste Passivhaus-normen.",
      answer_en: "Our homes save up to 90% on energy. With insulation values up to R-10 and airtight construction, we meet the strictest Passive House standards."
    },
    {
      question_nl: "Wat is de levertijd?",
      question_en: "What is the delivery time?",
      answer_nl: "Dankzij onze geoptimaliseerde productielijn kunnen we een casco woning wind- en waterdicht opleveren in slechts 7-10 dagen op locatie.",
      answer_en: "Thanks to our optimized production line, we can deliver a shell home wind and watertight in just 7-10 days on site."
    }
  ];

  const systems = [
    {
      name: "Optimal",
      r_value: "5.7",
      insulation: "200mm",
      desc_nl: "De ideale balans tussen investering en prestatie. Overtreft standaard bouwbesluit-eisen ruimschoots.",
      desc_en: "The ideal balance between investment and performance. Far exceeds standard building code requirements.",
      features_nl: ["200mm Minerale Wol", "Dampopen constructie", "Rc > 5.0"],
      features_en: ["200mm Mineral Wool", "Breathable construction", "R-value > 5.0"]
    },
    {
      name: "Passive",
      r_value: "8.5",
      insulation: "300mm",
      desc_nl: "Onze standaard voor energiezuinig wonen. Elimineert koudebruggen voor maximaal comfort.",
      desc_en: "Our standard for energy-efficient living. Eliminates thermal bridges for maximum comfort.",
      features_nl: ["Dubbele isolatielaag", "Superieure luchtdichtheid", "Rc > 8.0"],
      features_en: ["Double insulation layer", "Superior airtightness", "R-value > 8.0"],
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

      {/* 1. HERO - OPTIMIZED LAYOUT */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/new/hero-bg.jpg" 
            alt="Senmar Passive House Structure" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        <div className="absolute top-24 right-4 z-20 hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-xs space-y-1">
            <div className="font-semibold text-gray-900">KvK: 75308045</div>
            <div className="text-gray-700">€2,5M Verzekerd</div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 pt-24">
          <div className="max-w-3xl lg:mx-0 mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-light text-green-400 mb-2">Groenvastbouw</h2>
              <p className="text-xl md:text-2xl text-white/90 italic">Nuchter bouwen. Slim wonen.</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              {language === 'nl' ? 'Duurzame woningen op maat' : 'Sustainable Homes Tailored to You'}
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg max-w-2xl">
              {language === 'nl' 
                ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energiezuinig, duurzaam en betaalbaar.'
                : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/31629841297" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg font-bold px-8 py-5 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
                💬 WhatsApp Nuno Direct
              </a>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-5 backdrop-blur-sm" onClick={() => scrollToSection('services')}>
                {language === 'nl' ? 'Onze diensten' : 'Our services'}
              </Button>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('senmar')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
          <ChevronDown size={40} />
        </button>
      </section>

      {/* 1.5 SENMAR PARTNERSHIP INTRO */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed">
              {language === 'nl' 
                ? <>In samenwerking met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Senmar</a>, een bedrijf dat toonaangevend is in duurzame bouwtechnologie, leveren wij echte oplossingen voor Nederlandse gezinnen. Hoogwaardige passieve huizen die echte duurzaamheid combineren met maximale efficiëntie, kostenbeheersing en comfort dat je voelt.</>
                : <>In partnership with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Senmar</a>, a company leading sustainable building technology, we deliver real solutions for Dutch families. High quality passive houses that combine genuine sustainability with maximum efficiency, cost control, and comfort you can feel.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* 1.6 PROBLEM & SOLUTION - NEW PITCH NARRATIVE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          
          {/* Problem */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
                {t('problem_title')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('problem_subtitle')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Users className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('problem_labor')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('problem_time')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('problem_cost')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('problem_energy')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                {t('solution_title')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('solution_subtitle')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{t('solution_speed')}</h3>
                  <p className="text-gray-700">{t('solution_speed_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{t('solution_energy')}</h3>
                  <p className="text-gray-700">{t('solution_energy_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{t('solution_quality')}</h3>
                  <p className="text-gray-700">{t('solution_quality_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{t('solution_future')}</h3>
                  <p className="text-gray-700">{t('solution_future_desc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 1.6 VIDEO SHOWCASE - SENMAR SOLUTION */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
                {language === 'nl' ? 'Zie het in actie' : 'See it in action'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {language === 'nl' ? 'Senmar Passieve Oplossing' : 'Senmar Passive Solution'}
              </h2>
              <p className="text-xl text-gray-300">
                {language === 'nl' ? 'Industriële precisie ontmoet duurzaam bouwen' : 'Industrial precision meets sustainable construction'}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-auto"
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/images/new/hero-bg.jpg"
              >
                <source src="/senmar-solution.mp4" type="video/mp4" />
                {language === 'nl' ? 'Uw browser ondersteunt geen video.' : 'Your browser does not support video.'}
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm md:text-base">
                  {language === 'nl' 
                    ? 'CNC-precisie, fabrieksproductie en Passivhaus-certificering in één geïntegreerde oplossing.' 
                    : 'CNC precision, factory production and Passive House certification in one integrated solution.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNOLOGY (Mapped to #senmar) */}
      <section id="senmar" className="relative py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Senmar Partnership</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Technologie & Innovatie' : 'Technology & Innovation'}</h2>
              <p className="text-xl text-gray-600 mb-6">{language === 'nl' ? 'De nieuwe standaard in systeembouw.' : 'The new standard in system construction.'}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'nl' ? 'Groenvastbouw is de exclusieve partner van Senmar. Wij werken met de revolutionaire MOD (Modular On Demand) technologie. CNC-precisie elimineert fouten en garandeert kwaliteit.' : 'Groenvastbouw is the exclusive partner of Senmar. We work with MOD (Modular On Demand) technology. CNC precision eliminates errors and guarantees quality.'}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  language === 'nl' ? '70% Snellere bouwtijd op locatie' : '70% Faster construction time on site',
                  language === 'nl' ? 'Geen koudebruggen (Thermal Bridge Free)' : 'No thermal bridges (Thermal Bridge Free)',
                  language === 'nl' ? 'Isolatiewaarden tot R-10 (Passivhaus)' : 'Insulation values up to R-10 (Passive House)'
                ].map((item, i) => <li key={i} className="flex items-start"><span className="text-green-600 mr-2 font-bold">✓</span><span className="text-gray-700">{item}</span></li>)}
              </ul>
              <a href="https://senmar.pt/en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors">
                {language === 'nl' ? 'Bezoek Senmar Website' : 'Visit Senmar Website'} <ExternalLink size={20} />
              </a>
            </div>
            <div className="relative">
              <img src="/images/new/tech-frame.jpg" alt="Senmar CNC Timber Frame" className="rounded-lg shadow-2xl" onError={(e) => { e.currentTarget.src = "/images/construction_1.jpg" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARKETS (Mapped to #benefits) */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Oplossingen op Maat' : 'Tailored Solutions'}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* B2C */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/new/b2c-luxury.jpg" alt="Private Luxury Home" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/vista_interior.jpg" }} />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Particulier</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Particulier & Wonen' : 'Private & Residential'}</h3>
                <p className="text-gray-600 mb-6">{language === 'nl' ? 'Realiseer uw droomhuis zonder bouwzorgen. Vaste prijzen, vaste opleverdata.' : 'Realize your dream home without worries. Fixed prices, fixed delivery dates.'}</p>
                <ul className="space-y-2 text-gray-700"><li className="flex gap-2"><Leaf size={20} className="text-green-600"/> {language === 'nl' ? 'Gezond binnenklimaat' : 'Healthy indoor climate'}</li><li className="flex gap-2"><Zap size={20} className="text-green-600"/> {language === 'nl' ? 'Extreem lage energierekening' : 'Extremely low energy bill'}</li></ul>
              </CardContent>
            </Card>
            {/* B2B */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/new/b2b-project.jpg" alt="Business Development" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/construction_2.jpg" }} />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">Zakelijk</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'nl' ? 'Voor Ontwikkelaars' : 'For Developers'}</h3>
                <p className="text-gray-600 mb-6">{language === 'nl' ? 'Schaalbare oplossingen. Maximaliseer ROI door snelle bouwtijden.' : 'Scalable solutions. Maximize ROI through rapid construction.'}</p>
                <ul className="space-y-2 text-gray-700"><li className="flex gap-2"><TrendingUp size={20} className="text-green-600"/> {language === 'nl' ? 'Snellere verhuur/verkoop' : 'Faster rental/sales'}</li><li className="flex gap-2"><ShieldCheck size={20} className="text-green-600"/> {language === 'nl' ? 'Lage faalkosten' : 'Low failure costs'}</li></ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. SYSTEMS (Mapped to #services) */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{language === 'nl' ? 'Geavanceerde Bouwsystemen' : 'Advanced Construction Systems'}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{language === 'nl' ? 'Kies het isolatieniveau dat past bij uw ambities.' : 'Choose the insulation level that fits your ambitions.'}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((system, index) => (
              <div key={index} className={`p-8 rounded-xl border transition-all ${system.highlight ? 'bg-gray-800 border-green-500 shadow-2xl transform md:-translate-y-2' : 'bg-gray-800/50 border-gray-700'}`}>
                <h3 className="text-2xl font-bold mb-2 text-white">{system.name}</h3>
                <div className="text-green-400 font-bold text-3xl mb-6">R-{system.r_value}</div>
                <p className="text-gray-400 mb-6">{language === 'nl' ? system.desc_nl : system.desc_en}</p>
                <ul className="space-y-3 border-t border-gray-700 pt-6">{(language === 'nl' ? system.features_nl : system.features_en).map((feat, i) => <li key={i} className="flex items-start gap-2 text-gray-300 text-sm"><span className="text-green-500">●</span> {feat}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Button onClick={() => scrollToSection('contact')} className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-6 px-8 text-lg">{language === 'nl' ? 'Vergelijk Specificaties' : 'Compare Specifications'}</Button>
          </div>
        </div>
      </section>

      {/* 4.5 Energy Comparison - Real Savings */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Wat Betekent 86% Energiebesparing?' : 'What Does 86% Energy Savings Mean?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' ? 'Concrete cijfers voor een 150m² woning' : 'Concrete numbers for a 150m² home'}
            </p>
          </div>

          {/* 7:1 Ratio Card */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl mb-8 text-center shadow-2xl">
            <div className="text-7xl font-black mb-4">7:1</div>
            <p className="text-2xl font-semibold mb-2">
              {language === 'nl' ? 'Passieve Huizen = 1 Gemiddeld Huis' : 'Passive Houses = 1 Average House'}
            </p>
            <p className="text-green-100 text-lg">
              {language === 'nl' 
                ? '7 gezinnen in onze Passieve huizen verbruiken dezelfde energie als 1 gezin in een gemiddeld Nederlands huis'
                : '7 families in our Passive houses consume the same energy as 1 family in an average Dutch house'}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
              <div className="text-sm text-gray-500 mb-2">
                {language === 'nl' ? 'Gemiddeld Nederlands Huis' : 'Average Dutch House'}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">16.500 kWh</div>
              <div className="text-sm text-gray-500 mb-4">{language === 'nl' ? 'per jaar' : 'per year'}</div>
              <div className="text-4xl font-black text-orange-500">€4.950</div>
              <div className="text-sm text-gray-500">{language === 'nl' ? 'verwarmingskosten/jaar' : 'heating costs/year'}</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500 p-6 rounded-xl">
              <div className="text-sm text-green-600 font-semibold mb-2">
                {language === 'nl' ? 'Groenvastbouw Passief' : 'Groenvastbouw Passive'}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2.250 kWh</div>
              <div className="text-sm text-gray-500 mb-4">{language === 'nl' ? 'per jaar' : 'per year'}</div>
              <div className="text-4xl font-black text-green-600">€675</div>
              <div className="text-sm text-gray-500">{language === 'nl' ? 'verwarmingskosten/jaar' : 'heating costs/year'}</div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-green-500 text-white p-8 rounded-xl mb-8 text-center">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-5xl font-black mb-2">€4.275</div>
                <div className="text-green-100 text-lg">{language === 'nl' ? 'besparing per jaar' : 'savings per year'}</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">€128.000</div>
                <div className="text-green-100 text-lg">{language === 'nl' ? 'over 30 jaar' : 'over 30 years'}</div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Dit zijn verwarmingskosten (per jaar):' : 'These are heating costs (per year):'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{language === 'nl' ? 'Ruimteverwarming' : 'Space heating'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{language === 'nl' ? 'Warm water' : 'Hot water'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{language === 'nl' ? 'Ventilatie' : 'Ventilation'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{language === 'nl' ? 'Koeling (zomer)' : 'Cooling (summer)'}</span>
              </div>
            </div>
          </div>

          {/* Embodied Energy Bonus */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              {language === 'nl' ? 'Bonus: Lagere Bouw-impact' : 'Bonus: Lower Construction Impact'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === 'nl'
                ? 'Houtskeletbouw (Senmar) gebruikt 50% minder energie tijdens productie dan betonbouw. Na ~4 jaar heeft het huis zijn bouwinvestering terugverdiend en wordt het carbon-positief voor 50+ jaar.'
                : 'Timber frame construction (Senmar) uses 50% less energy during production than concrete construction. After ~4 years, the house has paid back its construction investment and becomes carbon-positive for 50+ years.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ (Mapped to #faq) */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12"><h2 className="text-4xl font-bold text-gray-900">FAQ</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center font-semibold text-gray-900 text-lg"><span>{language === 'nl' ? faq.question_nl : faq.question_en}</span><ChevronDown size={20} /></div>
                {openFaq === index && <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{language === 'nl' ? faq.answer_nl : faq.answer_en}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT (Original) */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_title')}</h2></div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">{t('contact_info_title')}</h3>
              <div className="space-y-4">
                <div><h4 className="font-semibold">Groenvastbouw</h4><p className="text-white/90">Wageningen, Nederland</p></div>
                <div><h4 className="font-semibold">Email</h4><a href="mailto:info@groenvastbouw.nl" className="text-green-400">info@groenvastbouw.nl</a></div>
                <div><h4 className="font-semibold">Telefoon</h4><a href="tel:0629841297" className="text-green-400">06 2984 1297</a></div>
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

      {/* 7. FOOTER (Original) */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div><img src="/logo.png" alt="Groenvastbouw" className="h-20 w-auto mb-4" /><p className="text-gray-400">Sustainable housing with passion.</p></div>
            <div><h4 className="font-semibold mb-4">{t('footer_links')}</h4><ul><li><a href="#about" className="hover:text-white">{t('nav_about')}</a></li><li><a href="#services" className="hover:text-white">{t('nav_services')}</a></li></ul></div>
            <div><h4 className="font-semibold mb-4">{t('footer_contact')}</h4><ul><li>Wageningen, Nederland</li><li>info@groenvastbouw.nl</li><li>06 2984 1297</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p></div>
        </div>
      </footer>
    </div>
  );
}
