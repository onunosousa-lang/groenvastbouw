import { Button } from '@/components/ui/button';
import { Factory, Ruler, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';

export default function TechnologySection() {
  const { t, language } = useLanguage();
  const { openModal } = useContactModal();

  return (
    <section id="technology" className="py-20 bg-[#F5F5EF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#F5F5EF] text-[#2a3439] rounded-full text-sm font-semibold mb-4">
              {t('technology_title')}
            </div>
            <h2 className="text-4xl font-bold text-[#2a3439] mb-6">
              {t('technology_subtitle')}
            </h2>
            <p className="text-xl text-[#2a3439] mb-8 leading-relaxed">
              {language === 'nl' 
                ? 'Groenvastbouw engineered timber system, manufactured with industrial precision in Portugal. Geproduceerd in onze fabriek met CNC-precisie om consistente kwaliteit in elk project te garanderen.'
                : 'Groenvastbouw engineered timber system, manufactured with industrial precision in Portugal. Manufactured in our factory using CNC precision to guarantee consistent quality in every project.'}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#F5F5EF] p-3 rounded-lg">
                  <Factory className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('technology_factory')}</h3>
                  <p className="text-[#2a3439]">{t('technology_capacity')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#F5F5EF] p-3 rounded-lg">
                  <Ruler className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('technology_precision')}</h3>
                  <p className="text-[#2a3439]">100% {t('principles_quality')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#F5F5EF] p-3 rounded-lg">
                  <Award className="text-[#8edb38]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('technology_certified')}</h3>
                  <p className="text-[#2a3439]">ISO 9001, Passivhaus Institut</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={openModal}
              variant="outline" 
              className="gap-2 border-[#8edb38] text-[#8edb38] hover:bg-[#F5F5EF]"
            >
              {t('technology_link')} <ExternalLink size={16} />
            </Button>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/factory-photos/factory_production_4.jpg"
              alt="Partner factory production"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-8 left-8">
              <div className="bg-[#F5F5EF]/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-sm font-bold uppercase tracking-wider mb-2 text-[#2a3439]">Gecertificeerde productiepartner</div>
                <div className="text-2xl font-bold text-[#2a3439]">High-Tech Timber Frame Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
