// Things learned:
// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

// Wow! Fantastic tutorial. Diagrams were very helpful in demonstrating this concept:

// 1. The callstack inside the JS engine only executes one function at a time
// 2. But the call stack can access different Web APIs from the browser using the window object
// 3. Functions like setTimeout, addEventHandler, and Fetch are actually browser functionalities
// 4. When these functions are executed, they are sent to the callback queue too wait until the js callstack is empty
// 5. The event loop continuously monitors both the callback (or Task) queue and the callstack, and then sends pending functions to the callstack when it is empty
// 6. However, functions that have some a promise (such as Fetch()) are actually sent to the microtask queue, which has higher priority than the callback queue.These functions are executed first
 
// setTimeout is not a part of javascript.
// Also DOM APT's is not a part of javascript.
// fetch() 
// lcoal storage
// console.log
// Location 
// this all above is part of browser, not a javascript.  