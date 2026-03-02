'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';

export default function WhatWeOffer() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const [activeTab, setActiveTab] = useState<'structure' | 'turnkey'>('structure');

  const content = {
    backToHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    heroTitle: language === 'nl' ? 'Ons Aanbod' : 'Our Offer',
    heroSubtitle: language === 'nl' 
      ? 'Prefab passiefhuizen, modulaire systemen en turn-key oplossingen'
      : 'Prefab passive houses, modular systems, and turn-key solutions',
    
    structureDelivery: language === 'nl' ? 'Structuur Levering' : 'Structure Delivery',
    turnkeyDelivery: language === 'nl' ? 'Turn-key Levering' : 'Turn-key Delivery',

    structureTitle: language === 'nl' ? 'Structuur Levering (3 maanden)' : 'Structure Delivery (3 months)',
    structureDesc: language === 'nl'
      ? 'De volledige prefab structuur wordt in 3 maanden geleverd. U verzorgt de fundering en afwerking.'
      : 'The complete prefab structure is delivered in 3 months. You handle the foundation and finishing.',
    
    structureIncludes: language === 'nl' ? 'Inclusief:' : 'Includes:',
    structureIncludesItems: language === 'nl' ? [
      'Volledige houtskeletstructuur (CNC-gefabriceerd)',
      'Isolatie (naar gekozen prestatie-niveau)',
      'Luchtdichtheidslaag',
      'Ramen en deuren (triple glazing)',
      'Dak- en gevelafwerking (waterdicht)',
      'Installatieschachten (voorbereiding voor elektra/sanitair)',
      'Transport naar Nederland',
      'Montage op uw fundering (8-12 dagen)'
    ] : [
      'Complete timber frame structure (CNC-fabricated)',
      'Insulation (to your chosen performance level)',
      'Airtightness layer',
      'Windows and doors (triple glazing)',
      'Roof and facade finishing (weatherproof)',
      'Installation shafts (preparation for electrical/plumbing)',
      'Transport to Netherlands',
      'Assembly on your foundation (8-12 days)'
    ],

    structureNotIncluded: language === 'nl' ? 'Niet inclusief:' : 'Not included:',
    structureNotIncludedItems: language === 'nl' ? [
      'Fundering en grondwerk',
      'Afwerking (gips, schilderwerk, vloeren)',
      'Elektra- en sanitaire installaties',
      'Verwarming en ventilatie',
      'Keukens en badkamers'
    ] : [
      'Foundation and groundwork',
      'Finishing (drywall, painting, flooring)',
      'Electrical and plumbing installations',
      'Heating and ventilation',
      'Kitchens and bathrooms'
    ],

    turnkeyTitle: language === 'nl' ? 'Turn-key Levering (4-6 maanden)' : 'Turn-key Delivery (4-6 months)',
    turnkeyDesc: language === 'nl'
      ? 'Wij verzorgen alles: van ontwerp tot sleuteloverdracht. U trekt gewoon in.'
      : 'We handle everything: from design to key handover. You just move in.',
    
    turnkeyIncludes: language === 'nl' ? 'Alles uit Structuur Levering, plus:' : 'Everything from Structure Delivery, plus:',
    turnkeyIncludesItems: language === 'nl' ? [
      'Vergunningen en bouwtoezicht',
      'Fundering en grondwerk',
      'Afwerking (gips, schilderwerk, vloeren)',
      'Elektra- en sanitaire installaties',
      'Warmtepompsysteem & ventilatie',
      'Keukens en badkamers (standaard of custom)',
      'Buitenafwerking (terras, tuin)',
      'Oplevering "sleutelklaar"'
    ] : [
      'Permits and building inspection',
      'Foundation and groundwork',
      'Finishing (drywall, painting, flooring)',
      'Electrical and plumbing installations',
      'Heat pump system & ventilation',
      'Kitchens and bathrooms (standard or custom)',
      'Exterior finishing (terrace, garden)',
      'Handover "key-ready"'
    ],

    modularTitle: language === 'nl' ? 'Modulaire & Meervoudige Orders' : 'Modular & Multiple Orders',
    modularDesc: language === 'nl'
      ? 'Voor ontwikkelaars en CPO-groepen: schaalvoordelen en flexibele planning'
      : 'For developers and CPO groups: economies of scale and flexible planning',

    modularBenefits: language === 'nl' ? [
      {
        title: 'Schaalvoordelen',
        desc: 'Bij 5+ eenheden krijgt u volume-korting van 10-15% op de structuurkosten.'
      },
      {
        title: 'Parallelle Productie',
        desc: 'Meerdere huizen worden tegelijkertijd in Portugal geproduceerd. Geen wachttijd tussen leveringen.'
      },
      {
        title: 'Flexibele Montage',
        desc: 'Wij coördineren de montage van meerdere eenheden op uw locatie met één montageteam.'
      },
      {
        title: 'Aangepaste Ontwerpen',
        desc: 'Elke eenheid kan anders zijn (grootte, prestatie-niveau, afwerking) zonder extra kosten.'
      }
    ] : [
      {
        title: 'Economies of Scale',
        desc: 'With 5+ units, you receive volume discounts of 10-15% on structure costs.'
      },
      {
        title: 'Parallel Production',
        desc: 'Multiple houses are produced simultaneously in Portugal. No waiting time between deliveries.'
      },
      {
        title: 'Flexible Assembly',
        desc: 'We coordinate assembly of multiple units at your site with a single assembly team.'
      },
      {
        title: 'Custom Designs',
        desc: 'Each unit can be different (size, performance level, finishing) at no extra cost.'
      }
    ],

    ctaTitle: language === 'nl' ? 'Klaar om te Beginnen?' : 'Ready to Start?',
    ctaText: language === 'nl'
      ? 'Neem contact op voor een gratis consult en offerte.'
      : 'Contact us for a free consultation and quote.',
    contactButton: language === 'nl' ? 'Request an intro call' : 'Request an intro call',
  };



  return (
    <div className="min-h-screen bg-[#F5F5EF] font-sans">
      <SEO title={content.heroTitle} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 bg-background text-[#2a3439]">
        <div className="max-w-6xl mx-auto mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-[#8edb38] hover:text-[#2a3439] font-semibold transition-colors group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {content.backToHome}
          </a>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-[#2a3439] font-light">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TABS */}
      <section className="py-12 px-4 bg-[#F5F5EF] border-b border-[#F5F5EF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'structure'
                  ? 'bg-[#8edb38] text-[#2a3439] shadow-lg'
                  : 'bg-[#F5F5EF] text-[#2a3439] border border-[#F5F5EF] hover:border-[#8edb38]'
              }`}
            >
              {content.structureDelivery}
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'turnkey'
                  ? 'bg-[#8edb38] text-[#2a3439] shadow-lg'
                  : 'bg-[#F5F5EF] text-[#2a3439] border border-[#F5F5EF] hover:border-[#8edb38]'
              }`}
            >
              {content.turnkeyDelivery}
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'structure' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-[#2a3439] mb-8">{content.structureTitle}</h2>
              <p className="text-xl text-[#2a3439] mb-12">{content.structureDesc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border-2 border-[#8edb38] bg-[#F5F5EF]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#2a3439] mb-6 flex items-center gap-2">
                      <CheckCircle2 className="text-[#8edb38]" />
                      {content.structureIncludes}
                    </h3>
                    <ul className="space-y-3">
                      {content.structureIncludesItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                          <span className="text-[#8edb38] font-bold mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#F5F5EF] bg-[#F5F5EF]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#2a3439] mb-6 flex items-center gap-2">
                      <AlertCircle className="text-[#2a3439]" />
                      {content.structureNotIncluded}
                    </h3>
                    <ul className="space-y-3">
                      {content.structureNotIncludedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                          <span className="text-[#2a3439] font-bold mt-1">−</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-[#2a3439] mb-8">{content.turnkeyTitle}</h2>
              <p className="text-xl text-[#2a3439] mb-12">{content.turnkeyDesc}</p>

              <Card className="border-2 border-[#8edb38] bg-[#F5F5EF] mb-16">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#2a3439] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-[#8edb38]" />
                    {content.turnkeyIncludes}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {content.turnkeyIncludesItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#2a3439]">
                        <span className="text-[#8edb38] font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* MODULAR & MULTIPLE ORDERS */}
          <div className="mt-24 pt-16 border-t-2 border-[#F5F5EF]">
            <h2 className="text-4xl font-bold text-[#2a3439] mb-4">{content.modularTitle}</h2>
            <p className="text-xl text-[#2a3439] mb-12">{content.modularDesc}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {content.modularBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-2 border-[#8edb38] h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-[#8edb38] mb-4">{benefit.title}</h3>
                      <p className="text-[#2a3439] text-lg">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 pt-16 border-t-2 border-[#F5F5EF] text-center">
            <h2 className="text-4xl font-bold text-[#2a3439] mb-4">{content.ctaTitle}</h2>
            <p className="text-xl text-[#2a3439] mb-8">{content.ctaText}</p>
            <Button
              onClick={openModal}
              className="bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] px-8 py-6 text-lg font-semibold"
            >
              {content.contactButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
