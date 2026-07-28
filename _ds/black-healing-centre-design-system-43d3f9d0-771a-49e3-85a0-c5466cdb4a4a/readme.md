# Black Healing Centre — Design System

A design system distilled from the **Black Healing Centre (BHC)** Brand Guidelines. BHC is a Montreal (Tiohtià:ke) community organization creating **"an accessible and safer space for Black people to gather, connect and heal."** It offers free and subsidized therapeutic services and intergenerational programming for people of African and Caribbean descent, reimagining healing through a community-centred and artistic lens.

The identity's guiding ethos is **"for us, by us"** and the personality of a **"cool auntie": wise and protective, yet inherently joyful and approachable** — a trusted hub of care that feels like a soft, welcoming home.

## Sources
- `uploads/BHC_BrandGuideline.pdf` — the 28-page brand guideline (logo, colour, typography, in-context mockups). This is the single source of truth for this system.
- Font packages: `Poppins` (Bold / SemiBold / Regular, OFL) and `Ramboia-Italic.otf` (paid — R-Typography desktop licence included in the package).
- Logo & illustration packages: primary **blossom icon** in 19 colourways (PNG + SVG) and **9 illustration pose variations** across the full palette (PNG + SVG).
- Prepared by *Six Cinquième* for BHC.

> ⚠️ **Missing asset:** an "EN Logo" package (the official vector **wordmark**) was referenced in the upload manifest but was **not present** on the filesystem. The `Logo` component therefore typesets the wordmark in Poppins Bold to match the guideline specimen. **Please re-upload the official wordmark (EN + FR) files.**

---

## CONTENT FUNDAMENTALS — how BHC writes

**Voice:** warm, affirming, communal, and quietly confident. It speaks *as* the community, not *at* it — the "cool auntie" who is protective and wise but never clinical or cold.

- **Person:** collective **"we"** for the organization ("we aim to empower…", "we have achieved") and direct, inviting **"you / your"** for the reader ("Reclaim **your** well-being", "Return to **your** roots", "Come as **you** are"). Rarely "I".
- **Tone:** healing-centred and hopeful, but grounded — it "balances a contemporary confidence with a deep respect for the weight of our work." Never saccharine, never corporate.
- **Casing:** Headlines and body use normal sentence case. Micro-labels and category tags are **ALL-CAPS with wide tracking** (e.g. `COMMUNITY EVENT`, `WORKSHOP`). Titles in the guideline sometimes appear in playful title case.
- **Whimsy through form:** the brand deliberately breaks typographic convention — **unexpected text alignments and intentional italics** — to feel "expansive, playful… fully claiming and embracing its own space." Italics (Ramboia) carry the emotional, human beats.
- **Rhythm:** short, breath-like fragments stacked as lists — *"mental / physical / emotional / spiritual well-being"* — mirroring the ethos of wholeness.
- **Specificity of place:** names its home explicitly — **Tiohtià:ke (Montréal)**, "2100 Av. de Marlowe, 4th Floor, Suite 449."
- **Emoji:** **not used.** The brand's expressiveness comes from the blossom illustrations and Ramboia italics, never emoji.

**Example copy (from the guideline):**
> "BHC is dedicated to creating intergenerational programming that reimagines healing through a community-centred and artistic lens."
> "Reclaim your mental, physical, emotional, spiritual well-being."
> "Return to your roots." · "Lift Your Voice." · "For us, by us."

---

## VISUAL FOUNDATIONS

**Overall vibe:** warm, earthy, botanical and joyful — sunlit clay and forest tones on cream, punctuated by bright accents. Organic and hand-shaped, never sterile or techy.

- **Colour:** a large earthy palette (see `tokens/colors.css`). Grounds are warm off-whites — **Ivory `#FFFBF2`** (page) and **Bone `#FBF1DD`** (cards/panels). Ink is **Espresso `#2E1308`**. Primary accent is **Terracotta `#A5593C`**; secondary is **Fern `#21602B`**. Brights (Sun, Tangerine, Poppy, Sky, Blossom) are used sparingly for energy. The guideline mandates **high-contrast pairings** (e.g. Espresso/Sun, Fern/Butter, Terracotta/Ivory) and warns against low-contrast combinations.
- **Type:** two families. **Poppins** (Regular / SemiBold / Bold) is the geometric-humanist workhorse for headings, UI and body. **Ramboia Italic** is the expressive display face used *sparingly* for accent lines, pull-quotes, and event titles — this is where the whimsy lives. Headings are tightly tracked (`-0.02em`); micro-labels are widely tracked all-caps (`0.12em`).
- **Imagery / illustration:** the brand leads with **illustration, not photography.** The signature is a single organic **"blossom + roots"** figure (the human form as roots merging into a flower — self-actualization, community as a garden in bloom) rendered in **9 expressive poses** and any brand colour. Used as spot marks, corner motifs, oversized watermarks, and repeating patterns. Colour vibe is warm and saturated-but-soft.
- **Backgrounds:** flat brand-colour fields (cream, fern, espresso, terracotta) — **no gradients, no photographic textures.** Depth comes from layered solid organic shapes (circles/blobs behind the blossom) and the illustrations themselves.
- **Corners:** generous and soft. Radii scale `sm 8 → md 14 → lg 22 → xl 32`; buttons, tags and chips are **fully rounded pills** (`--radius-pill`).
- **Cards:** soft cream (Bone) or white surfaces, generous padding, `lg` radius, and a **warm espresso-tinted shadow** — never a cool grey drop shadow. Optional hover lift. No coloured-left-border cards.
- **Shadows:** warm and low-contrast — `rgba(46,19,8,·)` at low alpha (`--shadow-sm/md/lg`). Focus uses a terracotta ring `--shadow-focus`.
- **Borders:** cream hairlines (`--border-soft #E7D9BF`) for structure; espresso `--border-strong` (1.5–2.5px) for emphasis/outline controls.
- **Motion:** gentle and grounded — ease-out fades and small (1–3px) rises. **No bounce, no spring.** Durations 140/240/420ms. Hover = darken + slight lift + warm shadow; press = settle back down (no shrink). Respect reduced-motion.
- **Transparency / blur:** used lightly — the sticky header is translucent Ivory with a subtle backdrop blur; modals use an espresso scrim with light blur. Not a glassmorphism-heavy system.
- **Layout:** centred containers (`--container-lg 75rem`) on a 4px grid; the brand encourages *asymmetry and unexpected alignment* in expressive/editorial contexts.

---

## ICONOGRAPHY

- **The brand has no conventional UI icon set.** Its iconography *is* the **blossom illustration system** — the organic mark in 9 poses (see `assets/illustrations/` and `assets/logo/`). Treat these as the primary "icons": spot marks, section accents, empty-state art, watermarks. They ship as **SVG (preferred, scalable) and PNG** in every colourway. Never redraw, recolour outside the palette, distort, mirror, outline, or add effects to them.
- **Logo icon:** the single "primary" blossom pose in 19 colourways lives in `assets/logo/` — use for the mark/favicon/lockup. Minimum sizes from the guideline: icon-only ≥ **32px**, full-logo icon ≥ **73px**. Clear space ≥ **3× the wordmark line spacing** on all sides.
- **Functional UI glyphs** (close, chevron, arrow, plus, social): the brand package supplies none. For product UI, use a **CDN line-icon set that matches the soft, rounded, medium-weight feel — [Lucide](https://lucide.dev) (recommended)** — and keep strokes ~2px, rounded caps/joins, in `--text-strong` or `--text-accent`. **This is a substitution, not a brand asset — flag it and confirm the preferred icon set with BHC.** The `IconButton` component accepts any glyph node; do not bake in emoji.
- **Emoji / unicode:** **not part of the brand.** Avoid emoji entirely. Small unicode marks (▾ chevron, ✓ check) are used only as functional affordances inside components, never as decoration.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this one file). `@import`s all tokens + fonts.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloadable use.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated** (do not edit).

**tokens/** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii/shadows/motion).

**assets/**
- `fonts/` — Poppins (3 weights) + Ramboia Italic.
- `logo/svg/` + `logo/png/` — primary blossom icon, 19 colourways.
- `illustrations/svg/` — blossom pose variations 1–9 across ~12 colourways.

**components/** (React primitives — `window.BlackHealingCentreDesignSystem_43d3f9.*`)
- `brand/` — **Logo**, **Blossom**
- `forms/` — **Button**, **IconButton**, **Input**, **Textarea**, **Select**, **Checkbox**
- `content/` — **Card**, **EventCard**, **Tag**, **SectionHeading**, **Quote**

**ui_kits/**
- `website/` — BHC marketing homepage recreation (header, hero, programs, mission, events, footer, donate flow).

**guidelines/** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

### Intentional additions
The brand package defines identity assets, not a UI component library. The component set above is authored to fit BHC's real materials (community events, programs, donation, newsletter): **EventCard**, **SectionHeading** and **Quote** are brand-specific compositions drawn directly from the poster/in-context system; the remaining primitives are standard controls styled to the brand. **Blossom** and **Logo** wrap the supplied brand assets.

### Font substitution
All fonts are the **real brand fonts** (supplied). No substitutions were required. Ramboia is a **paid** face (licence in the package) — ensure downstream use is covered by BHC's licence.
