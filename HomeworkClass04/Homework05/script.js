// Looping structures
// Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

let arr = [3, 5, 6, 8, 11];

function loopingStructure(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  let sum = minValue + maxValue;
  console.log(
    `Max Value is ${maxValue}; while Min Value is ${minValue} and the Sum Value of both is ${sum}`
  );
}

loopingStructure(arr);
