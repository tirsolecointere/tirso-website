let darkMode = localStorage.getItem('darkMode');

const darkModeToggler = document.querySelector('#darkmode-toggler');

const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggler.classList.add('isDark')
}
const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null);
    darkModeToggler.classList.remove('isDark')
}

if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggler.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})