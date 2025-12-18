import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import SchemaMarkup from "./components/SchemaMarkup";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PrefabBenefits = lazy(() => import("./pages/PrefabBenefits"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Loader2 className="h-12 w-12 animate-spin text-[#7FB956]" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/projecten" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/why-us" component={WhyUs} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/prefab-benefits" component={PrefabBenefits} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <SchemaMarkup />
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
