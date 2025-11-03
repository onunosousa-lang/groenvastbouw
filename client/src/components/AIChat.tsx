import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

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

  const chatMutation = trpc.deepseek.chat.useMutation();

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
          ? 'Hallo! Ik ben de Groenvastbouw AI-assistent. Ik kan u helpen met vragen over onze passieve huizen, prijzen, bouwproces en duurzame bouw. Waar kan ik u mee helpen?'
          : 'Hello! I\'m the Groenvastbouw AI assistant. I can help you with questions about our passive houses, prices, construction process and sustainable building. How can I help you?'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

<<<<<<< HEAD
=======
  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      // Call DeepSeek API via our backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.reply || (language === 'nl' 
        ? 'Sorry, ik kon geen antwoord genereren. Neem contact op via info@groenvastbouw.nl'
        : 'Sorry, I couldn\'t generate a response. Please contact info@groenvastbouw.nl');
    } catch (error) {
      console.error('Chat API error:', error);
      throw error;
    }
  };

>>>>>>> d107bbc7995b86a01d310a42be5314f0e7f215ce
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Send message with conversation history (excluding welcome message)
      const conversationHistory = messages.filter(m => m.content !== messages[0]?.content);
      
      const response = await chatMutation.mutateAsync({
        message: input,
        conversationHistory: conversationHistory.length > 0 ? conversationHistory : undefined,
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.message 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Check if it's a configuration error
      const errorMessage = error instanceof Error ? error.message : '';
      const isConfigError = errorMessage.includes('DEEPSEEK_API_KEY');
      
      if (isConfigError) {
        toast.error(
          language === 'nl'
            ? 'DeepSeek API nog niet geconfigureerd. Neem contact op via info@groenvastbouw.nl'
            : 'DeepSeek API not yet configured. Please contact info@groenvastbouw.nl'
        );
      } else {
        toast.error(
          language === 'nl'
            ? 'Er is een fout opgetreden. Probeer het opnieuw of neem contact op.'
            : 'An error occurred. Please try again or contact us.'
        );
      }
      
      // DEBUG MODE: Show detailed error in chat
      const errorDetails = error instanceof Error 
        ? `Error: ${error.message}\n\nStack: ${error.stack?.substring(0, 200) || 'N/A'}`
        : `Unknown error: ${JSON.stringify(error)}`;
      
      const errorMessageContent: Message = {
        role: 'assistant',
        content: language === 'nl' 
          ? `Sorry, ik kan momenteel niet reageren.\n\n🔍 DEBUG INFO:\n${errorDetails}\n\nNeem contact met ons op via:\n📧 info@groenvastbouw.nl\n📱 06 2984 1297`
          : `Sorry, I cannot respond at the moment.\n\n🔍 DEBUG INFO:\n${errorDetails}\n\nPlease contact us at:\n📧 info@groenvastbouw.nl\n📱 06 2984 1297`
      };
      setMessages(prev => [...prev, errorMessageContent]);
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
            {language === 'nl' ? 'Chat met AI' : 'Chat with AI'}
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[400px] max-h-[70vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src="/logo-icon.png?v=4" alt="Groenvastbouw" className="h-8 w-8" />
                <div>
                  <div className="font-semibold">Groenvastbouw AI</div>
                  <div className="text-xs text-green-100">
                    {language === 'nl' ? 'Powered by DeepSeek' : 'Powered by DeepSeek'}
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
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/31629841297?text=Hallo%20Groenvastbouw%2C%20ik%20heb%20een%20vraag%20over..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium w-full"
            >
              <MessageCircle size={16} />
              {language === 'nl' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
            </a>
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
                placeholder={language === 'nl' ? 'Stel uw vraag...' : 'Ask your question...'}
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
            <p className="text-xs text-gray-500 mt-2 text-center">
              {language === 'nl' 
                ? 'AI kan fouten maken. Controleer belangrijke informatie.'
                : 'AI can make mistakes. Verify important information.'}
            </p>
          </form>
        </div>
      )}
    </>
  );
}
