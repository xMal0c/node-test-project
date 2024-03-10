// HTTP SERVER
// Run: node src/app.js
// Open: http://localhost:3000

// Import the 'http' module to create an HTTP server
import * as http from "http";

// Define the hostname and port where the server will run
const hostname = "127.0.0.1";
const port = 3000;

// Create the server
// The server responds to all requests with a status code of 200 (OK)
// and a plain text message "Hello World"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

// Start the server
// The server listens on the specified hostname and port
// When the server starts, a message is logged to the console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
