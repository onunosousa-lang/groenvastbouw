import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO />
      <Navbar />

      {/* Hero — short intro + two doors */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.jpg"
            alt="Groenvastbouw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content card */}
        <div className="container mx-auto px-4 z-10 relative pt-28 pb-16">
          <div className="max-w-3xl mx-auto bg-[#dcdcdc] rounded-lg shadow-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8edb38] mb-4 leading-tight">
              {language === 'nl'
                ? 'Hoogwaardige prefab bouwsystemen in Nederland'
                : 'High-performance prefab building systems in the Netherlands'}
            </h1>
            <p className="text-base md:text-lg text-[#2a3439]/80 mb-8">
              {language === 'nl'
                ? 'Turnkey programma\u2019s voor gemeenten & ontwikkelaars \u2014 en maatwerkwoningen voor particulieren.'
                : 'Turnkey programs for municipalities & developers \u2014 and custom homes for private clients.'}
            </p>

            {/* Two audience buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="flex-1 bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-bold text-base py-6">
                <Link href="/programs">
                  {language === 'nl' ? 'Gemeenten & Ontwikkelaars' : 'Municipalities & Developers'}
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-[#2a3439] text-[#2a3439] hover:bg-[#2a3439]/10 font-bold text-base py-6">
                <Link href="/homes">
                  {language === 'nl' ? 'Particuliere Klanten' : 'Private Clients'}
                </Link>
              </Button>
            </div>

            {/* Short bullet list */}
            <div className="space-y-3 mb-6">
              {(language === 'nl'
                ? [
                    'Prefab passiefhuissystemen, geproduceerd in partnerschap met Senmar',
                    'Volledige structuur gemonteerd in 8\u201312 dagen',
                    'Gecontroleerde kosten, minimaal afval, toekomstbestendig comfort',
                    '90% lagere energierekeningen \u2014 voor het leven',
                  ]
                : [
                    'Prefab passive house systems, manufactured in partnership with Senmar',
                    'Full structure mounted in 8\u201312 days',
                    'Controlled costs, minimum waste, future-proof comfort',
                    '90% lower energy bills \u2014 for life',
                  ]
              ).map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2a3439] text-sm md:text-base font-medium">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#2a3439]/60">
              {language === 'nl'
                ? 'Volledig turnkey voor B2B (ROW+, BOX+, STACK+). Standard of Passive.'
                : 'Full turnkey only for B2B (ROW+, BOX+, STACK+). Standard or Passive.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
