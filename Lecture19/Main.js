// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     let randomNumber = Math.floor(Math.random() * 10);
//     console.log(randomNumber);
//     if (randomNumber % 2 == 0) {
//       res("This is even number");
//     } else {
//       rej("Not even");
//     }
//   }, 1000);
// });

// p.then((data) => {
//   console.log(data);
//   return "hello";
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = new Promise((resolve, reject) => {
//   resolve("this is message1");
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("this is message2");
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is message3");
//   }, 3000);
// });

// const pro = Promise.all([p1, p2, p3]);

// pro
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log("Some error");
//   });

// const pro1 = Promise.race([p1, p2, p3]);

// pro1
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log("Some error");
//   });

// const fs = require("fs");

// // function cb(err, data) {
// //   if (!err) {
// //     console.log(data);
// //   }
// // }

// // fs.readFile("q.html", "utf-8", cb);

// let readFilePromises = fs.promises.readFile("q.html", "utf-8");

// readFilePromises
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Err");
//   });

// let a = setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// setTimeout(() => {
//   clearInterval(a);
// }, 3000);

// function firstname(fname) {
//   console.log(fname);
//   return function sec(lname) {
//     console.log(fname + "  " + lname);
//   };
// }
// let fun = firstname("Hemant");
// fun("Kumar");

let a = true;

setInterval(() => {
  if (a) console.log("Hello World");
}, 1000);

setTimeout(() => {
  a = false;
}, 10010);
