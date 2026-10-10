# client-panchayat — Gram Panchayat Chiluli, Tiloi (React + Vite + Tailwind)
```
npm install
npm run dev      # http://localhost:5173
npm run build
```
Static site. Edit content in `src/data/content.js` (bilingual `{en, hi}`), only with verified facts.
- Hero video: replace `public/videos/hero.mp4` (and `public/images/hero-poster.jpg`) with real village footage. The bundled clip is a slow montage made from the two supplied photos.
- Contact form: set `VITE_FORM_ENDPOINT` in `.env` (Formspree etc.). Without it the form says it is not active — it never fakes a send.
- Add phone/email in `site` and notices in `notices` when confirmed.
