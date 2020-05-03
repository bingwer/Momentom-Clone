const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const back = document.querySelector(".back");

let firstNum = "";
let secondNum = "";
let selectedOperator = "";
let firstFlag = false;
let secondFlag = false;
let clickedNum;

function resetAll() {
  firstNum = "";
  secondNum = "";
  firstFlag = false;
  secondFlag = false;
  result.innerText = "0";
}

function operate() {
  const firstOpNum = parseFloat(firstNum);
  const secOpNum = parseFloat(secondNum);
  if (selectedOperator === "+") {
    return firstOpNum + secOpNum;
  } else if (selectedOperator === "-") {
    return firstOpNum - secOpNum;
  } else if (selectedOperator === "*") {
    return firstOpNum * secOpNum;
  } else if (selectedOperator === "/") {
    if (Number.isInteger(firstOpNum / secondNum) === true) {
      return firstOpNum / secondNum;
    } else {
      return (firstOpNum / secOpNum).toFixed(5);
    }
  } else {
    return;
  }
}

function calculate() {
  const oprationValue = operate();
  result.innerText = oprationValue;
  firstNum = oprationValue;
  secondNum = "";
  secondFlag = false;
}

function equalCalculate() {
  const oprationValue = operate();
  result.innerText = oprationValue;
  firstNum = oprationValue;
}

function numberClick(event) {
  clickedNum = event.target.innerText;
  if (firstFlag !== true) {
    firstNum = firstNum + clickedNum;
    result.innerText = firstNum;
  } else {
    secondNum = secondNum + clickedNum;
    result.innerText = secondNum;
    secondFlag = true;
  }
}

function operatorClick(event) {
  const clickedOperator = event.target.innerText;
  if (firstFlag !== true) {
    firstFlag = true;
  }
  if (firstFlag === true && secondFlag === true) {
    calculate();
  }
  selectedOperator = clickedOperator;
}

function resetClick() {
  resetAll();
}

function equalClick() {
  if (firstFlag === true && secondFlag === true) {
    equalCalculate();
  }
}

function backClick() {
  if (firstFlag !== true) {
    if (firstNum !== "" && firstNum.toString().length !== 0) {
      const numLength = firstNum.toString().length;
      firstNum = String(firstNum).substring(0, numLength - 1);
      result.innerText = firstNum;
    }
    if (firstNum.toString().length === 0) {
      firstNum = "";
      result.innerText = "0";
    }
  } else {
    if (secondNum !== "" && secondNum.toString().length !== 0) {
      const numLength = secondNum.toString().length;
      secondNum = String(secondNum).substring(0, numLength - 1);
      result.innerText = secondNum;
    }
    if (secondNum.toString().length === 0) {
      secondNum = "";
      result.innerText = firstNum;
      secondFlag = false;
    }
  }
}

numbers.forEach(function (number) {
  number.addEventListener("click", numberClick);
});

operators.forEach(function (oprator) {
  oprator.addEventListener("click", operatorClick);
});

reset.addEventListener("click", resetClick);

equal.addEventListener("click", equalClick);

back.addEventListener("click", backClick);

function init() {
  result.innerText = "0";
}

init();
