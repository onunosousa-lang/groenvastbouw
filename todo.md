# Groenvastbouw Optimization Checklist

## 1. High Priority (Performance & User Experience)

### App.tsx
- [x] **Implement Lazy Loading:** Replace static imports for pages with `React.lazy` and wrap routes in `<Suspense>`.

### Projects.tsx
- [x] **Optimize Gallery Images:** Add `loading="lazy"` to `<img>` tags.
- [x] **Prevent CLS:** Ensure `width` and `height` or aspect-ratio classes are correctly applied.

### Navbar.tsx
- [x] **Throttle Scroll Event:** Wrap `setIsScrolled` in a throttle function.
- [x] **Fix "Scroll to Section" Logic:** Replace `setTimeout` with a more robust solution.

### Home.tsx (Video)
- [x] **Lazy Load Video:** Refactor video element to use `IntersectionObserver`.

## 2. Medium Priority (Code Structure & Maintenance)

### Home.tsx (Refactoring)
- [x] **Extract Components:**
    - [x] `HeroSection.tsx`
    - [x] `ProblemSolution.tsx`
    - [x] `SenmarVideo.tsx`
    - [x] `TechnologySection.tsx`
    - [x] `MarketsSection.tsx`
    - [x] `SystemsSection.tsx`
    - [x] `EnergyComparison.tsx`
    - [x] `ContactForm.tsx`
- [x] **Refactor Forms:** Use `react-hook-form` and `zod`.

### Translations
- [x] **Centralize Translations:** Move content arrays from `Home.tsx` to `translations.ts`.

## 3. Low Priority (Polish)

### UI
- [x] **Pause/Play Button:** Add toggle button for the "Senmar Solution" video.

### Content Updates
- [ ] **Update Systems Section:**
    - [ ] Rename title to "Technical Solutions" / "Technische Oplossingen".
    - [ ] Add "Basic" solution from Senmar website.
    - [ ] Update existing solutions (Optimal, Passive, Super Passive) with correct data.

- [x] Add SEO-optimized images to Ons Aanbod page
- [x] Rename all uploaded images with descriptive Portuguese names for SEO
- [x] Add relevant images to other pages (excluding About Me page)
- [x] Include proper alt tags for all images for SEO optimization

- [x] Remove image gallery sections from OurOffer and Projects pages
- [x] Add hero background image with transparency overlay to Our Offer page
- [x] Add background images with transparency to other pages (not About Me)
- [x] Ensure all background images have proper opacity/transparency for readability

- [x] Change Our Offer page background color to match homepage (gray-900/dark)
- [x] Add transparent background photos throughout Our Offer page sections
- [x] Ensure text remains readable with proper contrast on dark background

- [x] Rename factory production images with SEO-optimized Dutch names
- [x] Create rolling gallery component with auto-scroll animation
- [x] Add factory production rolling galleries to Our Offer page
- [x] Ensure galleries work smoothly on mobile and desktop

- [x] Remove "Our Production Facility" title from first gallery
- [x] Make second gallery full width like the first one
- [x] Distribute 10 unique images across 3 galleries without repetition
- [x] Add third rolling gallery further down the page

- [x] Add transparent background images to homepage sections
- [x] Ensure consistency with Our Offer page styling
- [x] Maintain dark theme (gray-900) across all homepage sections
- [x] Verify text readability on all background images

- [x] Add "in partnership with Senmar, Portugal" text to Our Offer intro
- [x] Make "Groenvastbouw" a clickable link that opens contact form popup
- [x] Make "Senmar" a hyperlink to official Senmar website
- [x] Apply proper styling to hyperlinks (green color, hover effects)

- [x] Rename 42 project images with SEO-optimized Dutch names
- [x] Replace homepage FeaturedProjects section with rolling gallery
- [x] Remove "How It Works" from navigation menu and header
- [x] Create new Projects page with dark background and transparent images
- [x] Add "Completed Projects" rolling gallery to Projects page
- [x] Add "Under Construction" rolling gallery to Projects page
- [x] Update App.tsx routing to include new Projects page
- [x] Ensure Projects page matches homepage styling (gray-900 background)

- [x] Fix Projects button routing in App.tsx
- [x] Verify Projects page is properly imported and routed
- [x] Change About Us page background to gray-900
- [x] Add transparent background images to About Us page

## Translation Issues to Fix

- [x] Footer: Translate "Legal" heading to NL/EN
- [x] Footer: Translate "Credentials" heading to NL/EN
- [x] Footer: Fix privacy policy and terms links to use proper routes (/privacy-policy and /terms-of-service)
- [x] Navbar: Translate hardcoded slogan "Nuchter bouwen. Slim wonen." to switch with language
- [x] Add translation keys for missing texts to translations.ts
- [x] Verify all buttons and content switch properly between NL and EN
