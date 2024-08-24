window.addEventListener('load', e => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    const lightModeToggle = document.getElementById('lightModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.replace('bg-gray-100', 'bg-gray-900');
    });

    lightModeToggle.addEventListener('click', () => {
        body.classList.toggle('white');
        body.classList.replace('bg-gray-900', 'bg-gray-100');
    });
});
