module.exports = function (x, y) {
  return x * y;
};

module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
};
