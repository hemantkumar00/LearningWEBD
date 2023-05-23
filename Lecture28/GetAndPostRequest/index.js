const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/userdetail", (req, res) => {
  const { username, password } = req.query;
  console.log(req.query);
  res.send(username + password);
});

app.post("/userdetail", (req, res) => {
  console.log(req.body);
  res.send("post data is completed");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`),
);
