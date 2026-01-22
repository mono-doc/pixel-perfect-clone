# Resend Docs: Send emails with Next.js (capture)

## Page layout & navigation
- **Top nav (header)**: Resend logo on the left; centered search input (placeholder "Search…", shows `Ctrl K` shortcut); `Ask AI` pill button; text links `Sign In` + **filled** `Get Started` button on the right.
- **Left sidebar**: persistent nav with section labels and nested items (see sidebar section list below).
- **Main content column**: article title, intro, numbered steps, code blocks, and example cards.
- **Right TOC column** labeled **On this page** with anchor links to each section (see TOC list below).

### Sidebar sections + items (left column)
- **Documentation**
  - Introduction
- **Quickstart**
  - Node.js (section label)
    - Introduction
    - Next.js (current page highlighted)
    - Remix
    - Nuxt
    - SvelteKit
    - Express
    - RedwoodJS
    - Hono
    - Bun
    - Astro
    - Railway
- **Learn**
  - Sending
  - Receiving
  - Audience
  - Domains
  - Logs
  - API Keys
  - Broadcasts
  - Templates
  - Settings
- **Resources**
  - Examples
  - SDKs
  - Security
  - Integrations
  - Storing Webhooks Data

## TOC / anchor targets (right column)
- **On this page**
  - Prerequisites → `#prerequisites`
  - 1. Install → `#1-install`
  - 2. Create an email template → `#2-create-an-email-template`
  - 3. Send email using React → `#3-send-email-using-react`
  - 4. Try it yourself → `#4-try-it-yourself`

## Main content (headings, body copy, code, callouts, badges)

### H1
- **Send emails with Next.js** (ID: `page-title`)
- Intro paragraph: **“Learn how to send your first email using Next.js and the Resend Node.js SDK.”**
- Inline icon/button cluster to the right of the title: a small button with a down-caret plus a **Copy page** button.

### H2 — Prerequisites (`#prerequisites`)
- Body copy: **“To get the most out of this guide, you’ll need to:”**
- Bullet list:
  - **Create an API key** (link to `https://resend.com/api-keys`)
  - **Verify your domain** (link to `https://resend.com/domains`)
- Body copy: **“Prefer watching a video? Check out our video walkthrough below.”**
- Embedded YouTube video preview card titled **“How to send emails using Next.js App Router …”** (YouTube play button + “Watch on YouTube” badge).

### H2 — 1. Install (`#1-install`)
- Body copy: **“Get the Resend Node.js SDK.”**
- Code block with **tabbed package manager pills**: `npm`, `yarn`, `pnpm`, `bun`.
- Code sample (npm tab):
  ```
  npm install resend
  ```
- UI buttons within code block header: **Copy** and **Ask AI**.

### H2 — 2. Create an email template (`#2-create-an-email-template`)
- Body copy: **“Start by creating your email template on components/email-template.tsx.”**
- Inline code badge/pill: `components/email-template.tsx`.
- Code sample:
  ```tsx
  import * as React from 'react';

  interface EmailTemplateProps {
    firstName: string;
  }

  export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
      <div>
        <h1>Welcome, {firstName}!</h1>
      </div>
    );
  }
  ```
- UI buttons within code block header: **Copy** and **Ask AI**.

### H2 — 3. Send email using React (`#3-send-email-using-react`)
- Body copy: **“Create a route file under app/api/send/route.ts (or pages/api/send.ts if you’re using Pages Router).”**
- Inline code badges/pills: `app/api/send/route.ts`, `pages/api/send.ts` and a link-style pill for **Pages Router**.
- Body copy: **“Import the React email template and send an email using the react parameter.”**
- Inline code badge/pill: `react`.
- Code sample:
  ```ts
  import { EmailTemplate } from '../../../components/email-template';
  import { Resend } from 'resend';

  const resend = new Resend(process.env.RESEND_API_KEY);

  export async function POST() {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
  ```
- UI buttons within code block header: **Copy** and **Ask AI**.

### H2 — 4. Try it yourself (`#4-try-it-yourself`)
- Two cards (each with a link icon in the top-right corner):
  - **Next.js Example (App Router)** — “See the full source code.” (link: `https://github.com/resend/resend-nextjs-app-router-example`)
  - **Next.js Example (Pages Router)** — “See the full source code.” (link: `https://github.com/resend/resend-nextjs-pages-router-example`)

### Footer-ish elements (under main content)
- “Was this page helpful?” with **Yes** and **No** pill buttons.
- Prev/Next navigation: **Introduction** (left) and **Remix** (right).
- Small icon row at the bottom (social icons: X, GitHub, YouTube, and website).

### Callouts & inline badges
- No callout boxes or alert panels were visible in the main content.
- Inline badges appear as **pill-style code tokens** (e.g., `components/email-template.tsx`, `app/api/send/route.ts`, `pages/api/send.ts`, `react`).

## Visual tokens (fonts, colors, spacing, borders)

### Typography (computed styles)
- **Body font**: `Inter` with system fallbacks. Base size 16px, line-height 24px, text color `rgb(0, 0, 0)`.
- **H1**: 30px, weight 700, line-height 36px, color `rgb(22, 22, 22)`, letter-spacing `-0.75px`.
- **H2**: 24px, weight 600, line-height 32px, color `rgb(17, 24, 39)`, letter-spacing `-0.6px`.
- **Intro paragraph**: 18px, weight 400, line-height 28px, color `rgb(62, 62, 62)`.
- **Code font**: `JetBrains Mono` with fallbacks, font-size 14px, line-height 24px, text color `rgb(36, 41, 46)`.

### Borders, radii, and cards
- **Example cards**: white background `rgb(255, 255, 255)`, 1px solid border `rgba(10, 10, 10, 0.1)`, border-radius **16px**.
- **Code block container**: white background `rgb(255, 255, 255)` with rounded corners **14px**, padding **14px 16px**.

### Buttons/controls (visual description)
- **Top-right “Get Started”**: appears as a black filled button with white text and rounded corners (visible in screenshot), adjacent to `Sign In` text link.
- **Ask AI**: light-outline/pill-style button next to search.
- **Copy / Ask AI** controls inside code blocks: small icon buttons on the top-right of the code block header.

## Images & icons
- **Resend logo** in header (light/dark variants are served depending on theme).
- **YouTube video embed** in prerequisites section (large thumbnail with play button and channel overlay).
- **Link icon** in the top-right corner of each example card.
- **Social icons** at the bottom: X, GitHub, YouTube, and website.

## Screenshot
- Full page screenshot captured for layout/spacing reference (see response).

## Capture method
- Page content and styles were captured via Playwright in a headless browser session; no terminal commands were needed for the content extraction itself.
