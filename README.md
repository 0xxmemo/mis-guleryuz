# Mis Guleryuz — Talent Consultant

A modern, professional landing page for a talent consultant, built with Next.js and styled with Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **TypeScript** for type-safe development
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Tailark** component registry for pre-built UI blocks

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build for Production

```bash
npm run build
```

## Editing Content

### Services

Edit your services list in `src/data/services.ts`. Each service object supports:

- **id** (string) — unique identifier
- **title** (string) — service name
- **description** (string) — brief overview
- **icon** (string, optional) — icon identifier
- **duration** (string, optional) — e.g., "1 hour", "30 mins"
- **price** (string, optional) — e.g., "$150", "Custom quote"
- **features** (string[], optional) — array of key features or benefits

Example:

```typescript
{
  id: "career-coaching",
  title: "Career Coaching",
  description: "1-on-1 guidance for your next career move",
  icon: "briefcase",
  duration: "1 hour",
  price: "$150",
  features: ["Resume review", "Interview prep", "Salary negotiation"]
}
```

### Site-Wide Information

Edit `src/data/site.ts` to update:

- **name** — your full name
- **tagline** — your professional headline
- **bio** — about you
- **email** — contact email
- **socials** — links to LinkedIn, Twitter, etc.
- **bookingUrl** — your Google Calendar appointment scheduling link (see Booking section below)

## Environment Variables

### TAILARK_API_KEY

Store your Tailark API key in `.env.local` (already gitignored for security):

```
TAILARK_API_KEY=your_key_here
```

This is only needed if you're fetching or adding new Tailark blocks. For everyday development and building, you don't need to configure it.

**To use the shadcn CLI with the key sourced:**

```bash
set -a; . .env.local; set +a && npx shadcn add
```

## Booking

To enable appointment scheduling:

1. Set up [Google Calendar Appointment Scheduling](https://support.google.com/calendar/answer/10729076)
2. Copy your scheduling link
3. Paste it into the `bookingUrl` field in `src/data/site.ts`

The booking button and link will appear throughout the site automatically.

## Deployment

This site deploys seamlessly to **Vercel**:

1. Push your repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Deploy with a single click

No additional configuration needed — Vercel handles Next.js builds automatically.
