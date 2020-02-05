// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
//import { inherits } from "util";
// <⚠️ /DONT DELETE THIS ⚠️>
const range = document.getElementById("js-range");
const notice = document.querySelector("h2");
const btn = document.getElementById("js-btn");
const input = document.getElementById("js-input");
const resultDiv = document.querySelector(".js-result");
const resultNotice = resultDiv.querySelector("h3");
const result = resultDiv.querySelector("h2");
let selectValue = range.value;

function show() {
  selectValue = range.value;
  notice.innerText = `Generate a number between 0 and ${selectValue}`;
  input.maxlength = selectValue;
}

function getRandomInt(value) {
  const max = Math.floor(value);
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function handlesubmit(event) {
  if (input.value === "") {
    event.preventDefault();
    resultNotice.innerText = `Input number`;
  } else {
    event.preventDefault();
    const chosenValue = input.value;
    const randomValue = getRandomInt(selectValue);
    resultNotice.innerText = `You chose : ${chosenValue}, the machine chose: ${randomValue}`;
    if (parseInt(chosenValue, 10) === parseInt(randomValue, 10)) {
      result.innerText = `You Won!`;
    } else {
      result.innerText = `You lost!`;
    }
  }
}

function init() {
  show();
  range.addEventListener("input", show);
  btn.addEventListener("click", handlesubmit);
}

init();
