document.addEventListener('DOMContentLoaded', function() {
    // Lightbox HTML zum Body hinzufügen
    const lightboxHTML = `
        <div class="lightbox-container" role="dialog" aria-label="Bildvorschau">
            <button class="close-lightbox" aria-label="Bild schließen">&times;</button>
            <img class="lightbox-image" src="" alt="" />
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.querySelector('.lightbox-container');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.close-lightbox');

    // Alle Bilder auswählbar machen - inkl. Carousel-Bilder
    document.querySelectorAll('.row .image img, .gallery-image, .carousel-image').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Verhindert Scrollen
        });
    });

    // Schließen-Funktionen
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Scrollen wieder aktivieren
    }
});