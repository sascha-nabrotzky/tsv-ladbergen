const scrollDownButton = document.querySelector?.('.scroll-down-button');
const scrollUpButton = document.querySelector?.('.scroll-up-button');

const scrollDown = () => {
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', () => {
            window.location.href = '#main';
        });
    }
};

scrollDown();

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
    if (scrollDownButton && scrollUpButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollDownButton.classList.add('hidden');
                scrollUpButton.classList.remove('hidden');
            } else {
                scrollDownButton.classList.remove('hidden');
                scrollUpButton.classList.add('hidden');
            }
        });
    }
};

toggleButtonVisibility();
