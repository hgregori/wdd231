const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const LONGITUDE = 6.63229900621106;
const LATITUDE = 49.75114345418715;
const MY_KEY = 'a41ee697756815d2b2d86796b1d167a1';

const url = `//api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${MY_KEY}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    } } catch (error) {
    console.log(error);
  }
}  

apiFetch();