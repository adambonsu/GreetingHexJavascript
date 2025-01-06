const Greeting = require("../../src/domain/greeting");

describe("Greeting", () => {
  describe("name not provided", () => {
    it("should return a greeting", () => {
      const greeting = new Greeting();
      expect(greeting.greet()).toBe("Hello");
    });
  });
  describe("name provided", () => {
    it("should return a greeting with the name", () => {
      const greeting = new Greeting();
      expect(greeting.greet("Adam")).toBe("Hello Adam");
    });
  });
});
