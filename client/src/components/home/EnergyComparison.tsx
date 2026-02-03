import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EnergyComparison() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('energy_comparison_title')}</h2>
          <p className="text-xl text-foreground">{t('energy_comparison_subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Chart Visualization */}
          <div className="bg-card p-8 rounded-2xl shadow-2xl border border-gray-700">
            <div className="space-y-8">
              {/* Average House Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2 text-foreground">
                  <span>{t('energy_comparison_average')}</span>
                  <span>150 kWh/m²/jr</span>
                </div>
                <div className="h-12 bg-gray-700 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-red-500 w-full flex items-center justify-end px-4 font-bold">
                    {t('energy_comparison_per_year')}
                  </div>
                </div>
                <div className="text-xs text-foreground mt-1 text-right">
                  {t('energy_comparison_heating')}
                </div>
              </div>

              {/* Groenvastbouw Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2 text-[#8edb38] font-bold">
                  <span>{t('energy_comparison_groenvastbouw')}</span>
                  <span>15 kWh/m²/jr</span>
                </div>
                <div className="h-12 bg-gray-700 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-[#8edb38] w-[10%] flex items-center justify-start px-4 font-bold whitespace-nowrap shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                    90% {language === 'nl' ? 'minder' : 'less'}
                  </div>
                </div>
                <div className="text-xs text-[#8edb38]/70 mt-1">
                  {t('energy_comparison_heating')}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-background/50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#8edb38] mb-1">90%</div>
                  <div className="text-sm text-foreground">{t('energy_comparison_savings_annual')}</div>
                </div>
                <div className="bg-background/50 p-4 rounded-xl border border-[#8edb38]/20">
                  <div className="text-3xl font-bold text-[#8edb38] mb-1">{language === 'nl' ? 'Aanzienlijk' : 'Significant'}</div>
                  <div className="text-sm text-foreground">{t('energy_comparison_savings_30y')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Context & Info */}
          <div className="space-y-8">
            <div className="bg-[#2a3439]/20 border border-[#8edb38]/30 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-[#8edb38] mb-2">
                {t('energy_comparison_ratio')}
              </h3>
              <p className="text-foreground leading-relaxed">
                {t('energy_comparison_ratio_desc')}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">{t('energy_comparison_includes')}</h4>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-[#8edb38] rounded-full"></div>
                  {t('energy_comparison_space')}
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-[#8edb38] rounded-full"></div>
                  {t('energy_comparison_water')}
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-[#8edb38] rounded-full"></div>
                  {t('energy_comparison_ventilation')}
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-[#8edb38] rounded-full"></div>
                  {t('energy_comparison_cooling')}
                </li>
              </ul>
            </div>

            <Card className="bg-card border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2a3439]/50 p-3 rounded-lg">
                    <Leaf className="text-[#8edb38]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{t('energy_comparison_embodied')}</h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {language === 'nl' 
                        ? <>Houtskeletbouw (<a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] hover:text-[#8edb38] font-semibold">Senmar</a>) gebruikt 50% minder energie tijdens productie dan betonbouw. Na ~4 jaar heeft het huis zijn bouwinvestering terugverdiend en wordt het carbon-positief voor 50+ jaar.</>
                        : <>Timber frame construction (<a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] hover:text-[#8edb38] font-semibold">Senmar</a>) uses 50% less energy during production than concrete construction. After ~4 years, the house has earned back its construction investment and becomes carbon-positive for 50+ years.</>
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
