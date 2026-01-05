import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq_timeline_q'),
      answer: t('faq_timeline_a'),
    },
    {
      question: t('faq_price_q'),
      answer: t('faq_price_a'),
    },
    {
      question: t('faq_energy_q'),
      answer: t('faq_energy_a'),
    },
    {
      question: t('faq_design_q'),
      answer: t('faq_design_a'),
    },
    {
      question: t('faq_certification_q'),
      answer: t('faq_certification_a'),
    },
    {
      question: t('faq_warranty_q'),
      answer: t('faq_warranty_a'),
    },
    {
      question: t('faq_location_q'),
      answer: t('faq_location_a'),
    },
    {
      question: t('faq_foundation_q'),
      answer: t('faq_foundation_a'),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('faq_title')}</h2>
          <p className="text-xl text-gray-600">
            Antwoorden op veelgestelde vragen over onze technische oplossingen
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#90dc35] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
