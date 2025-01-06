const StringUserInterface = require("../../src/adapters/string_user_interface");

describe("StringUserInterface", () => {
  describe("greet", () => {
    it("should return a string containing a greeting", () => {
      const stringUserInterface = new StringUserInterface();
      expect(typeof stringUserInterface.greet()).toBe("string");
      expect(stringUserInterface.greet()).toBe("Hello");
    });
  });
});
