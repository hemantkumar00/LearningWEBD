const express = require("express");
const app = express();
const path = require("path");

const todos = [
  "learn JavaScript",
  "Do DSA Question",
  "Coding Platform",
  "multi Vendor",
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/hello", (req, res) => {
  res.render("index");
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);

  res.render("random", { randomNumber });
});
app.get("/todo", (req, res) => {
  res.render("todo", { todos });
});

app.listen("8000", (req, res) => {
  console.log("server starting at 8000");
});
