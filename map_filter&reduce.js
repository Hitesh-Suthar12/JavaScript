// Map, filter & reduce Array functions are the most popular Higher-Order Functions in JavaScript.

// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes "accumulator" and "current" element of array) and another initial value of accumulator.

const arr = [5, 2, 1, 8, 10];

// ********************************* [ map function ] *********************************

// eg : Double - [10, 4, 2, 16, 20]
// Triple - [15, 6, 3, 24, 30]
// Binary - ["101", "10", "1", "1000", "1010"];

// // Using arrow function
// const double = arr.map((x) => 2 * x);
// console.log(double); // [10, 4, 2, 16, 20]

// // also you can using Normal function
// function tripple(x) {
//   return x * 3;
// }
// const outPut = arr.map(tripple);
// console.log(outPut); // [15, 6, 3, 24, 30]

// const binary = arr.map((x) => x.toString(2));
// console.log(binary); // ['101', '10', '1', '1000', '1010']

// ********************************* [ filter function ] *********************************

// const arr2 = [5, 2, 1, 8, 10, 23, 17];
// // find odd number
// const max = arr2.filter((x) => x % 2);
// console.log(max);

// find Even number in Array
// function isEven(x) {
//   return x % 2 === 0;
// }
// const evenNum = arr2.filter(isEven);
// console.log(evenNum);

// const isEven = arr2.filter((x) => x % 2 === 0);
// console.log(isEven);

// function greater(x) {
//   return x > 10;
// }
// const greaterNum = arr2.filter(greater);
// console.log(greaterNum);

// const lessNum = arr2.filter((x) => x < 10);
// console.log(lessNum);

// ********************************* [ Reduce function ] *********************************

const arr3 = [5, 2, 1, 8, 10, 23, 17];
// regular way to add sum or array
function sumArr(x) {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
}
const sumNum = sumArr(arr3);
console.log(sumNum);

// add sum of array using Reduce short hand function.
const array = [15, 2, 1, -5, 8, 130, 523, 17];
const sumArray = array.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sumArray);

// find Max number in given array
function maxNum(x) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
const maxNumber = maxNum(array);
console.log(maxNumber);

// now find max number using Reduce method
const maximunNum = array.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(maximunNum);

// find Min Number in Given Array

function minNumber(x) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
const minNumberIs = minNumber(array);
console.log(minNumberIs);

// Using reduce method find minimum number in array
const minNum = array.reduce(function (min, curr) {
  if (curr < min) {
    min = curr;
  }
  return min;
});
console.log(minNum);

// ********************************* [ Reduce function with more detail] *********************************

// Real world example for using Reduce method

const users = [
  { firstName: "Hitesh", lastName: "Suthar", age: 26 },
  { firstName: "Akshay", lastName: "saini", age: 26 },
  { firstName: "Hritik", lastName: "Roshan", age: 55 },
  { firstName: "Ankush", lastName: "Sharma", age: 35 },
];

// find full name from users
const fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);

// find person who have same age
const sameAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(sameAge); // {26: 2, 35: 1, 55: 1}

// find first name who's age is less then 30;
const lessAge = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(lessAge); //  ['Hitesh', 'Akshay']

//

const output = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
