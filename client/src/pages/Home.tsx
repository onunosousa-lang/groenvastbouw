import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import Navbar from '@/components/Navbar';
import AIChat from '@/components/AIChat';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Home as HomeIcon, Leaf, Zap, Clock, Award, Users, Building2, Hammer, Key, ExternalLink, ChevronDown, Lightbulb, PenTool } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = trpc.contact.sendMessage.useMutation({
    onSuccess: () => {
      toast.success(language === 'nl' ? 'Bericht verzonden! We nemen spoedig contact met u op.' : 'Message sent! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    },
    onError: (error) => {
      toast.error(language === 'nl' ? 'Er is een fout opgetreden. Probeer het opnieuw.' : 'An error occurred. Please try again.');
      console.error('Contact form error:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(language === 'nl' ? 'Vul alle verplichte velden in' : 'Please fill in all required fields');
      return;
    }
    sendMessage.mutate(formData);
  };

  const faqs = [
    {
      question_nl: "Wat is een passief huis?",
      question_en: "What is a passive house?",
      answer_nl: "Een passief huis is een gebouw dat tot 90% minder energie verbruikt voor verwarming en koeling dan traditionele woningen. Dit wordt bereikt door superieure isolatie, luchtdichte constructie, hoogwaardige ramen en mechanische ventilatie met warmteterugwinning. Het resultaat is een constant comfortabel binnenklimaat met minimale energiekosten.",
      answer_en: "A passive house is a building that uses up to 90% less energy for heating and cooling compared to traditional homes. This is achieved through superior insulation, airtight construction, high-performance windows, and mechanical ventilation with heat recovery. The result is a consistently comfortable indoor climate with minimal energy costs."
    },
    {
      question_nl: "Wat is het verschil tussen turnkey en alleen structuur?",
      question_en: "What is the difference between turnkey and structure-only?",
      answer_nl: "Wij leveren de complete hoogwaardige draagconstructie (wanden, vloeren, dak) met isolatie, luchtdichte laag en ramen. Voor de afwerking (elektra, loodgieterswerk, vloeren, keukens, etc.) werken wij samen met betrouwbare lokale partners, of u kunt uw eigen aannemers inschakelen. Dit geeft u flexibiliteit in budget en persoonlijke voorkeuren.",
      answer_en: "We deliver the complete high-quality load-bearing structure (walls, floors, roof) with insulation, airtight layer and windows. For finishing (electrical, plumbing, flooring, kitchens, etc.) we work with reliable local partners, or you can engage your own contractors. This gives you flexibility in budget and personal preferences."
    },
    {
      question_nl: "Hoe lang duurt de bouw?",
      question_en: "How long does construction take?",
      answer_nl: "De structuurmontage ter plaatse duurt ongeveer 7-10 dagen. De volledige productie en levering vanaf bestelling duurt ongeveer 3 maanden. Voor de afwerking rekent u nog eens 3-6 maanden, afhankelijk van uw gekozen afwerkingsniveau en beschikbaarheid van aannemers. Dit is aanzienlijk sneller dan traditionele bouw, omdat de elementen geprefabriceerd worden in een gecontroleerde fabrieksomgeving.",
      answer_en: "On-site structure assembly takes approximately 7-10 days. Full production and delivery from order takes approximately 3 months. For finishing, count another 3-6 months, depending on your chosen finishing level and contractor availability. This is significantly faster than traditional construction because the elements are prefabricated in a controlled factory environment."
    },
    {
      question_nl: "Kunnen jullie ook op mijn eigen kavel bouwen?",
      question_en: "Can you build on my own plot?",
      answer_nl: "Ja, wij bouwen op uw eigen kavel. We werken samen met u en uw architect om een passend ontwerp te maken dat voldoet aan lokale bouwvoorschriften en uw wensen. We kunnen werken met standaard modellen of een volledig op maat ontworpen woning realiseren.",
      answer_en: "Yes, we build on your own plot. We work together with you and your architect to create a suitable design that meets local building regulations and your wishes. We can work with standard models or realize a completely custom-designed home."
    },
    {
      question_nl: "Wat zijn de voordelen van samenwerking met Senmar?",
      question_en: "What are the advantages of the Senmar partnership?",
      answer_nl: "Senmar is een gerenommeerde Portugese fabrikant gespecialiseerd in hoogwaardige houtskeletbouw. Ze produceren in een state-of-the-art fabriek in centraal Portugal met strikte kwaliteitscontrole. Voordelen: bewezen technologie, hoogwaardige materialen, snelle productie, concurrerende prijzen door schaalvoordeel, en uitstekende isolatiewaarden (tot R10). Alle elementen worden geprefabriceerd en getest voordat ze naar Nederland worden verzonden.",
      answer_en: "Senmar is a renowned Portuguese manufacturer specialized in high-quality timber-frame construction. They produce in a state-of-the-art factory in central Portugal with strict quality control. Advantages: proven technology, high-quality materials, fast production, competitive prices through economies of scale, and excellent insulation values (up to R10). All elements are prefabricated and tested before being shipped to the Netherlands."
    },
    {
      question_nl: "Welke certificeringen hebben jullie?",
      question_en: "What certifications do you have?",
      answer_nl: "Onze gebouwen voldoen aan de Nederlandse BENG-eisen en kunnen gecertificeerd worden volgens de Passive House standaard. Senmar heeft CE-certificering voor hun producten. Wij werken volgens VCA-veiligheidsnormen en zijn volledig verzekerd voor bouwprojecten in Nederland.",
      answer_en: "Our buildings comply with Dutch BENG requirements and can be certified according to the Passive House standard. Senmar has CE certification for their products. We work according to VCA safety standards and are fully insured for construction projects in the Netherlands."
    },
    {
      question_nl: "Kunnen jullie ook renovaties en uitbreidingen doen?",
      question_en: "Can you also do renovations and extensions?",
      answer_nl: "Ja, naast nieuwbouw zijn wij gespecialiseerd in duurzame renovaties en uitbreidingen. We kunnen uw bestaande woning energiezuinig maken door toevoeging van isolatie, vervanging van ramen, of aanbouw van een passieve uitbreiding. Elk project wordt op maat beoordeeld.",
      answer_en: "Yes, in addition to new construction, we specialize in sustainable renovations and extensions. We can make your existing home energy-efficient by adding insulation, replacing windows, or building a passive extension. Each project is assessed individually."
    },
    {
      question_nl: "Wat zijn de kosten?",
      question_en: "What are the costs?",
      answer_nl: "Wij bieden drie prestatieniveaus voor de structuur: Optimal (€950-€1,050/m²), Passive (€1,100-€1,200/m²), en Super Passive (€1,250-€1,350/m²). Deze prijzen zijn alleen voor de structuur, exclusief transport (€13.200), montage en funderingen. Voor afwerking en installaties werken wij met betrouwbare partners of u kunt uw eigen aannemers inschakelen. Neem contact op voor een persoonlijke offerte op maat.",
      answer_en: "We offer three performance levels for the structure: Optimal (€950-€1,050/m²), Passive (€1,100-€1,200/m²), and Super Passive (€1,250-€1,350/m²). These prices are for structure only, excluding transport (€13,200), assembly and foundations. For finishing and installations, we work with reliable partners or you can engage your own contractors. Contact us for a personalized quote."
    }
  ];

  const principles = [
    {
      title_nl: "Kwaliteit en maatwerk",
      title_en: "Quality and Customization",
      description_nl: "Onze hooggespecialiseerde en gekwalificeerde medewerkers garanderen dat elk geprefabriceerd huis voldoet aan de hoogste normen van afwerking, duurzaamheid en esthetiek, en bieden bij elk project uitzonderlijke kwaliteit.",
      description_en: "Our highly specialized and qualified team ensures that each prefabricated house meets the highest standards of finish, durability and aesthetics, providing exceptional quality in every project.",
      icon: Award
    },
    {
      title_nl: "Duurzaamheid",
      title_en: "Sustainability",
      description_nl: "Wij geven prioriteit aan milieubewustzijn door gebruik te maken van duurzaam gewonnen hout en milieuvriendelijke bouwmethoden, waardoor onze ecologische voetafdruk wordt geminimaliseerd.",
      description_en: "We prioritize environmental responsibility, using sustainably sourced wood and eco-friendly construction methods, minimizing our ecological footprint.",
      icon: Leaf
    },
    {
      title_nl: "Wij delen kennis",
      title_en: "We Share Knowledge",
      description_nl: "Wij delen informatie met onze klanten over technologieën, processen en de voordelen van geprefabriceerde huizen, zodat zij weloverwogen beslissingen kunnen nemen.",
      description_en: "We share information with our clients about technologies, processes and the benefits of prefabricated houses, so they can make informed decisions.",
      icon: Users
    },
    {
      title_nl: "Flexibiliteit en maatwerk",
      title_en: "Flexibility and Customization",
      description_nl: "Wij geloven dat elke klant unieke behoeften en voorkeuren heeft. Daarom bieden wij op maat gemaakte oplossingen die voldoen aan de smaak en behoeften van elk individu.",
      description_en: "We believe each client has unique needs and preferences. That's why we offer customized solutions that meet each individual's tastes and needs.",
      icon: Key
    },
    {
      title_nl: "Professionele ontwikkeling",
      title_en: "Professional Development",
      description_nl: "Wij investeren in onze medewerkers en bieden voortdurende opleidings- en ontwikkelingsmogelijkheden, zodat ons team gekwalificeerd, goed geïnformeerd en gemotiveerd blijft.",
      description_en: "We invest in our team and offer continuous training and development opportunities, ensuring our staff remains qualified, well-informed and motivated.",
      icon: Users
    }
  ];

  const buildingTypes = [
    {
      title_nl: "Woningen en chalets",
      title_en: "Houses and Chalets",
      description_nl: "Wij hebben uitgebreide ervaring in alle soorten residentiële bouw, van compacte woningen tot luxe villa's.",
      description_en: "We have extensive experience in all types of residential construction, from compact homes to luxurious villas."
    },
    {
      title_nl: "Commerciële gebouwen",
      title_en: "Commercial Buildings",
      description_nl: "Onze technologie stelt ons in staat om commerciële gebouwen en dienstengebouwen met meerdere verdiepingen te ontwerpen en te bouwen, waaronder kantoorgebouwen en culturele ruimtes.",
      description_en: "Our technology allows us to design and build multi-story commercial and service buildings including office buildings and cultural spaces."
    },
    {
      title_nl: "Woongebouwen",
      title_en: "Residential Buildings",
      description_nl: "Onze diensten omvatten de ontwikkeling en bouw van wooncomplexen, van rijtjeshuizen en appartementen tot woonwijken. Wij bieden regeneratieve, flexibele en innovatieve oplossingen voor grote residentiële projecten en ecotoerisme.",
      description_en: "Our services include the development and construction of residential complexes from townhouses and apartments to housing developments. We offer regenerative, flexible and innovative solutions for large residential and ecotourism projects."
    },
    {
      title_nl: "Tiny houses / bungalows",
      title_en: "Tiny Houses / Bungalows",
      description_nl: "Wij creëren een verscheidenheid aan tiny houses, perfect voor een eenvoudige en minimalistische levensstijl. Deze gebruiken de ruimte super efficiënt, verlagen de bouw-, onderhouds- en woonkosten en bieden een gastvrije en duurzame omgeving. Gemakkelijk verplaatsbaar, bedienen ze mensen die eenvoud of mobiliteit prioriteit geven.",
      description_en: "We create a variety of tiny houses, perfect for a simple and minimalist lifestyle. These use space super efficiently, reduce construction, maintenance and living costs, offering a welcoming and sustainable environment. Easily relocatable, they serve people who prioritize simplicity or mobility."
    },
    {
      title_nl: "Sauna's en bijgebouwen",
      title_en: "Saunas and Annexes",
      description_nl: "Wij zijn beschikbaar om elke structuur of bijgebouw bij uw huis te bouwen. Van sauna's, fitnessruimtes, barbecues, gereedschapsschuren, geen project is te klein voor ons.",
      description_en: "We are available to build any structure or annex to your home. From saunas, gyms, barbecues, tool sheds, no project is too small for us."
    },
    {
      title_nl: "Buitenaanleg",
      title_en: "Outdoor Arrangements",
      description_nl: "Wij ontwikkelen alle soorten buitenaanleg en zelfvoorzienende landbouwoplossingen, van bloembedden tot kassen, vijvers en eetbare bossen. Beide versterken de schoonheid van uw ruimte en ondersteunen een autonomere en duurzamere levensstijl.",
      description_en: "We develop all types of outdoor arrangements and self-consumption agriculture solutions, from flower beds to greenhouses, ponds and edible forests. Both enhance the beauty of your space and support a more autonomous and sustainable lifestyle."
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <AIChat />

      {/* Hero Section - Full Screen with Background Image */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-groenvastbouw.jpg" 
            alt="Modern ecological passive house in Netherlands by Groenvastbouw" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          {/* Mobile: Slogan numa linha centrado - muito mais alto */}
          <div className="lg:hidden text-center mb-6 -mt-32">
            <h2 className="text-xl font-normal text-white drop-shadow-2xl italic">Nuchter bouwen. Slim wonen.</h2>
          </div>

          <div className="max-w-3xl lg:mx-0 mx-auto lg:mt-0 -mt-16">
            {/* Desktop: mostrar Groenvastbouw + slogan */}
            <div className="mb-4 hidden lg:block">
              <h2 className="text-3xl md:text-4xl font-light text-green-400 mb-2">Groenvastbouw</h2>
              <p className="text-xl md:text-2xl text-white/90 italic">Nuchter bouwen. Slim wonen.</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              {language === 'nl' 
                ? 'Duurzame Woningen op Maat' 
                : 'Sustainable Homes Tailored to You'}
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg">
              {language === 'nl' 
                ? 'Hoogwaardige passieve huizen, kantoren en renovaties. Energie-efficiënt, duurzaam en betaalbaar.' 
                : 'High-quality passive houses, offices and renovations. Energy-efficient, sustainable and affordable.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 shadow-xl"
                onClick={() => scrollToSection('contact')}
              >
                {language === 'nl' ? 'Vraag een offerte aan' : 'Request a quote'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => scrollToSection('services')}
              >
                {language === 'nl' ? 'Onze diensten' : 'Our services'}
              </Button>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* About Section with Background */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/vista_interior.jpg" 
            alt="Interior" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="/images/construction_1.jpg" 
                alt="Construction" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about_text')}
              </p>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {t('about_mission_title')}
                </h3>
                <p className="text-gray-700">
                  {t('about_mission_text')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: t('about_value_sustainability') },
              { icon: Award, title: t('about_value_quality') },
              { icon: Users, title: t('about_value_transparency') },
              { icon: HomeIcon, title: t('about_value_service') }
            ].map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h4 className="font-semibold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Onze Principes' : 'Our Principles'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' 
                ? 'De waarden die ons bij elk project leiden' 
                : 'The values that guide us in every project'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="border-green-200 hover:shadow-2xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {language === 'nl' ? principle.title_nl : principle.title_en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {language === 'nl' ? principle.description_nl : principle.description_en}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="building-types" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Wat Wij Bouwen' : 'What We Build'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' 
                ? 'Op maat gemaakte oplossingen voor elke behoefte' 
                : 'Customized solutions for every need'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingTypes.map((type, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-xl transition-all hover:border-green-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">
                    {language === 'nl' ? type.title_nl : type.title_en}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'nl' ? type.description_nl : type.description_en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Background Images */}
      <section id="services" className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/construction_2.jpg" 
            alt="Services" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'nl' ? 'Onze Diensten' : 'Our Services'}
            </h2>
            <p className="text-xl text-white/90">
              {language === 'nl' 
                ? 'Van concept tot realisatie - wij leveren uw duurzame droomproject' 
                : 'From concept to realization - we deliver your sustainable dream project'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Passieve Woningen' : 'Passive Houses'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Energie-efficiënte nieuwbouw woningen met uitzonderlijke isolatie en comfort. Standaard modellen of volledig op maat.' 
                    : 'Energy-efficient new build homes with exceptional insulation and comfort. Standard models or fully customized.'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Kantoren & Bedrijfspanden' : 'Offices & Commercial'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Duurzame kantoorruimtes en bedrijfspanden met lage operationele kosten en hoog comfort voor medewerkers.' 
                    : 'Sustainable office spaces and commercial buildings with low operating costs and high employee comfort.'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Uitbreidingen & Renovaties' : 'Extensions & Renovations'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Verduurzaming van bestaande woningen, aanbouwen en complete renovaties naar passieve standaard.' 
                    : 'Sustainability upgrades for existing homes, extensions and complete renovations to passive standard.'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Flexibele Oplevering' : 'Flexible Delivery'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Wij leveren de hoogwaardige structuur, waarna u met onze partners of eigen aannemers de afwerking naar wens kunt realiseren.' 
                    : 'We deliver the high-quality structure, after which you can complete the finishing with our partners or your own contractors.'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Advies & Consultancy' : 'Advice & Consultancy'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Professioneel advies over duurzaam bouwen, energiebesparende oplossingen en passieve huizen. Wij helpen u de juiste keuzes te maken.' 
                    : 'Professional advice on sustainable construction, energy-saving solutions and passive houses. We help you make the right choices.'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === 'nl' ? 'Development & Ontwerp' : 'Development & Design'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  {language === 'nl' 
                    ? 'Van concept tot realisatie. Wij ontwikkelen uw droomproject met aandacht voor detail, functionaliteit en duurzaamheid.' 
                    : 'From concept to realization. We develop your dream project with attention to detail, functionality and sustainability.'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{language === 'nl' ? 'Volledige Service' : 'Full Service'}</h3>
                <p className="text-white/90 mb-4">
                  {language === 'nl' 
                    ? 'Wij verzorgen het complete proces van ontwerp tot levering van de structuur. Voor installaties en afwerkingen werken wij met betrouwbare partners, of u kunt uw eigen aannemers inschakelen voor maximale flexibiliteit.' 
                    : 'We handle the complete process from design to delivery of the structure. For installations and finishes, we work with reliable partners, or you can engage your own contractors for maximum flexibility.'}
                </p>
                <ul className="space-y-2">
                  {[
                    language === 'nl' ? 'Complete projectbegeleiding' : 'Complete project management',
                    language === 'nl' ? 'Alle installaties (elektra, sanitair, verwarming)' : 'All installations (electrical, plumbing, heating)',
                    language === 'nl' ? 'Volledige afwerking naar wens' : 'Complete finishing as desired',
                    language === 'nl' ? 'Sleutelklaar opgeleverd' : 'Turnkey delivery'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{language === 'nl' ? 'Alleen Structuur' : 'Structure Only'}</h3>
                <p className="text-white/90 mb-4">
                  {language === 'nl' 
                    ? 'Wij leveren de complete draagconstructie met isolatie en luchtdichte laag. Ideaal als u zelf of met eigen aannemers de afwerking wilt verzorgen en kosten wilt besparen.' 
                    : 'We deliver the complete load-bearing structure with insulation and airtight layer. Ideal if you want to arrange the finishing yourself or with your own contractors and save costs.'}
                </p>
                <ul className="space-y-2">
                  {[
                    language === 'nl' ? 'Complete structuur (wanden, vloeren, dak)' : 'Complete structure (walls, floors, roof)',
                    language === 'nl' ? 'Isolatie en luchtdichte laag' : 'Insulation and airtight layer',
                    language === 'nl' ? 'Ramen en deuren' : 'Windows and doors',
                    language === 'nl' ? 'Klaar voor afwerking' : 'Ready for finishing'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senmar Partnership Section */}
      <section id="senmar" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/project_sweden_1.jpg" 
            alt="Senmar Project" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('senmar_title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {language === 'nl' 
                  ? 'Samenwerking met een Europese leider in houtskeletbouw' 
                  : 'Partnership with a European leader in timber-frame construction'}
              </p>
              <p className="text-gray-700 mb-6">
                {language === 'nl' 
                  ? 'Senmar is een gerenommeerde Portugese fabrikant gespecialiseerd in ecologische houtskeletbouw. Hun state-of-the-art fabriek in centraal Portugal produceert hoogwaardige geprefabriceerde elementen met strikte kwaliteitscontrole. Door deze samenwerking kunnen wij u de beste kwaliteit bieden tegen zeer concurrerende prijzen.' 
                  : 'Senmar is a renowned Portuguese manufacturer specialized in ecological timber-frame construction. Their state-of-the-art factory in central Portugal produces high-quality prefabricated elements with strict quality control. Through this partnership, we can offer you the best quality at very competitive prices.'}
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'nl' ? 'Voordelen Senmar Technologie:' : 'Senmar Technology Advantages:'}
                </h3>
                <ul className="space-y-3">
                  {[
                    language === 'nl' ? 'Gespecialiseerde fabrikant in centraal Portugal' : 'Specialized manufacturer in central Portugal',
                    language === 'nl' ? 'Isolatiewaarden tot R10 (super passief)' : 'Insulation values up to R10 (super passive)',
                    language === 'nl' ? 'CE-gecertificeerde producten' : 'CE-certified products',
                    language === 'nl' ? 'Geprefabriceerd in gecontroleerde omgeving' : 'Prefabricated in controlled environment',
                    language === 'nl' ? 'Snelle montage (7-10 dagen)' : 'Fast assembly (7-10 days)',
                    language === 'nl' ? 'Concurrerende prijzen door schaalvoordeel' : 'Competitive prices through economies of scale',
                    language === 'nl' ? 'Duurzame materialen (FSC-gecertificeerd hout)' : 'Sustainable materials (FSC-certified wood)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://senmar.pt/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                {language === 'nl' ? 'Bezoek Senmar Website' : 'Visit Senmar Website'}
                <ExternalLink size={20} />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/project_sweden_1.jpg" alt="Project" className="rounded-lg shadow-xl hover:scale-105 transition-transform" />
              <img src="/images/project_iceland.jpg" alt="Project" className="rounded-lg shadow-xl hover:scale-105 transition-transform" />
              <img src="/images/project_france_1.jpg" alt="Project" className="rounded-lg shadow-xl hover:scale-105 transition-transform" />
              <img src="/images/construction_3.jpg" alt="Project" className="rounded-lg shadow-xl hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Waarom Kiezen voor Groenvastbouw?' : 'Why Choose Groenvastbouw?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' 
                ? 'Kwaliteit, comfort en duurzaamheid in perfecte harmonie' 
                : 'Quality, comfort and sustainability in perfect harmony'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Bespaar tot €2.100/jaar' : 'Save up to €2,100/year'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Passieve huizen gebruiken tot 90% minder energie. Over 20 jaar bespaart u €42.000 aan energiekosten.' 
                    : 'Passive houses use up to 90% less energy. Over 20 years, you save €42,000 in energy costs.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Uitzonderlijk Comfort' : 'Exceptional Comfort'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Constante temperatuur van 20-22°C, geen koude plekken, continue gefilterde ventilatie en superieure geluidsisolatie.' 
                    : 'Constant temperature of 20-22°C, no cold spots, continuous filtered ventilation and superior sound insulation.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Duurzaam & Toekomstbestendig' : 'Sustainable & Future-proof'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'BENG-conform, lage CO₂-voetafdruk, FSC-gecertificeerd hout en 50+ jaar levensduur met minimaal onderhoud.' 
                    : 'BENG-compliant, low CO₂ footprint, FSC-certified wood and 50+ year lifespan with minimal maintenance.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Snelle Bouw' : 'Fast Construction'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? '7-10 dagen structuurmontage, 4-6 maanden totaal. Weersonafhankelijk door prefabricage in fabriek.' 
                    : '7-10 days structure assembly, 4-6 months total. Weather-independent through factory prefabrication.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Hoogwaardige Materialen' : 'High-Quality Materials'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Alleen de beste materialen: FSC-hout, hoogwaardige isolatie, triple-glas ramen en duurzame afwerkingen.' 
                    : 'Only the best materials: FSC wood, high-quality insulation, triple-glazed windows and sustainable finishes.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{language === 'nl' ? 'Persoonlijke Begeleiding' : 'Personal Guidance'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Direct contact met de eigenaar, transparante communicatie en betrokkenheid bij elk project van A tot Z.' 
                    : 'Direct contact with the owner, transparent communication and involvement in every project from A to Z.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Transparante Prijzen' : 'Transparent Pricing'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' 
                ? 'Kwaliteit en duurzaamheid tegen een eerlijke prijs' 
                : 'Quality and sustainability at a fair price'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Optimal */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                <CardTitle className="text-2xl">OPTIMAL</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-700">
                  {language === 'nl' ? 'Hoge Prestaties' : 'High Performance'}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    €950-€1,050<span className="text-lg font-normal text-gray-600">/m²*</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'nl' ? 'Alleen structuur' : 'Structure only'}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">R-waarde 5.7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">200mm isolatie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">BENG-conform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">{language === 'nl' ? '70-80% energiebesparing' : '70-80% energy savings'}</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 italic">
                    * {language === 'nl' 
                      ? 'Referentieprijzen gebaseerd op Senmar standaard modellen. Exclusief transport (€13.200), montage en funderingen.' 
                      : 'Reference prices based on Senmar standard models. Excluding transport (€13,200), assembly and foundations.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Passive */}
            <Card className="border-2 border-green-500 shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {language === 'nl' ? 'POPULAIR' : 'POPULAR'}
              </div>
              <CardHeader className="bg-gradient-to-br from-green-100 to-green-200">
                <CardTitle className="text-2xl">PASSIVE</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-800">
                  {language === 'nl' ? 'Premium Prestaties' : 'Premium Performance'}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    €1,100-€1,200<span className="text-lg font-normal text-gray-600">/m²*</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'nl' ? 'Alleen structuur' : 'Structure only'}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">R-waarde 8.5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">300mm isolatie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">BENG++</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">{language === 'nl' ? '85-90% energiebesparing' : '85-90% energy savings'}</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 italic">
                    * {language === 'nl' 
                      ? 'Referentieprijzen gebaseerd op Senmar standaard modellen. Exclusief transport (€13.200), montage en funderingen.' 
                      : 'Reference prices based on Senmar standard models. Excluding transport (€13,200), assembly and foundations.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Super Passive */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                <CardTitle className="text-2xl">SUPER PASSIVE</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-700">
                  {language === 'nl' ? 'Passivhaus Gecertificeerd' : 'Passivhaus Certified'}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    €1,250-€1,350<span className="text-lg font-normal text-gray-600">/m²*</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'nl' ? 'Alleen structuur' : 'Structure only'}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">R-waarde 9.9</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">350mm isolatie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Passivhaus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">{language === 'nl' ? '90% energiebesparing' : '90% energy savings'}</span>
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 italic">
                    * {language === 'nl' 
                      ? 'Referentieprijzen gebaseerd op Senmar standaard modellen. Exclusief transport (€13.200), montage en funderingen.' 
                      : 'Reference prices based on Senmar standard models. Excluding transport (€13,200), assembly and foundations.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {language === 'nl' ? 'Wat is inbegrepen?' : 'What\'s included?'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-800">
                  {language === 'nl' ? 'Structuur (3 maanden)' : 'Structure (3 months)'}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Complete houtskeletbouw' : 'Complete timber frame'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Hoogwaardige isolatie' : 'High-performance insulation'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Triple-glas ramen en deuren' : 'Triple-glazed windows and doors'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Transport vanuit Portugal' : 'Transport from Portugal'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Professionele montage' : 'Professional assembly'}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-800">
                  {language === 'nl' ? 'Turnkey (+3 maanden)' : 'Turnkey (+3 months)'}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Funderingen' : 'Foundations'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Binnen- en buitenafwerking' : 'Interior and exterior finishing'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Elektra en loodgieterwerk' : 'Electrical and plumbing'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Keuken en badkamers' : 'Kitchen and bathrooms'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{language === 'nl' ? 'Sleutelklaar opgeleverd' : 'Turnkey delivery'}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              {language === 'nl' 
                ? 'Prijzen zijn indicatief en afhankelijk van locatie, terreinomstandigheden en maatwerk. Neem contact op voor een persoonlijke offerte.' 
                : 'Prices are indicative and depend on location, site conditions and customization. Contact us for a personal quote.'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' ? 'Alles wat u moet weten over onze diensten' : 'Everything you need to know about our services'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {language === 'nl' ? faq.question_nl : faq.question_en}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-green-700 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {language === 'nl' ? faq.answer_nl : faq.answer_en}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/construction_4.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact_title')}
            </h2>
            <p className="text-xl text-white/90">
              {language === 'nl' 
                ? 'Laten we uw duurzame droomproject bespreken' 
                : 'Let\'s discuss your sustainable dream project'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact_info_title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Groenvastbouw</h4>
                  <p className="text-white/90">Wageningen, Nederland</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:info@groenvastbouw.nl" className="text-green-400 hover:text-green-300">
                    info@groenvastbouw.nl
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">{language === 'nl' ? 'Telefoon' : 'Phone'}</h4>
                  <a href="tel:0629841297" className="text-green-400 hover:text-green-300">
                    06 2984 1297
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">KvK</h4>
                  <p className="text-white/90">75308045</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder={t('contact_name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact_email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact_phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact_message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                {t('contact_submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Founder Section - Moved to Bottom */}
      <section id="founder" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('founder_title')}
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('founder_subtitle')}
                  </h3>
                  <p className="text-green-700 font-semibold mb-4">
                    {t('founder_role')}
                  </p>
                  <div className="text-left text-sm text-gray-600 space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:info@groenvastbouw.nl" className="text-green-700">info@groenvastbouw.nl</a></p>
                    <p><strong>{language === 'nl' ? 'Telefoon' : 'Phone'}:</strong> <a href="tel:0629841297" className="text-green-700">06 2984 1297</a></p>
                    <p><strong>{language === 'nl' ? 'Locatie' : 'Location'}:</strong> Wageningen, NL</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('founder_text')}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t('founder_education_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{t('founder_education_text')}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t('founder_experience_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{t('founder_experience_text')}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="Groenvastbouw" className="h-20 w-auto mb-4" />
              <p className="text-gray-400">
                {language === 'nl' 
                  ? 'Duurzame woningbouw met passie voor kwaliteit en milieu.' 
                  : 'Sustainable housing with passion for quality and environment.'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_links')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">{t('nav_about')}</a></li>
                <li><a href="#services" className="hover:text-white">{t('nav_services')}</a></li>
                <li><a href="#senmar" className="hover:text-white">{t('nav_senmar')}</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wageningen, Nederland</li>
                <li><a href="mailto:info@groenvastbouw.nl" className="hover:text-white">info@groenvastbouw.nl</a></li>
                <li><a href="tel:0629841297" className="hover:text-white">06 2984 1297</a></li>
                <li>KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
