# React API Film Search

A small React app that searches films and lets you click into a “full details” page for a specific IMDb title.

[Live Demo 🚀](https://react-grocery-shopping-engine.netlify.app/)

## How to Use the App

- Type a film title into the search box (e.g. “Inception”) and hit **Search**
- Browse the results grid (each card shows basic info like actors/year/rank)
- Click **Full Details** to open the details page (plot/director/runtime/rating)
- Click **Play trailer** to open the trailer link in a new tab
- Use **Clear** to reset the search and results

## Local Setup

From the project root:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal (usually http://localhost:5173).

## Notes

- The current search term is stored in the URL query string (`?q=...`) so searches are shareable/bookmarkable and survive refresh.
- Routing uses React Router: `/` for search and `/details/:id` for the details page.
- Data comes from a third-party IMDb proxy endpoint (learning/demo use).

## What I Learned

- Fetching data in React with `useEffect`, including loading and error UI states.
- Client-side routing with React Router, including dynamic routes (`/details/:id`) and navigation/back behaviour.
- URL-driven state with `useSearchParams` (keeping search state in the URL).
- Normalising API responses into a clean shape before rendering (builder function).
- Building a consistent UI system with reusable “label/value” rows and a responsive card grid.

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: configure Netlify to serve `index.html` for all routes (so refreshing `/details/...` works).
