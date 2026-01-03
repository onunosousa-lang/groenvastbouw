import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = '31629841297'; // Format: country code + number without +
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as casas passivas da Groenvastbouw.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

      {/* Main button */}
      <button
        onClick={handleClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          {t('whatsapp_button')}
        </span>
      </button>
    </div>
  );
}
