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

  // --- DATA DEFINITIONS ---

  const faqs = [
    {
      question_nl: "Wat is een passief huis?",
      question_en: "What is a passive house?",
      answer_nl: "Een passief huis is een gebouw dat tot 90% minder energie verbruikt voor verwarming en koeling. Dit wordt bereikt door superieure isolatie, luchtdichte constructie en mechanische ventilatie met warmteterugwinning.",
      answer_en: "A passive house uses up to 90% less energy for heating and cooling. This is achieved through superior insulation, airtight construction, and mechanical ventilation with heat recovery."
    },
    {
      question_nl: "Wat is het verschil tussen turnkey en casco?",
      question_en: "What is the difference between turnkey and shell?",
      answer_nl: "Wij leveren de complete hoogwaardige, geïsoleerde structuur (casco+). Voor de afwerking (installaties, vloeren, keukens) werken wij met partners of uw eigen aannemers. Dit biedt maximale flexibiliteit.",
      answer_en: "We deliver the complete high-quality, insulated structure (shell+). For finishing (installations, flooring, kitchens) we work with partners or your own contractors. This offers maximum flexibility."
    },
    {
      question_nl: "Hoe lang duurt de productie?",
      question_en: "How long does production take?",
      answer_nl: "Dankzij het geautomatiseerde Senmar-productieproces duurt de fabricage slechts enkele weken. De montage op locatie van de waterdichte structuur duurt doorgaans 7 tot 10 dagen.",
      answer_en: "Thanks to the automated Senmar production process, manufacturing takes only a few weeks. On-site assembly of the weathertight structure typically takes 7 to 10 days."
    },
    {
      question_nl: "Bouwen jullie op maat?",
      question_en: "Do you build custom designs?",
      answer_nl: "Ja, wij zijn gespecialiseerd in maatwerk. We kunnen uw eigen architectonisch ontwerp realiseren of een van onze modellen aanpassen aan uw specifieke wensen en kavel.",
      answer_en: "Yes, we specialize in custom work. We can realize your own architectural design or adapt one of our models to your specific wishes and plot."
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

      {/* HERO SECTION */}
      <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-groenvastbouw.jpg" 
            alt="Advanced Modular Construction" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-8 backdrop-blur-md">
              <Factory size={14} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Powered by Senmar Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {language === 'nl' ? 'De nieuwe standaard in' : 'The new standard in'}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 block mt-2">
                {language === 'nl' ? 'duurzaam bouwen.' : 'sustainable construction.'}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              {language === 'nl' 
                ? 'Wij combineren Portugese engineering met Nederlandse nuchterheid. Hoogwaardige prefab systemen die sneller, efficiënter en energiezuiniger zijn.' 
                : 'We combine Portuguese engineering with Dutch pragmatism. High-performance prefab systems that are faster, more efficient, and more energy-efficient.'}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('technology')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-7 text-lg rounded-full transition-all shadow-lg shadow-green-900/20"
              >
                {language === 'nl' ? 'Ontdek de Technologie' : 'Discover the Technology'}
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-white/5 px-8 py-7 text-lg rounded-full backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                {language === 'nl' ? 'Start uw Project' : 'Start your Project'}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* KEY METRICS STRIP */}
      <div className="bg-slate-950 border-b border-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {[
              { label: "Energy Savings", value: "90%", icon: Leaf },
              { label: "Faster Build", value: "70%", icon: Clock },
              { label: "Insulation Value", value: "R-10", icon: ShieldCheck },
              { label: "Precision", value: "1mm", icon: Ruler }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="flex justify-center mb-2 text-green-500"><stat.icon size={20} /></div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECHNOLOGY / SENMAR SECTION */}
      <section id="technology" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-2xl -rotate-2"></div>
              <img 
                src="/senmar-factory.jpg" 
                alt="Senmar Factory CNC Technology" 
                className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
                onError={(e) => { e.currentTarget.src = "/images/construction_3.jpg" }}
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-semibold text-slate-900">
                  {language === 'nl' ? 'Geproduceerd in Coja, Portugal' : 'Manufactured in Coja, Portugal'}
                </p>
                <p className="text-xs text-slate-600">
                  {language === 'nl' ? 'State-of-the-art CNC faciliteit' : 'State-of-the-art CNC facility'}
                </p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                <Award size={16} className="text-green-600" />
                Exclusive Partnership
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {language === 'nl' ? 'Innovatie door Automatisering.' : 'Innovation through Automation.'}
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {language === 'nl' 
                  ? 'Groenvastbouw werkt exclusief samen met Senmar, pionier in modulaire houtbouw. Door het bouwproces te verplaatsen van de bouwplaats naar de fabriek, elimineren we weersinvloeden en menselijke fouten.'
                  : 'Groenvastbouw partners exclusively with Senmar, a pioneer in modular timber construction. By moving the construction process from the site to the factory, we eliminate weather impacts and human error.'}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
                    <Ruler size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{language === 'nl' ? 'CNC Precisie' : 'CNC Precision'}</h4>
                    <p className="text-slate-600 text-sm">
                      {language === 'nl' ? 'Computergestuurde productie tot op de millimeter nauwkeurig.' : 'Computer-controlled manufacturing accurate to the millimeter.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{language === 'nl' ? 'Superieure Isolatie' : 'Superior Insulation'}</h4>
                    <p className="text-slate-600 text-sm">
                      {language === 'nl' ? 'Luchtdichte constructie zonder koudebruggen (Thermal Bridge Free).' : 'Airtight construction without thermal bridges.'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-100">
                 <a href="https://senmar.pt/en" target="_blank" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2">
                   {language === 'nl' ? 'Lees meer over Senmar' : 'Read more about Senmar'} <ExternalLink size={16}/>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET SEGMENTS (B2B / B2C) - ADDED ID HERE */}
      <section id="markets" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'nl' ? 'Oplossingen voor elke schaal' : 'Solutions for every scale'}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {language === 'nl' ? 'Of u nu één droomhuis bouwt of een hele wijk ontwikkelt.' : 'Whether you are building one dream home or developing an entire district.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {markets.map((market, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                <CardHeader>
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
                    <market.icon size={28} className="text-slate-700 group-hover:text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">{language === 'nl' ? market.title_nl : market.title_en}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {language === 'nl' ? market.desc_nl : market.desc_en}
                  </p>
                  <ul className="space-y-3">
                    {(language === 'nl' ? market.benefits_nl : market.benefits_en).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <ShieldCheck size={16} className="text-green-500" />
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

      {/* CONSTRUCTION SYSTEMS (REPLACES PRICING) */}
      <section id="systems" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Engineering</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">
                {language === 'nl' ? 'Geavanceerde Bouwsystemen' : 'Advanced Construction Systems'}
              </h2>
              <p className="text-slate-400 text-lg">
                {language === 'nl' 
                  ? 'Kies het prestatieniveau dat past bij uw ambities. Van zeer energiezuinig tot volledig zelfvoorzienend.' 
                  : 'Choose the performance level that matches your ambitions. From highly energy-efficient to fully self-sufficient.'}
              </p>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-white text-slate-900 hover:bg-slate-200">
              {language === 'nl' ? 'Vergelijk Specificaties' : 'Compare Specifications'}
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  system.highlight 
                    ? 'bg-slate-800 border-green-500 shadow-2xl shadow-green-900/20' 
                    : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {system.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {language === 'nl' ? 'Meest Gekozen' : 'Most Popular'}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{system.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-green-400">R-{system.r_value}</span>
                  <span className="text-slate-500">W/m²K</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-8 min-h-[60px] leading-relaxed">
                  {language === 'nl' ? system.desc_nl : system.desc_en}
                </p>
                
                <div className="space-y-4 border-t border-slate-700/50 pt-6">
                  {(language === 'nl' ? system.features_nl : system.features_en).map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                      <span className="text-sm text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-5 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center font-semibold text-slate-800">
                   <span>{language === 'nl' ? faq.question_nl : faq.question_en}</span>
                   <ChevronDown size={20} className={`text-green-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </div>
                {openFaq === index && <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{language === 'nl' ? faq.answer_nl : faq.answer_en}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-slate-900 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('contact_title')}</h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                   {language === 'nl' 
                     ? 'Klaar om uw project te bespreken? Wij bieden een vrijblijvende technische analyse van uw plannen.' 
                     : 'Ready to discuss your project? We offer a no-obligation technical analysis of your plans.'}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Project Lead</p>
                    <p className="font-semibold text-lg">Nuno Machado e Sousa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Office</p>
                    <p className="font-semibold text-lg">Wageningen, NL</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <a href="mailto:info@groenvastbouw.nl" className="block text-xl hover:text-green-400 transition-colors mb-2">info@groenvastbouw.nl</a>
                  <a href="tel:0629841297" className="block text-xl hover:text-green-400 transition-colors">06 2984 1297</a>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t('contact_name')}</label>
                    <Input 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="bg-slate-50 border-slate-200 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t('contact_email')}</label>
                    <Input 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="bg-slate-50 border-slate-200 focus:border-green-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('contact_phone')}</label>
                  <Input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    className="bg-slate-50 border-slate-200 focus:border-green-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('contact_message')}</label>
                  <Textarea 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    rows={4} 
                    className="bg-slate-50 border-slate-200 focus:border-green-500"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? '...' : t('contact_submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <img src="/logo.png" alt="Groenvastbouw" className="h-12 w-auto mb-6" />
              <p className="text-slate-500 max-w-md leading-relaxed">
                {language === 'nl' 
                  ? 'Gespecialiseerd in hoogwaardige houtskeletbouw en passieve systemen. Wij bouwen de toekomst van wonen in Nederland.' 
                  : 'Specialized in high-performance timber frame construction and passive systems. We build the future of living in the Netherlands.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">{t('footer_links')}</h4>
              <ul className="space-y-3 text-slate-600">
                <li><a href="#about" className="hover:text-green-600 transition-colors">{t('nav_about')}</a></li>
                <li><a href="#technology" className="hover:text-green-600 transition-colors">{t('nav_senmar')}</a></li>
                <li><a href="#systems" className="hover:text-green-600 transition-colors">{t('nav_services')}</a></li>
                <li><a href="/projects" className="hover:text-green-600 transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">{t('footer_contact')}</h4>
              <ul className="space-y-3 text-slate-600">
                <li>Wageningen, Nederland</li>
                <li><a href="mailto:info@groenvastbouw.nl" className="hover:text-green-600">info@groenvastbouw.nl</a></li>
                <li><a href="tel:0629841297" className="hover:text-green-600">06 2984 1297</a></li>
                <li className="text-sm text-slate-400 pt-2">KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
