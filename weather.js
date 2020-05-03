const weather = document.querySelector(".js-weather");
const weatherImg = document.getElementById("weatherImg");
const COORDS = "coords";
const API_KEY = "e29da4cd6b004b90e6798a673a8b8760";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const curWeather = json.weather[0];
      const temperature = parseInt(json.main.temp);
      const place = json.name;
      weatherImg.style.backgroundImage =
        "url(http://openweathermap.org/img/w/10d.png)";
      weather.innerText = `${temperature}º @ ${place}`;
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
