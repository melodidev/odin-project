let apiKey = 'YOUR_API_KEY';

let $temperature = document.querySelector(".temperature");
let $feels = document.querySelector(".feels");
let $btnUnit = document.querySelector(".btn-unit");
let $feelsUnit = document.querySelector(".feels-unit");
let $weatherContainer = document.querySelector(".weather-container");
let $detailsContainer = document.querySelector(".details-container");
let $errorMsg = document.querySelector(".error-msg");
let $title = document.querySelector("title");

async function getData(location) {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`, {mode: 'cors'});
    let data = await response.json();

    let temperature = Math.round(data.main.temp);
    $temperature.textContent = temperature;
    $temperature.dataset.celcius = temperature;
    let feels = Math.round(data.main.feels_like);
    $feels.textContent = feels;
    $feels.dataset.celcius = feels;

    $weatherContainer.classList.remove("display-none");
    $detailsContainer.classList.remove("display-none");
    $errorMsg.classList.add("display-none");
    $title.textContent = `🌦 ${data.weather[0].main}`;

    document.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector(".mainWeather").textContent = data.weather[0].main;
    document.querySelector(".description").textContent = data.weather[0].description;
    document.querySelector(".humidity").textContent = data.main.humidity;
    document.querySelector(".wind-speed").textContent = Math.round(data.wind.speed);

  } catch (e) {
    $weatherContainer.classList.add("display-none");
    $detailsContainer.classList.add("display-none");
    $errorMsg.classList.remove("display-none");
    $title.textContent = `🌦 Weather`;
    console.log(e);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  getData("London");
});

document.querySelector(".btn-search").addEventListener("click", () => {
  let location = document.querySelector(".search").value;
  getData(location);
});

document.querySelector(".search").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let location = document.querySelector(".search").value;
    getData(location);
  }
});

$btnUnit.addEventListener("click", () => {
  if ($btnUnit.textContent == "°C") {
    $btnUnit.textContent = "°F";
    $feelsUnit.textContent = "°F";
    $temperature.textContent = celciusToFahrenheit($temperature.dataset.celcius);
    $feels.textContent = celciusToFahrenheit($feels.dataset.celcius);
  } else {
    $btnUnit.textContent = "°C";
    $feelsUnit.textContent = "°C";
    $temperature.textContent = $temperature.dataset.celcius;
    $feels.textContent = $feels.dataset.celcius;
  }
});

function celciusToFahrenheit(celcius) {
  return Math.round(Number(celcius) * 9/5 + 32);
}