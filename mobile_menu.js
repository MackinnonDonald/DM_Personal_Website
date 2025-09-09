// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileBackdrop = document.getElementById('mobileBackdrop');
    const body = document.body;

    function toggleMobileMenu() {
        const isOpen = mobileNav.classList.contains('active');
        
        if (isOpen) {
            // Close menu
            mobileNav.classList.remove('active');
            mobileBackdrop.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        } else {
            // Open menu
            mobileNav.classList.add('active');
            mobileBackdrop.classList.add('active');
            mobileMenuToggle.classList.add('active');
            body.classList.add('menu-open');
        }
    }

    // Toggle menu on button click
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking backdrop
    mobileBackdrop.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileBackdrop.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});