export const translations = {
  nl: {
    // Navigation
    nav_about: "Over Ons",
    nav_services: "Systemen",
    nav_senmar: "Technologie",
    nav_benefits: "Oplossingen",
    nav_contact: "Contact",
    
    // Hero
    hero_title: "De toekomst van bouwen",
    hero_subtitle: "Hoogwaardige passieve systemen met Senmar technologie.",
    hero_cta: "Bekijk Systemen",
    
    // About
    about_title: "Technische Perfectie",
    about_subtitle: "In samenwerking met Senmar Portugal",
    about_mission_title: "Onze Missie",
    about_mission_text: "Duurzame, hoogwaardige woningbouw toegankelijk maken door geavanceerde prefabricage.",
    about_value_sustainability: "Duurzaamheid",
    about_value_quality: "Precisie",
    about_value_transparency: "Transparantie",
    about_value_service: "Expertise",
    
    // Contact
    contact_title: "Project Analyse",
    contact_subtitle: "Bespreek uw specificaties",
    contact_name: "Naam",
    contact_email: "E-mail",
    contact_phone: "Telefoon",
    contact_message: "Vertel ons over uw project",
    contact_submit: "Aanvraag Versturen",
    contact_info_title: "Contactgegevens",
    
    // Footer
    footer_links: "Index",
    footer_contact: "Contact",
    footer_rights: "Alle rechten voorbehouden",
  },
  
  en: {
    // Navigation
    nav_about: "About Us",
    nav_services: "Systems",
    nav_senmar: "Technology",
    nav_benefits: "Solutions",
    nav_contact: "Contact",
    
    // Hero
    hero_title: "The future of building",
    hero_subtitle: "High-performance passive systems with Senmar technology.",
    hero_cta: "View Systems",
    
    // About
    about_title: "Technical Perfection",
    about_subtitle: "In partnership with Senmar Portugal",
    about_mission_title: "Our Mission",
    about_mission_text: "Making sustainable, high-performance housing accessible through advanced prefabrication.",
    about_value_sustainability: "Sustainability",
    about_value_quality: "Precision",
    about_value_transparency: "Transparency",
    about_value_service: "Expertise",
    
    // Contact
    contact_title: "Project Analysis",
    contact_subtitle: "Discuss your specifications",
    contact_name: "Name",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_message: "Tell us about your project",
    contact_submit: "Send Inquiry",
    contact_info_title: "Contact Details",
    
    // Footer
    footer_links: "Index",
    footer_contact: "Contact",
    footer_rights: "All rights reserved",
  }
};

export type Language = 'nl' | 'en';
export type TranslationKey = keyof typeof translations.nl;
