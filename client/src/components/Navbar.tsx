import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

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
      isScrolled ? 'bg-[#F5F5EF] shadow-md' : 'bg-[#F5F5EF]'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo-icon.png" alt="Groenvastbouw" className="h-11 w-auto" />
            <div className="hidden sm:block">
              <div className="text-[#8edb38] font-bold text-xl leading-tight">Groenvastbouw</div>
              <div className="text-[#2a3439]/70 text-xs italic font-medium">{t('nav_slogan')}</div>
            </div>
            <span className="sm:hidden text-[#8edb38] font-bold text-lg">Groenvastbouw</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/homes" className={navLinkClass}>
              {language === 'nl' ? 'Particulieren' : 'Private Clients'}
            </Link>
            <Link href="/programs" className={navLinkClass}>
              {language === 'nl' ? 'Bedrijven & Ontwikkelaars' : 'Businesses & Developers'}
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

            <div className="w-px h-5 bg-[#2a3439]/20 mx-1" />

            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="text-xs font-bold text-[#2a3439]/60 hover:text-[#2a3439] transition-colors uppercase tracking-widest"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>

            <Button
              onClick={() => openModal()}
              className="bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] text-sm font-semibold px-5"
            >
              {t('nav_contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2a3439] p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#2a3439]/10">
            <div className="flex flex-col gap-1 pb-2">
              {[
                { href: '/homes', label: language === 'nl' ? 'Particulieren' : 'Private Clients' },
                { href: '/programs', label: language === 'nl' ? 'Bedrijven & Ontwikkelaars' : 'Businesses & Developers' },
                { href: '/projects', label: language === 'nl' ? 'Projecten' : 'Projects' },
                { href: '/about', label: language === 'nl' ? 'Over Ons' : 'About Us' },
                { href: '/faq', label: 'FAQ' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#2a3439] hover:text-[#7aa050] font-bold py-2 px-1 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex gap-3 pt-3 border-t border-[#2a3439]/10">
              <Button
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="flex-1 bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-semibold"
              >
                {t('nav_contact')}
              </Button>
              <Button
                variant="outline"
                onClick={() => { setLanguage(language === 'nl' ? 'en' : 'nl'); setIsMobileMenuOpen(false); }}
                className="text-[#2a3439] font-bold uppercase text-xs tracking-widest border-[#2a3439]/30"
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
