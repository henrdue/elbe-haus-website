import Link from 'next/link';

export const metadata = { title: 'Impressum – Elbe-Haus Lübeck' };

export default function Impressum() {
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 48px)' }}>
      <Link href="/" style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.06em' }}>← Zurück zur Startseite</Link>
      <h1 style={{ margin: '24px 0 32px', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 500 }}>Impressum</h1>
      <p style={{ margin: 0, fontWeight: 600 }}>Matthias Dütschke</p>
      <p style={{ margin: '4px 0 0', color: '#3a4553' }}>Große Altefähre 16<br />23552 Lübeck<br />E-Mail: <a href="mailto:info@elbehaus-luebeck.de">info@elbehaus-luebeck.de</a></p>
      <p style={{ margin: '24px 0 0', color: '#3a4553' }}><strong>Verantwortlich für den Inhalt</strong> (gem. § 55 Abs. 2 RStV):<br />Matthias Dütschke, Große Altefähre 16, 23552 Lübeck</p>
      <h2 style={{ margin: '48px 0 12px', fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600 }}>Hinweis auf EU-Streitschlichtung</h2>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Zur außergerichtlichen Beilegung von verbraucherrechtlichen Streitigkeiten hat die Europäische Union eine Online-Plattform („OS-Plattform") eingerichtet, an die Sie sich wenden können. Die Plattform finden Sie unter <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">http://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse lautet: info@elbehaus-luebeck.de</p>
      <h2 style={{ margin: '48px 0 12px', fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600 }}>Disclaimer – rechtliche Hinweise</h2>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>§ 1 Warnhinweis zu Inhalten</p>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.</p>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>§ 2 Externe Links</p>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.</p>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>§ 3 Urheber- und Leistungsschutzrechte</p>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>§ 4 Besondere Nutzungsbedingungen</p>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.</p>
      <h2 style={{ margin: '48px 0 12px', fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600 }}>Datenschutzerklärung</h2>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>Einbindung von Google Maps</p>
      <p style={{ margin: '0 0 16px', color: '#3a4553' }}>Diese Webseite bindet Kartenmaterial des Dienstes Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Beim Aufruf der Seite mit eingebetteter Karte werden Daten (u. a. Ihre IP-Adresse) an Google übertragen. Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von Google unter <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>
      <p style={{ margin: '32px 0 0', fontSize: 14, color: '#6b7684' }}>© Matthias Dütschke / Elbe-Haus</p>
    </div>
  );
}
