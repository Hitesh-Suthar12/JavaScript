//  Trust issues with setTime out.
// js is synchronous single threaded language, that was beauty of java script.

// Things learned:
// 1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms.
// 2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

console.log("Start");

setTimeout(function cb() {
  // here cd is call back
  console.log("Call Back");
}, 5000);

console.log("End");

// million lines

// let startDate = new Date(); // when you type on Console is "new Date" , the output is - Sat Jul 22 2023 18:10:30 GMT+0530 (India Standard Time),  this is current date when the function was called.

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Expires");

// output :
// Start
// End
// While Expires // after 10 second it is print
// Call Back // this is wait in call back que for 10 sec, isteat of 5 sec.

// *************************************   ******************************  *********************
// if setime out is set to 0 milisecond,then what happen.
// --> this is print as same as regular print, mean setTime out will first go to call back que, then wait for empty of execution context,  while call stack is empty then setTime will print.
console.log("Start");

setTimeout(function cb() {
  console.log("Call Back");
}, 0);

console.log("End");

// output:
// Start
// End
// Call Back // this is print after the call stack will empty or Global execution context will pop out.
