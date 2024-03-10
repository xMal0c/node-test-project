// Define a list of users
const users = [
  { id: 1, name: "Matti" },
  { id: 2, name: "Jaana" },
  { id: 3, name: "Teppo" },
];

// Define a route handler for GET requests to the root URL ("/")
app.get("/", (req, res) => {
  // Respond with a welcome message
  res.send("Welcome to the app!");
});

// Define a route handler for GET requests to the "/admin" URL
app.get("/admin", (req, res) => {
  // Respond with a message indicating that this is the admin page
  res.send("Admin page");
});

// Define a route handler for GET requests to the "/users" URL
app.get("/users", (req, res) => {
  // Respond with the list of users
  res.send(users);
});

// Define a route handler for GET requests to URLs like "/users/1", "/users/2", etc.
app.get("/users/:id", (req, res) => {
  // Extract the user ID from the URL parameters
  const userId = Number(req.params.id);
  // Find the user with the matching ID
  const user = users.find((user) => user.id === userId);
  // Respond with the found user
  res.send(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
