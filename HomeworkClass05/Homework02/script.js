// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
/* Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
Bonus: enter the values from prompt() or read them from HTML */

const book = {
  title: "The Robots of Dawn",
  author: "Isaac Asimov",
  readingStatus: false,
  bookFunction: function () {
    if (this.readingStatus === true) {
      console.log("Already read 'The Robots of dawn' by Isaac Asimov");
    } else {
      console.log(
        "You still need to read 'Mockingjay: The Final Book of TheHunger Games' by Suzanne Collins."
      );
    }
  },

  input: function () {
    promptValue = prompt(`Have you read ${this.title}?\nAnswer with Yes/No`);
    if (promptValue === "yes") {
      console.log(`Already read '${this.title} by Isaac Asimov`);
    } else if (promptValue === "no") {
      console.log(
        "You still need to read 'Mockingjay: The Final Book of TheHunger Games' by Suzanne Collins."
      );
    } else {
      console.log("Incorrect input");
    }
  },
};

book.bookFunction();
book.input();
