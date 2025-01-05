const UserInterface = require("../ports/user_interface");
class StringUserInterface extends UserInterface {
  constructor() {
    super();
  }
  greet(name = "World") {
    return this.greeting.greet(name);
  }
}
module.exports = StringUserInterface;
