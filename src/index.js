// Import the 'createTable' function from the 'generateTable.js' file
import { createTable } from "./generateTable.js";

// Get command line arguments, excluding the first two (node path and file path)
let args = process.argv.slice(2);

// Convert the first two arguments to numbers
let rowInput = Number(args[0]);
let columnInput = Number(args[1]);

// Check if the inputs are numbers
if (!isNaN(rowInput) && !isNaN(columnInput)) {
  // If they are, generate a table with the given number of rows and columns
  let tableString = createTable(rowInput, columnInput);
  // Log the generated table to the console
  console.log(tableString);
} else {
  // If the inputs are not numbers, log an error message to the console
  console.log("Syötetyt arvot virheelliset. Anna kaksi kokonaislukua.");
}
