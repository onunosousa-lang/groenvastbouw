import { useState } from 'react';
import { ChevronDown, ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSections = [
    {
      title: "Passive House Basics",
      questions: [
        {
          question: "What is a passive house?",
          answer: "A passive house is a rigorous building standard for very energy-efficient buildings, focused on low energy use, high comfort and excellent indoor air quality. It is a performance standard that can be applied to many building types, not a single product."
        },
        {
          question: "How does a passive house work?",
          answer: "Passive houses minimise energy demand through a highly insulated, airtight building envelope with minimal thermal bridges. They use balanced ventilation with heat recovery and passive solar gains so that only a small heating and cooling system is needed."
        },
        {
          question: "How much energy can a passive house save?",
          answer: "Passive houses typically use about 75% less energy than an average new-build house and up to around 90% less than conventional older buildings. This can lead to very significant reductions in energy bills over the lifetime of the building."
        }
      ]
    },
    {
      title: "Groenvastbouw & Senmar",
      questions: [
        {
          question: "What does Groenvastbouw build with Senmar?",
          answer: "Groenvastbouw offers high-performance timber frame passive houses and other buildings in cooperation with the Senmar prefab system. The focus is on energy-efficient, sustainable and cost-effective homes for the Dutch market."
        },
        {
          question: "What is the Senmar prefab passive house system?",
          answer: "Senmar produces prefabricated timber frame elements in a controlled factory environment, engineered for high insulation, airtightness and minimal thermal bridges. These elements are transported to site and typically assembled into a weather-tight structure within days, depending on project size and logistics."
        },
        {
          question: "Why combine Groenvastbouw with Senmar?",
          answer: "Senmar delivers advanced prefab timber structures; Groenvastbouw combines these with Dutch regulations, local partners and project management. This combination provides a fast, high-quality route to passive houses that fit the Dutch market."
        }
      ]
    },
    {
      title: "Planning, Timing and Scope",
      questions: [
        {
          question: "What is the lead time from order to mounted structure?",
          answer: "For standard projects, an indicative lead time of about 3 months from order to mounting of the structural shell on site is realistic, subject to engineering, permits and factory planning. On site, assembly of the main structure normally takes around one to two weeks, depending on size and complexity."
        },
        {
          question: "Do you deliver shell only or fully finished?",
          answer: "Groenvastbouw can supply just the structural shell with preparation for façade cladding, or include cladding as part of the package, depending on the agreement. Roofs can be prepared for tiles (with battens) or delivered with other finishes such as flat-roof membranes."
        },
        {
          question: "What interior and installation options are possible?",
          answer: "Depending on the chosen package and local partners, the prefab structure can be combined with windows and doors, interior drywall, timber finishes and internal doors. Preparation for electrical points and plumbing is possible, and a fully fitted kitchen and bathroom can be arranged, but the exact scope is always project-specific."
        }
      ]
    },
    {
      title: "Prices and Budgets",
      questions: [
        {
          question: "What are the price indications per m²?",
          answer: "Groenvastbouw communicates starting prices from about €1,100 per m² for the structural part of a passive house as an indication. Total project costs depend on design, finishes, installations, groundworks and other local factors, so a project-specific analysis is always needed."
        },
        {
          question: "What factors influence the final cost?",
          answer: "Key factors are building size and shape, insulation level, façade and roof finishes, choice of windows and doors, installations and level of prefabrication. Local costs for foundations, utilities and landscaping also play an important role."
        }
      ]
    },
    {
      title: "For Developers, Investors and Architects",
      questions: [
        {
          question: "What is the realistic production capacity for Dutch projects?",
          answer: "The current factory capacity for our projects is in the order of around 100 m² of elements per production day, with an annual capacity in the range of roughly 20,000–25,000 m², and the possibility to scale further when needed. Capacity can be allocated flexibly between Portugal and export markets, with priority for larger or long-term projects."
        },
        {
          question: "How are large projects (20–50 units) managed?",
          answer: "For multi-unit projects, houses or modules are produced in sequence and transported as each unit is completed, then mounted one after another on site. This phased approach enables a controlled workflow and efficient use of cranes and assembly teams."
        },
        {
          question: "What is the maximum building height?",
          answer: "As a standard guideline, the prefab timber frame system is used for buildings up to three storeys high, for structural and safety reasons. Higher buildings would require a separate structural concept and project-specific engineering."
        },
        {
          question: "Can a local Dutch team be trained?",
          answer: "Yes, once there is a stable flow of projects, a local Dutch assembly team can be trained and certified to work with the system. Initial projects are normally assembled by the experienced Senmar team to ensure quality and knowledge transfer."
        },
        {
          question: "Can you use wood fibre insulation and other sustainable materials?",
          answer: "Yes, wood fibre insulation can be used in the wall and roof build-up as an option, in addition to more standard mineral wool. This generally has a higher material cost but offers ecological and comfort benefits."
        }
      ]
    },
    {
      title: "Regulations, Warranty and Service",
      questions: [
        {
          question: "Do the buildings comply with Eurocodes and Dutch regulations (Bouwbesluit/BENG)?",
          answer: "Buildings are engineered to meet the structural and energy requirements of the destination country, including Eurocodes and the relevant national regulations. In the Netherlands, BENG calculations and any additional certifications can be carried out based on the final design."
        },
        {
          question: "What is the structural warranty period?",
          answer: "Groenvastbouw works with a typical structural warranty period of around 10 years, in line with common European construction practice. For specific components such as windows, roofing and installations, the manufacturer's warranties apply."
        },
        {
          question: "How are complaints and defects handled?",
          answer: "In case of defects after assembly, clients can contact Groenvastbouw directly as the Dutch contact point for assessment and follow-up. Critical issues are treated with priority to minimise impact on the building's use and comfort."
        }
      ]
    },
    {
      title: "Next Steps",
      questions: [
        {
          question: "How do I start a project with Groenvastbouw?",
          answer: "You start by sharing your plot, wishes and budget via the contact options on the Groenvastbouw website. Together, the feasibility, preferred performance level and an indicative planning and budget are worked out for your project."
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors w-fit">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAQ – Passive Houses & Senmar System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Groenvastbouw offers high-performance timber frame passive houses in cooperation with the Senmar prefab system from Portugal. On this page you will find answers to the most common questions from private clients, developers and architects.
          </p>
        </div>

        {/* Top Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="/#contact" 
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <Mail size={20} />
            Contact Us
          </a>
          <a 
            href="https://wa.me/31629841297" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle size={20} />
            Chat via WhatsApp
          </a>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-10">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">
                Section {sectionIndex + 1} – {section.title}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div 
                      key={currentIndex}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
                    >
                      <button
                        className="w-full p-5 text-left flex justify-between items-center"
                        onClick={() => setOpenFaq(openFaq === currentIndex ? null : currentIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          Q{currentIndex + 1}. {faq.question}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-gray-500 transition-transform flex-shrink-0 ${openFaq === currentIndex ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === currentIndex && (
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Buttons */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Get in touch with us to discuss your passive house project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <Mail size={20} />
              Contact Us
            </a>
            <a 
              href="https://wa.me/31629841297" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Groenvastbouw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
