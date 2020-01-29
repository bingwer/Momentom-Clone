function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, "years of age.");
}

function sayHello2(name, age) {
  console.log(`Hello! ${name} you are ${age} years old`);
}

function sayHello3(name, age) {
  return `Hello! ${name} you are ${age} years old`;
}

const greetNicolas = sayHello3("Nicolas", 14);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiple: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiple = calculator.multiple(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.plus(5, 5);

console.log("Hi!");
sayHello("Nicolas", 15);
sayHello2("Nicolas", 15);
console.log(greetNicolas);
console.log(plus, minus, multiple, divide, power);
