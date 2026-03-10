# Recommendations / Testimonials Section — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a testimonials section at the bottom of the resume page styled like a product landing page, with quote cards that expand on hover and link to PDF evidence on click.

**Architecture:** Single markdown file holds all recommendation data as YAML frontmatter; a new `Recommendations.astro` component reads it and renders the section; the resume page imports and renders the component at the bottom of `<main>`. No React — pure Astro + Tailwind CSS only.

**Tech Stack:** Astro, Tailwind CSS, TypeScript

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/data/recommendations.md` | Single source of truth — edit this file to add/update people |
| Create | `src/components/Recommendations.astro` | Renders the full testimonials section |
| Modify | `src/pages/resume.astro` | Import and render `<Recommendations />` below the two-column grid |
| Create | `public/recommendations/` | Directory for PDF evidence files (placeholder names in data file) |

---

## Chunk 1: Data File + Component

### Task 1: Create the data source

**Files:**
- Create: `src/data/recommendations.md`

This is the single file the user edits to update recommendations. All 3 placeholders live here.

- [ ] **Step 1: Create `src/data/recommendations.md`**

```markdown
---
recommendations:
  - name: "Jane Doe"
    title: "Head of Technology"
    company: "Funlab"
    relationship: "Direct Manager at Funlab"
    excerpt: "Alex consistently delivers complex Salesforce solutions with exceptional technical depth and ownership that is rare to find."
    fullReview: "Alex consistently delivers complex Salesforce solutions with exceptional technical depth. I had the pleasure of working with Alex for two years at Funlab, where he single-handedly owned the entire Salesforce platform across 60+ venues. His ability to diagnose production incidents under pressure, communicate clearly with stakeholders, and then document the solution so no one else has to figure it out again — that's what separates him from other developers. A genuine 10x force multiplier."
    pdfPath: "/recommendations/placeholder-1.pdf"
    linkedinUrl: "https://www.linkedin.com/in/"

  - name: "John Smith"
    title: "Senior Manager"
    company: "Deloitte Digital"
    relationship: "Delivery Lead at Deloitte Digital"
    excerpt: "One of the most technically rigorous Salesforce developers I've worked alongside — meticulous, reliable, and always thinking three steps ahead."
    fullReview: "One of the most technically rigorous Salesforce developers I've worked alongside. Alex brings a rare combination of Apex mastery, LWC expertise, and the kind of calm, methodical problem-solving that makes production incidents far less stressful. On every engagement, he was the person others came to when things got complicated. I'd work with him again without hesitation."
    pdfPath: "/recommendations/placeholder-2.pdf"
    linkedinUrl: "https://www.linkedin.com/in/"

  - name: "Sarah Lee"
    title: "Salesforce Consultant"
    company: "Deloitte Digital"
    relationship: "Peer at Deloitte Digital"
    excerpt: "Alex's approach to technical leadership and knowledge sharing lifted the entire team — his onboarding docs and reusable Apex libraries became team standards."
    fullReview: "Alex's approach to technical leadership and knowledge sharing is outstanding. He built comprehensive onboarding documentation and an Apex script repository that the team still references long after he moved on. He had a gift for making complex technical concepts approachable without dumbing them down. A genuine force multiplier on any engineering team — the kind of colleague you want on every project."
    pdfPath: "/recommendations/placeholder-3.pdf"
    linkedinUrl: "https://www.linkedin.com/in/"
---
```

- [ ] **Step 2: Create the `public/recommendations/` directory with a README placeholder**

```bash
mkdir -p public/recommendations
echo "Place PDF recommendation letters here. Filenames must match pdfPath in src/data/recommendations.md" > public/recommendations/README.txt
```

- [ ] **Step 3: Verify the data file looks correct by opening it**

---

### Task 2: Create the Recommendations component

**Files:**
- Create: `src/components/Recommendations.astro`

Design spec:
- Full-width section, visually separated from resume content above
- Centered header: section label + headline + subheadline (landing-page style)
- 3-column grid on desktop, 1-column on mobile
- Each card:
  - Quotation mark icon (decorative, accent-coloured)
  - Quote text: `line-clamp-3` by default → `line-clamp-none` on hover (smooth CSS transition via `max-h`)
  - Name, title, company, relationship tag
  - "View Recommendation" button → opens PDF in new tab
  - Hover: border turns accent, shadow increases
- Matches existing site dark-mode palette: `bg-card`, `border-border`, `text-text-muted`, `text-accent`

- [ ] **Step 1: Create `src/components/Recommendations.astro`**

```astro
---
// ─── Recommendations data ─────────────────────────────────────────────────────
// Data comes from src/data/recommendations.md frontmatter.
// Edit that file to update people, quotes, and PDF paths.
const recFile = await import('../data/recommendations.md');
const recommendations = (recFile as any).frontmatter.recommendations as Array<{
  name: string;
  title: string;
  company: string;
  relationship: string;
  excerpt: string;
  fullReview: string;
  pdfPath: string;
  linkedinUrl: string;
}>;
---

<section class="w-full border-t border-border mt-16 pt-16 pb-8" data-fade-up>
  <!-- Section header (landing-page style) -->
  <div class="text-center mb-12">
    <p class="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Recommendations</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-4">What colleagues say</h2>
    <p class="text-text-muted max-w-xl mx-auto text-base">
      Verified recommendations from managers and peers across Funlab and Deloitte Digital.
    </p>
  </div>

  <!-- Cards grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {recommendations.map(rec => (
      <div class="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300 cursor-default">

        <!-- Quotation mark -->
        <div class="text-accent text-5xl font-serif leading-none mb-4 select-none">"</div>

        <!-- Quote — expands on hover via max-h transition -->
        <div class="overflow-hidden transition-all duration-500 ease-in-out max-h-[4.5rem] group-hover:max-h-[40rem] mb-6 flex-1">
          <p class="text-sm text-foreground/90 italic leading-relaxed">
            {/* Show excerpt as the first visible text; full review contains it */}
            <span class="group-hover:hidden">{rec.excerpt}</span>
            <span class="hidden group-hover:inline">{rec.fullReview}</span>
          </p>
        </div>

        <!-- Person info -->
        <div class="flex items-center gap-3 mb-4">
          <!-- Avatar: initials circle -->
          <div class="shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm select-none">
            {rec.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div class="min-w-0">
            <p class="text-sm font-semibold truncate">{rec.name}</p>
            <p class="text-xs text-text-muted truncate">{rec.title} · {rec.company}</p>
          </div>
        </div>

        <!-- Relationship tag -->
        <p class="text-xs text-text-muted mb-4 italic">{rec.relationship}</p>

        <!-- PDF link -->
        {rec.pdfPath && (
          <a
            href={rec.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-xs font-medium text-accent hover:opacity-80 transition-opacity mt-auto"
            aria-label={`View full recommendation from ${rec.name}`}
          >
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            View recommendation letter
            <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        )}
      </div>
    ))}
  </div>
</section>
```

**Note on hover behaviour:** The `max-h` transition on the quote div animates the expansion smoothly. The `<span class="group-hover:hidden">` shows the excerpt when not hovered; `<span class="hidden group-hover:inline">` shows the full review when hovered. This is pure CSS — no JavaScript needed.

---

### Task 3: Wire into the resume page

**Files:**
- Modify: `src/pages/resume.astro:1-7` (frontmatter imports)
- Modify: `src/pages/resume.astro:323-325` (just before `</main>`)

- [ ] **Step 1: Add import to resume.astro frontmatter**

In `src/pages/resume.astro`, find the import block (lines 1–7):

```astro
---
import Layout from "@/layouts/Layout.astro";
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import { SITE } from "@/config";
import { EXPERIENCE, PROJECTS, SKILLS, SKILL_GROUPS, EDUCATION, CERTS } from "@/data/resume";
---
```

Add one line:

```astro
---
import Layout from "@/layouts/Layout.astro";
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import Recommendations from "@/components/Recommendations.astro";
import { SITE } from "@/config";
import { EXPERIENCE, PROJECTS, SKILLS, SKILL_GROUPS, EDUCATION, CERTS } from "@/data/resume";
---
```

- [ ] **Step 2: Add `<Recommendations />` to the resume page body**

Find (around line 323):
```astro
    </div>
  </main>
  <Footer />
```

Replace with:
```astro
    </div>

    <Recommendations />
  </main>
  <Footer />
```

The `</div>` closes the two-column grid; `<Recommendations />` renders the full-width testimonials section below it.

---

### Task 4: Build verification

- [ ] **Step 1: Run type check**

```bash
cd /home/alexhuang/projects/alex-huang.dev && npm run astro check
```

Expected: no errors.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: build completes with no errors. Check for any frontmatter import warnings.

- [ ] **Step 3: Start dev server and visually verify**

```bash
npm run dev
```

Navigate to `http://localhost:4321/resume` and verify:
- Testimonials section appears below the certifications section
- 3 cards visible with excerpt quotes
- Hover over a card → quote expands to full review
- "View recommendation letter" link is present on each card
- Responsive: on mobile (< md), cards stack vertically

- [ ] **Step 4: Commit**

```bash
git add src/data/recommendations.md src/components/Recommendations.astro src/pages/resume.astro public/recommendations/README.txt
git commit -m "feat: add recommendations testimonials section to resume page"
```

---

## Notes for Future Use

**To add a real recommendation:**
1. Open `src/data/recommendations.md`
2. Add a new entry to the `recommendations` array in the YAML frontmatter
3. Place the PDF at `public/recommendations/your-filename.pdf`
4. Update `pdfPath` in the entry to `/recommendations/your-filename.pdf`
5. Commit and push — deploys automatically

**To replace a placeholder:**
- Edit the name, title, company, excerpt, fullReview, and pdfPath fields
- Replace `linkedinUrl` with the person's real LinkedIn URL
