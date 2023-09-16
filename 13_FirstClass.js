// Functiom Statement

// Creating a simple function is known as function statement.

// a(); // Function Statement
// function a() {
//   console.log("Function Statement");
// }
// a(); //Function Statement

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// Function Expression

// --> we can asign a function as a value

// b(); // TypeError: b is not a function
// var b = function b() { // b is not define bcoz we store a function in varible
//   console.log("Function Expression");
// };
// b(); // Function Expression

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// **imp : whtat is the different between function expression and function statement?
// ans --> different between function expression and function statement is only "Hoisting".

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// Function Declaration
// ---> Function Statement is known as function declaration.(same as function statement)

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// Anonymous Function
// --> Anonymous fucntion is when function used as value.
// function without name is known anonymous function.
// anonymous function does not have self identity.
/*
    function () {

    }
*/
//  output :
//  this code throw error - SyntaxError: Function statements require a function name

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// Named Function Expression
// --> this is similer to function expression
// eg :
// var x = function abc() {
//   console.log("Named Function Expression");
// };
// x(); // Named Function Expression
// abc(); // ReferenceError: abc is not defined

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// **imp : Different between Parameter & Arguments

// ---> the identifier or value , that are called parameter. parameter does not access from outside of fxn.
// eg :
// function x(param1, param2) { // this is parameter
//     console.log("Parameter");
// }
// // x(arguments)
// x(1, 4) // this is argument

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// First Class function
// ---> the ability to use function as values is known as function.
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//  --> First Class function and First class citizens both are same.

// ***********  ***********  ***********  ***********  ***********  ***********  ***********

// Arrow Function

// ***************************************************************************************

// Things learned:
// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//       For Ex  -  function xyz(){
//                             console.log("Function Statement");
//                        }

// 2.  What is Function Expression ?
// A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
//       For Ex - var a = function(){
//                             console.log("Function Expression");
//                     }

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//       For Ex - function(){
//                      }

// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
//       For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                      }

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );

// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" First Class Fxn ");
//                              }
//                      }

// 7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function

// ****************************  ***************  *****************

// (function (){
//     var a = 1;
//     console.log(a);// 1
// })();
// console.log(a); // a is not defined
