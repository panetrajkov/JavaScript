/* Write a JavaScript function which accepts a parameter and returns
its type and prints it in the console. */

function objectFunction(type) {
  return typeof type;
}

let type;
console.log(objectFunction(type));

type = 5;
console.log(objectFunction(type));

type = "Texty text";
console.log(objectFunction(type));

type = true;
console.log(objectFunction(type));

console.log(objectFunction(document));
