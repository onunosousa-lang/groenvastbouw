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
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-[#F8F8F7] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A3439] mb-6 leading-tight">{t('contact_title')}</h2>
            <p className="text-xl text-[#2A3439]/80 font-medium leading-relaxed">{t('contact_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-xl border-2 border-[#7FB956]/20 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-br from-[#7FB956]/5 to-transparent pb-6">
                <CardTitle className="text-2xl text-[#2A3439]">{t('contact_info_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h3 className="font-bold text-[#2A3439] mb-2 text-lg">Groenvastbouw</h3>
                  <p className="text-[#8C9194]">Amsterdam, Nederland</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2A3439] mb-2">Email</h3>
                  <a href="mailto:info@groenvastbouw.nl" className="text-[#7FB956] hover:text-[#6da04a] font-medium hover:underline transition-colors">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-[#2A3439] mb-2">WhatsApp</h3>
                  <a href="https://wa.me/31629841297" className="text-[#7FB956] hover:text-[#6da04a] font-medium hover:underline transition-colors">
                    {t('whatsapp_button')}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-[#2A3439] mb-2">KvK</h3>
                  <p className="text-[#8C9194] font-mono">75308045</p>
                </div>
                <div className="pt-4 border-t border-[#7FB956]/20">
                  <p className="text-sm text-[#8C9194] leading-relaxed">
                    {language === 'nl'
                      ? '€2,5M verzekerd | 10 jaar garantie'
                      : '€2.5M insured | 10 year warranty'}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-xl border-2 border-[#7FB956]/10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#2A3439] font-semibold">{t('contact_name')} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={language === 'nl' ? "Uw naam" : "Your name"}
                          {...field}
                          className="bg-white border-2 border-[#D7D7D6] focus:border-[#7FB956] transition-colors h-12"
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
                      <FormLabel className="text-[#2A3439] font-semibold">{t('contact_email')} *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="naam@voorbeeld.nl"
                          {...field}
                          className="bg-white border-2 border-[#D7D7D6] focus:border-[#7FB956] transition-colors h-12"
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
                      <FormLabel className="text-[#2A3439] font-semibold">{t('contact_phone')}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+31 6 12345678"
                          {...field}
                          className="bg-white border-2 border-[#D7D7D6] focus:border-[#7FB956] transition-colors h-12"
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
                      <FormLabel className="text-[#2A3439] font-semibold">{t('contact_message')} *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={language === 'nl' ? "Beschrijf uw project..." : "Describe your project..."}
                          className="min-h-[150px] bg-white border-2 border-[#D7D7D6] focus:border-[#7FB956] transition-colors resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#7FB956] hover:bg-[#6da04a] text-white text-xl font-bold py-7 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
                  disabled={sendMessage.isPending}
                >
                  {sendMessage.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      {language === 'nl' ? 'Verzenden...' : 'Sending...'}
                    </>
                  ) : (
                    t('contact_submit')
                  )}
                </Button>
                {getSavedFormData() && !sendMessage.isPending && (
                  <p className="text-xs text-[#8C9194] text-center mt-2 flex items-center justify-center gap-2">
                    <span className="text-[#7FB956]">💾</span>
                    {language === 'nl'
                      ? 'Uw gegevens zijn automatisch opgeslagen'
                      : 'Your data has been auto-saved'}
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
