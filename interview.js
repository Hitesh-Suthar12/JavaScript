/*

Things learned:
1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

*/
// *****************  ******************  *********************  ****************  ***************

// Q ->  What is a Closure in JavaScript?
// ----> A function along with a refference to its outer enviroonment, like together forms is closure.
// -----> other way - Closure is a combination of a fuction and its lexical scope bunddle together fomrs a closure.
// ---> each nd every function in js has access to it outer lexical environment.
// eg :
// function outer() {
//   var a = 5;
//   function inner() {
//     console.log(a);
//   }
// }
//  // output : 10

// function outer() {
//     var a = 5;
//     function inner() {
//       console.log(a);
//     }
//     return inner;
//   }
//   outer()();
//   output : 10

// *****************  ******************  *********************  ****************  ***************

// Q -> Can you give an example of a Closure in JS?

// Q -> Use of double parenthesis  ()() in JS

// *****************  ******************  *********************  ****************  ***************

// Q -> Are Let declarations closed over?
// function outer(b) {
//     function inner() {
//         console.log(a, b);
//     }
//     let a = 10;
//     return inner;
// }
// var close = outer("HelloWorld");
// close();

// output: 10 HelloWorld

// *****************  ******************  *********************  ****************  ***************

// Q -> Are function parameters closed over?
// function outest() {
//   var c = 50;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// var close = outest()("HelloWorld");
// close();
// output :  10 'HelloWorld' 50

// *****************  ******************  *********************  ****************  ***************

// Q -> Relation of Scope Chain and Closures

// *****************  ******************  *********************  ****************  ***************

// Q -> Conflicting name Global variables in JS
// function outest() {
//   var c = 50;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     // let a = 10; // if i comment out this line, then it will print 1000 instead of 10
//     return inner;
//   }
//   return outer;
// }
// let a = 1000; // this is completely new variable in Global scope
// // also if a = 1000 will be remove, it throw [ "refference error" or a is not define ]
// var close = outest()("HelloWorld");
// close();
// output :  10 'HelloWorld' 50

// *****************  ******************  *********************  ****************  ***************

// Q -> Advantages of Closure
//  Closure is most beautifull part of java script, it has lot of advantage.
// 1. it  is used in module pattern.
// 2. it is used in function currying.
// 3. Closure are used in high order function like - Memoize
// 4. imp.- It help to data hiding and excappsulation.

// *****************  ******************  *********************  ****************  ***************

// Q -> Data Hiding & Encapsulation in JavaScript?
//  the data hiding is like , suppose we have variable and have some data privacy over it, so other code can not access to this data.

// *****************  ******************  *********************  ****************  ***************

// Q -> Example of Data Privacy using Closures
//  in this code, we are hidding or privacy on the inside code, so from outer side we cannot call it.
// function counter() {
//   var count = 0;
//   return function incrementCount() {
//     count++;
//     console.log(count);
//   }
// }
// var counter1 = counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// var counter2 = counter(); // this will start from fresh line or start from 1
// counter2(); // 1
// counter2(); // 2
// counter2(); // 3

// *****************  ******************  *********************  ****************  ***************

// Q -> Function Constructor in JavaScript
// function Counter() {
//   var count = 0;
//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCount = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new Counter(); // use new keyWord bcoz it is constructor function
// counter1.incrementCount(); // 1
// counter1.incrementCount(); // 2
// counter1.incrementCount(); // 3
// counter1.incrementCount(); // 4

// counter1.decrementCount(); // 3
// counter1.decrementCount(); // 2

// var counter2 = new Counter(); // this is start from Zero
// counter2.decrementCount(); // -1
// counter2.decrementCount(); // -2
// counter2.decrementCount(); // -3

// *****************  ******************  *********************  ****************  ***************

// Q -> Disadvantages of Closures?
// 1. There could be over consuption of memory in Clousres.
// 2. there is not garbage collector.
// 3. There is also chance of memory leak.

// *****************  ******************  *********************  ****************  ***************

// Q -> What is a Garbage Collector in JavaScript?
//  Garbage collector is the program in java script engine , which will freeze the unutilized memory.
// like C or C++ in that there is no garbage collector.

// *****************  ******************  *********************  ****************  ***************

// Q -> Relation between Garbage Collection, Memory Leaks, and Closures?
//  eg:garbage collector
// function a() {
//     var x = 0;
//     function b() {
//         console.log(a);
//     }
// }
// a();
// ---> in that 'x' is not utilized in that function so after execute this line, memory of x wil be freeze, this is garbage collector.

// eg: Memory Leaks
// function a() {
//     var x = 0;
//     return function b() {
//         console.log(x); // 0
//     }
// }
// var y = a();
// y();

// *****************  ******************  *********************  ****************  ***************

// Q -> Example of Smart Garbage collection by V8 JS Engine in Chrome
function a() {
  var x = 0,
    z = 10; // ther z is remove by garbage collector bcoz it is not used in code, output is undefine
  return function b() {
    console.log(x); // 0
  };
}
var y = a();
y();
