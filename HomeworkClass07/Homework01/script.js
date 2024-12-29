// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

const paragraphArray = document.getElementsByClassName("paragraph");
console.log(paragraphArray);
const firstParagraph = paragraphArray[paragraphArray.length - 2];
console.log(firstParagraph);
firstParagraph.textContent = "Changing the text content of the first paragraph";

const secondParagraph = paragraphArray[paragraphArray.length - 1];
console.log(secondParagraph);
secondParagraph.textContent =
  "Changing the text content of the second paragraph";

const firstHeader = document.getElementById("myTitle");
console.log(firstHeader);
firstHeader.textContent = "Changing the first header";

const allH1 = document.querySelectorAll("h1");
console.log(allH1);
const secondHeader = allH1[2];
console.log(secondHeader);
secondHeader.textContent = "Changing the second header";

const thirdHeader = document.querySelector("h3");
console.log(thirdHeader);
thirdHeader.textContent = "Changing the last H3 header";
