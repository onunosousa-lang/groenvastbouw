import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const FORM_STORAGE_KEY = 'groenvastbouw_contact_form';

export default function ContactForm() {
  const { t, language } = useLanguage();

  // Load saved form data from localStorage
  const getSavedFormData = () => {
    try {
      const saved = localStorage.getItem(FORM_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getSavedFormData() || {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // tRPC mutation for sending contact form
  const sendMessage = trpc.contact.sendMessage.useMutation({
    onSuccess: () => {
      toast.success(
        language === 'nl'
          ? '✅ Bericht succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.'
          : '✅ Message sent successfully! We will contact you as soon as possible.'
      );
      form.reset();
      localStorage.removeItem(FORM_STORAGE_KEY);
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast.error(
        language === 'nl'
          ? '❌ Er is een fout opgetreden. Probeer het opnieuw of neem contact op via WhatsApp.'
          : '❌ An error occurred. Please try again or contact us via WhatsApp.'
      );
    },
  });

  // Auto-save form data to localStorage
  useEffect(() => {
    const subscription = form.watch((value) => {
      try {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(value));
      } catch (error) {
        console.error('Failed to save form data:', error);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    sendMessage.mutate(values);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact_title')}</h2>
            <p className="text-xl text-gray-600">{t('contact_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-none bg-gray-50">
              <CardHeader>
                <CardTitle>{t('contact_info_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Groenvastbouw</h3>
                  <p className="text-gray-600">Amsterdam, Nederland</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@groenvastbouw.nl" className="text-green-600 hover:underline">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/31629841297" className="text-green-600 hover:underline">
                    {t('whatsapp_button')}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">KvK</h3>
                  <p className="text-gray-600">75308045</p>
                </div>
              </CardContent>
            </Card>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact_name')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'nl' ? "Uw naam" : "Your name"} {...field} className="bg-gray-50" />
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
                        <Input type="email" placeholder="naam@voorbeeld.nl" {...field} className="bg-gray-50" />
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
                        <Input type="tel" placeholder="+31 6 12345678" {...field} className="bg-gray-50" />
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
                          className="min-h-[150px] bg-gray-50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  disabled={sendMessage.isPending}
                >
                  {sendMessage.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {language === 'nl' ? 'Verzenden...' : 'Sending...'}
                    </>
                  ) : (
                    t('contact_submit')
                  )}
                </Button>
                {getSavedFormData() && !sendMessage.isPending && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {language === 'nl'
                      ? '💾 Uw gegevens zijn automatisch opgeslagen'
                      : '💾 Your data has been auto-saved'}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
