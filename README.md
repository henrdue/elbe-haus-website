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
git remote add origin https://github.com/<IHR-NUTZERNAME>/elbehaus-luebeck.git
git push -u origin main
```

## Hinweise
- **Bilder:** Galerie- und Grundriss-Bilder werden aktuell von `www.elbehaus-luebeck.de` geladen (Hotlinks). Vor Abschaltung der alten Seite die Bilder herunterladen, nach `public/` legen und die `BASE`-Konstante in `app/page.tsx` anpassen. Das Hero-Bild liegt bereits lokal unter `public/emotionheader.jpeg`.
- **Besucherzähler:** zählt lokal pro Browser ab 97.815 (localStorage). Für einen echten Zähler einen API-Endpoint (z. B. `app/api/counter/route.ts` mit KV-Store) ergänzen.
- **Kontaktformular:** öffnet das E-Mail-Programm (mailto). Für serverseitigen Versand einen API-Endpoint mit z. B. Resend/Nodemailer ergänzen.
- **Google Maps:** Einbettung per iframe; DSGVO-Hinweis in der Datenschutzerklärung empfohlen (Alternative: OpenStreetMap).
