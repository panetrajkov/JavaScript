// Write a function that will take an array of 5 numbers as an argument and return the sum.

function someFunction(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let someArray = [1, 2, 3, 4, 5];
let result = someFunction(someArray);
console.log(result);

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(arrayTwo) {
  for (let i = 0; i < arrayTwo.length; i++) {
    if (isNaN(arrayTwo[i])) {
      console.log(`That's invalid number(NaN) ${arrayTwo[i]}.`);
    } else {
      console.log(`The numbers are valid: ${arrayTwo[i]}.`);
    }
  }
}

let arrayTwo = [1, 2, 3, "haha", "kikiki", 2];
let trueNumber = validateNumber(arrayTwo);
