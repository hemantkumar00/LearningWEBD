let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = myArr.map((x) => x * x);

// console.log(newArr);

// Custom Function

function mapPollyFil(arr, cb) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function square(x) {
  return x * x;
}

console.log(mapPollyFil(myArr, square));

function filterMethod(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function even(x) {
  return x % 2 == 0;
}

console.log(filterMethod(myArr, even));

// Writing own map function   Polyfil is when we write advance function on own to support old browsers.
