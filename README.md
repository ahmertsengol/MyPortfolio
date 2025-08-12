## Portfolio (Next.js + Tailwind v4)

Minimal, fast portfolio with:
- Dynamic background (terminal effect) with live controls
- GitHub profile + featured repos
- Experience, Skills, About, Contact
- SEO: OpenGraph/Twitter, robots.txt, sitemap.xml

### Dev
```bash
npm install
npm run dev
# http://localhost:3000
```

### Config
- Edit profile: `src/data/site.ts`
- Resume data: `src/data/resume.ts`
- Remote images: `next.config.ts`

### Contact
- Free: mailto button (works out of the box). Update `email` in `src/data/site.ts`.
- Optional (disabled by default): API route at `/api/contact` (Resend). Add envs and enable in `Contact.tsx` if needed.

### Deploy (Vercel)
1) Import repo to Vercel, set envs if used
2) Add custom domain → move domain from old project
3) Promote latest deployment to Production
