const homeBttn = document.getElementById('home-button');

homeBttn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

document.getElementById("timestamp").value = new Date().toISOString();