import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function Footer() {
  const { language, t } = useLanguage();

  const content = {
    nl: {
      company: 'Groenvastbouw',
      description: 'Prefab passiefhuizen gebouwd met innovatieve technologie van Senmar.',
      contact: 'Contact',
      email: 'contact@groenvastbouw.nl',
      phone: '+31 6 29841298',
      kvk: 'KvK: 75308045',
      insurance: '€2,5M Verzekerd',
      rights: '© 2026 Groenvastbouw. Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Gebruiksvoorwaarden',
    },
    en: {
      company: 'Groenvastbouw',
      description: 'Prefab passive houses built with innovative Senmar technology.',
      contact: 'Contact',
      email: 'contact@groenvastbouw.nl',
      phone: '+31 6 29841298',
      kvk: 'KvK: 75308045',
      insurance: '€2.5M Insured',
      rights: '© 2026 Groenvastbouw. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <footer className="bg-[#2A3439] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#90dc35] mb-3">{currentContent.company}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#90dc35] mb-3">{currentContent.contact}</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`mailto:${currentContent.email}`} className="text-gray-300 hover:text-[#90dc35] transition-colors">
                  {currentContent.email}
                </a>
              </p>
              <p>
                <a href={`tel:${currentContent.phone}`} className="text-gray-300 hover:text-[#90dc35] transition-colors">
                  {currentContent.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[#90dc35] mb-3">{t('footer_legal')}</h4>
            <div className="space-y-2 text-sm">
              <p>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-[#90dc35] transition-colors">
                  {currentContent.privacy}
                </Link>
              </p>
              <p>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-[#90dc35] transition-colors">
                  {currentContent.terms}
                </Link>
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-semibold text-[#90dc35] mb-3">{t('footer_credentials')}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">{currentContent.kvk}</p>
              <p className="text-gray-300">{currentContent.insurance}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            {currentContent.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
