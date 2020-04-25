// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".js-select"),
  KR = select.querySelector("option[value=KR]"),
  GRC = select.querySelector("option[value=GRC]"),
  TUR = select.querySelector("option[value=TUR]"),
  FIN = select.querySelector("option[value=FIN]"),
  NOT = select.querySelector("option[value=NOT]");
const COUNTRY = "country";
const bg = document.getElementById("bg");

bg.style.backgroundRepeat = "no-repeat";
bg.style.backgroundSize = "cover";

function handleChange(event) {
  event.preventDefault();
  const curretValue = select.value;
  saveValue(curretValue);
  loadInfo();
}

function saveValue(text) {
  localStorage.setItem(COUNTRY, text);
}

function selection() {
  select.addEventListener("change", handleChange);
}

function loadInfo() {
  const currentCountry = localStorage.getItem(COUNTRY);
  if (currentCountry === "KR") {
    KR.setAttribute("selected", "");
    bg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1548115184-bc6544d06a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)";
  } else if (currentCountry === "GRC") {
    GRC.setAttribute("selected", "");
    bg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1566194960829-7092ccc0e0c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)";
  } else if (currentCountry === "TUR") {
    TUR.setAttribute("selected", "");
    bg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)";
  } else if (currentCountry === "FIN") {
    FIN.setAttribute("selected", "");
    bg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1563373983-04e07c359192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80)";
  } else {
    NOT.setAttribute("selected", "");
    bg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1537522306408-8435f315b2e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)";
  }
}

function init() {
  loadInfo();
  selection();
}

init();
