# README

This repository contains JavaScript unit tests written using Mocha and Chai assertion libraries. Each task focuses on different aspects of testing, including basic tests, combining descriptions, using Chai assertion library, spies, stubs, hooks, async tests, skipping tests, basic integration testing, regex integration testing, deep equality, and post integration testing.

## Setup

1. **Install Dependencies:** Before running the tests, make sure to install the required dependencies using npm:

```bash
npm install
```

## Running Tests

Each task has its own test suite file. To run the tests for a specific task, use the following command:

```bash
npm test <filename>
```

Replace `<filename>` with the appropriate test file name. For example, to run the tests for Task 0, use:

```bash
npm test 0-calcul.test.js
```

## Task Summaries

### Task 0: Basic Test with Mocha and Node Assertion Library

- Created a function `calculateNumber` to round two numbers and return their sum.
- Implemented basic tests using Mocha and Node assertion library.

### Task 1: Combining Descriptions

- Upgraded the `calculateNumber` function from Task 0 to accept an additional argument `type` (SUM, SUBTRACT, or DIVIDE).
- Implemented tests for different types of operations using Mocha and Node assertion library.

### Task 2: Basic Test Using Chai Assertion Library

- Replicated Task 1 using the Chai assertion library for behavior-driven development style tests.

### Task 3: Spies

- Introduced Sinon library to create spies.
- Implemented tests using spies to verify function calls and behavior.

### Task 4: Stubs

- Expanded on Task 3 by using stubs to control the behavior of a wrapped function.
- Demonstrated stubbing expensive methods or APIs for efficient testing.

### Task 5: Hooks

- Utilized Mocha hooks (`beforeEach` and `afterEach`) to execute functions before and after tests.
- Demonstrated the usage of hooks for setup and cleanup tasks.

### Task 6: Async Tests with Done

- Learned to support async testing using the `done` callback.
- Ensured proper execution of asynchronous tests.

### Task 7: Skip

- Showcased the use of skipping tests instead of removing or commenting them out.
- Provided insights into scenarios where skipping tests is beneficial.

### Task 8: Basic Integration Testing

- Conducted integration tests using Mocha and request module to test API endpoints.
- Verified correct responses and status codes for different API routes.

### Task 9: Regex Integration Testing

- Enhanced integration tests to include endpoint validation using regex.
- Ensured proper handling of different types of requests and status codes.

### Task 10: Deep Equality & Post Integration Testing

- Expanded API testing to include deep equality checks and testing POST requests.
- Demonstrated testing endpoints with different request methods and responses.

Feel free to explore each task's test files for detailed implementations and examples. Happy testing! 🧪🚀
