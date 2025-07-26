const iframe = document.querySelector?.('div:has(> iframe)');
const openIframeButton = document.querySelector?.('.open-iframe-button');
// Button muss manuell hinzugefügt werden (html-Element)
const openIframeButtonContainer = document.querySelector?.(
    'div:has(> .open-iframe-button)'
);

function setHeight() {
    iframe.style.height = '40rem';
    openIframeButton.removeEventListener('click', setHeight);
    openIframeButtonContainer.remove();
}

if (iframe) {
    openIframeButton.addEventListener('click', setHeight);
}
