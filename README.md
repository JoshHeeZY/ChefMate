# Recipes App (Starter)

A clean **recipes-only** web app using **Next.js (App Router)** + **TypeScript** + **Prisma** + **Postgres**.

- Browse recipes
- Create new recipe (title, description, ingredients, steps, tags, optional image URL)
- View recipe detail
- Simple REST API routes for CRUD

## Tech
- Next.js 14 (App Router)
- Prisma + PostgreSQL (use Supabase or Neon for hosting the DB)
- Deployed best on Vercel

## Quick start
```bash
pnpm i         # or npm i / yarn
cp .env.example .env
# set DATABASE_URL in .env
pnpm prisma:generate
pnpm prisma:migrate --name init
pnpm dev
```

Open http://localhost:3000

## Environment
- `DATABASE_URL` — Postgres connection string

## Next steps
- Add auth (Auth.js or Supabase Auth) if you need private admin
- Swap image URL input for Cloudinary uploads later
- Add search (Postgres full-text; you can upgrade to Meilisearch)