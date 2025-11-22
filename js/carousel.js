document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;

    // Berechne Anzahl der sichtbaren Bilder basierend auf Bildschirmbreite
    function getImagesPerView() {
        const width = window.innerWidth;
        if (width <= 480) return 1;  // Mobile: 1 Bild
        if (width <= 768) return 2;  // Tablet: 2 Bilder
        return 3;                     // Desktop: 3 Bilder
    }

    function initializeDots() {
        dotsContainer.innerHTML = ''; // Lösche alte Dots
        const imagesPerView = getImagesPerView();
        const maxIndex = Math.max(0, images.length - imagesPerView);

        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        const imageWidth = images[0].offsetWidth;
        const gap = 20;
        const offset = -(currentIndex * (imageWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        const imagesPerView = getImagesPerView();
        const maxIndex = Math.max(0, images.length - imagesPerView);

        // Buttons deaktivieren am Anfang/Ende
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.3' : '1';
    }

    function nextSlide() {
        const imagesPerView = getImagesPerView();
        const maxIndex = Math.max(0, images.length - imagesPerView);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initiales Setup
    initializeDots();
    updateCarousel();

    // Auto-Slide
    setInterval(() => {
        const imagesPerView = getImagesPerView();
        const maxIndex = Math.max(0, images.length - imagesPerView);
        if (currentIndex < maxIndex) {
            nextSlide();
        } else {
            currentIndex = 0;
            updateCarousel();
        }
    }, 5000);

    // Bei Resize: Dots neu initialisieren und Index anpassen
    window.addEventListener('resize', function() {
        const imagesPerView = getImagesPerView();
        const maxIndex = Math.max(0, images.length - imagesPerView);
        
        // Stelle sicher, dass currentIndex nicht außerhalb des Bereichs liegt
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        
        initializeDots();
        updateCarousel();
    });
});