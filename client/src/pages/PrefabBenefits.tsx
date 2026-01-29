import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/home/ContactForm';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  PiggyBank, 
  Leaf, 
  Award, 
  Recycle, 
  PenTool, 
  Palette, 
  Thermometer, 
  VolumeX, 
  HardHat, 
  Heart, 
  ShieldCheck, 
  Activity, 
  Feather, 
  Factory 
} from 'lucide-react';

export default function PrefabBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_rapid_title'),
      desc: t('prefab_rapid_desc')
    },
    {
      icon: <PiggyBank className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_cost_title'),
      desc: t('prefab_cost_desc')
    },
    {
      icon: <Leaf className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_energy_title'),
      desc: t('prefab_energy_desc')
    },
    {
      icon: <Award className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_quality_title'),
      desc: t('prefab_quality_desc')
    },
    {
      icon: <Recycle className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_sustainability_title'),
      desc: t('prefab_sustainability_desc')
    },
    {
      icon: <PenTool className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_design_title'),
      desc: t('prefab_design_desc')
    },
    {
      icon: <Palette className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_aesthetic_title'),
      desc: t('prefab_aesthetic_desc')
    },
    {
      icon: <Thermometer className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_thermal_title'),
      desc: t('prefab_thermal_desc')
    },
    {
      icon: <VolumeX className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_sound_title'),
      desc: t('prefab_sound_desc')
    },
    {
      icon: <HardHat className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_disruption_title'),
      desc: t('prefab_disruption_desc')
    },
    {
      icon: <Heart className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_health_title'),
      desc: t('prefab_health_desc')
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_durability_title'),
      desc: t('prefab_durability_desc')
    },
    {
      icon: <Activity className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_seismic_title'),
      desc: t('prefab_seismic_desc')
    },
    {
      icon: <Feather className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_lightweight_title'),
      desc: t('prefab_lightweight_desc')
    },
    {
      icon: <Factory className="w-10 h-10 text-[#8eb564]" />,
      title: t('prefab_manufacturing_title'),
      desc: t('prefab_manufacturing_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title={`${t('prefab_title')} | Groenvastbouw`}
        description={t('prefab_intro')}
      />
      <Navbar />
      
      <div className="pt-24 pb-12 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('prefab_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('prefab_subtitle')}
          </p>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-lg text-gray-700 leading-relaxed space-y-6">
          <p>{t('prefab_intro')}</p>
          <p>{t('prefab_intro_2')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="mb-4 p-3 bg-green-50 rounded-full">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {benefit.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
