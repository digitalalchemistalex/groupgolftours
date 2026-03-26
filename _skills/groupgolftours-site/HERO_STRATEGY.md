# GroupGolfTours Hero Banner — LOCKED PATTERN
# Status: PERFECT as of March 25 2026. Do not change without explicit instruction.

## Architecture

### Desktop (>900px)
- Section: `display:flex`, `height:100vh`
- LEFT PANEL (46% width): Solid opaque `panelBg` colour per region — NO photo bleed
  - Accent left strip (3px gradient line)
  - Tag (eyebrow) + headline + emphasis (italic accent colour)
  - Sub text `rgba(255,255,255,.72)` — readable
  - Pills (border + semi-transparent bg)
  - Two CTAs: solid accent button + ghost border button
  - 3 fact cards (key stats per region)
  - Nav dots + SVG chevron arrows at bottom
- RIGHT PANEL (flex:1): Photo lives HERE — not behind everything
  - Outgoing photo fades out on transition
  - Active photo: no animation on first load (mounted=false), fade-in on transitions
  - Ken Burns zoom (14s ease-in-out infinite alternate)
  - Left-edge gradient blend + bottom vignette overlays
  - INTEL CARD: anchored top:16 bottom:100, flex column, 3 blocks:
    1. Price block (green fee, sample package, booking urgency bar with animation, badge)
    2. Season strip (two separate grid rows — bars + letters, fixed heights, nothing clips)
    3. Courses + non-golf
- REGION ANCHOR STRIP: position:absolute bottom:0, full width, 92px height
  - 5 buttons, each with photo bg, gradient overlay, accent bar
  - Active region: flex:2.2, brighter photo, accent label
  - Inactive: flex:1, dim, "tap" micro-label
  - Click navigates to that slide + pauses auto-advance

### Mobile (<=900px)
- RIGHT PANEL hidden (`display:none`)
- Left panel full width, `height:auto` (no wasted space)
- INTEL STRIP: position:absolute, bottom:58px, height:72px
  - Contained in `.hs-mob-wrap` div
  - Glow blobs (accent colour, blur:32px, drifting CSS animation) for warmth
  - Single `.hs-ticker-track` with CSS animation `ticker 10s linear forwards` (plays ONCE, no loop)
  - Cards: Price → Package → Books Out → Season strip → Courses → Non-Golf
  - `overflow-x:auto` + `touch-action:pan-x` — swipe works
  - Touch pauses animation via `stripPaused` state, resumes after 3s
- REGION ANCHOR STRIP: 56px height on mobile
- Nav dots hidden on mobile (region strip is the navigation)

## Timing
- Slide interval: 10s
- Progress bar: 10s (matches slide)
- Ticker: 10s forwards (one pass = one slide duration, then stops)
- Hero auto-advance pauses on ANY interaction (dot click, arrow, region tap, hover)
- Resumes after 5s idle via `pauseAndResume()`

## Per-Region Data
Each slide has: id, region, tag, href, headline, emphasis, sub, pills[], facts[],
package{label,nights,rounds,price,note}, booking{label,value,urgency,tip},
season[12 values 0-1], nonGolf, courses[], badge, img, imgPos, panelBg, accent

## Key Lessons
- Photo MUST live inside the right div — never absolute behind everything (z-index fights)
- First slide photo: skip animation class until mounted=true (SSR renders blank otherwise)
- ALWAYS verify Unsplash photo URLs return HTTP 200 before using
- Unicode box-drawing chars (═══) in JSX comments break TypeScript parser silently
- Two separate grid rows for season bars + labels — never combined (labels clip)
- Ticker duplicate for loop: ONE track with real cards only, `forwards` not `infinite`
- Two separate ticker tracks = cards show twice (wrong). One track, no duplicate.
