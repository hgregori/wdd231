export function trackVisits() {
    let visits = localStorage.getItem("site_visits");
    
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem("site_visits", visits);

    const footerSpan = document.querySelector(".copy");
    if (footerSpan) {
        const visitSpan = document.createElement("span");
        visitSpan.textContent = ` | Visitas: ${visits}`;
        footerSpan.appendChild(visitSpan);
    }
}
