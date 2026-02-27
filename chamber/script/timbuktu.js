const business = document.querySelector("#business");

async function getBusinessData() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        console.table(data);
        displayBusiness(data);
    } catch (err) {
        console.error("Failed to load business data:", err);
    }
}

getBusinessData();

const displayBusiness = (businesses) => {
    businesses.forEach((bus) => {

        const card = document.createElement("section");
        card.classList.add("business-card");
        
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");
        const linkedin = document.createElement("a");

        name.textContent = bus.companyName;
        address.textContent = `Address: ${bus.companyAddresses[0]}`;
        phone.textContent = `Phone: ${bus.companyPhoneNumber}`;
        website.textContent = "Visit Website";
        website.setAttribute("href", bus.companyWebsiteUrl);
        website.setAttribute("target", "_blank");
        membership.textContent = `Membership Level: ${bus.membershipLevel}`;
        linkedin.textContent = "LinkedIn Profile";
        linkedin.setAttribute("href", bus.social.linkedin);
        linkedin.setAttribute("target", "_blank");

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(linkedin);

        business.appendChild(card);
    });
};