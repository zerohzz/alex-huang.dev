# alex-huang.dev

**Live site:** [alex-huang.dev](https://alex-huang.dev)

Personal website for Alex Huang — senior Salesforce engineer and technical consultant based in Melbourne, Australia. Built as a portfolio and technical blog to document projects, career experience, and engineering insights.

Built with **Astro** + **Tailwind CSS**, deployed to GitHub Pages via GitHub Actions.

---

## Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Content:** Markdown via glob loading (`src/data/blog/`)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (`withastro/action`)
- **Domain:** alex-huang.dev

---

## Project Structure

```
src/
  components/       # Astro components (Hero, Header, Footer, ProjectCard, etc.)
  layouts/          # Page layouts
  pages/            # Routes: /, /resume, /projects, /blog, /blog/[slug]
  data/
    blog/           # Markdown blog posts (glob loaded)
    resume.ts       # Experience, projects, skills, education, certs
    hero.ts         # Hero bio + roles
    nav.ts          # Navigation links
  styles/

public/
  images/           # Static images
  resume/           # Resume PDF
  CNAME             # alex-huang.dev
  llms.txt          # LLM-facing site summary
  llms-full.txt     # Full LLM-facing content
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home / Hero |
| `/resume` | Work experience, skills, education |
| `/projects` | Project portfolio |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog post |
