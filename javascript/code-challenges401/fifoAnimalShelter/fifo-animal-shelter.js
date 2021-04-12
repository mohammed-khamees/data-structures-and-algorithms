"use strict";

class Dog {
  constructor(name) {
    this.type = "dog";
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.type = "cat";
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
    this.front = null;
  }

  enqueue(animal) {
    if (animal.type === "dog" || animal.type === "cat") {
      this.animals.push(animal);
      this.front = this.animals[0];
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if (!this.animals.length) return "The shelter is empty";
    if (pref === "dog" || pref === "cat") {
      let index = this.animals.indexOf(
        this.animals.filter((animal) => {
          return animal.type === pref;
        })[0]
      );

      let animal = this.animals.splice(index, 1);
      this.front = this.animals[0];

      return animal;
    }
    return null;
  }
}

module.exports = {
  Cat,
  Dog,
  AnimalShelter,
};
