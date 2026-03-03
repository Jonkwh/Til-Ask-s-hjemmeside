# Ask — Artist Website

Portfolio and shop for **Ask**, a painter based in Copenhagen. Built with React, Vite, and Tailwind CSS.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**
3. Import the GitHub repository
4. No configuration needed — Vercel auto-detects Vite and sets the correct build command (`vite build`) and output directory (`dist`)
5. Click **Deploy**

Every subsequent push to `main` will trigger an automatic redeploy.

---

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [React Router v6](https://reactrouter.com) | Client-side routing (hash-based) |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Google Fonts](https://fonts.google.com) | Cormorant Garamond + Jost |

---

## Project structure

```
src/
  App.jsx             # Root component — cart state, routes
  main.jsx            # Entry point with HashRouter
  index.css           # Base styles, grain overlay, animations
  data/
    paintings.js      # All 12 paintings (title, medium, price, etc.)
  hooks/
    useInView.js      # IntersectionObserver scroll-reveal hook
  components/
    Nav.jsx           # Fixed navigation bar
    Cart.jsx          # Sliding cart sidebar
    Reveal.jsx        # Scroll-reveal wrapper
    Footer.jsx        # Site footer
    ScrollToTop.jsx   # Resets scroll on navigation
  pages/
    Home.jsx          # Hero + featured works + quote
    Shop.jsx          # Full shop with filter/sort
    About.jsx         # Artist statement + bio + studio
```

---

## Customisation

- **Paintings** — edit `src/data/paintings.js` to add/remove/edit works
- **Contact email** — replace `ask@example.com` throughout with the real address
- **Instagram** — replace `https://instagram.com` with the artist's profile URL
- **Images** — swap `picsum.photos` URLs for real artwork photographs
- **Colors** — adjust the palette in `tailwind.config.js` under `theme.extend.colors`
