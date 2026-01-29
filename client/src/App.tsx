import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import SchemaMarkup from "./components/SchemaMarkup";
import { Suspense, lazy, useState, createContext, useContext } from "react";
import { Loader2 } from "lucide-react";
import ContactFormModal from "./components/ContactFormModal";

// Create context for contact form modal
export const ContactModalContext = createContext<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({ isOpen: false, openModal: () => {}, closeModal: () => {} });

export const useContactModal = () => useContext(ContactModalContext);

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const WhatWeOffer = lazy(() => import("./pages/WhatWeOffer"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PrefabBenefits = lazy(() => import("./pages/PrefabBenefits"));
const OurTechnology = lazy(() => import("./pages/OurTechnology"));
const OurOffer = lazy(() => import("./pages/OurOffer"));
const Solutions = lazy(() => import("./pages/Solutions"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dcdcdc]">
      <Loader2 className="h-12 w-12 animate-spin text-[#8eb564]" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/projecten" component={Projects} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/why-us" component={WhyUs} />
        <Route path="/what-we-offer" component={WhatWeOffer} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/prefab-benefits" component={PrefabBenefits} />
        <Route path="/our-technology" component={OurTechnology} />
        <Route path="/our-offer" component={OurOffer} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <ContactModalContext.Provider value={{
            isOpen: isContactModalOpen,
            openModal: () => setIsContactModalOpen(true),
            closeModal: () => setIsContactModalOpen(false),
          }}>
            <TooltipProvider>
              <SchemaMarkup />
              <Toaster />
              <Router />
              <ContactFormModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)}
              />
            </TooltipProvider>
          </ContactModalContext.Provider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
// Force rebuild 1768141604
