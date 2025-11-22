export const translations = {
  nl: {
    nav_about: "Over Ons",
    nav_services: "Systemen",
    nav_senmar: "Technologie",
    nav_benefits: "Oplossingen",
    nav_projects: "Projecten",
    nav_why_us: "Waarom Ons",
    nav_contact: "Contact",
    
    hero_title: "De toekomst van bouwen",
    hero_subtitle: "Hoogwaardige passieve systemen met Senmar technologie.",
    hero_cta: "Bekijk Systemen",
    
    about_title: "Technische Perfectie",
    about_subtitle: "In samenwerking met Senmar Portugal",
    about_mission_title: "Onze Missie",
    about_mission_text: "Duurzame, hoogwaardige woningbouw toegankelijk maken door geavanceerde prefabricage.",
    
    senmar_title: "Technologie van Senmar Portugal",

    contact_title: "Project Analyse",
    contact_subtitle: "Bespreek uw specificaties",
    contact_name: "Naam",
    contact_email: "E-mail",
    contact_phone: "Telefoon",
    contact_message: "Vertel ons over uw project",
    contact_submit: "Aanvraag Versturen",
    contact_info_title: "Contactgegevens",
    
    footer_links: "Index",
    footer_contact: "Contact",
    footer_rights: "Alle rechten voorbehouden",
  },
  
  en: {
    nav_about: "About Us",
    nav_services: "Systems",
    nav_senmar: "Technology",
    nav_benefits: "Solutions",
    nav_projects: "Projects",
    nav_why_us: "Why Us",
    nav_contact: "Contact",
    
    hero_title: "The future of building",
    hero_subtitle: "High-performance passive systems with Senmar technology.",
    hero_cta: "View Systems",
    
    about_title: "Technical Perfection",
    about_subtitle: "In partnership with Senmar Portugal",
    about_mission_title: "Our Mission",
    about_mission_text: "Making sustainable, high-performance housing accessible through advanced prefabrication.",
    
    senmar_title: "Technology from Senmar Portugal",
    
    contact_title: "Project Analysis",
    contact_subtitle: "Discuss your specifications",
    contact_name: "Name",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_message: "Tell us about your project",
    contact_submit: "Send Inquiry",
    contact_info_title: "Contact Details",
    
    footer_links: "Index",
    footer_contact: "Contact",
    footer_rights: "All rights reserved",
  }
};

export type Language = 'nl' | 'en';
export type TranslationKey = keyof typeof translations.nl;
