// Create OBJECT animal with 2 properties and 1 method: name, kind, speak (method)
// This method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs

const animal = {
  name: "Parrot",
  kind: "Bird",
  sentence: "Hey bro!!!",
  promptValue: "",
  speak: function () {
    console.log(`${this.name} says: '${this.sentence}'`);
  },

  input: function () {
    promptValue = prompt("Enter your type of animal here");
    console.log(`${promptValue} says: '${this.sentence}'`);
  },
};

animal.speak();
animal.input();
