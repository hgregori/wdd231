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

    const address = document.createElement("p");
    address.textContent = item.address;
    card.appendChild(address);

    const description = document.createElement("p");
    description.textContent = item.description;
    card.appendChild(description);

    const button = document.createElement("a");
    button.textContent = "Learn more";
    button.setAttribute("href", item.about);
    button.setAttribute("target", "_blank");
    button.classList.add("visit-button");
    card.appendChild(button);
}

init();