// function x() {
//   // here x is callback function
//   console.log("Namste!");
// }

// function y(x) {
//   // here y is takes x as a argument, so here y is the Higher order function
//   x();
// }

// Higher order function Defination :
// A function which takes another function as an argument or returns a function from it is known as higher order fucntion.

// Things learned:
// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// 5. If we use Array.prototype.function-name. This function is accessible to any array in your code.

let radius = [3, 5, 1, 9];

// here area, circumference, diameter all fuction are is the call back function
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// // here calculate fuction is the higher order function
// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// here calculate fuction is the higher order function
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log("this is solved using map function which is provided by Java script");
// this is solved using map function which is provided by Java script
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

console.log("this is regular basic way to use and solve without  map function");
// this is regular basic way to use and solve without  map function
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// nothing different between basic function and map function