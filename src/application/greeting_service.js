class GreetingService {
  constructor(userInterface) {
    this.userInterface = userInterface;
  }
  greet(name) {
    return this.userInterface.greet(name);
  }
}

module.exports = GreetingService;
