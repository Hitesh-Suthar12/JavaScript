// the most frequently asked (setTimeout + Closures in a loop) hot trending JS Interview question. 🔥This question will strengthen your knowledge and understanding of Closures and will also help you in your frontend/full stack/ web development interview. We will start with an easy JS question and slowly move to the hard and tricky interview question.

/*
 
Things learned:
1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

*/

// function x() {
//   var i = 5;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
//   console.log("Namaste JavaScript!");
// }
// x();

//output : 
// Namaste JavaScript!
// 5

// ************** using var in for loop ******************   ***************

// function x() {
//   for (var i = 1; i <= 5; i++) { // in this var varible refering the same memory location so it print same number
//     setTimeout(function () {
//       console.log(i);
//     }, i * 2000);
// }
// console.log("Namaste JavaScript!");
// }
// x();

// output
// Namaste JavaScript!
// 6
// 6
// 6
// 6
// 6

// **************  using let in for loop  ******************   ***************

// function x() {
//     for (let i = 1; i <= 5; i++) { // in this let is Block scope so each setTimeout is called by loop and make new variable, that's why print 1 2 3 4 5 
//       setTimeout(function () {
//         console.log(i);
//       }, i * 2000);
//   }
//   console.log("Namaste JavaScript!");
//   }
//   x();
// output
// Namaste JavaScript!
// 1
// 2
// 3
// 4
// 5

// **************   *****************   ******************   ***************

function x() {
  for (var i = 1; i <= 5; i++) { // here we using "var" instead of using 'let'
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, i * 2000);
    }
    close(i);
  }
  console.log("Namaste JavaScript!");
}
x();
 
// output :
// Namaste JavaScript!
// 1
// 2
// 3
// 4
// 5