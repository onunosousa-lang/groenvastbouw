import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { X } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/wewmi0xjhhmk2cz8iyciyekopxej7jpi';

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || '',
          message: values.message,
        }),
        mode: 'no-cors',
      });

      // With no-cors mode, we can't check response.ok, so we assume success
      toast.success(language === 'nl' ? 'Uw bericht is verzonden!' : 'Your message has been sent!');
      form.reset();
      onClose();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(language === 'nl' ? 'Er is een fout opgetreden.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#F5F5EF] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
          {/* Header with Close Button */}
          <div className="flex items-start justify-between p-6 border-b border-[#F5F5EF]">
            <div>
              <h2 className="text-2xl font-bold text-[#2a3439]">
                {language === 'nl' ? 'Contacteer Ons' : 'Contact Us'}
              </h2>
              <p className="text-sm text-[#2a3439] mt-1">
                {language === 'nl' ? 'Vul het formulier in en we nemen snel contact op.' : 'Fill out the form and we\'ll get back to you soon.'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#F5F5EF] rounded-lg transition-colors flex-shrink-0 ml-4"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#2a3439]" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#2a3439]">
                        {t('contact_name')} <span className="text-[#8edb38]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={language === 'nl' ? "Uw naam" : "Your name"} 
                          {...field} 
                          className="bg-[#F5F5EF] border-[#F5F5EF] focus:border-[#8edb38] focus:ring-[#8edb38] placeholder:text-[#2a3439]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#2a3439]">
                        {t('contact_email')} <span className="text-[#8edb38]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="naam@voorbeeld.nl" 
                          {...field} 
                          className="bg-[#F5F5EF] border-[#F5F5EF] focus:border-[#8edb38] focus:ring-[#8edb38] placeholder:text-[#2a3439]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#2a3439]">
                        {t('contact_phone')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+31 6 12345678" 
                          {...field} 
                          className="bg-[#F5F5EF] border-[#F5F5EF] focus:border-[#8edb38] focus:ring-[#8edb38] placeholder:text-[#2a3439]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[#2a3439]">
                        {t('contact_message')} <span className="text-[#8edb38]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={language === 'nl' ? "Beschrijf uw project..." : "Describe your project..."} 
                          className="min-h-[100px] bg-[#F5F5EF] border-[#F5F5EF] focus:border-[#8edb38] focus:ring-[#8edb38] placeholder:text-[#2a3439] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-[#F5F5EF] text-[#2a3439] hover:bg-[#F5F5EF]"
                    onClick={onClose}
                  >
                    {language === 'nl' ? 'Annuleren' : 'Cancel'}
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-semibold transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === 'nl' ? 'Verzenden...' : 'Sending...') 
                      : t('contact_submit')
                    }
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Footer Info */}
          <div className="px-6 py-4 bg-[#F5F5EF] border-t border-[#F5F5EF] rounded-b-2xl">
            <p className="text-xs text-[#2a3439] text-center">
              {language === 'nl' 
                ? '📧 info@groenvastbouw.nl' 
                : '📧 info@groenvastbouw.nl'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
