// Constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// New Keyword Binding
const p1 = new Person("Hemant", 22);

// This Keyword

// Global Binding
function fun() {
  this.self = "Nothing";
  console.log(this);
}

fun();

const information = {
  name: "Amit",
  age: 20,
  details: 999999999,
  email: "hello@hi.com",
};

//Implesit Binding
const user = {
  name: "raghav",
  age: 30,
  print: function () {
    console.log(this);
    console.log(this.age);
  },
};

user.print();

user.print.call(information);

const f1 = user.print.bind(information);

f1();
