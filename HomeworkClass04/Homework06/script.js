// // Looping structures
// Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let numVal = 1;
function fullNames(firstNames, lastNames) {
  let result = [];
  for (let i = 0; i < firstNames.length; i++) {
    let fullName = `${numVal}. ${firstNames[i]} ${lastNames[i]}`;
    console.log(fullName);
    result.push(fullName);
    numVal++;
  }
  return result;
}
console.log(fullNames(firstNames, lastNames));
