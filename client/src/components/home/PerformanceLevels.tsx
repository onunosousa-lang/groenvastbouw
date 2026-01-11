'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { motion } from 'framer-motion';
import { Shield, Zap, Leaf, Check, Hammer2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function PerformanceLevels() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();

  const content = {
    headline: language === 'nl' ? 'Prestatie Niveaus' : 'Performance Levels',
    subheadline: language === 'nl' ? 'Kies het isolatieniveau dat bij jouw wensen past' : 'Choose the insulation level that fits your needs',
    
    levels: [
      {
        title: 'BASIC',
        badge: language === 'nl' ? 'Budgetvriendelijk' : 'Budget-Friendly',
        rValue: 'Rc 3.5 - 4.5',
        desc: language === 'nl' ? 'Solide isolatie, bouwbesluit compliant.' : 'Solid insulation, building code compliant.',
        features: language === 'nl' ? [
          'Wanden: 180mm isolatie',
          'Dak: 220mm isolatie',
          'Dubbel glas (U=0.8)',
          'Luchtdichtheid: < 2.0'
        ] : [
          'Walls: 180mm insulation',
          'Roof: 220mm insulation',
          'Double glazing (U=0.8)',
          'Airtightness: < 2.0'
        ],
        icon: Shield,
        color: 'gray'
      },
      {
        title: 'OPTIMAL',
        badge: language === 'nl' ? 'Beste Prijs-Kwaliteit' : 'Best Value',
        rValue: 'Rc 5.0 - 6.0',
        desc: language === 'nl' ? 'Uitstekende isolatie, ruim boven bouwbesluit.' : 'Excellent insulation, well above building regulations.',
        features: language === 'nl' ? [
          'Wanden: 240mm isolatie',
          'Dak: 300mm isolatie',
          '3-dubbel glas (U=0.6)',
          'Luchtdichtheid: < 1.0'
        ] : [
          'Walls: 240mm insulation',
          'Roof: 300mm insulation',
          'Triple glazing (U=0.6)',
          'Airtightness: < 1.0'
        ],
        icon: Shield,
        color: 'blue'
      },
      {
        title: 'PASSIVE',
        badge: language === 'nl' ? 'Meest Gekozen' : 'Most Popular',
        rValue: 'Rc 8.0 - 9.0',
        desc: language === 'nl' ? 'Volledige passiefhuis standaard. Minimale energiekosten.' : 'Full passive house standard. Minimal energy costs.',
        features: language === 'nl' ? [
          'Wanden: 360mm isolatie',
          'Dak: 400mm isolatie',
          '3-dubbel glas (U=0.5)',
          'Luchtdichtheid: < 0.6 (Passief gecertificeerd)'
        ] : [
          'Walls: 360mm insulation',
          'Roof: 400mm insulation',
          'Triple glazing (U=0.5)',
          'Airtightness: < 0.6 (Passive certified)'
        ],
        icon: Zap,
        color: 'green'
      },
      {
        title: 'SUPER PASSIVE',
        badge: language === 'nl' ? 'Extreme Prestaties' : 'Extreme Performance',
        rValue: 'Rc 10.0+',
        desc: language === 'nl' ? 'Voor off-grid ambities en extreme klimaten.' : 'For off-grid ambitions and extreme climates.',
        features: language === 'nl' ? [
          'Wanden: 400mm+ isolatie',
          'Dak: 500mm+ isolatie',
          'Super-geïsoleerde kozijnen',
          'Luchtdichtheid: < 0.4'
        ] : [
          'Walls: 400mm+ insulation',
          'Roof: 500mm+ insulation',
          'Super-insulated frames',
          'Airtightness: < 0.4'
        ],
        icon: Leaf,
        color: 'purple'
      }
    ]
  };

  return (
    <section id="systems" className="py-20 bg-gray-800 scroll-mt-20 relative overflow-hidden">
      {/* Background Images with Transparency */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/nl_Pier(2).jpg" 
          alt="" 
          className="absolute top-0 left-0 w-1/3 h-auto opacity-5 object-cover"
        />
        <img 
          src="/images/Les_arcs_shalet_extension(6)(1).jpg" 
          alt="" 
          className="absolute bottom-0 right-0 w-1/3 h-auto opacity-5 object-cover"
        />
      </div>
      
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#90dc35 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.headline}</h2>
          <p className="text-lg text-white mb-8 leading-relaxed">{content.subheadline}</p>
          <a
            href="https://www.senmar.pt/en/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#90dc35] text-[#2A3439] font-semibold rounded-lg hover:bg-[#6fb820] transition-colors"
          >
            {language === 'nl' ? 'Bekijk volledige specificaties op Senmar.pt' : 'View full specifications on Senmar.pt'}
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {content.levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-900 rounded-2xl shadow-lg overflow-hidden border-2 relative flex flex-col ${
                level.color === 'green' ? 'border-[#90dc35] transform md:-translate-y-4' : 'border-transparent'
              }`}
            >
              {level.color === 'green' && (
                <div className="absolute top-0 left-0 right-0 bg-[#90dc35] text-white text-center py-1 text-sm font-bold uppercase tracking-wide">
                  {level.badge}
                </div>
              )}
              
              <div className={`p-6 flex-grow ${level.color === 'green' ? 'pt-10' : ''}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  level.color === 'green' ? 'bg-[#f0f7e8] text-[#90dc35]' : 
                  level.color === 'blue' ? 'bg-[#e8f5f0] text-[#118443]' : 
                  level.color === 'purple' ? 'bg-[#e8f5f0] text-[#118443]' :
                  'bg-white text-white'
                }`}>
                  <level.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{level.title}</h3>
                <div className={`text-lg font-bold mb-3 ${
                  level.color === 'green' ? 'text-[#90dc35]' : 
                  level.color === 'blue' ? 'text-[#118443]' : 
                  level.color === 'purple' ? 'text-[#118443]' :
                  'text-white'
                }`}>
                  {level.rValue}
                </div>
                
                <p className="text-white mb-4 text-sm leading-relaxed">{level.desc}</p>
                
                <ul className="space-y-2 mb-6">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white leading-relaxed">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        level.color === 'green' ? 'text-[#90dc35]' : 
                        level.color === 'blue' ? 'text-green-500' : 
                        level.color === 'purple' ? 'text-purple-500' :
                        'text-white'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Single CTA Button Below */}
        <div className="mt-16 text-center">
          <button
            onClick={openModal}
            className="px-8 py-4 bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439] font-bold text-lg rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            {language === 'nl' ? 'Request an intro call' : 'Request an intro call'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
