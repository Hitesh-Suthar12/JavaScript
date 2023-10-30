// NOTE : If not code anything, still java script run the code, and also make call Stack and memory located.
// this is work only in java script

var x = 5; // This Global
let y = 15; // Global
const z = 25; /// Gloabl

// only in the function all code is local variable or Local execution, but out of any function in all under the Global varibale or Global execution contest
function a() {
  var b = 2; // local
  console.log("1st ", this.b); // undefined
  console.log("1st 2nd ", b); // undefined
}

console.log("2nd ", window.x); // 5
console.log("3rd ", this.y); // undefined
// you can also target the value by adding 'window' and 'this' (but adding data type is "var" to be added, do not add let or const)
console.log("4th ", z); // 25
a();
console.log("5th ", this === window);
// output:
//       2nd  5
//       3rd  undefined
//       4th  25
//       1st  undefined
//       1st 2nd  2
//       5th  true
