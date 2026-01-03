import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export default function FeaturedProjects() {
  const { language } = useLanguage();

  const content = {
    headline: language === 'nl' ? 'Gerealiseerde Projecten' : 'Realized Projects',
    subheadline: language === 'nl' ? 'Bekijk onze recente passiefhuis projecten' : 'View our recent passive house projects',
    cta: language === 'nl' ? 'Bekijk Alle Projecten' : 'View All Projects',
    
    projects: [
      {
        title: language === 'nl' ? 'Horta Spanje - Passief Huis' : 'Horta Spain - Passive House',
        location: language === 'nl' ? 'Spanje' : 'Spain',
        image: '/images/horhespain(13).jpg',
        tag: 'Passive House',
        description: language === 'nl' ? 'Luxe passiefhuis met panoramisch uitzicht' : 'Luxury passive house with panoramic views'
      },
      {
        title: language === 'nl' ? 'Rav Zweden - Moderne Extensie' : 'Rav Sweden - Modern Extension',
        location: language === 'nl' ? 'Zweden' : 'Sweden',
        image: '/images/rav_sweden(3).jpg',
        tag: 'Residential',
        description: language === 'nl' ? 'Moderne uitbreiding met Senmar technologie' : 'Modern extension with Senmar technology'
      },
      {
        title: language === 'nl' ? 'Sky Chalet Extensie' : 'Sky Chalet Extension',
        location: language === 'nl' ? 'Alpen' : 'Alps',
        image: '/images/Sky_shaletextension(17).jpg',
        tag: 'Residential',
        description: language === 'nl' ? 'Bergchalet extensie met extreme isolatie' : 'Mountain chalet extension with extreme insulation'
      },
      {
        title: language === 'nl' ? 'Les Arcs Chalet Extensie' : 'Les Arcs Chalet Extension',
        location: language === 'nl' ? 'Frankrijk' : 'France',
        image: '/images/Les_arcs_shalet_extension(22).jpg',
        tag: 'Residential',
        description: language === 'nl' ? 'Luxe chalet met passiefhuis standaard' : 'Luxury chalet with passive house standard'
      },
      {
        title: language === 'nl' ? 'Pier Nederland - Waterkant Woning' : 'Pier Netherlands - Waterfront Home',
        location: language === 'nl' ? 'Nederland' : 'Netherlands',
        image: '/images/nl_Pier(2).jpg',
        tag: 'Residential',
        description: language === 'nl' ? 'Waterkant woning met thermisch comfort' : 'Waterfront home with thermal comfort'
      },
      {
        title: language === 'nl' ? 'Rav Zweden - Bouwfase' : 'Rav Sweden - Construction Phase',
        location: language === 'nl' ? 'Zweden' : 'Sweden',
        image: '/images/rav_sweden(1).png',
        tag: 'Construction',
        description: language === 'nl' ? 'Bouwproces van Senmar prefab structuur' : 'Construction process of Senmar prefab structure'
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{content.subheadline}</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-[#9abb32] font-semibold hover:text-[#7a9428] transition-colors">
            {content.cta} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = '/images/hero-groenvastbouw.jpg' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 group-hover:from-gray-800/10 group-hover:to-gray-900/10 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                  {project.tag}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#9abb32] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">{project.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {project.location}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center text-[#9abb32] font-semibold hover:text-[#7a9428] transition-colors">
            {content.cta} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
