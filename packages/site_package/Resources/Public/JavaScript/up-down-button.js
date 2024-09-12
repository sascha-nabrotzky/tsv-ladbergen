const scrollUpButton = document.querySelector?.('.scroll-up-button');

const scrollUp = () => {
    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
            });
        });
    }
};

scrollUp();

const toggleButtonVisibility = () => {
    if (scrollUpButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollUpButton.classList.remove('hidden');
            } else {
                scrollUpButton.classList.add('hidden');
            }
        });
    }
};

toggleButtonVisibility();
