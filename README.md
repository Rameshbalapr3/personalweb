# Ramesh Bala P.R. — Personal Portfolio

Job-focused personal portfolio for software engineering opportunities.

## Site sections

1. **Hero** — Introduction, photo, resume download  
2. **About** — Professional summary  
3. **Experience** — Work history at Easy2Work  
4. **Projects** — Production applications with case studies  
5. **Skills** — Technical skills  
6. **Education** — Degree and certifications  
7. **Contact** — Email, LinkedIn, GitHub  

## Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add your GitHub, LinkedIn, and email URLs.

## Your assets

| File | Purpose |
|------|---------|
| `public/profile.jpg` | Professional headshot |
| `public/resume/Ramesh_Bala_FullStack_Developer.pdf` | Resume for recruiters |
| `public/images/projects/*.png` | Project screenshots |
| `public/og-image.jpg` | LinkedIn/social preview (1200×630) |

## Edit content

All portfolio text is in `src/data/portfolio.ts`.

## Deploy

Deploy to [Vercel](https://vercel.com) with environment variables from `.env.example`.
