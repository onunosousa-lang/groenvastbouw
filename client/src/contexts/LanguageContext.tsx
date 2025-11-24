import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Header
    'header.title': 'Groenvastbouw Pitch',
    'header.subtitle': 'Conferentie Notities',
    
    // Navigation
    'nav.problem': 'Probleem',
    'nav.solution': 'Oplossing',
    'nav.proof': 'Bewijs',
    'nav.objections': 'Bezwaren',
    
    // Elevator Pitch
    'elevator.title': '30-Seconden Pitch',
    'elevator.text': 'Wij bouwen duurzame, energiezuinige woningen 70% sneller dan traditioneel, met 90% lagere energiekosten. Door industriële prefabricage in Portugal (Senmar) leveren we Passivhaus-kwaliteit tegen marktconforme prijzen. Onze klanten besparen €4.000+ per jaar op energie en verhogen hun vastgoedwaarde met 15-20%.',
    
    // Problem Section
    'problem.title': 'Het Nederlandse Probleem',
    'problem.labor': 'Tekort aan geschoolde arbeid',
    'problem.costs': 'Onvoorspelbare materiaalkosten',
    'problem.regulations': 'Stikstof-regulering vertraagt bouw',
    'problem.timeline': 'Lange bouwtijden (12-18 maanden)',
    
    // Solution Section
    'solution.title': 'Onze Oplossing',
    'solution.subtitle': 'Groenvastbouw × Senmar Partnership',
    'solution.factory': 'Fabriek 4.000 m² in Coija, Portugal',
    'solution.capacity': 'Capaciteit 200 huizen/jaar',
    'solution.precision': 'CNC-precisie 1mm tolerantie',
    'solution.certifications': 'FSC & CE gecertificeerd',
    
    // Speed Section
    'speed.title': 'Snelheid & Efficiëntie',
    'speed.traditional': 'Traditioneel',
    'speed.groenvastbouw': 'Groenvastbouw',
    'speed.total': 'Totale bouwtijd',
    'speed.assembly': 'Montage ter plaatse',
    'speed.months': 'maanden',
    'speed.days': 'dagen',
    
    // Pricing Section
    'pricing.title': 'Prijs per m²',
    'pricing.shell': 'Casco',
    'pricing.shell.desc': 'Structuur + ramen + dak',
    'pricing.turnkey': 'Turnkey (Compleet)',
    'pricing.turnkey.desc': 'Volledig afgewerkt, instapklaar',
    'pricing.tco': 'TCO Voordeel:',
    'pricing.tco.desc': 'Energiebesparing van €2.000-3.000/jaar = €60.000-90.000 over 30 jaar. Het huis betaalt zichzelf terug.',
    
    // Energy Levels
    'energy.title': 'Energie Prestatie Niveaus',
    'energy.optimal': 'Optimaal',
    'energy.optimal.desc': 'Goede balans voor gematigd klimaat',
    'energy.passive': 'Passief ⭐ Onze Standaard',
    'energy.passive.desc': 'Aanzienlijke besparing, bewezen ROI',
    'energy.super': 'Super Passief',
    'energy.super.desc': 'Passivhaus gecertificeerd - 75% minder energie',
    
    // Energy Comparison
    'comparison.title': 'Wat Betekent 86% Besparing?',
    'comparison.subtitle': 'Concrete cijfers voor een 150m² woning',
    'comparison.ratio': 'Passieve Huizen = 1 Gemiddeld Huis',
    'comparison.ratio.desc': '7 gezinnen in onze Passieve huizen verbruiken dezelfde energie als 1 gezin in een gemiddeld Nederlands huis',
    'comparison.average': 'Gemiddeld Nederlands Huis',
    'comparison.groenvastbouw': 'Groenvastbouw Passief',
    'comparison.per.year': 'per jaar',
    'comparison.heating': 'verwarmingskosten/jaar',
    'comparison.savings.annual': 'besparing per jaar',
    'comparison.savings.30y': 'over 30 jaar',
    'comparison.includes': 'Dit zijn verwarmingskosten (per jaar):',
    'comparison.space': 'Ruimteverwarming',
    'comparison.water': 'Warm water',
    'comparison.ventilation': 'Ventilatie',
    'comparison.cooling': 'Koeling (zomer)',
    'comparison.embodied': 'Bonus: Lagere Bouw-impact',
    'comparison.embodied.desc': 'Houtskeletbouw (Senmar) gebruikt 50% minder energie tijdens productie dan betonbouw. Na ~4 jaar heeft het huis zijn bouwinvestering terugverdiend en wordt het carbon-positief voor 50+ jaar.',
    
    // Objections
    'objections.title': 'Bezwaren Afhandelen',
    'objections.quality.q': '"Prefab = lagere kwaliteit?"',
    'objections.quality.a': 'Eigenlijk het tegenovergestelde. Fabriekscondities = 1mm CNC-precisie onmogelijk op bouwplaats. Elk paneel geïnspecteerd voor verzending. Nul weerschade, nul vocht = geen schimmel. Traditioneel = menselijke fouten + weer + haast.',
    'objections.price.q': '"Te duur voor mijn budget?"',
    'objections.price.a': 'Vergelijk appels met appels. €2.500/m² turnkey is marktconform voor Passivhaus-kwaliteit. Maar: €4.000+ besparing/jaar = hypotheek van €80.000 extra mogelijk. TCO is lager dan traditioneel.',
    'objections.design.q': '"Beperkte ontwerpvrijheid?"',
    'objections.design.a': 'Modulair ≠ uniform. Senmar MOD systeem = volledige architecturale vrijheid. Elke woning is uniek. Alleen de productie is gestandaardiseerd, niet het ontwerp.',
    'objections.resale.q': '"Moeilijk door te verkopen?"',
    'objections.resale.a': 'Tegenovergestelde: Passivhaus-certificering verhoogt waarde met 15-20%. Kopers betalen premium voor lage energiekosten. In Duitsland/Oostenrijk zijn Passivhaus-woningen 30% sneller verkocht.',
    
    // Key Arguments
    'arguments.title': 'Killer Pitch Lines',
    'arguments.speed': 'Snelheid',
    'arguments.speed.text': '"70% snellere bouw betekent 6-9 maanden eerder huurinkomsten voor investeerders. Dat is €30.000-50.000 extra cashflow."',
    'arguments.price': 'Prijs',
    'arguments.price.text': '"De prijs die we afspreken is de prijs die u betaalt. Nul verrassingen, nul meerkosten. Vaste prijs, vaste kwaliteit."',
    'arguments.efficiency': 'Efficiëntie',
    'arguments.efficiency.text': '"We verkopen geen huizen. We verkopen een ecosysteem van comfort en besparing. Het huis betaalt zichzelf terug."',
    'arguments.sustainability': 'Duurzaamheid',
    'arguments.sustainability.text': '"Bouwen met Groenvastbouw is een daad van ecologische verantwoordelijkheid. 20 ton CO₂ opgeslagen per woning."',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.websites': 'Websites',
    'footer.qr': 'Scan voor meer info',
  },
  en: {
    // Header
    'header.title': 'Groenvastbouw Pitch',
    'header.subtitle': 'Conference Notes',
    
    // Navigation
    'nav.problem': 'Problem',
    'nav.solution': 'Solution',
    'nav.proof': 'Proof',
    'nav.objections': 'Objections',
    
    // Elevator Pitch
    'elevator.title': '30-Second Pitch',
    'elevator.text': 'We build sustainable, energy-efficient homes 70% faster than traditional methods, with 90% lower energy costs. Through industrial prefabrication in Portugal (Senmar), we deliver Passive House quality at market-competitive prices. Our clients save €4,000+ annually on energy and increase their property value by 15-20%.',
    
    // Problem Section
    'problem.title': 'The Dutch Problem',
    'problem.labor': 'Shortage of skilled labor',
    'problem.costs': 'Unpredictable material costs',
    'problem.regulations': 'Nitrogen regulations delay construction',
    'problem.timeline': 'Long construction times (12-18 months)',
    
    // Solution Section
    'solution.title': 'Our Solution',
    'solution.subtitle': 'Groenvastbouw × Senmar Partnership',
    'solution.factory': '4,000 m² factory in Coija, Portugal',
    'solution.capacity': 'Capacity 200 homes/year',
    'solution.precision': 'CNC precision 1mm tolerance',
    'solution.certifications': 'FSC & CE certified',
    
    // Speed Section
    'speed.title': 'Speed & Efficiency',
    'speed.traditional': 'Traditional',
    'speed.groenvastbouw': 'Groenvastbouw',
    'speed.total': 'Total construction time',
    'speed.assembly': 'On-site assembly',
    'speed.months': 'months',
    'speed.days': 'days',
    
    // Pricing Section
    'pricing.title': 'Price per m²',
    'pricing.shell': 'Shell',
    'pricing.shell.desc': 'Structure + windows + roof',
    'pricing.turnkey': 'Turnkey (Complete)',
    'pricing.turnkey.desc': 'Fully finished, move-in ready',
    'pricing.tco': 'TCO Advantage:',
    'pricing.tco.desc': 'Energy savings of €2,000-3,000/year = €60,000-90,000 over 30 years. The house pays for itself.',
    
    // Energy Levels
    'energy.title': 'Energy Performance Levels',
    'energy.optimal': 'Optimal',
    'energy.optimal.desc': 'Good balance for moderate climate',
    'energy.passive': 'Passive ⭐ Our Standard',
    'energy.passive.desc': 'Significant savings, proven ROI',
    'energy.super': 'Super Passive',
    'energy.super.desc': 'Passive House certified - 75% less energy',
    
    // Energy Comparison
    'comparison.title': 'What Does 86% Savings Mean?',
    'comparison.subtitle': 'Concrete numbers for a 150m² home',
    'comparison.ratio': 'Passive Houses = 1 Average House',
    'comparison.ratio.desc': '7 families in our Passive houses consume the same energy as 1 family in an average Dutch house',
    'comparison.average': 'Average Dutch House',
    'comparison.groenvastbouw': 'Groenvastbouw Passive',
    'comparison.per.year': 'per year',
    'comparison.heating': 'heating costs/year',
    'comparison.savings.annual': 'savings per year',
    'comparison.savings.30y': 'over 30 years',
    'comparison.includes': 'These are heating costs (per year):',
    'comparison.space': 'Space heating',
    'comparison.water': 'Hot water',
    'comparison.ventilation': 'Ventilation',
    'comparison.cooling': 'Cooling (summer)',
    'comparison.embodied': 'Bonus: Lower Construction Impact',
    'comparison.embodied.desc': 'Timber frame construction (Senmar) uses 50% less energy during production than concrete construction. After ~4 years, the house has paid back its construction investment and becomes carbon-positive for 50+ years.',
    
    // Objections
    'objections.title': 'Handling Objections',
    'objections.quality.q': '"Prefab = lower quality?"',
    'objections.quality.a': 'Actually the opposite. Factory conditions = 1mm CNC precision impossible on construction site. Every panel inspected before shipping. Zero weather damage, zero moisture = no mold. Traditional = human errors + weather + rush.',
    'objections.price.q': '"Too expensive for my budget?"',
    'objections.price.a': 'Compare apples to apples. €2,500/m² turnkey is market-competitive for Passive House quality. But: €4,000+ savings/year = €80,000 extra mortgage possible. TCO is lower than traditional.',
    'objections.design.q': '"Limited design freedom?"',
    'objections.design.a': 'Modular ≠ uniform. Senmar MOD system = complete architectural freedom. Every home is unique. Only production is standardized, not design.',
    'objections.resale.q': '"Difficult to resell?"',
    'objections.resale.a': 'Opposite: Passive House certification increases value by 15-20%. Buyers pay premium for low energy costs. In Germany/Austria, Passive House homes sell 30% faster.',
    
    // Key Arguments
    'arguments.title': 'Killer Pitch Lines',
    'arguments.speed': 'Speed',
    'arguments.speed.text': '"70% faster construction means 6-9 months earlier rental income for investors. That\'s €30,000-50,000 extra cashflow."',
    'arguments.price': 'Price',
    'arguments.price.text': '"The price we agree on is the price you pay. Zero surprises, zero extra costs. Fixed price, fixed quality."',
    'arguments.efficiency': 'Efficiency',
    'arguments.efficiency.text': '"We don\'t sell houses. We sell an ecosystem of comfort and savings. The house pays for itself."',
    'arguments.sustainability': 'Sustainability',
    'arguments.sustainability.text': '"Building with Groenvastbouw is an act of ecological responsibility. 20 tons CO₂ stored per home."',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.websites': 'Websites',
    'footer.qr': 'Scan for more info',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
