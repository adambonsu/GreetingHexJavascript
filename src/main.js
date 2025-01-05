const StringUserInterface = require("./adapters/string_user_interface");
const GreetingService = require("./application/greeting_service");

const userInterface = new StringUserInterface();
const greetingService = new GreetingService(userInterface);
console.log(greetingService.greet("Adam"));
