const LATITUDE = -23.528382822863364;
const LONGITUDE = -46.796560529447135;
const API_KEY = "a41ee697756815d2b2d86796b1d167a1";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
const weatherList = document.getElementById("weatherList");
const ul = document.createElement("ul");

weatherList.appendChild(ul);

function displayWeather(data) {
    const li = document.createElement("li");
    const weatherDescription = data.weather[0].main;
    const temperature = data.main.temp;
    const temperatureC = ((temperature - 32) * 5 / 9).toFixed(1);
    const temperatureMax = data.main.temp_max;
    const temperatureMaxC = ((temperatureMax - 32) * 5 / 9).toFixed(1);
    const temperatureMin = data.main.temp_min;
    const temperatureMinC = ((temperatureMin - 32) * 5 / 9).toFixed(1);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windSpeedKmh = (windSpeed * 1.60934).toFixed(1);

    li.innerHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperatureC}°C</p>
        <p>Max: ${temperatureMaxC}°C</p>
        <p>Min: ${temperatureMinC}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeedKmh} km/h</p>
    `;
    ul.appendChild(li);
}

apiFetch();


