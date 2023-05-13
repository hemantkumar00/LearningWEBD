//JSON datatypes.

//BASONN => Boolean, Arrays, String, Object, Null Numbers

//Key : Value Pairs

const person = {
  name: "John doe",
  age: 24,
  city: "Delhi",
  favColors: ["red", "blue", "green"],
};

const JSONdata = JSON.stringify(person);
console.log(JSONdata);

const obj = JSON.parse(JSONdata);
console.log(obj);
