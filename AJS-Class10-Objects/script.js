/*

= Basic =
• Place the JSON cars.json to your GitHub repository. Use the fetch method to get the data from the server. Display the cars data in a table.

= Medium =
Add inputs to filter the data:

• By type (input type: select)
• By brand (input type: select)
Add a search button. When clicked the table should be filtered by the selected filters.

= Advanced =
Add these additional inputs:

• By model (input type: text input)
• By doors (input type: number input)
• By gasType (input type: select)
• By color (input type: text OR select)
• By new/old (input type: radio or checkbox) - you are free to choose the input type and the way you want to display the data (just new, just old, both, etc.)
• By horsepower (input type: number, range input) - you are free to choose the input type and the way you want to display the data (exact value, up to value, etc.)
Make sure all filters are working together. When a filter is selected, it should be considered in the filtering process.

Example: if I select BMW from the brand filter, the table should be filtered by the selected brand. If I select BMW and color white, the table should be filtered by the selected brand and color.

= Bonus:
1. Add a button Reset filters to reset the table to its initial state (before any filtering was applied), and reset all filter inputs to default values.
2. If no data is found, display a message No data found instead of the table.
3. Use partial searching for the text inputs. Example: if I type ol in the model input, the table should be filtered by all cars that have ol in their model name (polo, volvo, etc.).
*/

// Link
// https://github.com/panetrajkov/JavaScript/blob/main/AJS-Class10-Objects/cars.json

let carsData = [];

async function fetchCars() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/panetrajkov/JavaScript/refs/heads/main/AJS-Class10-Objects/cars.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch car models");
    }
    const data = await response.json();
    carsData = data;
    // console.log(data);

    const keysFromData = Object.keys(data[0]); // [i] will access the key just data will log it's numeric value as index
    console.log("Keys:", keysFromData);

    const valuesFromData = Object.values(data[0]);
    // console.log("Values:"); // console.log("Values:", valuesFromData.forEach) not working properly
    console.log("Values:", valuesFromData.forEach);
    valuesFromData.forEach((value) => console.log(value));
    console.log(data);
    generateTable(data);
  } catch (error) {
    console.error("We received an error", error.message);
  }
}

const clickableButton = document.getElementById("button");
clickableButton.addEventListener("click", fetchCars);

function generateTable(data) {
  const table = document.getElementById("table");
  const headers = document.createElement("tr");
  if (data.length === 0) {
    table.innerHTML = "<h3>No data found!<h3/>";
    return;
  }
  const keys = Object.keys(data[0]);

  table.innerHTML = "";

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headers.appendChild(th);
  });
  table.appendChild(headers);

  data.forEach((car) => {
    const row = document.createElement("tr");

    keys.forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = car[key];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  document.body.appendChild(table);
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  table.innerHTML = "";
});

function typeFilter(type, data) {
  if (type === "") return data;
  return data.filter(
    (vehicle) => vehicle.type.toLowerCase() === type.toLowerCase()
  );
}

function brandFilter(brand, data) {
  if (brand === "") return data;
  return data.filter(
    (vehicle) => vehicle.brand.toLowerCase() === brand.toLowerCase()
  );
}

function modelFilter(model, data) {
  if (model === "") return data;
  return data.filter((vehicle) =>
    vehicle.model.toLowerCase().includes(model.toLowerCase())
  );
}

function doorsFilter(doors, data) {
  if (doors === "") return data;
  return data.filter((vehicle) => vehicle.doors === parseInt(doors));
}

function gasFilter(gas, data) {
  if (gas === "") return data;
  return data.filter(
    (vehicle) => vehicle.gasType.toLowerCase() === gas.toLowerCase()
  );
}

function colorFilter(color, data) {
  if (color === "") return data;
  return data.filter((vehicle) =>
    vehicle.color.toLowerCase().includes(color.toLowerCase())
  );
}

function newOrOldFilter(isNew, data) {
  if (!isNew) return data;
  return data.filter((vehicle) => vehicle.isNew);
}

function horsepowerFilter(range, data) {
  if (!range) return data;
  return data.filter((vehicle) => vehicle.horsepower >= range);
}

const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => {
  search(carsData);
});

function search(data) {
  const typeValue = document.getElementById("type").value;
  const brandValue = document.getElementById("brand").value;
  const modelValue = document.getElementById("model").value;
  const doorsValue = document.getElementById("doors").value;
  const gasValue = document.getElementById("gasType").value;
  const colorValue = document.getElementById("color").value;
  const isNewValue = document.getElementById("isNew").checked;
  const horsepowerRange = document.getElementById("horsepower-range").value;

  let filteredData = typeFilter(typeValue, data);
  filteredData = brandFilter(brandValue, filteredData);
  filteredData = modelFilter(modelValue, filteredData);
  filteredData = doorsFilter(doorsValue, filteredData);
  filteredData = gasFilter(gasValue, filteredData);
  filteredData = colorFilter(colorValue, filteredData);
  filteredData = newOrOldFilter(isNewValue, filteredData);
  filteredData = horsepowerFilter(horsepowerRange, filteredData);
  generateTable(filteredData);
}
