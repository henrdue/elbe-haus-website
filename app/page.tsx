'use client';
import { useEffect, useState } from 'react';

const ACCENT = '#9a3b2e';
const mk = (prefix: string, count: number, alt: string, rotIdx: number[] = []) =>
  Array.from({ length: count }, (_, i) => ({
    src: `./images/${prefix}-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `${alt} – Bild ${i + 1}`,
    rot: rotIdx.includes(i + 1),
  }));
const eg = mk('eg', 12, 'Erdgeschoss');
const og = mk('og', 9, '1. Obergeschoss');
const aussen = mk('aussen', 6, 'Außenansicht, Treppenhaus und Innenhof', [4]);
const galleries = [
  { title: 'Das Erdgeschoss', items: eg },
  { title: 'Das 1. Obergeschoss', items: og },
  { title: 'Außenansicht, Treppenhaus und Innenhof', items: aussen },
];
const plans = [
  { title: 'Kellergeschoss', img: './images/grundriss-kg.jpg', full: './images/grundriss-kg.jpg', pdf: './pdf/KG Vermietung 120816.pdf' },
  { title: 'Erdgeschoss', img: './images/grundriss-eg.jpg', full: './images/grundriss-eg.jpg', pdf: './pdf/EG Vermietung 120816.pdf' },
  { title: '1. Obergeschoss', img: './images/grundriss-og.jpg', full: './images/grundriss-og.jpg', pdf: './pdf/1.OG Vermietung 120816.pdf' },
];
const all = [...eg, ...og, ...aussen, ...plans.map(p => ({ src: p.full, alt: p.title, rot: false }))];
const facts = [
  { value: '1884', label: 'Baujahr' },
  { value: '3,10 m', label: 'Deckenhöhe' },
  { value: '2×3 Zi.', label: 'Wohnungen · 113 / 119 qm' },
  { value: '2014', label: 'Kernsanierung' },
];

const h2: React.CSSProperties = { margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 500, lineHeight: 1.15 };
const kicker: React.CSSProperties = { margin: '0 0 12px', color: ACCENT, fontSize: 13, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase' };

export default function Home() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visits, setVisits] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });

  useEffect(() => {
    const KEY = 'elbehaus-visit-counter';
    let n = parseInt(localStorage.getItem(KEY) ?? '', 10);
    if (!Number.isFinite(n)) n = 97815;
    n += 1;
    localStorage.setItem(KEY, String(n));
    setVisits(n);
  }, []);

  const sendMail = () => {
    const body = encodeURIComponent(`${form.msg}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:info@elbehaus-luebeck.de?subject=${encodeURIComponent('Anfrage Elbe-Haus')}&body=${body}`;
  };

  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '18px 48px', background: 'rgba(250,248,244,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(29,39,51,0.08)' }}>
        <a href="#start" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, letterSpacing: '0.02em', color: '#1d2733' }}>ELBE<span style={{ color: ACCENT }}>-</span>HAUS</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a className="nav-link" href="#haus">Das Haus</a>
          <a className="nav-link" href="#grundrisse">Grundrisse</a>
          <a className="nav-link" href="#bilder">Bilder</a>
          <a className="nav-link" href="#lage">Lage</a>
          <a href="#kontakt" style={{ padding: '8px 18px', background: '#1d2733', color: '#faf8f4', borderRadius: 2, fontSize: 15, fontWeight: 500 }}>Kontakt</a>
        </div>
      </nav>

      <header id="start" style={{ background: '#141c26', paddingTop: 66 }}>
        <img src="./emotionheader.jpeg" alt="Fassade des Elbe-Hauses mit Schriftzug über der Tür" style={{ display: 'block', width: '100%', height: 'auto' }} />
        <div className="fade-up" style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 48px 72px' }}>
          <p style={{ margin: '0 0 16px', color: '#e8d9b8', fontSize: 14, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Große Altefähre 16 · Lübecker Altstadt · Anno 1884</p>
          <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 92px)', fontWeight: 500, lineHeight: 1.05, color: '#faf8f4' }}>Ihr neues Zuhause im Herzen der Altstadt</h1>
          <p style={{ margin: '24px 0 0', maxWidth: 640, color: 'rgba(250,248,244,0.85)', fontSize: 19, fontWeight: 300 }}>Ein hanseatisches Kaufmannshaus von 1884 – aufwendig saniert, mit hohen, lichten Räumen und dem Flair der Lübecker Hafenkante.</p>
          <p style={{ display: 'inline-block', margin: '32px 0 0', padding: '10px 20px', background: ACCENT, color: '#faf8f4', fontSize: 14, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 2 }}>Alle Wohnungen sind vermietet</p>
        </div>
      </header>

      <section id="haus" style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 72, alignItems: 'start' }}>
          <div>
            <p style={kicker}>Herzlich willkommen</p>
            <h2 style={h2}>Ein Kaufmannshaus mit Geschichte</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: 17.5, color: '#3a4553' }}>
            <p style={{ margin: 0 }}>Das Elbe-Haus in der Großen Altefähre 16 liegt zwischen den Straßen „Untertrave" und „Kleine Altefähre" – unweit des Europäischen Hansemuseums. Die breite Anlage der Straße begünstigte den Bau ansehnlicher Kaufmannshäuser und Reedereiniederlassungen. Das Elbehaus wurde 1884 erbaut und war ab 1914 Firmensitz des Binnenschifffahrtsunternehmens Karl Steder KG.</p>
            <p style={{ margin: 0 }}>Hohe, helle und lichte Räume, die aufwendig und hochwertig saniert wurden und den aktuellen Stand der Zeit aufweisen. Nehmen Sie sich einen Augenblick Zeit und entdecken Sie die Stockwerke, die Lage und den Flair des Hauses.</p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(29,39,51,0.12)', border: '1px solid rgba(29,39,51,0.12)' }}>
          {facts.map(f => (
            <div key={f.label} style={{ background: '#faf8f4', padding: '32px 28px' }}>
              <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 600, color: '#1d2733', lineHeight: 1 }}>{f.value}</p>
              <p style={{ margin: '10px 0 0', fontSize: 14, fontWeight: 500, letterSpacing: '0.06em', color: '#6b7684', textTransform: 'uppercase' }}>{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#1d2733', color: '#e9e5dc', marginTop: 80 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '110px 48px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ ...kicker, color: '#d9b98a' }}>Hausbeschreibung</p>
            <h2 style={{ ...h2, marginBottom: 28, color: '#faf8f4' }}>Vollständig saniert, energieeffizient, modern</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: 16.5, color: 'rgba(233,229,220,0.85)', fontWeight: 300 }}>
              <p style={{ margin: 0 }}>Ein typisches Altstadthaus in geschlossener Bebauung: Das dreigeschossige Vorderhaus trägt eine klassizistische Fassade mit Satteldach; EG/Hochparterre und 1. OG haben nach hinten einen Seitenflügel, die gesamte Bebauung umschließt einen Innenhof. Zur Nachbarschaft gehörten das Gorch-Fock-Haus (Nr. 18), das Finnlandia-Haus (Nr. 20–22) und die Reederei Bertling (Nr. 23).</p>
              <p style={{ margin: 0 }}>Seit 1998 stand das Haus leer; 2014 wurde es gekauft und in enger Abstimmung mit dem Fachbereich Stadtplanung der Hansestadt Lübeck energieeffizient saniert und nach heutigem Standard außen wie innen modernisiert. Entstanden sind zwei Mietwohnungen und eine Gewerbeeinheit/Büro im Dachgeschoss.</p>
              <p style={{ margin: 0 }}>Beide 3-Zimmer-Wohnungen haben 3,10 Meter Deckenhöhe und 113 bzw. 119,3 qm Wohnfläche. Die alten Pitchpine-Böden wurden freigelegt und modernisiert. Vollausgestattete hochwertige Küchen, Gäste-WC und Bäder, Rauchmeldeanlagen sowie Anschlüsse für Kabelfernsehen und Internet sind vorhanden. Der Innenhof dient als Freifläche; das voll unterkellerte Haus bietet Platz für Waschplatz, Abstellflächen und Fahrräder.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <img src="./images/aussen-01.jpg" alt="Außenansicht" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 2 }} />
            <img src="./images/eg-01.jpg" alt="Wohnraum Erdgeschoss" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 2, marginTop: 40 }} />
          </div>
        </div>
      </section>

      <section id="grundrisse" style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 48px' }}>
        <p style={kicker}>Grundrisse</p>
        <h2 style={{ ...h2, marginBottom: 16 }}>Drei Ebenen im Überblick</h2>
        <p style={{ margin: '0 0 48px', maxWidth: 560, color: '#3a4553' }}>Alle Grundrisse stehen Ihnen auch als PDF zum Download zur Verfügung.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {plans.map((p, i) => (
            <div key={p.title} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', border: '1px solid rgba(29,39,51,0.12)', padding: 20, cursor: 'zoom-in' }} onClick={() => setLightbox(eg.length + og.length + aussen.length + i)}>
                <img src={p.img} alt={p.title} style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>{p.title}</p>
                <a href={p.pdf} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>PDF ↓</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="bilder" style={{ background: '#f1ede4', padding: '110px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 48px' }}>
          <p style={kicker}>Bilder</p>
          <h2 style={{ ...h2, marginBottom: 48 }}>Ein Rundgang durch das Elbe-Haus</h2>
          {galleries.map(g => (
            <div key={g.title} style={{ marginBottom: 56 }}>
              <h3 style={{ margin: '0 0 20px', fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: '#1d2733' }}>{g.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
                {g.items.map(im => (
                  <div key={im.src} className="gallery-tile" onClick={() => setLightbox(all.findIndex(a => a.src === im.src))}>
                    <img className={im.rot ? 'gallery-img rot' : 'gallery-img'} src={im.src} alt={im.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15,22,32,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48, cursor: 'zoom-out' }}>
          <img src={all[lightbox].src} alt="Großansicht" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', transform: all[lightbox].rot ? 'rotate(-90deg)' : 'none' }} />
          <button onClick={e => { e.stopPropagation(); setLightbox(null); }} style={{ position: 'absolute', top: 24, right: 32, background: 'none', border: 'none', color: '#faf8f4', fontSize: 34, cursor: 'pointer', lineHeight: 1 }}>×</button>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + all.length - 1) % all.length); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(250,248,244,0.1)', border: '1px solid rgba(250,248,244,0.3)', color: '#faf8f4', fontSize: 24, width: 48, height: 48, borderRadius: '50%', cursor: 'pointer' }}>‹</button>
          <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % all.length); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(250,248,244,0.1)', border: '1px solid rgba(250,248,244,0.3)', color: '#faf8f4', fontSize: 24, width: 48, height: 48, borderRadius: '50%', cursor: 'pointer' }}>›</button>
        </div>
      )}

      <section id="lage" style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={kicker}>Lage</p>
            <h2 style={{ ...h2, marginBottom: 24 }}>An der Lübecker Hafenkante</h2>
            <p style={{ margin: '0 0 32px', color: '#3a4553' }}>Zwischen Untertrave und Kleiner Altefähre, wenige Schritte vom Europäischen Hansemuseum entfernt – mitten im UNESCO-Welterbe der Lübecker Altstadt.</p>
            <div style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 24 }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Elbehaus</p>
              <p style={{ margin: '4px 0 0', color: '#3a4553' }}>Große Altefähre 16<br />23552 Lübeck</p>
            </div>
          </div>
          <iframe title="Karte – Große Altefähre 16, Lübeck" src="https://maps.google.com/maps?q=Gro%C3%9Fe%20Altef%C3%A4hre%2016%2C%2023552%20L%C3%BCbeck&z=16&hl=de&output=embed" style={{ width: '100%', height: 420, border: '1px solid rgba(29,39,51,0.15)', borderRadius: 2 }} />
        </div>
      </section>

      <section id="kontakt" style={{ background: '#1d2733', color: '#e9e5dc' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '110px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <p style={{ ...kicker, color: '#d9b98a' }}>Kontakt</p>
            <h2 style={{ ...h2, marginBottom: 24, color: '#faf8f4' }}>Wir freuen uns auf Ihre Nachricht</h2>
            <p style={{ margin: '0 0 36px', color: 'rgba(233,229,220,0.8)', fontWeight: 300 }}>Haben Sie Fragen, Wünsche oder Anregungen? Nehmen Sie Kontakt mit uns auf – wir helfen Ihnen gerne weiter und vereinbaren gerne einen persönlichen Besichtigungstermin.</p>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 18, color: '#faf8f4' }}>Elbehaus · Matthias Dütschke</p>
            <p style={{ margin: '6px 0 0', color: 'rgba(233,229,220,0.8)' }}>Große Altefähre 16 · 23552 Lübeck</p>
            <a href="mailto:info@elbehaus-luebeck.de" style={{ display: 'inline-block', marginTop: 10, color: '#d9b98a', fontWeight: 500 }}>info@elbehaus-luebeck.de</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ihr Name *" />
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Ihre E-Mail-Adresse *" type="email" />
            <textarea value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Ihre Nachricht *" rows={6} style={{ resize: 'vertical' }} />
            <button onClick={sendMail} style={{ padding: '16px 24px', background: ACCENT, border: 'none', borderRadius: 2, color: '#faf8f4', fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>Nachricht senden</button>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(233,229,220,0.5)' }}>Öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht.</p>
          </div>
        </div>
      </section>

      <footer style={{ background: '#141c26', color: 'rgba(233,229,220,0.6)', fontSize: 14 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ margin: 0 }}>© Matthias Dütschke / Elbe-Haus · Große Altefähre 16 · 23552 Lübeck · Besucher: {visits === null ? '' : visits.toLocaleString('de-DE')}</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="mailto:info@elbehaus-luebeck.de" style={{ color: 'rgba(233,229,220,0.6)' }}>info@elbehaus-luebeck.de</a>
            <a href="https://www.elbehaus-luebeck.de/impressum/" target="_blank" rel="noopener" style={{ color: 'rgba(233,229,220,0.6)' }}>Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
