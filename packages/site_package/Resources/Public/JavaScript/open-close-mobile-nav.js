const mobileNav = document.querySelector?.('.mobile-nav-wrapper');
const mobileNavButton = document.querySelector?.('.mobile-nav-button');

const toggleMobileNav = () => {
    mobileNavButton.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
};

toggleMobileNav();
