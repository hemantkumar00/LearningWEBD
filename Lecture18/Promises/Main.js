const p = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber % 2 === 0) {
    resolve(randomNumber);
  } else {
    reject("err");
  }
});

p.then((data) => {
  console.log(data);
  return data + 10;
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
