# Super Nallely - Project Context

## Project Overview
Static React website for **Super Nallely**, a local supermarket in Culiacán, Sinaloa. Target audience: older adults who shop at the store. Design must be classic, easy to understand, accessible.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** as build tool
- **CSS Custom Properties** for theming (no CSS frameworks)
- **ESLint** + **TypeScript** strict mode

## Project Structure
```
src/
├── assets/           # Static assets (logo, images)
├── components/       # Reusable UI components
│   ├── icons.tsx     # Inline SVG icons (Lucide-style)
│   ├── layout/       # Componentes persistentes (siempre visibles)
│   │   ├── Header.tsx          # Topbar + nav + logo + CTA teléfono
│   │   ├── Footer.tsx          # Contacto, horarios, redes, pagos
│   │   └── MobileActionBar.tsx # Barra fija Llamar/WhatsApp (solo móvil)
│   └── sections/     # Secciones de la página principal
│       ├── Hero.tsx          # Bienvenida + CTAs + badges de confianza
│       ├── WhyUs.tsx         # ¿Por qué elegirnos? (4 features)
│       ├── Departments.tsx   # 8 department cards grid
│       ├── Offers.tsx        # Weekly offers cards grid
│       └── CtaBand.tsx       # Banda "Ven a visitarnos"
├── pages/            # Page compositions
│   └── Home.tsx      # Main page (composes layout + sections)
├── styles/           # Global styles
│   ├── index.css     # Design tokens, reset, base styles
│   └── App.css       # Component-specific styles
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── vite-env.d.ts     # TypeScript declarations
```

## Design System

### Colors (from logo + brand)
- **Primary (Dark Blue):** `#1a3a5c` / `--primary`
- **Primary Dark:** `#0f243e` / `--primary-dark`
- **Primary Light:** `#2d5a8a` / `--primary-light`
- **Secondary (Green):** `#2e7d32` / `--secondary`
- **Accent (Orange):** `#e67e22` / `--accent`
- **Accent Light:** `#f39c12` / `--accent-light`
- **Background:** `#f8f9fa` / `--bg`
- **White:** `#ffffff` / `--bg-white`
- **Text:** `#2c3e50` / `--text`
- **Text Light:** `#5d6d7e` / `--text-light`
- **Border:** `#d5d8dc` / `--border`

### Typography
- **Font:** Segoe UI / system-ui
- **Base size:** 18px (responsive: 17px tablet, 16px mobile)
- **Line height:** 1.6

### Spacing & Radius
- **Border radius:** 12px (`--radius`), 8px (`--radius-sm`)
- **Shadow:** `0 4px 12px rgba(26, 58, 92, 0.12)`
- **Transition:** `all 0.3s ease`

## Components

### Header
- Logo (circular, 70px, accent border)
- Site title + subtitle
- Navigation: Inicio | Departamentos | Ofertas | Contacto
- Info badges: Location (Culiacán), Hours, Phone

### Hero
- Gradient background (primary → primary-dark)
- Welcome message with "Super Nallely" highlighted in accent
- Tagline: "¡Puro poder Culiacán!"
- 4 feature badges

### Departments (8 cards)
Each with unique color:
1. Verdulería (Green `#2e7d32`)
2. Frutería (Orange `#e67e22`)
3. Carnicería (Red `#c62828`)
4. Cremería (Blue `#1565c0`)
5. Abarrotes (Purple `#6a1b9a`)
6. Limpieza (Teal `#00695c`)
7. Panadería (Brown `#bf360c`)
8. Bebidas (Indigo `#283593`)

### Offers (8 cards)
Weekly deals with:
- Badge "Oferta"
- Category label
- Product name
- Current price (large, primary color)
- Previous price (strikethrough)
- Savings calculation (green badge)

### Footer
- Brand section with logo + slogan
- Contact info (address, phone, WhatsApp, email)
- Hours (Mon-Sun + holidays)
- Social links (Facebook, WhatsApp, Instagram)
- Payment methods icons
- Copyright + "Hecho con ❤️ en Culiacán, Sinaloa"

## Accessibility Features
- Semantic HTML5 (`header`, `main`, `section`, `footer`, `nav`, `article`)
- ARIA labels on navigation and interactive elements
- `role="list"` / `role="listitem"` on grids
- Focus-visible outlines (accent color, 3px)
- High contrast ratios
- Large touch targets (min 44px)
- Responsive text scaling (clamp)

## Responsive Breakpoints
- **Desktop:** ≥1024px
- **Tablet:** 768px - 1023px
- **Mobile:** ≤767px

## Key Content (Spanish)
- **Slogan:** "¡Puro poder Culiacán!"
- **Location:** Culiacán, Sinaloa
- **Address:** Blvd. Pedro Infante #1234, Col. Centro
- **Phone/WhatsApp:** 667 123 4567
- **Email:** contacto@supernallely.com
- **Hours:** Mon-Sat 7:00-22:00, Sun 8:00-21:00, Holidays 9:00-20:00

## Commands
```bash
npm run dev      # Development server (port 5175)
npm run build    # Production build
npm run preview  # Preview production build
```

## Notes
- Static site only (no backend, no cart)
- Logo at `src/assets/logo-tienda.jpg`
- Path aliases configured: `@/*` → `src/*`
- TypeScript strict mode enabled
- ESLint recommended config