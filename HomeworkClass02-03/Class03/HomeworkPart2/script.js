/*
Write a JavaScript function that will return:
Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
*/

let type = prompt(
  "Are you human or dog? \n Enter 'h' for human or 'd' for dog."
);
let years = parseInt(prompt("Enter the age in numbers"));

function yearCalculator(type, age) {
  if (type === "d") {
    return age * 7;
  } else {
    return age / 7;
  }
}

console.log(yearCalculator(type, years));
