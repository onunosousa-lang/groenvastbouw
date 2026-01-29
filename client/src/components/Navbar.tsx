import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  const { openModal } = useContactModal();
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          
          {/* Logo - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-12 w-auto" />
            </a>
            <div>
              <div className="text-[#A4D65E] font-bold text-xl">Groenvastbouw</div>
              <div className="text-foreground/80 text-xs italic">{t('nav_slogan')}</div>
            </div>
          </div>

          {/* Logo - Mobile */}
          <div className="flex lg:hidden flex-1 justify-center items-center gap-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-2">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-10 w-auto" />
              <span className="text-[#A4D65E] font-bold text-lg">Groenvastbouw</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/our-offer" className="text-foreground/90 hover:text-[#A4D65E] transition-colors text-sm">
              {language === 'nl' ? 'Ons Aanbod' : 'Our Offer'}
            </Link>
            <Link href="/projects" className="text-foreground/90 hover:text-[#A4D65E] transition-colors text-sm">
              {language === 'nl' ? 'Projecten' : 'Projects'}
            </Link>
            <Link href="/about" className="text-foreground/90 hover:text-[#A4D65E] transition-colors text-sm">
              {language === 'nl' ? 'Over Ons' : 'About Us'}
            </Link>
            <Link href="/faq" className="text-foreground/90 hover:text-[#A4D65E] transition-colors text-sm">
              FAQ
            </Link>
            <button onClick={() => openModal()} className="bg-[#A4D65E] hover:bg-[#8BC34A] text-[#2A3439] px-6 py-2 rounded transition-colors text-sm cursor-pointer font-semibold">
              {t('nav_contact')}
            </button>
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="bg-[#A4D65E] hover:bg-[#8BC34A] text-[#2A3439] px-4 py-2 rounded transition-colors text-sm font-semibold"
            >
              {language === 'nl' ? 'en' : 'nl'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-background">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/our-offer" className="text-foreground/90 hover:text-[#A4D65E]" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Ons Aanbod' : 'Our Offer'}
              </Link>
              <Link href="/projects" className="text-foreground/90 hover:text-[#A4D65E]" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Projecten' : 'Projects'}
              </Link>
              <Link href="/about" className="text-foreground/90 hover:text-[#A4D65E]" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'nl' ? 'Over Ons' : 'About Us'}
              </Link>
              <Link href="/faq" className="text-foreground/90 hover:text-[#A4D65E]" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
              <button onClick={() => { openModal(); setIsMobileMenuOpen(false); }} className="bg-[#A4D65E] hover:bg-[#8BC34A] text-[#2A3439] px-6 py-2 rounded transition-colors text-center cursor-pointer w-full font-semibold">
                {t('nav_contact')}
              </button>
              <button
                onClick={() => { setLanguage(language === 'nl' ? 'en' : 'nl'); setIsMobileMenuOpen(false); }}
                className="bg-[#A4D65E] hover:bg-[#8BC34A] text-[#2A3439] px-6 py-2 rounded transition-colors text-center font-semibold uppercase"
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
