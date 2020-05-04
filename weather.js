const weather = document.querySelector(".js-weather");
const weatherPlace = document.querySelector(".js-location");
const weatherImg = document.getElementById("weatherImg");
const COORDS = "coords";
const API_KEY = "e29da4cd6b004b90e6798a673a8b8760";

function getWeatherIcon(icon) {
  const i = document.createElement("i");
  i.classList.add("wi");
  switch (icon) {
    case "01d":
      i.classList.add("wi-day-sunny");
      weatherImg.appendChild(i);
      break;
    case "02d":
      i.classList.add("wi-day-cloudy");
      weatherImg.appendChild(i);
      break;
    case "03d":
      i.classList.add("wi-cloud");
      weatherImg.appendChild(i);
      break;
    case "04d":
      i.classList.add("wi-cloudy");
      weatherImg.appendChild(i);
      break;
    case "09d":
      i.classList.add("wi-rain");
      weatherImg.appendChild(i);
      break;
    case "10d":
      i.classList.add("wi-day-rain");
      weatherImg.appendChild(i);
      break;
    case "11d":
      i.classList.add("wi-day-lightning");
      weatherImg.appendChild(i);
      break;
    case "13d":
      i.classList.add("wi-day-snow");
      weatherImg.appendChild(i);
      break;
    case "50d":
      i.classList.add("wi-smog");
      weatherImg.appendChild(i);
      break;
    case "01n":
      i.classList.add("wi-night-clear");
      weatherImg.appendChild(i);
      break;
    case "02n":
      i.classList.add("wi-night-alt-cloudy");
      weatherImg.appendChild(i);
      break;
    case "03n":
      i.classList.add("wi-cloud");
      weatherImg.appendChild(i);
      break;
    case "04n":
      i.classList.add("wi-cloudy");
      weatherImg.appendChild(i);
      break;
    case "09n":
      i.classList.add("wi-rain");
      weatherImg.appendChild(i);
      break;
    case "10n":
      i.classList.add("wi-night-alt-rain");
      weatherImg.appendChild(i);
      break;
    case "11n":
      i.classList.add("wi-night-lightning");
      weatherImg.appendChild(i);
      break;
    case "13n":
      i.classList.add("wi-night-snow");
      weatherImg.appendChild(i);
      break;
    case "50n":
      i.classList.add("wi-smog");
      weatherImg.appendChild(i);
      break;
    default:
      break;
  }
}

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const curWeather = json.weather[0];
      const temperature = parseInt(json.main.temp);
      const place = json.name;
      getWeatherIcon(curWeather.icon);
      weather.innerText = `${temperature}º`;
      weatherPlace.innerText = `${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handelGeoError() {
  console.log.length("Can't access geo.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords == null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
