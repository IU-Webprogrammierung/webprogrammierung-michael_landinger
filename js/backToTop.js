document.addEventListener('DOMContentLoaded', function() {
    const backToTopHTML = `
        <button class="back-to-top" aria-label="Zurück nach oben">
            ↑
        </button>
    `;
    document.body.insertAdjacentHTML('beforeend', backToTopHTML);

    const backToTopButton = document.querySelector('.back-to-top');

    // Button anzeigen bzw. verstecken basierend auf Scroll-Position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth Scroll nach oben beim Click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Keyboard Accessibility (Enter-Taste)
    backToTopButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});