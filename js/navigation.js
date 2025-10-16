document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Navigation laden
        const response = await fetch('./components/navigation.html');
        const navigationHtml = await response.text();
        
        // Navigation Container mit korrekten ARIA-Attributen erstellen
        const nav = document.createElement('nav');
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Hauptnavigation');
        nav.innerHTML = navigationHtml;
        document.querySelector('header').appendChild(nav);

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

                if (burgerButton && navList) {
            // Initiale ARIA-Attribute setzen
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-controls', 'nav-list');
            burgerButton.setAttribute('aria-label', 'Hauptmenü');
            
            navList.id = 'nav-list';
            navList.setAttribute('role', 'menu');

            burgerButton.addEventListener('click', function() {
                const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true';
                burgerButton.setAttribute('aria-expanded', !isExpanded);
                navList.classList.toggle('active');

                // Ankündigung für Screenreader
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.textContent = `Menü ist ${!isExpanded ? 'geöffnet' : 'geschlossen'}`;
                document.body.appendChild(announcement);
                setTimeout(() => announcement.remove(), 1000);

                const iconElement = burgerButton.querySelector('.material-icons');
                if (iconElement) {
                    iconElement.textContent = isExpanded ? 'menu' : 'close';
                }
            });

            // Escape-Taste schließt das Menü
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && burgerButton.getAttribute('aria-expanded') === 'true') {
                    burgerButton.click();
                }
            });
        }

        // Verbesserte Tastaturnavigation für das Menü
        const menuItems = document.querySelectorAll('[role="menuitem"]');
        
        menuItems.forEach(item => {
            item.addEventListener('keydown', (e) => {
                let targetItem;
                
                switch(e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        targetItem = e.target.closest('li').nextElementSibling;
                        if (targetItem) targetItem.querySelector('[role="menuitem"]').focus();
                        break;
                        
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        targetItem = e.target.closest('li').previousElementSibling;
                        if (targetItem) targetItem.querySelector('[role="menuitem"]').focus();
                        break;
                        
                    case 'Home':
                        e.preventDefault();
                        menuItems[0].focus();
                        break;
                        
                    case 'End':
                        e.preventDefault();
                        menuItems[menuItems.length - 1].focus();
                        break;
                }
            });
        });

        // Dynamisches setzen von aria-current
        const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
        if (currentLink) {
            currentLink.setAttribute('aria-current', 'page');
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
});