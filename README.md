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

## Development

After checking out the repo, run `npm start` to execute the `mains.js`.
Each file has a single responsibility:

- `greeting.js` contains the core domain logic
- `greetingPort.js` defines the interface for adapters
- `consoleAdapter.js` implements the adapter for console output
- `greetingService.js` orchestrates the use of the port
- `main.js` serves as the entry point, wiring up the dependencies
