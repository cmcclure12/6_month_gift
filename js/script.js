document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.setAttribute('aria-expanded', nav.classList.contains('show'));
    });
});
