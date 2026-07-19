# Elbe-Haus Lübeck – Website

Moderne One-Page-Website für das Elbe-Haus, Große Altefähre 16, 23552 Lübeck. Next.js 15 (App Router) + React 19, Styling inline / globals.css, keine weiteren Abhängigkeiten.

## Lokal starten
```bash
npm install
npm run dev
```
→ http://localhost:3000

## Zu GitHub committen
```bash
git init
git add .
git commit -m "Elbe-Haus Website (Next.js)"
git branch -M main
git remote add origin https://github.com/henrdue/elbe-haus-website.git
git push -u origin main
```

## GitHub Pages (Deploy from a branch)
1. In `next.config.mjs` die Konstante `repo` auf den Namen Ihres Repositories setzen.
2. Bauen und den statischen Export in den Ordner `docs/` legen:
   ```bash
   npm run build
   # Windows:
   xcopy /E /I out docs
   type nul > docs\.nojekyll
   # Mac/Linux:
   cp -r out docs && touch docs/.nojekyll
   ```
3. `docs/` committen und pushen.
4. Auf GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch `main`, Ordner `/docs` → Save.
5. Seite erscheint unter `https://<nutzername>.github.io/<repo>/`. Nach jeder Änderung Schritt 2–3 wiederholen.

Die Datei `docs/.nojekyll` ist wichtig — ohne sie ignoriert GitHub Pages den `_next`-Ordner.

## Hinweise
- **Bilder:** Alle Fotos und Grundrisse liegen lokal unter `public/images/`, das Hero-Bild unter `public/emotionheader.jpeg`. Die 3 Grundriss-PDFs liegen unter `public/pdf/`.
- **Besucherzähler:** zählt lokal pro Browser ab 97.815 (localStorage). Für einen echten Zähler einen API-Endpoint (z. B. `app/api/counter/route.ts` mit KV-Store) ergänzen.
- **Kontaktformular:** öffnet das E-Mail-Programm (mailto). Für serverseitigen Versand einen API-Endpoint mit z. B. Resend/Nodemailer ergänzen.
- **Google Maps:** Einbettung per iframe; DSGVO-Hinweis in der Datenschutzerklärung empfohlen (Alternative: OpenStreetMap).
