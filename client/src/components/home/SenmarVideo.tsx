import LazyVideo from '@/components/LazyVideo';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SenmarVideo() {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#90dc35]/20 text-green-400 rounded-full text-sm font-semibold mb-4">
              {language === 'nl' ? 'Zie het in actie' : 'See it in action'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'nl' ? 'Senmar Passieve Oplossing' : 'Senmar Passive Solution'}
            </h2>
            <p className="text-xl text-white">
              {language === 'nl' ? 'Industriële precisie ontmoet duurzaam bouwen' : 'Industrial precision meets sustainable construction'}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <LazyVideo 
              src="/senmar-solution.mp4"
              poster="/images/new/hero-bg.jpg"
              className="w-full h-auto cursor-pointer"
            >
              {language === 'nl' ? 'Uw browser ondersteunt geen video.' : 'Your browser does not support video.'}
            </LazyVideo>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <p className="text-white text-sm md:text-base">
                {language === 'nl' 
                  ? 'CNC-precisie, fabrieksproductie en Passivhaus-certificering in één geïntegreerde oplossing.' 
                  : 'CNC precision, factory production and Passive House certification in one integrated solution.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
