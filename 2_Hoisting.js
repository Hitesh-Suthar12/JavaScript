// NOTE  =  Even before the line of code is executed, the memory place will be allocated to the variable and function.

// Hoisting in JavaScript allows you to access variables and function declarations before they are initialized or assigned a value in your code.

// Hoisting is phinomina in JavsScript by which you can access this variable & function even before you have initialized or you have put some value in it. You can access it without any error. 

/*

let x = 7;

function getName() {
  console.log("Nasmte js");
}

console.log(x);
getName();*/

// OutPut:
//  7
//  Nasmte js

// ************    ************    ************     ************
/*


getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Nasmte js");
}
*/

// OutPut:
// Nasmte js
// undefined -> it mean in 1st phase, memory will be allocate only

// ************    ************    ************     ************
/*

console.log(getName);
console.log(x);

function getName() {
  console.log("Nasmte js");
}
*/

// OutPut:
//   ƒ getName() {
//     console.log("Nasmte js");
//    }
// --> in this 1st phase - whole function will be copy to memory allocation phase, that's why it is visible
//   x is not defined  --> coz of there are no memory will initialize for x, that why it is print error - not define, x is not present in the code

// ************    ************    ************     ************
/*

console.log(getName);
var x = 5;
var getName = () => {
  console.log("Nasmte js");
}
console.log(x);

*/

// OutPut:
// undefined
// 5

// ************    ************    ************     ************
/*

console.log(getName);
var x = 15;
var getName = function() {
  console.log("Nasmte js");
}
console.log(x);

*/

// OutPut:
// undefined
// 15

/*

// ************    ************    ************     ************

getName();
console.log(x);
console.log(getName);

var x = 15;

function getName () {
  
}

var getName = () => {
  console.log("Nasmte js");
}
// -> in this case, this arrow function is behave like variable so it will output is getName is not define.

*/

// OutPut:
// undefined
// 15
