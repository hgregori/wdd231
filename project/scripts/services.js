
const container = document.getElementById("card-services");

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

    container.appendChild(card);
};


fetchServices();