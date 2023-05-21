const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send("this is response from server");
// });

app.get("/", (req, res) => {
  //Home route this is entry point to application
  res.send("This is our home route");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;

  res.send(`you are watching ${subreddit} thanks`);
});

app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  res.send(`<h1>you are viewing ${username}'s profile</h1>`);
});

app.get("/about", (req, res) => {
  res.send("This is my about route");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(q);
});

app.listen(8000, (req, res) => {
  console.log("Server is listning on port 8000");
});
