import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import ExtendedFAQ from "./pages/ExtendedFAQ";
import SchemaMarkup from "./components/SchemaMarkup";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/projecten" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/faq" component={ExtendedFAQ} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
