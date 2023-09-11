// NOTE : If not code anything, still java script run the code, and also make call Stack and memory located.
// this is work only in java script

var x = 5; // This Global
let y = 5; // Global
const z = 5; /// Gloabl

// only in the function all code is local variable or Local execution, but out of any function in all under the Global varibale or Global execution contest
function a() {
  var b = 2; // local
  console.log(this.b);
}

console.log(window.x);
console.log(this.y);
// you can also target the value by adding 'window' and 'this' (but adding data type is "var" to be added, do not add let or const)
console.log(z);
a();
console.log(this === window);
// output:
//       5
//       undefined
//       5
//       undefined
//       true
