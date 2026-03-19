const LATITUDE = -23.528382822863364;
const LONGITUDE = -46.796560529447135;
const API_KEY = "a41ee697756815d2b2d86796b1d167a1";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`;

// ---------------- CURRENT WEATHER ----------------

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
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

    const temperature = ((data.main.temp - 32) * 5/9).toFixed(1);
    const temperatureMax = ((data.main.temp_max - 32) * 5/9).toFixed(1);
    const temperatureMin = ((data.main.temp_min - 32) * 5/9).toFixed(1);

    const humidity = data.main.humidity;
    const windSpeedKmh = (data.wind.speed * 1.60934).toFixed(1);

    li.innerHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Max: ${temperatureMax}°C</p>
        <p>Min: ${temperatureMin}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeedKmh} km/h</p>
    `;
    ul.appendChild(li);
}

apiFetch();

// ---------------- FORECAST ----------------

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        display3DayForecast(data);

    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function display3DayForecast(data) {
    const middayEntries = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    const nextThree = middayEntries.slice(0, 3);

    nextThree.forEach(displayForecastCard);
}

const forecastList = document.getElementById("forecastList");

function displayForecastCard(day) {
    const card = document.createElement("section");
    card.classList.add("forecast-card");

    const date = day.dt_txt.split(" ")[0];
    const temp = day.main.temp.toFixed(1);
    const desc = day.weather[0].description;
    const icon = day.weather[0].icon;

    card.innerHTML = `
        <h3>${date}</h3>
        <p>${desc}</p>
        <p>${temp}°C</p>
    `;

    forecastList.appendChild(card);
}

getForecast();