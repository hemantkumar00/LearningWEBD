class Car {
  constructor(name, price, color, isDiskBreak) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.isDiskBreak = isDiskBreak;
  }
  getCarName() {
    console.log(this.name);
  }

  //getter function
  get getPrice() {
    return this.name;
  }
  //setter function

  set setPrice(price) {
    this.price = price;
  }

  static print() {
    console.log("Static function");
  }
}

class RacingCar extends Car {
  constructor(name, price, color, isDiskBreak, maxSpeed, elements, weight) {
    super(name, price, color, isDiskBreak);

    this.maxSpeed = maxSpeed;
    this.elements = elements;
    this.weight = weight;
  }
}

const c1 = new Car("BMW", "$10000", "red", true);
const r1 = new RacingCar("BMW", 200, "Red", true, 700, "CarbonFiber", 100);

c1.getCarName();
