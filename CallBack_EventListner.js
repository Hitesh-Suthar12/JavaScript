// What is callBack function in JavaScript?
// ---> you already know  that, function are First class citizens in java script.
//  that mean you take a function and passed to another function, this is known CallBack function.

//---->  Java Script is a synchronous and single-threated language.
// this execute line by line or specific order.

// eg
// setTimeout(() => {
//   console.log("Timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// }); // here over y is call back function
// // output : x y timer

// eg :
// setTimeout(function () {}) // here, 'function (){}' this is known is call back function, coz it will call later after time execute.

// ****************************************************************************************

// Blocking the main thread.

// Power of the Call Back.

// Deep about Event listeners.
// let count = 0;
// document.getElementById("clickAdd").addEventListener("click", function abc() {
//   console.log("Count - ", ++count);
// });

// in this Event listener, function is call back function.

// Closures Demo with Event listeners
function attachEventListener() {
  let count = 0;
  document.getElementById("clickAdd").addEventListener("click", function abc() {
    console.log("Count - ", ++count);
  });
  document
    .getElementById("clickLess")
    .addEventListener("click", function xyz() {
      console.log("Count - ", --count);
    });
}
attachEventListener();
// ****************************************************************************************

// Scope Demo with Event listeners

// Garbage Collection & removeEventListeners.
// ----> Event listener are heavy (it consume memory), Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

// ****************************************************************************************
// Things learned:
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is single threaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
