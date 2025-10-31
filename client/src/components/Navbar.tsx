import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-2xl font-bold text-green-700">
              Groenvastbouw
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-green-700 transition-colors">
              {t('nav_about')}
            </a>
            <a href="#passive" onClick={(e) => { e.preventDefault(); scrollToSection('passive'); }} className="text-gray-700 hover:text-green-700 transition-colors">
              {t('nav_passive')}
            </a>
            <a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }} className="text-gray-700 hover:text-green-700 transition-colors">
              {t('nav_models')}
            </a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} className="text-gray-700 hover:text-green-700 transition-colors">
              {t('nav_process')}
            </a>
            <a href="#sustainability" onClick={(e) => { e.preventDefault(); scrollToSection('sustainability'); }} className="text-gray-700 hover:text-green-700 transition-colors">
              {t('nav_sustainability')}
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              <Button variant="default" className="bg-green-700 hover:bg-green-800">
                {t('nav_contact')}
              </Button>
            </a>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setLanguage('nl')}
              className={`px-3 py-1 rounded ${language === 'nl' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              NL
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-green-700">
                {t('nav_about')}
              </a>
              <a href="#passive" onClick={(e) => { e.preventDefault(); scrollToSection('passive'); }} className="text-gray-700 hover:text-green-700">
                {t('nav_passive')}
              </a>
              <a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }} className="text-gray-700 hover:text-green-700">
                {t('nav_models')}
              </a>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} className="text-gray-700 hover:text-green-700">
                {t('nav_process')}
              </a>
              <a href="#sustainability" onClick={(e) => { e.preventDefault(); scrollToSection('sustainability'); }} className="text-gray-700 hover:text-green-700">
                {t('nav_sustainability')}
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <Button variant="default" className="bg-green-700 hover:bg-green-800 w-full">
                  {t('nav_contact')}
                </Button>
              </a>
              <div className="flex space-x-2 pt-4">
                <button
                  onClick={() => setLanguage('nl')}
                  className={`flex-1 px-3 py-2 rounded ${language === 'nl' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  NL
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded ${language === 'en' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
