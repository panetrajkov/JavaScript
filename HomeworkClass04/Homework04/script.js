// Looping structures
// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let str = "";
for (n of array) {
  if (n % 2 === 0) {
    str += n + "\n";
  } else {
    str += n + " ";
  }
}
console.log(str);
