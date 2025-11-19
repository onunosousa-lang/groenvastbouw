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
  Lightbulb, PenTool, ShieldCheck, Ruler, Factory 
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      desc_nl: "Ideaal voor gematigde klimaten. Uitstekende basisisolatie die de standaard bouwbesluit-eisen overtreft.",
      desc_en: "Ideal for moderate climates. Excellent basic insulation that exceeds standard building code requirements.",
      features_nl: ["200mm Minerale Wol", "Dampopen constructie", "Rc > 5.0"],
      features_en: ["200mm Mineral Wool", "Breathable construction", "R-value > 5.0"]
    },
    {
      name: "Passive",
      r_value: "8.5",
      insulation: "300mm",
      desc_nl: "Onze standaard voor energiezuinig wonen. Voegt een extra externe isolatielaag toe voor minimale koudebruggen.",
      desc_en: "Our standard for energy-efficient living. Adds an extra external insulation layer for minimal thermal bridges.",
      features_nl: ["200mm + 100mm Isolatie", "Verhoogde luchtdichtheid", "Rc > 8.0"],
      features_en: ["200mm + 100mm Insulation", "Increased airtightness", "R-value > 8.0"],
      highlight: true
    },
    {
      name: "Super Passive",
      r_value: "10.5",
      insulation: "350mm",
      desc_nl: "Het neusje van de zalm. Ontworpen voor volledige Passivhaus-certificering en nul-op-de-meter woningen.",
      desc_en: "Top of the line. Designed for full Passivhaus certification and net-zero energy homes.",
      features_nl: ["350mm Totale Isolatie", "Passivhaus Certificeerbaar", "Rc > 10.0"],
      features_en: ["350mm Total Insulation", "Passivhaus Certifiable", "R-value > 10.0"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-groenvastbouw.jpg" 
            alt="Senmar Passive House Construction" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 mb-6 backdrop-blur-sm">
              <Factory size={16} />
              <span className="text-sm font-medium tracking-wide uppercase">Powered by Senmar Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {language === 'nl' ? 'De toekomst van bouwen.' : 'The future of building.'}
              <span className="block text-green-400">{language === 'nl' ? 'Nu beschikbaar.' : 'Available now.'}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {language === 'nl' 
                ? 'Hoogwaardige prefab houtskeletbouw met Passivhaus-technologie. Sneller, duurzamer en energie-efficiënter dan traditionele bouw.' 
                : 'High-performance prefab timber frame construction with Passivhaus technology. Faster, more sustainable, and more energy-efficient than traditional building.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('technology')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all"
              >
                {language === 'nl' ? 'Bekijk onze systemen' : 'View our systems'}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
                onClick={() => scrollToSection('contact')}
              >
                {language === 'nl' ? 'Neem contact op' : 'Contact us'}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Partnership / Tech Intro */}
      <section id="senmar-intro" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {language === 'nl' ? 'Europese topkwaliteit.' : 'European top quality.'}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {language === 'nl' 
                  ? 'Groenvastbouw is de exclusieve partner van Senmar, marktleider in geavanceerde houtskeletbouw in Portugal. In hun state-of-the-art faciliteit worden woningen met millimeter-precisie geproduceerd met behulp van CNC-technologie.' 
                  : 'Groenvastbouw is the exclusive partner of Senmar, market leader in advanced timber frame construction in Portugal. In their state-of-the-art facility, homes are produced with millimeter precision using CNC technology.'}
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: ShieldCheck, text: language === 'nl' ? 'Volledig CE & Eurocode gecertificeerd' : 'Fully CE & Eurocode certified' },
                  { icon: Ruler, text: language === 'nl' ? 'CNC-precisie productie (±1mm)' : 'CNC precision manufacturing (±1mm)' },
                  { icon: Leaf, text: language === 'nl' ? 'FSC-gecertificeerd Scandinavisch hout (C24)' : 'FSC-certified Nordic timber (C24)' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="bg-green-100 p-2 rounded-lg text-green-700">
                      <item.icon size={20} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-200 rounded-xl rotate-3 opacity-30"></div>
              <img 
                src="/senmar-factory.jpg" 
                alt="Senmar Factory High Tech" 
                className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]"
                onError={(e) => {
                  e.currentTarget.src = "/images/construction_3.jpg" // Fallback
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology / Systems Section (Formerly Pricing) */}
      <section id="technology" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Performance</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              {language === 'nl' ? 'Kies uw prestatieniveau' : 'Choose your performance level'}
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Van zeer energiezuinig tot volledig Passiefhuis-gecertificeerd. Onze systemen zijn ontworpen voor de toekomst.' 
                : 'From highly energy-efficient to fully Passive House certified. Our systems are designed for the future.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((system, index) => (
              <Card 
                key={index} 
                className={`bg-slate-800 border-slate-700 text-white overflow-hidden hover:border-green-500 transition-all duration-300 ${system.highlight ? 'ring-2 ring-green-500 scale-105 z-10 shadow-2xl shadow-green-900/20' : ''}`}
              >
                <div className={`h-2 w-full ${system.highlight ? 'bg-green-500' : 'bg-slate-600'}`}></div>
                <CardHeader>
                  <h3 className="text-2xl font-bold">{system.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-bold text-green-400">R-{system.r_value}</span>
                    <span className="text-slate-400 text-sm">W/m²K</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">
                    {language === 'nl' ? 'Thermische weerstand' : 'Thermal resistance'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-300 leading-relaxed min-h-[60px]">
                        {language === 'nl' ? system.desc_nl : system.desc_en}
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-xs text-slate-500 uppercase mb-2 font-semibold">
                        {language === 'nl' ? 'Specificaties' : 'Specs'}
                      </div>
                      <ul className="space-y-2">
                        {(language === 'nl' ? system.features_nl : system.features_en).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                            <Zap size={14} className="mt-1 text-green-500 shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-400">
                          {language === 'nl' ? 'Isolatiedikte' : 'Insulation Thickness'}
                        </span>
                        <span className="text-white font-bold">{system.insulation}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(parseInt(system.insulation) / 350) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">
              {language === 'nl' 
                ? 'Wilt u weten welk systeem het beste bij uw project past?' 
                : 'Want to know which system suits your project best?'}
            </p>
            <a
              href="https://wa.me/31629841297"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold border-b border-green-400 hover:border-green-300 pb-0.5 transition-all"
            >
              {language === 'nl' ? 'Vraag technisch advies aan Nuno' : 'Ask Nuno for technical advice'}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid - Simplified & Clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {language === 'nl' ? 'Complete Flexibiliteit' : 'Complete Flexibility'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors border border-slate-100">
              <Building2 className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {language === 'nl' ? 'Structuur (Casco)' : 'Structure (Shell)'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'nl' 
                  ? 'Wij leveren en monteren de hoogwaardige, wind- en waterdichte schil. U regelt de afbouw zelf.' 
                  : 'We deliver and assemble the high-quality, wind and water-tight shell. You manage the finishing yourself.'}
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors border border-slate-100">
              <Hammer className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {language === 'nl' ? 'Casco+' : 'Shell+'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'nl' 
                  ? 'Inclusief ramen, deuren en gevelbekleding. De woning is van buiten volledig af, binnen klaar voor installaties.' 
                  : 'Includes windows, doors, and cladding. The home is finished externally, ready for installations inside.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors border border-slate-100">
              <Key className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {language === 'nl' ? 'Sleutelklaar' : 'Turnkey'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'nl' 
                  ? 'Samen met onze vaste partners verzorgen wij het complete traject tot en met de verhuizing.' 
                  : 'Together with our partners, we handle the entire process up to moving in.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-slate-900 text-white overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/10 -skew-x-12 translate-x-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {t('contact_title')}
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                {language === 'nl' 
                  ? 'Klaar om de stap te zetten naar duurzaam wonen? Wij helpen u graag met een technische analyse van uw project.' 
                  : 'Ready to take the step towards sustainable living? We are happy to help you with a technical analysis of your project.'}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{language === 'nl' ? 'Direct contact' : 'Direct contact'}</p>
                    <p className="font-semibold">Nuno Machado e Sousa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{language === 'nl' ? 'Reactietijd' : 'Response time'}</p>
                    <p className="font-semibold">{language === 'nl' ? 'Binnen 24 uur' : 'Within 24 hours'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-sm mb-2">Contact details</p>
                <a href="mailto:info@groenvastbouw.nl" className="block text-xl font-medium hover:text-green-400 transition-colors">info@groenvastbouw.nl</a>
                <a href="tel:0629841297" className="block text-xl font-medium hover:text-green-400 transition-colors mt-1">06 2984 1297</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contact_name')}</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-50 border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contact_email')}</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-50 border-slate-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t('contact_phone')}</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t('contact_message')}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-slate-50 border-slate-200 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === 'nl' ? 'Verzenden...' : 'Sending...') 
                    : t('contact_submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Groenvastbouw. KvK 75308045.</p>
        </div>
      </footer>
    </div>
  );
}
