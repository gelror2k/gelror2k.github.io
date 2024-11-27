// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is enabled in localStorage
const currentTheme = localStorage.getItem('theme');

// Set the initial theme based on localStorage value
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = 'White';  // Change button text to White
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = 'Dark';   // Change button text to Dark
}

// Add an event listener to toggle dark mode on button click
themeToggleButton.addEventListener('click', () => {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Save the current theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = 'White';  // Change button text to White
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = 'Dark';   // Change button text to Dark
    }
});
