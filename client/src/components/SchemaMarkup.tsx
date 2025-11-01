import { useLanguage } from '@/contexts/LanguageContext';

export default function SchemaMarkup() {
  const { language } = useLanguage();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Groenvastbouw",
    "url": "https://groenvastbouw.nl",
    "logo": "https://groenvastbouw.nl/logo-icon.png",
    "description": language === 'nl' 
      ? "Groenvastbouw bouwt hoogwaardige passieve huizen met Senmar technologie uit Portugal. Energie-efficiënt, duurzaam en betaalbaar."
      : "Groenvastbouw builds high-quality passive houses with Senmar technology from Portugal. Energy-efficient, sustainable and affordable.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wageningen",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-6-29841297",
      "contactType": "customer service",
      "email": "info@groenvastbouw.nl",
      "availableLanguage": ["nl", "en"]
    },
    "sameAs": [
      "https://wa.me/31629841297"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Groenvastbouw",
    "image": "https://groenvastbouw.nl/logo-icon.png",
    "@id": "https://groenvastbouw.nl",
    "url": "https://groenvastbouw.nl",
    "telephone": "+31-6-29841297",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Wageningen",
      "addressRegion": "Gelderland",
      "postalCode": "",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.9692,
      "longitude": 5.6654
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://wa.me/31629841297"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Passive House Construction",
    "provider": {
      "@type": "Organization",
      "name": "Groenvastbouw"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Passive House Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OPTIMAL Passive House",
            "description": "High performance passive house structure with R-value 5.7"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PASSIVE House",
            "description": "Premium performance passive house structure with R-value 8.5"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SUPER PASSIVE House",
            "description": "Passivhaus certified structure with R-value 11.4"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
