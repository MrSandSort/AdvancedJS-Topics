# AdvancedJS-Topics
Some of the advanced topics ranging from event loops to iterators and generators in JS

### Execution Context
The Execution Context in JavaScript is an environment where code is executed and evaluated. It determines which variables and functions are accessible at any given point during execution. 

There are three main types of execution contexts:

1. Global Execution Context (GEC)
-The default context when a JavaScript file runs.
-Creates the window object (in browsers) or global object (in Node.js).
-this refers to window in the global scope.

2. Function Execution Context (FEC)

- Created whenever a function is called.
- Each function call gets its own execution context.
- Maintains its own variables and scope.

3. Eval Execution Context
- Created when JavaScript's eval() function is executed.
- Executes code inside eval() in its own context.

#### Phases of Execution Context

Each execution context is created in two phases:

1. Creation Phase (Memory Creation Phase)
- Variables and function declarations are stored in memory.
- var variables are hoisted and initialized to undefined.
- let and const variables are hoisted but remain uninitialized (in a "temporal dead zone").
- 
Function declarations are stored with their full definitions.

2. Execution Phase
- The code is executed line by line.
- Variables get assigned values.
- 
Function calls create new execution contexts.

#### Call Stack and Execution Context

JavaScript uses a Call Stack to manage execution contexts.
- Global Execution Context (GEC) is pushed onto the stack.
When a function is called:
- A new Function Execution Context (FEC) is created and pushed onto the stack.

When the function completes, its context is popped off the stack.

The Call Stack ensures execution follows the Last-In-First-Out (LIFO) principle.


### Promises and Promises.all
### Async Js with Event Loop
### Promises chaining 
### Prototypal Inheritance
### This and binding context
### Async await
### Iterators and generators 
### ES Module and Common Js

Since nodeJs is a single threaded, event loop handles multiple asynchronous tasks concurrently within a single thread.

## How does event loop works?
--> Event loop handles the synchronous task at first and then goes for asynchronous task. Async heavy tasks like I/O operations, database query,
file server, networks are thereby sent to thread pool which is managed by libuv library. Since these tasks might block the event loops where worker
threads are required. After that, event loop waits until the call stack is empty meaning all synchronous task are completed. Then it checks for 
event queue for callback after the events are completed. Then, callback function are sent to the call stack and they gets executed.


