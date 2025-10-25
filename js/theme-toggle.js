// Theme Toggle Funktionalität
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    
    // Gespeichertes Theme laden oder System-Präferenz nutzen
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }
    
    // Warte auf die Navigation (da sie per JavaScript geladen wird)
    const waitForThemeToggle = setInterval(() => {
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (themeToggle) {
            clearInterval(waitForThemeToggle);
            
            // Theme Toggle Event
            themeToggle.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                htmlElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Barrierefreiheit: Wechsel zu Darkmode ankündigen
                const announcement = newTheme === 'dark' 
                    ? 'Dunkelmodus aktiviert' 
                    : 'Hellmodus aktiviert';
                announceToScreenReader(announcement);
            });
        }
    }, 100);
    
    // Theme Wechsel erkennen
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});