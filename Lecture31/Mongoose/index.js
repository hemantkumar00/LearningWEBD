// const express = require("express");
const mongoose = require("mongoose");
// const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("CONNECTION OPEN"))
  .catch(() => console.log("SOME ERR"));

const movieSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  year: Number,
  isWatched: Boolean,
});

const Movie = mongoose.model("Movie", movieSchema);

// const Avengers = new Movie({
//   name: "Avengers",
//   rating: 8,
//   year: 2015,
//   isWatched: false,
// });

// Avengers.save()
//   .then(() => console.log("Movie saved successfully"))
//   .catch(() => console.log("Some error in saving movie"));

// const port = 3000;
// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:3000`),
// );

// Movie.create({ name: "John Wick", rating: 9, year: 2023, isWatched: false })
//   .then(() => console.log("Movie is Created"))
//   .catch(() => {
//     "Some error in saving movie";
//   });

// Movie.find({ name: "Avengers" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Movie.updateOne({ name: "Avengers" }, { year: 2000 }).then(() =>
//   Movie.find({ name: "Avengers" })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)),
// );

// async function print() {
//   const movieName = await Movie.findById("64761b8d62feabeab1b3f37d");
//   console.log(movieName);
// }
// print();
