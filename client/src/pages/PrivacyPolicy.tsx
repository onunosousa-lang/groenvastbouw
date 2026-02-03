import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    backHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    title: language === 'nl' ? 'Privacybeleid' : 'Privacy Policy',
    lastUpdated: language === 'nl' ? 'Laatst bijgewerkt: 22 januari 2026' : 'Last updated: January 22, 2026',
    
    intro: language === 'nl'
      ? 'Bij Groenvastbouw respecteren wij uw privacy en zijn wij transparant over hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen. Dit privacybeleid legt uit welke gegevens wij verzamelen wanneer u onze website bezoekt of gebruik maakt van onze diensten, en hoe wij deze gegevens verwerken in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).'
      : 'At Groenvastbouw, we respect your privacy and are transparent about how we collect, use, and protect your personal data. This privacy policy explains what data we collect when you visit our website or use our services, and how we process this data in accordance with the General Data Protection Regulation (GDPR).',
    
    sections: language === 'nl' ? [
      {
        title: '1. Wie zijn wij?',
        content: 'Groenvastbouw is een bedrijf dat hoogperformante geprefabriceerde timmerhuizen levert in samenwerking met Senmar, Portugal. Wij zijn gevestigd in Nederland en zijn verantwoordelijk voor de verwerking van uw persoonsgegevens. Voor vragen over dit privacybeleid kunt u contact met ons opnemen via info@groenvastbouw.nl of telefonisch op +31 6 2984 1297.'
      },
      {
        title: '2. Welke gegevens verzamelen wij?',
        content: 'Wij verzamelen verschillende soorten persoonsgegevens, afhankelijk van hoe u met ons in contact komt. Dit omvat contactgegevens zoals uw naam, e-mailadres, telefoonnummer en postadres wanneer u een offerte aanvraagt of contact met ons opneemt. Projectinformatie zoals bouwplannen, locatiegegevens en specifieke wensen voor uw passief huis worden verzameld wanneer u een project met ons start. Technische gegevens zoals IP-adres, browsertype, apparaatinformatie en cookiegegevens worden automatisch verzameld wanneer u onze website bezoekt. Communicatiegegevens zoals de inhoud van e-mails, telefoongesprekken en andere communicatie met ons team worden bewaard. Financiële gegevens zoals factureringsgegevens en betalingsinformatie worden verwerkt wanneer u een overeenkomst met ons aangaat.'
      },
      {
        title: '3. Hoe verzamelen wij uw gegevens?',
        content: 'Wij verzamelen uw gegevens op verschillende manieren. Direct van u wanneer u een contactformulier invult, een offerte aanvraagt, per e-mail of telefoon contact met ons opneemt, of een overeenkomst met ons aangaat. Automatisch via onze website door middel van cookies en vergelijkbare technologieën die informatie verzamelen over uw bezoek. Van derden zoals Senmar, onze productiepartner in Portugal, die technische specificaties en productie-informatie met ons deelt. Van openbare bronnen zoals het Kadaster voor informatie over bouwlocaties en vergunningen.'
      },
      {
        title: '4. Waarvoor gebruiken wij uw gegevens?',
        content: 'Wij gebruiken uw persoonsgegevens voor verschillende doeleinden. Voor het uitvoeren van onze diensten, waaronder het verwerken van uw offerte-aanvraag, het ontwerpen en bouwen van uw passief huis, het communiceren over uw project, en het afhandelen van betalingen en facturering. Voor het verbeteren van onze diensten door het analyseren van websitegebruik, het verbeteren van onze producten en diensten, en het ontwikkelen van nieuwe oplossingen. Voor marketing en communicatie, zoals het versturen van nieuwsbrieven en updates over onze diensten (alleen met uw toestemming), het delen van relevante informatie over passiefhuizen en duurzaam bouwen, en het tonen van gerichte advertenties. Voor juridische verplichtingen, waaronder het voldoen aan wettelijke vereisten, het beschermen van onze rechten en eigendom, en het voorkomen van fraude en misbruik.'
      },
      {
        title: '5. Rechtsgrondslag voor verwerking',
        content: 'Wij verwerken uw persoonsgegevens alleen wanneer wij hiervoor een geldige rechtsgrondslag hebben. Uitvoering van een overeenkomst wanneer de verwerking noodzakelijk is voor het uitvoeren van een overeenkomst met u, zoals het bouwen van uw passief huis. Toestemming wanneer u expliciet toestemming heeft gegeven voor specifieke verwerkingen, zoals het ontvangen van marketingcommunicatie. Gerechtvaardigd belang wanneer wij een gerechtvaardigd belang hebben bij de verwerking, zoals het verbeteren van onze diensten of het beschermen van onze bedrijfsvoering. Wettelijke verplichting wanneer wij wettelijk verplicht zijn om uw gegevens te verwerken, zoals voor belastingdoeleinden of het voldoen aan bouwvoorschriften.'
      },
      {
        title: '6. Met wie delen wij uw gegevens?',
        content: 'Wij delen uw persoonsgegevens alleen met derden wanneer dit noodzakelijk is voor onze dienstverlening of wanneer wij hiertoe wettelijk verplicht zijn. Senmar, onze productiepartner in Portugal, ontvangt technische specificaties en projectinformatie die nodig is voor de CNC-prefabricatie van uw huis. Onderaannemers en leveranciers die betrokken zijn bij de bouw en installatie van uw passief huis ontvangen relevante projectinformatie. Professionele adviseurs zoals accountants, advocaten en verzekeraars krijgen toegang tot uw gegevens voor hun dienstverlening. Overheidsinstanties ontvangen informatie wanneer wij hiertoe wettelijk verplicht zijn, zoals voor vergunningen en belastingdoeleinden. Wij verkopen uw persoonsgegevens nooit aan derden voor marketingdoeleinden.'
      },
      {
        title: '7. Internationale gegevensoverdracht',
        content: 'Omdat wij samenwerken met Senmar in Portugal, worden sommige van uw persoonsgegevens overgedragen naar Portugal. Portugal is een lidstaat van de Europese Unie en valt onder de AVG, waardoor uw gegevens hetzelfde beschermingsniveau genieten als in Nederland. Voor overdrachten buiten de EU, indien van toepassing, zorgen wij ervoor dat passende waarborgen aanwezig zijn, zoals standaard contractuele clausules of andere door de Europese Commissie goedgekeurde mechanismen.'
      },
      {
        title: '8. Hoe lang bewaren wij uw gegevens?',
        content: 'Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld. Projectgegevens worden bewaard gedurende de looptijd van het project plus tien jaar voor garantie- en aansprakelijkheidsdoeleinden. Communicatiegegevens worden bewaard zolang noodzakelijk voor het afhandelen van uw verzoek of vraag, doorgaans maximaal twee jaar. Financiële gegevens worden bewaard gedurende zeven jaar in overeenstemming met fiscale wetgeving. Marketinggegevens worden bewaard totdat u zich afmeldt of totdat de gegevens niet langer relevant zijn, maximaal drie jaar. Websitegegevens en cookies worden bewaard volgens de bewaartermijnen die in onze cookieverklaring zijn vermeld, doorgaans maximaal twee jaar.'
      },
      {
        title: '9. Uw rechten onder de AVG',
        content: 'Onder de AVG heeft u verschillende rechten met betrekking tot uw persoonsgegevens. Het recht op inzage geeft u het recht om te weten welke persoonsgegevens wij van u verwerken. Het recht op rectificatie stelt u in staat om onjuiste of onvolledige gegevens te laten corrigeren. Het recht op verwijdering (recht op vergetelheid) geeft u onder bepaalde omstandigheden het recht om uw gegevens te laten verwijderen. Het recht op beperking van de verwerking stelt u in staat om de verwerking van uw gegevens te beperken in bepaalde situaties. Het recht op gegevensoverdraagbaarheid geeft u het recht om uw gegevens in een gestructureerd, gangbaar en machineleesbaar formaat te ontvangen. Het recht van bezwaar stelt u in staat om bezwaar te maken tegen de verwerking van uw gegevens op basis van gerechtvaardigd belang. Het recht om toestemming in te trekken geeft u de mogelijkheid om eerder gegeven toestemming op elk moment in te trekken. Om deze rechten uit te oefenen, kunt u contact met ons opnemen via info@groenvastbouw.nl. Wij zullen uw verzoek binnen één maand behandelen.'
      },
      {
        title: '10. Cookies en vergelijkbare technologieën',
        content: 'Onze website maakt gebruik van cookies en vergelijkbare technologieën om uw ervaring te verbeteren en om informatie te verzamelen over hoe u onze website gebruikt. Noodzakelijke cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld. Functionele cookies onthouden uw voorkeuren en instellingen. Analytische cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat wij deze kunnen verbeteren. Marketingcookies worden gebruikt om relevante advertenties te tonen en de effectiviteit van onze marketingcampagnes te meten. U kunt uw cookievoorkeuren beheren via de cookie-instellingen van uw browser. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van onze website kan beïnvloeden.'
      },
      {
        title: '11. Beveiliging van uw gegevens',
        content: 'Wij nemen de beveiliging van uw persoonsgegevens zeer serieus en hebben passende technische en organisatorische maatregelen getroffen om uw gegevens te beschermen tegen ongeautoriseerde toegang, verlies, wijziging of openbaarmaking. Deze maatregelen omvatten versleuteling van gevoelige gegevens tijdens overdracht en opslag, toegangscontroles en authenticatie voor medewerkers die toegang hebben tot persoonsgegevens, regelmatige beveiligingsaudits en updates van onze systemen, training van medewerkers over gegevensbescherming en privacy, en back-ups van gegevens om verlies te voorkomen. Ondanks deze maatregelen kunnen wij geen absolute beveiliging garanderen. Als u vermoedt dat uw gegevens zijn gecompromitteerd, neem dan onmiddellijk contact met ons op.'
      },
      {
        title: '12. Wijzigingen in dit privacybeleid',
        content: 'Wij kunnen dit privacybeleid van tijd tot tijd bijwerken om wijzigingen in onze praktijken of om juridische redenen weer te geven. De datum van de laatste update staat bovenaan dit document. Wij raden u aan om dit privacybeleid regelmatig te raadplegen om op de hoogte te blijven van hoe wij uw gegevens beschermen. Bij belangrijke wijzigingen zullen wij u hiervan op de hoogte stellen via e-mail of een prominente kennisgeving op onze website.'
      }
    ] : [
      {
        title: '1. Who are we?',
        content: 'Groenvastbouw is a company that delivers high-performance prefabricated timber houses in partnership with Senmar, Portugal. We are based in the Netherlands and are responsible for processing your personal data. For questions about this privacy policy, you can contact us at info@groenvastbouw.nl or by phone at +31 6 2984 1297.'
      },
      {
        title: '2. What data do we collect?',
        content: 'We collect various types of personal data depending on how you interact with us. This includes contact information such as your name, email address, phone number, and postal address when you request a quote or contact us. Project information such as building plans, location data, and specific requirements for your passive house is collected when you start a project with us. Technical data such as IP address, browser type, device information, and cookie data is automatically collected when you visit our website. Communication data such as the content of emails, phone calls, and other communications with our team is retained. Financial data such as billing information and payment details is processed when you enter into an agreement with us.'
      },
      {
        title: '3. How do we collect your data?',
        content: 'We collect your data in various ways. Directly from you when you fill out a contact form, request a quote, contact us by email or phone, or enter into an agreement with us. Automatically through our website using cookies and similar technologies that collect information about your visit. From third parties such as Senmar, our production partner in Portugal, who shares technical specifications and production information with us. From public sources such as the Land Registry for information about construction sites and permits.'
      },
      {
        title: '4. What do we use your data for?',
        content: 'We use your personal data for various purposes. To perform our services, including processing your quote request, designing and building your passive house, communicating about your project, and handling payments and billing. To improve our services by analyzing website usage, improving our products and services, and developing new solutions. For marketing and communication, such as sending newsletters and updates about our services (only with your consent), sharing relevant information about passive houses and sustainable construction, and showing targeted advertisements. For legal obligations, including complying with legal requirements, protecting our rights and property, and preventing fraud and abuse.'
      },
      {
        title: '5. Legal basis for processing',
        content: 'We only process your personal data when we have a valid legal basis. Performance of a contract when processing is necessary to perform an agreement with you, such as building your passive house. Consent when you have explicitly given consent for specific processing, such as receiving marketing communications. Legitimate interest when we have a legitimate interest in processing, such as improving our services or protecting our business operations. Legal obligation when we are legally required to process your data, such as for tax purposes or compliance with building regulations.'
      },
      {
        title: '6. Who do we share your data with?',
        content: 'We only share your personal data with third parties when necessary for our services or when legally required. Senmar, our production partner in Portugal, receives technical specifications and project information necessary for CNC prefabrication of your house. Subcontractors and suppliers involved in the construction and installation of your passive house receive relevant project information. Professional advisors such as accountants, lawyers, and insurers have access to your data for their services. Government agencies receive information when we are legally required, such as for permits and tax purposes. We never sell your personal data to third parties for marketing purposes.'
      },
      {
        title: '7. International data transfer',
        content: 'Because we work with Senmar in Portugal, some of your personal data is transferred to Portugal. Portugal is a member state of the European Union and falls under GDPR, ensuring your data enjoys the same level of protection as in the Netherlands. For transfers outside the EU, if applicable, we ensure appropriate safeguards are in place, such as standard contractual clauses or other mechanisms approved by the European Commission.'
      },
      {
        title: '8. How long do we retain your data?',
        content: 'We do not retain your personal data longer than necessary for the purposes for which it was collected. Project data is retained for the duration of the project plus ten years for warranty and liability purposes. Communication data is retained as long as necessary to handle your request or question, typically a maximum of two years. Financial data is retained for seven years in accordance with tax legislation. Marketing data is retained until you unsubscribe or until the data is no longer relevant, maximum three years. Website data and cookies are retained according to the retention periods stated in our cookie statement, typically a maximum of two years.'
      },
      {
        title: '9. Your rights under GDPR',
        content: 'Under GDPR, you have various rights regarding your personal data. The right of access gives you the right to know what personal data we process about you. The right to rectification allows you to have incorrect or incomplete data corrected. The right to erasure (right to be forgotten) gives you the right to have your data deleted under certain circumstances. The right to restriction of processing allows you to restrict the processing of your data in certain situations. The right to data portability gives you the right to receive your data in a structured, commonly used, and machine-readable format. The right to object allows you to object to the processing of your data based on legitimate interest. The right to withdraw consent allows you to withdraw previously given consent at any time. To exercise these rights, you can contact us at info@groenvastbouw.nl. We will process your request within one month.'
      },
      {
        title: '10. Cookies and similar technologies',
        content: 'Our website uses cookies and similar technologies to improve your experience and to collect information about how you use our website. Necessary cookies are essential for the functioning of the website and cannot be disabled. Functional cookies remember your preferences and settings. Analytical cookies help us understand how visitors use our website so we can improve it. Marketing cookies are used to show relevant advertisements and measure the effectiveness of our marketing campaigns. You can manage your cookie preferences through your browser\'s cookie settings. Please note that disabling certain cookies may affect the functionality of our website.'
      },
      {
        title: '11. Security of your data',
        content: 'We take the security of your personal data very seriously and have implemented appropriate technical and organizational measures to protect your data against unauthorized access, loss, alteration, or disclosure. These measures include encryption of sensitive data during transfer and storage, access controls and authentication for employees who have access to personal data, regular security audits and updates of our systems, training of employees on data protection and privacy, and backups of data to prevent loss. Despite these measures, we cannot guarantee absolute security. If you suspect your data has been compromised, please contact us immediately.'
      },
      {
        title: '12. Changes to this privacy policy',
        content: 'We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. The date of the last update is at the top of this document. We recommend that you review this privacy policy regularly to stay informed about how we protect your data. For significant changes, we will notify you via email or a prominent notice on our website.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#dcdcdc] text-[#2a3439]">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[#2a3439] hover:text-[#8edb38] transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              {content.backHome}
            </a>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-sm text-[#2a3439] mb-8">{content.lastUpdated}</p>

          {/* Introduction */}
          <p className="text-lg text-[#2a3439] leading-relaxed mb-12">
            {content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-[#8edb38] pl-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-[#2a3439] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-card rounded-lg border border-[#dcdcdc]">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {language === 'nl' ? 'Vragen over uw privacy?' : 'Questions about your privacy?'}
            </h3>
            <p className="text-[#2a3439] mb-4">
              {language === 'nl'
                ? 'Neem gerust contact met ons op als u vragen heeft over hoe wij uw gegevens verwerken.'
                : 'Feel free to contact us if you have questions about how we process your data.'}
            </p>
            <div className="space-y-2">
              <p className="text-[#2a3439]">
                <span className="font-semibold text-foreground">Email:</span>{' '}
                <a href="mailto:info@groenvastbouw.nl" className="text-[#8edb38] hover:underline">
                  info@groenvastbouw.nl
                </a>
              </p>
              <p className="text-[#2a3439]">
                <span className="font-semibold text-foreground">Telefoon:</span>{' '}
                <a href="tel:+31629841297" className="text-[#8edb38] hover:underline">
                  +31 6 2984 1297
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
