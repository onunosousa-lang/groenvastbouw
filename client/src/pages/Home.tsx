import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, TrendingUp, Leaf, CheckCircle2, AlertCircle, ArrowRight, Target, Shield, Sparkles } from "lucide-react";
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
              <p className="text-xs text-muted-foreground">Pitch Support Tool</p>
            </div>
            <Badge variant="outline" className="text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6 space-y-6 pb-20">
        
        {/* Elevator Pitch - THE HOOK */}
        <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Target className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-green-500 mb-2">The 30-Second Pitch</h2>
                <p className="text-sm leading-relaxed text-foreground">
                  "Traditional construction in the Netherlands is broken. We build <span className="font-bold text-green-500">70% faster</span>, deliver <span className="font-bold text-green-500">90% energy savings</span>, and eliminate cost uncertainty through factory-precision manufacturing. We're not just building houses—we're solving the housing crisis with <span className="font-bold">proven technology from Senmar Portugal</span>."
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
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <AlertCircle className="h-3 w-3 mr-2 text-orange-500" />
                The Problem
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-3 w-3 mr-2 text-green-500" />
                Our Solution
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="h-3 w-3 mr-2 text-blue-500" />
                The Proof
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start h-auto py-2"
                onClick={() => document.getElementById('objections')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <CheckCircle2 className="h-3 w-3 mr-2 text-green-500" />
                Objections
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 1: THE PROBLEM */}
        <div id="problem" className="scroll-mt-20">
          <Card className="border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-orange-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                The Dutch Construction Crisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background/50 p-4 rounded-lg border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-500 mb-1">12-18</div>
                  <div className="text-xs text-muted-foreground">months to build</div>
                  <div className="text-xs text-orange-400 mt-1">vs 4-6 with us</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-500 mb-1">€€€</div>
                  <div className="text-xs text-muted-foreground">unpredictable costs</div>
                  <div className="text-xs text-orange-400 mt-1">we fix prices</div>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Labor shortage:</span> <span className="text-muted-foreground">Delays, rising costs, inconsistent quality</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Weather delays:</span> <span className="text-muted-foreground">Rain, frost, wind = project standstill</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span><span className="font-semibold">Stikstof regulations:</span> <span className="text-muted-foreground">80% more transport = permits blocked</span></span>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mt-4">
                <p className="text-sm font-semibold text-orange-500 italic">
                  "Traditional construction isn't scalable. Industrialization is the ONLY way to solve the housing crisis."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 2: THE SOLUTION - HERO NUMBERS */}
        <div id="solution" className="scroll-mt-20">
          <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                Our Solution: Factory Precision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* BIG IMPACT NUMBERS */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-5 rounded-xl border-2 border-green-500/50">
                  <div className="text-5xl font-black text-green-500 mb-1">70%</div>
                  <div className="text-sm font-semibold text-foreground">Faster Build</div>
                  <div className="text-xs text-muted-foreground mt-1">4-6 months total</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 p-5 rounded-xl border-2 border-green-500/50">
                  <div className="text-5xl font-black text-green-500 mb-1">90%</div>
                  <div className="text-sm font-semibold text-foreground">Energy Savings</div>
                  <div className="text-xs text-muted-foreground mt-1">Passivhaus standard</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-5 rounded-xl border-2 border-blue-500/50">
                  <div className="text-5xl font-black text-blue-500 mb-1">7-10</div>
                  <div className="text-sm font-semibold text-foreground">Days Assembly</div>
                  <div className="text-xs text-muted-foreground mt-1">Wind & watertight</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-5 rounded-xl border-2 border-blue-500/50">
                  <div className="text-5xl font-black text-blue-500 mb-1">1mm</div>
                  <div className="text-sm font-semibold text-foreground">CNC Precision</div>
                  <div className="text-xs text-muted-foreground mt-1">Zero thermal bridges</div>
                </div>
              </div>

              {/* How We Do It */}
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Factory Production:</span> <span className="text-muted-foreground">4-6 weeks in controlled environment</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">CNC Robotics:</span> <span className="text-muted-foreground">1mm tolerance, impossible on-site</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Dry Construction:</span> <span className="text-muted-foreground">No mold, no weather delays</span></span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">Fixed Pricing:</span> <span className="text-muted-foreground">Locked before production starts</span></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Speed Comparison - VISUAL WOW */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Time to Market Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Traditional Build</span>
                <span className="text-red-400">12-18 months</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-green-500">Groenvastbouw</span>
                <span className="text-green-500 font-bold">4-6 months</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-1/3"></div>
              </div>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div className="text-sm">
                  <span className="font-bold text-green-500">6-9 months earlier rental income</span>
                  <span className="text-muted-foreground"> for investors</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 3: THE PROOF - Senmar Partnership */}
        <div id="proof" className="scroll-mt-20">
          <Card className="border-blue-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                The Proof: Senmar Portugal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge className="bg-blue-500 mb-2">Exclusive Dutch Partner</Badge>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Location</div>
                  <div className="font-semibold">Coija, Portugal</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Factory Size</div>
                  <div className="font-semibold">4,000 m²</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Capacity</div>
                  <div className="font-semibold">200 houses/year</div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-muted-foreground text-xs mb-1">Technology</div>
                  <div className="font-semibold">CNC + Craft</div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-blue-500">Why Portugal?</span> Lower labor costs + proven manufacturing expertise + FSC-certified wood supply chain = unbeatable value
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing - TRANSPARENT */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Pricing Transparency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <div className="text-sm font-semibold">Shell (Casco)</div>
                  <div className="text-xs text-muted-foreground">Structure + windows + roof</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-500 text-lg">€1,100</div>
                  <div className="text-xs text-muted-foreground">/m²</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="text-sm font-semibold">Turnkey (Complete)</div>
                  <div className="text-xs text-muted-foreground">Fully finished, move-in ready</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-500 text-lg">~€2,500</div>
                  <div className="text-xs text-muted-foreground">/m²</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-green-500">TCO Advantage:</span> Energy savings of €2,000-3,000/year = €60,000-90,000 over 30 years. The house pays for itself.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Efficiency */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Energy Performance Levels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Optimal</span>
                <Badge variant="outline" className="text-xs">R-5.7</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Good balance for moderate climates</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg border-2 border-green-500/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-green-500">Passive ⭐ Our Standard</span>
                <Badge className="text-xs bg-green-500">R-8.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Substantial savings, proven ROI</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Super Passive</span>
                <Badge variant="outline" className="text-xs">R-10.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Passivhaus certified - 75% less energy</p>
            </div>
          </CardContent>
        </Card>

        {/* SECTION 4: OBJECTION HANDLERS */}
        <div id="objections" className="scroll-mt-20">
          <Card className="border-purple-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-500" />
                Handling Objections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              
              {/* Objection 1 */}
              <div className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('obj1')}
                  className="w-full p-3 bg-muted/30 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold">"Prefab = lower quality?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj1' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj1' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Answer:</p>
                    <p className="text-muted-foreground">
                      "Actually, the opposite. Factory conditions = 1mm CNC precision impossible on-site. Every panel inspected before shipping. Zero weather damage, zero moisture = no mold. Traditional = human error + weather + rushing."
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
                  <span className="text-sm font-semibold">"Why Portugal, not Dutch?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj2' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj2' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Answer:</p>
                    <p className="text-muted-foreground">
                      "Labor shortage is the problem we're solving. Portugal has skilled craftsmen + lower costs + FSC wood supply. We bring Dutch quality standards to Portuguese efficiency. Result: 30-40% cost savings passed to you."
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
                  <span className="text-sm font-semibold">"Sounds expensive?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj3' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj3' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Answer:</p>
                    <p className="text-muted-foreground">
                      "Upfront cost is comparable. But: (1) Fixed price = zero surprises, (2) 6-9 months earlier income for investors, (3) €2,000-3,000/year energy savings = €60k-90k over 30 years. Total Cost of Ownership is dramatically lower."
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
                  <span className="text-sm font-semibold">"Can you scale?"</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${expandedSection === 'obj4' ? 'rotate-90' : ''}`} />
                </button>
                {expandedSection === 'obj4' && (
                  <div className="p-3 bg-background text-xs space-y-2">
                    <p className="text-green-500 font-semibold">Answer:</p>
                    <p className="text-muted-foreground">
                      "Senmar's 4,000m² factory produces 200 houses/year. That's scalable manufacturing. Traditional construction can't scale—there aren't enough workers. We're the ONLY scalable solution to the housing crisis."
                    </p>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Key Pitch Lines - MEMORIZE THESE */}
        <Card className="border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-500" />
              Killer Pitch Lines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="text-xs font-semibold text-green-500 mb-1">On Speed:</div>
                <p className="text-sm italic">"70% time reduction = 6-9 months earlier rental income. Your capital works faster."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-blue-500">
                <div className="text-xs font-semibold text-blue-500 mb-1">On Price:</div>
                <p className="text-sm italic">"Fixed price before production starts. Zero surprises, zero extra costs. Traditional = budget blowouts."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-orange-500">
                <div className="text-xs font-semibold text-orange-500 mb-1">On Efficiency:</div>
                <p className="text-sm italic">"We don't sell houses. We sell an ecosystem of comfort and savings that pays for itself."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="text-xs font-semibold text-green-500 mb-1">On Sustainability:</div>
                <p className="text-sm italic">"20 tons of CO₂ stored per house. Building with us is an act of ecological responsibility."</p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border-l-4 border-purple-500">
                <div className="text-xs font-semibold text-purple-500 mb-1">The Closer:</div>
                <p className="text-sm italic font-bold">"Traditional construction can't solve the housing crisis. We can. Let's talk about your project."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Quick Facts */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Sustainability Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">20 tons CO₂</span>
                <span className="text-muted-foreground"> stored per house (carbon negative)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">80% less transport</span>
                <span className="text-muted-foreground"> to site (Stikstof compliant)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">100% FSC wood</span>
                <span className="text-muted-foreground"> from sustainable forests</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Zero construction waste</span>
                <span className="text-muted-foreground"> factory precision = minimal scrap</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border py-3">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            Groenvastbouw × Senmar | Pitch Support Tool
          </p>
        </div>
      </footer>
    </div>
  );
}
