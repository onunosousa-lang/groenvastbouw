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
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(language === 'nl' ? 'Er is een fout opgetreden.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
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
                  <a href="mailto:info@groenvastbouw.nl" className="text-[#90dc35] hover:underline">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/31629841297" className="text-[#90dc35] hover:underline">
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
                  className="w-full bg-[#90dc35] hover:bg-[#6fb820] text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === 'nl' ? 'Email openen...' : 'Opening email...') 
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
