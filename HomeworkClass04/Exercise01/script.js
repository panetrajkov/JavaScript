// Find numbers in array
// How many times is a number contained in an array
// call the function three times with different arrays

function findNumber(number, array) {
  let occurrences = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      occurrences++;
    }
  }
  console.log(
    `There is/are ${occurrences} occurrence(s) of number ${number} in the array.`
  );
}

findNumber(5, [5, 25, 25, 25252, 95422455]);
findNumber(15, [15, 25, 155, 25252, 15, 95422455]);
findNumber(55, [5, 25, 55, 25252, 55, 55, 55, 95422455]);
