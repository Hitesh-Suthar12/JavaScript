// Closure in JS
// ---> Closure : Combination of Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! Thank you so much, Akshay for this. :)

/*

// function along with its lexical scope forms a clousure.

.......Q)What is closure?
Ans -> Closure is a function bundled with its lexical environment closed to that function
simply function + its Lexical environment

and closures have very special place in runtime environment

The fun in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript!!

....Q)  What does the closure do in my JavaScript programs?
Ans -> Whenever I call a function in JavaScript the closure maintains its values(lexical environment) and function in its own runtime and when that specific function executed, it returns with own environment even the variable vanished after its execution

*/

/*
---> Use of Closures:
1. Module Design pattern
2. Currying
3. Function like once
4. Memoize
5. Maintaining state in async world.
6. setTimeouts
7. Iterators
8. and many more....

*/

// eg;
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// // outPut : 7

// *****************************         ***************************************

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// // ...... thousand of line over here
// z(); // if do not add "z()" here, then u not get "7" in ouput.

// // // output
// // ƒ y() {
// //     console.log(a);
// // }
// // 7

// *****************************         ***************************************

// you can directly add return, this is also same as previous in which return y.

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
// // ......
// z();

// // output
// ƒ y() {
//     console.log(a);
// }
// 7

// *****************************         ***************************************

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// // ......
// z();

// // output
// ƒ y() {
//     console.log(a);
// }
// 100

// *****************************         ***************************************

function z() {
  // this is closure (z) = 900
  var b = 900;
  function x() {
    // this is closure (x) = 7
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

// output: 
// 7 900