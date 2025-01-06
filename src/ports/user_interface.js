const Greeting = require("../domain/greeting");
class UserInterface {
  constructor() {
    this.greeting = new Greeting();
  }
  // eslint-disable-next-line no-unused-vars
  greet(_name) {
    throw new Error("Not implemented");
  }
}
module.exports = UserInterface;
