import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import RollingGallery from '@/components/RollingGallery';

export default function Projects() {
  const { language } = useLanguage();

  const content = {
    backHome: language === 'nl' ? 'Terug naar Home' : 'Back to Home',
    title: language === 'nl' ? 'Onze Projecten' : 'Our Projects',
    subtitle: language === 'nl' 
      ? 'Bekijk onze gerealiseerde passiefhuis projecten en lopende constructies'
      : 'View our realized passive house projects and ongoing constructions',
    completedTitle: language === 'nl' ? 'Voltooide Projecten' : 'Completed Projects',
    completedDesc: language === 'nl'
      ? 'Hoogperformante passiefhuizen en extensies gerealiseerd in samenwerking met Senmar'
      : 'High-performance passive houses and extensions realized in partnership with Senmar',
    constructionTitle: language === 'nl' ? 'In Constructie' : 'Under Construction',
    constructionDesc: language === 'nl'
      ? 'Lopende projecten: van productie tot montage'
      : 'Ongoing projects: from production to assembly',
  };

  const completedProjects = [
    { src: '/project-horta-spanje-passief-huis-voltooid.jpg', alt: 'Horta Spanje - Passief huis voltooid' },
    { src: '/project-horta-spanje-passief-huis-exterieur.jpg', alt: 'Horta Spanje - Passief huis exterieur' },
    { src: '/project-horta-spanje-passief-huis-detail.jpg', alt: 'Horta Spanje - Passief huis detail' },
    { src: '/project-horta-spanje-passief-huis-zijkant.jpg', alt: 'Horta Spanje - Passief huis zijkant' },
    { src: '/project-les-arcs-chalet-extensie-voltooid.jpg', alt: 'Les Arcs - Chalet extensie voltooid' },
    { src: '/project-les-arcs-chalet-buitenkant.jpg', alt: 'Les Arcs - Chalet buitenkant' },
    { src: '/project-les-arcs-chalet-detail.jpg', alt: 'Les Arcs - Chalet detail' },
    { src: '/project-les-arcs-chalet-zijkant.jpg', alt: 'Les Arcs - Chalet zijkant' },
    { src: '/project-sky-chalet-extensie-voltooid.jpg', alt: 'Sky Chalet - Extensie voltooid' },
    { src: '/project-sky-chalet-buitenkant.jpg', alt: 'Sky Chalet - Buitenkant' },
    { src: '/project-sky-chalet-detail.jpg', alt: 'Sky Chalet - Detail' },
    { src: '/project-sky-chalet-zijkant.jpg', alt: 'Sky Chalet - Zijkant' },
    { src: '/project-rav-zweden-extensie-voltooid.jpg', alt: 'Rav Zweden - Extensie voltooid' },
    { src: '/project-rav-zweden-buitenkant.jpg', alt: 'Rav Zweden - Buitenkant' },
    { src: '/project-pier-nederland-waterkant-woning.jpg', alt: 'Pier Nederland - Waterkant woning' },
    { src: '/project-hugo-nederland-passief-huis.png', alt: 'Hugo Nederland - Passief huis' },
    { src: '/project-ioan-ijsland-passief-huis-voltooid.jpg', alt: 'Ioan IJsland - Passief huis voltooid' },
    { src: '/project-ioan-ijsland-exterieur.jpg', alt: 'Ioan IJsland - Exterieur' },
    { src: '/project-ioan-ijsland-detail.jpg', alt: 'Ioan IJsland - Detail' },
    { src: '/project-ioan-ijsland-zijkant.jpg', alt: 'Ioan IJsland - Zijkant' },
    { src: '/project-ioan-ijsland-buitenkant.jpg', alt: 'Ioan IJsland - Buitenkant' },
  ];

  const underConstructionProjects = [
    { src: '/project-constructie-externe-muur-isolatie-1.jpg', alt: 'Constructie - Externe muur isolatie fase 1' },
    { src: '/project-constructie-externe-muur-isolatie-2.jpg', alt: 'Constructie - Externe muur isolatie fase 2' },
    { src: '/project-rav-zweden-constructie-fase-1.jpg', alt: 'Rav Zweden - Constructie fase 1' },
    { src: '/project-rav-zweden-constructie-fase-2.jpg', alt: 'Rav Zweden - Constructie fase 2' },
    { src: '/project-rav-zweden-constructie-fase-3.jpg', alt: 'Rav Zweden - Constructie fase 3' },
    { src: '/project-rav-zweden-constructie-fase-4.jpg', alt: 'Rav Zweden - Constructie fase 4' },
    { src: '/project-rav-zweden-constructie-render.png', alt: 'Rav Zweden - Constructie render' },
    { src: '/project-les-arcs-constructie-begin.jpg', alt: 'Les Arcs - Constructie begin' },
    { src: '/project-les-arcs-constructie-frame.jpg', alt: 'Les Arcs - Constructie frame' },
    { src: '/project-les-arcs-constructie-montage.jpg', alt: 'Les Arcs - Constructie montage' },
    { src: '/project-les-arcs-constructie-detail.jpg', alt: 'Les Arcs - Constructie detail' },
    { src: '/project-les-arcs-constructie-fase.jpg', alt: 'Les Arcs - Constructie fase' },
    { src: '/project-les-arcs-constructie-voortgang.jpg', alt: 'Les Arcs - Constructie voortgang' },
    { src: '/project-sky-chalet-constructie-begin.jpg', alt: 'Sky Chalet - Constructie begin' },
    { src: '/project-sky-chalet-constructie-frame.jpg', alt: 'Sky Chalet - Constructie frame' },
    { src: '/project-alex-houten-frame-constructie-1.jpg', alt: 'Alex - Houten frame constructie fase 1' },
    { src: '/project-alex-houten-frame-constructie-2.jpg', alt: 'Alex - Houten frame constructie fase 2' },
    { src: '/project-alex-houten-frame-constructie-3.jpg', alt: 'Alex - Houten frame constructie fase 3' },
    { src: '/project-alex-houten-frame-constructie-4.jpg', alt: 'Alex - Houten frame constructie fase 4' },
    { src: '/project-giulio-constructie-render-1.png', alt: 'Giulio - Constructie render 1' },
    { src: '/project-giulio-constructie-render-2.png', alt: 'Giulio - Constructie render 2' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/bouwplaats-montage-houten-frame.jpg)' }}
        />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Back Button */}
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-gray-300 hover:text-[#A4D65E] transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              {content.backHome}
            </a>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{content.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Completed Projects Gallery */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/project-horta-spanje-passief-huis-voltooid.jpg)' }}
        />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">{content.completedTitle}</h2>
            <p className="text-lg text-gray-300">
              {content.completedDesc.split('Senmar')[0]}
              <a 
                href="https://www.senmar.pt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A4D65E] hover:text-[#8BC34A] font-semibold underline decoration-[#A4D65E] underline-offset-2 transition-colors"
              >
                Senmar
              </a>
              {content.completedDesc.split('Senmar')[1]}
            </p>
          </div>
          
          <RollingGallery
            images={completedProjects}
            speed={30}
            height="400px"
          />
        </div>
      </section>

      {/* Under Construction Gallery */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/project-rav-zweden-constructie-fase-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-background" style={{ zIndex: -1 }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">{content.constructionTitle}</h2>
            <p className="text-lg text-gray-300">{content.constructionDesc}</p>
          </div>
          
          <RollingGallery
            images={underConstructionProjects}
            speed={35}
            height="400px"
          />
        </div>
      </section>
    </div>
  );
}
