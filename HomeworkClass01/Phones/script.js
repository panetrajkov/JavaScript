/* Write a JavaScript program that will calculate the price of 30 Phones,
where the price of one phone is $119.95 and the tax rate is 5%. */

let totalPhones = 30;
let pricePerPhone = 119.95;
let taxRate = 0.05;
let phonePrice = totalPhones * pricePerPhone;
console.log(phonePrice);
let tax = phonePrice * taxRate;
console.log(tax);
let priceWithTax = phonePrice + tax;
console.log(priceWithTax);