const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = 'White'; 
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = 'Dark';  
}
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = 'White';  
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = 'Dark';  
    }
});
