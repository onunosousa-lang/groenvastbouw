import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import RollingGallery from '@/components/RollingGallery';

export default function FeaturedProjects() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Onze Projecten' : 'Our Projects',
    subheadline: language === 'nl' ? 'Bekijk onze gerealiseerde passiefhuis projecten' : 'View our realized passive house projects',
    cta: language === 'nl' ? 'Bekijk Alle Projecten' : 'View All Projects',
  };

  const completedProjects = [
    { src: '/project-horta-spanje-passief-huis-voltooid.jpg', alt: 'Horta Spanje - Passief huis voltooid' },
    { src: '/project-les-arcs-chalet-extensie-voltooid.jpg', alt: 'Les Arcs chalet extensie voltooid' },
    { src: '/project-sky-chalet-extensie-voltooid.jpg', alt: 'Sky chalet extensie voltooid' },
    { src: '/project-rav-zweden-extensie-voltooid.jpg', alt: 'Rav Zweden extensie voltooid' },
    { src: '/project-pier-nederland-waterkant-woning.jpg', alt: 'Pier Nederland waterkant woning' },
    { src: '/project-ioan-ijsland-passief-huis-voltooid.jpg', alt: 'Ioan IJsland passief huis voltooid' },
    { src: '/project-hugo-nederland-passief-huis.png', alt: 'Hugo Nederland passief huis' },
    { src: '/project-horta-spanje-passief-huis-exterieur.jpg', alt: 'Horta Spanje exterieur' },
    { src: '/project-les-arcs-chalet-buitenkant.jpg', alt: 'Les Arcs chalet buitenkant' },
    { src: '/project-sky-chalet-buitenkant.jpg', alt: 'Sky chalet buitenkant' },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/bouwplaats-montage-houten-frame.jpg)' }}
      />
      <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">{content.headline}</h2>
            <p className="text-lg text-[#2a3439] leading-relaxed">{content.subheadline}</p>
          </div>
          <Link href="/projects">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-[#8edb38] text-[#2a3439] rounded-lg font-semibold hover:bg-[#8edb38] transition-colors whitespace-nowrap">
              {content.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>

        {/* Rolling Gallery */}
        <RollingGallery
          images={completedProjects}
          speed={35}
          height="350px"
        />
      </div>
    </section>
  );
}
