# Profile photo setup

1. Take your file: `WhatsApp Image 2026-08-28 at 7.26.02 AM.jpeg`
2. **Rename it to** `profile.jpg` (avoids spaces and broken URLs)
3. **Copy it here:** `public/profile.jpg`

No `.env` change needed — the site uses `/profile.jpg` by default.

Optional: create `.env.local` in the project root only if you use a different path:

```
NEXT_PUBLIC_PROFILE_IMAGE=/profile.jpg
```

**Note:** `.env.example` is documentation only. Next.js reads `.env.local` for local development.
