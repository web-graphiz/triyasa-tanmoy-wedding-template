# Triyasa & Tanmoy — Royal Indian Wedding Invitation & Reception

A responsive, single-page Indian wedding invitation and reception web template celebrating the sacred union of **Triyasa Das** & **Tanmoy Roy** in Kolkata, West Bengal.

Built with **pure vanilla HTML5, CSS3, and ES6+ JavaScript** (zero build tools, zero frameworks, zero audio assets), the template pairs a refined **pastel dusty blue, cream ivory, and royal gold** aesthetic with cultural Indian wedding motifs and rich client-side interactivity—including a procedural falling flower petals canvas, an in-browser Web Audio API Raag Yaman synthesizer, a filterable photo gallery with a swipeable lightbox, and an RSVP suite that generates a printable digital entry pass with confetti.

---

## Table of Contents

- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [JavaScript Modules & Architecture](#javascript-modules--architecture)
- [Design System & Typography](#design-system--typography)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment Notes](#deployment-notes)
- [Browser Support & Accessibility](#browser-support--accessibility)
- [License & Credits](#license--credits)

---

## Key Features

### 1. Interactive Falling Floral Petals (`assets/js/petals.js`)
- Fullscreen HTML5 Canvas 2D overlay (`#petals-canvas`) rendering 35 organic petals using dual cubic Bézier curves.
- Styled in four traditional Indian wedding floral tones: **Rose Pink (*Gulab*)**, **Marigold Orange (*Genda*)**, **Theme Pastel Blue**, and **Jasmine Cream**.
- Physics-driven motion featuring vertical gravity, sinusoidal horizontal sway, continuous rotation, and automatic viewport resize handling.
- Includes a navbar toggle button (`#petal-toggle`) to pause or resume the animation at any time.

### 2. Indian Classical Instrumental Synthesizer (`assets/js/music.js`)
- **Zero external audio dependencies**: Generates melodic tones in real time using the browser's native **Web Audio API** (`AudioContext`, `OscillatorNode`, `GainNode`).
- Tuned to the auspicious evening **Raag Yaman (Kalyan)** scale (*Sa, Re, Ga, Teevra Ma, Pa, Dha, Ni, Taar Sa, Taar Re, Taar Ga* — `261.63 Hz` to `659.25 Hz`).
- Pure sine-wave synthesis modeled after an Indian bamboo flute (*Bansuri*) and ceremonial *Shehnai*, featuring micro-tonal pitch inflections (*Meend*) and smooth ADSR gain envelopes.
- Loops a 16-note Raag Yaman phrase at 900ms intervals, lazily initializes `AudioContext` on user click to respect browser autoplay policies, and updates the navbar audio button (`#audio-toggle`) with active state styling.

### 3. Royal Hero Section & Couple Profiles
- Opens with the auspicious Sanskrit invocation `॥ श्री गणेशाय नमः ॥` (*Shree Ganeshayah Namah*) and `शुभ विवाह` (*Shubho Bibaho*) crest over a subtle rotating sacred mandala SVG watermark.
- **3-Column Regal Layout**:
  - **The Bride Card**: Arched portrait of Triyasa Das framed with royal gold corner filigree SVGs, parentage details, creative trait badge, quote, Instagram pill, and blessing anchor.
  - **Central Couple Emblem**: Circular halo-framed couple portrait with wedding date (`12 . 12 . 2026`), Kolkata location banner, and primary CTAs (**RSVP & Bless** and **Wedding Program**).
  - **The Groom Card**: Matching arched filigree card for Tanmoy Roy with parentage details, trait badge, quote, social pill, and blessing anchor.

### 4. Live Real-Time Countdown Timer
- Dynamically counts down to **December 12, 2026 at 18:00:00** in real time, updating every `1,000 ms`.
- Displays zero-padded **Days** (3 digits), **Hours**, **Minutes**, and **Seconds**, and gracefully clamps to `000 / 00 / 00 / 00` once the wedding time arrives.

### 5. "Our Sweet Love Story" Timeline
- Alternating desktop timeline (collapsing to a clean left-aligned timeline on mobile) with arched image frames and central icon badges:
  1. **First Time We Met** — *15 Feb 2022* (Kolkata)
  2. **She Said Yes!** — *10 Mar 2025* (Starlit terrace proposal)
  3. **Family Blessings** — *28 Nov 2025* (Traditional rituals & festivities)

### 6. Multi-Event Wedding Program & Rituals Itinerary
A 6-card ceremonial schedule spanning December 10–13, 2026:

| # | Ceremony | Tag | Date & Time | Venue (Kolkata) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Aashirbaad & Ring Ceremony** | Sacred Blessing | 10.12.2026 · 06:00 PM | The Heritage Courtyard, Ballygunge |
| 2 | **Haldi Ceremony** | Turmeric Utsav | 11.12.2026 · 09:00 AM | Royal Orchid Lawn, Park Street |
| 3 | **Sangeet & Mehendi** | Musical Soirée | 11.12.2026 · 06:30 PM | Crystal Ballroom, E.M. Bypass |
| 4 | **Bor Jatri & Varmala** | Royal Baraat | 12.12.2026 · 05:30 PM | Imperial Courtyard, Rajarhat |
| 5 | **Wedding Phere** | Subho Bibaho | 12.12.2026 · 07:00 PM | Imperial Palace Mandap, Rajarhat |
| 6 | **Grand Reception** | Royal Gala | 13.12.2026 · 07:30 PM | The Grand Oberoi Lawn, Esplanade |

Each card includes a featured photo, ceremonial icon badge, description, **View Map** link, and **RSVP** shortcut.

### 7. Filterable Photo Gallery & Accessible Lightbox Modal
- **Category Filtering**: Smooth tab-based filtering across **All Photos**, **Pre-Wedding**, and **Ceremonies** with ARIA `role="tablist"` and `aria-selected` state management.
- **Full-Featured Lightbox (`#lightbox-modal`)**:
  - **Filter-Aware Carousel**: Cycles only through the photos visible under the active category filter.
  - **Caption & Live Counter**: Displays image `alt` text as caption and current position (e.g., `1 / 6`) inside an `aria-live="polite"` counter.
  - **Smooth Transitions**: Cross-fade switching animation (`.is-switching`) when navigating between photos.
  - **Multi-Input Navigation**: Supports Previous/Next buttons, keyboard shortcuts (`Enter`/`Space` to open, `ArrowLeft`/`ArrowRight` to navigate, `Escape` to close), mobile touch swipe gestures (`> 50px` horizontal threshold), backdrop click dismissal, and background scroll locking.

### 8. Royal Wreath RSVP Suite, Digital Entry Pass & Confetti
- **RSVP Form (`#rsvp-form`)**: Collects guest full name, phone/email, attending guest count (`1 Person`, `2 Persons`, `3 Persons`, `Family (4+)`), a 6-ceremony attendance checklist, and personal wishes/dietary preferences.
- **Digital Invitation Pass Modal (`#pass-modal`)**: Immediately populates a personalized entry voucher with the guest's name (defaults to `Honored Guest` if blank), guest count, event dates (`Dec 10 - 13, 2026`), symbolic QR code icon, and a **Save / Print Entry Pass** button (`window.print()`).
- **Celebratory Confetti Burst**: Spawns 100 multi-colored radial confetti particles (`#8faed9`, `#d4af37`, `#ffffff`, `#e2eafd`, `#f7c59f`) with velocity, gravity, and opacity fade-out on RSVP confirmation.

### 9. Glassmorphic Navigation, ScrollSpy & Scroll Reveals
- Fixed glassmorphism navbar (`backdrop-filter: blur(12px)`) that compacts smoothly on scroll (`.scrolled`).
- **ScrollSpy** automatically highlights the active section link in the navbar, including bottom-of-page handling for the RSVP section.
- Responsive mobile drawer with animated toggle icon, click-outside dismissal, and automatic reset when resizing past `768px`.
- `IntersectionObserver`-powered `.reveal` scroll-entrance animations with a graceful fallback for older browsers.

---

## Project Structure

```plaintext
Triyasa and Tomoy Reception/
│
├── index.html                      # Semantic HTML5 document, SEO/OG metadata & all page sections
├── LICENSE.txt                     # WebGraphiz Regular License notice
├── README.md                       # Project documentation
│
├── favicon.ico                     # Legacy browser favicon
├── favicon.svg                     # Scalable vector favicon
├── favicon-16x16.png               # 16x16 PNG favicon
├── favicon-32x32.png               # 32x32 PNG favicon
├── apple-touch-icon.png            # 180x180 Apple Touch icon
├── android-chrome-192x192.png      # 192x192 Android Chrome icon
├── android-chrome-512x512.png      # 512x512 Android Chrome icon
│
└── assets/
    ├── css/
    │   └── style.css               # Complete design system, tokens, animations & media queries
    │
    ├── js/
    │   ├── app.js                  # Countdown, ScrollSpy, mobile menu, reveal observer,
    │   │                           # gallery filter, lightbox carousel, RSVP & confetti engine
    │   ├── music.js                # Web Audio API Raag Yaman synthesizer & navbar toggle
    │   └── petals.js               # HTML5 Canvas 2D falling floral petals physics engine
    │
    └── images/
        ├── hero_couple.jpg         # Central hero portrait & Open Graph preview image
        ├── bride.jpg               # Bride profile portrait (Triyasa Das)
        ├── groom.jpg               # Groom profile portrait (Tanmoy Roy)
        ├── story_meet.jpg          # Love story: First meet milestone
        ├── story_proposal.jpg      # Love story: Proposal milestone
        ├── haldi.jpg               # Love story & gallery: Family blessings / Haldi
        ├── program_engagement.jpg  # Event card: Aashirbaad & Ring Ceremony
        ├── program_haldi.jpg       # Event card: Haldi Ceremony
        ├── program_sangeet.jpg     # Event card: Sangeet & Mehendi
        ├── program_varmala.jpg     # Event card: Bor Jatri & Varmala
        ├── program_phere.jpg       # Event card: Wedding Phere
        └── program_reception.jpg   # Event card: Grand Reception
```

---

## JavaScript Modules & Architecture

All scripts are loaded at the bottom of [index.html](index.html) in strict mode with no external JS libraries required:

| Script | Responsibility | Key DOM Targets / Hooks |
| :--- | :--- | :--- |
| [assets/js/petals.js](assets/js/petals.js) | Procedural Canvas 2D falling petal simulation (`Petal` class, `requestAnimationFrame` loop) | `#petals-canvas`, `#petal-toggle` |
| [assets/js/music.js](assets/js/music.js) | Native Web Audio API synthesizer playing Raag Yaman phrases with *Meend* pitch ramp | `#audio-toggle`, `#audio-icon` |
| [assets/js/app.js](assets/js/app.js) | Countdown timer, sticky navbar, ScrollSpy, mobile drawer, `IntersectionObserver` reveals, gallery filtering, keyboard/swipe lightbox, RSVP pass modal, and DOM confetti burst | `#days`, `#hours`, `#mins`, `#secs`, `.navbar`, `#mobile-toggle`, `.reveal`, `.filter-btn`, `.gallery-item`, `#lightbox-modal`, `#rsvp-form`, `#pass-modal` |

---

## Design System & Typography

Theme tokens are centralized under `:root` in [assets/css/style.css](assets/css/style.css):

### Color Palette & Elevation

| CSS Variable | Value | Usage |
| :--- | :--- | :--- |
| `--bg-main` | `#f0f4fa` | Soft pastel blue-gray page canvas |
| `--bg-card` | `#ffffff` | Crisp white card surfaces |
| `--primary-blue` | `#8faed9` | Signature pastel dusty blue accent |
| `--primary-blue-dark` | `#6486be` | Deep dusty blue for active states, crests & links |
| `--primary-blue-light` | `#d8e5f7` | Soft tint for borders, pills & icon badges |
| `--gold-accent` | `#d4af37` | Royal metallic gold for crowns, borders & SVG filigrees |
| `--text-dark` | `#202b3d` | High-contrast deep slate navy body & heading text |
| `--text-muted` | `#62728d` | Secondary labels, dates & metadata |
| `--shadow-soft` | `0 10px 35px rgba(118, 147, 191, 0.15)` | Default card elevation |
| `--shadow-hover` | `0 15px 45px rgba(100, 134, 190, 0.25)` | Interactive hover elevation |

### Typography & Icons
- **Royal Headings** (`--font-heading`): `'Cinzel', serif` (400, 600, 700, 800)
- **Calligraphic Script** (`--font-script`): `'Great Vibes', cursive`
- **Literary Serif** (`--font-serif`): `'Cormorant Garamond', serif` (regular & italic)
- **UI & Body** (`--font-sans`): `'Plus Jakarta Sans', sans-serif` (300–700)
- **Iconography**: Font Awesome `6.4.0` via CDNJS with Subresource Integrity (SRI)

---

## Responsive Breakpoints

[assets/css/style.css](assets/css/style.css) adapts across six breakpoints alongside fluid `clamp()` typography:

| Breakpoint | Key Layout Adaptations |
| :--- | :--- |
| `<= 1100px` | Adjusts hero grid spacing and desktop card proportions |
| `<= 992px` | Reflows multi-column hero and program grids for tablets |
| `<= 768px` | Activates slide-down mobile navigation drawer, left-aligned story timeline, 2-column gallery grid, compact lightbox controls, and refined RSVP wreath frame |
| `<= 600px` | Switches wedding program grid and RSVP ceremony checkboxes to single-column; scales central circular portrait |
| `<= 480px` | Stacks hero CTA buttons full-width, reduces arched portrait and countdown card dimensions, tightens mobile spacing |
| `<= 360px` | Ultra-compact sizing for small phones, 1-column gallery grid (`220px` tile height) |

---

## Getting Started

Because this project uses only standard web technologies, there are **no installation or build steps**.

### Option 1: Direct Browser Open
Open [index.html](index.html) directly in any modern browser (Chrome, Edge, Safari, or Firefox).

### Option 2: Local Development Server (Recommended)
Serving locally ensures consistent asset paths, clean relative URLs, and reliable Web Audio API behavior:

**Python 3:**
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

**Node.js (`serve`):**
```bash
npx serve .
```

**VS Code Live Server:**
1. Open the project folder in VS Code.
2. Right-click [index.html](index.html) and select **Open with Live Server**.

---

## Customization Guide

### 1. Couple Information, SEO & Social Sharing
- Open [index.html](index.html):
  - Update `<title>`, `<meta name="description">`, Open Graph (`og:*`), and Twitter Card (`twitter:*`) tags at lines **12–29**.
  - Update the couple names, parents' names, bios, quotes, and Instagram handles in the Hero section (lines **124–318**).
  - Update the footer monogram and copyright line (lines **796–805**).

### 2. Wedding Countdown Date
- Open [assets/js/app.js](assets/js/app.js) and edit line **27**:
  ```javascript
  const weddingDate = new Date('December 12, 2026 18:00:00').getTime();
  ```

### 3. Love Story & Wedding Program
- **Story Timeline**: Edit the `.story-item` blocks in [index.html](index.html) (lines **377–425**).
- **Ceremonial Events**: Edit the `.event-card` blocks in `<section id="events">` (lines **444–591**), and replace the placeholder `https://maps.google.com` links with exact Google Maps venue URLs.

### 4. Replacing Photography Assets
- Replace images inside `assets/images/` using the same filenames, or update the `src` attributes in [index.html](index.html).
- Recommended aspect ratios:
  - **Bride & Groom Portraits (`bride.jpg`, `groom.jpg`)**: `3:4` or `4:5` vertical
  - **Hero Center & Gallery (`hero_couple.jpg`, `story_*.jpg`, `haldi.jpg`)**: `1:1` square or `4:3`
  - **Program Cards (`program_*.jpg`)**: `16:9` landscape
- To add new gallery photos, duplicate a `<figure class="gallery-item" data-category="prewedding|ceremonies">` block in [index.html](index.html) (lines **618–663**); the filter tabs and lightbox counter automatically include them.

### 5. Theme Colors & Fonts
- Edit the CSS custom properties in `:root` at the top of [assets/css/style.css](assets/css/style.css) (lines **29–52**) to re-theme the palette (e.g., blush rose, emerald sage, lavender, or royal maroon) without modifying component styles.

### 6. Petals & Synthesizer Tuning
- **Petals**: Adjust `petalCount` (default `35`) or `petalColors` in [assets/js/petals.js](assets/js/petals.js) (lines **45–50** and **119**).
- **Music**: Modify the `notes` frequencies, `melodySequence` array, or `900` ms tempo interval in [assets/js/music.js](assets/js/music.js) (lines **36–47** and **110–118**).

### 7. Connecting RSVP to a Backend (Optional)
- Currently, RSVP submission is handled entirely client-side in [assets/js/app.js](assets/js/app.js) (lines **473–500**): it reads the guest name and count, opens `#pass-modal`, resets the form, and triggers `triggerConfetti()`.
- To persist responses, add a `fetch()` call inside the `rsvpForm` `submit` listener to post the form fields (name, contact, guest count, checked `ceremonies` checkboxes, and message) to your preferred service such as Formspree, EmailJS, Google Apps Script, or a custom REST endpoint.

---

## Deployment Notes

This template is 100% static and can be deployed directly to **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, or any standard web host:
1. Upload the entire project directory preserving the `assets/` folder structure and root favicon files.
2. Update `og:image` and `twitter:image` in [index.html](index.html) (lines **23** and **29**) from relative paths (`assets/images/hero_couple.jpg`) to full `https://...` URLs so WhatsApp, Facebook, and X/Twitter display the preview card image reliably.

---

## Browser Support & Accessibility

- **Browsers**: Full support in modern Chrome, Edge, Firefox, and Safari (desktop & mobile), including `-webkit-` prefixes for `backdrop-filter` and `webkitAudioContext` fallback.
- **Accessibility**:
  - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - ARIA attributes for navigation (`aria-expanded`, `aria-controls`), gallery tabs (`role="tablist"`, `role="tab"`, `aria-selected`), and modals (`role="dialog"`, `aria-modal="true"`, `aria-live="polite"`).
  - Full keyboard navigation for gallery items and the lightbox viewer.
  - Native image `loading="lazy"` on below-the-fold imagery and `loading="eager"` on the primary hero portrait.

---

## License & Credits

- **License**: Protected by **WebGraphiz's Regular License**. See [LICENSE.txt](LICENSE.txt) and the [official WebGraphiz license page](https://webgraphiz.com/license) for full terms.
- **Fonts**: [Google Fonts](https://fonts.google.com/) (`Cinzel`, `Cormorant Garamond`, `Great Vibes`, `Plus Jakarta Sans`).
- **Icons**: [Font Awesome 6.4.0 Free](https://fontawesome.com/).
- **Audio & Visual FX**: Custom procedural implementations using native HTML5 Canvas 2D and Web Audio API.
