class Greeting {
  // if name is not provided, it defaults to "Hello"
  greet(name) {
    const message = name === undefined ? "Hello" : `Hello ${name}`;
    return message;
  }
}
module.exports = Greeting;
