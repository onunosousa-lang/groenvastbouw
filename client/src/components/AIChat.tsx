import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        role: 'assistant',
        content: language === 'nl' 
          ? 'Hallo! Ik ben de Groenvastbouw assistent. Hoe kan ik u helpen met informatie over onze passieve huizen?'
          : 'Hello! I\'m the Groenvastbouw assistant. How can I help you with information about our passive houses?'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI response based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('prijs') || lowerMessage.includes('kosten')) {
      return language === 'nl'
        ? 'Wij bieden drie prestatieniveaus: Optimal (€800-€900/m² structuur), Passive (€900-€1,000/m²), en Super Passive (€1,000-€1,100/m²). Voor turnkey oplossingen variëren de prijzen van €1,500 tot €1,900/m². Een T3 woning van 97m² kost bijvoorbeeld €155,000-€175,000 turnkey. Wilt u een persoonlijke offerte? Neem contact op via info@groenvastbouw.nl of bel 06 2984 1297.'
        : 'We offer three performance levels: Optimal (€800-€900/m² structure), Passive (€900-€1,000/m²), and Super Passive (€1,000-€1,100/m²). For turnkey solutions, prices range from €1,500 to €1,900/m². For example, a T3 home of 97m² costs €155,000-€175,000 turnkey. Would you like a personal quote? Contact us at info@groenvastbouw.nl or call 06 2984 1297.';
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('tijd') || lowerMessage.includes('duur')) {
      return language === 'nl'
        ? 'De bouwtijd is ongeveer 6 maanden totaal: 3 maanden voor de structuur (productie en montage) en nog eens 3 maanden voor de afwerking. De structuur wordt geprefabriceerd in Portugal en ter plaatse gemonteerd in 7-10 dagen.'
        : 'The construction time is approximately 6 months total: 3 months for the structure (production and assembly) and another 3 months for finishing. The structure is prefabricated in Portugal and assembled on-site in 7-10 days.';
    }
    
    if (lowerMessage.includes('passive') || lowerMessage.includes('energy') || lowerMessage.includes('energie') || lowerMessage.includes('passief')) {
      return language === 'nl'
        ? 'Passieve huizen gebruiken tot 90% minder energie dan traditionele woningen. Dit betekent een besparing van ongeveer €2,100 per jaar op energiekosten. Ze bieden ook uitzonderlijk comfort met constante temperaturen van 20-22°C, continue gefilterde ventilatie en superieure geluidsisolatie.'
        : 'Passive houses use up to 90% less energy than traditional homes. This means savings of approximately €2,100 per year on energy costs. They also offer exceptional comfort with constant temperatures of 20-22°C, continuous filtered ventilation and superior sound insulation.';
    }
    
    if (lowerMessage.includes('senmar') || lowerMessage.includes('technology') || lowerMessage.includes('technologie')) {
      return language === 'nl'
        ? 'Wij werken samen met Senmar, een toonaangevende Portugese fabrikant van hoogwaardige houtskeletbouw structuren. Senmar gebruikt geavanceerde CNC-technologie en duurzaam Scandinavisch hout. Hun fabriek in Coja produceert één huis per dag met precisie en nul afval. Meer informatie: https://senmar.pt/en'
        : 'We partner with Senmar, a leading Portuguese manufacturer of high-performance timber frame structures. Senmar uses advanced CNC technology and sustainable Nordic timber. Their factory in Coja produces one house per day with precision and zero waste. More info: https://senmar.pt/en';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('telefoon')) {
      return language === 'nl'
        ? 'U kunt ons bereiken via:\n📧 Email: info@groenvastbouw.nl\n📱 Telefoon: 06 2984 1297\n\nWij reageren binnen 24 uur op alle aanvragen!'
        : 'You can reach us at:\n📧 Email: info@groenvastbouw.nl\n📱 Phone: 06 2984 1297\n\nWe respond to all inquiries within 24 hours!';
    }
    
    if (lowerMessage.includes('whatsapp')) {
      return language === 'nl'
        ? 'U kunt ons ook bereiken via WhatsApp! Klik op de groene WhatsApp knop rechtsonder op de pagina om direct een gesprek te starten op nummer 06 2984 1297.'
        : 'You can also reach us via WhatsApp! Click the green WhatsApp button at the bottom right of the page to start a conversation directly at 06 2984 1297.';
    }
    
    // Default response
    return language === 'nl'
      ? 'Bedankt voor uw vraag! Voor gedetailleerde informatie over dit onderwerp, neem gerust contact met ons op via info@groenvastbouw.nl of bel 06 2984 1297. Onze experts helpen u graag verder!'
      : 'Thank you for your question! For detailed information about this topic, please contact us at info@groenvastbouw.nl or call 06 2984 1297. Our experts are happy to help!';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(input);
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: language === 'nl' 
          ? 'Sorry, er is een fout opgetreden. Neem direct contact met ons op via info@groenvastbouw.nl'
          : 'Sorry, an error occurred. Please contact us directly at info@groenvastbouw.nl'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            {language === 'nl' ? 'Chat met ons' : 'Chat with us'}
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="Groenvastbouw" className="h-8 w-8" />
              <div>
                <div className="font-semibold">Groenvastbouw AI</div>
                <div className="text-xs text-green-100">
                  {language === 'nl' ? 'Online - Wij helpen u graag' : 'Online - Happy to help'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-800 shadow'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'nl' ? 'Typ uw vraag...' : 'Type your question...'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
