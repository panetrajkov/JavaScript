/*
Homework - Functions - Part 2

There is a JSON file with students. Make a call to the file and get the following data from it:
Return an array that will display only student's first name and last name as a string
All students sorted by the averageGrade property (ascending)
All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers -> Link: (https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json)
*/

function studentFunc(studentUrl) {
  return (
    fetch(studentUrl)
      .then(function (response) {
        const parsedResponse = response.json();
        return parsedResponse;
      })
      // .then(function (data) {
      //   console.log(data);
      // })
      .catch(function (error) {
        console.log(`You are unable to fetch the student function`, error);
      })
  );
}

// <- Call the student function ->
studentFunc(
  `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`
);

const firstNameLastName = async () => {
  const users = await studentFunc(
    `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`
  );
  //   console.log(users);
  return users;
};

(async () => {
  const users = await firstNameLastName();
  console.log(await firstNameLastName());
  const printFirstNameLastName = users.map(
    (student) => `${student.firstName} ${student.lastName}`
  );
  console.log(printFirstNameLastName); // <- Return an array that will display only student's first name and last name as a string
  const averageGradeList = users.map((student) => student.averageGrade);
  //   console.log(averageGradeList);
  const averageGradeSort = averageGradeList.sort((a, b) => a - b);
  console.log(averageGradeSort); // <- Ascending order
  const averageGradeHigherThanThree = users.filter(
    (student) => student.averageGrade > 3
  );
  console.log(averageGradeHigherThanThree); // <- All students with an average grade higher than 3
  const femaleStudentNames = users
    .filter((student) => student.gender === "Female")
    .filter((student) => student.averageGrade === 5);
  console.log(
    "Here is a list of all female names with average grade of 5:",
    femaleStudentNames
  ); // <- All female student names with an average grade of 5
  const maleStudentNames = users
    .filter((student) => student.gender === "Male")
    .filter((student) => student.age >= 18)
    .filter((student) => student.city === "Skopje");
  console.log(
    "Here is a list of all male student who live in Skopje and are either 18 or 18+ years old:",
    maleStudentNames
  ); // <- All male student full names who live in Skopje and are over 18 years old
  const avgGrdFemStudents = users
    .filter((student) => student.gender === "Female")
    .filter((student) => student.age >= 24)
    .filter((student) => student.averageGrade > 1);
  const printGradesFromFemales = avgGrdFemStudents.map(
    (student) => student.averageGrade
  );
  console.log(
    "Here is a list of all female students over the age of 24",
    avgGrdFemStudents,
    "and their average grades:",
    printGradesFromFemales
  ); // <- The average grades of all female students over the age of 24
  const maleStudentsStartingWithB = users
    .filter((student) => student.gender === "Male")
    .filter((student) => student.firstName.startsWith("B"))
    .filter((student) => student.averageGrade > 2);
  // .map((student) => student.averageGrade);
  const maleStudentsGradeOverTwo = maleStudentsStartingWithB.map(
    (student) => student.averageGrade
  );
  console.log(
    "Here are the males whose name starts with 'B'",
    maleStudentsStartingWithB,
    "and average grade over 2:",
    maleStudentsGradeOverTwo
  ); // <- // All male students with a name starting with B and average grade over 2
})();
