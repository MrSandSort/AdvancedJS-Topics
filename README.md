# AdvancedJS-Topics
Some of the advanced topics ranging from event loops to iterators and generators in JS

### Execution Context
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


