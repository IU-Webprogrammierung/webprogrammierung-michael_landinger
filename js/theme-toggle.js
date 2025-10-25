// Theme Toggle Funktionalität
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    
    // Initialisiere Theme Toggle wenn Navigation geladen ist
    initThemeToggle();
    
    // Theme Wechsel erkennen
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});

function initThemeToggle() {
    const htmlElement = document.documentElement;
    
    // Theme Toggle Event
    document.addEventListener('click', (e) => {
        if (e.target.closest('.theme-toggle')) {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
    });
}