/*

Animal Class Homework

## Requirements

Create a class `Animal` with the following properties and methods:

### Properties

- `name`: Name of the animal
- `type`: Dietary type (carnivore/herbivore/omnivore)
- `age`: Age of the animal
- `size`: Size of the animal
- `isEaten`: Boolean flag indicating if the animal has been eaten (default: false)

### Methods

#### eat(input)

The `eat` method should check if the input is an Animal instance and handle the following cases:

1. If input is an Animal and this animal is herbivore:

   - Log: "The animal (this animal name) is a herbivore and does not eat other animals"

2. If input is an Animal and this animal is not herbivore:

   - If the input animal's size is less than half of this animal's size:
     - Set input animal's `isEaten` property to true
     - Log: "The animal (this animal name) ate the (input animal name)"
   - If the input animal's size is twice as large or larger:
     - Log: "The animal (this animal name) tried to eat the (input animal name) but it was too large"

3. If input is not an Animal:
   - Log: "The animal (this animal name) is eating (input)"

*/

class Animal {
  constructor(name, type, age, size, isEaten = false) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = isEaten;
  }

  eat(input) {
    if (!(input instanceof Animal)) {
      console.log(`The animal ${this.name} is eating ${input.name}`);
    } else if (this.type === "herbivore") {
      console.log(
        `${this.name} is a herbivore and does not eat other animals.`
      );
      return;
    } else if (this.type === "carnivore" || this.type === "omnivore") {
      if (input.size < this.size / 2) {
        input.isEaten = true;
        console.log(`The animal ${this.name} ate the ${input.name}.`);
      } else if (input.size >= this.size * 2) {
        console.log(
          `The animal ${this.name} tried to eat the ${input.name} but it was too large.`
        );
      }
    }
  }
}

class Carnivore extends Animal {
  constructor(name, type, age, size, isEaten) {
    super(name, type, age, size, isEaten);
  }
}

class Herbivore extends Animal {
  constructor(name, type, age, size, isEaten) {
    super(name, type, age, size, isEaten);
  }
}

class Omnivore extends Animal {
  constructor(name, type, age, size, isEaten) {
    super(name, type, age, size, isEaten);
  }
}

const zebra = new Herbivore("Zebra", "herbivore", 17, 180, false);
const panther = new Carnivore("Panther", "carnivore", 12, 400, false);
const antelope = new Herbivore("Antelope", "herbivore", 15, 150, false);
const tiger = new Carnivore("Tiger", "carnivore", 17, 1000, false);
const shark = new Carnivore("Shark", "carnivore", 12, 50, false);

panther.eat(zebra);
zebra.eat(panther);
antelope.eat(zebra);
tiger.eat(panther);
shark.eat(tiger);
