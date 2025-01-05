const Greeting = require("../domain/greeting");
class UserInterface {
  constructor() {
    this.greeting = new Greeting();
  }
  greet(name) {
    throw new Error("Not implemented");
  }
}
module.exports = UserInterface;
