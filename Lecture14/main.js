const arr = [
  "string",
  24,
  true,
  function () {
    console.log("Hello World");
  },
];

// arr = [20, 30]; // can not do this with const

console.log(arr);
console.log(arr[3]());

arr[1] = 25;

console.log(arr);

console.log(arr);

arr.push("Mango");

console.log(arr);

arr.unshift("Grapes");

console.log(arr);

for (let item of arr) {
  console.log(item);
}

// delete arr[5];

// console.log(arr);

console.log(arr.splice(1, 0, "Hello", "Uncle"));

console.log(arr);

arr.forEach((x, index, arr) => {
  console.log(x * x);
});

console.log(arr);

console.log(arr.indexOf("Hello"));

const objectArr = [
  { name: "Hmant", age: 22, cith: "Jodhpur" },
  { name: "Heman", age: 22, cith: "Jodhpur" },
  { name: "Hemat", age: 22, cith: "Jodhpur" },
  { name: "Hemnt", age: 22, cith: "Jodhpur" },
];

// console.log(objectArr.find((item) => (item.name = "Hmant")));

console.log(objectArr.filter((item) => item.age <= 22));

console.log(arr.map((item) => item * item));

arr.sort((a, b) => b - a);
console.log(arr);

console.log(arr.reduce((sum, curr) => sum + curr, 0));

Objects;

const obj = {
  name: "Hemant",
  age: 22,
  favColor: "blue",
  printFn: function () {
    console.log("Hello World");
  },
  true: "orange",
  alive: true,
};

console.log(obj["name"]);

console.log(Object.keys(obj));

for (let key in obj) {
  console.log(obj[key]);
}

obj.printFn();

obj.city = "Jodhpur";

console.log(obj);
