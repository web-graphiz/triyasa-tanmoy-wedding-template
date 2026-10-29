# 💍 Triyasa & Tanmoy - Royal Wedding Invitation & Reception Template

A luxurious, responsive, and culturally rich Indian wedding invitation web application celebrating the sacred wedding reception of **Triyasa Das** & **Tanmoy Roy** in Kolkata, West Bengal.

Crafted with a refined **pastel dusty blue, cream ivory, and royal gold** aesthetic, this template harmoniously blends timeless Indian wedding traditions (Vedic rituals, auspicious Sanskrit shlokas, and royal filigree arches) with state-of-the-art interactive web features, including a procedural falling petals canvas, an in-browser classical shehnai/flute synthesizer via the Web Audio API, an interactive RSVP suite with digital entry passes, and a multi-event ceremonial itinerary.

---

## 🌟 Key Features

### 🪷 1. Interactive Falling Petal Animation (`petals.js`)
- Fullscreen HTML5 Canvas 2D particle simulation rendering organic rose petals (*Gulab*), auspicious marigold petals (*Genda*), jasmine cream, and pastel blue petals.
- Driven by sinusoidal horizontal oscillation, realistic gravity, and continuous rotational drift.
- Toggle button with icon animation located directly in the header navigation bar to enable or pause the petal animation anytime.

### 🎶 2. Indian Classical Instrumental Synthesizer (`music.js`)
- **Zero external audio file dependencies**: Synthesizes authentic instrumental tones in real time using the browser's native **Web Audio API** (`AudioContext`, `OscillatorNode`, and `GainNode`).
- Tuned to the auspicious evening **Raag Yaman** (Kalyan scale: *Sa, Re, Ga, Teevra Ma, Pa, Dha, Ni*).
- Acoustic modeling mimics the meditative tones of an Indian bamboo flute (*Bansuri*) and ceremonial *Shehnai*, complete with micro-tonal pitch inflections (*Meend*) and gentle ADSR attack/decay envelopes.
- Navbar audio toggle button with animated pulsing sound waves and autoplay policy safety.

### 👑 3. Royal Hero Section & Couple Monograms
- Sacred Sanskrit invocation: `॥ श्री गणेशाय नमः ॥` (*Shree Ganeshayah Namah*) and auspicious crest: `शुभ विवाह` (*Shubho Bibaho*).
- **3-Column Regal Architecture**:
  - **The Bride Card**: Portrait of Triyasa Das with royal corner filigree SVG art, parentage details, creative trait tags, and social profiles.
  - **Center Couple Crest**: Circular halo framed couple portrait, wedding date stamp, Kolkata venue mark, and quick-action buttons.
  - **The Groom Card**: Portrait of Tanmoy Roy with matching arched filigree details, lineage, adventurous spirit bio, and blessing button.
- Subtle rotating Sacred Mandala watermark animating smoothly in the background.

### ⏳ 4. Live Real-Time Countdown Timer
- Dynamic countdown targeting the wedding moment (**December 12, 2026 at 18:00:00 IST**).
- Computes and updates **Days**, **Hours**, **Minutes**, and **Seconds** every second with zero layout shifts.

### 📖 5. "Our Sweet Love Story" Timeline
- Alternating chronological milestone timeline with curved arched photo frames and floral badges:
  - **First Time We Met** (Feb 15, 2022 – A warm cup of tea in Kolkata)
  - **She Said Yes!** (Mar 10, 2025 – A starlit terrace proposal)
  - **Family Blessings** (Nov 28, 2025 – Traditional rituals & marigold festivities)

### 🪔 6. Multi-Event Sacred Program & Rituals Itinerary
Comprehensive card grid covering the complete 4-day wedding celebration (December 10 – 13, 2026):
1. **Aashirbaad & Ring Ceremony** – *The Heritage Courtyard, Ballygunge* (Dec 10, 6:00 PM)
2. **Haldi Ceremony (Turmeric Utsav)** – *Royal Orchid Lawn, Park Street* (Dec 11, 9:00 AM)
3. **Sangeet & Mehendi Soirée** – *Crystal Ballroom, E.M. Bypass* (Dec 11, 6:30 PM)
4. **Bor Jatri & Varmala (Royal Baraat)** – *Imperial Courtyard, Rajarhat* (Dec 12, 5:30 PM)
5. **Wedding Phere (Sacred Saat Paak & Vedic Vows)** – *Imperial Palace Mandap, Rajarhat* (Dec 12, 7:00 PM)
6. **Grand Reception Gala** – *The Grand Oberoi Lawn, Esplanade* (Dec 13, 7:30 PM)
- Each event card features badge categories, venue addresses, direct **Google Maps** exploration links, and one-click RSVP shortcuts.

### 🖼️ 7. Cherished Moments Gallery & Accessible Lightbox
- Categorized photo grid with tab-based filtering:
  - **All Photos**
  - **Pre-Wedding**
  - **Ceremonies**
- Built-in full-viewport **Lightbox Modal** with smooth fade transitions, background scroll locking, close button, backdrop click dismissal, and `Escape` / `Enter` keyboard support.

### ✉️ 8. Royal RSVP Suite & Digital Entry Pass
- Interactive guest confirmation form capturing:
  - Full Name
  - Contact Number / Email
  - Attending Guest Count (1, 2, 3, or Family 4+)
  - Multi-event attendance checkboxes
  - Personal blessing message & dietary requirements
- **Digital Invitation Pass Modal**:
  - Immediately generates an elegant verification ticket displaying the guest's name, attendee count, event dates, and symbolic QR code.
  - Integrated **Save / Print Entry Pass** button (`window.print()`) styled with print-specific CSS rules.
- **Celebratory Confetti Explosion**: 100-particle radial burst animation featuring gold, pastel blue, and white confetti across the screen upon RSVP confirmation.

### 📱 9. Modern Responsive Navigation & UX
- Fixed header navbar with glassmorphism blur (`backdrop-filter`).
- **ScrollSpy** automatic navigation link highlighting as the user scrolls.
- Smooth sliding mobile navigation drawer with backdrop click-outside auto-close.
- Intersection Observer-based **Scroll Reveal Animations** (`.reveal`) that trigger graceful slide-up animations as cards enter the viewport.

---

## 📁 Project Structure

```plaintext
Triyasa and Tomoy Reception/
│
├── index.html              # Main HTML5 semantic document & all section layouts
│
├── css/
│   └── style.css           # Complete design system, CSS variables, typography,
│                           # glassmorphism, responsive media queries & print styles
│
├── js/
│   ├── app.js              # Countdown timer, ScrollSpy, mobile drawer, gallery filter,
│   │                       # lightbox modal, RSVP processing & confetti engine
│   ├── music.js            # Native Web Audio API Raag Yaman synthesizer & audio controls
│   └── petals.js           # HTML5 Canvas 2D falling rose & marigold petals physics engine
│
├── assets/
│   └── images/             # Visual photography assets
│       ├── hero_couple.jpg         # Primary couple portrait
│       ├── bride.jpg               # Bride profile portrait (Triyasa Das)
│       ├── groom.jpg               # Groom profile portrait (Tanmoy Roy)
│       ├── story_meet.jpg          # First meet milestone photo
│       ├── story_proposal.jpg      # Proposal milestone photo
│       ├── haldi.jpg               # Haldi celebration photo
│       ├── program_engagement.jpg  # Aashirbaad & Ring event card
│       ├── program_haldi.jpg       # Haldi ceremony event card
│       ├── program_sangeet.jpg     # Sangeet & Mehendi event card
│       ├── program_varmala.jpg     # Bor Jatri & Varmala event card
│       ├── program_phere.jpg       # Wedding Phere Vedic ritual event card
│       └── program_reception.jpg   # Grand Reception Gala event card
│
└── README.md               # Project documentation and customization guide
```

---

## 🎨 Design System & Color Palette

The project utilizes CSS custom properties (`:root`) for easy theme customization:

| Token | Value | Visual Purpose |
| :--- | :--- | :--- |
| `--bg-main` | `#f0f4fa` | Soft pastel blue-gray background canvas |
| `--bg-card` | `#ffffff` | Clean ivory white card surface |
| `--primary-blue` | `#8faed9` | Signature pastel dusty blue accent |
| `--primary-blue-dark` | `#6486be` | Deep dusty blue for active states & crests |
| `--primary-blue-light` | `#d8e5f7` | Soft tint for pills, badges & borders |
| `--gold-accent` | `#d4af37` | Royal Indian metallic gold for crowns & filigrees |
| `--text-dark` | `#202b3d` | High-contrast deep slate navy typography |
| `--text-muted` | `#62728d` | Subtle slate gray for secondary labels & dates |

### Typography Hierarchy
- **Royal Headings**: `'Cinzel', serif` (Google Fonts) – Imperial Roman lettering for couple names, section titles, and badges.
- **Calligraphic Script**: `'Great Vibes', cursive` (Google Fonts) – Elegant handwritten flourish for intros and subtitles.
- **Literary Serif**: `'Cormorant Garamond', serif` (Google Fonts) – Refined traditional serif for quotes, vows, and parentage lines.
- **UI & Body**: `'Plus Jakarta Sans', sans-serif` (Google Fonts) – Crisp, readable geometric sans for descriptions and forms.
- **Iconography**: `Font Awesome 6 (Free CDN)` – Vector icons for ceremonies, social media, and navigation actions.

---

## 🚀 Getting Started

This project is built purely with **vanilla web standards** (HTML5, CSS3, ES6+ JavaScript) and has **zero build steps, zero npm packages, and zero runtime dependencies**.

### Quick Preview
1. Clone or download this repository onto your computer.
2. Double-click [index.html](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/index.html) to open it directly in any modern browser (Chrome, Edge, Safari, Firefox).

### Local Development Server (Recommended)
Running through a local web server ensures optimal asset loading, canvas performance, and Web Audio API permissions:

#### Option A: Python Built-in Server
```bash
# If using Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

#### Option B: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

#### Option C: Node.js `npx serve`
```bash
npx serve .
```

---

## 🛠️ Customization Guide

### 1. Updating Couple Details & Wedding Date
- Open [index.html](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/index.html):
  - Modify the `<title>` and `<meta>` description tags around lines 12–29.
  - Edit the couple's names, parents' names, quotes, and social links in the Hero section (lines 135–312).
- Open [js/app.js](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/js/app.js):
  - Change the countdown target date on line 27:
    ```javascript
    const weddingDate = new Date('December 12, 2026 18:00:00').getTime();
    ```

### 2. Modifying Ceremonial Events & Maps Links
- In [index.html](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/index.html), scroll to `<section id="events">` (lines 425–588).
- Replace venue names, dates, times, and paste specific Google Maps place links into `<a href="https://maps.google.com?...">`.

### 3. Replacing Photos
- Place your high-resolution images in the `assets/images/` folder keeping identical file names, or update the `src="..."` paths in [index.html](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/index.html).
- Recommended aspect ratios:
  - **Portraits (Bride & Groom)**: `3:4` or `4:5` vertical ratio.
  - **Hero Center & Gallery**: `1:1` square or `4:3` ratio.
  - **Program Cards**: `16:9` horizontal ratio.

### 4. Customizing Theme Colors
- Open [css/style.css](file:///c:/Users/tridi/Works/Geekboots/templates/Triyasa%20and%20Tomoy%20Reception/css/style.css) and edit the values under `:root` (lines 29–52).
- You can instantly switch from dusty blue to pastel emerald, blush rose, lavender, or royal burgundy by tweaking `--primary-blue`, `--primary-blue-dark`, and `--primary-blue-light`.

---

## 🌐 Browser Support & Performance

- **Chrome / Edge / Chromium**: Full support (Web Audio API, Canvas 2D, Backdrop Filter, Print CSS).
- **Safari (macOS & iOS)**: Full support with `-webkit-` vendor prefixes included.
- **Firefox**: Full support.
- **Mobile Browsers**: Fully optimized touch targets, mobile navigation drawer, responsive typography (`clamp()` units), and fast image lazy-loading (`loading="lazy"`).

---

## 📄 License & Credits

- **Aesthetic Direction & Template Design**: Created for the wedding celebration of Triyasa & Tanmoy.
- **Icons**: [Font Awesome Free](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (`Cinzel`, `Cormorant Garamond`, `Great Vibes`, `Plus Jakarta Sans`)
- **Audio & Animations**: 100% bespoke procedural code using HTML5 Canvas and native Web Audio API.

---

*Made with love & blessings for Triyasa & Tanmoy. Shubho Bibaho!* 🕊️✨

