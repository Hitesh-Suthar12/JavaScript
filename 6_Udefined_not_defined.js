// Undefined is the place holder which is capt inside the varible, it is completely different from not defined.
/*
1. Undefined is like a placeholder till a variable is not assigned a value.
2. undefined !== not defined
3. JS- weakly typed language since it doesn't depend on data type declarations.
*/

/*
Undefined:

"Undefined" is a special value in JavaScript. When a variable is declared but has not been assigned a value, it is said to have the value "undefined" by default.
It can also be the value returned by a function that doesn't explicitly return anything, or it can be assigned to a variable explicitly.

For example:

    let x; // x is declared but has the value undefined
    console.log(x); // Outputs: undefined
    
    function foo() {}
    const result = foo(); // result has the value undefined
    
    const y = undefined; // y is explicitly assigned the value undefined

*/

/*
Not Defined:

"Not defined" is a different concept and refers to a situation where an identifier (variable or function) has not been declared or is not in scope at all. Attempting to use such an identifier will result in a ReferenceError.
This can happen if you try to access a variable or function that hasn't been declared, or if you're trying to access it in a scope where it's not accessible.

For example:

    console.log(z); // ReferenceError: z is not defined (z has not been declared)
    
    function bar() {
      console.log(innerVar); // ReferenceError: innerVar is not defined (out of scope)
}

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
