import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        {/* Back to Home Button */}
        <div className="max-w-6xl mx-auto mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold transition-colors group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Terug naar Home
          </a>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Over de Oprichter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eco-constructie specialist met meer dan 10 jaar internationale ervaring in duurzame bouw
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-2xl opacity-20"></div>
                  <img
                    src="/nuno-sousa-profile.jpg"
                    alt="Nuno Machado e Sousa"
                    className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Nuno Machado e Sousa
                </h2>
                <p className="text-xl text-green-600 font-semibold mb-6">
                  Eco-Constructie Specialist | Projectleider
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Van ambachtelijk timmerman tot projectleider met uitgebreide expertise in houtskeletbouw, passieve constructie en energie-efficiënte systemen. Heeft diverse projecten gerealiseerd in Portugal, Frankrijk, het VK en Nederland, variërend van ecologische woningen tot commerciële gebouwen.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:0629841297" className="text-gray-700 hover:text-green-600 transition-colors">
                      06 2984 1297
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:info@groenvastbouw.nl" className="text-gray-700 hover:text-green-600 transition-colors">
                      info@groenvastbouw.nl
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Wageningen, Nederland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">KvK: 75308045</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ervaring</h2>
            <div className="space-y-6">
              {/* Current Role */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Zelfstandig Aannemer (ZZP'er)</h3>
                    <p className="text-green-600 font-semibold">2019 - Heden</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Nederland
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sinds 2019 actief als zelfstandig aannemer in Nederland. Gespecialiseerd in energie-efficiënte bouwmethoden en duurzame renovatie. Heeft diverse projecten gerealiseerd in Portugal, Frankrijk, het VK en Nederland, variërend van ecologische woningen tot commerciële gebouwen.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Bouwer en projectleider voor 202 m² passief kantoorpand in Amsterdam</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Zonne-PV installaties op residentiële en commerciële gebouwen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Volledige naleving van Nederlandse veiligheidsnormen (VCA)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Volledig verzekerd en gecertificeerd</span>
                  </div>
                </div>
              </div>

              {/* France Experience */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Freelance Bouwer</h3>
                    <p className="text-gray-600 font-semibold">2011 - 2016</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Frankrijk
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Zelfstandig gewerkt aan timmer- en renovatieprojecten. Eco-constructietechnieken toegepast: houtskeletstructuren, klei/kalk pleisterwerk, natuurlijke isolatie. Energie-efficiënte retrofits voltooid met luchtdichte isolatie en duurzame materialen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opleiding</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Batipole Limoux, Frankrijk</h3>
                  <p className="text-green-600 font-semibold mb-4">2013 - 2014</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Intensief professioneel trainingsprogramma in ecologische bouwmethoden. Diploma's behaald in: Houtskeletbouw, Pleister & Natuurlijke Isolatie, Luchtdichte Constructie (folie & tape), Raamplaatsing.
                  </p>
                  <p className="text-gray-600 italic">
                    Frans Level 5 Diploma (erkend als Level 3 in Europa). Training direct toegepast in projecten in Frankrijk, Portugal, Spanje, en later het VK & Nederland.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Construction */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Constructie & Timmerwerk</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Houtskeletbouw</li>
                  <li>• Structureel timmerwerk</li>
                  <li>• Betonnen funderingen</li>
                  <li>• Renovatie binnen & buiten</li>
                  <li>• Raamplaatsing</li>
                </ul>
              </div>

              {/* Ecological */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ecologisch Bouwen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strobouw</li>
                  <li>• Natuurlijke isolatie</li>
                  <li>• Luchtdichte systemen</li>
                  <li>• Klei & kalk pleisterwerk</li>
                  <li>• Energie-efficiënte upgrades</li>
                </ul>
              </div>

              {/* Renewable Energy */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hernieuwbare Energie</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zonne-PV installatie</li>
                  <li>• Residentieel & commercieel</li>
                  <li>• Teamleiding projecten</li>
                  <li>• Energie-efficiëntie</li>
                  <li>• Duurzame systemen</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Talen</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🇬🇧</div>
                  <p className="font-semibold text-gray-900">Engels</p>
                  <p className="text-sm text-gray-600">Vloeiend</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🇫🇷</div>
                  <p className="font-semibold text-gray-900">Frans</p>
                  <p className="text-sm text-gray-600">Vloeiend</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🇵🇹</div>
                  <p className="font-semibold text-gray-900">Portugees</p>
                  <p className="text-sm text-gray-600">Basis</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🇪🇸</div>
                  <p className="font-semibold text-gray-900">Spaans</p>
                  <p className="text-sm text-gray-600">Gemiddeld</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Klaar om uw duurzame droomproject te realiseren?
            </h3>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Neem Contact Op
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
