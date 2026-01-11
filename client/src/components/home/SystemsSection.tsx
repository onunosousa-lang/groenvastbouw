import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function SystemsSection() {
  const { t, language } = useLanguage();
  const systems = translations[language].systems_array;

  return (
    <section id="systems" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('pricing_title')}</h2>
          <p className="text-xl text-white">{t('pricing_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:-translate-y-2 ${
                system.highlight 
                  ? 'border-[#90dc35] shadow-2xl scale-105 z-10' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {system.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#90dc35] text-white px-4 py-1 rounded-full text-sm font-bold">
                  Meest Gekozen
                </div>
              )}
              <CardHeader className={`${system.highlight ? 'bg-green-50' : 'bg-gray-800'} border-b border-gray-100`}>
                <CardTitle className="text-2xl font-bold text-center text-white">
                  {system.name}
                </CardTitle>
                <div className="text-center mt-2">
                  <span className="text-sm text-white">Rc-waarde</span>
                  <div className="text-3xl font-bold text-[#90dc35]">{system.r_value}</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-white font-medium">Isolatie: {system.insulation}</span>
                </div>
                <p className="text-white text-center mb-8 text-sm min-h-[3rem]">
                  {system.desc}
                </p>
                <ul className="space-y-4">
                  {system.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-[#f0f7e8] rounded-full p-1">
                        <Check className="text-[#90dc35] w-3 h-3" />
                      </div>
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}
