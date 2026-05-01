# Stundenzettel auf den Homebildschirm

## Du hast jetzt diese Dateien

- `stundenzettel.html` — die App selbst
- `manifest.json` — sagt Android, wie die App heißt und aussieht
- `sw.js` — Service Worker (macht die App offline-fähig)
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png` — App-Icons

**Wichtig:** Alle Dateien gehören in **denselben Ordner**.

---

## Weg A — Sofort als Verknüpfung (lokal, ohne Hosting)

Funktioniert mit der Datei direkt auf dem Tablet.

1. Den ganzen Ordner `stundenzettel-app` aufs Tablet kopieren (z.B. nach Downloads)
2. In **Chrome** öffnen: `stundenzettel.html` antippen
3. Chrome-Menü (drei Punkte oben rechts) → **„Zum Startbildschirm hinzufügen"**
4. Name bestätigen → fertig

**Was du bekommst:** App-Icon mit Bus-Symbol auf dem Homebildschirm. Tippt man drauf, öffnet sich die App in Chrome (mit Browser-Leiste oben).

**Einschränkung:** Bei dieser Variante läuft sie als normaler Browser-Tab — die Browser-Leiste ist sichtbar.

---

## Weg B — Als richtige App (mit Hosting, einmalig 5 Minuten)

Funktioniert wie eine echte installierte App, ohne Browser-Leiste, mit eigenem Splash-Screen.

### Hosting bei Netlify Drop (kostenlos, keine Anmeldung)

1. Auf dem **Computer** oder Tablet: gehe zu **https://app.netlify.com/drop**
2. Den **gesamten Ordner** `stundenzettel-app` per Drag-and-Drop in das Feld ziehen
   (auf dem Tablet: lange auf den Ordner tippen → Teilen → Netlify, oder am PC ziehen)
3. Netlify gibt dir eine URL, z.B. `https://random-name-12345.netlify.app`
4. Diese URL öffnest du dann in Chrome mit `/stundenzettel.html` dahinter:
   `https://random-name-12345.netlify.app/stundenzettel.html`
5. Chrome zeigt jetzt unten **„App installieren"** an oder im Menü **„App installieren"**
6. Antippen → fertig

**Was du bekommst:**
- Eigenes Icon auf dem Homebildschirm
- Öffnet **ohne Browser-Leiste** wie eine echte App
- Splash-Screen mit Bus-Logo beim Start
- Funktioniert auch **offline** (durch den Service Worker)

### Tipp: URL einfacher machen

Bei Netlify kannst du dir kostenlos einen besseren Namen geben:
- Im Netlify-Dashboard auf die Seite klicken → „Site settings" → „Change site name"
- Dann z.B. `stundenzettel-rieseby.netlify.app` als URL

---

## Welcher Weg für dich?

- **Nur du nutzt sie, lokal vom Tablet:** Weg A reicht völlig aus
- **Du willst es richtig schick (oder von mehreren Geräten nutzen):** Weg B

Beide funktionieren — die App-Logik ist identisch. Bei Weg B hast du nur das schönere App-Erlebnis und Offline-Funktion auch nach Browser-Cache-Reset.
