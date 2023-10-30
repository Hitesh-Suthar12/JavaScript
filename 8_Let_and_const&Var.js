// TOPIC - Let, Const and Var
/*

* let & const in JavaScript behave differently when they are Hoisted. Understanding the difference between var, let and const in JS will help you write better code.
* let and const are in  a   " Temporal Dead Zone "   until they are initialized some value. You might encounter SyntaxError, TypeError or ReferenceError while using them in your code.

Things learned:
1. let and const are hoisted but its memory is allocated at other place, which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3*. "window.variable" OR "this.variable" will not give value of variable which defined by using let or const.
4. We cannot redeclare the same variable with let/const (even with using var the second time).
5*. const variable declaration and initialisation must be done on the same line.

6*. There are three types of error: 
[1] referenceError {given where variable does not have memory allocation} 
[2] typeError {given when we change type that is not supposed to be changed} 
[3] syntaxError {when proper syntax (way of writing a statement) is not used}.

7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.

8*. Initialising variables at the top is good idea, helps shrinks TDZ (Temporal Dead Zone) to zero.


  *******     ************ ***    ************    **************    **************   ************
so many things here. I would like to sum up in notes,

  -> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
  -> js use different memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
* -> level of strictness ... var << let << const.
  -> 'var' - no temporal dead zone, can redeclare and re-initialize, stored in GES(Global Execution Context)
     'let' - use TDZ(temporal dead zone), can't re-declare, *can re-initialize, stored in separate memory
     'const' - use TDZ, can't re-declare, *can't re-initialize, stored in separate memory

  -> syntax error is similar to compile error. while type and reference error falls under run time error.
  ->  syntax error    --->  violation of JS syntax
      type error      --->  while trying to re-initialize const variable
      reference error --->  while trying to access variable which is not there in global memory.
    
*/ 

// console.log(b); // undefine
// let a = 10;
// var b = 100;

// let a;
// console.log(a); //undefined
// a = 20;
// console.log(a); // 20

// *****   ******  SyntaxError  *******    *******
// const b;
// b = 1000;
// console.log(b); // SyntaxError: Missing initializer in const declaration
// for no error --> declaired in same line of const varible
// eg - const b = 1000;
//      console.log(b)// 1000

// *****   ******  SyntaxError  *******    *******
// let a = 50;
// let a = 10;
// console.log(a); //SyntaxError: Identifier 'a' has already been declared

// *****   ******  TypeError  *******    *******
// const z = 50;
// z = 30;
// console.log(z); // TypeError: Assignment to constant variable

// *****   ******  ReferenceError  *******    *******
// console.log(x); //ReferenceError: Cannot access 'x' before initialization
// let x = 1;
// you access the variable before initialzation, but if you use "var" , result should be "undefined"

// *****   ******  ReferenceError  *******    *******
// console.log(x); // ReferenceError: x is not defined
// let a = 20;

