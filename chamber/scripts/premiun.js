const business = document.querySelector("#business");

async function getBusiness() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        for (let bus of data) {
            if (bus.membershipLevel === 3) { // Only display Gold members
                displayBusiness(bus);
                await delay(300);
            }
        }

    } catch (error) {
        console.error("Error fetching business data:", error);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayBusiness(bus) {
    const card = document.createElement("section");
    card.classList.add("business-card");
    
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");
    const linkedin = document.createElement("a");
    const img = document.createElement("img");

    img.setAttribute("src", bus.image);
    img.setAttribute("alt", `${bus.company} Logo`);
    img.classList.add("company-logo");
    img.setAttribute("loading", "lazy");

    name.textContent = bus.company;

    address.textContent = `Address: ${bus.addresses[0]}`;
    
    phone.textContent = `Phone: ${bus.phoneNumber ?? "Not available"}`;

    website.textContent = "Visit Website";
    website.setAttribute("href", bus.website);
    website.setAttribute("target", "_blank");

    switch (bus.membershipLevel) {
        case 1: membership.textContent = "Membership Level: Bronze"; break;
        case 2: membership.textContent = "Membership Level: Silver"; break;
        case 3: membership.textContent = "Membership Level: Gold"; break;
        default: membership.textContent = "Membership Level: Unknown";
    }

    linkedin.textContent = "LinkedIn Profile";
    linkedin.setAttribute("href", bus.social.linkedin);
    linkedin.setAttribute("target", "_blank");

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(linkedin);
    
    business.appendChild(card);
}

getBusiness();
``