// CallBack Theory

function add(n1, n2) {
  let sum = n1 + n2;

  print(sum);
}

for (let i = 0; i <= 1; i++) {
  function print(val) {
    console.log(val);
  }
  add(3, 7);
}
