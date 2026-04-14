export function initWayfinding() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#mobile-nav a");

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath || (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
            // Found active link
            link.classList.add("active");
        }
    });
}
