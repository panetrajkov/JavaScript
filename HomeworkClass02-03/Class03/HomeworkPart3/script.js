//  Write a javascript function for an ATM

userBalance = 12500;

// let userWithdraw = userBalance - parseInt(type);

function atmFunction(balance, withdrawing) {
  if (withdrawing > balance) {
    console.log("Not enough money.");
  } else {
    console.log("You have successfully withdrawn " + withdrawing);
    newBalance = balance - withdrawing;
    console.log("You now have " + newBalance);
  }
}
let withdraw = parseInt(
  prompt("Enter the amount of money you want to withdraw.")
);
atmFunction(userBalance, withdraw);
