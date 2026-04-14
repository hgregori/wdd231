export function initDate() {
    const today = new Date();
    const yearElem = document.querySelector('#currentYear');
    if (yearElem) {
        yearElem.textContent = today.getFullYear();
    }

    const modElem = document.querySelector('#lastModified');
    if (modElem) {
        modElem.textContent = `Last Modified: ${document.lastModified}`;
    }
}
