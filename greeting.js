const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

toDoFormId = document.getElementById("todoForm");

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const curretValue = input.value;
  paintGreeting(curretValue);
  saveName(curretValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  const date = new Date();
  const hours = date.getHours();
  input.style.display = "none";
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  if (hours >= 21 || hours < 6) {
    greeting.innerText = `Good Night, ${text}.`;
  } else if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good Morning, ${text}.`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good Afternoon, ${text}.`;
  } else if (hours >= 18 && hours < 21) {
    greeting.innerText = `Good Evening, ${text}.`;
  } else {
    greeting.innerText = `Hello, ${text}`;
  }
  greeting.style.opacity = 1;
  toDoFormId.style.display = "flex";
  toDoFormId.style.flexDirection = "column";
  setTimeout(function () {
    toDoFormId.style.opacity = 1;
  }, 1000);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    input.style.display = "inline";
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
