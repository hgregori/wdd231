const bronzeBtn = document.getElementById('bronze-button');
const bronzeModal = document.getElementById('bronzeDialog');
const bronzeClose = document.getElementById('close-bronze');

bronzeBtn.addEventListener('click', () => {
  bronzeModal.showModal();
});

bronzeClose.addEventListener('click', () => {
  bronzeModal.close();
});

const silverBtn = document.getElementById('silver-button');
const silverModal = document.getElementById('silverDialog');
const silverClose = document.getElementById('close-silver');

silverBtn.addEventListener('click', () => {
  silverModal.showModal();
});

silverClose.addEventListener('click', () => {
  silverModal.close();
});

const goldBtn = document.getElementById('gold-button');
const goldModal = document.getElementById('goldDialog');
const goldClose = document.getElementById('close-gold');

goldBtn.addEventListener('click', () => {
  goldModal.showModal();
});

goldClose.addEventListener('click', () => {
  goldModal.close();
});

const noneBtn = document.getElementById('none-button');
const noneModal = document.getElementById('noneDialog');
const noneClose = document.getElementById('close-none');

noneBtn.addEventListener('click', () => {
  noneModal.showModal();
});
noneClose.addEventListener('click', () => {
  noneModal.close();
});