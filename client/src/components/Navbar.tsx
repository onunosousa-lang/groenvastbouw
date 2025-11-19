import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
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
    if (location !== '/') {
      setLocation('/');
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

  const navLinks = [
    { href: '/about', label: 'nav_about', isPage: true },
    { href: '#technology', label: 'nav_senmar', isPage: false }, // Points to Technology section
    { href: '#markets', label: 'nav_benefits', isPage: false },  // Points to Markets/Solutions
    { href: '#systems', label: 'nav_services', isPage: false },  // Points to Systems
    { href: '#faq', label: 'faq', isPage: false, customLabel: 'FAQ' },
    { href: '/projects', label: 'projecten', isPage: true, customLabel: 'Projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'lg:bg-transparent lg:backdrop-blur-none py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-3 group">
            <img src="/logo-icon.png" alt="Groenvastbouw" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight leading-none">Groenvastbouw</span>
              <span className="text-green-400 text-[10px] font-medium tracking-widest uppercase opacity-80">Sustainable Living</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white hover:text-green-400 transition-colors uppercase tracking-wide">
                  {link.customLabel || t(link.label as any)}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }} 
                  className="text-sm font-medium text-slate-300 hover:text-white hover:text-green-400 transition-colors uppercase tracking-wide cursor-pointer"
                >
                  {link.customLabel || t(link.label as any)}
                </a>
              )
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="text-slate-400 hover:text-white font-medium text-xs uppercase border border-slate-700 px-2 py-1 rounded hover:border-slate-500 transition-all"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>

            {/* CTA Button */}
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/40 transform hover:-translate-y-0.5"
            >
              {t('nav_contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-300 hover:text-green-400 py-2 border-b border-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.customLabel || t(link.label as any)}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }} 
                  className="text-lg font-medium text-slate-300 hover:text-green-400 py-2 border-b border-slate-800"
                >
                  {link.customLabel || t(link.label as any)}
                </a>
              )
            ))}
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className="bg-green-600 text-white py-3 rounded-lg text-center font-bold mt-4"
            >
              {t('nav_contact')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
