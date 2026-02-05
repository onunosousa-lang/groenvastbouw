import { Button } from '@/components/ui/button';
import { Factory, Ruler, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TechnologySection() {
  const { t, language } = useLanguage();

  return (
    <section id="technology" className="py-20 bg-[#dcdcdc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#dcdcdc] text-[#2a3439] rounded-full text-sm font-semibold mb-4">
              {t('senmar_title')}
            </div>
            <h2 className="text-4xl font-bold text-[#2a3439] mb-6">
              {t('senmar_subtitle')}
            </h2>
            <p className="text-xl text-[#2a3439] mb-8 leading-relaxed">
              {language === 'nl' 
                ? 'Groenvastbouw engineered timber system, manufactured in partnership with Senmar in Portugal. Geproduceerd door onze partnerfabriek met CNC-precisie om consistente kwaliteit in elk project te garanderen.'
                : 'Groenvastbouw engineered timber system, manufactured in partnership with Senmar in Portugal. Manufactured by our partner factory using CNC precision to guarantee consistent quality in every project.'}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#dcdcdc] p-3 rounded-lg">
                  <Factory className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('senmar_factory')}</h3>
                  <p className="text-[#2a3439]">{t('senmar_capacity')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#dcdcdc] p-3 rounded-lg">
                  <Ruler className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('senmar_precision')}</h3>
                  <p className="text-[#2a3439]">100% {t('principles_quality')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#dcdcdc] p-3 rounded-lg">
                  <Award className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('senmar_certified')}</h3>
                  <p className="text-[#2a3439]">ISO 9001, Passivhaus Institut</p>
                </div>
              </div>
            </div>

            <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-[#8edb38] text-[#8edb38] hover:bg-[#dcdcdc]">
                {t('senmar_link')} <ExternalLink size={16} />
              </Button>
            </a>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/senmar-photos/factory_senmar_4.jpg"
              alt="Partner factory production"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8">
              <div className="bg-[#dcdcdc]/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-sm font-bold uppercase tracking-wider mb-2 text-[#2a3439]">Coja, Portugal</div>
                <div className="text-2xl font-bold text-[#2a3439]">High-Tech Timber Frame Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
