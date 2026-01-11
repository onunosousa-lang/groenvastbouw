import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { X } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(language === 'nl' ? 'Contactaanvraag van ' + values.name : 'Contact Request from ' + values.name);
      const body = encodeURIComponent(
        `${language === 'nl' ? 'Naam' : 'Name'}: ${values.name}\n` +
        `${language === 'nl' ? 'Email' : 'Email'}: ${values.email}\n` +
        `${language === 'nl' ? 'Telefoon' : 'Phone'}: ${values.phone || (language === 'nl' ? 'Niet opgegeven' : 'Not provided')}\n\n` +
        `${language === 'nl' ? 'Bericht' : 'Message'}:\n${values.message}`
      );
      
      // Open email client
      window.location.href = `mailto:contact@groenvastbouw.nl?subject=${subject}&body=${body}`;
      
      toast.success(language === 'nl' ? 'Email client geopend. Stuur uw bericht.' : 'Email client opened. Send your message.');
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
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'nl' ? 'Contacteer Ons' : 'Contact Us'}
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact_name')} *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={language === 'nl' ? "Uw naam" : "Your name"} 
                          {...field} 
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact_email')} *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="naam@voorbeeld.nl" 
                          {...field} 
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact_phone')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+31 6 12345678" 
                          {...field} 
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact_message')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={language === 'nl' ? "Beschrijf uw project..." : "Describe your project..."} 
                          className="min-h-[120px] bg-gray-50 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-4">
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={onClose}
                  >
                    {language === 'nl' ? 'Annuleren' : 'Cancel'}
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-[#90dc35] hover:bg-[#6fb820] text-[#2A3439]"
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
        </div>
      </div>
    </>
  );
}
