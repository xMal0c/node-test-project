export function createTable(rows, columns) {
  let tableString = "";

  for (let rowNumber of Array(rows).keys()) {
    for (let columnNumber of Array(columns).keys()) {
      tableString += `${(rowNumber + 1) * (columnNumber + 1)} `;
    }
    tableString += "\n";
  }

  return tableString;
}

// module.exports = createTable;
