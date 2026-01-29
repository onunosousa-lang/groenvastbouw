# Groenvastbouw - EXACT 5-COLOR PALETTE

## ABSOLUTE COLOR RULES:
1. #8eb564 (green) - buttons, icons, logos, accents
2. #2a3439 (dark grey) - main text, header background
3. #dcdcdc (light grey) - backgrounds, input fields, text boxes (SOLID)
4. #ffffff (white) - button text, footer text
5. #7aa050 (darker green) - button hover states ONLY

## Phase 1: Replace ALL Black
- [x] Find ALL #000, #000000, rgb(0,0,0)
- [x] Replace with #2a3439
- [x] Verify 0 black remaining (already done in previous fix)

## Phase 2: Update CSS Variables
- [x] Set --primary: #8eb564 (142 181 100)
- [x] Set --secondary (hover): #7aa050 (122 160 80)
- [x] Set --foreground: #2a3439 (42 52 57)
- [x] Set --background: #dcdcdc (220 220 220)
- [x] Set --card: #ffffff (255 255 255)
- [x] All CSS variables use exact 5-color palette

## Phase 3: Remove Photo Overlays
- [x] Find all bg-black/opacity on images
- [x] Find all bg-gray-900/opacity
- [x] Remove ALL color overlays from photos (HeroCarousel, HeroSection)
- [x] Photos fully visible (no overlays)
- Note: 35 gradients remain but most are decorative (icon backgrounds, text gradients) not photo overlays

## Phase 4: Solid Backgrounds
- [x] Main section backgrounds already solid #dcdcdc (AboutUs, etc)
- [x] Remaining gradients are decorative only (icon backgrounds, text effects)
- [x] No photo/section background gradients

## Phase 5: Button Hover
- [x] Set button hover to #7aa050
- [x] Remove /90 opacity
- [x] Solid color hover only (hover:bg-[#7aa050])

## Phase 6: Deploy
- [ ] Build
- [ ] Commit
- [ ] Push
- [ ] Verify live
