const bronzeBttn = document.getElementById('bronze-button');
const bronzeModal = document.getElementById('bronze');
const bronzeClose = document.getElementById('close-bronze');

bronzeBttn.addEventListener('click', () => {
  bronzeModal.showModal();
});

bronzeClose.addEventListener('click', () => {
  bronzeModal.close();
});

const silverBttn = document.getElementById('silver-button');
const silverModal = document.getElementById('silver');
const silverClose = document.getElementById('close-silver');

silverBttn.addEventListener('click', () => {
  silverModal.showModal();
});

silverClose.addEventListener('click', () => {
  silverModal.close();
});

const goldBttn = document.getElementById('gold-button');
const goldModal = document.getElementById('gold');
const goldClose = document.getElementById('close-gold');

goldBttn.addEventListener('click', () => {
  goldModal.showModal();
});

goldClose.addEventListener('click', () => {
  goldModal.close();
});

const noneBttn = document.getElementById('none-button');
const noneModal = document.getElementById('none');
const noneClose = document.getElementById('close-none');

noneBttn.addEventListener('click', () => {
  noneModal.showModal();
});
noneClose.addEventListener('click', () => {
  noneModal.close();
});