// async function abc() {
//   console.log("Hello");
//   throw "abc";
// }

// let temp = abc();
// console.log(temp);

const fs = require("fs");
const { resolve } = require("path");

// async function abc() {
//   let data = await fs.promises.readFile("index.html", "utf-8");
//   console.log(data);
//   return "Hello";
// }

// const a = abc();

// a.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

function abc() {
  return new Promise((res, rej) => {
    fs.promises
      .writeFile("index.html", "this is a string which is added")
      .then(() => {
        console.log("index.html file has been written");
      })
      .catch((err) => {
        console.log(err);
      });
    fs.promises.readFile("index.html", "utf-8").then((data) => {
      console.log(data);
    });
    res("Done");
  });
}

let p1 = abc();
console.log(p1);
