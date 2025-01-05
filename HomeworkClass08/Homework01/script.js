let rows = prompt("Row number?");
let columns = prompt("Column number?");
let html = document.getElementById("kolona");

for (let i = 0; i < columns; i++) {
  html.innerHTML += `<th>column ${i + 1} </th>`;
}
let tabela = document.getElementById("tabela");
let row;
for (let i = 0; i < rows; i++) {
  row = `<tr>`;
  for (let j = 0; j < columns; j++) {
    row += `<td>row ${i + 1} - column ${j + 1}</td>`;
  }
  row += `</tr>`;
  tabela.innerHTML += row;
}
