// Undefined is the place holder which is capt inside the varible, it is completely different from not defined.
/*
1. Undefined is like a placeholder till a variable is not assigned a value.
2. undefined !== not defined
3. JS- weakly typed language since it doesn't depend on data type declarations.
*/

var a = 55;
console.log(a); // 55

var b;
console.log(b); // undefined

if (b === undefined) {
  console.log("b is undefined - True"); //print - true
} else {
  console.log("b is not undefined - false");
}

b = "Hello JS";
console.log(b); // Hello JS

if (b === undefined) { 
  console.log("b is undefined - True");
} else {
  console.log("b is not undefined - false"); //print this
}

function foo(arg) {
  console.log(arg);
}
foo(); // Output: undefined, bcoz no argument passing

x = undefined; // this is not good thing to asign the udefined as a value
console.log(x); // undefined

// It's important to note that 'undefined' is a distinct value in JavaScript and is different from other falsy values like null, false, 0, NaN, or an empty string ("").
