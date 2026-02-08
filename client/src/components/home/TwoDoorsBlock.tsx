import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TwoDoorsBlock() {
  const { language } = useLanguage();

  return (
    <section className="py-12 bg-[#dcdcdc]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2a3439] mb-3">
            {language === 'nl'
              ? 'Hoogwaardige prefab bouwsystemen in Nederland'
              : 'High-performance prefab building systems in the Netherlands'}
          </h2>
          <p className="text-base md:text-lg text-[#2a3439]/80 mb-6">
            {language === 'nl'
              ? 'Turnkey programma\u2019s voor gemeenten & ontwikkelaars \u2014 en maatwerkwoningen voor particulieren.'
              : 'Turnkey programs for municipalities & developers \u2014 and custom homes for private clients.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/programs">
              <Button className="bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-bold px-8 py-3 text-base">
                {language === 'nl' ? 'Gemeenten & Ontwikkelaars' : 'Municipalities & Developers'}
              </Button>
            </Link>
            <Link href="/our-offer">
              <Button
                variant="outline"
                className="border-[#2a3439] text-[#2a3439] hover:bg-[#2a3439]/10 font-bold px-8 py-3 text-base"
              >
                {language === 'nl' ? 'Particuliere Klanten' : 'Private Clients'}
              </Button>
            </Link>
          </div>
          <p className="text-xs text-[#2a3439]/60">
            {language === 'nl'
              ? 'Volledig turnkey voor B2B (ROW+, BOX+, STACK+). Standard of Passive.'
              : 'Full turnkey only for B2B (ROW+, BOX+, STACK+). Standard or Passive.'}
          </p>
        </div>
      </div>
    </section>
  );
}
