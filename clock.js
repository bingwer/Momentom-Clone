const clockContainer = document.querySelector(".js-clock"),
  colckTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  colckTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
