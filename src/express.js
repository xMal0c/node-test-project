import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Pekka" },
  { id: 2, name: "Jaana" },
  { id: 3, name: "Teppo" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the app!");
});

app.get("/admin", (req, res) => {
  res.send("Admin page");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
