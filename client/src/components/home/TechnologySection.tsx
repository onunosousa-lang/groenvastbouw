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
                ? 'Groenvastbouw werkt samen met Senmar om geavanceerde bouwoplossingen naar Nederland te brengen. Wij combineren state-of-the-art technologie met vakmanschap. CNC-precisie elimineert fouten en garandeert consistente kwaliteit in elk project.'
                : 'Groenvastbouw partners with Senmar to bring advanced building solutions to the Netherlands. We combine state-of-the-art technology with craftsmanship. CNC precision eliminates errors and guarantees consistent quality in every project.'}
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
              alt="Senmar Factory Production" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a3439]/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-[#2a3439]">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">Coja, Portugal</div>
              <div className="text-2xl font-bold">High-Tech Timber Frame Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
