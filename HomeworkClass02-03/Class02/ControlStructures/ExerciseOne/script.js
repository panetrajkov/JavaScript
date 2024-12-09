/* Description: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
*/

let visitorValue = prompt("How much money do you have?");
console.log(visitorValue);
let parsedVisitorValue = parseInt(visitorValue);
console.log(parsedVisitorValue);
let positiveAnswer = prompt("Are you willing to go outside?");
if (visitorValue >= 20) {
  if (positiveAnswer === "yes") {
    console.log("Call 223305");
    console.log("Prepare yourself nice pair of pants and shoes and go outside");
  } else {
    console.log("You have no friends");
  }
} else {
  console.log("You have insufficient money to do anything.");
}
