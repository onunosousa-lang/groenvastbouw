import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/home/ContactForm';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2A3439] to-[#1a1f23] text-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <Link href="/" className="inline-flex items-center gap-2 text-[#A4D65E] hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'nl' ? 'Contact' : 'Contact'}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {language === 'nl'
                ? 'Neem contact met ons op om uw passiefhuisproject te bespreken. Wij helpen u graag verder.'
                : 'Get in touch with us to discuss your passive house project. We are happy to help.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp}>
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Contactgegevens' : 'Contact Information'}
              </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">{language === 'nl' ? 'Email' : 'Email'}</p>
                  <a href="mailto:contact@groenvastbouw.nl" className="text-[#A4D65E] hover:text-[#8BC34A]">
                    contact@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{language === 'nl' ? 'WhatsApp' : 'WhatsApp'}</p>
                  <a href="https://wa.me/31629841298" target="_blank" rel="noopener noreferrer" className="text-[#A4D65E] hover:text-[#8BC34A]">
                    +31 6 29841298
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Wat u kunt verwachten' : 'What to Expect'}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#A4D65E] font-bold mt-1">✓</span>
                  <span>{language === 'nl' ? 'Snelle respons op uw aanvraag' : 'Quick response to your inquiry'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A4D65E] font-bold mt-1">✓</span>
                  <span>{language === 'nl' ? 'Persoonlijk advies van experts' : 'Personal advice from experts'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A4D65E] font-bold mt-1">✓</span>
                  <span>{language === 'nl' ? 'Geen verplichtingen' : 'No obligations'}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
