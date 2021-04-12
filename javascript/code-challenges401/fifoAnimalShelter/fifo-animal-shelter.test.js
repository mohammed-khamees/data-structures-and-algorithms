"use strict";

const { AnimalShelter, Dog, Cat } = require("./fifo-animal-shelter");

class Bird {
  constructor(name) {
    this.type = "bird";
    this.name = name;
  }
}

describe("Animal Shelter tests", () => {
  it("add to the Animal Shelter ", () => {
    let dog = new Dog("hoho");
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue(dog);
    expect(animalShelter.animals.length).toBe(1);
    expect(animalShelter.front).toMatchObject(dog);
  });

  it("add multiple to the Animal Shelter", () => {
    let dog = new Dog("hoho");
    let cat = new Cat("meow");
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);

    expect(animalShelter.animals.length).toBe(2);
    expect(animalShelter.front).toMatchObject(dog);
  });

  it("should not return null if the type is not dog or cat", () => {
    let bird = new Bird("coco");
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue(bird);
    expect(animalShelter.front).toBeNull();
  });

  it("remove the front from the Animal Shelter", () => {
    let dog = new Dog("hoho");
    let cat = new Cat("meow");
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    animalShelter.dequeue("dog");
    expect(animalShelter.animals.length).toBe(2);
    expect(animalShelter.front).toMatchObject(cat);
  });

  it("should not return null if the Animal Shelter is empty", () => {
    let animalShelter = new AnimalShelter();
    animalShelter.dequeue("dog");
    expect(animalShelter.animals.length).toBe(0);
    expect(animalShelter.front).toBeNull();
  });

  it("should not return null if the type is not dog or cat", () => {
    let dog = new Dog("hoho");
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue(dog);
    expect(animalShelter.dequeue("bird")).toBeNull();
  });
});
