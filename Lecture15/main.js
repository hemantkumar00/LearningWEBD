const person = {
  name: "Hemant",
  age: 24,
  isAdult: true,
  favCars: ["mercdes", "pagani", "fortuner", "scorpio"],
};

// const p1 = Object.create(person);

// const p2 = Object.create(p1);

const p1 = {
  __proto__: person,
};

console.log(p1);
