import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Se não estiver na home, navegar primeiro para home
    if (location !== '/') {
      setLocation('/');
      // Aguardar navegação e depois scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

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
              <div className="text-white font-bold text-lg">Groenvastbouw</div>
              <div className="text-green-400 text-xs italic">Nuchter bouwen. Slim wonen.</div>
            </div>
          </div>

          {/* Logo - Mobile (Centrado) */}
          <div className="flex lg:hidden flex-1 justify-center items-center">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex flex-col items-center gap-1">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-14 w-auto" />
              <div className="text-white font-bold text-base">Groenvastbouw</div>
              <div className="text-green-400 text-[10px] italic">Nuchter bouwen. Slim wonen.</div>
            </a>
          </div>

          {/* Desktop Navigation + Language Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              about
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              services
            </a>
            <a href="#senmar" onClick={(e) => { e.preventDefault(); scrollToSection('senmar'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              technology
            </a>
            <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              benefits
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              pricing
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="text-white/90 hover:text-green-400 transition-colors text-sm">
              faq
            </a>
            <Link href="/projecten" className="text-white/90 hover:text-green-400 transition-colors text-sm">
              projecten
            </Link>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-sm">
              drop us a line
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
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white/90 hover:text-green-400">
                about
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/90 hover:text-green-400">
                services
              </a>
              <a href="#senmar" onClick={(e) => { e.preventDefault(); scrollToSection('senmar'); }} className="text-white/90 hover:text-green-400">
                technology
              </a>
              <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} className="text-white/90 hover:text-green-400">
                benefits
              </a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-white/90 hover:text-green-400">
                pricing
              </a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="text-white/90 hover:text-green-400">
                faq
              </a>
              <Link href="/projecten" className="text-white/90 hover:text-green-400" onClick={() => setIsMobileMenuOpen(false)}>
                projecten
              </Link>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-center">
                drop us a line
              </a>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
              >
                {language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
