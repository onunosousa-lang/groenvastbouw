import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

// Simple throttle implementation
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const navLinkClass = "text-[#2a3439] hover:text-[#7aa050] transition-colors text-sm font-bold";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { openModal } = useContactModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#dcdcdc] backdrop-blur-md shadow-lg' : 'bg-[#dcdcdc] backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo — Desktop */}
          <Link href="/" className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <img src="/logo-icon.png" alt="Groenvastbouw" className="h-12 w-auto" />
            <div>
              <div className="text-[#8edb38] font-bold text-xl leading-tight">Groenvastbouw</div>
              <div className="text-[#2a3439]/80 text-xs italic font-bold">{t('nav_slogan')}</div>
            </div>
          </Link>

          {/* Logo — Mobile */}
          <Link href="/" className="flex lg:hidden flex-1 justify-center items-center gap-2">
            <img src="/logo-icon.png" alt="Groenvastbouw" className="h-10 w-auto" />
            <span className="text-[#8edb38] font-bold text-lg">Groenvastbouw</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/homes" className={navLinkClass}>
              {language === 'nl' ? 'Particulieren' : 'Private Clients'}
            </Link>
            <Link href="/programs" className={navLinkClass}>
              {language === 'nl' ? 'Gemeenten & Ontwikkelaars' : 'Municipalities & Developers'}
            </Link>
            <Link href="/projects" className={navLinkClass}>
              {language === 'nl' ? 'Projecten' : 'Projects'}
            </Link>
            <Link href="/about" className={navLinkClass}>
              {language === 'nl' ? 'Over Ons' : 'About Us'}
            </Link>
            <Link href="/faq" className={navLinkClass}>
              FAQ
            </Link>
            <Button
              onClick={() => openModal()}
              className="bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] text-sm font-semibold"
              size="default"
            >
              {t('nav_contact')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="text-[#2a3439] text-sm font-semibold uppercase"
              size="default"
            >
              {language === 'nl' ? 'en' : 'nl'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2a3439] absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#8edb38]/10 bg-[#dcdcdc]">
            <div className="flex flex-col space-y-3 px-4">
              <Link href="/homes" className="text-[#2a3439] hover:text-[#7aa050] font-bold py-1" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Particulieren' : 'Private Clients'}
              </Link>
              <Link href="/programs" className="text-[#2a3439] hover:text-[#7aa050] font-bold py-1" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Gemeenten & Ontwikkelaars' : 'Municipalities & Developers'}
              </Link>
              <Link href="/projects" className="text-[#2a3439] hover:text-[#7aa050] font-bold py-1" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Projecten' : 'Projects'}
              </Link>
              <Link href="/about" className="text-[#2a3439] hover:text-[#7aa050] font-bold py-1" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Over Ons' : 'About Us'}
              </Link>
              <Link href="/faq" className="text-[#2a3439] hover:text-[#7aa050] font-bold py-1" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Button
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="w-full bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-semibold"
                size="default"
              >
                {t('nav_contact')}
              </Button>
              <Button
                variant="outline"
                onClick={() => { setLanguage(language === 'nl' ? 'en' : 'nl'); setIsMobileMenuOpen(false); }}
                className="w-full text-[#2a3439] font-semibold uppercase"
                size="default"
              >
                {language === 'nl' ? 'EN' : 'NL'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
