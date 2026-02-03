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
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#8edb38] hover:bg-[#8edb38] text-foreground p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        {t('whatsapp_button')}
      </span>
    </button>
  );
}
