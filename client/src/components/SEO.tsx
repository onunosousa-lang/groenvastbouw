import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export default function SEO({
  title = 'Groenvastbouw - Duurzame Passieve Huizen | Nuchter bouwen. Slim wonen.',
  description = 'Groenvastbouw bouwt energiezuinige passieve huizen met Senmar technologie. Vanaf €1,100/m². Turnkey service of alleen structuur. Duurzaam, betaalbaar en hoogwaardig.',
  keywords = 'passieve huizen, passiefhuis, energiezuinig bouwen, duurzame woningen, Senmar, prefab huizen, houtbouw, Nederland, groenvastbouw, passive house, energiebesparing',
  ogImage = '/logo-transparent.png',
  url = 'https://groenvastbouw.nl'
}: SEOProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Groenvastbouw');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Dutch, English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Groenvastbouw', true);
    updateMetaTag('og:locale', 'nl_NL', true);
    updateMetaTag('og:locale:alternate', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, ogImage, url]);

  return null;
}
