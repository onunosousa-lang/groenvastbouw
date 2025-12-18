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
