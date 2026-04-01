# Shourya Shrivastava Portfolio Website

A production-ready personal portfolio for finance, investment banking, and business careers, built with Next.js + TypeScript + Tailwind.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Markdown-based blog (`content/blog`)
- GitHub Actions for:
  - daily blog generation
  - GitHub Pages deployment

## Local Setup

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build (Production Check)

```bash
npm run build
```

## Project Structure

```text
app/
  about/
  blog/
    [slug]/
    archive/
    tags/[tag]/
  certifications/
  contact/
  education/
  projects/
  resume/
  skills/
components/
  article-card.tsx
  certification-card.tsx
  project-card.tsx
content/
  blog/
  data/profile.ts
lib/
  blog.ts
  markdown.ts
  site-config.ts
scripts/
  generate-daily-post.mjs
.github/workflows/
  daily-blog.yml
  pages.yml
```

## LinkedIn + Medium Integration

Profile links are configured in:

- `lib/site-config.ts`

Content architecture is in:

- `content/data/profile.ts`

### LinkedIn integration points

- Home hero CTA
- Home LinkedIn Highlights panel
- About page LinkedIn section
- Contact page CTA
- Footer link

### Medium integration points

- Home Featured Writing cards
- Blog page "Featured Writing and Publications" section
- About writing identity section
- Contact page CTA
- Footer link

## Data Source Notes

This project uses resume + publicly visible Medium content + LinkedIn profile URL as primary profile references.

- Resume source path used in project setup:
  - `c:\Users\SHOURYA\OneDrive\Desktop\Applications\Shourya_Shrivastava_Resume.pdf`
- LinkedIn URL:
  - `https://www.linkedin.com/in/shourya-shrivastava-394035257/`
- Medium URL:
  - `https://medium.com/@shouryashri19`

Important:

- LinkedIn can block unauthenticated scraping/rate-limit automated extraction.
- Because of this, `content/data/profile.ts` includes explicit manual-sync placeholders for LinkedIn-only items (headline, featured links, credential URLs, optional volunteer/organization entries).
- No fake projects/certifications/awards are added.

## Projects and Certifications Architecture

Reusable components:

- `components/project-card.tsx`
- `components/certification-card.tsx`
- `components/article-card.tsx`

Dedicated certifications page:

- `/certifications`

To add a project/certification/article, edit arrays in:

- `content/data/profile.ts`

## Blog System (Upgraded)

### Manual post format

```md
---
title: "Your title"
excerpt: "Summary"
date: "2026-04-01"
tags:
  - Finance Careers
featured: false
published: true
---

Paragraph 1...

Paragraph 2...

Paragraph 3...

Paragraph 4...

Paragraph 5...
```

### Daily automation

- Workflow: `.github/workflows/daily-blog.yml`
- Generator: `scripts/generate-daily-post.mjs`

### Quality gates enforced in generator

- minimum 5 full paragraphs
- minimum 70 words per paragraph
- minimum 500 words total
- duplicate paragraph detection
- finance/business/professional topic library

### Scheduler configuration (GitHub Variables)

- `BLOG_TIMEZONE` (default `America/New_York`)
- `BLOG_PUBLISH_HOUR_LOCAL` (default `8`)
- `REQUIRE_REVIEW` (`true` recommended)
- `PUBLISH_MODE` (`published` or `draft`)

### Manual trigger

Use workflow dispatch with:

- `force_publish = true`
- optional `publish_mode = draft`

## GitHub Pages Deployment

Configured for user site:

- `https://shouryashri19.github.io/`

Deployment workflow:

- `.github/workflows/pages.yml`

Steps:

1. Push to `main` in `shouryashri19.github.io` repo.
2. In repo settings, set Pages source to `GitHub Actions`.
3. Wait for `Deploy to GitHub Pages` workflow to finish.

## Routine Maintenance Checklist

1. Update new experience/projects/certifications in `content/data/profile.ts`.
2. Add credential URLs when available.
3. Add new Medium article references under `mediumArticles`.
4. Review daily generated blog PRs before merging when `REQUIRE_REVIEW=true`.
5. Keep `site-config.ts` links current.
