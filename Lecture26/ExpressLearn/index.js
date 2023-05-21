// const joke = require("give-me-a-joke");
// const colors = require("colors");

// joke.getRandomDadJoke((joke) => {
//   console.log(joke.green);
// });

// const express = require("express");

// const app = express();

// app.listen(8000, (req, res) => {
//   console.log("server is running at port 8000");
// });

const express = require("express");
const colors = require("colors");

const app = express();

// console.log(app);

app.get("/", (req, res) => {
  res.status(200).send("<h1>This is home route!</h1>");
});

app.get("/about", (req, res) => {
  res.status(500).send("Internal server tab");
});

app.use((req, res) => {
  console.log("application running");
  res.send("hello from server");
});

app.listen(8000, (req, res) => {
  console.log("server is running at port 8000".red);
});
