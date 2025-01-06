const GreetingService = require("../../src/application/greeting_service");
const StringUserInterface = require("../../src/adapters/string_user_interface");

describe("GreetingService", () => {
  describe("String User Interface", () => {
    it("should return a string containing a greeting", () => {
      const greetingService = new GreetingService(new StringUserInterface());
      expect(greetingService.greet()).toBe("Hello");
    });
  });
});
