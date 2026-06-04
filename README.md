# Future Life Tabernacle — Next.js 14 Website

A complete, production-ready, multi-page Next.js 14 website for Future Life Tabernacle church in Karemo, Siaya, Kenya.

## Tech Stack

- **Next.js 14** — App Router with static export
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Page transitions, scroll reveals, animations
- **GSAP-ready** architecture for advanced animations
- **Custom Cursor** with magnetic hover effects
- **3D Tilt Cards** on hover
- **Animated Counters**
- **Self-drawing Timeline** for events
- **Particle Background** in hero
- **Split Text** word-by-word reveals
- **Page Preloader**
- **Persistent WhatsApp Float**
- **Light theme** with warm cream & gold palette

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Mission, Ministries preview, Sermon preview, Events preview, Testimonials, Prayer CTA |
| About | `/about` | History, Mission & Vision, Stats, Leadership, Beliefs, Testimonials |
| Ministries | `/ministries` | Youth, Women, Men, Children, Music & Worship, Evangelism |
| Sermons | `/sermons` | Latest sermon video, Archive, Bible Teachings |
| Events | `/events` | Upcoming events timeline, Weekly rhythm, Past event gallery |
| Prayer | `/prayer` | Prayer types, Request form, Scripture |
| Contact | `/contact` | Contact info, Map, Campuses, Contact form, Giving options |

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

The static export will be generated in the `out` folder.

## Project Structure

```
app/
  layout.tsx          # Root layout with SEO metadata
  globals.css         # Global styles & Tailwind
  page.tsx            # Home page
  about/page.tsx      # About page
  ministries/page.tsx # Ministries page
  sermons/page.tsx    # Sermons page
  events/page.tsx     # Events page
  prayer/page.tsx     # Prayer request page
  contact/page.tsx    # Contact & giving page
components/
  ClientLayout.tsx    # Client-side layout wrapper
  Navbar.tsx          # Fixed navigation with scroll effect
  Footer.tsx          # Site footer
  CustomCursor.tsx    # Custom cursor with hover states
  WhatsAppFloat.tsx   # Floating WhatsApp button
  PageLoader.tsx      # Page preloader animation
  ScrollReveal.tsx    # Scroll-triggered reveal component
  SplitText.tsx       # Word-by-word text animation
  TiltCard.tsx        # 3D perspective tilt on hover
  MagneticButton.tsx  # Magnetic hover effect for buttons
  ParticleBackground.tsx # Canvas particle network
  Counter.tsx         # Animated number counter
public/
  pics/               # Church images
  videos/             # Video files
```

## Assets Required

Place your images in `public/pics/`:

```
public/pics/
  001.JPG, 004.JPG, 009.JPG, 016.JPG, 048.JPG, 049.JPG, 073.JPG
  youth.jpg, men.jpg, kids.jpg
  pastor1.jpg, pastor2.jpg, pastor3.jpg
  sermon1.jpg, sermon2.jpg, sermon3.jpg
  person1.jpg, person2.jpg
public/videos/
  church-hero.mp4
```

## Contact

Future Life Tabernacle  
Karemo, Siaya, Kenya  
info@futurelifetabernacle.com  
+2547 4048 5416

Social: [Facebook](https://www.facebook.com/bishopisaacobure) • [YouTube](https://www.youtube.com/@bishopisaacobure) • [Instagram](https://www.instagram.com/bishop_isaac_obure/)
