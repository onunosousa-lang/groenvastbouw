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
    <div className="min-h-screen bg-[#dcdcdc]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2a3439] to-[#1a1f23] text-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <Link href="/" className="inline-flex items-center gap-2 text-[#8edb38] hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'nl' ? 'Contact' : 'Contact'}
            </h1>
            <p className="text-xl text-[#2a3439] leading-relaxed">
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
      <section className="py-16 px-4 bg-[#dcdcdc]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2a3439] mb-4">
                {language === 'nl' ? 'Contactgegevens' : 'Contact Information'}
              </h3>
              <div className="space-y-4 text-[#2a3439]">
                <div>
                  <p className="font-semibold text-[#2a3439]">{language === 'nl' ? 'Email' : 'Email'}</p>
                  <a href="mailto:contact@groenvastbouw.nl" className="text-[#8edb38] hover:text-[#8edb38]">
                    contact@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-[#2a3439]">{language === 'nl' ? 'WhatsApp' : 'WhatsApp'}</p>
                  <a href="https://wa.me/31629841298" target="_blank" rel="noopener noreferrer" className="text-[#8edb38] hover:text-[#8edb38]">
                    +31 6 29841298
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2a3439] mb-4">
                {language === 'nl' ? 'Wat u kunt verwachten' : 'What to Expect'}
              </h3>
              <ul className="space-y-3 text-[#2a3439]">
                <li className="flex items-start gap-3">
                  <span className="text-[#8edb38] font-bold mt-1">✓</span>
                  <span>{language === 'nl' ? 'Snelle respons op uw aanvraag' : 'Quick response to your inquiry'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8edb38] font-bold mt-1">✓</span>
                  <span>{language === 'nl' ? 'Persoonlijk advies van experts' : 'Personal advice from experts'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8edb38] font-bold mt-1">✓</span>
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
