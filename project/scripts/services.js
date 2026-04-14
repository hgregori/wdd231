
const container = document.getElementById("card-services");
const modal = document.getElementById("service-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

async function fetchServices() {
    try {
        const response = await fetch("data/services.json");
        const services = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        services.forEach(service => {
            addServiceCard(service);
        });
    } catch (error) {
        console.error("Erro ao buscar serviços:", error);
    }
}

// Gera o DOM dinamicamente
function addServiceCard(service) {
    const card = document.createElement("div");
    card.classList.add("service");
    card.style.cursor = "pointer"; // indicate clickability

    const title = document.createElement("h3");
    title.textContent = service.name;

    const img = document.createElement("img");
    img.src = service.image;
    img.alt = `Imagem ilustrativa de ${service.name}`;
    img.loading = "lazy";

    const desc = document.createElement("p");
    desc.textContent = service.description;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Preço médio:</strong> ${service.price_range}`;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(desc);

    // Modal Interaction Requirement
    card.addEventListener("click", () => {
        modalTitle.textContent = service.name;
        modalImg.src = service.image;
        modalImg.alt = `Imagem de ${service.name}`;
        modalDesc.innerHTML = `<strong>Valores:</strong> ${service.price_range}<br><br>${service.description}`;
        modal.showModal();
    });

    container.appendChild(card);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        modal.close();
    });
    
    // Close on click outside
    modal.addEventListener("click", (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
}

fetchServices();