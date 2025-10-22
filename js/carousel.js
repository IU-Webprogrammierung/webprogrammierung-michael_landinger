document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const imagesPerView = 3;
    const maxIndex = Math.max(0, images.length - imagesPerView);

    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        const imageWidth = images[0].offsetWidth;
        const gap = 20;
        const offset = -(currentIndex * (imageWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Buttons deaktivieren am Anfang/Ende
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.3' : '1';
    }

    function nextSlide() {
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

    // Initiales Update
    updateCarousel();

    setInterval(() => {
        if (currentIndex < maxIndex) {
            nextSlide();
        } else {
            currentIndex = 0;
            updateCarousel();
        }
    }, 5000);

    window.addEventListener('resize', updateCarousel);
});