import { createTable } from "./generateTable.js";
// const createTable = require("./generateTable");

let args = process.argv.slice(2);

let rowInput = Number(args[0]);
let columnInput = Number(args[1]);

if (!isNaN(rowInput) && !isNaN(columnInput)) {
  let tableString = createTable(rowInput, columnInput);
  console.log(tableString);
} else {
  console.log("Syötetyt arvot virheelliset. Anna kaksi kokonaislukua.");
}
