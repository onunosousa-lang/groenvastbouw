# Groenvastbouw - Fix Remaining Color Issues

## CRITICAL ISSUES REPORTED:
1. Dark blue background still visible below hero section
2. Multiple shades of green visible (should be ONLY #8eb564)

## Phase 1: Verify Live Site
- [x] Check groenvastbouw.nl for dark blue backgrounds
- [x] Identify all sections with dark blue ("Ons Aanbod" section)
- [x] Check for different green shades (multiple found)
- [x] Document all color issues (see color_issues_found.md)

## Phase 2: Remove Dark Blue Below Hero
- [x] Find component/section below hero with dark blue background (OfferSection.tsx line 81)
- [x] Replace with bg-background (#dcdcdc) or bg-white
- [x] Verify no other dark blue backgrounds exist (fixed WhatWeOffer.tsx and WhyUs.tsx)

## Phase 3: Ensure ONLY #8eb564 Green
- [x] Search for ALL green color codes in codebase (30 found)
- [x] Replace rgb(142, 181, 100) variations
- [x] Replace #118443, #7da453, green-400/500/600
- [x] Verify ONLY #8eb564 exists (0 other greens remaining)

## Phase 4: Deploy & Verify
- [ ] Build without errors
- [ ] Commit and push
- [ ] Wait for Vercel deployment
- [ ] Verify fixes are live on groenvastbouw.nl
