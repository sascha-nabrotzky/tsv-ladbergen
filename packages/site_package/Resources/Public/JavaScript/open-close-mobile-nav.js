const mobileNav = document.querySelector?.('.mobile-nav-wrapper');
const mobileNavButton = document.querySelector?.('.mobile-nav-button');
const menuIconOpen = document.querySelector?.('.menu-icon-open');
const menuIconClose = document.querySelector?.('.menu-icon-close');

const toggleMobileNav = () => {
    mobileNavButton.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    });
};

toggleMobileNav();
