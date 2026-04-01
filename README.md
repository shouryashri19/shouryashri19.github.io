# Shourya Shrivastava Portfolio Website

A production-ready personal portfolio and blog built with Next.js, React, TypeScript, and Tailwind CSS for a finance-oriented professional brand.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Markdown-based blog content (`content/blog`)
- GitHub Actions scheduler for automatic daily blog publishing

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

## Build and Run Production

```bash
npm run build
npm run start
```

## Project Structure

```text
app/
  about/
  blog/
    [slug]/
    tags/[tag]/
  contact/
  education/
  projects/
  resume/
  skills/
  layout.tsx
  page.tsx
components/
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
public/
  Shourya_Shrivastava_Resume.pdf
```

## Resume-Driven Content

Resume-backed content is centralized in:

- `content/data/profile.ts`

Update this file to edit:

- Bio and summary
- Education
- Experience
- Projects
- Skills
- Certifications
- Highlights

Also update professional links in:

- `lib/site-config.ts`

## Blog Content Workflow

### Manual post creation

Add markdown files in `content/blog/`:

```md
---
title: "Your Title"
excerpt: "Short summary"
date: "2026-04-01"
tags:
  - Finance Careers
featured: false
published: true
---

Your post body here.
```

### Automatic daily publishing (8:00 AM local time)

Automation is implemented in:

- Scheduler: `.github/workflows/daily-blog.yml`
- Generator script: `scripts/generate-daily-post.mjs`

How it works:

1. GitHub Action runs hourly.
2. Script checks local hour in configured timezone.
3. At configured hour (default `8`), it generates a new post in `content/blog/`.
4. If review is required, it opens a PR.
5. If review is not required, it commits directly to the default branch.

### Configure publish behavior

Set GitHub Repository Variables:

- `BLOG_TIMEZONE` (default `America/New_York`)
- `BLOG_PUBLISH_HOUR_LOCAL` (default `8`)
- `REQUIRE_REVIEW` (`true` or `false`, default `true`)
- `PUBLISH_MODE` (`published` or `draft`, default `published`)

### Force publish manually

Run the workflow manually with:

- `force_publish = true`
- Optional `publish_mode = draft` for review-only output

## Safety and Review Controls

- `REQUIRE_REVIEW=true` routes automated output through pull requests.
- `PUBLISH_MODE=draft` writes posts with `published: false` so they do not appear live.
- Existing slug check prevents duplicate posts for the same day/topic.

## Deployment

Recommended: Vercel.

1. Push this repository to GitHub.
2. Import project in Vercel.
3. Deploy with default Next.js settings.
4. Add custom domain and update `lib/site-config.ts` (`url`) to production domain.

Also compatible with Netlify and most Node hosting providers.

## GitHub Pages Deployment (Configured)

This project is pre-configured for a GitHub Pages user site at:

- `https://shouryashri19.github.io/`

Files already wired:

- `next.config.mjs` (static export + repo basePath)
- `.github/workflows/pages.yml` (build and deploy pipeline)

Steps:

1. Create repository `shouryashri19.github.io` under `shouryashri19`.
2. Push this folder to the `main` branch.
3. In GitHub repo settings, open `Pages`.
4. Set source to `GitHub Actions`.
5. Wait for workflow `Deploy to GitHub Pages` to finish.

## Notes on Source Data

Primary source was your uploaded resume PDF path:

- `c:\Users\SHOURYA\OneDrive\Desktop\Applications\Shourya_Shrivastava_Resume.pdf`

In this local environment, direct PDF text extraction tools were unavailable, so content extraction used the editable resume companion file available in the same folder:

- `Shourya Shrivastava Resume Editable.docx`

Please run a final factual pass against your PDF before deployment and adjust `content/data/profile.ts` where needed.
