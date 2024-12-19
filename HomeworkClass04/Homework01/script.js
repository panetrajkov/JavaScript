// Create a function called tellStory()
/* The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments*/

function tellStory(array) {
  return array[0] + " is " + array[1] + " and is " + array[2] + " all day";
}
let array = ["Pane", "sad", "studying"];
let result = tellStory(array);
console.log(result);
