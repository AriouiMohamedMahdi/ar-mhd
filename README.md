# A.M.Mahdi — Personal Site

Personal portfolio and brand site built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- [Next.js 14](https://nextjs.org/) — React framework with static export
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Lucide React](https://lucide.dev/) — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.jsx       # Root layout + metadata
│   └── page.jsx         # Main page (assembles sections)
├── components/
│   ├── Cursor.jsx        # Custom cursor
│   ├── ParticleField.jsx # Animated background
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── site.js           # ← All your content lives here
└── styles/
    └── globals.css
```

## Customization

All content (name, bio, projects, skills, links, etc.) is in **`src/data/site.js`**.
Edit that file to update everything on the site.

## Deploying to GitHub Pages

1. Push the project to your GitHub repo
2. In `next.config.js`, add your repo name:
   ```js
   basePath: '/your-repo-name',
   ```
3. Run `npm run build`
4. Deploy the `out/` folder via GitHub Pages (Settings → Pages → Deploy from branch → `gh-pages`)

Or use [Vercel](https://vercel.com) for zero-config deployment — just connect your repo.
