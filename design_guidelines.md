# SUN MOON Rolex Buy-Back Landing Page Design Guidelines

## Design Approach

**Reference-Based**: Drawing inspiration from luxury marketplace leaders (Chrono24, Hodinkee) combined with high-conversion landing page patterns (Airbnb's trust-building, Stripe's clarity). Focus on credibility, professionalism, and reducing friction in a high-value transaction context.

## Core Design Principles

1. **Trust First**: Every design decision reinforces credibility for high-value watch transactions
2. **Clarity Over Creativity**: Information hierarchy must be crystal clear - users are making significant financial decisions
3. **Bilingual Elegance**: Korean primary with English accents where appropriate (brand names, credentials)
4. **Luxury Restraint**: Sophisticated without being flashy - let the Rolex imagery do the heavy lifting

## Typography System

**Primary Font**: Pretendard (via CDN) - Korean-optimized, professional
**Accent Font**: Inter (for English elements, numbers, credentials)

**Hierarchy**:
- Hero Headline: 3xl-5xl, font-bold (Korean quote: "국내에서 팔기 어려우셨죠?")
- Section Headlines: 2xl-3xl, font-bold
- Card Titles: lg-xl, font-semibold
- Body Text: base-lg, font-normal
- Trust Badges/Fine Print: sm, font-medium
- CTA Buttons: lg, font-semibold

## Layout & Spacing System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24, 32 for consistent rhythm
**Container**: max-w-7xl with px-4 md:px-6 lg:px-8
**Section Padding**: py-12 md:py-20 lg:py-24 for generous breathing room
**Card Gaps**: gap-6 md:gap-8

**Grid Patterns**:
- Empathy Cards (Section 2): grid-cols-1 md:grid-cols-2 gap-6
- Solution Cards (Section 3): grid-cols-1 md:grid-cols-3 gap-6
- Credential Cards (Section 4): grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

## Component Library

### Page 1 Components

**Hero Section**:
- Full-width with max-w-7xl inner container
- Two-column layout: Left (60%) text, Right (40%) Rolex image
- Hero image: High-quality Rolex product shot (preferably Submariner or GMT on wrist/surface)
- Text hierarchy: Headline → Subheading → context
- No CTA in hero - focus on problem statement

**Empathy/Solution Cards**:
- Background: subtle card with border
- Icon space: 48px-64px at top
- Title: font-semibold, text-lg
- Description: text-base, leading-relaxed
- Hover: subtle lift (transform translateY(-2px))
- Padding: p-6 md:p-8

**Process Comparison Visual** (Section 4):
- Side-by-side flow diagram
- "일반 업체" vs "SUN MOON" comparison
- Arrow separators between steps
- Highlight SUN MOON advantages with brand accent

**Credential Cards**:
- 4-column grid on desktop, stack on mobile
- Include license/certificate images as thumbnails
- "증빙" (proof) element prominent
- Border treatment to separate from background

**Process Steps** (Section 5):
- Numbered circles (1, 2, 3) with connecting line
- Horizontal layout on desktop, vertical on mobile
- Each step: Icon → Number → Title → Description

**CTA Section** (Section 6):
- Centered, focused design
- Large headline + supporting subheading
- Single primary button: bg-[#F1591E] text-white
- Trust badges below button (small icons + text)
- Extra padding (py-20 md:py-32) for emphasis

### Page 2 Components

**Quote Form**:
- Single-column centered layout, max-w-2xl
- Each field in clear visual container
- Required fields marked with asterisk (*)
- Input fields: Consistent height (h-12), rounded borders
- Dropdowns: Native select styling enhanced
- File upload: Drag-drop zone with visual feedback
- Submit button: Full-width on mobile, fixed-width on desktop
- Trust reassurance text below form (24시간 내 연락드립니다)

**Form Field Pattern**:
- Label: font-medium, text-sm, mb-2
- Input: border-2, focus:border-[#F1591E], rounded-lg
- Helper text: text-sm below field
- Error states: red border + message

**Footer** (minimal on Page 2):
- Small centered block
- Logo (text) + location + contact
- "기타 문의" as subtle text link

### Navigation

**Header** (both pages):
- Sticky top position
- Logo (SUN MOON text) left-aligned
- Contact info right-aligned on desktop
- Minimal, clean separation from content (border-b or subtle shadow)
- Page 2 adds: "← 돌아가기" back link

## Images

**Required Images**:
1. **Hero Image** (Page 1): Premium Rolex watch photograph - close-up of iconic model (Submariner, GMT, or Datejust), preferably on wrist or luxury surface. High-resolution, professional product photography feel.
2. **License/Certificate Images** (Section 4): DPMS License B document, HICC booth photo - these should be authentic, slightly transparent overlays on credential cards
3. **Optional Icons**: Use Heroicons for cards - heroicons.com via CDN (outline style for consistency)

## Interaction Patterns

**Minimal Animations**:
- Smooth scroll to sections (scroll-behavior: smooth)
- Card hover: subtle lift (2-4px)
- Button hover: slight scale (1.02) + brightness increase
- NO parallax, NO scroll-triggered animations
- Form validation: immediate inline feedback

**CTA Button Treatment**:
- Primary: bg-[#F1591E], hover brightens slightly
- On images: blurred background (backdrop-blur-sm), semi-transparent dark overlay
- Always maintains readability with white text

## Trust Elements Integration

Throughout design, weave in trust signals:
- "24시간 내 회신" badges
- "홍콩 법인 보유" credentials
- "텔레그램 비밀 소통" privacy assurance
- Small shield/checkmark icons alongside trust text

## Responsive Breakpoints

- Mobile: 640px and below (single column, stacked cards)
- Tablet: 768px-1023px (2-column grids)
- Desktop: 1024px+ (full multi-column layouts)

## Special Considerations

**Korean Typography**: Ensure adequate line-height (1.6-1.8) for readability
**High-Value UX**: Every element reinforces professionalism - no playful elements
**Privacy Emphasis**: Telegram/privacy messaging should be visually distinct
**Proof Points**: License images and data should be presented as factual evidence, not decorative