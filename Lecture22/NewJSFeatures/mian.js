function add(a, b, ...args) {
  return a + b;
}

// console.log(add(1, 2));

//spread operator

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(20, ...arr, 40));

//destructuring of arrays, objects

let arr1 = ["new Delhi", "agra", "chandigarh", "mumbai", "banglore"];

const [city1, city2, , city4] = arr1;
console.log(city1, city2, city4);

//error handling in JS
