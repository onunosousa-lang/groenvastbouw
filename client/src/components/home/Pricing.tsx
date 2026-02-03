'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useContactModal } from '@/App';
import { motion } from 'framer-motion';
import { Euro, Package, Home, Truck, Hammer, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  const { language } = useLanguage();
  const { openModal } = useContactModal();

  const content = {
    headline: language === 'nl' ? 'Indicatieve Prijsreferentie' : 'Indicative Pricing',
    subheadline: language === 'nl' 
      ? 'Transparante prijzen voor maximale bouwkwaliteit en duurzaamheid'
      : 'Transparent pricing for maximum build quality and sustainability',
    disclaimer: language === 'nl'
      ? 'Flexibel per project: Wij staan open om samen te werken met lokale Nederlandse partners en de leveringsomvang per project aan te passen om zo de kosten te optimaliseren, met behoud van de hoogste kwaliteits- en prestatienormen.'
      : 'Flexible per project: We are open to working with local Dutch partners and adjusting the delivery scope per project to optimize costs while maintaining the highest quality and performance standards.',
    
    structureTitle: language === 'nl' ? 'Passieve Structuur' : 'Passive Structure',
    structureSubtitle: language === 'nl' ? 'Fabrieksmatig Geproduceerd' : 'Factory Produced',
    structurePrice: '€400',
    structurePriceUnit: language === 'nl' ? 'per m²' : 'per m²',
    structureIncludes: language === 'nl' ? 'INCLUSIEF:' : 'INCLUDED:',
    structureFeatures: language === 'nl' ? [
      'Houtskeletstructuur in C24 NordicPine',
      'Isolatie in wanden en dak',
      'Luchtdichte, dampremmende en waterdichte membranen',
      'CNC-precisieproductie',
      'Installatiezones (service cavities) voor technieken'
    ] : [
      'Timber frame structure in C24 NordicPine',
      'Insulation in walls and roof',
      'Airtight, vapor-retarding and waterproof membranes',
      'CNC precision production',
      'Service cavities for technical installations'
    ],
    structureExcludes: language === 'nl'
      ? 'Exclusief: transport, montage, ramen, installaties, afwerking en funderingen.'
      : 'Excludes: transport, assembly, windows, installations, finishing and foundations.',
    
    additionalTitle: language === 'nl' ? 'Gemiddelde Richtprijzen Bijkomende Onderdelen:' : 'Average Guide Prices Additional Components:',
    additionalItems: [
      {
        icon: Truck,
        label: language === 'nl' ? 'Transport Portugal → Nederland' : 'Transport Portugal → Netherlands',
        price: '€100',
        unit: language === 'nl' ? 'per m²' : 'per m²'
      },
      {
        icon: Hammer,
        label: language === 'nl' ? 'Montage op locatie (NL)' : 'Assembly on site (NL)',
        price: '€150',
        unit: language === 'nl' ? 'per m²' : 'per m²'
      }
    ],
    
    turnkeyTitle: language === 'nl' ? 'Sleutelklaar Gebouw' : 'Turnkey Building',
    turnkeySubtitle: language === 'nl' ? 'Indicatief' : 'Indicative',
    turnkeyPrice: '€1.750',
    turnkeyPriceUnit: language === 'nl' ? 'per m²' : 'per m²',
    turnkeyExcludes: language === 'nl' ? '(exclusief funderingen)' : '(excluding foundations)',
    turnkeyIncludes: language === 'nl' ? 'INCLUSIEF:' : 'INCLUDED:',
    turnkeyFeatures: language === 'nl' ? [
      'Gemonteerde passieve structuur',
      'Ramen en deuren',
      'Elektrische en sanitaire installaties',
      'Afgewerkte natte ruimtes',
      'Uitgeruste keuken',
      'Binnenafwerking',
      'Gebruiksklaar opgeleverd'
    ] : [
      'Assembled passive structure',
      'Windows and doors',
      'Electrical and sanitary installations',
      'Finished wet rooms',
      'Equipped kitchen',
      'Interior finishing',
      'Ready for use'
    ],
    
    ctaButton: language === 'nl' ? 'Vraag Offerte Aan' : 'Request Quote',
  };

  return (
    <section id="pricing" className="py-20 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#8edb38 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">{content.headline}</h2>
          <p className="text-lg text-[#2a3439] mb-8 leading-relaxed">{content.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Passive Structure Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#dcdcdc] rounded-2xl shadow-lg overflow-hidden border-2 border-[#8edb38]"
          >
            <div className="bg-[#8edb38] text-[#2a3439] p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Package className="w-8 h-8 mr-2" />
                <h3 className="text-2xl font-bold">{content.structureTitle}</h3>
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide">{content.structureSubtitle}</p>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#2a3439] mb-2">
                  {content.structurePrice}
                  <span className="text-2xl text-[#2a3439] ml-2">{content.structurePriceUnit}</span>
                </div>
                <p className="text-sm text-[#2a3439] font-semibold">{content.structureIncludes}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {content.structureFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#2a3439] leading-relaxed">
                    <span className="text-[#2a3439] font-bold">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xs text-[#2a3439] italic border-t border-[#2a3439]/20 pt-4">
                {content.structureExcludes}
              </p>
            </div>
          </motion.div>

          {/* Turnkey Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#dcdcdc] rounded-2xl shadow-lg overflow-hidden border-2 border-[#8edb38]"
          >
            <div className="bg-[#8edb38] text-[#2a3439] p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Home className="w-8 h-8 mr-2" />
                <h3 className="text-2xl font-bold">{content.turnkeyTitle}</h3>
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide">{content.turnkeySubtitle}</p>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#2a3439] mb-2">
                  {content.turnkeyPrice}
                  <span className="text-2xl text-[#2a3439] ml-2">{content.turnkeyPriceUnit}</span>
                </div>
                <p className="text-xs text-[#2a3439] mb-2">{content.turnkeyExcludes}</p>
                <p className="text-sm text-[#2a3439] font-semibold">{content.turnkeyIncludes}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {content.turnkeyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#2a3439] leading-relaxed">
                    <span className="text-[#2a3439] font-bold">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional Costs */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-[#2a3439] mb-6 text-center">{content.additionalTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.additionalItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-[#dcdcdc] rounded-xl p-6 flex items-center gap-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-[#2a3439]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#2a3439]" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-[#2a3439] font-medium">{item.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#2a3439]">{item.price}</p>
                  <p className="text-xs text-[#2a3439]">{item.unit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#8edb38]/10 border-l-4 border-[#8edb38] p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#8edb38] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#2a3439] leading-relaxed">
                {content.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={openModal}
            className="px-8 py-4 bg-[#8edb38] hover:bg-[#7aa050] text-[#2a3439] font-bold text-lg rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            {content.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
