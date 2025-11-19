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

  // --- CONTEXT RICH CONTENT ---

  const faqs = [
    {
      question_nl: "Wat is een passief huis?",
      question_en: "What is a passive house?",
      answer_nl: "Een passief huis verbruikt tot 90% minder energie voor verwarming en koeling. Dit wordt bereikt door superieure isolatie (200-350mm), luchtdichte constructie en mechanische ventilatie met warmteterugwinning. Het resultaat is een constant comfortabel binnenklimaat van 20-22°C zonder koudebruggen of tocht.",
      answer_en: "A passive house uses up to 90% less energy for heating and cooling, achieved through superior insulation (200-350mm), airtight construction, and mechanical ventilation with heat recovery. The result is a consistently comfortable indoor climate of 20-22°C without thermal bridges or drafts."
    },
    {
      question_nl: "Wat is het verschil tussen turnkey en casco?",
      question_en: "What is the difference between turnkey and shell?",
      answer_nl: "Wij leveren de complete hoogwaardige structuur (wanden, vloeren, dak) met isolatie en kozijnen ('Wind- en waterdicht'). De afwerking (installaties, keuken, vloer) kunt u zelf regelen of via onze partners laten uitvoeren. Dit geeft maximale budgetcontrole.",
      answer_en: "We deliver the complete high-quality structure (walls, floors, roof) with insulation and windows ('Wind and water tight'). Finishing (installations, kitchen, flooring) can be arranged by yourself or through our partners. This provides maximum budget control."
    },
    {
      question_nl: "Hoe lang duurt de bouw?",
      question_en: "How long does construction take?",
      answer_nl: "De structuurmontage op locatie duurt slechts 8-12 werkdagen. De totale productie en levering vanuit Portugal duurt ongeveer 3 maanden. Dit is tot 70% sneller dan traditionele bouw.",
      answer_en: "On-site structure assembly takes only 8-12 working days. Full production and delivery from Portugal takes approximately 3 months. This is up to 70% faster than traditional construction."
    },
    {
      question_nl: "Kunnen jullie ook op mijn eigen kavel bouwen?",
      question_en: "Can you build on my own plot?",
      answer_nl: "Ja, wij bouwen op uw eigen kavel. We werken samen met u en uw architect om een passend ontwerp te maken dat voldoet aan lokale bouwvoorschriften en uw specifieke wensen.",
      answer_en: "Yes, we build on your own plot. We work together with you and your architect to create a suitable design that meets local building regulations and your specific requirements."
    }
  ];

  const systems = [
    {
      name: "Optimal",
      r_value: "5.7",
      insulation: "200mm",
      desc_nl: "De perfecte balans tussen investering en prestatie. Uitgerust met 200mm isolatie en hoogwaardige dampschermen. Ideaal voor het Nederlandse klimaat en ruim boven de standaard BENG-eisen.",
      desc_en: "The perfect balance between investment and performance. Equipped with 200mm insulation and high-quality vapor barriers. Ideal for the Dutch climate and well above standard BENG requirements.",
      features_nl: ["200mm Minerale Wol", "Dampopen constructie", "Rc > 5.0", "Perfecte basis"],
      features_en: ["200mm Mineral Wool", "Breathable construction", "R-value > 5.0", "Perfect baseline"]
    },
    {
      name: "Passive",
      r_value: "8.5",
      insulation: "300mm",
      desc_nl: "Onze standaard voor energiezuinig wonen. Voegt 100mm externe isolatie toe aan de Optimal structuur. Dit elimineert koudebruggen volledig en garandeert minimale energiekosten.",
      desc_en: "Our standard for energy-efficient living. Adds 100mm external insulation to the Optimal structure. This completely eliminates thermal bridges and guarantees minimal energy costs.",
      features_nl: ["Dubbele isolatie (200+100mm)", "Geen koudebruggen", "Rc > 8.0", "Extreem comfort"],
      features_en: ["Double insulation (200+100mm)", "No thermal bridges", "R-value > 8.0", "Extreme comfort"],
      highlight: true
    },
    {
      name: "Super Passive",
      r_value: "10.5",
      insulation: "350mm",
      desc_nl: "De ultieme specificatie voor Passivhaus-certificering. Met een extra 50mm installatielaag aan de binnenzijde voor een totale wanddikte die de strengste internationale normen overtreft.",
      desc_en: "The ultimate specification for Passivhaus certification. With an extra 50mm installation layer on the inside for a total wall thickness that exceeds the strictest international standards.",
      features_nl: ["Drievoudige isolatie", "Passivhaus Certificeerbaar", "Rc > 10.0", "Nul-op-de-meter"],
      features_en: ["Triple insulation", "Passivhaus Certifiable", "R-value > 10.0", "Net-zero ready"]
    }
  ];

  const markets = [
    {
      title_nl: "Particulier & Wonen",
      title_en: "Private & Residential",
      desc_nl: "Realiseer uw droomhuis zonder de typische bouwzorgen. Wij bieden een gestroomlijnd proces met vaste prijzen en vaste opleverdata. Dankzij de modulaire opzet kunnen we uw woning volledig personaliseren, van gevelafwerking tot indeling.",
      desc_en: "Realize your dream home without the typical construction worries. We offer a streamlined process with fixed prices and fixed delivery dates. Thanks to the modular design, we can fully customize your home, from facade finish to layout.",
      icon: HomeIcon,
      benefits_nl: ["Vaste prijsgarantie", "Gezond binnenklimaat", "Lagere energierekening"],
      benefits_en: ["Fixed price guarantee", "Healthy indoor climate", "Lower energy bills"]
    },
    {
      title_nl: "Zakelijk & Ontwikkeling",
      title_en: "Business & Development",
      desc_nl: "Schaalbare oplossingen voor projectontwikkelaars, woningcorporaties en recreatieparken. Maximaliseer uw ROI door bouwtijden met 70% te verkorten en faalkosten te elimineren door fabrieksmatige productie.",
      desc_en: "Scalable solutions for developers, housing corporations, and recreation parks. Maximize your ROI by reducing construction times by 70% and eliminating failure costs through factory production.",
      icon: Briefcase,
      benefits_nl: ["Snelle ROI", "Schaalbare productie", "Lage onderhoudskosten"],
      benefits_en: ["Fast ROI", "Scalable production", "Low maintenance costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />

      {/* HERO SECTION - RESTORED LAYOUT */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-groenvastbouw.jpg" 
            alt="Senmar Passive House Structure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-32 lg:pt-20">
          <div className="max-w-4xl lg:mx-0 mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/50 text-green-300 border border-green-500/30 mb-6 backdrop-blur-sm">
              <Factory size={16} />
              <span className="text-sm font-medium tracking-wide uppercase">Powered by Senmar Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {language === 'nl' ? 'Duurzame woningen op maat' : 'Sustainable Homes Tailored to You'}
            </h1>
            
            <p className="text-xl text-white/95 mb-8 drop-shadow-md max-w-2xl leading-relaxed">
              {language === 'nl' 
                ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energie-efficiënt, duurzaam en betaalbaar dankzij geavanceerde prefab technologie.' 
                : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable thanks to advanced prefab technology.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/31629841297"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Nuno
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => scrollToSection('technology')}
              >
                {language === 'nl' ? 'Onze Technologie' : 'Our Technology'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / SENMAR SECTION - EXPANDED CONTEXT */}
      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Partnership
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('senmar_title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {language === 'nl' 
                  ? 'Groenvastbouw is de exclusieve partner van Senmar, marktleider in geavanceerde houtskeletbouw. Wij brengen Portugese innovatie naar de Nederlandse bouwplaats.' 
                  : 'Groenvastbouw is the exclusive partner of Senmar, market leader in advanced timber frame construction. We bring Portuguese innovation to the Dutch construction site.'}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-700">
                    <Ruler size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{language === 'nl' ? 'CNC Precisie & Snelheid' : 'CNC Precision & Speed'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {language === 'nl' ? 'Geproduceerd met millimeter-precisie in een gecontroleerde fabriek. Capaciteit van 1 huis per dag garandeert snelle levering.' : 'Produced with millimeter precision in a controlled factory. Capacity of 1 house per day guarantees fast delivery.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-700">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{language === 'nl' ? 'Gecertificeerde Kwaliteit' : 'Certified Quality'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {language === 'nl' ? 'Volledig CE-gecertificeerd en conform Eurocodes. Gebruik van hoogwaardig C24 Scandinavisch hout.' : 'Fully CE-certified and compliant with Eurocodes. Use of high-quality C24 Nordic timber.'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                 <a href="https://senmar.pt/en" target="_blank" className="text-green-700 font-semibold hover:text-green-800 inline-flex items-center gap-2">
                   {language === 'nl' ? 'Bezoek Senmar Website' : 'Visit Senmar Website'} <ExternalLink size={16}/>
                 </a>
              </div>
            </div>
            <div className="relative">
               <img 
                src="/senmar-factory.jpg" 
                alt="Senmar Factory" 
                className="relative rounded-lg shadow-2xl border border-gray-200"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS / SOLUTIONS SECTION */}
      <section id="markets" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Oplossingen op Maat' : 'Tailored Solutions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' ? 'Of u nu particulier bouwt of professioneel ontwikkelt.' : 'Whether you build privately or develop professionally.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {markets.map((market, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-2 bg-green-600"></div>
                <CardHeader>
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-green-700">
                    <market.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{language === 'nl' ? market.title_nl : market.title_en}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                    {language === 'nl' ? market.desc_nl : market.desc_en}
                  </p>
                  <ul className="space-y-3">
                    {(language === 'nl' ? market.benefits_nl : market.benefits_en).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <Leaf size={16} className="text-green-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SYSTEMS SECTION */}
      <section id="systems" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Engineering</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-white">
              {language === 'nl' ? 'Geavanceerde Bouwsystemen' : 'Advanced Construction Systems'}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Geen compromissen. Kies het isolatieniveau dat past bij uw ambities.' 
                : 'No compromises. Choose the insulation level that fits your ambitions.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  system.highlight 
                    ? 'bg-gray-800 border-green-500 shadow-xl' 
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                }`}
              >
                {system.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {language === 'nl' ? 'Meest Gekozen' : 'Most Popular'}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-white">{system.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-green-400">R-{system.r_value}</span>
                  <span className="text-gray-400">W/m²K</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 min-h-[80px] leading-relaxed">
                  {language === 'nl' ? system.desc_nl : system.desc_en}
                </p>
                
                <div className="space-y-3 border-t border-gray-700 pt-6">
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
          
          <div className="mt-12 text-center">
            <Button onClick={() => scrollToSection('contact')} className="bg-white text-gray-900 hover:bg-gray-200 text-lg px-8 py-6">
              {language === 'nl' ? 'Vraag Technisch Advies' : 'Request Technical Advice'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center font-semibold text-gray-800 text-lg">
                   <span>{language === 'nl' ? faq.question_nl : faq.question_en}</span>
                   <ChevronDown size={20} className={`text-green-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </div>
                {openFaq === index && <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{language === 'nl' ? faq.answer_nl : faq.answer_en}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('contact_title')}</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                 {language === 'nl' 
                   ? 'Neem direct contact op met Nuno voor een technische analyse van uw project.' 
                   : 'Contact Nuno directly for a technical analysis of your project.'}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Project Lead</p>
                    <p className="font-semibold text-lg">Nuno Machado e Sousa</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <a href="mailto:info@groenvastbouw.nl" className="block text-xl hover:text-green-400 transition-colors mb-2">info@groenvastbouw.nl</a>
                  <a href="tel:0629841297" className="block text-xl hover:text-green-400 transition-colors">06 2984 1297</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t('contact_name')}</label>
                    <Input 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="bg-gray-50 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t('contact_email')}</label>
                    <Input 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="bg-gray-50 border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('contact_phone')}</label>
                  <Input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('contact_message')}</label>
                  <Textarea 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    rows={4} 
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? '...' : t('contact_submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - FULLY RESTORED */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="Groenvastbouw" className="h-20 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 text-sm">
                {language === 'nl' 
                  ? 'Duurzame woningbouw met passie voor kwaliteit en milieu.' 
                  : 'Sustainable housing with passion for quality and environment.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">{t('footer_links')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-green-400 transition-colors">{t('nav_about')}</a></li>
                <li><a href="#systems" className="hover:text-green-400 transition-colors">{t('nav_services')}</a></li>
                <li><a href="#technology" className="hover:text-green-400 transition-colors">{t('nav_senmar')}</a></li>
                <li><a href="/projects" className="hover:text-green-400 transition-colors">Projecten</a></li>
                <li><a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">{t('footer_contact')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Wageningen, Nederland</li>
                <li><a href="mailto:info@groenvastbouw.nl" className="hover:text-green-400 transition-colors">info@groenvastbouw.nl</a></li>
                <li><a href="tel:0629841297" className="hover:text-green-400 transition-colors">06 2984 1297</a></li>
                <li className="pt-2 text-xs text-gray-500">KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
            <p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
