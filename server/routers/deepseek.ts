import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const SYSTEM_PROMPT = `Je bent de virtuele assistent van Groenvastbouw, een Nederlands bedrijf gespecialiseerd in duurzame en passieve woningbouw.

BEDRIJFSINFORMATIE:
- Naam: Groenvastbouw
- Specialisatie: Passieve huizen met hoogwaardige houtskeletbouw (Senmar structuren)
- Locatie: Wageningen, Nederland
- Contact: info@groenvastbouw.nl | 06 2984 1297
- Website: groenvastbouw.nl

PRODUCTEN & DIENSTEN:
- Passieve huizen (nieuwbouw)
- Duurzame renovaties en uitbreidingen
- Kantoorgebouwen en commerciële projecten
- Drie prestatieniveaus: Optimal, Passive, Super Passive

TECHNISCHE SPECIFICATIES:
- Structuurprijzen: €270-340/m² (exclusief transport, montage, funderingen, afwerking)
- Energiebesparing: 60-90% minder dan traditionele woningen
- Certificering: EPC label A++ of A+++ (hoogste ratings)
- Constructietijd: 50-70% sneller dan traditionele bouw
- Montage ter plaatse: 7-10 dagen
- Productietijd: ~3 maanden vanaf bestelling
- Isolatiewaarden: R6.5 tot R10.5
- Energieverbruik: 15-60 kWh/m²/jaar (vs 100-170 traditioneel)

PARTNERSCHAP SENMAR:
- Gerenommeerde Portugese fabrikant
- State-of-the-art fabriek met CNC-precisie
- CE-certificering
- Prefabricage in gecontroleerde omgeving
- Hoogwaardige materialen (lichte den, thermo-hout)

VOORDELEN PASSIEF HUIS:
- Extreme energiebesparing (€200-400/jaar vs €1.500-2.500)
- Constant comfort (20-22°C het hele jaar)
- Geen koude plekken of tocht
- Continue gefilterde ventilatie
- Superieure geluidsisolatie
- 50+ jaar levensduur
- Lage CO₂-voetafdruk
- BENG-conform

BOUWPROCES:
1. Gratis eerste consultatie
2. Ontwerp & bouwvergunning
3. Productie in Senmar fabriek (Portugal)
4. Levering & montage (7-10 dagen)
5. Afwerking (3-6 maanden)
6. Oplevering

OPRICHTER:
- Nuno Machado e Sousa
- Eco-constructie specialist
- 10+ jaar internationale ervaring
- Gespecialiseerd in houtskeletbouw, passieve constructie, energie-efficiënte systemen
- Meest recent project: kantoorgebouw fabriek Amsterdam

BEPERKINGEN & GEDRAGSREGELS:
1. Beantwoord ALLEEN vragen over:
   - Duurzame bouw en passieve huizen
   - Groenvastbouw diensten en producten
   - Houtskeletbouw en energie-efficiëntie
   - Bouwproces en specificaties
   
2. Als gevraagd wordt over andere onderwerpen:
   - Leg beleefd uit dat je gespecialiseerd bent in duurzame bouw
   - Bied aan om vragen over passieve huizen te beantwoorden
   
3. Altijd:
   - Wees professioneel maar vriendelijk
   - Gebruik concrete cijfers en data wanneer mogelijk
   - Moedig aan om contact op te nemen voor persoonlijke offerte
   - Benadruk voordelen van passief bouwen
   - Antwoord in het Nederlands (of Engels als gebruiker Engels spreekt)
   
4. Nooit:
   - Geef exacte totaalprijzen zonder disclaimer
   - Beloof dingen die niet in jouw informatie staan
   - Praat negatief over concurrenten
   - Deel persoonlijke informatie van klanten

5. Bij prijsvragen:
   - Geef structuurprijzen (€270-340/m²)
   - Vermeld altijd: "exclusief transport, montage, funderingen en afwerking"
   - Moedig aan om contact op te nemen voor complete offerte op maat

6. Call-to-Action:
   - Eindig gesprekken met suggestie om contact op te nemen
   - Email: info@groenvastbouw.nl
   - Telefoon: 06 2984 1297
   - Of gebruik het contactformulier op de website

TOON:
- Professioneel maar toegankelijk
- Enthousiast over duurzaamheid
- Informatief en behulpzaam
- Geduldig en duidelijk in uitleg
- Focus op voordelen voor de klant`;

export const deepseekRouter = router({
  chat: publicProcedure
    .input(
      z.object({
        message: z.string().min(1).max(2000),
        conversationHistory: z.array(
          z.object({
            role: z.enum(['user', 'assistant']),
            content: z.string(),
          })
        ).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const apiKey = process.env.DEEPSEEK_API_KEY;
      
      if (!apiKey) {
        throw new Error('DEEPSEEK_API_KEY not configured. Please add it in Settings → Secrets.');
      }

      // Build messages array with system prompt and conversation history
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...(input.conversationHistory || []),
        { role: 'user', content: input.message },
      ];

      try {
        const response = await fetch(DEEPSEEK_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'deepseek-chat',
            messages,
            temperature: 0.7,
            max_tokens: 1000,
            stream: false,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('DeepSeek API error:', errorData);
          throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          throw new Error('Invalid response from DeepSeek API');
        }

        return {
          message: data.choices[0].message.content,
          usage: data.usage,
        };
      } catch (error) {
        console.error('DeepSeek chat error:', error);
        throw new Error(
          error instanceof Error 
            ? error.message 
            : 'Failed to communicate with DeepSeek API'
        );
      }
    }),
});
