const numericKeys = document.querySelectorAll(".numeric-key");
const calculation = document.getElementById("calculation");
let operatorKeys = document.querySelectorAll(".operator-key");
const equals = document.getElementById("equals");
const clearKey = document.querySelector(".backspace-key");
const decimalKey = document.getElementById("decimal-key");
let calculationValue = "0";
let previousVal = "";
let operator = "";

console.log(numericKeys);

calculation.textContent = "0";

function addToDisplay(value) {
  if (calculation.textContent === "0") {
    calculation.textContent = value;
  } else {
    calculation.textContent += value;
  }
}

for (let i = 0; i < numericKeys.length; i++) {
  numericKeys[i].addEventListener("click", (event) => {
    const value = event.target.textContent;
    addToDisplay(value);
  });
}

function clearDisplay() {
  calculation.textContent = "0";
  previousVal = "";
  operator = "";
}

operatorKeys.forEach((key) => {
  key.addEventListener("click", (event) => {
    previousVal = calculation.textContent;
    operator = event.target.textContent;
    calculation.textContent = "0";
  });
});

equals.addEventListener("click", () => {
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(previousVal) + parseFloat(calculation.textContent);
      break;
    case "-":
      result = parseFloat(previousVal) - parseFloat(calculation.textContent);
      break;
    case "*":
      result = parseFloat(previousVal) * parseFloat(calculation.textContent);
      break;
    case "/":
      result = parseFloat(previousVal) / parseFloat(calculation.textContent);
      break;
    default:
      result = console.error("Error");
      break;
  }

  calculation.textContent = result;
});

clearKey.addEventListener("click", () => {
  if (calculation.textContent.length > 1) {
    calculation.textContent = calculation.textContent.slice(0, -1);
  } else if (calculation.textContent !== "0") {
    calculation.textContent = "0";
  }
});
