// Scroll-Animation für Fly-in-Effekte
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer erstellen
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -80px 0px', // Trigger etwas bevor Element sichtbar ist
        threshold: 0.05 // 5% des Elements muss sichtbar sein
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Alle Elemente mit Fly-in-Animation beobachten
    const animatedElements = document.querySelectorAll('.country-tile, .row, .row-country, .tips article');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
