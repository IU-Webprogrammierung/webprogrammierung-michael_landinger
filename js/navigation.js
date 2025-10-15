document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Navigation laden
        const response = await fetch('./components/navigation.html');
        const navigationHtml = await response.text();
        document.querySelector('header').innerHTML = navigationHtml;

        // Footer laden
        const footerResponse = await fetch('./components/footer.html');
        const footerHtml = await footerResponse.text();
        const footer = document.createElement('footer');
        footer.innerHTML = footerHtml;
        document.body.appendChild(footer);

        // Aktive Seite markieren
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.setAttribute('aria-current', 'page');
        }

        // Burger Menu Funktionalität
        const burgerButton = document.querySelector('.burger-menu');
        const navList = document.querySelector('.nav-list');

        burgerButton?.addEventListener('click', function () {
            const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true';
            burgerButton.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');

            const iconElement = burgerButton.querySelector('.material-icons');
            iconElement.textContent = isExpanded ? 'menu' : 'close';
        });
    } catch (error) {
        console.error('Error loading components:', error);
    }
});