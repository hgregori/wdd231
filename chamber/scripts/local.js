import { myData } from '../data/localStuff.mjs';

console.log(myData);

const localSection = document.getElementById("local-business");


function init() {
    for (let item of myData) {
        displayData(item);
    }
}

function displayData(item) {
    const card = document.createElement("section");
    card.classList.add("business-card");
    localSection.appendChild(card);

    const title = document.createElement("h2");
    title.textContent = item.name;
    card.appendChild(title);

    const img = document.createElement("img");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", `${item.name} Image`);
    img.classList.add("business-image");
    img.setAttribute("loading", "lazy");
    card.appendChild(img);

    const div = document.createElement("div");
    div.classList.add("business-info");
    card.appendChild(div);
    
    const address = document.createElement("p");
    address.innerHTML = `<strong>Address:</strong> ${item.address}`;
    div.appendChild(address);

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description:</strong> ${item.description}`;
    div.appendChild(description);

    const button = document.createElement("a");
    button.textContent = "Learn more";
    button.setAttribute("href", item.about);
    button.setAttribute("target", "_blank");
    button.classList.add("visit-button");
    card.appendChild(button);
}

init();

const visitMessage = document.getElementById("visit-message");

const now = Date.now();

const lastVisit = Number(localStorage.getItem("lastVisit"));

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

else {
    const difference = now - lastVisit;
    const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);