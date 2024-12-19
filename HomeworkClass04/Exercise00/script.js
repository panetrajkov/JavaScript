// Write a JavaScript program that will read in a number and write out its digits

let number = [123456789];
let stringConversion = "";
let i = 0;
while (i < number.length) {
  stringConversion += number[i].toString();
  console.log(stringConversion);
  i++;
}
