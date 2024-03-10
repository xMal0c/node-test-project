// Export a function named 'createTable'
export function createTable(rows, columns) {
  // Initialize an empty string to build the table
  let tableString = "";

  // Loop over the number of rows
  for (let rowNumber of Array(rows).keys()) {
    // For each row, loop over the number of columns
    for (let columnNumber of Array(columns).keys()) {
      // For each cell, calculate the product of the (row number + 1) and (column number + 1)
      // and append it to the table string, followed by a space
      tableString += `${(rowNumber + 1) * (columnNumber + 1)} `;
    }
    // After each row, append a newline character to the table string
    tableString += "\n";
  }

  // Return the final table string
  return tableString;
}

// The following line is commented out, but if uncommented, it would make 'createTable' the default export of this module
// module.exports = createTable;
