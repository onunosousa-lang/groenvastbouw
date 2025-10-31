import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Home, Calendar, MapPin } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();

  const chocolateMakersImages = [
    '/projects/chocolatemakers/IMG-20251015-WA0005.jpg',
    '/projects/chocolatemakers/IMG-20251015-WA0006.jpg',
    '/projects/chocolatemakers/IMG-20251015-WA0008.jpg',
    '/projects/chocolatemakers/IMG-20251015-WA0009.jpg',
    '/projects/chocolatemakers/IMG-20251016-WA0029.jpg',
    '/projects/chocolatemakers/IMG-20251016-WA0030.jpg',
    '/projects/chocolatemakers/IMG-20251016-WA0031.jpg',
    '/projects/chocolatemakers/IMG-20251016-WA0032.jpg',
    '/projects/chocolatemakers/IMG-20251016-WA0038.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0005.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0007.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0008.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0009.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0010.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0011.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0012.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0013.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0014.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0015.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0016.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0017.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0018.jpg',
    '/projects/chocolatemakers/IMG-20251019-WA0019.jpg',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-900 to-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'nl' ? 'Onze Projecten' : 'Our Projects'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              {language === 'nl' 
                ? 'Ontdek onze gerealiseerde projecten en zie de kwaliteit van ons werk' 
                : 'Discover our completed projects and see the quality of our work'}
            </p>
          </div>
        </div>
      </section>

      {/* Chocolate Makers Project */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Building2 size={40} />
                <h2 className="text-4xl font-bold">Chocolate Makers</h2>
              </div>
              <p className="text-xl text-green-100">
                {language === 'nl' 
                  ? 'Passief kantoorgebouw met hoogwaardige afwerking' 
                  : 'Passive office building with high-quality finishing'}
              </p>
            </div>

            <CardContent className="p-8">
              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Home className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === 'nl' ? 'Type' : 'Type'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'nl' ? 'Commercieel gebouw' : 'Commercial building'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Calendar className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === 'nl' ? 'Jaar' : 'Year'}
                    </h3>
                    <p className="text-gray-600">2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === 'nl' ? 'Locatie' : 'Location'}
                    </h3>
                    <p className="text-gray-600">Nederland</p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'nl' ? 'Over dit project' : 'About this project'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'nl'
                    ? 'Een modern passief kantoorgebouw gebouwd met Senmar technologie. Dit project toont onze expertise in commerciële constructie met focus op duurzaamheid en energie-efficiëntie.'
                    : 'A modern passive office building constructed with Senmar technology. This project showcases our expertise in commercial construction with a focus on sustainability and energy efficiency.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'nl'
                    ? 'Het gebouw voldoet aan de hoogste normen van passive house certificering en biedt een comfortabele en gezonde werkomgeving.'
                    : 'The building meets the highest standards of passive house certification and provides a comfortable and healthy working environment.'}
                </p>
              </div>

              {/* Image Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'nl' ? 'Project Galerij' : 'Project Gallery'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chocolateMakersImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    >
                      <img 
                        src={image} 
                        alt={`Chocolate Makers project ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">
              {language === 'nl' ? 'Interesse in een vergelijkbaar project?' : 'Interested in a similar project?'}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'nl' 
                ? 'Neem contact met ons op om de mogelijkheden te bespreken' 
                : 'Contact us to discuss the possibilities'}
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              {language === 'nl' ? 'Neem Contact Op' : 'Get In Touch'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
