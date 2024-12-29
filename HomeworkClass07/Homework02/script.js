// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equation as well ( 2 + 4 + 5 = 11)

const array = [1, 2, 3, 4, 5];

function printNumbers() {
  let html = "<ol>";
  let div = document.getElementById("store");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    html += `<li>${array[i]}</li>`;
  }
  html += "</ol>";
  html += `<p>The result is ${sum}</p>`;
  let mathEquation = array[0] + array[1] + array[2] + array[3] + array[4];
  console.log(mathEquation);
  html += `<p>This is the result from our math equation ${mathEquation}</p>`;
  div.innerHTML = html;
  return `The result is ${sum}`;
}
console.log(printNumbers());
