import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Zap, Leaf, Check } from 'lucide-react';

export default function PerformanceLevels() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Prestatie Niveaus' : 'Performance Levels',
    subheadline: language === 'nl' ? 'Kies het isolatieniveau dat bij jouw wensen past' : 'Choose the insulation level that fits your needs',
    
    levels: [
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
    <section id="systems" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
          <p className="text-xl text-gray-600">{content.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 relative flex flex-col ${
                level.color === 'green' ? 'border-green-500 transform md:-translate-y-4' : 'border-transparent'
              }`}
            >
              {level.color === 'green' && (
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-1 text-sm font-bold uppercase tracking-wide">
                  {level.badge}
                </div>
              )}
              
              <div className={`p-8 flex-grow ${level.color === 'green' ? 'pt-10' : ''}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  level.color === 'green' ? 'bg-green-100 text-green-600' : 
                  level.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  <level.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">{level.title}</h3>
                <div className={`text-lg font-bold mb-4 ${
                  level.color === 'green' ? 'text-green-600' : 
                  level.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {level.rValue}
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">{level.desc}</p>
                
                <ul className="space-y-3">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        level.color === 'green' ? 'text-green-500' : 
                        level.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
