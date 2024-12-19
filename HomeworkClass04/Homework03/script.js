// // Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it

function rechenica(array) {
  let sum = "";
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let someArray = ["Hello ", "there ", "students ", "of ", " SEDC", "!"];
let result = rechenica(someArray);
console.log(result);

let anotherArray = ["One pac, ", 2, " pac, ", 3, " pac 4"];
let resultTwo = rechenica(anotherArray);
console.log(resultTwo);
