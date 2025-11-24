import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, TrendingUp, Leaf, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-green-500">Groenvastbouw</h1>
              <p className="text-xs text-muted-foreground">Conference Notes</p>
            </div>
            <Badge variant="outline" className="text-xs">Quick Ref</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6 space-y-6 pb-20">
        
        {/* Key Numbers - Most Important */}
        <Card className="border-green-500/50 bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-500" />
              Key Numbers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-500">70%</div>
                <div className="text-xs text-muted-foreground">Faster Build</div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-500">90%</div>
                <div className="text-xs text-muted-foreground">Energy Savings</div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-500">7-10</div>
                <div className="text-xs text-muted-foreground">Days Assembly</div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-500">1mm</div>
                <div className="text-xs text-muted-foreground">CNC Precision</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Pricing per m²
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm">Shell (Casco)</span>
              <span className="font-bold text-green-500">€1,100/m²</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm">Turnkey (Complete)</span>
              <span className="font-bold text-green-500">~€2,500/m²</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              💡 Focus on Total Cost of Ownership (TCO) - energy savings pay back over 30 years
            </p>
          </CardContent>
        </Card>

        {/* Speed Comparison */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Build Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Traditional</span>
                <span className="text-muted-foreground">12-18 months</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-500/50 w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Groenvastbouw</span>
                <span className="text-green-500 font-bold">4-6 months</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3"></div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              ⚡ 6-9 months earlier rental income for investors
            </p>
          </CardContent>
        </Card>

        {/* Senmar Factory */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Senmar Portugal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span>Coija, Portugal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Factory Size</span>
              <span>4,000 m²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Capacity</span>
              <span>200 houses/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Technology</span>
              <span>CNC + Craftsmanship</span>
            </div>
          </CardContent>
        </Card>

        {/* Energy Efficiency */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Energy Levels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Optimal</span>
                <Badge variant="outline" className="text-xs">R-5.7</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Good balance investment/performance</p>
            </div>
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-green-500">Passive ⭐</span>
                <Badge className="text-xs bg-green-500">R-8.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Our standard - substantial savings</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Super Passive</span>
                <Badge variant="outline" className="text-xs">R-10.5</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Passivhaus - 75% less energy</p>
            </div>
          </CardContent>
        </Card>

        {/* Key Arguments */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Key Arguments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="text-sm font-medium text-green-500">On Speed:</div>
              <p className="text-xs text-muted-foreground italic">
                "70% time reduction = 6-9 months earlier rental income for investors"
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-blue-500">On Price:</div>
              <p className="text-xs text-muted-foreground italic">
                "Fixed price before production starts. Zero surprises, zero extra costs."
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-orange-500">On Efficiency:</div>
              <p className="text-xs text-muted-foreground italic">
                "We don't sell houses. We sell an ecosystem of comfort and savings."
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-green-500">On Sustainability:</div>
              <p className="text-xs text-muted-foreground italic">
                "Building with Groenvastbouw is an act of ecological responsibility."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Quick Facts */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Sustainability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">20 tons CO₂</span>
                <span className="text-muted-foreground"> stored per house</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">80% less transport</span>
                <span className="text-muted-foreground"> to construction site</span>
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
                <span className="font-medium">Carbon Negative</span>
                <span className="text-muted-foreground"> building process</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="border-orange-500/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">The Dutch Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span className="text-muted-foreground">Labor shortage → delays & rising costs</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span className="text-muted-foreground">Unpredictable material costs</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span className="text-muted-foreground">Stikstof regulations slow projects</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span className="text-muted-foreground">Long build times = capital tied up</span>
            </div>
            <p className="text-xs text-orange-500/80 mt-3 italic">
              → Industrialization is not an option, it's an economic necessity
            </p>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border py-3">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            Groenvastbouw × Senmar | Quick Reference
          </p>
        </div>
      </footer>
    </div>
  );
}
