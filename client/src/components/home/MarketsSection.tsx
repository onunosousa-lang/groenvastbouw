import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function MarketsSection() {
  const { language } = useLanguage();
  const markets = translations[language].markets_array;

  return (
    <section id="markets" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2a3439] mb-4">
            {language === 'nl' ? 'Oplossingen op Maat' : 'Tailored Solutions'}
          </h2>
          <p className="text-xl text-[#2a3439] max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Of u nu een particulier bent of een ontwikkelaar, wij hebben het juiste proces voor uw project.'
              : 'Whether you are a private individual or a developer, we have the right process for your project.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {markets.map((market, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={index === 0 ? "/images/private_residential.jpg" : "/images/business_development.jpg"}
                  alt={market.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-[#F5F5EF]/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <h3 className="text-2xl font-bold text-[#2a3439]">{market.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-[#2a3439] mb-6 text-lg leading-relaxed">
                  {market.desc}
                </p>
                <ul className="space-y-3">
                  {market.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#2a3439]">
                      <CheckCircle2 className="text-[#8edb38] flex-shrink-0" size={20} />
                      <span>{benefit}</span>
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
