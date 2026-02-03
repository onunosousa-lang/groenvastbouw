import { useState } from 'react';
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
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
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(language === 'nl' ? 'Er is een fout opgetreden.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/fabriek-productie-houten-structuur-montage.jpg)' }}
      />
      <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2a3439] mb-4">{t('contact_title')}</h2>
            <p className="text-xl text-[#2a3439]">{t('contact_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-none bg-card">

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#2a3439] mb-1">Groenvastbouw</h3>
                  <p className="text-[#2a3439]">Amsterdam, Nederland</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2a3439] mb-1">Email</h3>
                  <a href="mailto:info@groenvastbouw.nl" className="text-[#8edb38] hover:underline">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-[#2a3439] mb-1">WhatsApp</h3>
                  <a href="https://wa.me/31629841297" className="text-[#8edb38] hover:underline">
                    {t('whatsapp_button')}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-[#2a3439] mb-1">KvK</h3>
                  <p className="text-[#2a3439]">75308045</p>
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
                      <FormLabel className="text-[#2a3439]">{t('contact_name')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'nl' ? "Uw naam" : "Your name"} {...field} className="bg-card text-[#2a3439]" />
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
                      <FormLabel className="text-[#2a3439]">{t('contact_email')} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="naam@voorbeeld.nl" {...field} className="bg-card text-[#2a3439]" />
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
                      <FormLabel className="text-[#2a3439]">{t('contact_phone')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+31 6 12345678" {...field} className="bg-card text-[#2a3439]" />
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
                      <FormLabel className="text-[#2a3439]">{t('contact_message')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={language === 'nl' ? "Beschrijf uw project..." : "Describe your project..."} 
                          className="min-h-[150px] bg-card text-[#2a3439]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-[#8edb38] hover:bg-[#8edb38] text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? (language === 'nl' ? 'Verzenden...' : 'Sending...') 
                    : t('contact_submit')
                  }
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
