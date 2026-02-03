import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function TermsOfService() {
  const { language } = useLanguage();

  const content = {
    backHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    title: language === 'nl' ? 'Algemene Voorwaarden' : 'Terms of Service',
    lastUpdated: language === 'nl' ? 'Laatst bijgewerkt: 22 januari 2026' : 'Last updated: January 22, 2026',
    
    intro: language === 'nl'
      ? 'Deze algemene voorwaarden zijn van toepassing op alle diensten die worden geleverd door Groenvastbouw, gevestigd in Nederland. Door gebruik te maken van onze website of diensten, gaat u akkoord met deze voorwaarden. Lees deze voorwaarden zorgvuldig door voordat u onze diensten gebruikt.'
      : 'These terms of service apply to all services provided by Groenvastbouw, based in the Netherlands. By using our website or services, you agree to these terms. Please read these terms carefully before using our services.',
    
    sections: language === 'nl' ? [
      {
        title: '1. Definities',
        content: 'In deze algemene voorwaarden worden de volgende termen gebruikt. Groenvastbouw verwijst naar het bedrijf dat hoogperformante geprefabriceerde timmerhuizen levert in samenwerking met Senmar, Portugal. De Klant is elke natuurlijke of rechtspersoon die een offerte aanvraagt, een overeenkomst aangaat of anderszins gebruik maakt van de diensten van Groenvastbouw. Diensten omvatten alle werkzaamheden, leveringen en prestaties die Groenvastbouw voor de Klant uitvoert, waaronder maar niet beperkt tot het ontwerpen, produceren en installeren van passiefhuizen en extensies. De Overeenkomst is elke afspraak tussen Groenvastbouw en de Klant met betrekking tot de levering van diensten. De Website verwijst naar groenvastbouw.nl en alle bijbehorende subdomeinen en pagina\'s.'
      },
      {
        title: '2. Toepasselijkheid',
        content: 'Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van diensten door Groenvastbouw, tenzij uitdrukkelijk schriftelijk anders is overeengekomen. Afwijkingen van deze voorwaarden zijn alleen geldig indien deze uitdrukkelijk schriftelijk door Groenvastbouw zijn bevestigd. De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de Klant wordt uitdrukkelijk van de hand gewezen. Indien enige bepaling van deze algemene voorwaarden nietig is of vernietigd wordt, blijven de overige bepalingen volledig van kracht. Groenvastbouw en de Klant zullen in dat geval in overleg treden om nieuwe bepalingen ter vervanging van de nietige of vernietigde bepalingen overeen te komen.'
      },
      {
        title: '3. Offertes en totstandkoming van overeenkomsten',
        content: 'Alle offertes van Groenvastbouw zijn vrijblijvend en geldig gedurende dertig dagen, tenzij anders vermeld. Een overeenkomst komt tot stand op het moment dat de Klant een offerte schriftelijk of per e-mail accepteert, of op het moment dat Groenvastbouw een schriftelijke opdrachtbevestiging verzendt. Groenvastbouw behoudt zich het recht voor om een opdracht zonder opgave van redenen te weigeren. Alle prijzen in offertes zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders vermeld. De offerte is gebaseerd op de informatie die de Klant heeft verstrekt. Indien deze informatie onjuist of onvolledig blijkt te zijn, behoudt Groenvastbouw zich het recht voor om de prijzen en voorwaarden aan te passen.'
      },
      {
        title: '4. Prijzen en betaling',
        content: 'Alle prijzen zijn uitgedrukt in euro\'s en zijn exclusief BTW, tenzij anders vermeld. Groenvastbouw behoudt zich het recht voor om prijzen aan te passen indien na het tot stand komen van de overeenkomst maar voor de levering kostprijsverhogende omstandigheden optreden, zoals wijzigingen in materiaalkosten, lonen of wisselkoersen. Betaling dient te geschieden volgens het overeengekomen betalingsschema, dat doorgaans bestaat uit een aanbetaling van dertig procent bij opdracht, veertig procent bij start productie, en dertig procent bij oplevering. Betaling dient te geschieden binnen veertien dagen na factuurdatum, tenzij schriftelijk anders is overeengekomen. Bij niet-tijdige betaling is de Klant van rechtswege in verzuim en is Groenvastbouw gerechtigd de wettelijke handelsrente in rekening te brengen. Alle kosten van invordering, zowel gerechtelijk als buitengerechtelijk, komen voor rekening van de Klant.'
      },
      {
        title: '5. Levertijd en uitvoering',
        content: 'De door Groenvastbouw opgegeven levertijden zijn indicatief en geen fatale termijnen, tenzij uitdrukkelijk schriftelijk anders is overeengekomen. Overschrijding van de levertijd geeft de Klant geen recht op schadevergoeding of ontbinding van de overeenkomst, tenzij de vertraging zodanig is dat van de Klant redelijkerwijs niet kan worden gevergd de overeenkomst in stand te houden. Groenvastbouw zal de Klant tijdig informeren indien voorzienbaar is dat de levertijd niet kan worden gehaald. De levertijd vangt aan nadat de Klant alle benodigde informatie en documenten heeft verstrekt en de aanbetaling is ontvangen. Groenvastbouw voert de werkzaamheden uit naar beste kunnen en volgens de huidige stand der techniek. De uitvoering geschiedt in samenwerking met Senmar in Portugal, die verantwoordelijk is voor de CNC-prefabricatie van de houten constructie-elementen.'
      },
      {
        title: '6. Verplichtingen van de Klant',
        content: 'De Klant is verplicht alle informatie en documenten die Groenvastbouw redelijkerwijs nodig heeft voor de uitvoering van de overeenkomst tijdig en in de gewenste vorm te verstrekken. Dit omvat onder andere bouwplannen, vergunningen, bodemonderzoeken en toegang tot de bouwlocatie. De Klant dient ervoor te zorgen dat alle benodigde vergunningen en toestemmingen zijn verkregen voordat de werkzaamheden aanvangen. De Klant is verantwoordelijk voor het gereed maken van de fundering en het bouwterrein volgens de specificaties van Groenvastbouw. Indien de Klant zijn verplichtingen niet nakomt en dit leidt tot vertraging of extra kosten, komen deze voor rekening van de Klant. De Klant vrijwaart Groenvastbouw voor aanspraken van derden die verband houden met de uitvoering van de werkzaamheden, voor zover deze aanspraken het gevolg zijn van informatie of instructies die door de Klant zijn verstrekt.'
      },
      {
        title: '7. Wijzigingen en meerwerk',
        content: 'Wijzigingen in de opdracht die door de Klant worden gewenst, dienen schriftelijk te worden aangevraagd. Groenvastbouw zal de Klant informeren over de gevolgen van de wijziging voor de prijs en levertijd. Wijzigingen worden alleen uitgevoerd nadat de Klant schriftelijk akkoord is gegaan met de aangepaste offerte. Meerwerk wordt gefactureerd op basis van de overeengekomen uurtarieven of vaste prijzen. Indien tijdens de uitvoering blijkt dat meerwerk noodzakelijk is, zal Groenvastbouw de Klant hiervan tijdig op de hoogte stellen. Groenvastbouw is gerechtigd de uitvoering op te schorten totdat de Klant akkoord is gegaan met het meerwerk. Wijzigingen die worden aangebracht nadat de productie is gestart, kunnen leiden tot aanzienlijke extra kosten en vertragingen.'
      },
      {
        title: '8. Oplevering en aanvaarding',
        content: 'De oplevering vindt plaats op het moment dat de werkzaamheden zijn voltooid en de Klant hiervan schriftelijk op de hoogte is gesteld. De Klant dient binnen veertien dagen na oplevering het werk te inspecteren en eventuele gebreken schriftelijk te melden. Kleine gebreken die de ingebruikname niet in de weg staan, geven de Klant niet het recht de aanvaarding op te schorten. Groenvastbouw zal dergelijke gebreken binnen een redelijke termijn herstellen. Indien de Klant binnen veertien dagen na oplevering geen gebreken heeft gemeld, wordt het werk geacht te zijn aanvaard. Na aanvaarding kan de Klant geen beroep meer doen op zichtbare gebreken. Bij oplevering ontvangt de Klant alle relevante documenten, waaronder gebruiksaanwijzingen, onderhoudsadviezen en garantiebewijzen.'
      },
      {
        title: '9. Garantie',
        content: 'Groenvastbouw garandeert dat de geleverde diensten en materialen voldoen aan de overeengekomen specificaties en geschikt zijn voor normaal gebruik. De garantieperiode bedraagt tien jaar op de constructie en twee jaar op installaties en afwerking, tenzij anders overeengekomen. De garantie dekt fabricagefouten en materiaalgebreken, maar niet normale slijtage, schade door onoordeelkundig gebruik, gebrekkig onderhoud of wijzigingen die door de Klant of derden zijn aangebracht zonder toestemming van Groenvastbouw. Om aanspraak te maken op garantie dient de Klant het gebrek onverwijld schriftelijk te melden aan Groenvastbouw. Groenvastbouw zal het gebrek naar eigen keuze herstellen of vervangen. Indien herstel niet mogelijk of onevenredig kostbaar is, kan Groenvastbouw ervoor kiezen een passende prijsvermindering toe te passen. De garantie vervalt indien de Klant zijn betalingsverplichtingen niet nakomt.'
      },
      {
        title: '10. Aansprakelijkheid',
        content: 'Groenvastbouw is alleen aansprakelijk voor schade die het directe gevolg is van een toerekenbare tekortkoming in de nakoming van de overeenkomst. De aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering wordt uitbetaald, vermeerderd met het eigen risico. Indien om welke reden dan ook geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot maximaal het factuurbedrag van de overeenkomst. Groenvastbouw is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie. Groenvastbouw is evenmin aansprakelijk voor schade die het gevolg is van door de Klant verstrekte onjuiste of onvolledige informatie, gebrekkige voorbereiding van de bouwlocatie, of handelingen van de Klant of derden. De Klant vrijwaart Groenvastbouw voor alle aanspraken van derden ter zake van schade die verband houdt met de uitvoering van de overeenkomst.'
      },
      {
        title: '11. Overmacht',
        content: 'Groenvastbouw is niet gehouden tot nakoming van enige verplichting indien zij daartoe verhinderd wordt als gevolg van overmacht. Onder overmacht wordt verstaan elke omstandigheid buiten de wil en macht van Groenvastbouw die de nakoming van de overeenkomst blijvend of tijdelijk verhindert. Hieronder vallen onder meer natuurrampen, oorlog, terrorisme, pandemieën, stakingen, overheidsmaatregelen, transportproblemen, tekorten aan grondstoffen of energie, en storingen bij toeleveranciers of Senmar. Bij overmacht heeft Groenvastbouw het recht de uitvoering van de overeenkomst op te schorten of de overeenkomst geheel of gedeeltelijk te ontbinden, zonder tot enige schadevergoeding gehouden te zijn. Indien de overmacht langer dan drie maanden duurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden zonder dat er een verplichting tot schadevergoeding ontstaat.'
      },
      {
        title: '12. Intellectueel eigendom',
        content: 'Alle rechten van intellectuele eigendom met betrekking tot ontwerpen, tekeningen, berekeningen, adviezen en andere documenten die door Groenvastbouw zijn vervaardigd, berusten bij Groenvastbouw of haar licentiegevers. De Klant verkrijgt uitsluitend een gebruiksrecht voor het betreffende project. Het is de Klant niet toegestaan deze documenten te verveelvoudigen, te openbaren of ter beschikking te stellen aan derden zonder voorafgaande schriftelijke toestemming van Groenvastbouw. Groenvastbouw behoudt zich het recht voor de door de uitvoering van de werkzaamheden toegenomen kennis voor andere doeleinden te gebruiken, voor zover hierbij geen vertrouwelijke informatie van de Klant ter kennis van derden wordt gebracht. De Klant verleent Groenvastbouw toestemming om foto\'s en beschrijvingen van het gerealiseerde project te gebruiken voor marketingdoeleinden, tenzij de Klant hier schriftelijk bezwaar tegen maakt.'
      },
      {
        title: '13. Geheimhouding',
        content: 'Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie. Groenvastbouw zal vertrouwelijke informatie van de Klant niet zonder voorafgaande schriftelijke toestemming aan derden verstrekken, behalve voor zover dit noodzakelijk is voor de uitvoering van de overeenkomst, zoals het delen van technische specificaties met Senmar. De geheimhoudingsverplichting geldt niet voor informatie die publiekelijk bekend is zonder schending van de geheimhoudingsverplichting, die de ontvangende partij reeds kende voordat deze werd verstrekt, of die op grond van een wettelijke verplichting moet worden verstrekt.'
      },
      {
        title: '14. Ontbinding en opzegging',
        content: 'Indien een partij tekortschiet in de nakoming van haar verplichtingen, heeft de andere partij het recht de overeenkomst geheel of gedeeltelijk te ontbinden, tenzij de tekortkoming gezien haar bijzondere aard of geringe betekenis deze ontbinding niet rechtvaardigt. Ontbinding kan pas plaatsvinden nadat de nalatige partij schriftelijk in gebreke is gesteld en een redelijke termijn is gegund om de tekortkoming te herstellen. Bij ontbinding door toedoen van de Klant heeft Groenvastbouw recht op vergoeding van alle reeds gemaakte kosten en gederfde winst. Bij ontbinding door toedoen van Groenvastbouw heeft de Klant recht op terugbetaling van reeds betaalde bedragen, verminderd met de waarde van reeds verrichte werkzaamheden. Groenvastbouw heeft het recht de overeenkomst met onmiddellijke ingang te ontbinden indien de Klant in staat van faillissement wordt verklaard, surseance van betaling aanvraagt, of anderszins niet langer in staat is zijn verplichtingen na te komen.'
      },
      {
        title: '15. Toepasselijk recht en geschillen',
        content: 'Op alle overeenkomsten tussen Groenvastbouw en de Klant is Nederlands recht van toepassing. De toepasselijkheid van het Weens Koopverdrag wordt uitdrukkelijk uitgesloten. Alle geschillen die voortvloeien uit of verband houden met de overeenkomst zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in het arrondissement waar Groenvastbouw is gevestigd, tenzij de wet dwingend anders voorschrijft. Partijen zullen zich inspannen om geschillen in eerste instantie in onderling overleg op te lossen. Indien dit niet tot een oplossing leidt, kunnen partijen ervoor kiezen het geschil voor te leggen aan mediation voordat een gerechtelijke procedure wordt gestart. De bepalingen van deze algemene voorwaarden blijven ook na beëindiging van de overeenkomst van kracht voor zover de aard van de bepalingen dit meebrengt.'
      }
    ] : [
      {
        title: '1. Definitions',
        content: 'In these terms of service, the following terms are used. Groenvastbouw refers to the company that delivers high-performance prefabricated timber houses in partnership with Senmar, Portugal. The Customer is any natural or legal person who requests a quote, enters into an agreement, or otherwise uses the services of Groenvastbouw. Services include all work, deliveries, and performances that Groenvastbouw carries out for the Customer, including but not limited to designing, producing, and installing passive houses and extensions. The Agreement is any arrangement between Groenvastbouw and the Customer regarding the delivery of services. The Website refers to groenvastbouw.nl and all associated subdomains and pages.'
      },
      {
        title: '2. Applicability',
        content: 'These terms of service apply to all quotes, agreements, and deliveries of services by Groenvastbouw, unless expressly agreed otherwise in writing. Deviations from these terms are only valid if they have been expressly confirmed in writing by Groenvastbouw. The applicability of any purchasing or other terms of the Customer is expressly rejected. If any provision of these terms of service is void or annulled, the remaining provisions remain fully in force. Groenvastbouw and the Customer will then consult to agree on new provisions to replace the void or annulled provisions.'
      },
      {
        title: '3. Quotes and formation of agreements',
        content: 'All quotes from Groenvastbouw are without obligation and valid for thirty days, unless stated otherwise. An agreement is formed at the moment the Customer accepts a quote in writing or by email, or at the moment Groenvastbouw sends a written order confirmation. Groenvastbouw reserves the right to refuse an order without giving reasons. All prices in quotes are exclusive of VAT and other government levies, unless stated otherwise. The quote is based on the information provided by the Customer. If this information proves to be incorrect or incomplete, Groenvastbouw reserves the right to adjust the prices and conditions.'
      },
      {
        title: '4. Prices and payment',
        content: 'All prices are expressed in euros and are exclusive of VAT, unless stated otherwise. Groenvastbouw reserves the right to adjust prices if, after the formation of the agreement but before delivery, cost-increasing circumstances occur, such as changes in material costs, wages, or exchange rates. Payment must be made according to the agreed payment schedule, which typically consists of a down payment of thirty percent upon order, forty percent at the start of production, and thirty percent upon delivery. Payment must be made within fourteen days of the invoice date, unless agreed otherwise in writing. In case of late payment, the Customer is in default by operation of law and Groenvastbouw is entitled to charge the statutory commercial interest. All collection costs, both judicial and extrajudicial, are for the account of the Customer.'
      },
      {
        title: '5. Delivery time and execution',
        content: 'The delivery times stated by Groenvastbouw are indicative and not fatal deadlines, unless expressly agreed otherwise in writing. Exceeding the delivery time does not entitle the Customer to compensation or dissolution of the agreement, unless the delay is such that the Customer cannot reasonably be expected to maintain the agreement. Groenvastbouw will inform the Customer in a timely manner if it is foreseeable that the delivery time cannot be met. The delivery time starts after the Customer has provided all necessary information and documents and the down payment has been received. Groenvastbouw carries out the work to the best of its ability and according to the current state of the art. The execution takes place in cooperation with Senmar in Portugal, who is responsible for the CNC prefabrication of the wooden construction elements.'
      },
      {
        title: '6. Obligations of the Customer',
        content: 'The Customer is obliged to provide all information and documents that Groenvastbouw reasonably needs for the execution of the agreement in a timely manner and in the desired form. This includes, among other things, building plans, permits, soil surveys, and access to the construction site. The Customer must ensure that all necessary permits and approvals are obtained before work begins. The Customer is responsible for preparing the foundation and construction site according to Groenvastbouw\'s specifications. If the Customer fails to fulfill their obligations and this leads to delays or additional costs, these are for the account of the Customer. The Customer indemnifies Groenvastbouw against claims from third parties related to the execution of the work, insofar as these claims are the result of information or instructions provided by the Customer.'
      },
      {
        title: '7. Changes and additional work',
        content: 'Changes to the order desired by the Customer must be requested in writing. Groenvastbouw will inform the Customer about the consequences of the change for the price and delivery time. Changes will only be carried out after the Customer has agreed in writing to the adjusted quote. Additional work is invoiced based on the agreed hourly rates or fixed prices. If it becomes apparent during execution that additional work is necessary, Groenvastbouw will inform the Customer in a timely manner. Groenvastbouw is entitled to suspend execution until the Customer has agreed to the additional work. Changes made after production has started can lead to significant additional costs and delays.'
      },
      {
        title: '8. Delivery and acceptance',
        content: 'Delivery takes place at the moment the work is completed and the Customer has been notified in writing. The Customer must inspect the work within fourteen days of delivery and report any defects in writing. Minor defects that do not prevent use do not entitle the Customer to suspend acceptance. Groenvastbouw will remedy such defects within a reasonable period. If the Customer has not reported any defects within fourteen days of delivery, the work is deemed to have been accepted. After acceptance, the Customer can no longer invoke visible defects. Upon delivery, the Customer receives all relevant documents, including user manuals, maintenance advice, and warranty certificates.'
      },
      {
        title: '9. Warranty',
        content: 'Groenvastbouw guarantees that the services and materials provided meet the agreed specifications and are suitable for normal use. The warranty period is ten years for the construction and two years for installations and finishing, unless agreed otherwise. The warranty covers manufacturing defects and material defects, but not normal wear and tear, damage due to improper use, inadequate maintenance, or changes made by the Customer or third parties without permission from Groenvastbouw. To claim warranty, the Customer must immediately report the defect in writing to Groenvastbouw. Groenvastbouw will repair or replace the defect at its own discretion. If repair is not possible or disproportionately expensive, Groenvastbouw may choose to apply an appropriate price reduction. The warranty expires if the Customer fails to meet their payment obligations.'
      },
      {
        title: '10. Liability',
        content: 'Groenvastbouw is only liable for damage that is the direct result of an attributable failure in the performance of the agreement. Liability is limited to the amount paid out by the liability insurance in the relevant case, plus the deductible. If for any reason no payment is made, liability is limited to a maximum of the invoice amount of the agreement. Groenvastbouw is not liable for indirect damage, including consequential damage, lost profits, missed savings, and damage due to business interruption. Groenvastbouw is also not liable for damage resulting from incorrect or incomplete information provided by the Customer, inadequate preparation of the construction site, or actions by the Customer or third parties. The Customer indemnifies Groenvastbouw against all claims from third parties regarding damage related to the execution of the agreement.'
      },
      {
        title: '11. Force majeure',
        content: 'Groenvastbouw is not obliged to fulfill any obligation if it is prevented from doing so as a result of force majeure. Force majeure means any circumstance beyond the will and control of Groenvastbouw that permanently or temporarily prevents the performance of the agreement. This includes, among other things, natural disasters, war, terrorism, pandemics, strikes, government measures, transport problems, shortages of raw materials or energy, and disruptions at suppliers or Senmar. In case of force majeure, Groenvastbouw has the right to suspend the execution of the agreement or to dissolve the agreement in whole or in part, without being obliged to pay any compensation. If the force majeure lasts longer than three months, both parties have the right to dissolve the agreement in writing without any obligation to pay compensation.'
      },
      {
        title: '12. Intellectual property',
        content: 'All intellectual property rights with respect to designs, drawings, calculations, advice, and other documents produced by Groenvastbouw rest with Groenvastbouw or its licensors. The Customer only acquires a right of use for the relevant project. The Customer is not permitted to reproduce, disclose, or make these documents available to third parties without prior written permission from Groenvastbouw. Groenvastbouw reserves the right to use the knowledge gained from the execution of the work for other purposes, insofar as no confidential information from the Customer is disclosed to third parties. The Customer grants Groenvastbouw permission to use photos and descriptions of the completed project for marketing purposes, unless the Customer objects in writing.'
      },
      {
        title: '13. Confidentiality',
        content: 'Both parties undertake to maintain confidentiality of all confidential information obtained from each other or from other sources in the context of the agreement. Information is considered confidential if this has been communicated by the other party or if this follows from the nature of the information. Groenvastbouw will not provide confidential information from the Customer to third parties without prior written permission, except insofar as this is necessary for the execution of the agreement, such as sharing technical specifications with Senmar. The confidentiality obligation does not apply to information that is publicly known without breach of the confidentiality obligation, that the receiving party already knew before it was provided, or that must be provided on the basis of a legal obligation.'
      },
      {
        title: '14. Dissolution and termination',
        content: 'If a party fails to fulfill its obligations, the other party has the right to dissolve the agreement in whole or in part, unless the failure, given its special nature or minor significance, does not justify this dissolution. Dissolution can only take place after the defaulting party has been given written notice of default and a reasonable period has been given to remedy the failure. In case of dissolution due to the Customer, Groenvastbouw is entitled to compensation for all costs already incurred and lost profits. In case of dissolution due to Groenvastbouw, the Customer is entitled to a refund of amounts already paid, reduced by the value of work already performed. Groenvastbouw has the right to dissolve the agreement with immediate effect if the Customer is declared bankrupt, applies for suspension of payments, or is otherwise no longer able to fulfill their obligations.'
      },
      {
        title: '15. Applicable law and disputes',
        content: 'Dutch law applies to all agreements between Groenvastbouw and the Customer. The applicability of the Vienna Sales Convention is expressly excluded. All disputes arising from or related to the agreement will be exclusively submitted to the competent court in the district where Groenvastbouw is located, unless the law mandatorily prescribes otherwise. Parties will make efforts to resolve disputes through mutual consultation in the first instance. If this does not lead to a solution, parties may choose to submit the dispute to mediation before starting legal proceedings. The provisions of these terms of service remain in force even after termination of the agreement insofar as the nature of the provisions requires this.'
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
              {language === 'nl' ? 'Vragen over deze voorwaarden?' : 'Questions about these terms?'}
            </h3>
            <p className="text-[#2a3439] mb-4">
              {language === 'nl'
                ? 'Neem gerust contact met ons op als u vragen heeft over onze algemene voorwaarden.'
                : 'Feel free to contact us if you have questions about our terms of service.'}
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
