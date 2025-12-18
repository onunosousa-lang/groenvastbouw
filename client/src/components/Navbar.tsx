import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

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

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location !== '/') {
      setLocation('/');
      // Wait for navigation to complete and DOM to update
      // Using a small timeout is still necessary when switching routes,
      // but we can make it more robust by checking for element existence
      const checkAndScroll = (attempts = 0) => {
        const element = document.getElementById(id);
        if (element) {
          scrollToElement();
        } else if (attempts < 10) {
          setTimeout(() => checkAndScroll(attempts + 1), 50);
        }
      };
      setTimeout(() => checkAndScroll(), 100);
    } else {
      scrollToElement();
    }
    setIsMobileMenuOpen(false);
  }, [location, setLocation]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          
          {/* Logo - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-12 w-auto" />
            </a>
            <div>
              <div className="text-[#7FB956] font-bold text-xl">Groenvastbouw</div>
              <div className="text-white/80 text-xs italic">Nuchter bouwen. Slim wonen.</div>
            </div>
          </div>

          {/* Logo - Mobile */}
          <div className="flex lg:hidden flex-1 justify-center items-center gap-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-2">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-10 w-auto" />
              <span className="text-[#7FB956] font-bold text-lg">Groenvastbouw</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/about" className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {t('nav_about')}
            </Link>
            <a href="#systems" onClick={(e) => { e.preventDefault(); scrollToSection('systems'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {t('nav_services')}
            </a>
            <a href="#technology" onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {t('nav_senmar')}
            </a>
            <a href="#markets" onClick={(e) => { e.preventDefault(); scrollToSection('markets'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {t('nav_benefits')}
            </a>
            {/* Pricing Removed Here */}
            <Link href="/faq" className="text-white/90 hover:text-green-400 transition-colors text-sm">
              FAQ
            </Link>
            <Link href="/prefab-benefits" className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {language === 'nl' ? 'Prefab Voordelen' : 'Prefab Benefits'}
            </Link>
            {/* Projects link hidden per user request */}
            <Link href="/why-us" className="text-white/90 hover:text-green-400 transition-colors text-sm">
              {language === 'nl' ? 'Waarom Ons' : 'Why Us'}
            </Link>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-sm">
              {t('nav_contact')}
            </a>
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors text-sm font-semibold"
            >
              {language === 'nl' ? 'en' : 'nl'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-gray-900">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/about" className="text-white/90 hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav_about')}
              </Link>
              <a href="#systems" onClick={(e) => { e.preventDefault(); scrollToSection('systems'); }} className="text-white/90 hover:text-green-400">
                {t('nav_services')}
              </a>
              <a href="#technology" onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }} className="text-white/90 hover:text-green-400">
                {t('nav_senmar')}
              </a>
              <a href="#markets" onClick={(e) => { e.preventDefault(); scrollToSection('markets'); }} className="text-white/90 hover:text-green-400">
                {t('nav_benefits')}
              </a>
              <Link href="/faq" className="text-white/90 hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/prefab-benefits" className="text-white/90 hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Prefab Voordelen' : 'Prefab Benefits'}
              </Link>
              {/* Projects link hidden per user request */}
              <Link href="/why-us" className="text-white/90 hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Waarom Ons' : 'Why Us'}
              </Link>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-center">
                {t('nav_contact')}
              </a>
              <button
                onClick={() => { setLanguage(language === 'nl' ? 'en' : 'nl'); setIsMobileMenuOpen(false); }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-center font-semibold uppercase"
              >
                {language === 'nl' ? 'EN' : 'NL'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
