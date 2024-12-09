// The Age Calculator

let userBirthInput = prompt("When were you born?");
let parsedAge = parseInt(userBirthInput);
let birthYear = parsedAge;
let currentYear = 2024;

function calculateAge(currentYear, birthYear) {
  let yearsOld = currentYear - birthYear;
  return yearsOld;
}

let finalResult = calculateAge(currentYear, birthYear);
console.log(`You are ${finalResult} years old.`);

console.log("===============");

let userAge = prompt("How old are you?");
let parsedAgeTwo = parseInt(userAge);
let birthYearTwo = parsedAgeTwo;
let currentYearTwo = 2024;

let finalResultTwo = calculateAge(currentYearTwo, birthYearTwo);
console.log(`You are being born in ${finalResultTwo}.`);

console.log("===============");

calculateAge(2024, 1991);
console.log(`You are ${calculateAge(2024, 1991)} years old.`);
calculateAge(2024, 1994);
console.log(`You are ${calculateAge(2024, 1994)} years old.`);
calculateAge(2024, 1996);
console.log(`You are ${calculateAge(2024, 1996)} years old.`);
