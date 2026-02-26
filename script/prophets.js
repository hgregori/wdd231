
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets); // ✅ match function name
  } catch (err) {
    console.error('Failed to load prophets:', err);
  }
}

getProphetData();

const displayProphets = (prophets) => {  // ✅ use =>
  prophets.forEach((prophet) => {
    // ✅ always use document.createElement
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const birth = document.createElement("p");
    const birthPlace = document.createElement("p");

    // ✅ textContent (not textContend)
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.textContent = `Birthdate: ${prophet.birthdate}`;
    birthPlace.textContent = `Birth Local: ${prophet.birthplace}`;

    // ✅ attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} - portrait`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birth);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
