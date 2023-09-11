// function x() {
//   // here x is callback function
//   console.log("Namste!");
// }

// function y(x) {
//   // here y is the Higher order function
//   x();
// }

// Things learned:
// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// 5. If we use Array.prototype.function-name. This function is accessible to any array in your code.

let radius = [3, 5, 1, 9];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
