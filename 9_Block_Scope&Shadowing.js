// block scope are also lexical scope

/*
For Revision:
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

Things learned:
1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value stored in global memory and hence can be accessed outside block as well whereas same is not the case with let and const.

*/
 
// this is "Block" in Java Script (Space bitween 2 curly bracket)
// {
//  // Compound Statement
// }

// eg

// var a = 100; // this is shadowing of a variable who inside of blacket
// {
//   var a = 10; // this var can be access from local or also global.
//   let b = 20; // this b and c are in "Block Scope" or says in separet scope
//   const c = 30; // same as let b
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c);

// var a = 55; // this is in Global scope
// {
//   var a = 10; //  this is in Global scope
//   let b = 20; // this is in Block scope
//   const c = 30; // this is in Block scope
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10

// ************     ***************    **************   **********   *********

// let b = 5000; // this let is in script scope
// {
//   var a = 10; //  this is in Global scope
//   let b = 20; // this is in Block scope
//   const c = 30; // this is in Block scope
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(b); // 5000

// ************     ***************    **************   **********   *********

// const c = 100; // this is in script scope
// {
//   var a = 10; //  this is in Global scope
//   let b = 20; // this is in Block scope
//   const c = 30; // this is in Block scope
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(c); // 100

// ***************   ***********   **********   *************    ***********

// let a = 10;
// {
//     var a = 5;
// }
// // Output : SyntaxError: Identifier 'a' has already been declared

// let a = 10;
// {
//     let a = 5;
// }
// console.log(a); // 10
// // this is valid code.

// var a = 10;
// {
//   var a = 5;
// }
// console.log(a); // 5
// this is valid code.

// ***************** this all const are in Lexical scope *****************
// const a = 10;
// {
//     const a = 100;
//     {
//         const a = 200;
//         {
//             const a = 300;
//         }
//     }
// }
// console.log(a); // 10

// const a = 10;
// {
//     const a = 100;
//     {
//         const a = 200;
//         {
//             const a = 300;
//             console.log(a); // 300
//         }
//     }
// }

const a = 10;
{
  const a = 100;
  {
    {
      console.log(a); // 100 // const variable can access only nearest value
    }
  }
}
