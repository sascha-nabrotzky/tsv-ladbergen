const scrollDownButton = document.querySelector?.('.scroll-down-button');
const scrollUpButton = document.querySelector?.('.scroll-up-button');

const scrollDown = () => {
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', () => {
            window.location.href = '#main-content';
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

const toggleButtons = () => {
    if (scrollDownButton && scrollUpButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollDownButton.style.display = 'none';
                scrollUpButton.style.display = 'block';
            } else {
                scrollDownButton.style.display = 'block';
                scrollUpButton.style.display = 'none';
            }
        });
    }
};

toggleButtons();
