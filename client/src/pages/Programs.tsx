import { useState, useEffect } from 'react';
import { useContactModal } from '@/App';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Check, Building2, Box, Layers, Truck, Wrench, HardHat, PenTool, FileCheck, Factory, KeyRound } from 'lucide-react';

const formSchema = z.object({
  clientType: z.string().min(1, { message: "Please select a client type." }),
  system: z.string().min(1, { message: "Please select a system." }),
  performance: z.string().min(1, { message: "Please select a performance level." }),
  size: z.string().min(1, { message: "Please enter the size." }),
  location: z.string().min(1, { message: "Please enter the location." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function scrollToEstimate() {
  const el = document.getElementById('estimate');
  if (el) {
    const headerOffset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

const productCards = [
  {
    id: 'ROW+',
    title: 'ROW+',
    subtitle: 'Repeatable row-housing system for large-scale programs.',
    icon: Building2,
    standardBullets: [
      'Predictable interfaces for fast site execution',
      'Optimized delivery speed and cost control at scale',
      'Ideal for housing associations and municipality programs',
    ],
    passiveBullets: [
      'Passive-level comfort for large housing programs',
      'Robust envelope strategy with airtightness focus',
      'Designed for long-term performance and low operating cost',
    ],
  },
  {
    id: 'BOX+',
    title: 'BOX+',
    subtitle: 'Volumetric modular homes assembled with minimal disruption.',
    icon: Box,
    standardBullets: [
      'Fast delivery with reduced neighborhood impact',
      'Factory-built consistency and predictable quality',
      'Great for phased rollouts and time-sensitive programs',
    ],
    passiveBullets: [
      'Factory-controlled performance continuity',
      'Very low energy demand with high comfort',
      'Suitable for premium-performance modular programs',
    ],
  },
  {
    id: 'STACK+',
    title: 'STACK+',
    subtitle: 'Hybrid mid-rise concept for apartments and densification.',
    icon: Layers,
    standardBullets: [
      'Scalable approach for apartments and mixed-use',
      'Repeatable fa\u00E7ade logic with project-specific engineering',
      'Suitable for urban densification and larger plots',
    ],
    passiveBullets: [
      'Passive-performance strategy applied to apartment concepts',
      'Extra focus on junction control and comfort',
      'Project-by-project optimization within a repeatable system',
    ],
  },
];

const deliverySteps = [
  { label: 'Architect & Permit', icon: PenTool },
  { label: 'Compliance & Engineering', icon: FileCheck },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Logistics', icon: Truck },
  { label: 'Site Assembly', icon: HardHat },
  { label: 'MEP + Testing', icon: Wrench },
  { label: 'Handover', icon: KeyRound },
];

const turnkeyItems = [
  'Site setup, groundwork & foundations (via Dutch partner)',
  'Structure + high-performance envelope',
  'Windows and external doors',
  'Full MEP installation: heat pump, domestic hot water, electrical, controls',
  'Balanced ventilation / central ventilation system (project-specific)',
  'Rooftop solar PV system (included; final design project-specific)',
  'Testing, commissioning and handover documentation',
];

const faqItems = [
  {
    q: 'Do you also deliver "structure only" for B2B?',
    a: 'No. For businesses and developers we offer Full Turnkey only.',
  },
  {
    q: 'Why no published prices?',
    a: 'Turnkey costs depend on unit count, location, access, plot constraints and grid capacity. We provide a fast budget estimate after a short intake.',
  },
  {
    q: 'Can projects start as Standard and be upgraded to Passive?',
    a: 'Yes. We can assess the upgrade path early and align it with the program goals and budget.',
  },
];

export default function Programs() {
  const { openModal } = useContactModal();
  const [performanceTab, setPerformanceTab] = useState('standard');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientType: '',
      system: '',
      performance: '',
      size: '',
      location: '',
      timeline: '',
      message: '',
    },
  });

  // Handle hash scroll on mount
  useEffect(() => {
    if (window.location.hash === '#estimate') {
      setTimeout(scrollToEstimate, 300);
    }
  }, []);

  const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/wewmi0xjhhmk2cz8iyciyekopxej7jpi';

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `[B2B Budget Estimate] ${values.clientType}`,
          email: '',
          phone: '',
          message: [
            `[B2B Budget Estimate]`,
            `Client type: ${values.clientType}`,
            `System: ${values.system}`,
            `Performance: ${values.performance}`,
            `Size: ${values.size}`,
            `Location: ${values.location}`,
            `Timeline: ${values.timeline}`,
            `Message: ${values.message || '(none)'}`,
            `lead_source: programs_page`,
          ].join('\n'),
          lead_source: 'programs_page',
          subject: '[B2B Budget Estimate]',
        }),
        mode: 'no-cors',
      });

      toast.success('Thanks \u2014 we\u2019ll get back to you with a budget estimate and next steps.');
      form.reset();
    } catch (error) {
      console.error('B2B form error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCardEstimate = (systemName: string) => {
    form.setValue('system', systemName);
    form.setValue('performance', performanceTab === 'passive' ? 'Passive' : 'Standard');
    scrollToEstimate();
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/fabriek-productie-houten-structuur-montage.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#F5F5EF] rounded-lg shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8edb38] mb-6 leading-tight">
              Turnkey building programs for businesses & developers
            </h1>
            <p className="text-lg md:text-xl text-[#2a3439] mb-8 font-semibold leading-relaxed">
              Full turnkey delivery — from foundation to rooftop solar. Choose Standard or Passive performance.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'High quality, predictable delivery',
                'Controlled costs through repeatable systems',
                'Fast execution with coordinated partners',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-1" />
                  <span className="text-[#2a3439] text-base md:text-lg font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={scrollToEstimate}
                className="bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-bold"
                size="lg"
              >
                Request budget estimate
              </Button>
              <Button
                variant="outline"
                onClick={openModal}
                className="border-[#2a3439] text-[#2a3439] hover:bg-[#2a3439]/10 font-bold"
                size="lg"
              >
                Book a call
              </Button>
            </div>

            <p className="text-sm text-[#2a3439]/70">
              No published prices. We provide a fast budget estimate based on unit count, location, access and grid capacity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PERFORMANCE OPTIONS (TABS) */}
      <section className="py-20 bg-[#F5F5EF]/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-8 text-center">
              Performance options
            </h2>
            <Tabs value={performanceTab} onValueChange={setPerformanceTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 h-12 bg-[#2a3439]/10 rounded-lg p-1">
                <TabsTrigger
                  value="standard"
                  className="data-[state=active]:bg-[#8edb38] data-[state=active]:text-[#2a3439] rounded-md text-base font-bold transition-all"
                >
                  Standard
                </TabsTrigger>
                <TabsTrigger
                  value="passive"
                  className="data-[state=active]:bg-[#8edb38] data-[state=active]:text-[#2a3439] rounded-md text-base font-bold transition-all"
                >
                  Passive
                </TabsTrigger>
              </TabsList>
              <TabsContent value="standard" className="mt-8">
                <Card className="border-none shadow-lg bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#2a3439]">Standard</CardTitle>
                    <CardDescription className="text-base text-[#2a3439]/80">
                      High-performance solution optimized for cost and speed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        'Efficient delivery and cost control',
                        'Strong comfort and energy performance baseline',
                        'Ready for PV / EV / smart controls integration',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2a3439]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="passive" className="mt-8">
                <Card className="border-none shadow-lg bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#2a3439]">Passive</CardTitle>
                    <CardDescription className="text-base text-[#2a3439]/80">
                      Maximum performance focused on comfort and the lowest possible energy demand.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        'Highest comfort with very low energy demand',
                        'Strong focus on airtightness and junction control',
                        'Future-proof performance for long-term value',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2a3439]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUCT CARDS */}
      <section className="py-20 bg-[#F5F5EF]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productCards.map((card) => {
              const Icon = card.icon;
              const bullets = performanceTab === 'passive' ? card.passiveBullets : card.standardBullets;
              return (
                <Card key={card.id} className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#8edb38]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8edb38]" />
                      </div>
                      <CardTitle className="text-2xl text-[#2a3439]">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-[#2a3439]/80">
                      {card.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-[#8edb38] uppercase tracking-wide">
                        {performanceTab === 'passive' ? 'Passive' : 'Standard'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#8edb38] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2a3439] text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleCardEstimate(card.id)}
                      className="w-full bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-semibold"
                    >
                      Request estimate
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/fabriek-productie-prefab-wand-constructie.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#F5F5EF] rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-6">
              What Full Turnkey includes
            </h2>
            <p className="text-lg text-[#2a3439] mb-10 leading-relaxed">
              Our B2B offer is Full Turnkey only. We deliver the complete project scope — from foundation to rooftop solar — coordinated through specialized partners under one integrated delivery plan.
            </p>
            <div className="space-y-4 mb-8">
              {turnkeyItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2a3439] text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#2a3439]/70">
              Final scope depends on project requirements, plot constraints, and grid capacity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DELIVERY MAP */}
      <section className="py-20 bg-[#F5F5EF]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-12 text-center">
              How we deliver (the system behind the product)
            </h2>

            {/* Horizontal step map */}
            <div className="relative mb-12">
              {/* Desktop: horizontal */}
              <div className="hidden md:flex items-start justify-between relative">
                {/* Connecting line */}
                <div className="absolute top-6 left-8 right-8 h-0.5 bg-[#8edb38]/30" />
                {deliverySteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="flex flex-col items-center relative z-10 flex-1">
                      <div className="w-12 h-12 rounded-full bg-[#8edb38] flex items-center justify-center shadow-md mb-3">
                        <Icon className="w-5 h-5 text-[#2a3439]" />
                      </div>
                      <span className="text-xs font-semibold text-[#2a3439] text-center leading-tight max-w-[100px]">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Mobile: vertical */}
              <div className="md:hidden space-y-4">
                {deliverySteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#8edb38] flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2a3439]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#8edb38]">{i + 1}.</span>
                        <span className="text-sm font-semibold text-[#2a3439]">{step.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {[
                'Single point of responsibility: Groenvastbouw as system integrator',
                'Repeatable interfaces: foundation, MEP zones, airtightness continuity',
                'Clear scope, timeline and handover documentation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2a3439] text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUDGET ESTIMATE FORM */}
      <section id="estimate" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/fabriek-productie-wand-isolatie-plaatsing.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto bg-[#F5F5EF] rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">
              Request a budget estimate
            </h2>
            <p className="text-lg text-[#2a3439] mb-10">
              Share the basics — we'll reply with a budget estimate and next steps.
            </p>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Hidden field */}
                    <input type="hidden" name="lead_source" value="programs_page" />

                    {/* Client type */}
                    <FormField
                      control={form.control}
                      name="clientType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Client type *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-white text-[#2a3439]">
                                <SelectValue placeholder="Select client type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Municipality">Municipality</SelectItem>
                              <SelectItem value="Housing association">Housing association</SelectItem>
                              <SelectItem value="Developer">Developer</SelectItem>
                              <SelectItem value="Contractor / Partner">Contractor / Partner</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* System */}
                    <FormField
                      control={form.control}
                      name="system"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">System *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-white text-[#2a3439]">
                                <SelectValue placeholder="Select system" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ROW+">ROW+</SelectItem>
                              <SelectItem value="BOX+">BOX+</SelectItem>
                              <SelectItem value="STACK+">STACK+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Performance */}
                    <FormField
                      control={form.control}
                      name="performance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Performance *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-white text-[#2a3439]">
                                <SelectValue placeholder="Select performance" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Standard">Standard</SelectItem>
                              <SelectItem value="Passive">Passive</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Size */}
                    <FormField
                      control={form.control}
                      name="size"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Size *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Number of units or total m\u00B2"
                              {...field}
                              className="bg-white text-[#2a3439]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Location */}
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Location *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Municipality / city + province"
                              {...field}
                              className="bg-white text-[#2a3439]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Timeline */}
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Timeline *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-white text-[#2a3439]">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<3 months">&lt;3 months</SelectItem>
                              <SelectItem value="3-6 months">3–6 months</SelectItem>
                              <SelectItem value="6-12 months">6–12 months</SelectItem>
                              <SelectItem value="12+ months">12+ months</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#2a3439] font-semibold">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Plot status, access, parking, grid info if known"
                              className="min-h-[100px] bg-white text-[#2a3439]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-semibold"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send request'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-20 bg-[#F5F5EF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-10 text-center">
              FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#2a3439]/10">
                  <AccordionTrigger className="text-[#2a3439] text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2a3439]/80 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
