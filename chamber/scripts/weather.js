const LATITUDE = -23.528382822863364;
const LONGITUDE = -46.796560529447135;
const API_KEY = "a41ee697756815d2b2d86796b1d167a1";
    
async function getWeather() {
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// function displayWeather(data) {

apiFetch();


