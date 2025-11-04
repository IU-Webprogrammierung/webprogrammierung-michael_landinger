// Karte initialisieren
// Zoomstufe "3" um alle Marker zu sehen
var map = L.map('map').setView([48.5, 15.0], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker für bereiste Länder (Hauptstädte)
L.marker([52.52, 13.405]).addTo(map)
    .bindPopup('<b>Berlin</b><br>Deutschland');

L.marker([48.2082, 16.3738]).addTo(map)
    .bindPopup('<b>Wien</b><br>Österreich');

L.marker([45.8150, 15.9819]).addTo(map)
    .bindPopup('<b>Zagreb</b><br>Kroatien');

L.marker([40.4168, -3.7038]).addTo(map)
    .bindPopup('<b>Madrid</b><br>Spanien');

L.marker([38.7223, -9.1393]).addTo(map)
    .bindPopup('<b>Lissabon</b><br>Portugal');

L.marker([37.9838, 23.7275]).addTo(map)
    .bindPopup('<b>Athen</b><br>Griechenland');

L.marker([52.2297, 21.0122]).addTo(map)
    .bindPopup('<b>Warschau</b><br>Polen');