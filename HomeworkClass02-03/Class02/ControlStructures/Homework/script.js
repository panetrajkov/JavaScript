/* Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in*/
// Formula for Chinese Zodiac calculation: (year - 4) % 12. Possible values:

let zodiacQuestion = prompt(
  "Would you like to know which Chinese Zodiac is the given year?"
);
let zodiacAnswer = prompt("Enter a year");
let zodiacInYears = parseInt(zodiacAnswer);
let result = (zodiacInYears - 4) % 12;
console.log(result);

if (result === 0) {
  console.log("Your Chinese Zodiac is Rat.");
} else if (result === 1) {
  console.log("Your Chinese Zodiac is Ox.");
} else if (result === 2) {
  console.log("Your Chinese Zodiac is Tiger");
} else if (result === 3) {
  console.log("Your Chinese Zodiac is Rabbit");
} else if (result === 4) {
  console.log("Your Chinese Zodiac is Dragon");
} else if (result === 5) {
  console.log("Your Chinese Zodiac is Snake");
} else if (result === 6) {
  console.log("Your Chinese Zodiac is Horse");
} else if (result === 7) {
  console.log("Your Chinese Zodiac is Goat");
} else if (result === 8) {
  console.log("Your Chinese Zodiac is Monkey");
} else if (result === 9) {
  console.log("Your Chinese Zodiac is Rooster");
} else if (result === 10) {
  console.log("Your Chinese Zodiac is Dog");
} else if (result === 11) {
  console.log("Your Chinese Zodiac is Pig");
}
