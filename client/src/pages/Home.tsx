import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, TrendingUp, Leaf, CheckCircle2, AlertCircle, ArrowRight, Target, Shield, Sparkles, Phone, Mail, Globe, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-green-500">{t('header.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="text-xs h-8"
              >
                <Languages className="h-3 w-3 mr-1" />
                {language === 'nl' ? 'EN' : 'NL'}
              </Button>
              <Badge variant="outline" className="text-xs">
                <Sparkles className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6 space-y-6 pb-32">
        
        {/* Elevator Pitch */}
        <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Target className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-green-500 mb-2">{t('elevator.title')}</h2>
                <p className="text-sm leading-relaxed text-foreground">
                  {t('elevator.text')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('probleem')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <AlertCircle className="h-3 w-3 mr-2 text-orange-500" />
                {t('nav.problem')}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('oplossing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-3 w-3 mr-2 text-green-500" />
                {t('nav.solution')}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('bewijs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="h-3 w-3 mr-2 text-blue-500" />
                {t('nav.proof')}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('bezwaren')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <CheckCircle2 className="h-3 w-3 mr-2 text-purple-500" />
                {t('nav.objections')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SECTIE 1: HET PROBLEEM */}
        <div id="probleem" className="scroll-mt-20">
          <Card className="border-orange-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                {t('problem.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <span className="text-orange-500">•</span>
                <span>{t('problem.labor')}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="text-orange-500">•</span>
                <span>{t('problem.costs')}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="text-orange-500">•</span>
                <span>{t('problem.regulations')}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="text-orange-500">•</span>
                <span>{t('problem.timeline')}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTIE 2: ONZE OPLOSSING */}
        <div id="oplossing" className="scroll-mt-20">
          <Card className="border-green-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                {t('solution.title')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{t('solution.subtitle')}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{language === 'nl' ? 'Fabriek' : 'Factory'}</div>
                  <div className="text-sm font-semibold">{t('solution.factory')}</div>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{language === 'nl' ? 'Capaciteit' : 'Capacity'}</div>
                  <div className="text-sm font-semibold">{t('solution.capacity')}</div>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{language === 'nl' ? 'Precisie' : 'Precision'}</div>
                  <div className="text-sm font-semibold">{t('solution.precision')}</div>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{language === 'nl' ? 'Certificering' : 'Certification'}</div>
                  <div className="text-sm font-semibold">{t('solution.certifications')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTIE 3: HET BEWIJS */}
        <div id="bewijs" className="scroll-mt-20 space-y-4">
          
          {/* Snelheid */}
          <Card className="border-blue-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                {t('speed.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">{t('speed.traditional')}</div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">12-18</div>
                    <div className="text-xs text-muted-foreground">{t('speed.months')}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-green-500 font-semibold">{t('speed.groenvastbouw')}</div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-4 rounded-lg border-2 border-green-500/50">
                    <div className="text-3xl font-bold text-green-500">4-6</div>
                    <div className="text-xs text-muted-foreground">{t('speed.months')}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-500">70% {language === 'nl' ? 'sneller' : 'faster'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-green-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                {t('pricing.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div>
                    <div className="text-sm font-semibold">{t('pricing.shell')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.shell.desc')}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-500 text-lg">€1.100</div>
                    <div className="text-xs text-muted-foreground">/m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <div className="text-sm font-semibold">{t('pricing.turnkey')}</div>
                    <div className="text-xs text-muted-foreground">{t('pricing.turnkey.desc')}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-500 text-lg">~€2.500</div>
                    <div className="text-xs text-muted-foreground">/m²</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-green-500">{t('pricing.tco')}</span> {t('pricing.tco.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Energy Levels */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                {t('energy.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-3 bg-muted/30 rounded-lg border border-border">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{t('energy.optimal')}</span>
                  <Badge variant="outline" className="text-xs">R-5.7</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{t('energy.optimal.desc')}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border-2 border-green-500/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-green-500">{t('energy.passive')}</span>
                  <Badge className="text-xs bg-green-500">R-8.5</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{t('energy.passive.desc')}</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg border border-border">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{t('energy.super')}</span>
                  <Badge variant="outline" className="text-xs">R-10.5</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{t('energy.super.desc')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Energy Comparison */}
          <Card className="border-green-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                {t('comparison.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-lg border border-green-500/30">
                <div className="text-center mb-3">
                  <div className="text-4xl font-black text-green-500 mb-1">7:1</div>
                  <p className="text-sm font-semibold">{t('comparison.ratio')}</p>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {t('comparison.ratio.desc')}
                </p>
              </div>

              {/* Real Example */}
              <div>
                <p className="text-sm font-semibold mb-3">{t('comparison.subtitle')}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="text-xs text-muted-foreground">{t('comparison.average')}</div>
                      <div className="text-sm font-medium">16.500 kWh/{language === 'nl' ? 'jaar' : 'year'}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-500">€4.950</div>
                      <div className="text-xs text-muted-foreground">{t('comparison.heating')}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border-2 border-green-500/50">
                    <div>
                      <div className="text-xs text-green-500 font-semibold">{t('comparison.groenvastbouw')}</div>
                      <div className="text-sm font-bold">2.250 kWh/{language === 'nl' ? 'jaar' : 'year'}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-green-500">€675</div>
                      <div className="text-xs text-muted-foreground">{t('comparison.heating')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-500">€4.275</div>
                    <div className="text-xs text-muted-foreground">{t('comparison.savings.annual')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">€128k</div>
                    <div className="text-xs text-muted-foreground">{t('comparison.savings.30y')}</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="text-xs space-y-2">
                <p className="font-semibold">{t('comparison.includes')}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('comparison.space')}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('comparison.water')}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('comparison.ventilation')}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('comparison.cooling')}</span>
                  </div>
                </div>
              </div>

              {/* Embodied Energy */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-xs font-semibold text-blue-500 mb-2">{t('comparison.embodied')}</p>
                <p className="text-xs text-muted-foreground">
                  {t('comparison.embodied.desc')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTIE 4: BEZWAREN AFHANDELEN */}
        <div id="bezwaren" className="scroll-mt-20">
          <Card className="border-purple-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-500" />
                {t('objections.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              
              {/* Objection 1 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj1')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">{t('objections.quality.q')}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj1' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj1' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">{language === 'nl' ? 'Antwoord:' : 'Answer:'}</p>
                    <p className="text-muted-foreground">
                      {t('objections.quality.a')}
                    </p>
                  </div>
                )}
              </div>

              {/* Objection 2 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj2')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">{t('objections.price.q')}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj2' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj2' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">{language === 'nl' ? 'Antwoord:' : 'Answer:'}</p>
                    <p className="text-muted-foreground">
                      {t('objections.price.a')}
                    </p>
                  </div>
                )}
              </div>

              {/* Objection 3 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj3')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">{t('objections.design.q')}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj3' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj3' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">{language === 'nl' ? 'Antwoord:' : 'Answer:'}</p>
                    <p className="text-muted-foreground">
                      {t('objections.design.a')}
                    </p>
                  </div>
                )}
              </div>

              {/* Objection 4 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj4')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">{t('objections.resale.q')}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj4' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj4' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">{language === 'nl' ? 'Antwoord:' : 'Answer:'}</p>
                    <p className="text-muted-foreground">
                      {t('objections.resale.a')}
                    </p>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Killer Arguments */}
        <Card className="border-green-500/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              {t('arguments.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="text-xs font-semibold text-green-500 mb-1">{t('arguments.speed')}</div>
              <p className="text-xs text-muted-foreground italic">{t('arguments.speed.text')}</p>
            </div>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="text-xs font-semibold text-green-500 mb-1">{t('arguments.price')}</div>
              <p className="text-xs text-muted-foreground italic">{t('arguments.price.text')}</p>
            </div>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="text-xs font-semibold text-green-500 mb-1">{t('arguments.efficiency')}</div>
              <p className="text-xs text-muted-foreground italic">{t('arguments.efficiency.text')}</p>
            </div>
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="text-xs font-semibold text-green-500 mb-1">{t('arguments.sustainability')}</div>
              <p className="text-xs text-muted-foreground italic">{t('arguments.sustainability.text')}</p>
            </div>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border">
        <div className="container py-4">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <div className="font-semibold text-green-500 mb-2">{t('footer.contact')}</div>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <a href="tel:0629841297" className="hover:text-green-500">06 2984 1297</a>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <a href="mailto:info@groenvastbouw.nl" className="hover:text-green-500">info@groenvastbouw.nl</a>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-green-500 mb-2">{t('footer.websites')}</div>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  <a href="https://groenvastbouw.nl" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">groenvastbouw.nl</a>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">senmar.pt</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-semibold text-green-500 mb-2">{t('footer.qr')}</div>
              <img src="/groenvastbouw-qr.png" alt="QR Code" className="h-16 w-16 rounded border border-border" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
