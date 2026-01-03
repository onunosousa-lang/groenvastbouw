import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Home, Pencil, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OfferSection() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Ons Aanbod' : 'Our Offer',
    subheadline: language === 'nl' 
      ? 'Jouw passiefhuis, jouw manier. Kies uit bewezen prefab modellen of volledig op maat. Structuur geleverd in 3 maanden — turn-key opties beschikbaar.'
      : 'Your passive house, your way. Choose proven prefab models or go fully custom. Structure delivered in 3 months — turn-key options available.',
    
    prefab: {
      title: language === 'nl' ? 'Prefab Modellen' : 'Prefab Models',
      subtitle: language === 'nl' ? 'Bewezen ontwerpen. Voorspelbare resultaten.' : 'Proven designs. Predictable results.',
      description: language === 'nl'
        ? 'Kies uit geteste passiefhuisontwerpen van Senmar — ontworpen voor efficiëntie, klaar voor levering.'
        : 'Choose from Senmar\'s tested passive house designs — engineered for efficiency, ready for delivery.',
      points: language === 'nl' ? [
        'Meerdere modellen beschikbaar',
        '3 prestatie-niveaus: Optimal / Passive / Super Passive',
        'Volledige structuur geleverd in 3 maanden',
        'Turn-key afwerking beschikbaar'
      ] : [
        'Multiple models available',
        '3 performance levels: Optimal / Passive / Super Passive',
        'Complete structure delivered in 3 months',
        'Turn-key finishing available'
      ],
      price: language === 'nl' ? 'Vanaf €1.550/m²*' : 'Starting from €1,550/m²*',
      cta: language === 'nl' ? 'Bekijk Senmar Modellen' : 'View Senmar Models',
      priceNote: language === 'nl' 
        ? '*Startprijs voor basisstructuur, exclusief transport en BTW.\nTurn-key oplevering inclusief fundering, afwerking en installaties — langere levertijd.'
        : '*Starting price for basic structure, excluding transport and VAT.\nTurn-key delivery includes foundation, finishing, and installations — longer delivery time applies.'
    },

    custom: {
      title: language === 'nl' ? 'Volledig Op Maat' : 'Fully Custom',
      subtitle: language === 'nl' ? 'Jouw visie. Onze precisie.' : 'Your vision. Our precision.',
      description: language === 'nl'
        ? 'Een woning volledig naar jouw wensen ontworpen — dezelfde fabrieksgecontroleerde kwaliteit, dezelfde snelle levering.'
        : 'A home designed entirely to your specifications — same factory-controlled quality, same fast delivery.',
      points: language === 'nl' ? [
        'Ontwerp op basis van jouw eisen',
        'Passivhaus certificering mogelijk',
        'Volledige structuur geleverd in 3 maanden',
        'Turn-key afwerking beschikbaar'
      ] : [
        'Design based on your requirements',
        'Passivhaus certification possible',
        'Complete structure delivered in 3 months',
        'Turn-key finishing available'
      ],
      price: language === 'nl' ? 'Vanaf €1.550/m²*' : 'Starting from €1,550/m²*',
      cta: language === 'nl' ? 'Start Op Maat Project' : 'Start Your Custom Project',
      priceNote: language === 'nl' 
        ? '*Startprijs voor basisstructuur, exclusief transport en BTW.\nTurn-key oplevering inclusief fundering, afwerking en installaties — langere levertijd.'
        : '*Starting price for basic structure, excluding transport and VAT.\nTurn-key delivery includes foundation, finishing, and installations — longer delivery time applies.'
    },

    b2b: {
      title: language === 'nl' ? 'B2B & Projectontwikkelaars' : 'B2B & Project Developers',
      subtitle: language === 'nl' ? 'Schaal met vertrouwen.' : 'Scale with confidence.',
      description: language === 'nl'
        ? 'Heb je volume nodig? Onze productiefaciliteit levert tot 19.000m² modulaire passiefhuizen per jaar — ideaal voor ontwikkelaars, woningcorporaties en grootschalige projecten.'
        : 'Need volume? Our production facility delivers up to 19,000m² of modular passive houses per year — ideal for developers, housing corporations, and large-scale projects.',
      points: language === 'nl' ? [
        'Serieproductiecapaciteit',
        'Consistente kwaliteit op schaal',
        'Dedicated projectcoördinatie',
        'Flexibele afleveringsplanning'
      ] : [
        'Series production capacity',
        'Consistent quality at scale',
        'Dedicated project coordination',
        'Flexible delivery scheduling'
      ],
      cta: language === 'nl' ? 'Bespreek Jouw Project' : 'Discuss Your Project'
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id={language === 'nl' ? 'aanbod' : 'offer'} className="py-20 relative scroll-mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/new/offer-bg.jpg" 
          alt="Construction Background" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero-groenvastbouw.jpg" }}
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A3439] mb-6 leading-tight">{content.headline}</h2>
          <p className="text-xl text-[#2A3439]/80 font-medium leading-relaxed">{content.subheadline}</p>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Prefab Models Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border-2 border-[#7FB956]/20 flex flex-col hover:shadow-2xl hover:border-[#7FB956]/40 transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-[#7FB956]/10 rounded-xl flex items-center justify-center mb-6 ring-2 ring-[#7FB956]/20">
                <Home className="text-[#7FB956] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A3439] mb-2">{content.prefab.title}</h3>
              <p className="text-sm font-bold text-[#7FB956] mb-4">{content.prefab.subtitle}</p>
              <p className="text-[#2A3439]/80 mb-6 text-sm leading-relaxed">{content.prefab.description}</p>

              <ul className="space-y-3 mb-8">
                {content.prefab.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2A3439]/80 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7FB956] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-2xl font-bold text-[#7FB956] mb-6">{content.prefab.price}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
              <a
                href="https://senmar.pt/en/projects#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[#7FB956] hover:bg-[#6da04a] text-white h-12 text-base font-bold group shadow-lg hover:shadow-xl transition-all">
                  {content.prefab.cta}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="mt-4 text-xs text-[#8C9194] space-y-1 text-center whitespace-pre-line leading-relaxed">
                <p>{content.prefab.priceNote}</p>
              </div>
            </div>
          </motion.div>

          {/* Custom Project Card - HIGHLIGHTED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-2 border-[#8EB564]/30 flex flex-col hover:shadow-2xl hover:border-[#8EB564]/50 transition-all duration-300 relative"
          >
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-[#EA4924] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
              {language === 'nl' ? 'POPULAIR' : 'POPULAR'}
            </div>

            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-[#8EB564]/15 rounded-xl flex items-center justify-center mb-6 ring-2 ring-[#8EB564]/30">
                <Pencil className="text-[#8EB564] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A3439] mb-2">{content.custom.title}</h3>
              <p className="text-sm font-bold text-[#8EB564] mb-4">{content.custom.subtitle}</p>
              <p className="text-[#2A3439]/80 mb-6 text-sm leading-relaxed">{content.custom.description}</p>

              <ul className="space-y-3 mb-8">
                {content.custom.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2A3439]/80 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8EB564] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-2xl font-bold text-[#8EB564] mb-6">{content.custom.price}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#8EB564]/5 to-white border-t border-[#8EB564]/20">
              <Button
                onClick={scrollToContact}
                className="w-full bg-[#8EB564] hover:bg-[#7da355] text-white h-12 text-base font-bold group shadow-lg hover:shadow-xl transition-all"
              >
                {content.custom.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-4 text-xs text-[#8C9194] space-y-1 text-center whitespace-pre-line leading-relaxed">
                <p>{content.custom.priceNote}</p>
              </div>
            </div>
          </motion.div>

          {/* B2B Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border-2 border-[#2A3439]/20 flex flex-col hover:shadow-2xl hover:border-[#2A3439]/40 transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-[#2A3439]/10 rounded-xl flex items-center justify-center mb-6 ring-2 ring-[#2A3439]/20">
                <Building2 className="text-[#2A3439] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A3439] mb-2">{content.b2b.title}</h3>
              <p className="text-sm font-bold text-[#2A3439]/70 mb-4">{content.b2b.subtitle}</p>
              <p className="text-[#2A3439]/80 mb-6 text-sm leading-relaxed">{content.b2b.description}</p>

              <ul className="space-y-3 mb-8">
                {content.b2b.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2A3439]/80 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2A3439] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
              <Button
                onClick={scrollToContact}
                className="w-full bg-[#2A3439] hover:bg-[#1a2024] text-white h-12 text-base font-bold group shadow-lg hover:shadow-xl transition-all"
              >
                {content.b2b.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-2xl border-2 border-[#7FB956]/20 shadow-lg">
          <p className="text-[#2A3439] text-base leading-relaxed">
            {language === 'nl'
              ? <>In partnerschap met <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] hover:text-[#6da04a] font-bold underline decoration-2 underline-offset-4">SENMAR</a>, een innovatief bedrijf uit Portugal gericht op maximale kwaliteit, efficiëntie en duurzaam bouwen.</>
              : <>In partnership with <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="text-[#7FB956] hover:text-[#6da04a] font-bold underline decoration-2 underline-offset-4">SENMAR</a>, a cutting-edge company based in Portugal, focused on maximum quality, efficiency, and truly sustainable building.</>}
          </p>
        </div>
      </div>
    </section>
  );
}
