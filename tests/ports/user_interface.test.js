const UserInterface = require("../../src/ports/user_interface");

describe("UserInterface", () => {
  describe("greet", () => {
    it("should throw an exception", () => {
      const userInterface = new UserInterface();
      expect(() => userInterface.greet()).toThrow("Not implemented");
    });
  });
});
