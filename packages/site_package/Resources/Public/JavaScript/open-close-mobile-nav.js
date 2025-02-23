const mobileNavButton = document.querySelector?.('.mobile-nav-toggle-button');
const menuIconOpen = document.querySelector?.('.menu-icon-open');
const menuIconClose = document.querySelector?.('.menu-icon-close');
const mobileNavWrapper = document.querySelector?.('.mobile-nav-wrapper');
const mainContent = document.querySelector?.('.main-content-wrap');

const openMobileNav = () => {
    mobileNavButton.addEventListener('click', () => {
        if (mobileNavButton.getAttribute('aria-expanded') === 'false') {
            mobileNavButton.setAttribute('aria-expanded', 'true');
        } else {
            mobileNavButton.setAttribute('aria-expanded', 'false');
        }

        mobileNavWrapper.classList.toggle('open');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
        mobileNavButton.toggleAttribute('aria-expanded', 'true');
        mobileNavWrapper.toggleAttribute('inert');
    });
};
openMobileNav();

const setAriaHidden = () => {
    if (document.documentElement.clientWidth < 640) {
        mobileNavButton.setAttribute('aria-hidden', 'false');
        mobileNavWrapper.setAttribute('aria-hidden', 'false');
    } else {
        mobileNavButton.setAttribute('aria-hidden', 'true');
        mobileNavWrapper.setAttribute('aria-hidden', 'true');
    }
};
setAriaHidden();

const setAriaHiddenOnResize = () => {
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 640) {
            mobileNavButton.setAttribute('aria-hidden', 'false');
            mobileNavWrapper.setAttribute('aria-hidden', 'false');
        } else {
            mobileNavButton.setAttribute('aria-hidden', 'true');
            mobileNavWrapper.setAttribute('aria-hidden', 'true');
        }
    });
};
setAriaHiddenOnResize();
