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

## GitHub Pages (automatisch via Actions)
1. Quellcode committen und auf `main` pushen — fertig. Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht automatisch.
2. Einmalig auf GitHub: Settings → Pages → Source: "GitHub Actions" wählen.
3. Seite läuft unter `https://henrdue.github.io/elbe-haus-website/`.

Ein lokaler `docs/`-Ordner wird nicht mehr benötigt (falls vorhanden: löschen). Der Repo-Name für die Pfade steht in `next.config.mjs` (`repo`-Konstante).

## Hinweise
- **Bilder:** Alle Fotos und Grundrisse liegen lokal unter `public/images/`, das Hero-Bild unter `public/emotionheader.jpeg`. Die 3 Grundriss-PDFs liegen unter `public/pdf/`.
- **Besucherzähler:** zählt lokal pro Browser ab 97.815 (localStorage). Für einen echten Zähler einen API-Endpoint (z. B. `app/api/counter/route.ts` mit KV-Store) ergänzen.
- **Kontaktformular:** öffnet das E-Mail-Programm (mailto). Für serverseitigen Versand einen API-Endpoint mit z. B. Resend/Nodemailer ergänzen.
- **Google Maps:** Einbettung per iframe; DSGVO-Hinweis in der Datenschutzerklärung empfohlen (Alternative: OpenStreetMap).
