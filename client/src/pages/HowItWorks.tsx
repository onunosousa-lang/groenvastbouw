import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';

export default function HowItWorks() {
  const { language } = useLanguage();
  const [activeTier, setActiveTier] = useState<'basic' | 'optimal' | 'passive' | 'superpassive'>('optimal');
  const [activeView, setActiveView] = useState<'wall' | 'floor' | 'roof'>('wall');

  const content = {
    hero: {
      titleNl: 'Onze Technische Oplossingen',
      titleEn: 'Our Technical Solutions',
      subtitleNl: 'Vier presets ontworpen voor verschillende klimaten en behoeften',
      subtitleEn: 'Four presets designed for different climates and needs',
      introNl: 'Onze projecten worden geleid door twee essentiële principes van geprefabriceerde bouw, elk met unieke voordelen:',
      introEn: 'Our projects are guided by two essential principles of prefabricated construction, each offering unique advantages:',
      panelizedTitleNl: 'Panelized Constructie',
      panelizedTitleEn: 'Panelized Construction',
      panelizedDescNl: 'Bij deze methode worden gebouwen geconstrueerd met vooraf vervaardigde wanden en panelen, die off-site in een gecontroleerde omgeving worden gefabriceerd. Deze panelen worden vervolgens naar de bouwplaats getransporteerd en als bouwblokken geassembleerd, wat zorgt voor snellere bouwtijden, verbeterde kwaliteitscontrole en minder afval.',
      panelizedDescEn: 'In this method, buildings are constructed using pre-manufactured walls and panels, which are fabricated off-site in a controlled environment. These panels are then transported to the construction site and assembled like building blocks, allowing for faster construction times, improved quality control, and reduced waste.',
      modularTitleNl: 'Modulaire Constructie',
      modularTitleEn: 'Modular Construction',
      modularDescNl: 'Deze aanpak gaat een stap verder door volledige secties of modules van een gebouw off-site te creëren. Deze modules, die hele kamers of secties van een structuur kunnen omvatten, zijn volledig uitgerust met elektrische, sanitaire en interieurafwerkingen voordat ze naar de locatie worden getransporteerd. Eenmaal ter plaatse worden de modules als grote puzzelstukken geassembleerd, wat resulteert in een volledig geïntegreerd gebouw.',
      modularDescEn: 'This approach takes prefabrication a step further by creating entire sections or modules of a building off-site. These modules, which can include entire rooms or sections of a structure, are fully outfitted with electrical, plumbing, and interior finishes before being transported to the site. Once on-site, the modules are assembled like large-scale puzzle pieces, resulting in a fully integrated building.',
      closingNl: 'Door gebruik te maken van deze twee bouwmethoden, zorgen we ervoor dat onze projecten worden geleverd met de hoogste normen van efficiëntie, kwaliteit en innovatie. Ongeacht welke bouwmethode u verkiest, bieden wij vier primaire presets van technologische oplossingen om uit te kiezen.',
      closingEn: 'By leveraging these two construction methods, we ensure that our projects are delivered with the highest standards of efficiency, quality, and innovation. No matter which construction method you prefer, we provide four primary presets of technological solutions for you to choose from.'
    },
    tiers: [
      {
        id: 'basic',
        titleNl: 'Basis Structuur',
        titleEn: 'Basic Structure',
        descNl: 'Onze basis preset levert een fundamentele oplossing voor het bouwframe en geeft u een geprefabriceerde structuur die u vervolgens kunt aanpassen en voltooien. Het is een geweldige keuze voor degenen die kosten willen verlagen en die de expertise hebben om de constructie zelf af te maken.',
        descEn: 'Our basic preset delivers a foundational solution for the building frame, giving you a prefabricated structure that you can then customize and complete. It\'s a great choice for those looking to reduce costs and who have the expertise to complete the construction themselves.',
        components: {
          wall: [
            { labelNl: 'Externe OSB plaat', labelEn: 'External OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 12 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 12 mm' },
            { labelNl: 'Houtskelet structuur', labelEn: 'Timber frame structure', specNl: 'Ovengedroogd (16%), Behandeld, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Treated, Calibrated (C24), Dimensions: 195x45 mm' }
          ],
          floor: [
            { labelNl: 'Vloerbalk', labelEn: 'Joist beam', specNl: 'Ovengedroogd (16%), Geschaafd, Gekalibreerd (C24), Afmetingen: 390x45 mm', specEn: 'Kiln dried (16%), Planed, Calibrated (C24), Dimensions: 390x45 mm' }
          ],
          roof: [
            { labelNl: 'Gordingen', labelEn: 'Purlins', specNl: 'Ovengedroogd (16%), Geschaafd, Gekalibreerd (C24), Afmetingen: 195x195 mm', specEn: 'Kiln dried (16%), Planed, Calibrated (C24), Dimensions: 195x195 mm' },
            { labelNl: 'Sluitplank', labelEn: 'Closing board', specNl: 'Ovengedroogd (16%), Geschaafd, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Planed, Calibrated (C24), Dimensions: 195x45 mm' },
            { labelNl: 'Spanten', labelEn: 'Rafters', specNl: 'Ovengedroogd (16%), Behandeld, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Treated, Calibrated (C24), Dimensions: 195x45 mm' }
          ]
        }
      },
      {
        id: 'optimal',
        titleNl: 'Optimale Structuur',
        titleEn: 'Optimal Structure',
        descNl: 'De optimale preset is ontworpen voor gematigde klimaten, met een bouwframe dat 200 millimeter isolatie en een interne dampremmer bevat. Deze opstelling garandeert een comfortabel microklimaat en ondersteunt de structurele integriteit en levensduur van het gebouw. Deze oplossing is perfect voor comfortabel wonen het hele jaar door in regio\'s met milde winteromstandigheden.',
        descEn: 'The optimal preset is designed for moderate climates, with a building frame that includes 200 millimeters of insulation and an internal vapor barrier. This setup guarantees a comfortable microclimate and supports the structural integrity and longevity of the building. This solution is perfect for comfortable year-round living in regions with mild winter conditions.',
        components: {
          wall: [
            { labelNl: 'Externe OSB plaat', labelEn: 'External OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 12 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 12 mm' },
            { labelNl: 'Houtskelet structuur', labelEn: 'Timber frame structure', specNl: 'Ovengedroogd (16%), Behandeld, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Treated, Calibrated (C24), Dimensions: 195x45 mm' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (200mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 5.7 W/m²K', specEn: 'Soft mineral wool (200mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 5.7 W/m²K' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan (95gr/m²) Intern', specEn: 'Diffusion membrane (95gr/m²) Internal' },
            { labelNl: 'OSB plaat', labelEn: 'OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 9 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 9 mm' }
          ],
          floor: [
            { labelNl: 'OSB vloerplaat', labelEn: 'OSB flooring board', specNl: 'OSB-3, Dikte - 22 mm', specEn: 'OSB-3, Thickness - 22 mm' },
            { labelNl: 'Schokabsorberende tape', labelEn: 'Shock absorbing tape', specNl: 'Dikte - 3.2 mm', specEn: 'Thickness - 3.2 mm' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Isolatie', labelEn: 'Insulation', specNl: 'Zachte minerale wol', specEn: 'Soft mineral wool' },
            { labelNl: 'Vloerbalk', labelEn: 'Joist beam', specNl: 'Afmetingen: 390x45 mm', specEn: 'Dimensions: 390x45 mm' }
          ],
          roof: [
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Sluitplank', labelEn: 'Closing board', specNl: 'Afmetingen: 195x45 mm', specEn: 'Dimensions: 195x45 mm' },
            { labelNl: 'Gordingen', labelEn: 'Purlins', specNl: 'Afmetingen: 195x195 mm', specEn: 'Dimensions: 195x195 mm' },
            { labelNl: 'Latten', labelEn: 'Battens', specNl: 'Houten latten', specEn: 'Wooden battens' },
            { labelNl: 'Contralatten', labelEn: 'Counter battens', specNl: 'Houten contralatten', specEn: 'Wooden counter battens' },
            { labelNl: 'Wind-vocht membraan', labelEn: 'Wind-moisture membrane', specNl: 'Diffusie membraan (120gr/m²)', specEn: 'Diffusion membrane (120gr/m²)' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (200mm)', specEn: 'Soft mineral wool (200mm)' },
            { labelNl: 'Spanten', labelEn: 'Rafters', specNl: 'Afmetingen: 195x45 mm', specEn: 'Dimensions: 195x45 mm' }
          ]
        }
      },
      {
        id: 'passive',
        titleNl: 'Passieve Structuur',
        titleEn: 'Passive Structure',
        descNl: 'Deze preset bevat aanvullende externe isolatie voor het bouwframe, met dikte aangepast aan de lokale klimaatomstandigheden. Het primaire voordeel van deze oplossing is verbeterde thermische bescherming, wat resulteert in een koeler huis tijdens de zomer en verminderd energieverbruik voor verwarming in de winter. In het komende decennium zal deze passieve isolatie leiden tot aanzienlijke besparingen op zowel verwarmings- als koelingskosten. Deze oplossing is zeer geschikt voor regio\'s met strenge winters en zeer warme klimaten.',
        descEn: 'This preset features additional external insulation for the building frame, with thickness adjusted according to local climate conditions. The primary benefit of this solution is enhanced thermal protection, resulting in a cooler home during the summer and reduced energy consumption for heating in the winter. Over the next decade, this passive insulation will lead to substantial savings on both heating and cooling costs. This solution is well-suited for regions with harsh winters as well as very hot climates.',
        components: {
          wall: [
            { labelNl: 'Verticale houten latten', labelEn: 'Vertical timber battens', specNl: 'Zachthout balken, Ovengedroogd (16%), Geschaafd, Gekalibreerd, Afmetingen: 120x45 mm', specEn: 'Softwood beams, Kiln dried (16%), Planed, Calibrated, Dimensions: 120x45 mm' },
            { labelNl: 'Externe isolatie', labelEn: 'External insulation', specNl: 'Harde minerale wol (100mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 2.8 W/m²K', specEn: 'Hard mineral wool (100mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 2.8 W/m²K' },
            { labelNl: 'Wind-vocht membraan', labelEn: 'Wind-moisture membrane', specNl: 'Diffusie membraan (120gr/m²)', specEn: 'Diffusion membrane (120gr/m²)' },
            { labelNl: 'Externe OSB plaat', labelEn: 'External OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 12 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 12 mm' },
            { labelNl: 'Houtskelet structuur', labelEn: 'Timber frame structure', specNl: 'Ovengedroogd (16%), Behandeld, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Treated, Calibrated (C24), Dimensions: 195x45 mm' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (200mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 5.7 W/m²K', specEn: 'Soft mineral wool (200mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 5.7 W/m²K' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan (95gr/m²) Intern', specEn: 'Diffusion membrane (95gr/m²) Internal' },
            { labelNl: 'OSB plaat', labelEn: 'OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 9 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 9 mm' }
          ],
          floor: [
            { labelNl: 'OSB vloerplaat', labelEn: 'OSB flooring board', specNl: 'OSB-3, Dikte - 22 mm', specEn: 'OSB-3, Thickness - 22 mm' },
            { labelNl: 'Schokabsorberende tape', labelEn: 'Shock absorbing tape', specNl: 'Dikte - 3.2 mm', specEn: 'Thickness - 3.2 mm' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Isolatie', labelEn: 'Insulation', specNl: 'Zachte minerale wol', specEn: 'Soft mineral wool' },
            { labelNl: 'Vloerbalk', labelEn: 'Joist beam', specNl: 'Afmetingen: 390x45 mm', specEn: 'Dimensions: 390x45 mm' }
          ],
          roof: [
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Sluitplank', labelEn: 'Closing board', specNl: 'Afmetingen: 195x45 mm', specEn: 'Dimensions: 195x45 mm' },
            { labelNl: 'Gordingen', labelEn: 'Purlins', specNl: 'Afmetingen: 195x195 mm', specEn: 'Dimensions: 195x195 mm' },
            { labelNl: 'Latten', labelEn: 'Battens', specNl: 'Houten latten', specEn: 'Wooden battens' },
            { labelNl: 'Contralatten', labelEn: 'Counter battens', specNl: 'Houten contralatten', specEn: 'Wooden counter battens' },
            { labelNl: 'Wind-vocht membraan', labelEn: 'Wind-moisture membrane', specNl: 'Diffusie membraan (120gr/m²)', specEn: 'Diffusion membrane (120gr/m²)' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (400mm), R-waarde = 11.4 W/m²K', specEn: 'Soft mineral wool (400mm), R-value = 11.4 W/m²K' },
            { labelNl: 'Spanten', labelEn: 'Rafters', specNl: 'Afmetingen: 390x45 mm', specEn: 'Dimensions: 390x45 mm' }
          ]
        }
      },
      {
        id: 'superpassive',
        titleNl: 'Super Passieve Structuur',
        titleEn: 'Super Passive Structure',
        descNl: 'Onze SuperPassive Preset voldoet aan Passivhaus-normen en biedt een uitzonderlijke oplossing voor energie-efficiënte, comfortabele woningen. Deze geprefabriceerde preset beschikt over geavanceerde isolatie die het hele jaar door een stabiele binnentemperatuur handhaaft, waardoor het energieverbruik met maximaal 75% wordt verminderd in vergelijking met standaard bouwwerken. Dit voorkomt ook tocht, koude plekken, schimmel en condensatie, wat een gezondere leefomgeving bevordert. Ontworpen met een \'fabric first\' benadering en ondersteund door uitgebreid onderzoek, leveren onze SuperPassive wanden blijvende kwaliteit en prestaties voor zowel comfort als duurzaamheid.',
        descEn: 'Our SuperPassive Preset meets Passivhaus standards, providing an exceptional solution for energy-efficient, comfortable homes. These prefab preset feature advanced insulation that maintains a steady internal temperature year-round, reducing energy use by up to 75% compared to standard builds. That also prevents draughts, cold spots, mold, and condensation, promoting a healthier living environment. Designed with a \'fabric first\' approach and backed by extensive research, our SuperPassive walls deliver lasting quality and performance for both comfort and sustainability.',
        components: {
          wall: [
            { labelNl: 'Verticale houten latten', labelEn: 'Vertical timber battens', specNl: 'Zachthout balken, Ovengedroogd (16%), Geschaafd, Gekalibreerd, Afmetingen: 120x45 mm', specEn: 'Softwood beams, Kiln dried (16%), Planed, Calibrated, Dimensions: 120x45 mm' },
            { labelNl: 'Externe isolatie', labelEn: 'External insulation', specNl: 'Harde minerale wol (100mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 2.8 W/m²K', specEn: 'Hard mineral wool (100mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 2.8 W/m²K' },
            { labelNl: 'Wind-vocht membraan', labelEn: 'Wind-moisture membrane', specNl: 'Diffusie membraan (120gr/m²)', specEn: 'Diffusion membrane (120gr/m²)' },
            { labelNl: 'Externe OSB plaat', labelEn: 'External OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 12 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 12 mm' },
            { labelNl: 'Houtskelet structuur', labelEn: 'Timber frame structure', specNl: 'Ovengedroogd (16%), Behandeld, Gekalibreerd (C24), Afmetingen: 195x45 mm', specEn: 'Kiln dried (16%), Treated, Calibrated (C24), Dimensions: 195x45 mm' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (200mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 5.7 W/m²K', specEn: 'Soft mineral wool (200mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 5.7 W/m²K' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan (95gr/m²) Intern', specEn: 'Diffusion membrane (95gr/m²) Internal' },
            { labelNl: 'OSB plaat', labelEn: 'OSB plate', specNl: 'OSB-3, Draagvermogen, vochtbestendig, Dikte - 9 mm', specEn: 'OSB-3, Load-bearing, moisture-resistant, Thickness - 9 mm' },
            { labelNl: 'Horizontale houten latwerk', labelEn: 'Horizontal timber lathing', specNl: 'Zachthout balken, Ovengedroogd (16%), Geschaafd, Gekalibreerd, Afmetingen: 45x45 mm', specEn: 'Softwood beams, Kiln dried (16%), Planed, Calibrated, Dimensions: 45x45 mm' },
            { labelNl: 'Interne isolatie', labelEn: 'Internal insulation', specNl: 'Zachte minerale wol (50mm), U-waarde = 0.035 W/mK, Brandveiligheidsklasse - A, R-waarde = 1.4 W/m²K', specEn: 'Soft mineral wool (50mm), U-value = 0.035 W/mK, Fire safety class - A, R-value = 1.4 W/m²K' }
          ],
          floor: [
            { labelNl: 'OSB vloerplaat', labelEn: 'OSB flooring board', specNl: 'OSB-3, Dikte - 22 mm', specEn: 'OSB-3, Thickness - 22 mm' },
            { labelNl: 'Schokabsorberende tape', labelEn: 'Shock absorbing tape', specNl: 'Dikte - 3.2 mm', specEn: 'Thickness - 3.2 mm' },
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Isolatie', labelEn: 'Insulation', specNl: 'Zachte minerale wol', specEn: 'Soft mineral wool' },
            { labelNl: 'Vloerbalk', labelEn: 'Joist beam', specNl: 'Afmetingen: 390x45 mm', specEn: 'Dimensions: 390x45 mm' }
          ],
          roof: [
            { labelNl: 'Damprem membraan', labelEn: 'Vapor barrier membrane', specNl: 'Diffusie membraan', specEn: 'Diffusion membrane' },
            { labelNl: 'Sluitplank', labelEn: 'Closing board', specNl: 'Afmetingen: 195x45 mm', specEn: 'Dimensions: 195x45 mm' },
            { labelNl: 'Gordingen', labelEn: 'Purlins', specNl: 'Afmetingen: 195x195 mm', specEn: 'Dimensions: 195x195 mm' },
            { labelNl: 'Latten', labelEn: 'Battens', specNl: 'Houten latten', specEn: 'Wooden battens' },
            { labelNl: 'Contralatten', labelEn: 'Counter battens', specNl: 'Houten contralatten', specEn: 'Wooden counter battens' },
            { labelNl: 'Wind-vocht membraan', labelEn: 'Wind-moisture membrane', specNl: 'Diffusie membraan (120gr/m²)', specEn: 'Diffusion membrane (120gr/m²)' },
            { labelNl: 'Primaire isolatie', labelEn: 'Primary insulation', specNl: 'Zachte minerale wol (400mm), R-waarde = 11.4 W/m²K', specEn: 'Soft mineral wool (400mm), R-value = 11.4 W/m²K' },
            { labelNl: 'Spanten', labelEn: 'Rafters', specNl: 'Afmetingen: 390x45 mm', specEn: 'Dimensions: 390x45 mm' }
          ]
        }
      }
    ]
  };

  const currentTier = content.tiers.find(t => t.id === activeTier)!;
  const currentComponents = currentTier.components[activeView];

  return (
    <div className="min-h-screen bg-[#dcdcdc]">
      <SEO
        title={language === 'nl' ? 'Hoe Het Werkt - Technische Oplossingen' : 'How It Works - Technical Solutions'}
        description={language === 'nl' ? 'Ontdek onze vier technische oplossingen voor geprefabriceerde bouw, van basis tot super passief.' : 'Discover our four technical solutions for prefabricated construction, from basic to super passive.'}
      />
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative text-foreground py-16 md:py-24 mt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/passief-huis-isolatie-binnenkant.jpg)' }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a3439]/95 to-[#2a3439]/90" />
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8edb38] hover:text-[#8edb38] font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {language === 'nl' ? 'Terug naar Home' : 'Back to Home'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'nl' ? content.hero.titleNl : content.hero.titleEn}
          </h1>
          <p className="text-xl text-[#2a3439] max-w-2xl">
            {language === 'nl' ? content.hero.subtitleNl : content.hero.subtitleEn}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-[#2a3439] leading-relaxed mb-8">
            {language === 'nl' ? content.hero.introNl : content.hero.introEn}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#dcdcdc] p-6 rounded-lg border-2 border-[#8edb38]/30">
              <h3 className="text-xl font-bold text-[#2a3439] mb-3">
                {language === 'nl' ? content.hero.panelizedTitleNl : content.hero.panelizedTitleEn}
              </h3>
              <p className="text-[#2a3439] leading-relaxed">
                {language === 'nl' ? content.hero.panelizedDescNl : content.hero.panelizedDescEn}
              </p>
            </div>

            <div className="bg-[#dcdcdc] p-6 rounded-lg border-2 border-[#8edb38]/30">
              <h3 className="text-xl font-bold text-[#2a3439] mb-3">
                {language === 'nl' ? content.hero.modularTitleNl : content.hero.modularTitleEn}
              </h3>
              <p className="text-[#2a3439] leading-relaxed">
                {language === 'nl' ? content.hero.modularDescNl : content.hero.modularDescEn}
              </p>
            </div>
          </div>

          <p className="text-lg text-[#2a3439] leading-relaxed">
            {language === 'nl' ? content.hero.closingNl : content.hero.closingEn}
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-[#dcdcdc]">
        <div className="container mx-auto px-4">
          {/* Tier Navigation */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="inline-flex bg-[#dcdcdc] rounded-xl shadow-md p-2 gap-2">
              {content.tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id as any)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTier === tier.id
                      ? 'bg-[#8edb38] text-[#2a3439] shadow-md'
                      : 'text-[#2a3439] hover:text-[#2a3439] hover:bg-[#dcdcdc]'
                  }`}
                >
                  {language === 'nl' ? tier.titleNl : tier.titleEn}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tier Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#dcdcdc] rounded-2xl shadow-xl overflow-hidden border-2 border-[#dcdcdc]">
              {/* Tier Header */}
              <div className="bg-[#dcdcdc] p-8 border-b-2 border-[#dcdcdc]">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8edb38] mb-2">
                  {language === 'nl' ? currentTier.titleNl : currentTier.titleEn}
                </h2>
                <p className="text-2xl font-semibold text-[#2a3439] mb-4">
                  {language === 'nl' ? currentTier.priceNl : currentTier.priceEn}
                </p>
                <p className="text-lg text-[#2a3439] leading-relaxed">
                  {language === 'nl' ? currentTier.descNl : currentTier.descEn}
                </p>
              </div>

              {/* View Tabs */}
              <div className="flex justify-center gap-4 p-6 bg-[#dcdcdc] border-b-2 border-[#dcdcdc]">
                {(['wall', 'floor', 'roof'] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeView === view
                        ? 'bg-[#8edb38] text-[#2a3439] shadow-md'
                        : 'bg-[#dcdcdc] text-[#2a3439] hover:text-[#2a3439] hover:shadow-sm'
                    }`}
                  >
                    {view === 'wall' && (language === 'nl' ? 'Wand' : 'Wall')}
                    {view === 'floor' && (language === 'nl' ? 'Vloer' : 'Floor')}
                    {view === 'roof' && (language === 'nl' ? 'Dak' : 'Roof')}
                  </button>
                ))}
              </div>

              {/* Components List */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2a3439] mb-6">
                  {language === 'nl' ? 'Componenten:' : 'Components:'}
                </h3>
                <div className="space-y-4">
                  {currentComponents.map((component, idx) => (
                    <div key={idx} className="bg-[#dcdcdc] p-5 rounded-lg border border-[#8edb38]/20 hover:border-[#8edb38]/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8edb38] text-[#2a3439] flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#2a3439] mb-1">
                            {language === 'nl' ? component.labelNl : component.labelEn}
                          </h4>
                          <p className="text-sm text-[#2a3439]">
                            {language === 'nl' ? component.specNl : component.specEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-[#2a3439] to-[#2a3439] p-8 text-center">
                <p className="text-foreground text-lg mb-4">
                  {language === 'nl' 
                    ? 'Geïnteresseerd in deze oplossing?' 
                    : 'Interested in this solution?'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/#contact" 
                    className="inline-block bg-[#8edb38] hover:bg-[#8edb38] text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    {language === 'nl' ? 'Vraag Offerte Aan' : 'Request Quote'}
                  </a>
                  <a 
                    href="https://senmar.pt/en/solutions" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block border-2 border-[#8edb38] text-[#8edb38] hover:bg-[#8edb38] hover:text-[#2a3439] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    {language === 'nl' ? 'Bekijk op Senmar' : 'View on Senmar'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto p-8 bg-[#dcdcdc] rounded-xl border-2 border-[#8edb38] shadow-lg">
            <h3 className="text-2xl font-bold text-[#2a3439] mb-4">
              {language === 'nl' ? 'Waarom Kiezen Voor Senmar Technologie?' : 'Why Choose Senmar Technology?'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#8edb38] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#2a3439] mb-1">
                    {language === 'nl' ? 'Gecontroleerde Productie' : 'Controlled Production'}
                  </h4>
                  <p className="text-[#2a3439] text-sm">
                    {language === 'nl' 
                      ? 'Alle structuren worden geproduceerd in een gecontroleerde fabrieksomgeving voor maximale kwaliteit.' 
                      : 'All structures are produced in a controlled factory environment for maximum quality.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#8edb38] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#2a3439] mb-1">
                    {language === 'nl' ? 'Snelle Levering' : 'Fast Delivery'}
                  </h4>
                  <p className="text-[#2a3439] text-sm">
                    {language === 'nl' 
                      ? 'Van ontwerp tot geleverde structuur in slechts 3 maanden.' 
                      : 'From design to delivered structure in just 3 months.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#8edb38] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#2a3439] mb-1">
                    {language === 'nl' ? 'Energie-efficiënt' : 'Energy Efficient'}
                  </h4>
                  <p className="text-[#2a3439] text-sm">
                    {language === 'nl' 
                      ? 'Superieure isolatie resulteert in lagere energiekosten en een comfortabeler binnenklimaat.' 
                      : 'Superior insulation results in lower energy costs and a more comfortable indoor climate.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#8edb38] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#2a3439] mb-1">
                    {language === 'nl' ? 'Duurzaam' : 'Sustainable'}
                  </h4>
                  <p className="text-[#2a3439] text-sm">
                    {language === 'nl' 
                      ? 'Geprefabriceerde constructie vermindert afval en heeft een lagere ecologische voetafdruk.' 
                      : 'Prefabricated construction reduces waste and has a lower ecological footprint.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#dcdcdc]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-[#2a3439] mb-4">
            {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
          </h3>
          <p className="text-lg text-[#2a3439] mb-8 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'Neem contact met ons op voor een gedetailleerde offerte op maat voor uw project.'
              : 'Contact us for a detailed custom quote for your project.'}
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-[#8edb38] hover:bg-[#8edb38] text-[#2a3439] font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg"
          >
            {language === 'nl' ? 'Plan een Gratis Consult' : 'Schedule a Free Consultation'}
          </a>
        </div>
      </section>
    </div>
  );
}
