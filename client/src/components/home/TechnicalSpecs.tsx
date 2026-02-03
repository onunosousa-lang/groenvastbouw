'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Thermometer, Volume2, Leaf, Check, Zap } from 'lucide-react';

export default function TechnicalSpecs() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Hoogwaardige Bouwelementen' : 'High-Quality Building Elements',
    subheadline: language === 'nl' 
      ? 'Technische prestaties die verder gaan dan standaard bouwvoorschriften'
      : 'Technical performance that goes beyond standard building regulations',
    
    sections: [
      {
        icon: Shield,
        title: language === 'nl' ? 'Structurele Prestaties' : 'Structural Performance',
        color: '#8edb38',
        specs: language === 'nl' ? [
          'C24 constructiehout (EN338)',
          'CNC-precisie: ±1mm tolerantie',
          'Brandweerstand: REI 60-90',
          'Seismische weerstand: tot zone 3',
          'Windbelasting: tot 140 km/u'
        ] : [
          'C24 construction timber (EN338)',
          'CNC precision: ±1mm tolerance',
          'Fire resistance: REI 60-90',
          'Seismic resistance: up to zone 3',
          'Wind load: up to 140 km/h'
        ]
      },
      {
        icon: Thermometer,
        title: language === 'nl' ? 'Thermische Prestaties (Passief)' : 'Thermal Performance (Passive)',
        color: '#8edb38',
        specs: language === 'nl' ? [
          'U-waarde wanden: 0.10-0.15W/m²K',
          'U-waarde dak: 0.08-0.12W/m²K → zeer gering warmteverlies',
          'Luchtdichtheid < 0.6 ACH → eenvoudig BENG-compliant',
          'Geoptimaliseerde thermische massa',
          'Stabiele binnentemperatuur en hoog comfort'
        ] : [
          'U-value walls: 0.10-0.15W/m²K',
          'U-value roof: 0.08-0.12W/m²K → very low heat loss',
          'Airtightness < 0.6 ACH → easily BENG-compliant',
          'Optimized thermal mass',
          'Stable indoor temperature and high comfort'
        ]
      },
      {
        icon: Volume2,
        title: language === 'nl' ? 'Akoestische Prestaties' : 'Acoustic Performance',
        color: '#8edb38',
        specs: language === 'nl' ? [
          'Rw 52-58 dB → zeer goede geluidsisolatie',
          'Geschikt voor stedelijke omgevingen',
          'Minimale geluidsoverdracht tussen ruimtes',
          'Comfortabel en rustig binnenklimaat'
        ] : [
          'Rw 52-58 dB → very good sound insulation',
          'Suitable for urban environments',
          'Minimal sound transmission between spaces',
          'Comfortable and quiet indoor climate'
        ]
      },
      {
        icon: Leaf,
        title: language === 'nl' ? 'Duurzaamheid' : 'Sustainability',
        color: '#8edb38',
        specs: language === 'nl' ? [
          'Laag CO₂-voetafdruk',
          '100% recycleerbaar',
          'Minimaal materiaalverlies (< 3%)',
          'Duurzame houtwinning: 3 bomen geplan per gekapte boom',
          'FSC-gecertificeerd hout'
        ] : [
          'Low CO₂ footprint',
          '100% recyclable',
          'Minimal material waste (< 3%)',
          'Sustainable forestry: 3 trees planted per tree cut',
          'FSC-certified timber'
        ]
      }
    ]
  };

  return (
    <section id="technical-specs" className="py-20 bg-[#dcdcdc] scroll-mt-20 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#8edb38 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">{content.headline}</h2>
          <p className="text-lg text-[#2a3439] leading-relaxed">{content.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-[#8edb38] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#8edb38]/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-7 h-7 text-[#8edb38]" />
                </div>
                <h3 className="text-xl font-bold text-[#2a3439]">{section.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {section.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2a3439] leading-relaxed">
                    <Check className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlight */}
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#8edb38]/10 border-l-4 border-[#8edb38] p-6 rounded-r-lg"
          >
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#8edb38] flex-shrink-0 mt-0.5" />
              <p className="text-[#2a3439] leading-relaxed">
                {language === 'nl' 
                  ? 'Alle specificaties zijn gebaseerd op fabrieksgecontroleerde productie en onafhankelijke certificering. Onze technische prestaties overtreffen de Nederlandse bouwvoorschriften en voldoen aan de hoogste internationale normen.'
                  : 'All specifications are based on factory-controlled production and independent certification. Our technical performance exceeds Dutch building regulations and meets the highest international standards.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
