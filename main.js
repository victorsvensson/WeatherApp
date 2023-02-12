import { getWeather } from "./weather";
import "./styles.css";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess({ coords }) {
    getWeather(
        coords.latitude,
        coords.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
        .then(renderCurrentWeather)
        .catch((e) => {
            console.error(e);
            alert("Error getting weather");
        });
}

function positionError() {
    alert(
        "There was an error getting your location. Please allow us to use your location and refresh the page"
    );
}

let currentCity = document.querySelector("[data-current-city]");
let currentTemperature = document.querySelector("[data-current-temp]");
let currentFeelsLike = document.querySelector("[data-current-feelsLike]");
let currentHighTemp = document.querySelector("[data-current-highTemp]");
let currentLowTemp = document.querySelector("[data-current-lowTemp]");
let currentHumidity = document.querySelector("[data-current-humidity]");

function renderCurrentWeather(current_weather) {
    // currentCity.innerHTML = "City: " + current_weather.name;
    currentTemperature.innerHTML =
        Math.round(current_weather.main.temp) + "&deg";
    // currentFeelsLike.innerHTML = "Feels like: " + current_weather.main.feels_like + "&deg";
    currentHighTemp.innerHTML =
        "Highest: " + Math.round(current_weather.main.temp_max) + "&deg";
    currentLowTemp.innerHTML =
        "Lowest: " + Math.round(current_weather.main.temp_min) + "&deg";
    currentHumidity.innerHTML =
        "Humidity: " + Math.round(current_weather.main.humidity) + "%";
    SetCurrentWeatherIcon(current_weather);
}

let currentWeatherIcon = document.querySelector("[data-current-weather-icon]");

function SetCurrentWeatherIcon(current_weather) {
    currentWeatherIcon.src = "public/images/sun.png";
}
