// Exercise 3
/* Create a student registry form. The form should have:

First Name
Last Name
Age

The form should have a save button which will create a student object and add it to an array (students). Log the array after every save to see the results in the console.
Bonus: Make the students appear in an unordered list in the page. */

const students = [];

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// Формата го override submit копчето
// const submitButton = document.querySelector("#button");
// submitButton.addEventListener("click", function (event) {
//   preventDefault();
// });

// Preventing page to refresh
const newForm = document.querySelector("#newForm");
newForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("We have submitted the form, but page won't refresh");
});
newForm.addEventListener("submit", creatingStudentArray);

function unorderedList() {
  let div = document.getElementById("result");
  let html = "<ul>";
  for (const student of students) {
    html += `<li>${student.firstName} ${student.lastName} ${student.age}</li>`;
  }
  html += "</ul>";
  div.innerHTML = html;
}

function creatingStudentArray() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const student = new Person(firstName, lastName, age);
  students.push(student);
  console.log(students);
  unorderedList();
}
