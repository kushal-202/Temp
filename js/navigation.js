// Navigation functionality
export function initNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}