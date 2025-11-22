# 🌍 Meine Reiseerfahrungen

Ein **responsives Web-Portfolio** mit persönlichen Reiseerlebnissen, Länderinformationen, Städteerkundungen und Unterkunftsempfehlungen. Dieses Projekt entsteht im Rahmen des Moduls **Projekt: Webprogrammierung (DLBUXPWP01)**.

---

## 💡 Projektbeschreibung

Die Website lädt ein zu einer virtuellen Reise durch verschiedene Länder und Städte, die ich persönlich besucht habe. Sie bietet einen authentischen Einblick in meine Reiseerfahrungen, kulturelle Entdeckungen und praktische Reisetipps.

### 🗺️ Navigationsstruktur

```
/ Startseite
├── Länder (Countries)
├── Städte (Cities)
├── Unterkünfte (Accomodations)
├── Reisetipps (Hints)
├── Kontakt (Contact)
└── (Footer-Navigation)
    ├── Impressum (Imprint)
    └── Datenschutz (Privacy)
```

---

## 🔧 Technische Umsetzung

### 💻 Technologien

- **HTML5** – Semantische Strukturierung mit `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` und `<footer>`
- **CSS3** – Modernes Styling mit CSS Grid, Flexbox und Custom Properties (CSS-Variablen)
- **JavaScript (Vanilla)** – Interaktive Features ohne Frameworks
- **Leaflet.js** – Integration interaktiver Karten zur Visualisierung der Reiseziele
- **Git & GitHub** – Versionskontrolle und Projektdokumentation

### ✨ Features und Besonderheiten

- **📱 Responsive Design** – Mobile-first Ansatz mit optimaler Darstellung auf allen Geräten
- **🌗 Dark/Light Mode** – Umschaltbarer Theme-Modus mit LocalStorage-Persistenz
- **🖼️ Lightbox-Galerie** – Bildergalerien mit Vollbildansicht und Navigation
- **🎠 Bildkarussell** – Animierte Slideshow für Reisefotos
- **🗺️ Interaktive Karten** – Leaflet.js Integration mit benutzerdefinierten Markern
- **📍 Back-to-Top Button** – Smooth-Scroll Navigation zurück zum Seitenanfang
- **🍔 Hamburger-Menü** – Mobile-optimierte Navigation
- **♿ Barrierefreiheit** – WCAG 2.1 & WAI-ARIA konform mit semantischem HTML und ARIA-Attributen
- **🎯 Modulare Komponenten** – Header und Footer als wiederverwendbare Komponenten

### 📱 Responsive Breakpoints

Die Website passt sich automatisch an verschiedene Bildschirmgrößen an:

- **≤ 768px:** Mobile-Ansicht (einspaltiges Layout, Hamburger-Menü)
- **769px – 1023px:** Tablet-Ansicht (flexibles 2-Spalten-Layout)
- **≥ 1024px:** Desktop-Ansicht (mehrspaltiges Grid-Layout, großzügige Abstände)

### 🏗️ Projektstruktur

```
webprogrammierung-michael_landinger/
├── index.html                    # Startseite
├── countries.html                # Länderübersicht
├── cities.html                   # Städteübersicht
├── accomodations.html            # Unterkunftsempfehlungen
├── hints.html                    # Reisetipps
├── contact.html                  # Kontaktformular
├── imprint.html                  # Impressum
├── privacy.html                  # Datenschutz
├── 404.html                      # Custom Error Page
│
├── components/
│   ├── navigation.html           # Wiederverwendbare Navigation
│   └── footer.html               # Wiederverwendbarer Footer
│
├── css/
│   └── style.css                 # Hauptstylesheet mit CSS Grid & Flexbox
│
├── js/
│   ├── theme-init.js             # Theme-Initialisierung
│   ├── theme-toggle.js           # Dark/Light Mode Toggle
│   ├── navigation.js             # Navigation & Hamburger-Menü
│   ├── lightbox.js               # Bildergalerie-Funktionalität
│   ├── carousel.js               # Karussell-Animation
│   ├── map.js                    # Leaflet-Karten-Integration
│   └── backToTop.js              # Scroll-to-Top Button
│
├── images/
│   ├── countries/                # Länderbilder
│   ├── cities/                   # Städtebilder
│   ├── accomodations/            # Unterkunftsfotos
│   └── other/                    # Sonstige Assets
│
└── assets/
    └── favicon/                  # Favicon in verschiedenen Größen
```

---

## 🎨 Design-Konzept

### Gestaltungsprinzipien

- **Klare Hierarchie** – Typografisches System mit skalierbaren Schriftgrößen
- **Konsistente UI** – Einheitliche Buttons, Cards und Grid-Layouts
- **Visuelle Elemente** – Hochwertige Reisefotos im weboptimierten Format (WebP)
- **Farbschema** – Adaptive Farbpalette für Light & Dark Mode
- **Accessibility First** – Hohe Kontraste (AA-Standard), aussagekräftige Alt-Texte

---

## ♿ Barrierefreiheit

Die Website wurde nach **WCAG 2.1 (AA)** und **WAI-ARIA** Standards entwickelt:

- ✅ **Semantisches HTML5** für Screenreader-Kompatibilität
- ✅ **ARIA-Labels** für interaktive Elemente und Navigation
- ✅ **Alt-Texte** für alle inhaltlichen Bilder
- ✅ **Tastaturnavigation** vollständig unterstützt
- ✅ **Farbkontraste** gemäß AA-Standard geprüft
- ✅ **Focus-Indikatoren** für klare Nutzerführung
- ✅ **aria-hidden="true"** für rein dekorative Icons

---

## 🧾 Versionskontrolle & Git-Workflow

- Repository auf GitHub: [`IU-Webprogrammierung/webprogrammierung-michael_landinger`](https://github.com/IU-Webprogrammierung/webprogrammierung-michael_landinger)
- Regelmäßige Commits mit aussagekräftigen Commit-Messages
- Nachvollziehbare Entwicklungshistorie

---

## 🔍 Testing & Qualitätssicherung

### Browser-Kompatibilität

Getestet in:
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge

### Lighthouse Audit

- **Performance:** ≥ 90%
- **Accessibility:** ≥ 95%
- **Best Practices:** ≥ 95%
- **SEO:** ≥ 90%

---

## 💻 Code-Snippets

### Dynamische Theme-Umschaltung

```javascript
// theme-toggle.js
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
```

---

## 🧠 Lerninhalte & Erkenntnisse

Im Rahmen dieses Projekts wurden folgende Kompetenzen vertieft:

- ✅ Praktische Anwendung von **HTML5, CSS3 und JavaScript**
- ✅ Umsetzung von **responsivem Design** mit Mobile-First-Ansatz
- ✅ Integration externer Bibliotheken (Leaflet.js für Karten)
- ✅ Implementierung von **Barrierefreiheit** nach WCAG-Standards
- ✅ Modulare Code-Architektur mit wiederverwendbaren Komponenten
- ✅ Git-Workflow und strukturierte Versionskontrolle
- ✅ Performance-Optimierung (Lazy Loading, WebP-Formate)

---

## 📚 Quellen & Ressourcen

Verwendete Lernressourcen und Dokumentationen:

- 🧠 [MDN Web Docs](https://developer.mozilla.org/de/) – HTML, CSS, JavaScript Referenz
- 📖 [SELFHTML](https://wiki.selfhtml.org/) – Deutschsprachige Web-Dokumentation
- 🎓 [W3Schools](https://www.w3schools.com/) – Tutorials und Beispiele
- ♿ [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/) – Accessibility-Standards
- 🗺️ [Leaflet.js Dokumentation](https://leafletjs.com/) – Interaktive Karten
- 🎨 [CSS-Tricks](https://css-tricks.com/) – CSS-Inspirationen
- 🔍 [W3C Validator](https://validator.w3.org/) – HTML/CSS-Validierung

---

## 🎯 Fazit

Mit diesem Projekt wurde eine vollständige, responsive Reise-Website erstellt, die moderne Webstandards umsetzt und gleichzeitig persönliche Reiseerlebnisse ansprechend präsentiert. Die Website dient als praktische Anwendung der im Studium erlernten Webentwicklungs-Grundlagen und als Portfolio-Projekt für zukünftige UX-Design-Arbeiten.

---
