document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');

    // Load saved theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSelector.value = savedTheme;

    // Update theme on selection change
    themeSelector.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        document.documentElement.setAttribute('data-theme', selectedTheme);

        // Save the selected theme to localStorage
        localStorage.setItem('theme', selectedTheme);
    });
});
