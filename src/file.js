// Import the 'fs' module for file system operations
const fs = require("fs");

// Get command line arguments, excluding the first two (node path and file path)
const args = process.argv.slice(2);
// The first argument is assumed to be the name
const name = args[0];

// Use the 'fs' module to write a new file called 'hello.txt'
// The content of the file is a string that says 'Hello, ' followed by the provided name
fs.writeFile("hello.txt", `Hello, ${name}!`, (err) => {
  // Log 'Done!' to the console once the file has been written
  console.log("Done!");
});
