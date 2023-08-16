document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    });
});
