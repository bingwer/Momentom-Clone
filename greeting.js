const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  nameChangeBtn = document.querySelector(".nameChangeBtn"),
  userForm = document.querySelector(".user");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

let date = "",
  hours = "";

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

function handelChange(event) {
  event.preventDefault();
  const curretValue = input.value;
  changeGreeting(curretValue);
  saveName(curretValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function changeName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handelChange);
}

function nameChange() {
  greeting.classList.remove(SHOWING_CN);
  greeting.style.opacity = 0;
  nameChangeBtn.style.opacity = 0;
  setTimeout(function () {
    greeting.style.display = "none";
  }, 1000);
  setTimeout(function () {
    nameChangeBtn.style.display = "none";
  }, 1000);
  setTimeout(function () {
    input.style.display = "block";
    input.focus();
    setTimeout(function () {
      input.style.transform = "scale(1.1)";
      setTimeout(function () {
        input.style.transform = "scale(1.0)";
      }, 50);
    }, 10);
    changeName();
  }, 1000);
}

function paintGreeting(text) {
  date = new Date();
  hours = date.getHours();
  input.style.display = "none";
  input.value = "";
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
  nameChangeBtn.addEventListener("click", nameChange);
  userForm.addEventListener("mouseover", function () {
    nameChangeBtn.style.opacity = 1;
  });
  userForm.addEventListener("mouseout", function () {
    nameChangeBtn.style.opacity = 0;
  });
}

function changeGreeting(text) {
  date = new Date();
  hours = date.getHours();
  input.style.display = "none";
  input.value = "";
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
  nameChangeBtn.style.display = "block";
  nameChangeBtn.style.opacity = 0;
  greeting.style.display = "block";
  greeting.style.opacity = 1;
  nameChangeBtn.addEventListener("click", nameChange);
  userForm.addEventListener("mouseover", function () {
    nameChangeBtn.style.opacity = 1;
  });
  userForm.addEventListener("mouseout", function () {
    nameChangeBtn.style.opacity = 0;
  });
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    input.style.display = "block";
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
