# VyomGarud Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by high-tech aerospace and military defense websites (onomondo.com, raphe.com), combined with modern B2B SaaS aesthetics. The design emphasizes precision, reliability, and advanced technology through a dark, futuristic military aesthetic.

## Core Design Elements

### Typography
- **Primary Font**: Inter (700 for headings, 600 for subheadings, 400 for body)
- **Accent Font**: Poppins (600) for CTAs and special emphasis
- **Hierarchy**:
  - H1 (Hero): 4xl-6xl, font-bold, tracking-tight
  - H2 (Sections): 3xl-4xl, font-bold
  - H3 (Cards): xl-2xl, font-semibold
  - Body: base-lg, font-normal, leading-relaxed
  - Small text: sm, opacity-80

### Layout System
- **Spacing Units**: Use Tailwind units 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Section Padding**: py-20 (desktop), py-12 (mobile)
- **Container**: max-w-7xl mx-auto px-6
- **Grid Systems**: 
  - Products: 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
  - Highlights: 3-column grid with icon-feature pairs
- **Vertical Rhythm**: Maintain consistent 16-24 unit spacing between major sections

### Color System
- **Background**: Charcoal (#1a1a1a to #0f0f0f gradient)
- **Primary Accent**: Orange (#ff7b00) for CTAs, highlights, borders
- **Text**: White (#ffffff) primary, rgba(255,255,255,0.8) secondary
- **Surface**: Dark gray (#262626) for cards with subtle borders
- **Hover States**: Orange glow effects, brightness increases

### Component Library

**Hero Section** (Full viewport height)
- Large hero image: Drone in flight against dark sky/military setting (cinematic, wide-angle shot)
- Split layout: Left - bold typography and CTA, Right - hero image with subtle parallax
- Gradient overlay on image for text readability
- Primary CTA: Orange button with blur background effect when over image
- Animated subtle particles or grid overlay for tech feel

**About Section**
- Single column, centered max-w-4xl
- Large opening paragraph with mission statement
- Supporting text in 2-column layout below
- Subtle orange accent line on left border

**Capabilities/Products Cards** (4 cards)
- Dark surface cards with subtle orange border on hover
- Each card: Icon (tech/drone related), Title, Description, "Learn More" link
- Grid layout with gap-8
- Hover: Lift effect (translate-y-1), orange glow

**Highlights Section**
- 3-column grid with large icons
- Each highlight: Icon (circle with orange border), Bold title, Brief description
- Icons: Precision targeting, Autonomous navigation, Military-grade reliability
- Centered alignment

**Contact/Footer**
- 2-column split: Left - contact form, Right - company info and social links
- Form: Dark inputs with orange focus states, white text
- Include: Email, phone, location
- Footer bar: Copyright, links, subtle grid pattern background

### Animations & Interactions
- **Subtle fade-up** on scroll for sections (Framer Motion)
- **Hover transforms**: Cards lift slightly, buttons scale 1.05
- **CTA pulse**: Subtle orange glow animation on primary button
- **Parallax**: Hero image subtle movement on scroll
- **NO distracting animations** - keep military precision feel

### Images
**Required Images:**
1. **Hero Image**: Wide cinematic shot of military/commercial drone in flight, dark atmospheric background (dusk/dawn), sharp focus on drone with blurred background. Position: Right 50% of hero section with gradient overlay.
2. **Product Cards**: 4 distinct drone/UAV images showing different capabilities - surveillance, delivery, tactical, autonomous. Small thumbnail size, integrated into card headers.

### Visual Effects
- Subtle grid pattern overlay on dark backgrounds
- Orange accent gradients on section dividers
- Glassmorphism effects on buttons over images (backdrop-blur)
- Subtle scanline or tech pattern overlays for military aesthetic
- Box shadows with orange tint for elevated cards

### Responsive Behavior
- Mobile: Single column, stacked sections, hero text above image
- Tablet: 2-column grids, maintained spacing
- Desktop: Full multi-column layouts, expanded spacing
- Touch targets: Minimum 44px for mobile interactions

**Brand Personality**: Professional, confident, cutting-edge, military precision, trustworthy innovation.