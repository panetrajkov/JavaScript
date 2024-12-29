// Student Exercise - #1

/* Manipulate the DOM
Select the first div
Select all paragraphs
Select the last div
Select the header 3 in the last div
Select the header 1 in the last div
Get the text from the first paragraph in the second div
Add the word "text" to the text element in the second div
Change the text of the header 1 in the last div
Change the text of the header 3 in the last div
Note:You can't change the HTML */

const firstDiv = document.getElementById("first");
console.log("Our first div is", firstDiv);
const allParagraphs = document.querySelectorAll("p");
console.log("Here are all paragraphs in our document", allParagraphs);
const allDiv = document.querySelectorAll("div");
console.log("Our last div is:", allDiv[allDiv.length - 1]);
const lastDivExample = allDiv[allDiv.length - 1];
// console.log(lastDivExample);
const headerThreeLastDiv = lastDivExample.querySelector("h3");
console.log("This is our H3 in last div: ", headerThreeLastDiv);
const headerOneLastDiv = lastDivExample.querySelector("h1");
console.log("Here is the H1 in last div: ", headerOneLastDiv);
const textFirstPSecDivNoText =
  document.getElementsByClassName("paragraph second");
const textFirstPSecDivText = textFirstPSecDivNoText[0].textContent;
console.log(
  "I represent you the text in first paragraph, but second div: ",
  textFirstPSecDivText
);
const secondDivTextElement = document.querySelector(".anotherDiv text");
secondDivTextElement.textContent += '"text"';
console.log('Adding "text" in the 2nd div, text element', secondDivTextElement);
headerOneLastDiv.textContent = "Changing the Header 1";
console.log(
  "We have changed the H1 in last div to: ",
  headerOneLastDiv.textContent
);
headerThreeLastDiv.textContent = "Changing the Header 3";
console.log(
  "We also updated the H3 in last div to: ",
  headerThreeLastDiv.textContent
);
