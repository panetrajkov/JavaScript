// Student Exercise - #2

/* Weight calculator in chickens
Want to know how you weigh in chickens? No problem!

Write a function named weightInChickens that:
Takes an input weight in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph*/

let oneChicken = 0.5;
let resultsDiv = document.querySelector("#result");

function weightInChickens() {
  let input = parseFloat(prompt("Enter your weight in kilograms"));
  let result = input / oneChicken;
  resultsDiv.textContent += `Your weight equals to ${result} chickens`;
  console.log(`Your weight equals to ${result} chickens`);
}

weightInChickens();
