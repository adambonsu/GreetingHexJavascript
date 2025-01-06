# GreetingHexJavascript

## Hexagonal Architecture Overview

Hexagonal Architecture, also known as Ports and Adaptors, is a software design pattern that aims to create loosly coupled application components.
It separates the core logic of an application from its external concerns.

Key components in this architecture are:

1. Core: Contains the main business logic (`Greeting`)
2. Ports: Interfaces that define how the core interacts with the outside world (`UserInterface`)
3. Adaptors: Implementations of ports that handle external interactions (`StringUserInterface`)

Benefits of this architecture include:

- Separation of concerns
- Improved testability
- Flexibility to change external components without affecting the core logic

## Setup

1. Ensure you have Node.js installed on your system.
2. Clone this repository:

```
git clone git@github.com:adambonsu/GreetingHexJavascript.git`
cd GreetingHexJavascript
```

3. Install dependencies: `npm install`

## Running the Application

To run the main application: `npm start`.
To run the tests: `npm test`.

## Development

- To add new features, create appropriate files in the `src` directory following the hexagonal architecture principles.
- Add corresponding test files in the `tests` directory.
- Ensure all tests pass before committing changes.

## Project Structure Explanation

Each file has a single responsibility:

- `greeting.js` contains the core domain logic
- `greetingPort.js` defines the interface for adapters
- `consoleAdapter.js` implements the adapter for console output
- `greetingService.js` orchestrates the use of the port
- `main.js` serves as the entry point, wiring up the dependencies
