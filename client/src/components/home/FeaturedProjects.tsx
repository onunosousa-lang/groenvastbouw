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
        title: 'Modern Villa',
        location: 'Utrecht',
        image: '/images/project1.jpg',
        tag: 'Passive House'
      },
      {
        title: 'Eco Office',
        location: 'Amsterdam',
        image: '/images/project2.jpg',
        tag: 'Office'
      },
      {
        title: 'Family Home',
        location: 'Rotterdam',
        image: '/images/project3.jpg',
        tag: 'Residential'
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.headline}</h2>
            <p className="text-xl text-gray-600">{content.subheadline}</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
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
                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder until image loads */}
                {/* In a real implementation, we would use actual images here. 
                    For now, we'll use a colored placeholder if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-10 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                  {project.tag}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {project.location}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
            {content.cta} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
