// Register User
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string
// Finally print the string in a new p element on the screen

document.getElementById("button").addEventListener("click", userRegistration);

function userRegistration() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const string = anotherFunction(firstName, lastName, email, password);
  const paragraphText = document.getElementById("paragraph");
  paragraphText.textContent = string;
}

function anotherFunction(firstName, lastName, email, password) {
  return `User: ${firstName} ${lastName}, Email: ${email}, Password: ${password}`;
}
