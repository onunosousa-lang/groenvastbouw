import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, TrendingUp, ShieldCheck, Leaf, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProblemSolution() {
  const { t, language } = useLanguage();

  return (
    <>
      {/* SENMAR PARTNERSHIP INTRO */}
      <section className="py-16 bg-background text-[#2a3439]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed">
              {language === 'nl' 
                ? <>Samen met <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] hover:text-[#8edb38] font-semibold">Senmar</a>, een leider in duurzame bouwtechnologie, creëren wij woningen die werken voor Nederlandse gezinnen. Hoogwaardige passieve huizen waar echte duurzaamheid samengaat met echte efficiëntie, slimme kosten en dagelijks comfort.</>
                : <>Together with <a href="https://www.senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] hover:text-[#8edb38] font-semibold">Senmar</a>, a leader in sustainable building technology, we create homes that work for Dutch families. High quality passive houses where genuine sustainability meets real efficiency, smart costs, and everyday comfort.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-20 bg-[#dcdcdc]">
        <div className="container mx-auto px-4">
          
          {/* Problem */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
                {t('problem_title')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2a3439] mb-4">
                {t('problem_subtitle')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-background/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Users className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2a3439] mb-2">{t('problem_labor')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-background/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2a3439] mb-2">{t('problem_time')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-background/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2a3439] mb-2">{t('problem_cost')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-background/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2a3439] mb-2">{t('problem_quality')}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#dcdcdc] text-[#2a3439] rounded-full text-sm font-semibold mb-4">
                {t('solution_title')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2a3439] mb-4">
                {t('solution_subtitle')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-[#8edb38] bg-[#dcdcdc] hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dcdcdc] flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-[#8edb38]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8edb38] mb-2">{t('solution_speed')}</h3>
                  <p className="text-[#2a3439]">{t('solution_speed_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-[#8edb38] bg-[#dcdcdc] hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dcdcdc] flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-[#8edb38]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8edb38] mb-2">{t('solution_energy')}</h3>
                  <p className="text-[#2a3439]">{t('solution_energy_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-[#8edb38] bg-[#dcdcdc] hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dcdcdc] flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-[#8edb38]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8edb38] mb-2">{t('solution_quality')}</h3>
                  <p className="text-[#2a3439]">{t('solution_quality_desc')}</p>
                </CardContent>
              </Card>
              <Card className="border-[#8edb38] bg-[#dcdcdc] hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dcdcdc] flex items-center justify-center mx-auto mb-4">
                    <Leaf className="text-[#8edb38]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8edb38] mb-2">{t('solution_future')}</h3>
                  <p className="text-[#2a3439]">{t('solution_future_desc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
