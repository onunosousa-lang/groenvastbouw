import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8edb38] mb-8 text-center">
          {t('aboutus_title')}
        </h2>
        
        <div className="space-y-6 text-lg text-[#2a3439] leading-relaxed">
          <p>{t('aboutus_p1')}</p>
          
          <p>{t('aboutus_p2')}</p>
          
          <p>{t('aboutus_p3')}</p>
          
          <p>{t('aboutus_p4')}</p>
          
          <p className="text-xl font-semibold text-[#8edb38] text-center mt-8">
            {t('aboutus_tagline')}
          </p>
        </div>
      </div>
    </section>
  );
}
