const events = document.getElementById('events');

async function fetchEvents() {
    try {
        const response = await fetch('data/holidays.json');
        const data = await response.json();

        const ul = document.createElement('ul'); 

        const upcoming = data.filter(event => isUpcoming(event));

        for (let event of upcoming) {
            displayEvents(event, ul);
            await delay(200); 
        }

        events.appendChild(ul);

    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function displayEvents(event, ulElement) {
    const li = document.createElement('li');
    li.textContent = `${event.date} - ${event.name}`;
    ulElement.appendChild(li);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isUpcoming(event) {
    const today = new Date();
    const limit = new Date();
    limit.setDate(limit.getDate() + 45);

    const eventDate = new Date(event.date);

    return eventDate >= today && eventDate <= limit;
}

fetchEvents();