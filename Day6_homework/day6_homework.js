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

function handleChange(event) {
  event.preventDefault();
  const curretValue = select.value;
  saveValue(curretValue);
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
  } else if (currentCountry === "GRC") {
    GRC.setAttribute("selected", "");
  } else if (currentCountry === "TUR") {
    TUR.setAttribute("selected", "");
  } else if (currentCountry === "FIN") {
    FIN.setAttribute("selected", "");
  } else {
    NOT.setAttribute("selected", "");
  }
}

function init() {
  loadInfo();
  selection();
}

init();
