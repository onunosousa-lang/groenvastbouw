import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, TrendingUp, Leaf, CheckCircle2, AlertCircle, ArrowRight, Target, Shield, Sparkles, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

export default function Home() {
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
              <h1 className="text-xl font-bold text-green-500">Groenvastbouw</h1>
              <p className="text-xs text-muted-foreground">Pitch Ondersteuning</p>
            </div>
            <Badge variant="outline" className="text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6 space-y-6 pb-32">
        
        {/* Elevator Pitch - DE HOOK */}
        <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Target className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-green-500 mb-2">De 30-Seconden Pitch</h2>
                <p className="text-sm leading-relaxed text-foreground">
                  "Traditionele bouw in Nederland is kapot. Wij bouwen <span className="font-bold text-green-500">70% sneller</span>, leveren <span className="font-bold text-green-500">90% energiebesparing</span>, en elimineren kostenon zekerheid door fabrieksprecisie. We bouwen niet alleen huizen—we lossen de woningcrisis op met <span className="font-bold">bewezen technologie van Senmar Portugal</span>."
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
                Het Probleem
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('oplossing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-3 w-3 mr-2 text-green-500" />
                Onze Oplossing
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('bewijs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="h-3 w-3 mr-2 text-blue-500" />
                Het Bewijs
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('bezwaren')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <CheckCircle2 className="h-3 w-3 mr-2 text-green-500" />
                Bezwaren
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SECTIE 1: HET PROBLEEM */}
        <div id="probleem" className="scroll-mt-20">
          <Card className="border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-orange-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                De Nederlandse Bouwcrisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background/50 p-4 rounded-lg border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-500 mb-1">12-18</div>
                  <div className="text-xs text-muted-foreground">maanden bouwtijd</div>
                  <div className="text-xs text-orange-400 mt-1">vs 4-6 bij ons</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-500 mb-1">€€€</div>
                  <div className="text-xs text-muted-foreground">onvoorspelbare kosten</div>
                  <div className="text-xs text-orange-400 mt-1">wij fixeren prijzen</div>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Arbeidstekort:</span> <span className="text-muted-foreground">Vertragingen, stijgende kosten, inconsistente kwaliteit</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Weervertragingen:</span> <span className="text-muted-foreground">Regen, vorst, wind = projectstilstand</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Stikstofregels:</span> <span className="text-muted-foreground">80% meer transport = vergunningen geblokkeerd</span></span>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mt-4">
                <p className="text-sm font-semibold text-orange-500 italic">
                  "Traditionele bouw schaalt niet. Industrialisatie is de ENIGE manier om de woningcrisis op te lossen."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTIE 2: DE OPLOSSING - HERO CIJFERS */}
        <div id="oplossing" className="scroll-mt-20">
          <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                Onze Oplossing: Fabrieksprecisie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* GROTE IMPACT CIJFERS */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-5 rounded-xl border-2 border-green-500/50">
                  <div className="text-5xl font-black text-green-500 mb-1">70%</div>
                  <div className="text-sm font-semibold text-foreground">Sneller Bouwen</div>
                  <div className="text-xs text-muted-foreground mt-1">4-6 maanden totaal</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-5 rounded-xl border-2 border-green-500/50">
                  <div className="text-5xl font-black text-green-500 mb-1">90%</div>
                  <div className="text-sm font-semibold text-foreground">Energiebesparing</div>
                  <div className="text-xs text-muted-foreground mt-1">Passivhaus standaard</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-5 rounded-xl border-2 border-blue-500/50">
                  <div className="text-5xl font-black text-blue-500 mb-1">7-10</div>
                  <div className="text-sm font-semibold text-foreground">Dagen Montage</div>
                  <div className="text-xs text-muted-foreground mt-1">Wind- en waterdicht</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-5 rounded-xl border-2 border-blue-500/50">
                  <div className="text-5xl font-black text-blue-500 mb-1">1mm</div>
                  <div className="text-sm font-semibold text-foreground">CNC Precisie</div>
                  <div className="text-xs text-muted-foreground mt-1">Nul koudebruggen</div>
                </div>
              </div>

              {/* Hoe We Het Doen */}
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Fabrieksproductie:</span> <span className="text-muted-foreground">4-6 weken in gecontroleerde omgeving</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">CNC Robotica:</span> <span className="text-muted-foreground">1mm tolerantie, onmogelijk op bouwplaats</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Droge Bouw:</span> <span className="text-muted-foreground">Geen schimmel, geen weervertragingen</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Vaste Prijzen:</span> <span className="text-muted-foreground">Gefixeerd voor productie start</span></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Snelheidsvergelijking - VISUELE WOW */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Time-to-Market Vergelijking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Traditionele Bouw</span>
                <span className="text-red-400">12-18 maanden</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-green-500">Groenvastbouw</span>
                <span className="text-green-500 font-bold">4-6 maanden</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-1/3"></div>
              </div>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div className="text-sm">
                  <span className="font-bold text-green-500">6-9 maanden eerder huurinkomsten</span>
                  <span className="text-muted-foreground"> voor investeerders</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SECTIE 3: HET BEWIJS - Senmar Partnership */}
        <div id="bewijs" className="scroll-mt-20">
          <Card className="border-blue-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Het Bewijs: Senmar Portugal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge className="bg-blue-500 mb-2">Exclusieve Nederlandse Partner</Badge>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Locatie</div>
                  <div className="font-semibold">Coija, Portugal</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Fabriek</div>
                  <div className="font-semibold">4.000 m²</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Capaciteit</div>
                  <div className="font-semibold">200 woningen/jaar</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Technologie</div>
                  <div className="font-semibold">CNC + Vakmanschap</div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-blue-500">Waarom Portugal?</span> Lagere arbeidskosten + bewezen productie-expertise + FSC-gecertificeerde houtketen = onverslaanbare waarde
                </p>
              </div>

              {/* Senmar Technical Images */}
              <div className="mt-4 space-y-3">
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src="/senmar/passive-overview.webp" alt="Senmar Passieve Oplossing" className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img src="/senmar/optimal-wall.webp" alt="Optimale Wandopbouw" className="w-full" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img src="/senmar/passive-wall.webp" alt="Passieve Wandopbouw" className="w-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Prijzen - TRANSPARANT */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Prijstransparantie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <div className="text-sm font-semibold">Casco</div>
                  <div className="text-xs text-muted-foreground">Structuur + ramen + dak</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-500 text-lg">€1.100</div>
                  <div className="text-xs text-muted-foreground">/m²</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="text-sm font-semibold">Turnkey (Compleet)</div>
                  <div className="text-xs text-muted-foreground">Volledig afgewerkt, instapklaar</div>
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
                  <span className="font-semibold text-green-500">TCO Voordeel:</span> Energiebesparing van €2.000-3.000/jaar = €60.000-90.000 over 30 jaar. Het huis betaalt zichzelf terug.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energie-efficiëntie */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Energie Prestatie Niveaus
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Optimaal</span>
                <Badge variant="outline" className="text-xs">R-5.7</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Goede balans voor gematigd klimaat</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border-2 border-green-500/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-green-500">Passief ⭐ Onze Standaard</span>
                <Badge className="text-xs bg-green-500">R-8.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Aanzienlijke besparing, bewezen ROI</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Super Passief</span>
                <Badge variant="outline" className="text-xs">R-10.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Passivhaus gecertificeerd - 75% minder energie</p>
            </div>
          </CardContent>
        </Card>

        {/* Energie Vergelijking - CONCRETE CIJFERS */}
        <Card className="border-green-500/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Wat Betekent 86% Besparing?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-lg border border-green-500/30">
              <div className="text-center mb-3">
                <div className="text-4xl font-black text-green-500 mb-1">7:1</div>
                <p className="text-sm font-semibold">Passieve Huizen = 1 Gemiddeld Huis</p>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                7 gezinnen in onze Passieve huizen verbruiken dezelfde energie als 1 gezin in een gemiddeld Nederlands huis
              </p>
            </div>

            {/* Real Example */}
            <div>
              <p className="text-sm font-semibold mb-3">Voorbeeld: 150m² Woning</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="text-xs text-muted-foreground">Gemiddeld Nederlands Huis</div>
                    <div className="text-sm font-medium">16.500 kWh/jaar</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-500">€4.950</div>
                    <div className="text-xs text-muted-foreground">per jaar</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border-2 border-green-500/50">
                  <div>
                    <div className="text-xs text-green-500 font-semibold">Groenvastbouw Passief</div>
                    <div className="text-sm font-bold">2.250 kWh/jaar</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-green-500">€675</div>
                    <div className="text-xs text-muted-foreground">per jaar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Breakdown */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">€4.275</div>
                  <div className="text-xs text-muted-foreground">besparing per jaar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">€128k</div>
                  <div className="text-xs text-muted-foreground">over 30 jaar</div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="text-xs space-y-2">
              <p className="font-semibold">Dit zijn verwarmingskosten (per jaar):</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ruimteverwarming</span>
                </div>
                <div className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Warm water</span>
                </div>
                <div className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ventilatie</span>
                </div>
                <div className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Koeling (zomer)</span>
                </div>
              </div>
            </div>

            {/* Embodied Energy */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-500 mb-2">Bonus: Lagere Bouw-impact</p>
              <p className="text-xs text-muted-foreground">
                Houtskeletbouw (Senmar) gebruikt <span className="font-semibold text-blue-500">50% minder energie</span> tijdens productie dan betonbouw. Na ~4 jaar heeft het huis zijn bouwinvestering terugverdiend en wordt het <span className="font-semibold text-blue-500">carbon-positief</span> voor 50+ jaar.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* SECTIE 4: BEZWAREN AFHANDELEN */}
        <div id="bezwaren" className="scroll-mt-20">
          <Card className="border-purple-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-500" />
                Bezwaren Afhandelen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              
              {/* Bezwaar 1 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj1')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">"Prefab = lagere kwaliteit?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj1' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj1' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Antwoord:</p>
                    <p className="text-muted-foreground">
                      "Eigenlijk het tegenovergestelde. Fabriekscondities = 1mm CNC-precisie onmogelijk op bouwplaats. Elk paneel geïnspecteerd voor verzending. Nul weerschade, nul vocht = geen schimmel. Traditioneel = menselijke fouten + weer + haast."
                    </p>
                  </div>
                )}
              </div>

              {/* Bezwaar 2 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj2')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">"Waarom Portugal, niet Nederlands?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj2' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj2' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Antwoord:</p>
                    <p className="text-muted-foreground">
                      "Arbeidstekort is het probleem dat we oplossen. Portugal heeft geschoolde vaklieden + lagere kosten + FSC-houtvoorziening. We brengen Nederlandse kwaliteitsnormen naar Portugese efficiëntie. Resultaat: 30-40% kostenbesparing doorgegeven aan u."
                    </p>
                  </div>
                )}
              </div>

              {/* Bezwaar 3 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj3')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">"Klinkt duur?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj3' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj3' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Antwoord:</p>
                    <p className="text-muted-foreground">
                      "Initiële kosten zijn vergelijkbaar. Maar: (1) Vaste prijs = nul verrassingen, (2) 6-9 maanden eerder inkomsten voor investeerders, (3) €2.000-3.000/jaar energiebesparing = €60k-90k over 30 jaar. Total Cost of Ownership is dramatisch lager."
                    </p>
                  </div>
                )}
              </div>

              {/* Bezwaar 4 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj4')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">"Kunnen jullie opschalen?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj4' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj4' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Antwoord:</p>
                    <p className="text-muted-foreground">
                      "Senmar's 4.000m² fabriek produceert 200 woningen/jaar. Dat is schaalbare productie. Traditionele bouw schaalt niet—er zijn niet genoeg werkers. Wij zijn de ENIGE schaalbare oplossing voor de woningcrisis."
                    </p>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Killer Pitch Zinnen - MEMORISEER DEZE */}
        <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-500" />
              Killer Pitch Zinnen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="text-xs font-semibold text-green-500 mb-1">Over Snelheid:</div>
                <p className="text-sm italic">"70% tijdreductie = 6-9 maanden eerder huurinkomsten. Uw kapitaal werkt sneller."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-blue-500">
                <div className="text-xs font-semibold text-blue-500 mb-1">Over Prijs:</div>
                <p className="text-sm italic">"Vaste prijs voor productie start. Nul verrassingen, nul extra kosten. Traditioneel = budgetoverschrijdingen."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-orange-500">
                <div className="text-xs font-semibold text-orange-500 mb-1">Over Efficiëntie:</div>
                <p className="text-sm italic">"We verkopen geen huizen. We verkopen een ecosysteem van comfort en besparing dat zichzelf terugbetaalt."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="text-xs font-semibold text-green-500 mb-1">Over Duurzaamheid:</div>
                <p className="text-sm italic">"20 ton CO₂ opgeslagen per woning. Bouwen met ons is een daad van ecologische verantwoordelijkheid."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-purple-500">
                <div className="text-xs font-semibold text-purple-500 mb-1">De Afsluiter:</div>
                <p className="text-sm italic font-bold">"Traditionele bouw kan de woningcrisis niet oplossen. Wij wel. Laten we praten over uw project."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duurzaamheid Feiten */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Duurzaamheidsimpact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">20 ton CO₂</span>
                <span className="text-muted-foreground"> opgeslagen per woning (carbon negative)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">80% minder transport</span>
                <span className="text-muted-foreground"> naar bouwplaats (Stikstof compliant)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">100% FSC hout</span>
                <span className="text-muted-foreground"> uit duurzame bossen</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Nul bouwafval</span>
                <span className="text-muted-foreground"> fabrieksprecisie = minimaal restmateriaal</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>

      {/* Footer met Contact + QR */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border py-4">
        <div className="container">
          <div className="flex flex-col gap-3">
            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="tel:0629841297" className="flex items-center gap-1.5 text-green-500 hover:text-green-400 transition-colors">
                <Phone className="h-3 w-3" />
                <span className="font-medium">06 2984 1297</span>
              </a>
              <a href="mailto:info@groenvastbouw.nl" className="flex items-center gap-1.5 text-green-500 hover:text-green-400 transition-colors">
                <Mail className="h-3 w-3" />
                <span className="font-medium">info@groenvastbouw.nl</span>
              </a>
              <a href="https://www.groenvastbouw.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-green-500 hover:text-green-400 transition-colors">
                <Globe className="h-3 w-3" />
                <span className="font-medium">groenvastbouw.nl</span>
              </a>
              <a href="https://senmar.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors">
                <Globe className="h-3 w-3" />
                <span className="font-medium">senmar.pt</span>
              </a>
            </div>
            
            {/* QR Code */}
            <div className="flex items-center justify-center gap-3">
              <img 
                src="/qr-code.png" 
                alt="QR Code voor Groenvastbouw Pitch Tool" 
                className="w-16 h-16 rounded border-2 border-green-500"
              />
              <div className="text-left">
                <p className="text-xs font-semibold text-green-500">Scan voor deze pitch tool</p>
                <p className="text-xs text-muted-foreground">Altijd bij de hand tijdens gesprekken</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
