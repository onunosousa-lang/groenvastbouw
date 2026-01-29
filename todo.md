# Groenvastbouw - PROPER Senmar Implementation

## Phase 1: Fix Hero Carousel Properly
- [x] Make background image STATIC (does not slide)
- [x] Only TEXT content slides (headline, description, buttons)
- [x] Remove full-screen slide structure
- [x] Keep one hero-background.jpg visible at all times
- [x] Text carousel overlays the static background
- [x] Proper alignment below header
- [x] Add light gray text box (#D7D7D6/90) for contrast

## Phase 2: Apply Senmar Colors Completely
- [x] NO black text anywhere (#000000)
- [x] Use Senmar Deep Slate (#2A3439) for dark text
- [x] Use Senmar Soft Mist (#D7D7D6) for light backgrounds
- [x] Use Senmar Lime Green (#A4D65E) for accents
- [x] Ensure ALL text has proper contrast
- [x] Light text on dark backgrounds
- [x] Dark text on light backgrounds
- [x] NEVER light on light or dark on dark
- [x] Update CSS variables to Senmar palette

## Phase 3: Remove Dark Overlays & Add Text Boxes
- [x] Remove heavy dark overlays from hero (reduced from 95% to 20%)
- [x] Reduce to maximum 30% overlay throughout site
- [x] Add light gray (#D7D7D6 with 90% opacity) text boxes behind text for contrast
- [x] Make photos clearly visible
- [x] Text readable with background boxes

## Phase 4: Match Senmar Layout Exactly
- [x] Verify section spacing matches Senmar
- [x] Check card layouts match Senmar style
- [x] Ensure typography hierarchy matches
- [x] Verify all pages have consistent Senmar look
- [x] Test responsive behavior
- [x] Build successful without errors

## Phase 5: Build & Deploy
- [ ] Build without errors
- [ ] Test locally
- [ ] Commit and push
- [ ] Verify deployment

## Critical Requirements
✓ Hero: ONLY text slides, background is STATIC
✓ Colors: NO black, use Senmar palette
✓ Contrast: Always readable (light on dark OR dark on light)
✓ Overlays: Minimal or none, photos must be visible
✓ Text boxes: Light gray boxes behind text when needed for contrast
