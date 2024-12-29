// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let div = document.getElementById("storage");
let recipePrompt = prompt("Please tell us the name of the recipe");
let ingredientsAmount = prompt(
  "How many ingredients do we need for the recipe?\nAnswer in digits"
);
let ingredientCollection = "<ol>";
for (let i = 0; i < ingredientsAmount; i++) {
  let singleIngredient = prompt("Please tell us the name of every ingredient");
  ingredientCollection += `<li>${singleIngredient}</li>`;
}
ingredientCollection += "</ol>";

div.innerHTML = `<h2>The recipe name is ${recipePrompt}</h2>`;
div.innerHTML += `<p>The name of the ingredients are:</p>`;
div.innerHTML += ingredientCollection;

//  Table is not working, please guide me what am I missing here
// Ги оставам коментариве и кодот за да видите отприлика што чепкав
let recipeTable = document.getElementById("table");
recipeTable.innerHTML = `<table>`;
// recipeTable.innerHTML += `<tr>`;
// recipeTable.innerHTML += `<th>`;
// recipeTable.innerHTML += `Recipe should be here`;
recipeTable.innerHTML += `<tr><th>Recipe</th><th>Ingredient</th></tr>`;
// recipeTable.innerHTML += `Ingredient should be here`;
// recipeTable.innerHTML += `</th>`;
// recipeTable.innerHTML += `</tr>`;

for (let i = 0; i < ingredientsAmount; i++) {
  let singleIngredient = prompt("Please tell us the name of every ingredient");
  recipeTable.innerHTML += `<tr><td>${recipePrompt}</td> <br> <td>${singleIngredient}</td></tr>`;

  //   recipeTable.innerHTML += `<tr>`;
  //   recipeTable.innerHTML += `<td>${recipePrompt}</td>`;
  //   recipeTable.innerHTML += `<td>${singleIngredient}</td>`;
  //   recipeTable.innerHTML += `</tr>`;
}
recipeTable.innerHTML += `</table>`;
recipeTable.setAttribute("style", "border: 5px solid black");
